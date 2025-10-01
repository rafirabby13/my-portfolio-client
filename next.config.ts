import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',// just the domain, no https://
        pathname: '/**',       // allows all paths under this domain
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', // just the domain, no https://
        pathname: '/**',       // allows all paths under this domain
      }
    ],
  },
}


export default nextConfig;
