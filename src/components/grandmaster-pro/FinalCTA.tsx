"use client";

import { useState } from "react";
import type { ProductConfig } from "@/lib/product-config";
import Image from "next/image";

interface Props {
  product: ProductConfig;
  selectedVariantId: string;
  onVariantSelect?: (variantId: string) => void;
  onOrderClick: (variantId?: string) => void;
  whatsappUrl: string;
}

export function FinalCTA({
  product,
  selectedVariantId,
  onVariantSelect,
  onOrderClick,
  whatsappUrl,
}: Props) {
  const [activeVariantId, setActiveVariantId] = useState(selectedVariantId);

  const currentVariantId = activeVariantId || selectedVariantId;
  const selectedVariant =
    product.variants.find((v) => v.id === currentVariantId) ||
    product.variants.find((v) => v.id === "gmp-1000g") ||
    product.variants[0];

  const handleVariantClick = (id: string) => {
    setActiveVariantId(id);
    if (onVariantSelect) {
      onVariantSelect(id);
    }
  };

  return (
    <section
      id="order"
      className="py-20 lg:py-28 bg-[#061325] text-white relative overflow-hidden border-t border-white/10"
      aria-labelledby="final-cta-heading"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#0052CC]/25 to-[#00AEEF]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#00AEEF_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">

        {/* Scarcity Ticker */}
        <div className="reveal-on-scroll max-w-2xl mx-auto mb-8">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-amber-400/30 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
              </span>
              <div>
                <p className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wide">
                  ⚠️ Today&apos;s Promo Dispatch Cut-off Notice
                </p>
                <p className="text-[11px] sm:text-xs text-white/70 font-medium">
                  Strictly while warehouse stock lasts — No price extension once current batch sells out!
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex flex-shrink-0 bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">
              Limited Units
            </span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#00AEEF]/15 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            <span>🛡️ ZERO ADVANCE PAYMENT • 100% INSPECT BEFORE PAYING</span>
          </div>
          <h2
            id="final-cta-heading"
            className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight"
          >
            Stop Straining With Manual Mortars &amp; Burning Cheap Blenders.<br />
            <span className="bg-gradient-to-r from-[#00D2FF] via-[#00AEEF] to-[#60A5FA] bg-clip-text text-transparent">
              Own Your Grandmaster Pro Today.
            </span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Join over 3,400 Nigerian households, restaurants, and caterers enjoying silky-smooth powder in 15 seconds. Delivered directly to your doorstep in all 36 states + FCT.
          </p>
        </div>

        {/* Interactive Quick-Select Variant Matrix */}
        <div className="reveal-on-scroll mb-10">
          <p className="text-center text-xs font-black uppercase tracking-wider text-white/60 mb-4">
            📌 Select Your Preferred Machine Capacity:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 max-w-4xl mx-auto">
            {product.variants.map((v) => {
              const isSelected = v.id === currentVariantId;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => handleVariantClick(v.id)}
                  className={`p-3 rounded-2xl text-left transition-all duration-200 border-2 flex flex-col justify-between ${
                    isSelected
                      ? "bg-gradient-to-b from-[#0052CC] to-[#00388A] border-[#00AEEF] shadow-xl shadow-cyan-500/25 ring-2 ring-[#00AEEF]/40 scale-[1.02]"
                      : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="font-poppins font-black text-xs text-white">
                      {v.capacity}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs font-black text-[#00AEEF]">
                    {v.priceDisplay}
                  </p>
                  <p className="text-[10px] font-extrabold text-rose-400 mt-1">
                    Only {v.stockLeft} left!
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Package Spotlight Card */}
        {selectedVariant && (
          <div className="reveal-on-scroll max-w-2xl mx-auto mb-10">
            <div className="rounded-3xl bg-white/5 border-2 border-[#00AEEF]/50 backdrop-blur-2xl shadow-2xl relative overflow-hidden">

              <div className="p-6 sm:p-8">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#00AEEF] to-[#0052CC] text-[#061325] text-[11px] font-black uppercase px-4 py-1 rounded-bl-2xl">
                  🔥 Selected Promo Package
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Product Image Frame */}
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-[#0B1F3A] p-2 border border-white/20 shadow-xl overflow-hidden flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/images/hero-grinder-official.png"
                      alt={`Grandmaster Pro ${selectedVariant.capacity} Commercial Grinder`}
                      width={160}
                      height={160}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>

                  {/* Pricing & Stock Details */}
                  <div className="flex-1 text-center sm:text-left space-y-2">
                    <div className="inline-flex flex-wrap items-center gap-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full">
                      <span>✓ Ready for Dispatch</span>
                      <span>•</span>
                      <span className="text-rose-300 font-black">Only {selectedVariant.stockLeft} Units Left</span>
                    </div>

                    <h3 className="font-poppins font-black text-xl sm:text-2xl text-white">
                      Grandmaster Pro — {selectedVariant.capacity}
                    </h3>

                    <div className="flex flex-wrap items-baseline justify-center sm:justify-start gap-2.5">
                      <span className="font-poppins font-black text-3xl sm:text-4xl text-[#00AEEF]">
                        {selectedVariant.priceDisplay}
                      </span>
                      <span className="text-white/40 line-through text-base font-bold">
                        {selectedVariant.regularPriceDisplay}
                      </span>
                      {selectedVariant.savingsDisplay && (
                        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-black px-2.5 py-0.5 rounded-full">
                          {selectedVariant.savingsDisplay}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Gifts Inclusion Banner */}
              <div className="flex items-center gap-3.5 bg-[#00AEEF]/10 border-t border-[#00AEEF]/20 p-4 sm:p-5">
                <span className="text-3xl flex-shrink-0 animate-bounce">🎁</span>
                <div className="text-left">
                  <p className="text-white font-poppins font-black text-xs sm:text-sm uppercase tracking-wide">
                    FREE GIFTS INCLUDED IN THIS PACKAGE (WORTH ₦23,500):
                  </p>
                  <p className="text-[#00AEEF] text-xs font-bold mt-0.5">
                    1 Extra Carbon Steel Blade Set + 1 Precision Sieve + 1 Cleaning Brush + VIP After-Purchase Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4 Trust Pillar Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 reveal-on-scroll max-w-4xl mx-auto">
          {FINAL_BENEFITS.map((b) => (
            <div
              key={b.label}
              className="bg-white/5 rounded-2xl p-4 border border-white/10 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors"
            >
              <div className="text-[#00AEEF] mb-2">{b.icon}</div>
              <p className="text-white text-xs font-bold">{b.label}</p>
              <p className="text-white/50 text-[10px] mt-0.5">{b.sub}</p>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto reveal-on-scroll">
          <button
            onClick={() => onOrderClick(currentVariantId)}
            className="w-full sm:flex-1 min-h-[58px] flex items-center justify-center gap-2.5 bg-[#00AEEF] hover:bg-[#0098d4] text-[#061325] font-black text-base sm:text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-cyan-500/30 active:scale-95 shadow-xl shadow-cyan-500/20"
          >
            <span>Claim {selectedVariant?.capacity ?? "Machine"} (Pay On Delivery)</span>
            <span>→</span>
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[58px] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-black text-base px-8 py-4 rounded-2xl transition-all shadow-lg shadow-green-500/20 active:scale-95"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp Quick Order</span>
          </a>
        </div>

        {/* Micro-reassurance text */}
        <p className="mt-6 text-center text-white/50 text-xs reveal-on-scroll">
          🔒 Zero financial commitment upfront. You only pay cash or transfer after our courier delivers the parcel into your hands.
        </p>
      </div>
    </section>
  );
}

const FINAL_BENEFITS = [
  {
    label: "Zero Deposit",
    sub: "Pay only when received",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "36 States + FCT",
    sub: "Direct doorstep delivery",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    label: "1-Year Warranty",
    sub: "Pure copper coil motor",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "WhatsApp Support",
    sub: "Lifetime VIP kitchen help",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
      </svg>
    ),
  },
];
