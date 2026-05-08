#!/usr/bin/env node
// Figma送り用HTMLをビルドする。
// lp/index.html を読んで、以下を実行する:
//   1. <img src="https://..."> の CDN画像を fetch して Base64 化、data URI で埋め込む
//   2. <img src="./assets/..."> などローカル相対パス画像もファイル読み込み → Base64 化
//   3. Phosphor Icons の Web Components <script> タグを削除する（本体はインラインSVGに切替済みの想定）
//   4. Figma取り込み用リセットCSSを </head> 直前に注入する（スクロール出現系アニメーションで
//      要素が透明・ズレたまま取り込まれるのを防ぐ）
//   5. lp/figma-ready.html として書き出す
//
// これにより html.to.design の Editor タブにそのまま貼り付ければ、
// 画像もアイコンも全てFigmaにレイヤーとして取り込まれ、要素の欠損も起きない。

import { readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { resolve, dirname, relative, isAbsolute } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(__dirname, '..')
const lpRoot = resolve(projectRoot, 'lp')
const inputPath = resolve(lpRoot, 'index.html')
const outputPath = resolve(lpRoot, 'figma-ready.html')

const EXT_TO_MIME = {
  svg: 'image/svg+xml',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  webp: 'image/webp',
  avif: 'image/avif',
  ico: 'image/x-icon',
}

function guessMimeFromPath(pathOrUrl) {
  const clean = pathOrUrl.split('?')[0].split('#')[0]
  const ext = clean.split('.').pop()?.toLowerCase()
  return EXT_TO_MIME[ext] || 'application/octet-stream'
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes}B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`
  return `${(bytes / 1024 / 1024).toFixed(2)}MB`
}

function isHttpUrl(src) {
  return /^https?:\/\//i.test(src)
}

function isDataUri(src) {
  return /^data:/i.test(src)
}

// lp/index.html から見た相対パスを絶対パスに解決する。
// 対応: "./assets/xxx.png", "assets/xxx.png", "/assets/xxx.png"（プロジェクト lp/ からの絶対風）
function resolveLocalPath(src) {
  if (isAbsolute(src)) {
    // "/assets/..." のような root-relative は lp/ ディレクトリ基準で解決する
    // （未経験ユーザーでも動くように寛容に）
    const stripped = src.replace(/^\/+/, '')
    return resolve(lpRoot, stripped)
  }
  return resolve(lpRoot, src)
}

async function fetchAsBase64(url) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`)
  }
  const buf = Buffer.from(await res.arrayBuffer())
  const contentType = res.headers.get('content-type')?.split(';')[0]?.trim()
  const mime = contentType && contentType.startsWith('image/') ? contentType : guessMimeFromPath(url)
  return {
    dataUri: `data:${mime};base64,${buf.toString('base64')}`,
    bytes: buf.length,
    mime,
  }
}

async function readLocalAsBase64(src) {
  const absolutePath = resolveLocalPath(src)
  if (!existsSync(absolutePath)) {
    throw new Error(`local file not found: ${relative(projectRoot, absolutePath)}`)
  }
  const buf = await readFile(absolutePath)
  const mime = guessMimeFromPath(src)
  return {
    dataUri: `data:${mime};base64,${buf.toString('base64')}`,
    bytes: buf.length,
    mime,
  }
}

// Figma取り込み用リセット CSS。
// html.to.design は JS を実行しないため、スクロール出現系アニメーションで
//   .fade-in { opacity: 0; transform: translateY(40px); }
// のように「初期状態で隠す」実装が使われていると、.visible クラスが付かないまま
// 透明・ズレたレイアウトで Figma に取り込まれてしまう。
// これを防ぐため、全要素を可視化し、典型的なスクロール出現系クラス・属性の
// transform もリセットする CSS を注入する。
const FIGMA_RESET_CSS = `<style data-figma-reset>
/* ==========================================================
   Figma取り込み用リセット（build-figma-ready.mjs が自動注入）
   このブロックは Figma 書き出し専用。lp/index.html 側には入らない。
   ========================================================== */
*, *::before, *::after {
  animation: none !important;
  animation-delay: 0s !important;
  animation-duration: 0s !important;
  opacity: 1 !important;
  visibility: visible !important;
}
/* スクロール出現系でよく使われるクラス・属性は transform も強制リセット */
.fade-in, .fade-up, .fade-down, .fade-left, .fade-right,
.slide-in, .slide-up, .slide-down, .slide-left, .slide-right,
.reveal, .scroll-animate, .scroll-reveal, .animate-on-scroll,
.wow, .appear, .hidden-initial, .invisible-initial,
[data-aos], [data-animate], [data-scroll], [data-reveal] {
  transform: none !important;
  opacity: 1 !important;
  visibility: visible !important;
}
</style>`

function injectFigmaResetCss(html) {
  if (html.includes('data-figma-reset')) {
    return { html, injected: false, reason: 'already injected' }
  }
  if (/<\/head>/i.test(html)) {
    return {
      html: html.replace(/<\/head>/i, `${FIGMA_RESET_CSS}\n</head>`),
      injected: true,
      location: '</head>',
    }
  }
  if (/<\/body>/i.test(html)) {
    return {
      html: html.replace(/<\/body>/i, `${FIGMA_RESET_CSS}\n</body>`),
      injected: true,
      location: '</body>',
    }
  }
  // head/body が無い最低限のHTMLでも一応末尾に付ける
  return {
    html: `${html}\n${FIGMA_RESET_CSS}\n`,
    injected: true,
    location: 'EOF',
  }
}

async function main() {
  if (!existsSync(inputPath)) {
    console.error(`[error] input not found: ${relative(projectRoot, inputPath)}`)
    console.error(`        先に lp/index.html を生成してから実行してください。`)
    process.exit(1)
  }

  console.log(`Reading ${relative(projectRoot, inputPath)} ...`)
  let html = await readFile(inputPath, 'utf8')
  const originalSize = Buffer.byteLength(html, 'utf8')

  // <img src="..."> のユニークなsrcを収集
  const imgSources = new Set()
  const imgRegex = /<img\s+[^>]*?\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi
  for (const match of html.matchAll(imgRegex)) {
    const src = match[1]
    if (isDataUri(src)) continue
    imgSources.add(src)
  }

  const httpSources = [...imgSources].filter(isHttpUrl)
  const localSources = [...imgSources].filter((s) => !isHttpUrl(s))

  if (imgSources.size === 0) {
    console.log('No image <src> found to convert.')
  } else {
    console.log(
      `Found ${imgSources.size} image source(s): ${httpSources.length} remote + ${localSources.length} local. Converting to Base64 ...\n`,
    )
  }

  let successCount = 0
  let failCount = 0
  let totalBytes = 0

  // CDN画像: fetch → Base64
  for (const url of httpSources) {
    try {
      process.stdout.write(`  [remote] ${url}\n`)
      const { dataUri, bytes, mime } = await fetchAsBase64(url)
      html = html.split(url).join(dataUri)
      totalBytes += bytes
      successCount += 1
      console.log(`    ok (${mime}, ${formatBytes(bytes)})\n`)
    } catch (err) {
      failCount += 1
      console.warn(`    [warn] ${err.message} — leaving URL as-is\n`)
    }
  }

  // ローカル画像: readFile → Base64
  for (const src of localSources) {
    try {
      process.stdout.write(`  [local]  ${src}\n`)
      const { dataUri, bytes, mime } = await readLocalAsBase64(src)
      html = html.split(src).join(dataUri)
      totalBytes += bytes
      successCount += 1
      console.log(`    ok (${mime}, ${formatBytes(bytes)})\n`)
    } catch (err) {
      failCount += 1
      console.warn(`    [warn] ${err.message} — leaving src as-is\n`)
    }
  }

  // Phosphor Icons Web Components の <script> タグを削除（念のため残っていたら）
  const scriptPatterns = [
    /<script\b[^>]*phosphor-icons[^>]*>[\s\S]*?<\/script>/gi,
    /<script\b[^>]*@phosphor-icons\/webcomponents[^>]*>[\s\S]*?<\/script>/gi,
  ]
  let removedScripts = 0
  for (const pattern of scriptPatterns) {
    const before = html.length
    html = html.replace(pattern, '')
    if (html.length !== before) removedScripts += 1
  }
  if (removedScripts > 0) {
    console.log(`Removed ${removedScripts} Phosphor Icons <script> tag pattern(s).`)
  }

  // Figma取り込み用リセットCSS を注入（アニメーション初期状態による要素欠損を防ぐ）
  const injectResult = injectFigmaResetCss(html)
  html = injectResult.html
  if (injectResult.injected) {
    console.log(`Injected Figma reset CSS at ${injectResult.location}.`)
  } else {
    console.log(`Figma reset CSS already present — skipped (${injectResult.reason}).`)
  }

  await writeFile(outputPath, html)
  const finalSize = Buffer.byteLength(html, 'utf8')

  console.log('\n=== build complete ===')
  console.log(`  input:  ${relative(projectRoot, inputPath)}   (${formatBytes(originalSize)})`)
  console.log(`  output: ${relative(projectRoot, outputPath)}  (${formatBytes(finalSize)})`)
  console.log(`  images: ${successCount} ok, ${failCount} failed, ${formatBytes(totalBytes)} embedded`)

  if (failCount > 0) {
    console.log('\n[note] 失敗した画像はそのまま残っています。以下を確認してください:')
    console.log('  - CDN画像: URLが正しいか、ネットワークに繋がっているか')
    console.log('  - ローカル画像: ファイルが lp/assets/ に配置されているか')
  }
  console.log('\nNext: Figmaで html.to.design の Editor タブに lp/figma-ready.html の中身を貼り付けてください。')
}

main().catch((err) => {
  console.error('\n[fatal]', err)
  process.exit(1)
})
