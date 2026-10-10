"use client";

import { useState, useEffect } from "react";
import type { ProductConfig } from "@/lib/product-config";
import Image from "next/image";

interface Props {
  product: ProductConfig;
  selectedVariantId: string;
  onVariantSelect: (id: string) => void;
  onOrderClick: (variantId?: string) => void;
  whatsappUrl: string;
}

export function HeroSection({
  product,
  selectedVariantId,
  onVariantSelect,
  onOrderClick,
  whatsappUrl,
}: Props) {
  const availableVariants = product.variants.filter((v) => v.available);

  // Dynamic urgency countdown: starts at 8, ticks down gradually to 3, persisted in session
  const [unitsLeft, setUnitsLeft] = useState(8);
  const [isDecremented, setIsDecremented] = useState(false);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("he_units_left");
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed >= 3 && parsed <= 8) {
          setUnitsLeft(parsed);
        }
      }
    } catch {
      // Ignore sessionStorage errors
    }

    // Dynamic timer that decreases unit count periodically to simulate real sales
    const tickInterval = setInterval(() => {
      setUnitsLeft((prev) => {
        if (prev <= 3) return 3; // Keep urgency without reaching 0
        const updated = prev - 1;
        try {
          sessionStorage.setItem("he_units_left", updated.toString());
        } catch {
          // Ignore
        }
        setIsDecremented(true);
        setTimeout(() => setIsDecremented(false), 1200);
        return updated;
      });
    }, 18000); // Ticks every 18 seconds

    return () => clearInterval(tickInterval);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#061325] via-[#091e3a] to-[#061325] overflow-hidden text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-white/10"
      aria-label="Product introduction"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#0052CC]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-[-10%] w-[450px] h-[450px] bg-[#00AEEF]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Top Scarcity & Social Proof Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-white/10 text-xs">
          <div className="inline-flex items-center gap-2 bg-[#0052CC]/30 border border-[#0052CC] text-[#00AEEF] px-3.5 py-1.5 rounded-full font-bold">
            <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-ping" />
            <span className="flex items-center gap-1">
              🔥 NATIONWIDE DELIVERY: BATCH OF TODAY ALMOST SOLD OUT (
              <span
                suppressHydrationWarning
                className={`inline-block font-black transition-all duration-300 ${
                  isDecremented
                    ? "text-amber-300 scale-125 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                    : "text-white"
                }`}
              >
                {unitsLeft} {unitsLeft === 1 ? "UNIT" : "UNITS"} LEFT
              </span>
              )
            </span>
          </div>

          <div className="flex items-center gap-2 text-white/80">
            <div className="flex text-amber-400 text-xs tracking-tighter">★★★★★</div>
            <span className="font-semibold text-white">4.9/5 Rating</span>
            <span className="text-white/40">&bull;</span>
            <span className="text-white/70">1,480+ Verified Nigerian Kitchens</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols): Copy, Video Demo Trigger, Value Stack */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Headline */}
            <h1 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.15] tracking-tight text-white">
              <span className="text-white font-black drop-shadow-lg block sm:inline">
                THIS IS THE BEST GRINDING MACHINE.{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] via-sky-300 to-white block sm:inline">
                EVERY HOME NEEDS THIS BLENDER...
              </span>
              <br />
              <span className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl mt-2 inline-block">
                Grandmaster Pro.{" "}
                <span className="text-[#00AEEF]">Built to Last.</span>
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
              Stop suffering through stressful, unhygienic market trips and stop burning out cheap plastic blenders. Pulverize dry peppers, dried beans, corn, yam chips, and hard spices into silky powder in under 60 seconds — right inside your kitchen!
            </p>

            {/* Benefit Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm font-semibold text-white/90">
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-sm">
                <span className="text-[#00AEEF] text-base">✓</span>
                <span>100% Pure Copper Coil Motor</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-sm">
                <span className="text-[#00AEEF] text-base">✓</span>
                <span>25,000 RPM Super-Crushing Speed</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-sm">
                <span className="text-[#00AEEF] text-base">✓</span>
                <span>Food-Grade 304 Stainless Steel</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-sm">
                <span className="text-[#00AEEF] text-base">✓</span>
                <span>Zero Advance Payment (POD)</span>
              </div>
            </div>

            {/* HIGH-CONVERTING FREE GIFTS & SUPPORT CALLOUT (POPPING VALUE) */}
            <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-[#0052CC]/50 via-[#00AEEF]/20 to-[#0052CC]/40 border-2 border-[#00AEEF] shadow-2xl shadow-cyan-500/20 backdrop-blur-md relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl animate-bounce">🎁</span>
                  <span className="font-poppins font-black text-xs sm:text-sm uppercase tracking-wider text-white">
                    FREE GIFTS WE OFFER WITH EVERY ORDER:
                  </span>
                </div>
                <span className="bg-[#00AEEF] text-[#061325] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow">
                  FREE IN BOX
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="bg-[#061325]/80 border border-[#00AEEF]/30 rounded-xl p-3 text-center hover:border-[#00AEEF] transition-colors">
                  <span className="text-xl block mb-1">🔪</span>
                  <p className="font-black text-white text-xs leading-tight">1 Extra Blade</p>
                  <p className="text-[10px] text-[#00AEEF] mt-0.5 font-bold">Spare 6-Leaf Set</p>
                </div>

                <div className="bg-[#061325]/80 border border-[#00AEEF]/30 rounded-xl p-3 text-center hover:border-[#00AEEF] transition-colors">
                  <span className="text-xl block mb-1">🥣</span>
                  <p className="font-black text-white text-xs leading-tight">1 Sieve</p>
                  <p className="text-[10px] text-[#00AEEF] mt-0.5 font-bold">Ultra-Fine Sifter</p>
                </div>

                <div className="bg-[#061325]/80 border border-[#00AEEF]/30 rounded-xl p-3 text-center hover:border-[#00AEEF] transition-colors">
                  <span className="text-xl block mb-1">🖌️</span>
                  <p className="font-black text-white text-xs leading-tight">1 Cleaning Brush</p>
                  <p className="text-[10px] text-[#00AEEF] mt-0.5 font-bold">For Easy Grinder Care</p>
                </div>

                <div className="bg-[#061325]/80 border border-emerald-400/40 rounded-xl p-3 text-center hover:border-emerald-400 transition-colors">
                  <span className="text-xl block mb-1">🛡️</span>
                  <p className="font-black text-white text-xs leading-tight">After Purchase</p>
                  <p className="text-[10px] text-emerald-400 mt-0.5 font-bold">Direct VIP Support</p>
                </div>
              </div>
            </div>

            {/* Interactive Model Selection Cards (All 7 Promo Sizes) */}
            <div className="pt-2">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <p className="text-xs font-black uppercase tracking-wider text-[#00AEEF]">
                  Select Capacity &amp; Promo Package:
                </p>
                <span className="text-[10px] font-black text-rose-400 bg-rose-500/20 border border-rose-500/40 px-2 py-0.5 rounded-full animate-pulse">
                  ⚡ Strictly while stock lasts!
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {availableVariants.map((v) => {
                  const isSelected = selectedVariantId === v.id;

                  return (
                    <div
                      key={v.id}
                      onClick={() => onVariantSelect(v.id)}
                      className={`cursor-pointer rounded-xl p-2.5 border-2 transition-all duration-200 relative flex flex-col justify-between ${
                        isSelected
                          ? "bg-gradient-to-br from-[#0052CC]/60 to-[#00AEEF]/30 border-[#00AEEF] shadow-lg shadow-cyan-500/20 scale-[1.02]"
                          : "bg-white/5 border-white/15 hover:border-white/30 text-white/80 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-poppins font-black text-xs text-white">
                          {v.capacity}
                        </span>
                        <span className="text-[9px] font-bold text-rose-300 bg-rose-500/30 px-1.5 py-0.5 rounded">
                          {v.stockLeft} left
                        </span>
                      </div>

                      <div className="mt-1 pt-1 border-t border-white/10">
                        <div className="text-sm font-black text-[#00AEEF]">
                          {v.priceDisplay}
                        </div>
                        <div className="text-[10px] text-white/40 line-through">
                          {v.regularPriceDisplay}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Magnetic CTA Group (Accent / CTA Color #00AEEF) */}
            <div className="pt-3 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOrderClick(selectedVariantId)}
                  className="flex-1 bg-[#00AEEF] hover:bg-[#0098d4] text-[#061325] font-black text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-2xl transition-all shadow-xl shadow-cyan-500/30 active:scale-95 flex items-center justify-center gap-2 group"
                >
                  <span>
                    Order {availableVariants.find((v) => v.id === selectedVariantId)?.capacity || "Grandmaster Pro"}{" "}
                    ({availableVariants.find((v) => v.id === selectedVariantId)?.priceDisplay || ""}) Now
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm py-4 px-5 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                >
                  <span>💬 Chat On WhatsApp</span>
                </a>
              </div>

              {/* Zero-Friction Reassurance Microcopy */}
              <div className="flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-white/70 pt-1 gap-2">
                <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                  <span>🔒</span> Pay ₦0 Online — Inspect Carton Before Payment
                </span>
                <span className="flex items-center gap-1.5 font-medium text-[#00AEEF]">
                  <span>🚚</span> Doorstep Delivery Across 36 States
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Hero Product Visual & Proof Stamps */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Product Showcase Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 p-4 sm:p-6 pb-5 sm:pb-6 backdrop-blur-md shadow-2xl overflow-hidden group">
                {/* Glow ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#00AEEF]/25 rounded-full blur-3xl pointer-events-none" />

                {/* Top Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#0052CC] text-white text-[10px] sm:text-xs font-black uppercase px-3 py-1 rounded-full shadow">
                    Commercial 25,000 RPM
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>In Stock</span>
                  </span>
                </div>

                {/* Machine Photo - sized to fit container perfectly */}
                <div className="relative w-full aspect-[419/595] max-h-[460px] sm:max-h-[520px] lg:max-h-[550px] flex items-center justify-center my-1">
                  <Image
                    src="/images/hero-grinder-official.png"
                    alt="Grandmaster Pro 2500A Commercial Multi-Function Grinder"
                    width={419}
                    height={595}
                    priority
                    className="w-full h-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] scale-105 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Bottom Trust Stamp Bar */}
                <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-center text-[10px] font-bold uppercase tracking-wider">
                  <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                    <span className="text-[#00AEEF] block text-xs">100% COPPER</span>
                    <span className="text-white/60">Heavy Engine</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                    <span className="text-[#00AEEF] block text-xs">PAY ON DELIVERY</span>
                    <span className="text-white/60">All 36 States</span>
                  </div>
                </div>
              </div>

              {/* Floating Guarantee Stamp */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white text-[#061325] p-3 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0052CC] flex items-center justify-center text-white text-lg font-black shadow">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-black uppercase leading-tight text-[#0052CC]">1-Year Engine Warranty</p>
                  <p className="text-[10px] text-gray-500">10-Day Free Replacement Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
