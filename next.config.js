/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/anand-roy', // Base path for the application
  output: 'export', // Enable static export
  reactStrictMode: true,
}
const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()

module.exports = nextConfig
