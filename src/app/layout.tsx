import type { Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RB2NEE6FTK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RB2NEE6FTK');`}
        </Script>
      </head>
      <body>
        {children}<SpeedInsights />
      </body>
    </html>
  );
}
