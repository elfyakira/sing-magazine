# コンテンツ管理ガイド

月刊Singサイトへの新規コンテンツ追加手順を説明します。

## 📝 目次

1. [新しい人物（取材記事）を追加](#新しい人物取材記事を追加)
2. [新しいクロストーク（対談）を追加](#新しいクロストーク対談を追加)
3. [更新情報を追加](#更新情報を追加)
4. [画像ファイルの配置](#画像ファイルの配置)

---

## 新しい人物（取材記事）を追加

### 1. 人物一覧データに追加

**ファイル:** `data/people-list.json`

新しい人物のエントリを配列に追加します：

```json
{
  "id": 12,  // ← 既存の最大ID+1
  "name": "山田太郎",
  "furigana": "やまだたろう",
  "title": "株式会社〇〇 代表取締役",
  "catchphrase": "技術で地域を元気に",
  "image": "/img/no_image.png",  // ← 後で実際の画像パスに変更
  "category": "製造業",
  "interviewNumber": 12,  // ← 通し番号
  "articleTitle": "地域製造業の未来を切り拓く",
  "articleDescription": "50年の歴史を持つ製造業が、新技術で挑む革新の物語。"
}
```

### 2. 詳細データファイルを作成

**ファイル:** `data/people/[id].json`（例: `data/people/12.json`）

以下のテンプレートをコピーして、新しいファイルを作成します：

```json
{
  "id": 12,
  "name": "山田太郎",
  "furigana": "やまだたろう",
  "bloodType": "A型",
  "title": "株式会社〇〇 代表取締役",
  "organization": "株式会社〇〇",
  "hobby": "ゴルフ、読書",
  "motto": "継続は力なり",
  "image": "/img/no_image.png",
  "videoUrl": "/videos/person12-main.mp4",
  "officialSite": "https://example.com",
  "catchphrase": "技術で地域を元気に",
  "category": "製造業",
  "interviewNumber": 12,
  "articleTitle": "地域製造業の未来を切り拓く",
  "articleDescription": "50年の歴史を持つ製造業が、新技術で挑む革新の物語。",
  "biography": "1980年生まれ。地元の大学を卒業後、大手メーカーで10年間勤務。\n\n2015年に家業を継ぎ、第三代目社長に就任。伝統的な技術と最新のIoT技術を融合させた製品開発に取り組む。",
  "history": [
    {
      "year": "1980",
      "event": "地域A市に生まれる"
    },
    {
      "year": "2003",
      "event": "〇〇大学工学部卒業"
    },
    {
      "year": "2015",
      "event": "株式会社〇〇 代表取締役就任"
    }
  ],
  "favorites": [
    {
      "category": "好きな食べ物",
      "item": "寿司"
    },
    {
      "category": "好きな本",
      "item": "「7つの習慣」"
    }
  ],
  "schedule": [
    {
      "time": "6:00",
      "activity": "起床、ジョギング"
    },
    {
      "time": "7:30",
      "activity": "朝食"
    },
    {
      "time": "9:00",
      "activity": "出社、メールチェック"
    }
  ],
  "relatedPeople": [1, 2, 3]
}
```

### 3. 画像ファイルを配置

**配置場所:** `public/img/`

画像ファイル名を `no_image.png` から実際のファイル名に変更します。
例えば、`person12.jpg` を配置した場合：

- `data/people-list.json` の該当エントリの `"image"` を `/img/person12.jpg` に変更
- `data/people/12.json` の `"image"` を `/img/person12.jpg` に変更

---

## 新しいクロストーク（対談）を追加

### 1. クロストーク一覧データに追加

**ファイル:** `data/content.json`

`crosstalk.items` 配列に新しいエントリを追加します：

```json
{
  "id": 4,  // ← 既存の最大ID+1
  "number": 4,
  "title": "次世代リーダー対談",
  "participantIds": [7, 8],  // ← 参加者の人物ID
  "image": "/img/no_image.png",  // ← 後で実際の画像パスに変更
  "description": "次世代を担う若手経営者たちが語る、新しいビジネスの形。"
}
```

### 2. 詳細データファイルを作成

**ファイル:** `data/crosstalk/[id].json`（例: `data/crosstalk/4.json`）

以下のテンプレートをコピーして、新しいファイルを作成します：

```json
{
  "id": 4,
  "number": 4,
  "title": "次世代リーダー対談",
  "participantIds": [7, 8],
  "image": "/img/no_image.png",
  "description": "次世代を担う若手経営者たちが語る、新しいビジネスの形。",
  "videoUrl": "/videos/crosstalk4.mp4",
  "date": "2025.11.20",
  "content": [
    {
      "type": "section",
      "title": "セクションタイトル",
      "text": "本文テキスト。\n\n段落を分ける場合は改行を2つ入れます。"
    },
    {
      "type": "qa",
      "question": "質問内容をここに記載",
      "answers": [
        {
          "personId": 7,
          "answer": "回答内容をここに記載"
        },
        {
          "personId": 8,
          "answer": "回答内容をここに記載"
        }
      ]
    }
  ],
  "relatedCrosstalk": [1, 2]
}
```

### 3. 画像ファイルを配置

**配置場所:** `public/img/`

画像ファイル名を `no_image.png` から実際のファイル名に変更します。
例えば、`crosstalk4.jpg` を配置した場合：

- `data/content.json` の該当エントリの `"image"` を `/img/crosstalk4.jpg` に変更
- `data/crosstalk/4.json` の `"image"` を `/img/crosstalk4.jpg` に変更

---

## 更新情報を追加

**ファイル:** `data/content.json`

`updates.items` 配列の**先頭**に新しいエントリを追加します（最新のものが上に表示されます）：

```json
{
  "date": "2025.11.20",
  "personIds": [12]  // ← 追加した人物のID
}
```

---

## 画像ファイルの配置

### 配置場所

すべての画像は `public/img/` ディレクトリに配置します。

### ファイル名の規則

- **人物画像:** `person[ID].jpg` （例: `person12.jpg`）
- **クロストーク画像:** `crosstalk[ID].jpg` （例: `crosstalk4.jpg`）
- **プレースホルダー画像:** `no_image.png` （既存）

### 画像サイズの推奨

- **人物画像:** 800x800px（正方形）
- **クロストーク画像:** 1200x900px（4:3）
- **ファイルサイズ:** 各ファイル500KB以下を推奨

---

## チェックリスト

新しいコンテンツを追加する際は、以下をチェックしてください：

### 人物追加時

- [ ] `data/people-list.json` にエントリを追加
- [ ] `data/people/[id].json` ファイルを作成
- [ ] `data/content.json` の `updates.items` に追加
- [ ] 画像ファイルを `public/img/` に配置
- [ ] JSONファイル内の画像パスを更新
- [ ] `npm run build` でエラーがないことを確認

### クロストーク追加時

- [ ] `data/content.json` の `crosstalk.items` に追加
- [ ] `data/crosstalk/[id].json` ファイルを作成
- [ ] 画像ファイルを `public/img/` に配置
- [ ] JSONファイル内の画像パスを更新
- [ ] `npm run build` でエラーがないことを確認

---

## トラブルシューティング

### 画像が表示されない

1. ファイルが `public/img/` に配置されているか確認
2. JSONファイル内のパスが `/img/ファイル名` になっているか確認（`public` は含めない）
3. ファイル名の大文字小文字が一致しているか確認
4. 開発サーバーを再起動してみる

### ビルドエラーが出る

1. JSONファイルの構文が正しいか確認（カンマの位置、括弧の閉じ忘れなど）
2. IDの重複がないか確認
3. 存在しない人物IDを参照していないか確認（`participantIds`、`relatedPeople` など）

---

## お問い合わせフォームのGoogle Forms設定

お問い合わせページは現在、Google Formsと連携するように設計されています。以下の手順でGoogle Formsを設定してください。

### 1. Google Formsの作成

1. [Google Forms](https://forms.google.com/) にアクセス
2. 「新しいフォームを作成」をクリック
3. 以下のフィールドを作成：
   - **お名前** （記述式、必須）
   - **メールアドレス** （記述式、必須）
   - **会社名・組織名** （記述式、任意）
   - **電話番号** （記述式、任意）
   - **お問い合わせカテゴリ** （プルダウン、必須）
     - 選択肢: 取材記事掲載について / 広告掲載について / 月刊Singについて / その他のお問い合わせ
   - **お問い合わせ内容** （段落、必須）

### 2. フォームURLとentry番号の取得

#### フォームURLの取得
1. Google Formsの編集画面で「送信」ボタンをクリック
2. URLをコピー（例: `https://docs.google.com/forms/d/e/xxxxx/viewform`）
3. URLの `viewform` を `formResponse` に変更
   - 変更前: `https://docs.google.com/forms/d/e/1FAIpQLSfy.../viewform`
   - 変更後: `https://docs.google.com/forms/d/e/1FAIpQLSfy.../formResponse`

#### entry番号の取得
1. Google Formsの編集画面で「プレビュー」ボタン（目のアイコン）をクリック
2. プレビュー画面で右クリック→「ページのソースを表示」
3. `entry.` で検索し、各フィールドのentry番号を確認
   - 例: `entry.179077895` → お名前のentry番号は `179077895`
4. 各フィールドのentry番号をメモ

### 3. app/contact/page.tsxの更新

**ファイル:** `app/contact/page.tsx`

#### 3-1. Google Forms URLを設定

```typescript
// 変更前
const googleFormURL = 'GOOGLE_FORM_URL_HERE'

// 変更後（実際のURLに置き換える）
const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfy.../formResponse'
```

#### 3-2. entry番号を設定

```typescript
// 変更前
formDataToSend.append('entry.XXXXXX', formData.name)
formDataToSend.append('entry.XXXXXX', formData.email)
formDataToSend.append('entry.XXXXXX', formData.company)
formDataToSend.append('entry.XXXXXX', formData.phone)
formDataToSend.append('entry.XXXXXX', formData.category)
formDataToSend.append('entry.XXXXXX', formData.message)

// 変更後（実際のentry番号に置き換える）
formDataToSend.append('entry.179077895', formData.name)
formDataToSend.append('entry.1749626015', formData.email)
formDataToSend.append('entry.752550451', formData.company)
formDataToSend.append('entry.1392739438', formData.phone)
formDataToSend.append('entry.226672687', formData.category)
formDataToSend.append('entry.2012956984', formData.message)
```

### 4. メールアドレスの更新

お問い合わせ情報セクションに表示されるメールアドレスも更新してください。

**ファイル:** `app/contact/page.tsx`

```typescript
// 変更前
<a href="mailto:info@example.com" className="text-gray-700 hover:underline">
  info@example.com
</a>

// 変更後（実際のメールアドレスに置き換える）
<a href="mailto:contact@yourcompany.com" className="text-gray-700 hover:underline">
  contact@yourcompany.com
</a>
```

### 5. 動作確認

1. 開発サーバーを起動: `npm run dev`
2. `/contact` ページにアクセス
3. テストデータを入力して送信
4. Google Formsの「回答」タブで送信データが受信できているか確認

### トラブルシューティング

#### フォーム送信後、Google Formsに反映されない

1. Google Forms URLが正しく設定されているか確認
2. `formResponse` に変更されているか確認
3. entry番号が正しいか再確認
4. ブラウザのコンソールでエラーが出ていないか確認

#### CORSエラーが表示される

- `mode: 'no-cors'` が設定されているため、CORSエラーは表示されません
- ただし、送信結果の確認はGoogle Formsの「回答」タブで行ってください

---

## 問い合わせ

不明な点がありましたら、開発チームにお問い合わせください。
