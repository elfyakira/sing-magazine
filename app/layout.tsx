import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sing-magazine.jp"),
  title: {
    default: "月刊Sing｜東海の経営者・挑戦者を取材するビジネスマッチングメディア",
    template: "%s｜月刊Sing"
  },
  description: "月刊Singは、愛知・岐阜・三重の企業経営者や専門家への取材を通して、挑戦する人のリアルを伝える地域密着型ビジネス雑誌です。経営の紆余曲折、事業への想い、新しい挑戦。取材をきっかけに企業同士がつながり、地域経済を活性化させるビジネスマッチングの場を創出します。",
  keywords: [
    "月刊Sing",
    "経営者取材",
    "東海",
    "愛知",
    "岐阜",
    "三重",
    "ビジネスマッチング",
    "地域活性",
    "経営者インタビュー",
    "地域メディア",
    "経営者ストーリー",
    "企業間連携",
    "地域交流",
    "ビジネス雑誌",
    "中小企業",
    "経営者コミュニティ",
    "経営者PR",
    "企業ブランディング",
  ],
  authors: [{ name: "株式会社月刊Sing" }],
  creator: "株式会社月刊Sing",
  publisher: "株式会社月刊Sing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://sing-magazine.jp",
    siteName: "月刊Sing",
    title: "月刊Sing｜東海の経営者・挑戦者を取材するビジネスマッチングメディア",
    description: "愛知・岐阜・三重の企業経営者への取材を通して、挑戦する人のリアルを伝える地域密着型ビジネス雑誌。ビジネスマッチングと地域交流を創出します。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "月刊Sing - 東海の経営者・挑戦者を取材するビジネスマッチングメディア"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "月刊Sing｜東海の経営者・挑戦者を取材するビジネスマッチングメディア",
    description: "愛知・岐阜・三重の企業経営者への取材を通して、挑戦する人のリアルを伝える地域密着型ビジネス雑誌。",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              function loadGoogleAnalytics() {
                if (window.gtagLoaded) return;
                window.gtagLoaded = true;
                const script = document.createElement('script');
                script.async = true;
                script.defer = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}';
                script.onload = function() {
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}', {
                    page_title: document.title,
                    page_location: window.location.href
                  });
                };
                document.head.appendChild(script);
              }
              const userEvents = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];
              userEvents.forEach(function(event) {
                document.addEventListener(event, loadGoogleAnalytics, {
                  once: true,
                  passive: true,
                  capture: true
                });
              });
              setTimeout(loadGoogleAnalytics, 10000);
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
