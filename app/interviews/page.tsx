import Link from 'next/link'
import Image from 'next/image'
import peopleList from '@/data/people-list.json'
import content from '@/data/content.json'

export default function InterviewsPage() {
  // 全ての人物データを取得
  const profiles = peopleList

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* ページタイトル */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            {content.profileSection.title}
          </h1>
          <div className="w-20 h-1 bg-primary-green"></div>
        </div>

        {/* 取材記事グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10">
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              href={`/interviews/${profile.id}`}
              className="flex gap-6 items-start group hover:bg-gray-50 p-4 -m-4 rounded-lg transition-colors duration-200"
            >
              {/* 画像 */}
              <div className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden relative">
                <Image
                  src={profile.image || "/img/no_image.png"}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* テキスト情報 */}
              <div className="flex-1 min-w-0">
                {/* 肩書き・組織名 */}
                {profile.title && (
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {profile.title}
                  </p>
                )}

                {/* 名前 */}
                <h2 className="text-lg md:text-xl font-bold text-black mb-3 group-hover:text-primary-green transition-colors">
                  {profile.name}
                </h2>

                {/* キャッチフレーズ */}
                <p className="text-sm text-gray-700 line-clamp-3">
                  {profile.catchphrase}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* もっと見るボタン（オプション） */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gray-200 text-gray-700 font-medium rounded hover:bg-gray-300 transition-colors">
            もっと見る
          </button>
        </div>
      </div>
    </main>
  )
}
