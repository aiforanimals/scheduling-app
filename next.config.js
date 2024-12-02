/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        protocol: "https",
        hostname: "drive.google.com",
        protocol: "https",
        hostname: "eventservices.berkeley.edu",
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
