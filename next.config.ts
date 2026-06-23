import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src 'self' https://*.vercel.app https://www.google.com https://maps.google.com https://*.googleapis.com https://*.gstatic.com;",
          },
        ],
      },
    ];
  },
};

export default withFlowbiteReact(nextConfig);
