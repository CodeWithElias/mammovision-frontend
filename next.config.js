/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost'],
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5000/:path*',
        },
      ]
    },
  }
  
  module.exports = nextConfig