/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com','upload.wikimedia.org'],
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
