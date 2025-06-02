import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // خطاهای ESLint باعث شکست build نمی‌شن
    ignoreDuringBuilds: true,
  },
};

  

export default nextConfig;
