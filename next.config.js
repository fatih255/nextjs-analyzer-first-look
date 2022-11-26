const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')


const bundleAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
    localeDetection: false
  },
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
      },
    ],
    formats:['image/avif','image/webp']
  },
  swcMinify: true,
}

module.exports = withPlugins([[bundleAnalyzer]], nextConfig)
