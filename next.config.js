/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {}, // ✅ set as an object, not `true`
  },
}

module.exports = nextConfig
