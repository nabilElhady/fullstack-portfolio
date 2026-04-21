/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // allow all HTTPS image sources
        },
        {
          protocol: 'http',
          hostname: '**', // allow all HTTP image sources
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  