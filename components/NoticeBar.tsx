import { Notice } from '@/types/feature'

type NoticeBarProps = {
  notice: Notice
}

/**
 * お知らせバナーコンポーネント
 * ページ上部に表示される重要なお知らせ
 */
export default function NoticeBar({ notice }: NoticeBarProps) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 py-4 px-6 mb-8">
      <p className="text-sm text-gray-700">
        <time className="font-medium">{notice.date}より</time>
        <span className="mx-2">
          「<span className="font-bold">{notice.oldName}</span>」は
          「<span className="font-bold text-blue-700">{notice.newName}</span>」に変更になります。
        </span>
      </p>
    </div>
  )
}
