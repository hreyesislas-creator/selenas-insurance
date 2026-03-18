/** @type {import('next').NextConfig} */
const nextConfig = {
  // Twilio is a CommonJS module — keep it server-side only, never bundled by webpack
  // NOTE: In Next.js 14.1+, this moved out of experimental
  serverExternalPackages: ['twilio'],

  images: {
    remotePatterns: [],
  },

  // Security: don't expose Next.js version
  poweredByHeader: false,
}

module.exports = nextConfig
