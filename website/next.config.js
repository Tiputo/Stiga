/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
