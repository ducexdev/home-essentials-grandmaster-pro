import type { Metadata } from "next";
import { StoreHeader } from "@/components/storefront/StoreHeader";
import { StoreCategoryStrip } from "@/components/storefront/StoreCategoryStrip";
import { StoreHeroBanner } from "@/components/storefront/StoreHeroBanner";
import { StoreValueProps } from "@/components/storefront/StoreValueProps";
import { StorePromoBanners } from "@/components/storefront/StorePromoBanners";
import { StoreFlashDeal } from "@/components/storefront/StoreFlashDeal";
import { StoreProductCatalog } from "@/components/storefront/StoreProductCatalog";
import { StoreDepartmentBrowse } from "@/components/storefront/StoreDepartmentBrowse";
import { StoreWaybillProof } from "@/components/storefront/StoreWaybillProof";
import { StoreReviewsPreview } from "@/components/storefront/StoreReviewsPreview";
import { StoreFooter } from "@/components/storefront/StoreFooter";

export const metadata: Metadata = {
  title: "Home Essentials Store — Premium Household Appliances | Built to Last",
  description:
    "Official Home Essentials Retail Store. Shop heavy-duty dry grinders, multi-function grain mills, and kitchen equipment across Nigeria with Payment on Delivery.",
  openGraph: {
    title: "Home Essentials — Official Appliance Storefront",
    description:
      "Shop Nigeria's #1 heavy-duty grinders, food processors, and kitchen appliances with nationwide doorstep delivery and payment on delivery.",
    url: "https://homeessentials.com.ng",
    siteName: "Home Essentials Nigeria",
    images: [
      {
        url: "/images/hero-grinder-official.png",
        width: 500,
        height: 500,
        alt: "Grandmaster Pro 2500A Commercial Multi-Function Grinder",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function StorefrontHomePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-[#242424] flex flex-col antialiased font-inter">
      {/* 1. WoodMart Retail 2 Header with Top Bar, Integrated Category Search & Cart Drawer */}
      <StoreHeader />

      <main className="flex-1">
        {/* 2. WoodMart Category Icon Strip */}
        <StoreCategoryStrip />

        {/* 3. WoodMart Retail 2 Split Hero Banner (Left Stacked Banners + Right Showcase) */}
        <StoreHeroBanner />

        {/* 4. 4-Column Feature & Trust Info Boxes */}
        <StoreValueProps />

        {/* 5. Double Promotional Feature Banners */}
        <StorePromoBanners />

        {/* 6. Deals of the Day with Working Countdown Timer & Stock Bars */}
        <StoreFlashDeal />

        {/* 7. Tabbed Product Catalog with Quick View & Wishlist Toggles */}
        <StoreProductCatalog />

        {/* 8. Department / Category Tiles */}
        <StoreDepartmentBrowse />

        {/* 9. Interstate Waybills & Verified Transit Proof */}
        <StoreWaybillProof />

        {/* 10. Verified Customer Video Reviews */}
        <StoreReviewsPreview />
      </main>

      {/* 11. WoodMart Retail Footer */}
      <StoreFooter />
    </div>
  );
}
