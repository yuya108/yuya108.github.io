import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

const blogPosts = [
  {
    id: 1,
    title: "Next.js 14とApp Routerで始める現代的なWebアプリケーション開発",
    content: `
# Next.js 14とApp Routerで始める現代的なWebアプリケーション開発

Next.js 14がリリースされ、App Routerが安定版となりました。この記事では、Next.js 14の新機能とApp Routerを使った効率的な開発手法について詳しく解説します。

## App Routerの特徴

App Routerは従来のPages Routerに代わる新しいルーティングシステムです。以下のような特徴があります：

- **ファイルベースルーティング**: \`app\`ディレクトリ内のフォルダ構造がそのままURLになります
- **レイアウトの共有**: \`layout.tsx\`ファイルで複数のページ間でレイアウトを共有できます
- **サーバーコンポーネント**: デフォルトでサーバーサイドレンダリングされます

## 実装例

\`\`\`typescript
// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>ホームページ</h1>
      <p>App Routerを使った新しいNext.jsアプリケーション</p>
    </div>
  )
}
\`\`\`

## まとめ

Next.js 14とApp Routerを使うことで、より効率的で保守性の高いWebアプリケーションを開発できます。
    `,
    date: "2024-01-15",
    readTime: "5分",
    tags: ["Next.js", "React", "TypeScript"]
  },
  {
    id: 2,
    title: "TailwindCSSでレスポンシブデザインを効率的に実装する方法",
    content: `
# TailwindCSSでレスポンシブデザインを効率的に実装する方法

TailwindCSSは、ユーティリティファーストのCSSフレームワークとして多くの開発者に愛用されています。この記事では、TailwindCSSを使ってレスポンシブデザインを効率的に実装する方法を解説します。

## レスポンシブデザインの基本

TailwindCSSでは、以下のブレークポイントが定義されています：

- \`sm\`: 640px以上
- \`md\`: 768px以上  
- \`lg\`: 1024px以上
- \`xl\`: 1280px以上
- \`2xl\`: 1536px以上

## 実装例

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-white p-4 rounded-lg shadow">カード1</div>
  <div class="bg-white p-4 rounded-lg shadow">カード2</div>
  <div class="bg-white p-4 rounded-lg shadow">カード3</div>
</div>
\`\`\`

## まとめ

TailwindCSSのレスポンシブユーティリティを活用することで、効率的にモバイルファーストなデザインを実装できます。
    `,
    date: "2024-01-10",
    readTime: "7分",
    tags: ["CSS", "TailwindCSS", "デザイン"]
  },
  {
    id: 3,
    title: "GitHub Actionsを使った自動デプロイの設定方法",
    content: `
# GitHub Actionsを使った自動デプロイの設定方法

CI/CDパイプラインは現代的なソフトウェア開発において必須の要素です。この記事では、GitHub Actionsを使ってGitHub Pagesへの自動デプロイを設定する方法を詳しく説明します。

## GitHub Actionsとは

GitHub Actionsは、GitHubが提供するCI/CDプラットフォームです。リポジトリ内の\`.github/workflows\`ディレクトリにYAMLファイルを配置することで、自動化されたワークフローを定義できます。

## ワークフローの設定

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm ci
      - run: npm run build
      - uses: actions/deploy-pages@v4
\`\`\`

## まとめ

GitHub Actionsを使うことで、コードの変更を自動的にデプロイできる効率的な開発フローを構築できます。
    `,
    date: "2024-01-05",
    readTime: "8分",
    tags: ["GitHub", "CI/CD", "デプロイ"]
  }
]

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params
  const post = blogPosts.find(p => p.id === parseInt(id))
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              ブログ一覧に戻る
            </Link>
            
            <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
            
            <div className="flex items-center text-gray-400 text-sm space-x-4 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
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

          <article className="prose prose-invert prose-purple max-w-none">
            <div 
              className="text-gray-300 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
            />
          </article>
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}