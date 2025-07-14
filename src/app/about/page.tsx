import Link from 'next/link'
import { ArrowLeft, Download, MapPin, Calendar } from 'lucide-react'

export default function AboutPage() {
  const skills = [
    { category: "フロントエンド", items: ["React", "Next.js", "Vue.js", "TypeScript", "TailwindCSS"] },
    { category: "バックエンド", items: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL"] },
    { category: "インフラ・ツール", items: ["AWS", "Docker", "GitHub Actions", "Vercel", "Figma"] },
    { category: "その他", items: ["Git", "Linux", "Agile", "テスト駆動開発", "レスポンシブデザイン"] }
  ]

  const experience = [
    {
      period: "2023年4月 - 現在",
      title: "フルスタック開発者",
      company: "テック株式会社",
      description: "React/Next.jsを使用したWebアプリケーションの開発、AWS上でのインフラ構築、チーム開発のリード"
    },
    {
      period: "2021年4月 - 2023年3月",
      title: "フロントエンド開発者",
      company: "スタートアップ株式会社",
      description: "Vue.jsとTypeScriptを使用したSPAの開発、UIコンポーネントライブラリの構築"
    },
    {
      period: "2020年4月 - 2021年3月",
      title: "ジュニア開発者",
      company: "ソフトウェア開発会社",
      description: "HTML/CSS/JavaScriptによるWebサイト制作、WordPressのカスタマイズ"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              ホームに戻る
            </Link>
            
            <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
            <p className="text-xl text-gray-300">
              私の経歴、スキル、興味のあることについて
            </p>
          </div>

          {/* プロフィール概要 */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl font-bold text-white flex-shrink-0">
                  Y
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4">Yuya</h2>
                  <div className="flex items-center text-gray-300 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    東京, 日本
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    4年間の開発経験を持つフルスタック開発者です。ユーザー体験を重視し、
                    美しく機能的なWebアプリケーションの開発に情熱を注いでいます。
                    新しい技術の学習と実装、チーム開発での協力を大切にしています。
                  </p>
                  <a 
                    href="/resume.pdf" 
                    download
                    className="inline-flex items-center px-6 py-3 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors border border-purple-500/30"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    履歴書をダウンロード
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* スキル */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 経歴 */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}