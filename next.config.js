/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the Turbopack workspace root to this project (sibling projects on disk
  // also have lockfiles, which otherwise makes Next infer the wrong root).
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
    minimumCacheTTL: 1500000,
  },
}

module.exports = nextConfig
