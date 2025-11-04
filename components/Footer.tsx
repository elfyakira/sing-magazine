import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-gray border-t border-border-card py-9 pb-10 px-8 mt-[100px]">
      <nav className="max-w-[1200px] mx-auto mb-5 flex items-center justify-center flex-wrap gap-7">
        <Link
          href="/company"
          className="text-[13px] font-medium text-text-secondary transition-colors duration-300 hover:text-primary-green"
        >
          会社情報
        </Link>
        <Link
          href="/about"
          className="text-[13px] font-medium text-text-secondary transition-colors duration-300 hover:text-primary-green"
        >
          月刊Singとは
        </Link>
        <Link
          href="/contact"
          className="text-[13px] font-medium text-text-secondary transition-colors duration-300 hover:text-primary-green"
        >
          お問い合わせ
        </Link>
        <Link
          href="/privacy"
          className="text-[13px] font-medium text-text-secondary transition-colors duration-300 hover:text-primary-green"
        >
          プライバシーポリシー
        </Link>
        <Link
          href="/terms"
          className="text-[13px] font-medium text-text-secondary transition-colors duration-300 hover:text-primary-green"
        >
          利用規約
        </Link>
      </nav>
      <p className="text-center text-text-lighter text-[11px] m-0 font-normal">
        Copyright © {currentYear} 月刊Sing. All rights reserved.
      </p>
    </footer>
  )
}
