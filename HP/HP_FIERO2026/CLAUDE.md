# FIERO オフィシャルサイト

ファッションプロデューサー 藤井孝昌 / FIERO のホームページ。
単一ファイル (`index.html`) で完結する HTML/CSS 実装。

## ファイル
- **編集対象**: `HP/HP_FIERO2026/index.html`
- **仕様書**: `SPEC.md` / `CONTENT.md` / `DESIGN_TOKENS.md`
- **画像**: `images/` (hero6.png, owner.png など)

## ブランド情報
- 店名: FIERO
- オーナー: ファッションプロデューサー 藤井 孝昌 / Takamasa Fujii
- 所在地: 〒194-0021 東京都町田市中町1-2-5 3階（BIZcomfort町田 内）
- 営業時間: 11:00–20:00（完全予約制）
- TEL: 090-4847-0487 / MAIL: fiero878@gmail.com
- LINE予約: https://line.me/R/ti/p/@538mhqlu

## デザイン方針
- 白ベース（#FFFFFF）＋ネイビーアクセント（#1A2942）
- シャンパンゴールド（#C9A961）は区切り線・カードボーダーのみ
- フォント: Noto Serif JP / Cormorant Garamond / Inter
- 絵文字は一切使わない（SVGアイコンのみ）
- シャドウ・角丸は極めて控えめ

## CTAボタン文言（統一）
「自分に似合う一着を相談する」

## レスポンシブ
- モバイル: `max-width: 639px`
- タブレット: `640px–1023px`
- デスクトップ: `min-width: 1024px`

## 改行制御クラス
- `.sp-br` — スマホのみ表示（デスクトップでは `display: none`）
- `.pc-br` — デスクトップのみ表示（スマホでは `display: none`）

## セクション構成（完成済み）
1. Header（ナビ・CTA・ハンバーガー）
2. Hero（hero6.png・左寄せ・グラデーションオーバーレイ）
3. Empathy（静かな問いかけ）
4. Owner Story
5. Order Items（5カテゴリー＋仕入れ品）
6. Process（8ステップ）
7. Bespoke Card（独立セクション・ネイビーカードビジュアル）
8. Customer Voice（M様スーツ事例＋パティーヌシューズ3名）
9. Access
10. Contact（LINE予約のみ）
11. Footer

## 重要な決定事項
- 「ご予算について」セクションは削除済み（各アイテムに価格を記載）
- 予約フォームは LINE 一本（https://line.me/R/ti/p/@538mhqlu）
- LINEからのご予約で Bespoke Card 作成費無料
- 読点「、」はできる限り削除（AIっぽさを排除）
- PayPal 対応あり（お見積り前に申告が必要）
