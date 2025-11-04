import Link from 'next/link'
import StructuredData from '@/components/StructuredData'

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sing-magazine.jp'

  // JSON-LD構造化データ
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: '月刊Sing',
        alternateName: ['Sing Magazine', '月刊シング'],
        description: '愛知・岐阜・三重の企業経営者や専門家への取材を通して、挑戦する人のリアルを伝える地域密着型ビジネス雑誌',
        inLanguage: 'ja',
        publisher: {
          '@type': 'Organization',
          name: '株式会社月刊Sing',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.png`,
          },
        },
      },
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: '株式会社月刊Sing',
        alternateName: '月刊Sing',
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
          addressRegion: '愛知県',
        },
        areaServed: [
          {
            '@type': 'State',
            name: '愛知県',
          },
          {
            '@type': 'State',
            name: '岐阜県',
          },
          {
            '@type': 'State',
            name: '三重県',
          },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${baseUrl}/#service`,
        name: '月刊Sing - 経営者取材・企業PR支援',
        description: '東海地域（愛知・岐阜・三重）の企業経営者への取材、企業PRサポート、ビジネスマッチング支援を提供',
        serviceType: '経営者取材・メディア掲載',
        provider: {
          '@type': 'Organization',
          name: '株式会社月刊Sing',
        },
        areaServed: [
          {
            '@type': 'State',
            name: '愛知県',
          },
          {
            '@type': 'State',
            name: '岐阜県',
          },
          {
            '@type': 'State',
            name: '三重県',
          },
        ],
        audience: {
          '@type': 'Audience',
          audienceType: '企業経営者・中小企業・専門家',
        },
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

  // サンプルデータ（後で実際のデータに置き換え）
  const featuredInterviews = [
    {
      id: 1,
      date: '2025.11.04',
      category: '製造業',
      title: '挑戦を続ける経営者の物語',
      description: '愛知県で50年続く製造業。三代目社長が語る、伝統と革新の両立とは。',
      image: '/img/placeholder.jpg'
    },
    {
      id: 2,
      date: '2025.11.03',
      category: 'IT・サービス',
      title: '地域とつながるビジネス',
      description: '岐阜発のスタートアップ。地域課題をテクノロジーで解決する挑戦。',
      image: '/img/placeholder.jpg'
    },
    {
      id: 3,
      date: '2025.11.02',
      category: '飲食・小売',
      title: '想いを形にする店づくり',
      description: '三重の小さな町で愛される飲食店。お客様との絆を大切にする理由。',
      image: '/img/placeholder.jpg'
    },
  ]

  return (
    <>
      <StructuredData data={jsonLd} />

      {/* ヒーローセクション */}
      <section className="bg-bg-hero py-[60px] pb-[50px] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              東海の経営者・挑戦者を取材する
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-6">
              ビジネスマッチングメディア
            </p>
            <p className="text-base text-text-primary max-w-3xl mx-auto leading-relaxed">
              愛知・岐阜・三重の企業経営者や専門家への取材を通して、<br className="hidden md:block" />
              挑戦する人のリアルを伝える地域密着型ビジネス雑誌です。
            </p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <div className="max-w-[1200px] mx-auto px-8 py-[60px] md:py-10">

        {/* 特徴セクション */}
        <section className="mb-[60px] md:mb-10">
          <h2 className="text-base font-bold text-text-primary mb-[25px]">
            月刊Singの特徴
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white border border-border-card rounded-sm transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:border-primary-green">
              <h3 className="text-[18px] font-bold text-text-primary mb-3">経営者取材</h3>
              <p className="text-sm text-text-primary leading-relaxed">
                紆余曲折、挑戦、想いを伝える深い取材。経営者の人生と事業にかける思いをお届けします。
              </p>
            </div>
            <div className="p-8 bg-white border border-border-card rounded-sm transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:border-primary-green">
              <h3 className="text-[18px] font-bold text-text-primary mb-3">ビジネスマッチング</h3>
              <p className="text-sm text-text-primary leading-relaxed">
                企業同士をつなぎ、地域経済を活性化。取材をきっかけに新しいビジネスが生まれています。
              </p>
            </div>
            <div className="p-8 bg-white border border-border-card rounded-sm transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:border-primary-green">
              <h3 className="text-[18px] font-bold text-text-primary mb-3">地域交流</h3>
              <p className="text-sm text-text-primary leading-relaxed">
                出会いの場を創出し、共に成長する。読者と経営者、企業同士をつなぐプラットフォームです。
              </p>
            </div>
          </div>
        </section>

        {/* 注目の取材記事 */}
        <section className="mb-[60px] md:mb-10">
          <h2 className="text-base font-bold text-text-primary mb-[25px]">
            注目の取材記事
          </h2>
          <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
            {featuredInterviews.map((interview) => (
              <Link
                key={interview.id}
                href={`/interviews/${interview.id}`}
                className="flex flex-col bg-white border border-border-card rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:border-primary-green"
              >
                <div className="w-full aspect-square bg-bg-gray-light overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-bg-gray-light to-bg-gray flex items-center justify-center">
                    <span className="text-text-light text-sm">画像準備中</span>
                  </div>
                </div>
                <div className="p-[18px] flex-1 flex flex-col">
                  <time className="block text-[11px] text-text-date mb-2 font-medium">
                    {interview.date}
                  </time>
                  <p className="text-xs text-text-light mb-1.5">{interview.category}</p>
                  <h3 className="text-[15px] font-bold text-text-primary mb-2.5">
                    {interview.title}
                  </h3>
                  <p className="text-[13px] text-[#555555] leading-relaxed line-clamp-3">
                    {interview.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTAセクション */}
        <section className="text-center py-12 bg-bg-gray-lightest rounded-sm">
          <h2 className="text-xl font-bold text-text-primary mb-4">
            取材のご依頼・お問い合わせ
          </h2>
          <p className="text-sm text-text-primary mb-8 max-w-2xl mx-auto leading-relaxed">
            月刊Singでは、東海地域で活躍する経営者・専門家の取材を募集しています。<br />
            あなたの挑戦、想いを多くの人に届けませんか？
          </p>
          <Link
            href="/contact"
            className="inline-block px-14 py-4 bg-[#999999] text-white text-sm font-bold rounded-sm transition-all duration-300 hover:bg-primary-green hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(139,195,74,0.3)]"
          >
            お問い合わせはこちら →
          </Link>
        </section>

      </div>
    </>
  )
}
