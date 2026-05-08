# Design Tokens

FIEROのHP実装で使用するデザイン規約。CSS変数として実装すること。

## 色(Color Palette)

### ベース
```css
--color-background: #FAF6EE;        /* オフホワイト/エクル(ベース背景) */
--color-background-alt: #F2EBDC;    /* 少し濃いベース(セクション切替時) */
--color-surface: #FFFFFF;           /* カード等の前面 */
```

### アクセント(シャンパンゴールド)
```css
--color-accent: #C9A961;            /* メインアクセント */
--color-accent-light: #D4B876;      /* ホバー・ハイライト */
--color-accent-dark: #A88841;       /* テキストリンク・強調 */
```

### テキスト
```css
--color-text-primary: #2A2620;      /* 本文(柔らかい黒) */
--color-text-secondary: #6B6358;    /* 補足テキスト */
--color-text-muted: #9C9388;        /* メタ情報・キャプション */
--color-text-on-dark: #F4ECDA;      /* 暗い背景上のテキスト */
```

### 機能色
```css
--color-border: #E5DCC8;            /* 区切り線 */
--color-divider: #C9A961;           /* ゴールドの区切り(重要箇所) */
--color-overlay: rgba(26, 22, 16, 0.55);  /* ヒーロー画像のオーバーレイ */
```

## フォント(Typography)

### フォントファミリー
```css
--font-serif-jp: "Noto Serif JP", "Yu Mincho", "游明朝", serif;
--font-serif-en: "Cormorant Garamond", "Times New Roman", serif;
--font-sans-en: "Inter", "Helvetica Neue", sans-serif;
```

### Webフォントの読み込み
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### サイズスケール(基準: 16px)
```css
--text-xs: 0.75rem;     /* 12px - キャプション */
--text-sm: 0.875rem;    /* 14px - サブ情報 */
--text-base: 1rem;      /* 16px - 本文(標準) */
--text-lg: 1.125rem;    /* 18px - 強調本文 */
--text-xl: 1.25rem;     /* 20px - 小見出し */
--text-2xl: 1.5rem;     /* 24px - セクション小見出し */
--text-3xl: 1.875rem;   /* 30px - サブヘッダ */
--text-4xl: 2.25rem;    /* 36px - セクションタイトル */
--text-5xl: 3rem;       /* 48px - ヒーロー */
--text-6xl: 3.75rem;    /* 60px - 大見出し */
```

### ウェイト・行間
```css
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-bold: 700;

--leading-tight: 1.3;
--leading-normal: 1.6;
--leading-relaxed: 1.8;
--leading-loose: 2.0;       /* 日本語本文の標準 */
```

### レタースペーシング
```css
--tracking-tight: -0.01em;
--tracking-normal: 0;
--tracking-wide: 0.05em;
--tracking-wider: 0.1em;
--tracking-widest: 0.15em;   /* ブランド表記用(英字大文字) */
```

## レイアウト

### 最大幅
```css
--max-width-prose: 720px;     /* 読み物セクションの最大幅 */
--max-width-content: 1080px;  /* 通常セクションの最大幅 */
--max-width-wide: 1280px;     /* ヘッダー・フッターの最大幅 */
```

### 余白(Spacing Scale)
```css
--space-1: 0.25rem;     /* 4px */
--space-2: 0.5rem;      /* 8px */
--space-3: 0.75rem;     /* 12px */
--space-4: 1rem;        /* 16px */
--space-6: 1.5rem;      /* 24px */
--space-8: 2rem;        /* 32px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
--space-20: 5rem;       /* 80px */
--space-24: 6rem;       /* 96px */
--space-32: 8rem;       /* 128px */
```

### セクション間の余白(モバイル / デスクトップ)
- モバイル: `padding: 80px 24px;`
- デスクトップ: `padding: 120px 48px;`

## ボタン

### 主CTA(塗りつぶし・ゴールド)
```css
.btn-primary {
  background-color: var(--color-accent);
  color: var(--color-text-primary);
  padding: 14px 32px;
  border-radius: 2px;
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  font-size: var(--text-sm);
  transition: background-color 0.2s ease;
}
.btn-primary:hover {
  background-color: var(--color-accent-light);
}
```

### 副CTA(下線・ゴールド)
```css
.btn-secondary {
  color: var(--color-accent-dark);
  border-bottom: 0.5px solid var(--color-accent);
  padding: 14px 8px;
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
}
```

## 区切り線

### 通常の区切り
```css
.divider {
  border-bottom: 1px solid var(--color-border);
  margin: var(--space-12) 0;
}
```

### 重要箇所のゴールド区切り
```css
.divider-accent {
  border-bottom: 1px solid var(--color-divider);
  margin: var(--space-16) 0;
}
```

## アニメーション

控えめなフェードインのみ使用。動きすぎないこと。

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeInUp 0.8s ease-out forwards;
}
```

## ブレイクポイント

```css
/* モバイル */    @media (max-width: 639px)
/* タブレット */  @media (min-width: 640px) and (max-width: 1023px)
/* デスクトップ */ @media (min-width: 1024px)
```

## 厳守事項

- **絵文字は一切使わない**(SVGアイコンのみ)
- **アクセントゴールドは多用しすぎない**(各セクションで1〜2箇所)
- **テキストは縦組みを意識した行間**(`--leading-loose`を本文に)
- **シャドウは使わない、または極めて控えめに**(`box-shadow: 0 1px 2px rgba(0,0,0,0.04);`程度)
- **角丸は最小限**(2pxまで、または直角)
- **ボタンは塗りつぶし1個・下線1個までを基本**(複数ボタンの並列を避ける)
