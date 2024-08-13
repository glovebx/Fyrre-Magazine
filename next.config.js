/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'mmbiz.qpic.cn',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 's3.fluidics.cc',
            port: '',
          },
        ],
      },    
}

module.exports = nextConfig
