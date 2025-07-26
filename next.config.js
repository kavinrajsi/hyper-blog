const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // <-- REQUIRED for Hostinger + static export
  output: "export",
};

module.exports = withMDX(nextConfig);
