import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-border-medium z-[1000] shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
      <div className="max-w-[1200px] mx-auto px-8 h-20 flex items-center justify-between gap-12 md:h-auto md:flex-wrap md:py-4 md:gap-4 md:px-6">
        {/* ロゴ */}
        <Link 
          href="/" 
          className="text-[26px] font-bold leading-none tracking-wide text-text-primary whitespace-nowrap transition-colors duration-300 hover:text-primary-green md:w-full"
        >
          月刊Sing
        </Link>

        {/* ナビゲーション */}
        <nav className="flex items-center gap-10 flex-1 justify-center md:w-full md:gap-5 md:justify-start">
          <Link
            href="/about"
            className="text-base font-medium text-text-primary whitespace-nowrap transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary-green after:scale-x-0 after:transition-transform after:duration-300 hover:text-primary-green hover:after:scale-x-100"
          >
            月刊Singとは
          </Link>
          <Link
            href="/interviews"
            className="text-base font-medium text-text-primary whitespace-nowrap transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary-green after:scale-x-0 after:transition-transform after:duration-300 hover:text-primary-green hover:after:scale-x-100"
          >
            取材記事一覧
          </Link>
          <Link
            href="/contact"
            className="text-base font-medium text-text-primary whitespace-nowrap transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary-green after:scale-x-0 after:transition-transform after:duration-300 hover:text-primary-green hover:after:scale-x-100"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* 検索フォーム */}
        <form className="flex items-center relative flex-shrink-0 md:order-[-1]">
          <input
            type="search"
            placeholder="サイト内検索"
            className="w-[220px] h-[38px] px-[14px] pr-[46px] border border-border-dark rounded bg-bg-gray-lightest text-sm outline-none transition-all duration-300 placeholder:text-text-lighter focus:border-primary-green focus:bg-white md:w-[180px]"
            aria-label="サイト内検索"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 w-[46px] bg-[#999999] border-none rounded-r cursor-pointer flex items-center justify-center transition-colors duration-300 hover:bg-primary-green"
            aria-label="検索"
          >
            <svg 
              className="w-[18px] h-[18px] fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
        </form>
      </div>
    </header>
  )
}
