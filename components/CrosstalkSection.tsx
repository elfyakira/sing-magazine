import Image from 'next/image'
import Link from 'next/link'

interface Person {
  id: number
  name: string
  title: string
}

interface CrosstalkItem {
  id: number
  number: number
  title: string
  participantIds: number[]
  image: string
  description: string
}

interface CrosstalkSectionProps {
  sectionTitle: string
  sectionSubtitle: string
  items: CrosstalkItem[]
  people: Person[]
}

export default function CrosstalkSection({
  sectionTitle,
  sectionSubtitle,
  items,
  people
}: CrosstalkSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* セクションヘッダー */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-2">{sectionTitle}</h2>
          <p className="text-gray-600">{sectionSubtitle}</p>
        </div>

        {/* クロストーク一覧 */}
        <div className="space-y-16">
          {items.map((item, index) => {
            // 参加者の名前を取得
            const participants = item.participantIds
              .map(id => {
                const person = people.find(p => p.id === id)
                return person ? `${person.title} ${person.name}` : null
              })
              .filter(Boolean)

            // 偶数番目（index）は画像左、奇数番目は画像右
            const isImageLeft = index % 2 === 0

            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  isImageLeft ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* 画像カラム */}
                <div className={`${isImageLeft ? '' : 'md:order-2'}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* テキストカラム */}
                <div className={`${isImageLeft ? '' : 'md:order-1'}`}>
                  {/* 番号 */}
                  <div className="text-sm font-bold text-primary-green mb-3">
                    Crosstalk {String(item.number).padStart(2, '0')}
                  </div>

                  {/* タイトル */}
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {item.title}
                  </h3>

                  {/* 参加者リスト */}
                  {participants.length > 0 && (
                    <div className="mb-4 text-gray-700">
                      {participants.join(' × ')}
                    </div>
                  )}

                  {/* 説明文 */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Read moreリンク */}
                  <Link
                    href={`/crosstalk/${item.id}`}
                    className="inline-flex items-center text-primary-green font-bold hover:underline transition-all"
                  >
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
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
