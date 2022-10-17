/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const ImageDomain = {
  images: {
    domains: ["press.hulu.com","image.tmdb.org"],
  },
}
module.exports = nextConfig
module.exports = ImageDomain
