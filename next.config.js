/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/json/articles',
  //       destination: 'https://www.moco.co/wechat_mall/static/src/json/articles.json?20240801',
  //     },
  //     {
  //       source: '/json/news',
  //       destination: 'https://www.moco.co/wechat_mall/static/src/json/news.json?20240801',
  //     },
  //     {
  //       source: '/json/products',
  //       destination: 'https://www.moco.co/wechat_mall/static/src/json/products.json?20240801',
  //     }      
  //   ]
  // },  
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
          }
        ],
      },    
}

module.exports = nextConfig
