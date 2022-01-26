/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'],
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
