import type { Metadata } from "next";
import "@/app/globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "MoldCheck.pt",
  description: "MoldCheck.pt",
  icons: {
    icon: "/icons/icono.png",
    shortcut: "/icons/icono.png",
    apple: "/icons/icono.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
