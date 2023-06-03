/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.themoviedb.org', 'image.tmdb.org', 'youtube.com'],
  },
};

module.exports = nextConfig;
