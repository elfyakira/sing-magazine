import Link from 'next/link'
import { Update } from '@/types/feature'

type UpdatesListProps = {
  updates: (Update & { personIds: number[] })[]
  title?: string
}

/**
 * 更新情報リストコンポーネント
 * 日付と人物名を表示する縦型リスト
 */
export default function UpdatesList({ updates, title = "更新情報" }: UpdatesListProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black mb-1">{title}</h2>
        <div className="w-16 h-1 bg-black"></div>
      </div>
      <ul className="space-y-6" role="list">
        {updates.map((update, index) => {
          const personId = update.personIds && update.personIds[0]
          const content = (
            <>
              <div className="w-24 h-24 bg-gray-200 rounded-sm flex-shrink-0 flex items-center justify-center overflow-hidden">
                <span className="text-xs text-gray-400">画像</span>
              </div>
              <div className="flex-1 pt-2">
                <time className="block text-sm text-gray-500 mb-2 font-medium">
                  {update.date}
                </time>
                <div className="space-y-1">
                  {update.names.map((name, nameIndex) => (
                    <h3
                      key={`${name}-${nameIndex}`}
                      className="font-bold text-black text-base"
                    >
                      {name}
                    </h3>
                  ))}
                </div>
              </div>
            </>
          )

          return personId ? (
            <li key={`${update.date}-${index}`}>
              <Link
                href={`/interviews/${personId}`}
                className="flex items-start gap-4 pb-6 border-b border-gray-200 last:border-b-0 transition-all duration-300 hover:bg-gray-50 hover:px-4 hover:-mx-4 rounded-sm block"
              >
                {content}
              </Link>
            </li>
          ) : (
            <li
              key={`${update.date}-${index}`}
              className="flex items-start gap-4 pb-6 border-b border-gray-200 last:border-b-0"
            >
              {content}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
