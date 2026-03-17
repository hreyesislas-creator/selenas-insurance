/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  // Tell Next.js to bundle Twilio server-side only (it's CommonJS)
  experimental: {
    serverComponentsExternalPackages: ['twilio'],
  },
  // Disable x-powered-by header for security
  poweredByHeader: false,
}

module.exports = nextConfig
