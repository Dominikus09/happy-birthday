/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: "/public/index.htm",
        destination: "/pages/api/myfile.js",
      },
    ];
  },
};

module.exports = nextConfig;
