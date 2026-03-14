export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://moldcheck.pt/sitemap.xml",
  };
}
