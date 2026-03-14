import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

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
};

export default withNextIntl(nextConfig);
