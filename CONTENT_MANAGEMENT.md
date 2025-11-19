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

## 問い合わせ

不明な点がありましたら、開発チームにお問い合わせください。
