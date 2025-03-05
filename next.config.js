/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix for local development
  // basePath: '/my-portfolio',
  // assetPrefix: '/my-portfolio',
  trailingSlash: true,
}

module.exports = nextConfig 