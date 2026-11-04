/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
