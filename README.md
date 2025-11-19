# 月刊Sing - サイト全体ガイド

このドキュメントは、月刊Singサイト全体を理解するためのマスタードキュメントです。

## 📚 目次

1. [プロジェクト概要](#プロジェクト概要)
2. [ドキュメント一覧](#ドキュメント一覧)
3. [ディレクトリ構造](#ディレクトリ構造)
4. [主要機能とファイル参照](#主要機能とファイル参照)
5. [よくある作業](#よくある作業)
6. [開発環境のセットアップ](#開発環境のセットアップ)

---

## プロジェクト概要

**月刊Sing**は、地域の企業経営者や専門家への取材を通して、挑戦する人のリアルを伝える地域密着型ビジネス雑誌のWebサイトです。

**技術スタック:**
- Next.js 15+
- TypeScript
- Tailwind CSS
- JSONベースのコンテンツ管理

**特徴:**
- 固有名詞のみJSON化（文章は直接コードに記述）
- 人物データの正規化（1人のデータは1箇所のみ、IDで参照）
- Google Forms連携のお問い合わせフォーム

---

## ドキュメント一覧

### 📝 CONTENT_MANAGEMENT.md
**用途:** コンテンツの追加・管理方法

**こんなときに見る:**
- 新しい人物（取材記事）を追加したい
- クロストーク（対談）を追加したい
- 更新情報を追加したい
- Google Formsを設定したい
- 画像ファイルを配置したい

**ファイルパス:** `/CONTENT_MANAGEMENT.md`

---

## ディレクトリ構造

```
sing-magazine/
├── app/                      # Next.js App Router
│   ├── page.tsx             # トップページ
│   ├── about/               # 月刊Singとはページ
│   ├── interviews/          # 取材記事
│   │   ├── page.tsx        # 一覧ページ
│   │   └── [id]/           # 詳細ページ（動的ルート）
│   ├── crosstalk/           # クロストーク（対談）
│   │   ├── page.tsx        # 一覧ページ
│   │   └── [id]/           # 詳細ページ（動的ルート）
│   ├── contact/             # お問い合わせ
│   └── globals.css          # グローバルCSS
│
├── components/              # 再利用可能なコンポーネント
│   ├── Header.tsx          # ヘッダー
│   ├── ProfileGrid.tsx     # プロフィールグリッド
│   ├── UpdatesList.tsx     # 更新情報リスト
│   ├── InterviewSlider.tsx # インタビュースライダー
│   ├── CrosstalkSection.tsx # クロストークセクション
│   └── CustomVideoPlayer.tsx # カスタム動画プレーヤー
│
├── data/                    # コンテンツデータ（JSON）
│   ├── content.json        # サイト全体の設定・コンテンツ
│   ├── people-list.json    # 人物一覧（軽量）
│   ├── people/             # 人物詳細（1人1ファイル）
│   │   ├── 1.json
│   │   ├── 2.json
│   │   └── ...
│   └── crosstalk/          # クロストーク詳細
│       ├── 1.json
│       ├── 2.json
│       └── ...
│
├── public/                  # 静的ファイル
│   ├── img/                # 画像ファイル
│   │   ├── no_image.png   # プレースホルダー画像
│   │   ├── hero.mp4       # ヒーロー動画（デスクトップ）
│   │   └── hero_mv.mp4    # ヒーロー動画（モバイル）
│   ├── icon-192x192.png   # PWAアイコン
│   ├── icon-512x512.png   # PWAアイコン
│   └── site.webmanifest   # PWAマニフェスト
│
└── types/                   # TypeScript型定義
    └── feature.ts          # 主要な型定義
```

---

## 主要機能とファイル参照

### 🏠 トップページ

**ファイル:** `app/page.tsx`

**主要セクション:**
1. ヒーロー動画セクション
2. アバウトセクション
3. フィーチャーセクション（3カラム）
   - 更新情報
   - 私のカクゴ一覧
   - 動画プレーヤー
4. インタビュースライダー
5. クロストークセクション
6. CTAセクション

**データソース:**
- `data/content.json` - サイト設定、更新情報、クロストーク一覧
- `data/people-list.json` - 人物一覧

---

### 📰 取材記事機能

#### 一覧ページ
**ファイル:** `app/interviews/page.tsx`

**表示内容:**
- 全人物のカード表示（画像、名前、肩書き、キャッチフレーズ）

**データソース:**
- `data/people-list.json`

#### 詳細ページ
**ファイル:** `app/interviews/[id]/page.tsx`

**表示内容:**
- メイン動画
- プロフィール情報
- 来歴
- お気に入り
- スケジュール
- おすすめ動画

**データソース:**
- `data/people/[id].json` - 個別人物の詳細データ

**データの読み込み方法を確認するには:**
```typescript
// ファイル: app/interviews/[id]/page.tsx
// 8行目～15行目を参照
async function getPersonDetail(id: string) {
  // fs.readFileSync でJSONファイルを読み込む実装
}
```

---

### 💬 クロストーク（対談）機能

#### 一覧ページ
**ファイル:** `app/crosstalk/page.tsx`

**表示内容:**
- クロストークのカード表示（画像、タイトル、参加者、説明）

**データソース:**
- `data/content.json` の `crosstalk.items`
- `data/people-list.json` - 参加者名の取得

#### 詳細ページ
**ファイル:** `app/crosstalk/[id]/page.tsx`

**表示内容:**
- メイン画像
- 参加者一覧
- 対談内容（セクション、Q&A形式）
- 関連クロストーク

**データソース:**
- `data/crosstalk/[id].json` - 個別対談の詳細データ

**コンテンツタイプ:**
```json
// セクション形式
{
  "type": "section",
  "title": "セクションタイトル",
  "text": "本文..."
}

// Q&A形式
{
  "type": "qa",
  "question": "質問内容",
  "answers": [
    {
      "personId": 1,
      "answer": "回答内容"
    }
  ]
}
```

---

### 📧 お問い合わせ機能

**ファイル:** `app/contact/page.tsx`

**機能:**
- Google Forms連携
- 2カラムレイアウト（フォーム + 連絡先情報）
- 送信成功時のメッセージ表示

**設定方法:**
👉 `CONTENT_MANAGEMENT.md` の「お問い合わせフォームのGoogle Forms設定」セクションを参照

**カスタマイズポイント:**
- **12行目:** カテゴリの初期値
- **17-21行目:** カテゴリの選択肢
- **30行目:** Google Forms URL（後で設定）
- **35-40行目:** entry番号（後で設定）
- **339行目:** メールアドレス

---

### 🎨 共通コンポーネント

#### ヘッダー
**ファイル:** `components/Header.tsx`

**特徴:**
- モバイルハンバーガーメニュー
- 検索機能なし（削除済み）

**ナビゲーション項目:**
`data/content.json` の `navigation` から取得

#### 更新情報リスト
**ファイル:** `components/UpdatesList.tsx`

**データソース:**
`data/content.json` の `updates.items`

#### インタビュースライダー
**ファイル:** `components/InterviewSlider.tsx`

**特徴:**
- 無限スクロール
- 画面フル幅
- 自動アニメーション（CSS）

**アニメーション設定:**
`app/globals.css` の `@keyframes infinite-scroll`

---

## よくある作業

### 新しい人物を追加する

**手順:**
1. `CONTENT_MANAGEMENT.md` の「新しい人物（取材記事）を追加」セクションを参照
2. 必要なファイル:
   - `data/people-list.json` - エントリ追加
   - `data/people/[新ID].json` - 詳細データ作成
   - `data/content.json` - 更新情報に追加

**テンプレート:**
詳細なテンプレートは `CONTENT_MANAGEMENT.md` に記載

---

### 新しいクロストークを追加する

**手順:**
1. `CONTENT_MANAGEMENT.md` の「新しいクロストーク（対談）を追加」セクションを参照
2. 必要なファイル:
   - `data/content.json` - `crosstalk.items` に追加
   - `data/crosstalk/[新ID].json` - 詳細データ作成

**テンプレート:**
詳細なテンプレートは `CONTENT_MANAGEMENT.md` に記載

---

### 画像を追加・変更する

**手順:**
1. 画像を `public/img/` に配置
2. JSONファイルの `image` フィールドを更新
   ```json
   "image": "/img/ファイル名.jpg"
   ```

**注意:**
- パスは `/img/` から始める（`public` は含めない）
- ファイル名の大文字小文字に注意

**推奨サイズ:**
- 人物画像: 800x800px（正方形）
- クロストーク画像: 1200x900px（4:3）
- ファイルサイズ: 500KB以下

---

### サイト設定を変更する

**ファイル:** `data/content.json`

**主な設定項目:**
- `site.name` - サイト名
- `site.company` - 企業名
- `site.description` - サイト説明
- `navigation` - ナビゲーションメニュー
- `hero` - ヒーローセクション
- `about` - アバウトセクション
- `cta` - CTAセクション

**例: サイト名を変更する**
```json
{
  "site": {
    "name": "月刊Sing",  // ← ここを変更
    "company": "企業名A",
    "description": "..."
  }
}
```

---

### カラー設定を変更する

**ファイル:** `tailwind.config.ts`

**現在の設定:**
```typescript
colors: {
  'primary-green': '#2d5f3f',
}
```

**使用箇所の確認:**
```bash
# プロジェクトルートで実行
grep -r "primary-green" app/ components/
```

---

## 開発環境のセットアップ

### 前提条件
- Node.js 18以上
- npm または yarn

### セットアップ手順

```bash
# リポジトリをクローン
git clone https://github.com/elfyakira/sing-magazine.git
cd sing-magazine

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

開発サーバーが起動したら、ブラウザで `http://localhost:3000` にアクセス

### ビルド

```bash
# プロダクションビルド
npm run build

# ビルド結果をローカルで確認
npm run start
```

---

## データ構造の理解

### 人物データの正規化

**設計思想:**
- 1人のデータは1箇所のみに保存
- 他の箇所からはIDで参照

**例:**
```json
// data/people-list.json（軽量、一覧表示用）
{
  "id": 1,
  "name": "毛受芳高",
  "title": "一般社団法人アスバシ 代表理事",
  "catchphrase": "教育を可能性に出会う場へ",
  "image": "/img/no_image.png"
}

// data/people/1.json（詳細、個別ページ用）
{
  "id": 1,
  "name": "毛受芳高",
  // ...詳細情報
  "biography": "...",
  "history": [...],
  "favorites": [...]
}

// data/crosstalk/1.json（クロストークから参照）
{
  "participantIds": [1, 2],  // ← IDで参照
  // ...
}
```

---

## トラブルシューティング

### 画像が表示されない

**確認項目:**
1. ファイルが `public/img/` に配置されているか
2. JSONのパスが `/img/ファイル名` になっているか
3. ファイル名の大文字小文字が一致しているか
4. 開発サーバーを再起動

### ビルドエラーが出る

**確認項目:**
1. JSONファイルの構文（カンマ、括弧）
2. IDの重複がないか
3. 存在しないIDを参照していないか

### Google Formsに送信されない

👉 `CONTENT_MANAGEMENT.md` の「トラブルシューティング」セクションを参照

---

## ファイル探索のヒント

### 特定の機能を探す

```bash
# コンポーネントを探す
ls components/

# ページを探す
ls app/

# データファイルを探す
ls data/
```

### コード内検索

```bash
# "primary-green" を使用している箇所を検索
grep -r "primary-green" app/ components/

# 特定の人物ID（例: ID 1）を参照している箇所を検索
grep -r '"participantIds": \[1' data/

# Google Forms関連のコードを検索
grep -r "googleFormURL" app/
```

---

## 次のステップ

1. **コンテンツを追加したい** → `CONTENT_MANAGEMENT.md` を参照
2. **Google Formsを設定したい** → `CONTENT_MANAGEMENT.md` の該当セクションを参照
3. **デザインを変更したい** → `tailwind.config.ts` と各コンポーネントを参照
4. **新しいページを追加したい** → `app/` ディレクトリに新しいフォルダを作成

---

## サポート

質問や問題が発生した場合:
1. このREADME.mdで該当セクションを確認
2. `CONTENT_MANAGEMENT.md` を確認
3. 該当するファイルのコードを確認
4. それでも解決しない場合は開発チームに問い合わせ

---

**最終更新:** 2025-11-19
