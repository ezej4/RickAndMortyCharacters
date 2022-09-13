/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "rickandmortyapi.com"],
  },
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_HOST,
  },
}

module.exports = nextConfig
