/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: "/public/index.html",
        destination: "/pages/api/index.js",
      },
    ];
  },
};

module.exports = nextConfig;
