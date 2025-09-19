import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "nhadepshouse.com" },
      { protocol: "https", hostname: "core29.co.uk" },
      { protocol: "https", hostname: "blogcdn.muaban.net" },
      { protocol: "https", hostname: "cdn.vietnambiz.vn" },
      { protocol: "https", hostname: "cdn2.fptshop.com.vn" },
      { protocol: "https", hostname: "vanangroup.com.vn" },
    ],
  },
};

export default nextConfig;
