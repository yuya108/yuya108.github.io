import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "E-commerce プラットフォーム",
    description: "Next.js、TypeScript、Prismaを使用した現代的なECサイト。ユーザー認証、商品管理、決済機能を実装。",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/yuya108/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    image: "/project1.jpg"
  },
  {
    id: 2,
    title: "タスク管理アプリ",
    description: "React、Node.js、MongoDBを使用したリアルタイムタスク管理アプリケーション。チーム協業機能付き。",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
    githubUrl: "https://github.com/yuya108/task-manager",
    liveUrl: "https://task-manager-demo.herokuapp.com",
    image: "/project2.jpg"
  },
  {
    id: 3,
    title: "天気予報アプリ",
    description: "Vue.js と外部API を使用した天気予報アプリ。位置情報取得、7日間予報、アニメーション付きUI。",
    technologies: ["Vue.js", "Vuex", "OpenWeather API", "CSS3"],
    githubUrl: "https://github.com/yuya108/weather-app",
    liveUrl: "https://weather-app-demo.netlify.app",
    image: "/project3.jpg"
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              ホームに戻る
            </Link>
            
            <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
            <p className="text-xl text-gray-300">
              これまでに開発したプロジェクトの一部をご紹介します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-6xl text-white/20">🚀</div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors text-sm border border-purple-500/30"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}