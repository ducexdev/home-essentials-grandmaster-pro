"use client";

import { useState, useRef } from "react";
import type { ProductConfig } from "@/lib/product-config";
import Image from "next/image";

interface Props {
  product: ProductConfig;
  selectedVariantId: string;
  onVariantSelect: (id: string) => void;
  onOrderClick: (variantId?: string) => void;
  whatsappUrl: string;
}

export function PricingSection({
  product,
  selectedVariantId,
  onVariantSelect,
  onOrderClick,
  whatsappUrl,
}: Props) {
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");
  const sliderRef = useRef<HTMLDivElement>(null);
  const tabTrackRef = useRef<HTMLDivElement>(null);

  const selectedVariant =
    product.variants.find((v) => v.id === selectedVariantId) ||
    product.variants[3] || // Default to 1000g
    product.variants[0];

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 360;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollTabs = (direction: "left" | "right") => {
    if (tabTrackRef.current) {
      const scrollAmount = 200;
      tabTrackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSelect = (id: string) => {
    onVariantSelect(id);
    // Find index of variant and scroll to it smoothly if in slider mode
    const idx = product.variants.findIndex((v) => v.id === id);
    if (sliderRef.current && idx !== -1) {
      const cardWidth = 340;
      sliderRef.current.scrollTo({
        left: idx * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="pricing"
      className="py-20 bg-[#F4F6F8]"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 reveal-on-scroll">
          <span className="inline-block text-[#0052CC] font-black text-xs uppercase tracking-widest mb-2 bg-[#f0f4fc] px-3.5 py-1 rounded-full border border-[#0052CC]/20">
            LIMITED WAREHOUSE PROMOTIONAL DEAL
          </span>
          <h2 id="pricing-heading" className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1F3A] mb-3 sm:mb-4">
            Select Your German Grinder Machine Package
          </h2>
          <p className="text-[#344054] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Direct warehouse promotional pricing. Every order ships with our complete ₦23,500 bonus accessory kit + Free Doorstep Delivery across Nigeria.
          </p>

          {/* Scarcity Banner with promo warning */}
          <div className="mt-4 inline-flex items-center gap-2.5 bg-rose-50 border-2 border-rose-300 text-rose-950 text-xs sm:text-sm font-black px-5 py-2.5 rounded-2xl shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping" />
            <span>⚠️ STRICT NOTICE: This promo is strictly WHILE CURRENT BATCH LASTS — No extension!</span>
          </div>

          {/* HIGH-CONVERTING FREE GIFTS STRIP */}
          <div className="mt-6 max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#061325] via-[#0B2545] to-[#061325] p-5 sm:p-6 text-white border-2 border-[#00AEEF] shadow-2xl text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <span className="text-3xl animate-bounce">🎁</span>
              <div>
                <p className="font-poppins font-black text-sm uppercase tracking-wider text-[#00AEEF]">
                  INCLUDED FREE WITH EVERY MACHINE CARTON:
                </p>
                <p className="text-xs sm:text-sm text-white/90 font-medium mt-0.5">
                  1 Extra 6-Leaf Blade + 1 Micro Sieve + 1 Cleaning Brush + Dedicated VIP Support
                </p>
              </div>
            </div>
            <span className="bg-[#00AEEF] text-[#061325] text-xs font-black uppercase px-3.5 py-1.5 rounded-xl shadow-md whitespace-nowrap">
              ₦0 EXTRA CHARGE
            </span>
          </div>
        </div>

        {/* ── TOP HORIZONTAL MECHANISM: INSTANT SIZE SELECTOR BAR ── */}
        <div className="mb-8 max-w-5xl mx-auto reveal-on-scroll">
          <div className="bg-white rounded-3xl p-4 sm:p-5 border-2 border-[#0052CC]/20 shadow-md">
            <div className="flex items-center justify-between gap-2 mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0052CC]"></span>
                </span>
                <p className="text-xs font-black uppercase tracking-wider text-[#0B1F3A]">
                  Top Horizontal Package Switcher (Tap any size to view instantly):
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => scrollTabs("left")}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-[#0052CC] hover:text-white text-gray-700 flex items-center justify-center text-xs font-black transition-all active:scale-90"
                    aria-label="Scroll sizes left"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollTabs("right")}
                    className="w-7 h-7 rounded-full bg-gray-100 hover:bg-[#0052CC] hover:text-white text-gray-700 flex items-center justify-center text-xs font-black transition-all active:scale-90"
                    aria-label="Scroll sizes right"
                  >
                    →
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setViewMode(viewMode === "slider" ? "grid" : "slider")}
                  className="hidden md:inline-flex items-center gap-1 text-[11px] font-extrabold text-[#0052CC] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <span>{viewMode === "slider" ? "⊞ View All as Grid" : "↔ Horizontal View"}</span>
                </button>
              </div>
            </div>

            {/* Horizontal Tabs Track */}
            <div
              ref={tabTrackRef}
              className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-none snap-x snap-mandatory py-1 select-none scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {product.variants.map((v) => {
                const isSelected = selectedVariantId === v.id;
                const isPopular = v.id === "gmp-1000g";
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => handleSelect(v.id)}
                    className={`flex-shrink-0 snap-start text-left rounded-2xl p-3 border-2 transition-all duration-200 min-w-[135px] sm:min-w-[150px] flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#0052CC] text-white border-[#0052CC] shadow-lg shadow-blue-500/25 ring-2 ring-[#0052CC]/30 scale-[1.02]"
                        : "bg-gray-50 hover:bg-white text-[#344054] border-gray-200 hover:border-[#0052CC]/40"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-center justify-between gap-1 w-full mb-1">
                      <span className={`font-poppins font-black text-xs ${isSelected ? "text-white" : "text-[#0B1F3A]"}`}>
                        {v.capacity}
                      </span>
                      {isPopular ? (
                        <span className={`text-[8px] font-black uppercase px-1 py-0.5 rounded ${
                          isSelected ? "bg-white/20 text-white" : "bg-amber-100 text-amber-800"
                        }`}>
                          Popular
                        </span>
                      ) : (
                        <span className={`text-[8px] font-extrabold px-1 py-0.5 rounded ${
                          isSelected ? "bg-white/20 text-white" : "bg-rose-50 text-rose-700"
                        }`}>
                          {v.stockLeft} left
                        </span>
                      )}
                    </div>
                    <div className="mt-1">
                      <p className={`text-xs font-black ${isSelected ? "text-[#00D2FF]" : "text-[#0052CC]"}`}>
                        {v.priceDisplay}
                      </p>
                      <p className={`text-[10px] line-through ${isSelected ? "text-white/60" : "text-gray-400"}`}>
                        {v.regularPriceDisplay}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── ACTIVE SPOTLIGHT PACKAGE SUMMARY (Zero-Scroll Instant View) ── */}
        {selectedVariant && (
          <div className="mb-10 max-w-5xl mx-auto reveal-on-scroll">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#0052CC] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#0052CC] text-white text-[10px] sm:text-xs font-black uppercase px-4 py-1.5 rounded-bl-2xl">
                ★ Currently Selected: {selectedVariant.capacity}
              </div>

              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-[#F8FAFC] p-3 border border-gray-100 flex items-center justify-center">
                    <Image
                      src="/images/hero-grinder-official.png"
                      alt={`German Grinder Machine ${selectedVariant.capacity}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="text-[11px] font-black text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full mt-3 animate-pulse">
                    ⚡ Only {selectedVariant.stockLeft} Units Left At Promo Price!
                  </span>
                </div>

                <div className="md:col-span-8 space-y-4">
                  <div>
                    <span className="text-[11px] font-black uppercase text-[#0052CC] bg-blue-50 px-2.5 py-0.5 rounded-full">
                      Commercial German Spec
                    </span>
                    <h3 className="font-poppins font-black text-[#0B1F3A] text-2xl sm:text-3xl mt-1.5">
                      {selectedVariant.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">
                      {selectedVariant.description}
                    </p>
                  </div>

                  {/* Price Row */}
                  <div className="flex flex-wrap items-baseline gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                    <span className="font-poppins font-black text-[#0052CC] text-3xl sm:text-4xl">
                      {selectedVariant.priceDisplay}
                    </span>
                    <span className="text-gray-400 line-through text-base font-bold">
                      {selectedVariant.regularPriceDisplay}
                    </span>
                    {selectedVariant.savingsDisplay && (
                      <span className="text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                        {selectedVariant.savingsDisplay}
                      </span>
                    )}
                  </div>

                  {/* Free Gifts Checklist */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-bold text-[#0B1F3A]">
                    <div className="bg-blue-50/60 p-2 rounded-xl text-center border border-blue-100">
                      🎁 1 Extra Blade
                    </div>
                    <div className="bg-blue-50/60 p-2 rounded-xl text-center border border-blue-100">
                      🎁 1 Sifting Sieve
                    </div>
                    <div className="bg-blue-50/60 p-2 rounded-xl text-center border border-blue-100">
                      🎁 1 Cleaning Brush
                    </div>
                    <div className="bg-emerald-50 p-2 rounded-xl text-center border border-emerald-200 text-emerald-800">
                      🛡️ VIP Support
                    </div>
                  </div>

                  {/* 1-Tap Checkout Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onOrderClick(selectedVariant.id)}
                      className="w-full sm:w-auto min-w-[280px] bg-gradient-to-r from-[#00D2FF] via-[#00AEEF] to-[#0098d4] hover:brightness-110 text-[#061325] font-black text-sm sm:text-base py-4 px-8 rounded-2xl transition-all shadow-xl shadow-cyan-500/25 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <span>Claim {selectedVariant.capacity} ({selectedVariant.priceDisplay}) — Pay On Delivery</span>
                      <span>→</span>
                    </button>
                    <p className="text-[11px] text-gray-500 font-bold mt-2 flex items-center gap-1.5">
                      <span>🔒</span> Zero Advance Payment &bull; Inspect Parcel at Doorstep Before Paying
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── ALL 7 SIZES: HORIZONTAL SLIDING CAROUSEL (Avoids endless vertical scrolling) ── */}
        <div className="mb-14 reveal-on-scroll">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <h4 className="font-poppins font-black text-[#0B1F3A] text-lg sm:text-xl">
                Browse All 7 Available Capacities:
              </h4>
              <p className="text-gray-500 text-xs">
                Slide horizontally with the arrows or swipe across on your screen.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollSlider("left")}
                className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-[#0052CC] hover:text-white text-[#0B1F3A] flex items-center justify-center text-sm font-black transition-all shadow-sm active:scale-95"
                aria-label="Slide cards left"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollSlider("right")}
                className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-[#0052CC] hover:text-white text-[#0B1F3A] flex items-center justify-center text-sm font-black transition-all shadow-sm active:scale-95"
                aria-label="Slide cards right"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className={
              viewMode === "slider"
                ? "flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 select-none scroll-smooth"
                : "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            }
            style={viewMode === "slider" ? { scrollbarWidth: "none", msOverflowStyle: "none" } : {}}
          >
            {product.variants.map((v) => {
              const isSelected = selectedVariantId === v.id;
              const isPopular = v.id === "gmp-1000g";
              const isMaxPower = v.id === "gmp-5000g";

              return (
                <div
                  key={v.id}
                  className={`relative rounded-3xl bg-white p-6 sm:p-7 border-2 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-2xl ${
                    viewMode === "slider" ? "flex-shrink-0 w-[300px] sm:w-[340px] snap-start" : ""
                  } ${
                    isSelected
                      ? "border-[#0052CC] ring-4 ring-[#0052CC]/20 shadow-2xl scale-[1.01]"
                      : isPopular
                      ? "border-[#00AEEF] ring-2 ring-[#00AEEF]/20 shadow-xl"
                      : "border-gray-200 hover:border-[#0052CC]/50"
                  }`}
                >
                  {/* Top Floating Badge */}
                  {v.badge && (
                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-white font-black text-[10px] sm:text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap ${
                      isPopular ? "bg-gradient-to-r from-[#0052CC] via-[#00AEEF] to-[#0052CC]" : isMaxPower ? "bg-gradient-to-r from-red-600 to-amber-500" : "bg-[#0B1F3A]"
                    }`}>
                      <span>★ {v.badge}</span>
                    </div>
                  )}

                  <div>
                    {/* Capacity & Scarcity Pill */}
                    <div className={`flex items-center justify-between gap-2 mb-3 ${v.badge ? "pt-2" : ""}`}>
                      <span className="text-xs font-black uppercase tracking-wider bg-blue-50 text-[#0052CC] px-3 py-1 rounded-full border border-blue-200">
                        Capacity: {v.capacity}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-black text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <span>Only {v.stockLeft} left!</span>
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-poppins font-black text-[#0B1F3A] text-xl sm:text-2xl mb-1">
                      {v.name}
                    </h3>
                    <p className="text-gray-500 text-xs mb-4 line-clamp-2">
                      {v.description}
                    </p>

                    {/* Price Box */}
                    <div className="mb-5 p-4 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                      <div className="flex items-baseline gap-2.5 flex-wrap">
                        <span className="font-poppins font-black text-[#0B1F3A] text-2xl sm:text-3xl tracking-tight">
                          {v.priceDisplay}
                        </span>
                        <span className="text-gray-400 line-through text-sm font-semibold">
                          {v.regularPriceDisplay}
                        </span>
                        <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded ml-auto whitespace-nowrap">
                          {v.savingsDisplay}
                        </span>
                      </div>
                      <p className="text-emerald-700 font-bold text-[11px] mt-1.5 flex items-center gap-1">
                        <span>✓</span> Free Doorstep Delivery + Zero Pre-payment
                      </p>
                    </div>

                    {/* Free Gifts Highlight Box */}
                    <div className="mb-5 p-3.5 rounded-2xl bg-blue-50/70 border border-[#00AEEF]/40 space-y-1.5">
                      <p className="text-[10px] font-black uppercase text-[#0052CC] flex items-center gap-1">
                        <span>🎁</span> 100% Free Gifts Included:
                      </p>
                      <div className="grid grid-cols-2 gap-1.5 text-[11px] text-[#0B1F3A] font-bold">
                        <div>★ 1 Extra Blade</div>
                        <div>★ 1 Sifting Sieve</div>
                        <div>★ 1 Cleaning Brush</div>
                        <div className="text-emerald-700">★ VIP Support</div>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2.5 mb-6 text-xs text-[#344054]">
                      <div className="flex items-center gap-2">
                        <span className="text-[#0052CC] font-black text-sm">✓</span>
                        <span><strong>100% Pure Copper</strong> Commercial Engine</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#0052CC] font-black text-sm">✓</span>
                        <span><strong>304 Food-Grade</strong> Stainless Steel Chamber</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#0052CC] font-black text-sm">✓</span>
                        <span><strong>1 Full Year Warranty</strong> + Immediate Swap</span>
                      </div>
                    </div>
                  </div>

                  {/* Card CTA Button */}
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => {
                        onVariantSelect(v.id);
                        onOrderClick(v.id);
                      }}
                      className={`w-full flex items-center justify-center gap-2 font-black text-sm py-4 rounded-xl transition-all shadow-lg active:scale-95 group ${
                        isSelected
                          ? "bg-[#0052CC] hover:bg-[#0041a8] text-white shadow-blue-500/25"
                          : "bg-gradient-to-r from-[#00D2FF] via-[#00AEEF] to-[#0098d4] text-[#061325] shadow-cyan-500/25 hover:brightness-110"
                      }`}
                    >
                      <span className="whitespace-nowrap">Claim {v.capacity} ({v.priceDisplay})</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                    <p className="text-center text-[10px] text-gray-500 font-bold flex items-center justify-center gap-1">
                      <span>🔒</span> Pay On Delivery &bull; Inspect Carton Before Payment
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WhatsApp & Reassurance Banner */}
        <div className="reveal-on-scroll bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-poppins font-bold text-[#0B1F3A] text-lg">
                Prefer to order directly through WhatsApp?
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Chat with our customer care desk to ask questions or place your delivery order instantly.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-md shadow-green-500/20 whitespace-nowrap"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order via WhatsApp
            </a>
          </div>

          {/* Badges strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 mt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F3A]">
              <Image
                src="/images/badge-pod.png"
                alt="Payment on delivery guaranteed"
                width={36}
                height={28}
                className="w-8 h-6 object-contain"
              />
              <span>100% Pay On Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F3A]">
              <Image
                src="/images/warranty-badge.webp"
                alt="1 year warranty badge"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span>1-Year Official Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F3A]">
              <span className="text-emerald-600 text-base">🚚</span>
              <span>Express Waybill to All 36 States</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
