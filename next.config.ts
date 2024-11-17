import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Consider setting to false in production
  },
  eslint: {
    ignoreDuringBuilds: true, // Consider setting to false in production
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co", // Specify allowed hostnames
      },
      {
        protocol: "https",
        hostname: "example.com", // Add more domains as needed
      },
      {
        protocol: "https",
        hostname: "st2.depositphotos.com", // Add this domain for external images
      },
    ],
  },
  experimental: {
    after: true, // Ensure this is a valid feature for your use case
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;