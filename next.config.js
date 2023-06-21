// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.valorant-api.com',
          port: '',
          pathname: '/playercards/**',
        },
      ],
    },
  }