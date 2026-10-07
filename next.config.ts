import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Hobbies were folded into the About page
      { source: "/hobbies", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
