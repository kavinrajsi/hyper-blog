const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
    domains: ['hyperblog.io'], // Replace with your actual domain
  },
  trailingSlash: true,
  output: "export",
  assetPrefix: '', // Replace with your actual domain
  basePath: '',
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'https://hyperblog.io'  // Replace with your actual domain
  },
};

module.exports = withMDX(nextConfig);
