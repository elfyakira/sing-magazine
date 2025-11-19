'use client'

import Link from 'next/link'
import { useState } from 'react'
import content from '@/data/content.json'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-border-medium z-[1000] shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
      <div className="max-w-[1200px] mx-auto px-8 h-20 flex items-center justify-between md:px-6 md:h-16">
        {/* ロゴ */}
        <Link
          href="/"
          className="text-[26px] font-bold leading-none tracking-wide text-text-primary whitespace-nowrap transition-colors duration-300 hover:text-primary-green md:text-[22px]"
        >
          {content.site.name}
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center gap-10">
          {content.navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-base font-medium text-text-primary whitespace-nowrap transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary-green after:scale-x-0 after:transition-transform after:duration-300 hover:text-primary-green hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ハンバーガーメニューボタン（モバイルのみ） */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-[6px]"
          aria-label="メニュー"
          aria-expanded={isMenuOpen}
        >
          <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </button>
      </div>

      {/* モバイルメニュー */}
      <div className={`block md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
        <nav className="flex flex-col bg-white border-t border-border-medium">
          {content.navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`px-6 py-4 text-base font-medium text-text-primary hover:bg-gray-50 transition-colors duration-200 ${
                index < content.navigation.length - 1 ? 'border-b border-border-light' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
