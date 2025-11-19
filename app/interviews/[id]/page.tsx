import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import peopleList from '@/data/people-list.json'

// 詳細データの読み込み
async function getPersonDetail(id: string) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'people', `${id}.json`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch {
    return null
  }
}

// おすすめ動画用の人物データ取得
function getRelatedPeople(personIds: number[]) {
  return personIds
    .map(id => peopleList.find(p => p.id === id))
    .filter(Boolean)
}

export default async function PersonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const personDetail = await getPersonDetail(id)

  if (!personDetail) {
    notFound()
  }

  const relatedPeople = getRelatedPeople(personDetail.relatedPeople || [])

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左カラム：動画とプロフィール */}
          <div className="lg:col-span-2">
            {/* メイン動画 */}
            <div className="mb-8">
              <video
                controls
                className="w-full aspect-video bg-black rounded"
                poster={personDetail.image}
              >
                <source src={personDetail.videoUrl} type="video/mp4" />
              </video>
            </div>

            {/* プロフィールカード */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <div className="flex gap-6">
                {/* プロフィール画像 */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-32 rounded overflow-hidden relative">
                    <Image
                      src={personDetail.image || "/img/no_image.png"}
                      alt={personDetail.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* プロフィール情報 */}
                <div className="flex-1">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">{personDetail.furigana}</p>
                    <h1 className="text-3xl font-bold text-black mb-1">{personDetail.name}</h1>
                    <p className="text-sm text-gray-700">{personDetail.bloodType}</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">職業：</span>
                      <span className="text-gray-900">{personDetail.title}</span>
                    </div>
                    {personDetail.hobby && (
                      <div>
                        <span className="font-medium text-gray-700">趣味：</span>
                        <span className="text-gray-900">{personDetail.hobby}</span>
                      </div>
                    )}
                    {personDetail.motto && (
                      <div>
                        <span className="font-medium text-gray-700">座右の銘：</span>
                        <span className="text-gray-900">{personDetail.motto}</span>
                      </div>
                    )}
                  </div>

                  {/* 経歴 */}
                  {personDetail.biography && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                        {personDetail.biography}
                      </p>
                    </div>
                  )}

                  {/* オフィシャルサイト */}
                  {personDetail.officialSite && (
                    <div className="mt-4">
                      <a
                        href={personDetail.officialSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded hover:bg-gray-200 transition-colors"
                      >
                        オフィシャルサイト →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 来歴タブ */}
            {personDetail.history && personDetail.history.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">来歴</h2>
                <div className="space-y-4">
                  {personDetail.history.map((item: any, index: number) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* お気に入り */}
            {personDetail.favorites && personDetail.favorites.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">お気に入り</h2>
                <div className="space-y-6">
                  {personDetail.favorites.map((item: any, index: number) => (
                    <div key={index} className="flex gap-4 bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                          <span className="text-green-600 text-xs">IMAGE</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary-green mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 右カラム：スケジュールとおすすめ動画 */}
          <div className="lg:col-span-1">
            {/* 一日のスケジュール */}
            {personDetail.schedule && personDetail.schedule.length > 0 && (
              <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-black mb-4 text-center">一日のスケジュール</h2>

                {/* 簡易スケジュールリスト */}
                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {personDetail.schedule.map((item: any, index: number) => (
                    <div key={index} className="flex items-center gap-2 text-xs">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color || '#999' }}
                      ></div>
                      <div className="flex-1">
                        <span className="font-medium">{item.time}</span>
                        <span className="ml-2 text-gray-700">{item.activity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* おすすめ動画 */}
            {relatedPeople.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-black mb-4">おすすめ動画</h2>
                <p className="text-xs text-gray-600 mb-4">この動画を見た人はこの人の動画も観ています</p>
                <div className="grid grid-cols-3 gap-3">
                  {relatedPeople.map((person: any) => (
                    <Link
                      key={person.id}
                      href={`/interviews/${person.id}`}
                      className="group"
                    >
                      <div className="aspect-square rounded overflow-hidden mb-2 relative">
                        <Image
                          src={person.image || "/img/no_image.png"}
                          alt={person.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-xs text-center font-medium text-gray-900 group-hover:text-primary-green transition-colors">
                        {person.title}
                      </p>
                      <p className="text-xs text-center text-gray-700">
                        {person.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
