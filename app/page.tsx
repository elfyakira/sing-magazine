import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import NoticeBar from '@/components/NoticeBar'
import UpdatesList from '@/components/UpdatesList'
import ProfileGrid from '@/components/ProfileGrid'
import { Notice, Update, Profile } from '@/types/feature'

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

  // お知らせバナーデータ
  const noticeData: Notice = {
    date: '2023年11月10日',
    oldName: '覚悟の瞬間',
    newName: '私のカクゴ'
  }

  // 更新情報データ
  const updatesData: Update[] = [
    {
      date: '2025.10.01',
      names: ['衆議院議員 高市早苗']
    },
    {
      date: '2025.09.01',
      names: ['静岡県知事 鈴木康友']
    },
    {
      date: '2025.08.01',
      names: ['福井県知事 杉本 達治']
    },
    {
      date: '2025.06.01',
      names: ['野球解説者 山本昌']
    }
  ]

  // プロフィールデータ
  const profilesData: Profile[] = [
    {
      name: '総合格闘家',
      title: '',
    },
    {
      name: '小笠貴夫',
      title: '医療法人社団オーエフシー 理事長、おざさ医院 院長',
    },
    {
      name: '中田宏',
      title: '衆議院議員',
    },
    {
      name: '木嶋真優',
      title: 'ヴァイオリニスト',
    },
    {
      name: '佐野俊二',
      title: '岡山大学学術部 心臓血管外科長',
    },
    {
      name: 'Daichi',
      title: 'ヒューマンビートボクサー',
    }
  ]

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

      {/* ヒーローセクション - 動画背景 */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/ui/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              想いでつながる、未来を創る
            </h1>
            <p className="text-xl md:text-2xl">
              東海の経営者・挑戦者を取材するビジネスマッチングメディア
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
                <div className="text-6xl md:text-8xl font-black text-black mb-4">
                  MOO
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                想いがあるから、<br />
                出会える。
              </h2>
            </div>
            <div className="space-y-6 text-black">
              <p className="text-base leading-relaxed">
                ビジネスの原点は、いつの時代も「人」です。<br />
                どんなに時代が変わっても、人の想いや情熱が<br />
                企業を動かし、未来をつくっていく。
              </p>
              <p className="text-base leading-relaxed">
                私たちは、そんな経営者やビジネスリーダーの<br />
                声を届け、共感と信頼が交わる場所をつくりた<br />
                いと考えています。
              </p>
              <p className="text-base leading-relaxed">
                月刊Singは、"出会い"の先にある"信頼"を大<br />
                切にし、人と企業、地域と未来をつなげるメデ<br />
                ィアでありたいと願っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フィーチャーセクション */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          {/* お知らせバナー */}
          <NoticeBar notice={noticeData} />

          {/* 3カラムレイアウト */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 左カラム：更新情報 */}
            <div className="lg:col-span-1">
              <UpdatesList updates={updatesData} />
            </div>

            {/* 中央カラム：私のカクゴ一覧 */}
            <div className="lg:col-span-1">
              <ProfileGrid
                profiles={profilesData}
                title="私のカクゴ一覧"
                layout="list"
              />
            </div>

            {/* 右カラム：動画プレーヤー */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-1">注目動画</h2>
                <div className="w-16 h-1 bg-black"></div>
              </div>
              <div className="bg-gray-100 rounded-sm p-4 sticky top-8">
                <div className="aspect-video bg-gray-300 rounded-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">▶</div>
                    <p className="text-sm text-gray-600">動画プレーヤー</p>
                    <p className="text-xs text-gray-500 mt-2">私のカクゴ 紹介動画</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* インタビューセクション */}
      <section className="bg-[#f8f8f8] py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-black mb-2">Interview</h2>
            <p className="text-gray-600">挑戦者たちの声</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredInterviews.map((interview, index) => (
              <Link
                key={interview.id}
                href={`/interviews/${interview.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <span className="text-blue-600 text-sm">Interview {String(index + 7).padStart(2, '0')}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded">
                    Interview {String(index + 7).padStart(2, '0')}
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
        </div>
      </section>

      {/* コンタクトセクション（CTA） */}
      <section className="bg-primary-green py-20">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            あなたの想いを届けませんか？
          </h2>
          <p className="text-white text-lg mb-8 leading-relaxed">
            月刊Singでは、東海地域で活躍する経営者・専門家の取材を募集しています。<br />
            あなたの挑戦、想いを多くの人に届け、新しい出会いを創出しましょう。
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-white text-primary-green text-base font-bold rounded-sm transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl"
          >
            お問い合わせはこちら →
          </Link>
        </div>
      </section>
    </>
  )
}
