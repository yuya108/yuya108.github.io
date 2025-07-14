import Link from 'next/link'
import { Github, Linkedin, Mail, FileText, Code, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
                Y
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">
                Yuya
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {' '}Developer
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                フルスタック開発者として、革新的なWebアプリケーションと
                美しいユーザーエクスペリエンスを創造しています。
              </p>
            </div>
            
            <div className="flex justify-center space-x-6 mb-12">
              <a 
                href="https://github.com/yuya108" 
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 text-white"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 text-white"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 text-white"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </header>

          <nav className="grid md:grid-cols-3 gap-6 mb-16">
            <Link 
              href="/blog" 
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-purple-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white">Blog</h2>
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                技術記事や開発の学びを共有しています
              </p>
            </Link>

            <Link 
              href="/projects" 
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-pink-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white">Projects</h2>
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                これまでに手がけたプロジェクトの紹介
              </p>
            </Link>

            <Link 
              href="/about" 
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Star className="w-8 h-8 text-yellow-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white">About</h2>
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                経歴やスキル、興味のあることについて
              </p>
            </Link>
          </nav>

          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'React', 'Next.js', 'TypeScript', 'Node.js',
                'Python', 'PostgreSQL', 'AWS', 'Docker'
              ].map((tech) => (
                <div 
                  key={tech} 
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
