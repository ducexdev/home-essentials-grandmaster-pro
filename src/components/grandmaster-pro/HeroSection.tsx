"use client";

import { useState, useEffect, useRef } from "react";
import type { ProductConfig } from "@/lib/product-config";
import Image from "next/image";

interface Props {
  product: ProductConfig;
  selectedVariantId: string;
  onVariantSelect: (id: string) => void;
  onOrderClick: (variantId?: string) => void;
  whatsappUrl: string;
}

const PERSONAS = [
  { emoji: "☕", label: "Coffee Enthusiast", sub: "Freshly ground coffee for the perfect cup, every morning" },
  { emoji: "👨‍🍳", label: "Home Chef", sub: "Elevate flavour with freshly ground herbs and spices" },
  { emoji: "🏠", label: "Home Cook", sub: "Save hours grinding beans, grains, and seasonings in seconds" },
  { emoji: "🍽️", label: "Restaurant Owner", sub: "High-powered commercial grinding for busy culinary kitchens" },
  { emoji: "👴", label: "Elderly Individual", sub: "Effortless, one-button grinding — no strain, no stress" },
  { emoji: "🥗", label: "Health-Conscious", sub: "Make your own nut flours, spice blends & healthy powders at home" },
  { emoji: "⏱️", label: "Busy Professional", sub: "Done in 15 seconds — not 15 minutes" },
  { emoji: "🧴", label: "DIY Enthusiast", sub: "Grind herbs for homemade cosmetics, soaps & candles" },
];

export function HeroSection({
  product,
  selectedVariantId,
  onVariantSelect,
  onOrderClick,
  whatsappUrl,
}: Props) {
  const availableVariants = product.variants.filter((v) => v.available);
  const selectedVariant = availableVariants.find((v) => v.id === selectedVariantId) || availableVariants[0];

  // Dynamic urgency countdown
  const [unitsLeft, setUnitsLeft] = useState(8);
  const [isDecremented, setIsDecremented] = useState(false);
  const [activePersona, setActivePersona] = useState(0);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("he_units_left");
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed >= 3 && parsed <= 8) setUnitsLeft(parsed);
      }
    } catch { /* ignore */ }

    const tick = setInterval(() => {
      setUnitsLeft((prev) => {
        if (prev <= 3) return 3;
        const updated = prev - 1;
        try { sessionStorage.setItem("he_units_left", updated.toString()); } catch { /* ignore */ }
        setIsDecremented(true);
        setTimeout(() => setIsDecremented(false), 1200);
        return updated;
      });
    }, 18000);

    // Rotate personas automatically
    const personaTick = setInterval(() => {
      setActivePersona((p) => (p + 1) % PERSONAS.length);
    }, 2800);

    return () => { clearInterval(tick); clearInterval(personaTick); };
  }, []);

  const packageScrollRef = useRef<HTMLDivElement>(null);

  const scrollPackages = (direction: "left" | "right") => {
    if (packageScrollRef.current) {
      const scrollAmount = 240;
      packageScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#061325] via-[#091e3a] to-[#061325] overflow-x-hidden text-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24 border-b border-white/10 w-full"
      aria-label="Product introduction"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#0052CC]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-[-10%] w-[450px] h-[450px] bg-[#00AEEF]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-3.5 sm:px-4 min-w-0">

        {/* ── TOP URGENCY + SOCIAL PROOF STRIP ── */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5 sm:mb-8 pb-3.5 sm:pb-4 border-b border-white/10 text-xs w-full min-w-0">
          <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-500/40 text-rose-300 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full font-bold shadow-sm text-[11px] sm:text-xs">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping flex-shrink-0" />
            <span className="flex items-center gap-1">
              🚨 LIMITED PROMO (
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

          <div className="flex items-center gap-2 text-white/85 text-[11px] sm:text-xs">
            <div className="flex text-amber-400 tracking-tighter">★★★★★</div>
            <span className="font-bold text-white">4.9/5 Rating</span>
            <span className="text-white/40">•</span>
            <span className="text-white/80">3,400+ Verified Buyers</span>
          </div>
        </div>

        {/* ── HERO GRID ── */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-w-0">

          {/* LEFT COLUMN: Copy, Photo, Personas, Selector, CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 w-full min-w-0">

            {/* Authority Eyebrow */}
            <div className="inline-flex items-center gap-1.5 text-[#00AEEF] text-[11px] sm:text-xs font-black uppercase tracking-widest bg-[#00AEEF]/10 px-3 py-1 rounded-full border border-[#00AEEF]/30 max-w-full">
              <span>🇩🇪</span> <span className="truncate">OFFICIAL GERMAN GRINDER MACHINE</span>
            </div>

            {/* ── MAIN HEADLINE (Responsive fluid typography, never overflows mobile) ── */}
            <h1 className="font-poppins font-black leading-[1.15] tracking-tight text-white break-words w-full">
              <span className="block text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] text-white">
                Your Kitchen Deserves a
              </span>
              <span className="block text-2xl xs:text-3xl sm:text-4xl lg:text-[46px] mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#00AEEF] to-sky-300">
                10–20 Year Investment,
              </span>
              <span className="block text-xl xs:text-2xl sm:text-3xl lg:text-[34px] mt-1.5 text-white/95 font-extrabold">
                Not Another Blender That Burns Out in 3 Months.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl break-words">
              This <strong className="text-white">German-Engineered Grinder Machine</strong> uses a high-speed industrial motor to pulverize dried beans, corn, yam, spices, coffee, nuts, cereals, and more into <em>bakery-smooth powder in under 15 seconds</em> — right inside your own kitchen. No market trips. No burned-out motors. No excuses.
            </p>

            {/* ── MOBILE ONLY: Product Photo Card (Immediately visible above the fold on phones) ── */}
            <div className="lg:hidden my-3 w-full min-w-0">
              <div className="relative rounded-3xl bg-gradient-to-b from-[#0B2545]/80 via-white/5 to-[#061325] border-2 border-[#00AEEF]/40 p-4 backdrop-blur-md shadow-2xl text-center w-full overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00AEEF]/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-2">
                  <span className="bg-[#0052CC] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow">
                    🇩🇪 German-Engineered
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Pay On Delivery
                  </span>
                </div>

                {/* Guaranteed visible image container — works on 100% of mobile browsers */}
                <div className="relative w-full h-[260px] xs:h-[300px] flex items-center justify-center my-2 mx-auto">
                  <Image
                    src="/images/hero-grinder-official.png"
                    alt="Home Essentials German Grinder Machine"
                    width={419}
                    height={595}
                    unoptimized
                    priority
                    className="w-auto h-full max-h-[260px] xs:max-h-[300px] max-w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)] mx-auto"
                  />
                </div>

                <div className="pt-2.5 border-t border-white/10 grid grid-cols-2 gap-2 text-center text-[10px] font-bold uppercase tracking-wider">
                  <div className="bg-white/5 p-1.5 rounded-xl border border-white/10 text-[#00AEEF]">
                    LASTS 10–20 YEARS
                  </div>
                  <div className="bg-white/5 p-1.5 rounded-xl border border-white/10 text-emerald-400">
                    1-YEAR FULL WARRANTY
                  </div>
                </div>
              </div>
            </div>

            {/* ── ROTATING PERSONA TICKER ── */}
            <div className="rounded-2xl bg-white/5 border border-white/15 p-3.5 sm:p-4 overflow-hidden w-full min-w-0">
              <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-white/50 mb-2 sm:mb-3">
                🎯 This Machine Is a Must-Have If You Are...
              </p>
              <div className="relative h-14 overflow-hidden w-full min-w-0">
                {PERSONAS.map((p, i) => (
                  <div
                    key={p.label}
                    className={`absolute inset-0 flex items-center gap-2.5 sm:gap-3 transition-all duration-500 w-full min-w-0 ${
                      i === activePersona
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl flex-shrink-0">{p.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-black text-xs sm:text-sm leading-tight truncate">
                        {p.label}
                      </p>
                      <p className="text-white/60 text-[11px] sm:text-xs font-medium leading-snug line-clamp-2">
                        {p.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Persona dots */}
              <div className="flex gap-1.5 mt-2.5">
                {PERSONAS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePersona(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === activePersona ? "w-5 bg-[#00AEEF]" : "w-1.5 bg-white/20"
                    }`}
                    aria-label={`View persona ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* ── KEY BENEFIT CHECKMARKS ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-semibold text-white/90 w-full min-w-0">
              {[
                { icon: "✓", label: "100% Pure Copper Induction Motor", color: "text-[#00AEEF]" },
                { icon: "✓", label: "25,000 RPM — Silky Powder in 15 Secs", color: "text-[#00AEEF]" },
                { icon: "✓", label: "Food-Grade 304 Stainless Steel Body", color: "text-[#00AEEF]" },
                { icon: "✓", label: "Zero Advance Deposit — Pay On Delivery", color: "text-emerald-400" },
                { icon: "✓", label: "Outlasts Your Pots, Plates & Cylinders", color: "text-[#00AEEF]" },
                { icon: "✓", label: "Brand New — Not Refurbished", color: "text-emerald-400" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3 py-2 sm:py-2.5 backdrop-blur-sm min-w-0">
                  <span className={`${b.color} text-sm font-black flex-shrink-0`}>{b.icon}</span>
                  <span className="truncate">{b.label}</span>
                </div>
              ))}
            </div>

            {/* ── FREE GIFTS CALLOUT (Fits both columns cleanly on mobile) ── */}
            <div className="rounded-2xl p-3.5 sm:p-5 bg-gradient-to-r from-[#0052CC]/50 via-[#00AEEF]/20 to-[#0052CC]/40 border-2 border-[#00AEEF] shadow-2xl shadow-cyan-500/20 backdrop-blur-md w-full min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5 sm:mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-2xl animate-bounce">🎁</span>
                  <span className="font-poppins font-black text-xs sm:text-sm uppercase tracking-wide text-white">
                    ORDER NOW &amp; GET THESE FREE GIFTS:
                  </span>
                </div>
                <span className="bg-[#00AEEF] text-[#061325] text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow">
                  WORTH ₦23,500 — FREE
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full min-w-0">
                {[
                  { icon: "🔪", name: "1 Extra Blade", sub: "Spare 6-Leaf Set" },
                  { icon: "🥣", name: "1 Sieve", sub: "Ultra-Fine Sifter" },
                  { icon: "🖌️", name: "1 Cleaning Brush", sub: "For Easy Care" },
                  { icon: "🛡️", name: "VIP Support", sub: "Lifetime Support", green: true },
                ].map((g) => (
                  <div key={g.name} className={`bg-[#061325]/85 border rounded-xl p-2 sm:p-2.5 text-center min-w-0 ${g.green ? "border-emerald-400/40" : "border-[#00AEEF]/30"}`}>
                    <span className="text-lg block mb-0.5">{g.icon}</span>
                    <p className="font-black text-white text-[11px] sm:text-xs leading-tight truncate">{g.name}</p>
                    <p className={`text-[9px] sm:text-[10px] mt-0.5 font-bold truncate ${g.green ? "text-emerald-400" : "text-[#00AEEF]"}`}>{g.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── TOP HORIZONTAL MECHANISM: PACKAGE SIZE SLIDER ── */}
            <div className="relative w-full min-w-0 max-w-full">
              <div className="flex items-center justify-between gap-2 mb-2">
                <p className="text-xs font-black uppercase tracking-wider text-[#00AEEF]">
                  📌 Select Capacity &amp; Promo Price:
                </p>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => scrollPackages("left")}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#00AEEF] hover:text-[#061325] text-white flex items-center justify-center text-xs font-black transition-all active:scale-90 border border-white/15"
                    aria-label="Scroll packages left"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollPackages("right")}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#00AEEF] hover:text-[#061325] text-white flex items-center justify-center text-xs font-black transition-all active:scale-90 border border-white/15"
                    aria-label="Scroll packages right"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Horizontal Scroll Track */}
              <div className="w-full min-w-0 overflow-hidden">
                <div
                  ref={packageScrollRef}
                  className="flex gap-2 overflow-x-auto scrollbar-none snap-x snap-mandatory py-1 select-none scroll-smooth w-full min-w-0"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {availableVariants.map((v) => {
                    const isSelected = selectedVariantId === v.id;
                    const isPopular = v.id === "gmp-1000g";
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => onVariantSelect(v.id)}
                        className={`flex-shrink-0 w-[130px] sm:w-[150px] snap-start text-left cursor-pointer rounded-2xl p-2.5 sm:p-3 border-2 transition-all duration-200 relative flex flex-col justify-between ${
                          isSelected
                            ? "bg-gradient-to-br from-[#0052CC]/80 to-[#00AEEF]/50 border-[#00AEEF] shadow-lg shadow-cyan-500/30 ring-2 ring-[#00AEEF]/40 scale-[1.02]"
                            : "bg-white/5 border-white/15 hover:border-white/35 hover:bg-white/10"
                        }`}
                        aria-pressed={isSelected}
                      >
                        <div className="flex items-center justify-between gap-1 mb-1 w-full">
                          <span className="font-poppins font-black text-xs text-white truncate">{v.capacity}</span>
                          {isPopular ? (
                            <span className="text-[8px] font-black uppercase text-amber-300 bg-amber-500/30 px-1 py-0.5 rounded flex-shrink-0">Popular</span>
                          ) : (
                            <span className="text-[8px] font-bold text-rose-300 bg-rose-500/30 px-1 py-0.5 rounded flex-shrink-0">{v.stockLeft} left</span>
                          )}
                        </div>
                        <div className="mt-1 pt-1 border-t border-white/10 w-full">
                          <div className="text-xs sm:text-sm font-black text-[#00AEEF] leading-tight">{v.priceDisplay}</div>
                          <div className="text-[10px] text-white/40 line-through">{v.regularPriceDisplay}</div>
                          {v.savingsDisplay && (
                            <div className="text-[9px] text-emerald-400 font-black mt-0.5">{v.savingsDisplay}</div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── CTA BUTTONS (Responsive, fits all mobile screens with zero overflow) ── */}
            <div className="space-y-2.5 pt-1 w-full min-w-0">
              <div className="flex flex-col sm:flex-row gap-2.5 w-full min-w-0">
                <button
                  onClick={() => onOrderClick(selectedVariantId)}
                  className="w-full sm:flex-1 bg-gradient-to-r from-[#00D2FF] via-[#00AEEF] to-[#0098d4] hover:brightness-110 text-[#061325] font-black uppercase py-3.5 sm:py-4 px-3 sm:px-6 rounded-2xl transition-all shadow-xl shadow-cyan-500/35 active:scale-95 flex items-center justify-center gap-2 group min-w-0"
                >
                  <span className="text-xs sm:text-sm font-black text-center leading-tight">
                    Order {selectedVariant.capacity} ({selectedVariant.priceDisplay}) — Pay On Delivery
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform flex-shrink-0 text-sm">→</span>
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-xs sm:text-sm py-3.5 sm:py-4 px-4 sm:px-5 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 active:scale-95 whitespace-nowrap min-w-0"
                >
                  💬 Chat On WhatsApp
                </a>
              </div>

              {/* Zero-Risk Microcopy */}
              <div className="flex flex-wrap items-center justify-between text-[10px] sm:text-xs text-white/80 gap-1.5 pt-0.5">
                <span className="flex items-center gap-1 font-medium text-emerald-400">
                  🔒 Pay ₦0 Now — Inspect Carton First
                </span>
                <span className="flex items-center gap-1 font-medium text-[#00AEEF]">
                  🚚 Free Delivery Across 36 States + FCT
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Desktop Product Visual ── */}
          <div className="hidden lg:flex lg:col-span-5 justify-center w-full min-w-0">
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 p-6 pb-8 backdrop-blur-md shadow-2xl overflow-hidden group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00AEEF]/25 rounded-full blur-3xl pointer-events-none" />

                {/* Top Badges */}
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#0052CC] text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow">
                    🇩🇪 German-Engineered
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    In Stock • Ready to Ship
                  </span>
                </div>

                {/* Machine Photo Desktop */}
                <div className="relative w-full h-[460px] max-w-[380px] mx-auto my-2 flex items-center justify-center">
                  <Image
                    src="/images/hero-grinder-official.png"
                    alt="Home Essentials German Grinder Machine — 25,000 RPM Industrial Motor"
                    width={419}
                    height={595}
                    unoptimized
                    priority
                    className="w-auto h-full max-h-[460px] max-w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500 mx-auto"
                  />
                </div>

                {/* Slogan stamp */}
                <div className="text-center py-2 mb-2">
                  <p className="font-poppins font-black text-base text-[#00AEEF] tracking-wide uppercase">
                    Grandmaster Pro™
                  </p>
                  <p className="text-white/50 text-xs font-semibold tracking-widest">
                    Built to Last. Built for Nigeria.
                  </p>
                </div>

                {/* Bottom Trust Stamps */}
                <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-center text-[10px] font-bold uppercase tracking-wider">
                  <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                    <span className="text-[#00AEEF] block text-xs">LASTS 10–20 YRS</span>
                    <span className="text-white/70">Pure Copper Engine</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                    <span className="text-[#00AEEF] block text-xs">PAY ON DELIVERY</span>
                    <span className="text-white/70">All 36 States + FCT</span>
                  </div>
                </div>
              </div>

              {/* Floating Warranty Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white text-[#061325] p-3.5 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#0052CC] flex items-center justify-center text-white text-lg font-black shadow">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-black uppercase leading-tight text-[#0052CC]">1-Year Engine Warranty</p>
                  <p className="text-[10px] text-gray-600 font-medium">Brand New — Not Refurbished</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
