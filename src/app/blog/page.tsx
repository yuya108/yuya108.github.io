import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "Next.js 14とApp Routerで始める現代的なWebアプリケーション開発",
    excerpt: "Next.js 14の新機能とApp Routerを使った効率的な開発手法について解説します。",
    date: "2024-01-15",
    readTime: "5分",
    tags: ["Next.js", "React", "TypeScript"]
  },
  {
    id: 2,
    title: "TailwindCSSでレスポンシブデザインを効率的に実装する方法",
    excerpt: "TailwindCSSを使ってモバイルファーストなレスポンシブデザインを実装するコツとベストプラクティス。",
    date: "2024-01-10",
    readTime: "7分",
    tags: ["CSS", "TailwindCSS", "デザイン"]
  },
  {
    id: 3,
    title: "GitHub Actionsを使った自動デプロイの設定方法",
    excerpt: "CI/CDパイプラインの構築とGitHub Pagesへの自動デプロイを設定する手順を詳しく説明します。",
    date: "2024-01-05",
    readTime: "8分",
    tags: ["GitHub", "CI/CD", "デプロイ"]
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              ホームに戻る
            </Link>
            
            <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
            <p className="text-xl text-gray-300">
              技術的な学びや開発体験を記事として共有しています
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold text-white mb-3 hover:text-purple-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <div className="flex items-center text-gray-400 text-sm space-x-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-block text-purple-400 hover:text-purple-300 font-medium transition-colors"
                >
                  続きを読む →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}