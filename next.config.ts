import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: {
    // 在Docker构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在Docker构建时忽略TypeScript错误
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
