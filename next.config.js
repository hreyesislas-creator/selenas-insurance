/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Twilio is CommonJS — must be excluded from webpack bundling
    serverComponentsExternalPackages: ['twilio'],
  },
  images: {
    remotePatterns: [],
  },
  poweredByHeader: false,
}

module.exports = nextConfig
