import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import UpdatesList from '@/components/UpdatesList'
import ProfileGrid from '@/components/ProfileGrid'
import CustomVideoPlayer from '@/components/CustomVideoPlayer'
import InterviewSlider from '@/components/InterviewSlider'
import CrosstalkSection from '@/components/CrosstalkSection'
import content from '@/data/content.json'
import peopleList from '@/data/people-list.json'

export default function Home() {
  const baseUrl = content.site.baseUrl

  // 更新情報：personIdsから人物データを取得
  const updates = content.updates.items.map(item => ({
    date: item.date,
    personIds: item.personIds,
    names: item.personIds.map(id => {
      const person = peopleList.find(p => p.id === id)
      return person ? `${person.title} ${person.name}` : ''
    }).filter(Boolean)
  }))

  // フィーチャープロフィール：IDから人物データを取得
  const profiles = content.featuredProfiles.map(id => {
    const person = peopleList.find(p => p.id === id)
    return person ? {
      id: person.id,
      name: person.name,
      title: person.title,
      catchphrase: person.catchphrase,
      image: person.image
    } : null
  }).filter(Boolean)

  // 全インタビューデータを取得（スライダー用）
  const allInterviews = peopleList
    .filter(person => person.interviewNumber)
    .map(person => ({
      id: person.id,
      category: person.category || '',
      title: person.articleTitle || '',
      description: person.articleDescription || '',
      image: person.image,
      interviewNumber: person.interviewNumber
    }))

  // JSON-LD構造化データ
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: content.site.name,
        description: content.site.description,
        inLanguage: 'ja',
        publisher: {
          '@type': 'Organization',
          name: content.site.company,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.png`,
          },
        },
      },
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: content.site.company,
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'お問い合わせ',
          areaServed: ['JP'],
          availableLanguage: ['ja'],
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'JP',
        },
        areaServed: content.regions,
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${baseUrl}/#service`,
        name: `${content.site.name} - 経営者取材・企業PR支援`,
        description: content.site.description,
        serviceType: '経営者取材・メディア掲載',
        provider: {
          '@type': 'Organization',
          name: content.site.company,
        },
        areaServed: content.regions,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'ホーム',
            item: baseUrl,
          },
        ],
      },
    ],
  }

  return (
    <>
      <StructuredData data={jsonLd} />

      {/* ヒーローセクション - 動画背景 */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* デスクトップ用動画 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
        >
          <source src={content.hero.desktopVideo} type="video/mp4" />
        </video>
        {/* モバイル用動画 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={content.hero.mobileVideo} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl">
              {content.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* アバウトセクション */}
      <section className="bg-[#f0f4f8] py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="mb-8">
                <svg
                  className="w-24 md:w-32 h-auto"
                  viewBox="0 0 120 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="15" cy="25" rx="12" ry="22" fill="black"/>
                  <ellipse cx="40" cy="25" rx="12" ry="22" fill="black"/>
                  <circle cx="85" cy="25" r="22" fill="black"/>
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight whitespace-pre-line">
                {content.about.title}
              </h2>
            </div>
            <div className="space-y-6 text-black">
              {content.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* フィーチャーセクション */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          {/* 3カラムレイアウト */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 左カラム：更新情報 */}
            <div className="lg:col-span-1">
              <UpdatesList updates={updates} />
            </div>

            {/* 中央カラム：私のカクゴ一覧 */}
            <div className="lg:col-span-1">
              <ProfileGrid
                profiles={profiles as any}
                title={content.profileSection.title}
                layout="list"
              />
            </div>

            {/* 右カラム：動画プレーヤー */}
            <div className="lg:col-span-1">
              <div className="bg-gray-100 rounded-sm p-4 sticky top-8">
                <CustomVideoPlayer src={content.hero.desktopVideo} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* インタビューセクション */}
      <section className="bg-[#f8f8f8] py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-2">{content.interviews.sectionTitle}</h2>
            <p className="text-gray-600">{content.interviews.sectionSubtitle}</p>
          </div>
          <InterviewSlider
            interviews={allInterviews}
            sectionTitle={content.interviews.sectionTitle}
          />
        </div>
      </section>

      {/* クロストークセクション */}
      <CrosstalkSection
        sectionTitle={content.crosstalk.sectionTitle}
        sectionSubtitle={content.crosstalk.sectionSubtitle}
        items={content.crosstalk.items}
        people={peopleList}
      />

      {/* コンタクトセクション（CTA） */}
      <section className="bg-primary-green py-20">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {content.cta.title}
          </h2>
          <p className="text-white text-lg mb-8 leading-relaxed whitespace-pre-line">
            {content.cta.description}
          </p>
          <Link
            href={content.cta.buttonLink}
            className="inline-block px-12 py-4 bg-white text-primary-green text-base font-bold rounded-sm transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl"
          >
            {content.cta.buttonText}
          </Link>
        </div>
      </section>
    </>
  )
}
