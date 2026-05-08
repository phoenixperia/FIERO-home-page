# デザインシステム — LP制作

> 最小限の指示でプロ品質のLPを生成するためのルール集。
> 参考URLがある場合はそのトーンを最優先し、このルールで補完する。

---

## 1. 美的方向性の決め方（最初にやること）

### 参考URLがある場合
1. 参考サイトを分析して以下を抽出する:
   - カラースキーム（メイン、アクセント、背景）
   - フォントの雰囲気（幾何学的? ヒューマニスト? セリフ?）
   - レイアウトの密度（余白多め? 情報密度高め?）
   - トーン（高級感? カジュアル? テック? ナチュラル?）
   - 装飾スタイル（ミニマル? グラデーション? イラスト多め?）
2. 抽出した特徴を「ビジュアルテーゼ（1文）」にまとめる
3. ユーザーに確認してから制作に入る

### 参考URLがない場合
ユーザーのビジネスから最適なトーンを提案する。以下から選ぶ:

| トーン | 合うビジネス | 特徴 |
|--------|------------|------|
| Luxury / Refined | コンサル、高単価サービス | 余白多め、セリフ体、ダーク背景、金/白アクセント |
| Minimal / Clean | SaaS、テック、ツール | 白背景中心、サンセリフ、抑えた色、情報整理 |
| Bold / Energetic | 教育、スポーツ、イベント | 大きな文字、ビビッドカラー、動き |
| Playful / Friendly | 子供向け、カジュアルサービス | 丸み、パステル、イラスト、手書き風 |
| Editorial / Magazine | メディア、ブランド | 強いタイポグラフィ、写真主役、グリッド |
| Corporate / Trust | 金融、法律、医療 | ブルー系、堅実、データ重視、ロゴ列 |
| Retro / Vintage | カフェ、ファッション、音楽 | テクスチャ、セリフ体、くすみカラー |

### ビジュアルテーゼの例
- 「深い紫とピンクのグラデーションで、テック感と信頼感が共存する洗練されたLP」
- 「白と黒のミニマルな空間に、鮮やかなオレンジが差すクリーンなSaaS LP」
- 「手書き風フォントと柔らかいイラストで、親しみやすいカジュアルなLP」

**重要**: 毎回違うデザインにすること。同じフォント・配色を使い回さない。ユーザーのビジネスに最適なデザインを毎回ゼロから考える。

---

## 2. 構成の原則

### LP全体
- LPは「1つの目的」に集中した**コンバージョン装置**
- ナビゲーションは置かない（離脱導線を作らない）
- 全体を**1つのストーリー**として設計する（AIDA: 注意→興味→欲求→行動）
- 各セクションは**1つの目的、1つの見出し、1サブテキスト**
- 見出しだけ読んでページが理解できるか（Litmusチェック）

### 鉄板セクション構成
```
1. Hero — ブランド/商品名 + 約束 + CTA + 1つの支配的ビジュアル
2. 課題提起 — ターゲットの悩み（共感）
3. 解決策/特徴 — なぜこのサービスか（差別化）
4. 実績/証拠 — 数字・事例・比較
5. サービス詳細 — 具体的に何が手に入るか
6. お客様の声 — 社会的証明
7. 料金 — 価格と含まれるもの
8. 最終CTA + FAQ — 行動への最後の一押し
```
ビジネスに合わせて追加・削除・順番変更はOK。

### ファーストビュー（最重要）
- **画面全体**を使う（`min-height: 100vh`）
- **核の要素は5つ**: ラベル / キャッチ / サブコピー / 情報（信頼要素） / CTA
- キャッチは**20文字以内**
- 背景はフラットな単色禁止。グラデーション、写真+オーバーレイ、テクスチャ等で空気感を作る
- ブランド/商品名がファーストビューで最も目立つ要素であること
- 詳細な必須要素は下記「情報密度ガードレール」を参照

### 情報密度ガードレール（必須）

**AIぽい・スカスカなLPの最大原因は「1セクションあたりの情報量が少ない」。以下の必須要素数を必ず満たすこと。**

| セクション | 最低必須要素 | 情報量の目安 |
|---|---|---|
| ファーストビュー | 主見出し + サブ見出し + CTA（**2個以上**）+ ビジュアル + 信頼要素（ロゴバー or 実績数字 or 評価スター）の **合計5要素** | 画面全体の高さ 100vh を埋める |
| 課題提起 | 悩み **3〜5個**（各: 見出し + 短文 + アイコン or イラスト） | カード or リスト形式で密度感を出す |
| 特徴/ベネフィット | ベネフィット **4つ以上**（各: 見出し + 本文2〜3行 + アイコン/ビジュアル） | 2×2 or 3×2 のグリッドで詰める |
| 実績/証拠 | 具体的な数字 **3つ以上** + 受賞/導入社数/満足度スコア等 | 数字は超大サイズ（H1クラスの大きさ） |
| お客様の声 | **3つ以上**（各: 顔写真 + 名前 + 肩書き + 引用符 + 2〜4行のコメント） | カード形式で並列表示 |
| 比較表 | 縦軸 **5項目以上** × 横軸 **2〜3サービス** | ✓/✗ アイコン or Yes/No で視覚化 |
| 料金 | プラン **2〜3個** × 各プランに特徴 **5項目以上** + 中央の「おすすめ」プランを視覚的に強調 | ハイライトプランは border で差別化 |
| FAQ | 質問 **5つ以上**（アコーディオン or 展開式） | よくある反論/不安を先回り |
| 最終CTA | 主見出し + 一押し文言 + CTA（**2個以上**）+ 再度の信頼要素 | 背景色を他セクションと変えて目立たせる |

#### 情報が不足した場合の対処
- ヒアリング済みの情報で埋まらない項目は、AI が **業界標準の仮案** を入れてユーザーに確認を取る
- 例: 「お客様の声が1件しかない」→ AI が「他2名の仮のお客様の声を作るので、後で実在の方に差し替えてください」と提案
- **「情報不足だからスカスカでOK」は禁止**

#### 視覚的な密度の追加ルール
- **セクション背景色は少なくとも3トーンで交互変化**（全セクション白は禁止）
  - 例: 白 → 薄グレー → ネイビー暗基調 → 白 → 薄アクセント → ...
- **各セクションに装飾要素を最低1つ**（グラデ円 / ドットパターン / セクション番号 / 見出しライン / 矢印 / ライン装飾）
- **タイポの対比を効かせる**（超大見出し ≥ `clamp(48px, 6vw, 96px)` vs 注記 `14px`）
- **FVには超大見出しを必ず配置**（`clamp(48px, 7vw, 110px)` 以上、`font-weight: 900`）

### Litmusチェック（生成後に確認）
- ブランドがファーストビューで明確か？
- ビジュアルアンカー（目を引く要素）があるか？
- 見出しだけで内容が理解できるか？
- 各セクションが1つの仕事だけしているか？
- コピーの30%を削っても成立するか？→ 削れるなら削る

---

## 3. コピーの原則

### 見出し
- **具体的な数字や結果**を入れる（「3つの理由」「年間3,000万円」「7時間で完成」）
- キャッチコピーは20文字以内
- 各セクションの見出しで**1〜2語だけ**を黄色アンダーラインで強調（使いすぎ厳禁）

### 本文
- サブコピーは1〜2行
- 30%削っても良くなるなら削り続ける
- 専門用語は避け、ターゲットの言葉で書く
- 能動態で書く（「インストールする」not「インストールされます」）

### CTA
- **動詞形**にする:「今すぐ申し込む」「無料で相談する」「資料をダウンロードする」
- 「送信」「次へ」のような曖昧な言葉は禁止
- **最低3箇所**に配置: ファーストビュー / 中盤 / 最終CTA
- 矢印アイコンをボタン内に入れてクリック感を強める

---

## 4. タイポグラフィ

### フォント選びのルール
- ユーザーの参考URLからフォントの雰囲気を読み取る
- 参考がない場合はビジネスのトーンに合わせて選ぶ
- **Google Fonts から選ぶ**（無料で使えるもの限定）
- **タイプフェイスは2つまで**: 見出し用 + 本文用
- Inter, Roboto, Arial をデフォルトにしない（ありきたり）

### フォントペアリング例

| 雰囲気 | 見出し | 本文 |
|--------|--------|------|
| 日本語・力強い | Zen Kaku Gothic Antique (900) | Zen Kaku Gothic Antique (400) |
| 日本語・柔らかい | Zen Maru Gothic (700) | Zen Maru Gothic (400) |
| 日本語・洗練 | Noto Sans JP (900) | Noto Sans JP (400) |
| 欧文・モダン | Space Grotesk (700) | DM Sans (400) |
| 欧文・高級 | Playfair Display (700) | Source Sans 3 (400) |
| 欧文・テック | JetBrains Mono (700) | Inter (400) |
| 欧文・カジュアル | Nunito (800) | Nunito (400) |

### サイズと行間（`clamp()` でレスポンシブ可変）

| サイズ指定 | 用途 | 行間 | 補足 |
|---|---|---|---|
| `clamp(48px, 7vw, 110px)` | **FV 超大見出し** (h1) | 1.05〜1.1 | **`font-weight: 900`必須**。画面を支配する存在感 |
| `clamp(36px, 5vw, 72px)` | セクション見出し (h2) | 1.2〜1.3 | 太さ 700〜900 |
| `clamp(22px, 2.5vw, 32px)` | サブ見出し (h3) / カード見出し | 1.35 | 太さ 600〜700 |
| `clamp(18px, 1.5vw, 22px)` | サブコピー・強調本文 | 1.7 | FVの見出しの真下に置く説明 |
| 16px | 本文（p） | 1.7〜1.8 | 18pxでもOK |
| 14px | 注記・キャプション・FAQ回答 | 1.6 | |
| 13px | フッター・コピーライト | 1.5 | |

### タイポの対比ルール（AIぽさ対策の要）

- **超大見出しと注記の対比を極端にする**: FVの見出し（例: 80px）と信頼要素の注記（例: 14px）を並べる → サイズ比 5〜8倍
- **書体の対比も効く**: 見出し Serif × 本文 Sans-serif、または 見出し 900 × 本文 400 の太さ対比
- **全見出しを同じサイズにしない**: h1 > h2 > h3 の差を明確に
- **1画面に文字サイズが3種類以上**あるか確認（全部同じサイズはAIぽさの典型）

### FV 見出しの必須スタイル

```css
h1.hero-title {
  font-size: clamp(48px, 7vw, 110px);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.02em;  /* 大きい見出しは詰める */
}
```

- `letter-spacing: -0.02em` を忘れない（大きい見出しは字間を詰めると締まる）
- **一部の単語（1〜2語）をブランドカラー or 黄色下線で強調**

---

## 5. カラーパレット

### 決め方
1. 参考URLがあればそこから抽出
2. なければビジネスのトーンに合わせて選ぶ
3. CSS変数で一貫性を持たせる

### カラーパレット例

| テーマ | メイン | アクセント | 背景 | テキスト |
|--------|--------|-----------|------|---------|
| テック・信頼 | `#1a0a3e` 紫 | `#ff0066` ピンク | `#f0f0f0` | `#1a0a2e` |
| クリーン・SaaS | `#0f172a` 紺 | `#3b82f6` 青 | `#ffffff` | `#1e293b` |
| ナチュラル | `#1b4332` 深緑 | `#f59e0b` 琥珀 | `#fefce8` | `#1c1917` |
| ラグジュアリー | `#0c0a09` 黒 | `#d4af37` 金 | `#1c1917` | `#fafaf9` |
| ポップ | `#7c3aed` バイオレット | `#f43f5e` ローズ | `#faf5ff` | `#1e1b4b` |
| コーポレート | `#1e3a5f` ネイビー | `#22c55e` グリーン | `#f8fafc` | `#0f172a` |

### カラー運用ルール
- **背景は交互のリズム**: 白 → 薄色 → 白 → ダーク → 白...
- **CTA**は周囲と明度差45%以上のコントラスト
- **ダークセクション**は1LPに1〜2箇所まで
- 支配色+鋭いアクセントの構成。色を均等に配分しない

```css
:root {
  --color-primary: /* メイン */;
  --color-accent: /* アクセント */;
  --gradient-main: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  --color-bg: /* 背景 */;
  --color-bg-alt: /* 背景サブ */;
  --color-text: /* テキスト */;
  --color-text-light: /* 薄いテキスト */;
}
```

---

## 6. レイアウト

### 基盤
```css
.container { max-width: 1280px; margin: 0 auto; padding: 0 80px; }
section { padding: 100px 0; }
```

- **8pxグリッド**: すべての余白・サイズは8の倍数（8, 16, 24, 32, 40, 48, 64, 80, 96, 120）
- 段落間: 24px
- セクション見出し下のサブテキスト後: 60pxの余白
- テキストの最大読みやすい幅: 700px

### カード
- **デフォルトは使わない**。カードを外しても意味が変わらないなら、カードにしない
- ファーストビューには**絶対にカードを置かない**
- 許可される場面: 特徴の横並び、料金プラン、FAQ
- 使う場合: `border-radius: 16〜20px`、`box-shadow`、ホバーで`translateY(-6px)`

### レスポンシブ（必須）

**ブレークポイントは1つだけ: `768px`**

- PC（> 768px）: 1280px幅デザイン、サイドパディング 80px、グリッドは複数列
- モバイル（≤ 768px）: フル幅、サイドパディング 20px、グリッドは1列

#### 必須の `@media` ブロック（1つのHTMLの末尾にまとめる）

```css
@media (max-width: 768px) {
  .container { padding: 0 20px; }
  section { padding: 60px 0; }

  /* フォントサイズをモバイル用に縮小 */
  h1 { font-size: clamp(28px, 8vw, 40px) !important; }
  h2 { font-size: clamp(24px, 6vw, 32px) !important; }
  h3 { font-size: 20px !important; }

  /* グリッドは全て1列に折り返す */
  .grid-3, .grid-4, .grid-2 { grid-template-columns: 1fr !important; }

  /* FVの2カラム（テキスト+画像）は縦並びに */
  .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }

  /* CTAボタンはフル幅 */
  .btn { width: 100%; min-height: 48px; }

  /* 料金カード・比較テーブルは横スクロール可 or 縦並びに */
  .pricing-cards { grid-template-columns: 1fr !important; gap: 24px !important; }

  /* 画像は必ず縮小可能に */
  img { max-width: 100%; height: auto; }
}
```

> **注意**:
> - `clamp()` を見出しに使うとブレークポイントに頼らず自然に縮小するので推奨
> - 画像には必ず `max-width: 100%; height: auto;` を付ける（通常ルールに組み込むのでもOK）
> - CTA/ボタンは `min-height: 44px` 以上（タップしやすさ）
> - 比較テーブルはモバイルで破綻しやすいので、カードのタテ並びに組み替えるか `overflow-x: auto` で横スクロール可能にする

#### モバイル時の各セクションの挙動（推奨）

| セクション | PC | モバイル（≤768px） |
|---|---|---|
| FV | テキスト左 + ビジュアル右（2カラム） | テキスト上 + ビジュアル下（1カラム） |
| 課題提起 | 3カラムの悩みリスト | 1カラム縦並び |
| 特徴カード | 3〜4カラム | 1カラム |
| 比較テーブル | 横並び | カードに組み替え or 横スクロール |
| 料金カード | 3プラン横並び | 1プランずつ縦並び |
| お客様の声 | 3カラム | 1カラム |
| FAQ | 2カラム | 1カラム（アコーディオンは開閉のまま） |

---

## 7. アイコン — Phosphor Icons（インラインSVG）

**Phosphor Icons は Web Components を使わず、SVGを直接HTMLに埋め込む。**
これにより html.to.design でFigmaに取り込んだときもアイコンがレイヤーとして保持される（Web Componentsは動的レンダリングのためFigma側で消える）。

### 取得手順
1. https://phosphoricons.com/ で使いたいアイコンを検索
2. 右側パネルで **weight を `Duotone`** に切り替える（基本はこれ）
3. **SVGボタン（コードブロックアイコン）** をクリックしてSVGコードをコピー
4. HTMLに `<svg>...</svg>` として直接貼り付ける

### 埋め込み例
```html
<!-- 24px のチェックアイコン（currentColor で親要素の color を継承） -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/>
</svg>
```

### カラー指定
- SVGの `fill="currentColor"` を維持し、**親要素に `color:` を指定** して色を当てる（CSS変数と連動できる）
- ピンポイントで指定したい場合は `style="color: var(--color-accent);"` を親要素または SVG 自身に書く

```html
<div class="icon-box" style="color: var(--color-accent);">
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256" fill="currentColor">
    <!-- path data -->
  </svg>
</div>
```

### ルール
- **weight は `Duotone` が基本**（柔らかく立体感がある）
- 白背景ならアクセントカラー、ダーク背景なら白
- サイズ: 装飾 48〜64px / リスト項目 24〜32px / ボタン内 20〜22px
- 各カードの先頭にアイコンを配置して視認性を上げる
- アイコン背景: 角丸矩形にグラデーション or 薄色背景を敷く
- 装飾用途で複数アイコンを並べる場合も、すべてインラインSVGで書く

### やってはいけないこと
- `<script src="...@phosphor-icons/webcomponents...">` を読み込む（Figmaに移したときアイコンが消える）
- `<ph-icon name="..."></ph-icon>` を書く（同上）

---

## 8. 写真

**Unsplashは動作が不安定なため使用しない。**

ビジュアルは以下で補う:
- **unDrawイラスト**（セクション9）
- **CSS装飾**（セクション10）— グラデーション円、ぼかし、リング、パターン等
- **Phosphor Icons**（セクション7）

ユーザーが自分の写真（ロゴ、代表写真、オフィス写真等）を持っている場合は、後からFigma上で差し替えてもらう前提でプレースホルダーを用意する。

```html
<!-- プレースホルダー例 -->
<div style="width:200px; height:200px; border-radius:50%; background:#e2e8f0;
     display:flex; align-items:center; justify-content:center; color:#94a3b8; font-size:14px; font-weight:400;">
  写真をここに配置
</div>
```

---

## 9. イラスト — unDraw（CDN直接参照）

unDrawのSVGイラストをCDN URLで直接使用する。ダウンロード不要。

### URL形式
```
https://cdn.jsdelivr.net/npm/undraw-svg@1.0.0/svgs/[イラスト名].svg
```

### 使い方
```html
<img src="https://cdn.jsdelivr.net/npm/undraw-svg@1.0.0/svgs/artificial-intelligence.svg"
     width="400" alt="AI" style="max-width: 100%;">
```

### どこで使うか

| 場所 | イラストの役割 | おすすめイラスト |
|------|-------------|----------------|
| **ファーストビュー** | 世界観を補強（テキストの横 or 下に） | `artificial-intelligence`, `coding`, `vibe-coding` |
| **課題セクション** | 悩みを視覚化 | `thought-process`, `processing-thoughts`, `no-data` |
| **特徴/解決策** | 各特徴をビジュアルで表現 | `our-solution`, `solution-mindset`, `goals` |
| **サービス詳細/フロー** | プロセスを図解 | `process`, `creation-process`, `design-process` |
| **チーム/協力** | 人が協力しているイメージ | `team-collaboration`, `collaboration`, `teamwork` |
| **成長/成果** | 右肩上がりのイメージ | `growth-analytics`, `growth-chart`, `success-factors` |
| **CTA周辺** | 行動を後押し | `target`, `shared-goals`, `agreement` |

### LP向きイラスト一覧

**AI・テクノロジー系**
- `artificial-intelligence` — AI
- `robotics` — ロボティクス
- `coding` / `vibe-coding` / `programming` — コーディング
- `data-analysis` / `predictive-analytics` — データ分析
- `processing` / `data-processing` — データ処理

**ビジネス系**
- `business-decisions` — 意思決定
- `business-analytics` — ビジネス分析
- `business-plan` — 事業計画
- `business-deal` — 商談・契約
- `presentation` / `presenting` — プレゼン
- `report` / `data-reports` — レポート

**チーム・協力系**
- `team-collaboration` — チームコラボ
- `collaboration` / `live-collaboration` — 協力
- `good-team` / `team-work` — チームワーク
- `meeting` / `online-meeting` — ミーティング
- `connecting-teams` — チーム連携

**成長・成功系**
- `growth-analytics` / `growth-chart` / `growth-curve` — 成長
- `success` / `success-factors` — 成功
- `goals` / `team-goals` / `shared-goals` — 目標
- `target` — ターゲット

**アイデア・思考系**
- `idea` / `ideas` / `new-ideas` — アイデア
- `brainstorming` — ブレスト
- `thought-process` — 思考プロセス
- `solution-mindset` — 解決思考
- `conceptual-idea` — コンセプト

### 配置ルール
- **1セクションにイラスト1つまで**（入れすぎるとうるさくなる）
- **1LP全体で3〜5個**が適量
- テキストとイラストを**横並び**にする（テキスト左 + イラスト右、または逆）
- イラストの幅は**280〜400px**
- 背景が暗い場合はイラストの下に薄い白の矩形を敷くか、明るいセクションに配置する
- 装飾として使い、イラストだけで意味を伝えようとしない（テキストが主役）

---

## 9. CSS装飾（素材なしでリッチにする）

### 装飾の必須運用ルール（AIぽさ対策）

- **全セクションに装飾要素を最低1つ**入れる（装飾ゼロのセクションはスカスカの元凶）
- **1つのLPで装飾パターンを最低3種類**使い分ける（全セクションで同じグラデ円だけは NG）
- 推奨パターン（組み合わせで使う）:
  - **グラデーション装飾円** → FV / ダークセクション / 最終CTA
  - **セクション番号（SECTION 01, 02 等）** → セクション冒頭の見出し上
  - **見出しライン** → h2 の上下に装飾線
  - **背景ドットパターン** → 薄グレー背景のセクション
  - **リング装飾** → FV や最終CTA にサイズ違いで2〜3個
  - **トップライン** → セクション区切り
  - **斜めカット/波形** → 背景色が変わる境目
  - **グロー** → CTAボタン・料金カードのハイライト

### セクション番号の付け方（強く推奨）

参考LPの多くに存在する「SECTION 01」「02」のような装飾番号を模す:

```html
<div class="section-number">SECTION 01</div>
<h2>私たちの強み</h2>
```

```css
.section-number {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.3em;  /* ワイドな字間 */
  color: var(--brand-accent);
  margin-bottom: 16px;
  padding-left: 48px;
  position: relative;
}
.section-number::before {
  content: ''; position: absolute; left: 0; top: 50%;
  width: 32px; height: 1px;
  background: var(--brand-accent);
}
```

見出しの上に **小さなラベル + 横線** を置くだけで、一気に「デザインされた感」が出る。

### グラデーション装飾円
```css
.decoration {
  position: absolute; border-radius: 50%;
  background: radial-gradient(circle, rgba(accent, 0.2) 0%, transparent 60%);
  pointer-events: none;
}
```
- ファーストビュー、ダークセクション、最終CTAに配置
- サイズ300〜700px。はみ出してOK

### ぼかしガラス（glassmorphism）
```css
.glass {
  backdrop-filter: blur(16px);
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
}
```
- ダーク背景のカードで使う

### グロー
```css
.glow { box-shadow: 0 0 60px rgba(accent, 0.25); }
```
- CTAボタン、料金ボックスなど注目させたい要素に

### リング装飾
```css
.ring {
  position: absolute; border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.06);
  pointer-events: none;
}
```
- ファーストビューにサイズ違いで2〜3個

### トップライン
```css
.top-line::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
  background: var(--gradient-main);
}
```

### セクション区切り（波形・斜めカット）
```css
.section-wave::after {
  content: '';
  position: absolute; bottom: -48px; left: 0; right: 0; height: 48px;
  background: inherit;
  clip-path: ellipse(55% 100% at 50% 0%);
  z-index: 1;
}
.section-slant::after {
  content: '';
  position: absolute; bottom: -48px; left: 0; right: 0; height: 48px;
  background: inherit;
  clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
}
```
- セクション間の切り替わりに使う（毎回ではなく、ダーク→明るい等の切り替え時に）

### 背景ドットパターン
```css
.dot-pattern {
  background-image: radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}
```
- 薄いグレー背景のセクションに質感を足す

### セクション番号
```css
.section-number {
  position: absolute; top: -20px; left: 80px;
  font-size: 160px; font-weight: 900;
  opacity: 0.03; line-height: 1; pointer-events: none;
}
```
- セクションの背景に大きな薄い番号（01, 02...）を置いてリズムを作る

### 見出し装飾ライン
```css
.title-line::after {
  content: '';
  display: block; width: 64px; height: 4px;
  background: var(--gradient-main);
  margin: 16px auto 0;
  border-radius: 2px;
}
```
- センター配置の見出しの下に短いグラデーションラインを引く

### テキスト強調（アンダーライン）
```css
.highlight {
  background: linear-gradient(transparent 60%, var(--color-accent) 60%);
  display: inline;
}
```

---

## 10. モーション

### 大前提: Figma互換を最優先する

このプロジェクトの最終ゴールは **Figmaに取り込んで編集できる状態** にすること。
Figma（`html.to.design` プラグイン）は **JavaScript を実行しない**。
そのため、**初期状態で要素を隠すタイプのアニメーションは禁止**する（後述）。

### 許可するアニメーション（2種類のみ）

1. **ヒーローの入場アニメーション**（ページ読み込み直後に自動再生）
   - ラベル → キャッチ → サブコピー → CTA の順にフェードイン（staggered）
   - **必ず CSS の `@keyframes` + `animation` で実装する**（JSのクラス付与で発動させない）
   - `animation-fill-mode: forwards` などを指定し、最終的には透明度100%・transform無しの状態に落ち着くようにする

2. **ホバーアニメーション**（マウスオーバーで発動）
   - カード・ボタンに `transform: translateY(-4〜6px)` + shadow拡大
   - 初期状態は「見えている」ため Figma に入れても問題ない

### 禁止するアニメーション（スクロール出現系）

**以下は絶対に使わない:**

- `.fade-in { opacity: 0 }` → JSでクラスを付与して `opacity: 1` にする
- `.slide-up { transform: translateY(40px) }` → Intersection Observer で発動
- `data-aos="fade-up"` などのライブラリ属性（AOS.js、ScrollReveal など）
- `visibility: hidden` → JSで `visible` に切り替える実装

**理由**: Figma取り込み時にJSが動かないため、初期状態のまま（透明・ズレた位置）で取り込まれ、「要素が消えた」「レイアウトが崩れた」ように見える。

もし実装してしまっても、`npm run build:figma` のビルド時に **Figma取り込み用リセットCSSが自動注入され**、全要素が強制的に可視化される（保険として動作）。ただし保険に頼らず、最初から禁止パターンを使わないのが原則。

### ルール

- `prefers-reduced-motion` に対応する（アクセシビリティ）
- `transform` と `opacity` のみアニメートする（パフォーマンス）
- `transition: all` は禁止。プロパティを明示する
- 過剰にしない。意図のある動きだけ

### 実装例

**OK（ヒーロー入場・CSSだけで完結）**

```css
@keyframes heroFadeIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-label    { animation: heroFadeIn 0.6s ease-out 0.1s both; }
.hero-headline { animation: heroFadeIn 0.6s ease-out 0.3s both; }
.hero-sub      { animation: heroFadeIn 0.6s ease-out 0.5s both; }
.hero-cta      { animation: heroFadeIn 0.6s ease-out 0.7s both; }
```

※ `both` = `animation-fill-mode: both` で、終了後も最終状態（可視）に留まる。

**OK（ホバー）**

```css
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.1);
}
```

**NG（スクロール出現系）**

```css
/* ← これは使わない */
.fade-up { opacity: 0; transform: translateY(40px); transition: all 0.6s; }
.fade-up.visible { opacity: 1; transform: translateY(0); }
```

```html
<!-- ← これも使わない（AOS.js などのライブラリ属性） -->
<div data-aos="fade-up">...</div>
```

---

## 11. 実装品質チェックリスト

生成後に確認する:

### 必須
- [ ] アイコンボタンに `aria-label` がある
- [ ] 画像に `alt` がある
- [ ] `outline: none` だけでフォーカス表示を消していない
- [ ] `transition: all` を使っていない
- [ ] フォームの `<input>` に `<label>` がある
- [ ] 画像に `width` と `height` がある
- [ ] リンクは `<a>` タグを使っている（`<div onClick>` 禁止）

### 推奨
- [ ] `prefers-reduced-motion` に対応
- [ ] ATF画像に `loading="eager"` / BTF画像に `loading="lazy"`
- [ ] `text-wrap: balance` を見出しに適用
- [ ] `font-variant-numeric: tabular-nums` を数字列に適用

---

## 12. 技術ルール

- **1ファイル完結**: HTML + CSS（`<style>`タグ内）で1つの `index.html`
- **外部依存は最小限**: Google Fonts（`<link>` タグ）のみ
- **アイコン**: Phosphor Icons を **インラインSVG** で埋め込む（セクション7参照）
- **画像**（優先順位順）:
  1. ユーザー提供画像 → `lp/assets/` に保存して `./assets/xxx.jpg` で参照
  2. 顔写真（自動補完） → `https://i.pravatar.cc/240?u=[seed]`
  3. ヒーロー/商品/業種イメージ（自動補完） → Unsplash（`https://images.unsplash.com/photo-xxxx?w=1600&q=80`）
  4. 装飾イラスト → unDraw の CDN URL（`<img src="https://cdn.jsdelivr.net/npm/undraw-svg@1.0.0/svgs/[名前].svg">`）
  - どのソースもビルド時に Base64化されてFigmaに取り込める
- **レスポンシブ対応**: PC（> 768px）+ モバイル（≤ 768px）の2パターン必須（セクション6参照）
- **JSフレームワーク不要**: バニラHTML/CSSで完結

### Figma互換のためのビルドステップ（最終段階）

最終的にHTMLをFigmaに送る前に、プロジェクトルートで以下を実行する:

```bash
npm run build:figma
```

このビルドが:
- **CDN画像**（unDraw等）を fetch して Base64化してHTMLに埋め込む
- **ローカル画像**（`./assets/*` など `lp/` からの相対パス）もファイルから読み込んで Base64化して埋め込む
- Phosphor の Web Components `<script>` タグが残っていれば削除する
- `lp/figma-ready.html` として書き出す

→ html.to.design の Editor タブには **`lp/figma-ready.html` の中身** を貼り付ける（`lp/index.html` ではない）。
