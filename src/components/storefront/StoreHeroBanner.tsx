"use client";

import Link from "next/link";
import Image from "next/image";

export function StoreHeroBanner() {
  const WHATSAPP_URL =
    "https://wa.me/2347045787045?text=Hello%20Home%20Essentials%2C%20I%20am%20interested%20in%20ordering%20Grandmaster%20Pro.";

  return (
    <section className="py-6 sm:py-8 bg-[#f7f7f7] border-b border-[#ebebeb]">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column (5 Cols): Stacked Side Promo Banners */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {/* Promo Banner 1: Blades & Milling */}
            <div className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0B1F3A] via-[#00388c] to-[#0052CC] text-white p-6 sm:p-7 flex flex-col justify-between flex-1 border border-[#ebebeb] shadow-sm hover:shadow-md transition-all">
              <div className="absolute right-0 bottom-0 w-44 h-44 opacity-20 group-hover:scale-105 group-hover:opacity-30 transition-all pointer-events-none">
                <Image
                  src="/images/gallery-blades.webp"
                  alt="6-Leaf Stainless Blades"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="relative z-10">
                <span className="inline-block text-[10px] font-black tracking-widest text-[#00AEEF] uppercase mb-1.5">
                  COMMERCIAL GRADE
                </span>
                <h3 className="font-poppins font-black text-lg sm:text-xl text-white leading-snug">
                  Hardened 6-Leaf <br />
                  <span className="text-[#00AEEF]">Stainless 304 Blades</span>
                </h3>
                <p className="text-xs text-white/80 mt-1.5 max-w-[85%]">
                  Pulverizes tough dried pepper, corn, beans, and yam chips into powdery flour without jamming.
                </p>
              </div>

              <div className="relative z-10 pt-4">
                <Link
                  href="/grandmaster-pro"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#00AEEF] transition-colors border-b-2 border-white/60 hover:border-[#00AEEF] pb-0.5"
                >
                  <span>Shop Machine</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Promo Banner 2: 100% Copper Motor & POD */}
            <div className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-6 sm:p-7 flex flex-col justify-between flex-1 border border-[#ebebeb] shadow-sm hover:shadow-md transition-all">
              <div className="absolute right-0 bottom-0 w-44 h-44 opacity-20 group-hover:scale-105 group-hover:opacity-30 transition-all pointer-events-none">
                <Image
                  src="/images/product-hero.webp"
                  alt="Pure Copper Motor"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="relative z-10">
                <span className="inline-block text-[10px] font-black tracking-widest text-[#00AEEF] uppercase mb-1.5">
                  VERIFIED LOGISTICS
                </span>
                <h3 className="font-poppins font-black text-lg sm:text-xl text-white leading-snug">
                  100% Pure Copper Motor <br />
                  <span className="text-[#00AEEF]">&amp; Pay on Delivery</span>
                </h3>
                <p className="text-xs text-white/80 mt-1.5 max-w-[85%]">
                  Inspect machine and all accessories at your doorstep anywhere in Nigeria before paying.
                </p>
              </div>

              <div className="relative z-10 pt-4">
                <Link
                  href="/grandmaster-pro#specs"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#00AEEF] transition-colors border-b-2 border-white/60 hover:border-[#00AEEF] pb-0.5"
                >
                  <span>View Specifications</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Main Showcase Hero Banner */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#ebebeb] p-6 sm:p-9 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            {/* Top pill row */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="bg-[#0052CC] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded">
                  ★ BESTSELLER 2026
                </span>
                <span className="bg-[#e5f7fd] text-[#0052CC] text-[10px] font-bold px-2 py-1 rounded border border-[#00AEEF]/30">
                  Ready for Dispatch
                </span>
              </div>
              <div className="text-amber-500 text-xs font-bold flex items-center gap-1">
                <span>★★★★★</span>
                <span className="text-[#767676] text-[11px] font-medium">(148 Verified Nigerian Reviews)</span>
              </div>
            </div>

            {/* Center Grid: Copy + Product Photo */}
            <div className="grid sm:grid-cols-12 gap-6 items-center my-auto">
              {/* Product Info */}
              <div className="sm:col-span-7 space-y-3">
                <h1 className="font-poppins font-black text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A] leading-tight tracking-tight">
                  Grandmaster Pro <br />
                  <span className="text-[#0052CC]">2500A Commercial Grinder</span>
                </h1>

                <p className="text-xs sm:text-sm text-[#767676] leading-relaxed">
                  The heavy-duty kitchen workhorse every Nigerian home, caterer, and restaurant needs. Pulverizes grains, hard spices, and dry peppers in seconds with industrial copper power.
                </p>

                {/* Features Checklist */}
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#333333] pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#00AEEF]">✓</span>
                    <span>100% Pure Copper Coil</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#00AEEF]">✓</span>
                    <span>25,000 RPM Speed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#00AEEF]">✓</span>
                    <span>Food-Grade 304 Steel</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#00AEEF]">✓</span>
                    <span>Zero Jam Air Switch</span>
                  </div>
                </div>

                {/* Pricing Block */}
                <div className="pt-2 flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-black text-[#0052CC]">
                    ₦75,000
                  </span>
                  <span className="text-sm sm:text-base text-gray-400 line-through">
                    ₦120,000
                  </span>
                  <span className="bg-[#00AEEF] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">
                    SAVE 38%
                  </span>
                </div>

                {/* CTAs (Accent / CTA Color #00AEEF) */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/grandmaster-pro"
                    className="bg-[#00AEEF] hover:bg-[#0098d4] text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded text-center transition-all shadow-lg shadow-cyan-500/25 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Order With Pay on Delivery</span>
                    <span>→</span>
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-xs uppercase tracking-wider px-4 py-3.5 rounded text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>💬 WhatsApp Order</span>
                  </a>
                </div>
              </div>

              {/* Product Visual */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-xl bg-[#fafafa] border border-[#ebebeb] p-3 flex items-center justify-center">
                  <Image
                    src="/images/hero-grinder-official.png"
                    alt="Grandmaster Pro 2500A Heavy Duty Commercial Grinder"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  />
                  <div className="absolute bottom-2 right-2 bg-[#0052CC] text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider shadow">
                    Built to Last
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Guarantee Strip */}
            <div className="pt-4 mt-4 border-t border-[#ebebeb] flex flex-wrap items-center justify-between text-xs text-[#767676] gap-2">
              <span className="flex items-center gap-1 font-medium">
                <span className="text-[#00AEEF]">✓</span> Doorstep Inspection Before Payment
              </span>
              <span className="flex items-center gap-1 font-medium">
                <span className="text-[#00AEEF]">✓</span> 1-Year Full Motor Guarantee
              </span>
              <span className="flex items-center gap-1 font-medium">
                <span className="text-[#00AEEF]">✓</span> Interstate Dispatch Today
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
