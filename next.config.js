/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/web_portfolio',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/web_portfolio',
}

module.exports = nextConfig 