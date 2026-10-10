import type { Metadata } from "next";
import { PRODUCT_CONFIG } from "@/lib/product-config";
import { GrandmasterProPage } from "@/components/grandmaster-pro/GrandmasterProPage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://homeessentials.com.ng";

export const metadata: Metadata = {
  title: "Grandmaster Pro — Built to Last | Home Essentials",
  description:
    "Grandmaster Pro by Home Essentials. A powerful, reliable product built for serious home use. Order now and get it delivered across Nigeria.",
  alternates: {
    canonical: `${siteUrl}/grandmaster-pro`,
  },
  openGraph: {
    title: "Grandmaster Pro — Built to Last",
    description:
      "Powerful. Reliable. Built for everyday Nigerian households. Order Grandmaster Pro from Home Essentials.",
    url: `${siteUrl}/grandmaster-pro`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/grandmaster-pro-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Grandmaster Pro by Home Essentials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grandmaster Pro — Built to Last",
    description:
      "Powerful. Reliable. Built for everyday Nigerian households. Order now.",
    images: [`${siteUrl}/images/grandmaster-pro-og.jpg`],
  },
};

export default function GrandmasterProRoute() {
  return <GrandmasterProPage product={PRODUCT_CONFIG} />;
}
