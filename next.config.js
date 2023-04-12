/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["img.shields.io", "i.ibb.co", "ifh.cc"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
