import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;
