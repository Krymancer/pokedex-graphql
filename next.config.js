/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'],
    loader: 'akamai',
    path: '/next-images/',
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
