/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    domains: ['github.com', 'm.media-amazon.com', 'imgur.com'],
  },
}

module.exports = nextConfig
