'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    category: '取材記事掲載について',
    message: ''
  })

  const [showSuccess, setShowSuccess] = useState(false)

  const categories = [
    '取材記事掲載について',
    '広告掲載について',
    '月刊Singについて',
    'その他のお問い合わせ'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: GoogleフォームのURLを設定してください
    // 設定方法は CONTENT_MANAGEMENT.md を参照
    const googleFormURL = 'GOOGLE_FORM_URL_HERE'

    // フォームデータを作成
    // TODO: Google Formsの各フィールドのentry番号を設定してください
    const formDataToSend = new FormData()
    formDataToSend.append('entry.XXXXXX', formData.name) // お名前
    formDataToSend.append('entry.XXXXXX', formData.email) // メールアドレス
    formDataToSend.append('entry.XXXXXX', formData.company) // 会社名・組織名
    formDataToSend.append('entry.XXXXXX', formData.phone) // 電話番号
    formDataToSend.append('entry.XXXXXX', formData.category) // お問い合わせカテゴリ
    formDataToSend.append('entry.XXXXXX', formData.message) // お問い合わせ内容詳細

    try {
      // Google Formsが設定されている場合のみ送信
      if (googleFormURL !== 'GOOGLE_FORM_URL_HERE') {
        await fetch(googleFormURL, {
          method: 'POST',
          body: formDataToSend,
          mode: 'no-cors'
        })
      } else {
        // Google Forms未設定の場合はコンソールにログ出力
        console.log('Google Forms未設定。送信データ:', {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          category: formData.category,
          message: formData.message
        })
      }

      // 成功時の表示
      setShowSuccess(true)

      // ページトップにスムーズスクロール
      window.scrollTo({ top: 0, behavior: 'smooth' })

      // フォームをリセット
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        category: '取材記事掲載について',
        message: ''
      })
    } catch (error) {
      console.error('送信エラー:', error)
      alert('送信に失敗しました。しばらく時間をおいて再度お試しください。')
    }
  }

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      {/* Page Title Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-600">
            ご質問・ご相談はお気軽にお問い合わせください
          </p>
        </div>
      </section>

      {/* Success Message */}
      {showSuccess && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-12">
              <div className="mb-6">
                <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-black mb-6">
                お問い合わせありがとうございます
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  ご登録情報を受け付けました。
                </p>
                <p>
                  内容を確認次第、ご連絡いたします。
                </p>
                <p>
                  ご不明な点がございましたら、メールまでお問い合わせください。
                </p>
              </div>
              <div className="mt-8">
                <button
                  onClick={() => setShowSuccess(false)}
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-sm font-medium transition-colors duration-200"
                >
                  新規お問い合わせ
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {!showSuccess && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1400px] mx-auto px-8">
          {/* Contact Form Section */}
          <section className="py-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
              お問い合わせフォーム
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  会社名・組織名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder="株式会社○○○"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder="090-0000-0000"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせカテゴリ <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary-green focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary-green focus:border-transparent resize-vertical"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary-green hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-sm transition-colors duration-200"
                >
                  お問い合わせを送信
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>個人情報は適切に管理し、お問い合わせ対応以外の目的では使用いたしません。</p>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="py-8 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
              お問い合わせ情報
            </h2>

            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-black mb-4">
                  連絡先
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gray-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-black">メール</p>
                      <a href="mailto:info@example.com" className="text-gray-700 hover:underline">
                        info@example.com
                      </a>
                      <p className="text-xs text-gray-500 mt-1">※実際のメールアドレスに変更してください</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-black mb-4">
                  受付時間
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700">平日: 9:00 - 18:00</p>
                  <p className="text-gray-700">土日祝: 休業</p>
                  <p className="text-sm text-gray-600 mt-3">
                    ※お問い合わせフォームは24時間受付しております
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-black mb-4">
                  お問い合わせについて
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-gray-700">取材記事掲載について</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-gray-700">広告掲載について</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-gray-700">月刊Singについて</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-gray-700">その他のご相談</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
