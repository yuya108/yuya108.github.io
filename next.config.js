/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/yuya108.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/yuya108.github.io/' : '',
}

module.exports = nextConfig