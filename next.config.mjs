import withPWA from "next-pwa";
import createMDX from '@next/mdx';

const withMDX = createMDX({ extension: /\.mdx?$/ });

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["stitchos.app", "*.vercel.app"]
    }
  },
  compiler: {
    removeConsole: isProd ? { exclude: ["error"] } : false
  },
  // Security headers
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join("; ");
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }
        ]
      }
    ];
  }
};

export default withMDX(withPWA({
  dest: "public",
  disable: !isProd,
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: "/offline.html"
  }
})(baseConfig));

export const pageExtensions = ['ts', 'tsx', 'mdx'];
