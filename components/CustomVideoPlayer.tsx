'use client'

import { useRef, useState, useEffect } from 'react'

type CustomVideoPlayerProps = {
  src: string
}

export default function CustomVideoPlayer({ src }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => {
      setCurrentTime(video.currentTime)
      setProgress((video.currentTime / video.duration) * 100)
    }

    const updateDuration = () => {
      setDuration(video.duration)
    }

    video.addEventListener('timeupdate', updateTime)
    video.addEventListener('loadedmetadata', updateDuration)

    return () => {
      video.removeEventListener('timeupdate', updateTime)
      video.removeEventListener('loadedmetadata', updateDuration)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video) return

    const rect = e.currentTarget.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    video.currentTime = pos * video.duration
  }

  const handleRewind = () => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = Math.max(0, video.currentTime - 10)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full aspect-video rounded-sm bg-black"
        src={src}
      />

      {/* カスタムコントロール */}
      <div className="flex items-center gap-2 mt-3">
        {/* 再生ボタン */}
        <button
          onClick={togglePlay}
          className="w-14 h-10 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0"
          aria-label={isPlaying ? '一時停止' : '再生'}
        >
          {isPlaying ? (
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* 時間表示 */}
        <div className="text-sm font-medium text-black min-w-[45px]">
          {formatTime(currentTime)}
        </div>

        {/* シークバー */}
        <div
          className="flex-1 h-2 bg-black rounded-full cursor-pointer relative overflow-hidden"
          onClick={handleSeek}
        >
          <div
            className="absolute top-0 left-0 h-full bg-gray-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* 戻るボタン */}
        <button
          onClick={handleRewind}
          className="w-10 h-10 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0"
          aria-label="10秒戻る"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
