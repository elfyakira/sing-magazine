'use client'

import Link from 'next/link'
import Image from 'next/image'

type Interview = {
  id: number
  category: string
  title: string
  description: string
  image: string
  interviewNumber: number
}

type InterviewSliderProps = {
  interviews: Interview[]
  sectionTitle: string
}

export default function InterviewSlider({ interviews, sectionTitle }: InterviewSliderProps) {
  // データを3倍にして無限ループを実現
  const tripledInterviews = [...interviews, ...interviews, ...interviews]

  return (
    <div className="relative w-screen overflow-hidden" style={{ marginLeft: 'calc(50% - 50vw)' }}>
      {/* スクロールコンテナ */}
      <div className="flex gap-6 px-8 animate-infinite-scroll">
        {tripledInterviews.map((interview, index) => (
          <Link
            key={`${interview.id}-${index}`}
            href={`/interviews/${interview.id}`}
            className="flex-shrink-0 w-[300px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <div className="w-full aspect-square relative overflow-hidden">
                <Image
                  src={interview.image || "/img/no_image.png"}
                  alt={interview.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded">
                {sectionTitle} {String(interview.interviewNumber).padStart(2, '0')}
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-2">業種：{interview.category}</p>
              <h3 className="font-bold text-black text-sm mb-2 line-clamp-2">
                {interview.title}
              </h3>
              <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                {interview.description}
              </p>
              <div className="text-primary-green text-xs font-bold">
                Read more →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* グラデーションオーバーレイ（左右の端をぼかす） */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#f8f8f8] to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#f8f8f8] to-transparent pointer-events-none z-10"></div>
    </div>
  )
}
