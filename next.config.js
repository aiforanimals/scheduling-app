/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.theatlantic.com"
      },
    ],
  },
};

module.exports = nextConfig;
