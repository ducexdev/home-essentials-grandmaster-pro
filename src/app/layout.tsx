import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://homeessentials.com.ng";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Home Essentials | Quality Products for Modern Living",
    template: "%s | Home Essentials",
  },
  description:
    "Home Essentials delivers premium, practical household products across Nigeria. Built to last, designed for everyday life.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png" },
    ],
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Home Essentials",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to font origins for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-inter antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
