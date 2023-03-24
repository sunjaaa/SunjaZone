/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.shields.io"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
