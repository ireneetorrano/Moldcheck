import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "MoldCheck.pt",
  description: "MoldCheck.pt",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
