/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/api/nav": ["./app/**/*"],
    },
  },
};

module.exports = nextConfig;
