/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['fonts.googleapis.com'],
      unoptimized: true
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*'
            }
          ]
        }
      ]
    }
  }
  
  module.exports = nextConfig