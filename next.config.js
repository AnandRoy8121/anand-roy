/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/anand-roy',
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
