import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import peopleList from '@/data/people-list.json'
import content from '@/data/content.json'

// 詳細データの読み込み
async function getCrosstalkDetail(id: string) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'crosstalk', `${id}.json`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch {
    return null
  }
}

// 関連クロストーク取得
function getRelatedCrosstalk(ids: number[]) {
  return ids
    .map(id => content.crosstalk.items.find(item => item.id === id))
    .filter(Boolean)
}

export default async function CrosstalkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const crosstalkDetail = await getCrosstalkDetail(id)

  if (!crosstalkDetail) {
    notFound()
  }

  // 参加者情報を取得
  const participants = crosstalkDetail.participantIds
    .map((personId: number) => peopleList.find(p => p.id === personId))
    .filter(Boolean)

  // 関連クロストーク取得
  const relatedCrosstalk = getRelatedCrosstalk(crosstalkDetail.relatedCrosstalk || [])

  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左カラム：メインコンテンツ */}
          <div className="lg:col-span-2">
            {/* タイトルセクション */}
            <div className="mb-6">
              <div className="text-sm font-bold text-primary-green mb-2">
                Crosstalk {String(crosstalkDetail.number).padStart(2, '0')}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                {crosstalkDetail.title}
              </h1>
              <p className="text-gray-600">{crosstalkDetail.date}</p>
            </div>

            {/* メイン画像 */}
            <div className="mb-8">
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <Image
                  src={crosstalkDetail.image}
                  alt={crosstalkDetail.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 参加者一覧 */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-black mb-4">参加者</h2>
              <div className="space-y-4">
                {participants.map((person: any) => (
                  <Link
                    key={person.id}
                    href={`/interviews/${person.id}`}
                    className="flex items-center gap-4 hover:bg-white p-3 -m-3 rounded transition-colors"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden relative">
                      <Image
                        src={person.image || "/img/no_image.png"}
                        alt={person.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{person.title}</p>
                      <p className="font-bold text-black">{person.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* コンテンツ本文 */}
            <div className="prose max-w-none">
              {crosstalkDetail.content?.map((section: any, index: number) => (
                <div key={index} className="mb-8">
                  {section.type === 'section' && (
                    <>
                      <h2 className="text-2xl font-bold text-black mb-4">
                        {section.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {section.text}
                      </p>
                    </>
                  )}
                  {section.type === 'qa' && (
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-black mb-4">
                        Q. {section.question}
                      </h3>
                      <div className="space-y-4">
                        {section.answers?.map((answer: any, answerIndex: number) => {
                          const person = participants.find((p: any) => p.id === answer.personId)
                          return (
                            <div key={answerIndex} className="bg-white rounded p-4">
                              <p className="text-sm font-bold text-primary-green mb-2">
                                {person?.name}
                              </p>
                              <p className="text-gray-700 leading-relaxed">
                                {answer.answer}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 右カラム：関連コンテンツ */}
          <div className="lg:col-span-1">
            {/* 関連クロストーク */}
            {relatedCrosstalk.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                <h2 className="text-lg font-bold text-black mb-4">関連クロストーク</h2>
                <div className="space-y-4">
                  {relatedCrosstalk.map((related: any) => (
                    <Link
                      key={related.id}
                      href={`/crosstalk/${related.id}`}
                      className="block hover:bg-white p-3 -m-3 rounded transition-colors"
                    >
                      <div className="relative aspect-video overflow-hidden rounded mb-2">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm font-bold text-primary-green mb-1">
                        Crosstalk {String(related.number).padStart(2, '0')}
                      </p>
                      <p className="text-sm font-bold text-black line-clamp-2">
                        {related.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 一覧に戻るリンク */}
        <div className="mt-12">
          <Link
            href="/crosstalk"
            className="inline-flex items-center text-primary-green font-bold hover:underline"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            クロストーク一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  )
}
