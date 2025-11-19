import content from '@/data/content.json'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[900px] mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {content.site.name}とは?
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-primary-green mb-8">
            経営者と経営者をつなぐビジネス交差点。
          </p>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>{content.site.company}が発行する『{content.site.name}』は、</p>
            <p>企業や個人事業主を特集し、各分野で活躍する経営者の思想やビジョンを</p>
            <p>紹介するビジネスメディアです。</p>
            <p className="pt-4">
              誌面を通じて、ビジネスマッチングや異業種交流のきっかけを生み出し、<br />
              "人と企業の可能性を広げる"ツールとしてご活用いただけます。
            </p>
          </div>
        </div>
      </section>

      {/* ミッションセクション */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 whitespace-pre-line">
              日本の創造する<br />リーダーたち
            </h2>
            <p className="text-xl text-primary-green font-medium mb-8">{content.site.name}</p>
            <p className="text-base text-gray-700 leading-relaxed max-w-[800px] mx-auto whitespace-pre-line">
              急激な社会変化、地方課題の複雑化、ビジネス環境の不確実性──。<br />
              こうした時代だからこそ、「人の言葉」に耳を傾ける価値が高まっています。<br />
              誌面では、現場で奮闘するリーダーたちの生の声を通じて、理念と戦略の両輪を持つ"実践者の視点"をお届けします。
            </p>
          </div>

          {/* 特徴カード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-2">なぜ今、"対談"なのか</h3>
              <p className="text-sm text-gray-600 mb-4">―挑戦の軌跡に学ぶ、未来をひらく知見</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-4">地方創生との接点</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                地域社会の未来を考えるうえで、企業や個人が果たすべき役割とは何か。
                地方に根ざす企業の挑戦、都市部との連携による可能性、新たなビジネスモデルの創出。
                それぞれの対談には、地方創生に通じるヒントやきっかけが隠されています。
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-black mb-4">ビジネスマッチングの触媒に</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                本企画は、単なる読み物ではなく「人と企業をつなぐ」ための起点でもあります。
                対談を通して紹介される思想や事業の在り方が、新たな連携や協業の可能性を生む──。
                そんな"きっかけの場"として、読者と社会に価値を届けていきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ビジネスマッチングセクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="text-3xl font-bold text-black mb-3 text-center">地方創生と企業の役割</h2>
          <p className="text-xl text-primary-green font-medium mb-8 text-center">ビジネスマッチングの可能性</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              地方創生の柱の一つは、地域経済の活性化です。これを実現するには、地元企業の成長だけでなく、外部企業との協働が鍵を握ります。例えば、都市部の先端技術を持つ企業と、地方の資源やノウハウを持つ企業が手を組むことで、双方にメリットを生むビジネスモデルが生まれます。
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              さらに、地方企業は独自の強みを持っていることが少なくありません。特産品、伝統工芸、観光資源など、都市部では得られない価値がそこにはあります。こうしたリソースを活用しつつ、新たなマーケットや事業モデルを生み出すことが、地方創生の核となるでしょう。
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              ビジネスマッチングとは、異なる企業同士を結びつけ、新たな事業や価値を創出する仕組みです。これが地方創生と結びつくことで、以下のような効果が期待できます。
            </p>

            <div className="space-y-8 mt-10">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-black mb-3">1. 地域資源の高度利用</h3>
                <p className="text-gray-700 leading-relaxed">
                  地域の特色ある資源を活用し、付加価値の高い商品やサービスを生み出すことが可能です。たとえば、都市部のIT企業が、地方の農業法人と連携してスマート農業プロジェクトを立ち上げることで、効率的な生産体制を実現するといった事例があります。
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-black mb-3">2. 販路拡大</h3>
                <p className="text-gray-700 leading-relaxed">
                  地方企業が都市部企業と協力することで、都市圏や海外市場への進出が容易になります。逆に、都市部企業も地方のネットワークを活用して新たな顧客層を開拓できます。
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-black mb-3">3. イノベーションの創出</h3>
                <p className="text-gray-700 leading-relaxed">
                  異なる業種や背景を持つ企業が出会うことで、従来の枠を超えた革新的なアイデアが生まれることがあります。たとえば、地方の観光資源を活用したアートイベントや、地元食材を使った新商品開発などは、地元住民と観光客の双方に喜ばれる取り組みです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
