import Link from 'next/link'
import { Profile } from '@/types/feature'

type ProfileGridProps = {
  profiles: Profile[]
  title?: string
  layout?: 'grid' | 'list'
}

/**
 * プロフィールカードグリッドコンポーネント
 * 複数のプロフィールカードを格子状またはリスト状に配置
 */
export default function ProfileGrid({
  profiles,
  title = "一覧",
  layout = 'grid'
}: ProfileGridProps) {
  const gridClass = layout === 'grid'
    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
    : 'space-y-4'

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black mb-1">{title}</h2>
        <div className="w-16 h-1 bg-black"></div>
      </div>
      <div className={gridClass}>
        {profiles.map((profile, index) => (
          <article key={`${profile.name}-${index}`}>
            <Link
              href={`/interviews/${profile.id}`}
              className="block transition-all duration-300 hover:bg-gray-50"
            >
              <div className="py-3 border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-black text-base mb-1">
                  {profile.name}
                </h3>
                {profile.title && (
                  <p className="text-sm text-gray-700">
                    {profile.title}
                  </p>
                )}
                {profile.organization && (
                  <p className="text-xs text-gray-600 mt-1">
                    {profile.organization}
                  </p>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
