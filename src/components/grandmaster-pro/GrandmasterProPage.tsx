"use client";

import { useEffect, useRef, useState } from "react";
import type { ProductConfig } from "@/lib/product-config";
import { SiteHeader } from "./SiteHeader";
import { HeroSection } from "./HeroSection";
import { TrustStrip } from "./TrustStrip";
import { ProblemSolution } from "./ProblemSolution";
import { ProductShowcase } from "./ProductShowcase";
import { KeyBenefits } from "./KeyBenefits";
import { HowItWorks } from "./HowItWorks";
import { UseCases } from "./UseCases";
import { CustomerReviews } from "./CustomerReviews";
import { PricingSection } from "./PricingSection";
import { SpecsSection } from "./SpecsSection";
import { FAQSection } from "./FAQSection";
import { FinalCTA } from "./FinalCTA";
import { SiteFooter } from "./SiteFooter";
import { OrderModal } from "./OrderModal";
import { MobileStickyBar } from "./MobileStickyBar";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { AttributionCapture } from "./AttributionCapture";

interface Props {
  product: ProductConfig;
}

export function GrandmasterProPage({ product }: Props) {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    product.variants.find((v) => v.id === "gmp-1000g")?.id ??
    product.variants.find((v) => v.available)?.id ?? ""
  );

  // Reveal animations for sections using IntersectionObserver
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("reveal-hidden");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const els = document.querySelectorAll(".reveal-on-scroll");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openOrderModal = (variantId?: string) => {
    if (variantId) setSelectedVariantId(variantId);
    setOrderModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeOrderModal = () => {
    setOrderModalOpen(false);
    document.body.style.overflow = "";
  };

  const whatsappUrl = buildWhatsAppUrl(product, selectedVariantId);

  return (
    <div ref={revealRef} className="min-h-screen bg-white">
      {/* A: Header */}
      <SiteHeader onOrderClick={() => openOrderModal()} whatsappUrl={whatsappUrl} />

      <main>
        {/* B: Hero */}
        <HeroSection
          product={product}
          selectedVariantId={selectedVariantId}
          onVariantSelect={setSelectedVariantId}
          onOrderClick={openOrderModal}
          whatsappUrl={whatsappUrl}
        />

        {/* C: Trust Strip */}
        <TrustStrip product={product} />

        {/* D: Problem / Solution */}
        <ProblemSolution />

        {/* E: Product Showcase */}
        <ProductShowcase />

        {/* F: Key Benefits */}
        <KeyBenefits />

        {/* G: How It Works */}
        <HowItWorks />

        {/* H: Use Cases & Crushing Demos */}
        <UseCases />

        {/* Customer Video Reviews */}
        <CustomerReviews onOrderClick={() => openOrderModal()} />

        {/* I: Pricing */}
        <PricingSection
          product={product}
          selectedVariantId={selectedVariantId}
          onVariantSelect={setSelectedVariantId}
          onOrderClick={openOrderModal}
          whatsappUrl={whatsappUrl}
        />

        {/* J: Specs */}
        <SpecsSection product={product} />

        {/* M: FAQ */}
        <FAQSection product={product} />

        {/* N: Final CTA */}
        <FinalCTA
          product={product}
          selectedVariantId={selectedVariantId}
          onVariantSelect={setSelectedVariantId}
          onOrderClick={openOrderModal}
          whatsappUrl={whatsappUrl}
        />
      </main>

      {/* O: Footer */}
      <SiteFooter product={product} />

      {/* Order Modal */}
      {orderModalOpen && (
        <OrderModal
          product={product}
          selectedVariantId={selectedVariantId}
          onClose={closeOrderModal}
        />
      )}

      {/* Mobile sticky CTA bar */}
      <MobileStickyBar
        selectedVariantName={product.variants.find((v) => v.id === selectedVariantId)?.capacity}
        selectedVariantPrice={product.variants.find((v) => v.id === selectedVariantId)?.priceDisplay}
        onOrderClick={() => openOrderModal()}
        whatsappUrl={whatsappUrl}
      />

      {/* Floating WhatsApp */}
      <WhatsAppFloat url={whatsappUrl} />

      {/* Capture UTM/attribution from URL params */}
      <AttributionCapture />
    </div>
  );
}

function buildWhatsAppUrl(product: ProductConfig, variantId: string): string {
  const variant = product.variants.find((v) => v.id === variantId);
  const variantText = variant ? ` (${variant.name})` : "";
  const message = encodeURIComponent(
    `Hello Home Essentials, I am interested in ordering the German Grinder Machine${variantText}. ` +
      `Please help me confirm the available options, price and delivery details. Thank you!`
  );
  return `https://wa.me/${product.contact.whatsapp}?text=${message}`;
}
