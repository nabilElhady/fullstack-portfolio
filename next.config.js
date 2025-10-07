/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    domains: [
      'i.ibb.co',
      'iili.io',
      'i.postimg.cc',
      'img.freepik.com',
      'seeklogo.com',
      'cdn.iconscout.com',
      'img.icons8.com',
      'cdn-icons-png.flaticon.com',
      'www.freepnglogos.com',
      'www.seekpng.com',
      'cdn4.iconfinder.com'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
