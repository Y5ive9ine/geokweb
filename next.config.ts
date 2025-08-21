/*
 * @Description:
 * @Author: Devin
 * @Date: 2025-07-28 01:53:54
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  eslint: {
    // 在Docker构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在Docker构建时忽略TypeScript错误
    ignoreBuildErrors: true,
  },
  // 确保客户端路由正常工作
  trailingSlash: false,
  // 优化静态资源
  assetPrefix: "",
  // 实验性功能 - 确保standalone模式下的客户端路由
  experimental: {
    // 优化客户端导航
    optimisticClientCache: true,
  },
  // API代理配置
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8012/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
