import Link from 'next/link'
import Image from 'next/image'
import content from '@/data/content.json'
import peopleList from '@/data/people-list.json'

export default function CrosstalkPage() {
  // クロストークデータを取得
  const crosstalks = content.crosstalk.items

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* ページタイトル */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            {content.crosstalk.sectionTitle}
          </h1>
          <p className="text-gray-600 mt-4">{content.crosstalk.sectionSubtitle}</p>
          <div className="w-20 h-1 bg-primary-green mt-4"></div>
        </div>

        {/* クロストークグリッド */}
        <div className="space-y-12">
          {crosstalks.map((crosstalk) => {
            // 参加者の名前を取得
            const participants = crosstalk.participantIds
              .map(id => {
                const person = peopleList.find(p => p.id === id)
                return person ? `${person.title} ${person.name}` : null
              })
              .filter(Boolean)

            return (
              <Link
                key={crosstalk.id}
                href={`/crosstalk/${crosstalk.id}`}
                className="block group"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center hover:bg-gray-50 p-6 -m-6 rounded-lg transition-colors duration-200">
                  {/* 画像 */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={crosstalk.image}
                      alt={crosstalk.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* テキスト情報 */}
                  <div>
                    {/* 番号 */}
                    <div className="text-sm font-bold text-primary-green mb-3">
                      Crosstalk {String(crosstalk.number).padStart(2, '0')}
                    </div>

                    {/* タイトル */}
                    <h2 className="text-xl md:text-2xl font-bold text-black mb-4 group-hover:text-primary-green transition-colors">
                      {crosstalk.title}
                    </h2>

                    {/* 参加者リスト */}
                    {participants.length > 0 && (
                      <div className="mb-4 text-gray-700">
                        {participants.join(' × ')}
                      </div>
                    )}

                    {/* 説明文 */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {crosstalk.description}
                    </p>

                    {/* Read moreリンク */}
                    <div className="inline-flex items-center text-primary-green font-bold">
                      Read more
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
