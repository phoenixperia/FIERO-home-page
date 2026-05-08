# Figma セットアップ手順

> HTMLで作ったLPをFigmaのデザインに変換し、Claude Codeから直接編集するための準備です。
> 所要時間: 約10分

---

## 1. Figma アカウントを作る（まだの人）

1. https://www.figma.com にアクセス
2. 「Get started for free」をクリック
3. メールアドレスで登録（Google アカウントでもOK）

※無料プランで十分です。

---

## 2. Figma MCP をClaude Codeに接続する

Claude CodeからFigmaのデザインを直接読み書きするための設定です。

### セットアップ手順

ターミナルで以下を実行:

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

ブラウザが開くので、Figmaのアクセスを「Allow」してください。

### 接続確認

```bash
claude mcp list
```

`figma` が表示されればOKです。

### 全プロジェクト共通で使いたい場合

```bash
claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp
```

`--scope user` を付けると、どのプロジェクトからでもFigma MCPが使えるようになります。

---

## 3. html.to.design プラグインを使えるようにする

HTMLコードをFigmaの編集可能なデザインに変換するプラグインです。

### 使い方

1. Figmaでファイルを開く（「Drafts」→「+」で新規ファイル作成）
2. キーボードで `Cmd + K`（Mac）を押す
3. 「html.to.design」と入力して検索
4. 表示されたプラグインをクリック
5. 「Try it out」または「Run」をクリック

### HTMLを変換する手順

1. **Claude Code でLPが完成したら、AIが `figma-ready.html` の中身をコードブロックとして出力してくれる**
   - コードブロック右上の「**Copy**」ボタンでワンクリックコピー
   - ファイルが大きい場合は AI が自動でクリップボードに直接コピーしてくれる（`pbcopy` コマンド使用）
2. Figmaでプラグインを起動（`Cmd + K` → 「html.to.design」）
3. **「Editor」タブ** を選択
4. 先ほどコピーしたHTMLを **貼り付け（Cmd+V / Ctrl+V）**
5. **「Create」** をクリック
6. Import options:
   - Use Autolayout → **ON**
   - Create styles & variables → **ON**
   - HTML layer names → **ON**
   - 残りはOFFのまま
7. **「Proceed」** をクリック

数秒〜十数秒で、Figma上に編集可能なデザインが表示されます。

> **重要**: 貼り付けるのは **`lp/figma-ready.html`** の中身です。`lp/index.html` の方は外部CDN参照・ローカル相対パスのままで、html.to.design から画像が取得できず欠損します。
> `figma-ready.html` は AI が LP 完成時に自動で生成するファイルで、画像が全て埋め込まれています。

---

## 4. 変換後にClaude Codeで直接編集する

Figmaに変換したら、FigmaファイルのURLをClaude Codeに共有してください。

URLはブラウザのアドレスバーからコピーできます:
```
https://www.figma.com/design/XXXXX/ファイル名...
```

Claude CodeがFigma MCP経由でテキスト・色・配置などを直接編集できます。
