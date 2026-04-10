import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";
import { STATIC_SECURITY_HEADERS } from "./src/lib/security/headers";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts");
const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  distDir: isDev ? ".next-dev" : ".next",
  typedRoutes: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/pt",
        permanent: false,
      },
    ];
  },

  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: STATIC_SECURITY_HEADERS,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
