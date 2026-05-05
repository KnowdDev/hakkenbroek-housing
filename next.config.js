/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'a0.muscache.com', 'hakkenbroek.com'],
    unoptimized: true
  },
  output: 'export'
}

module.exports = nextConfig
