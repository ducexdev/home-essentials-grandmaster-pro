"use client";

import Link from "next/link";
import Image from "next/image";

export function StorePromoBanners() {
  return (
    <section className="py-8 bg-white border-b border-[#ebebeb]">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Banner 1: Tough Nigerian Ingredients */}
          <div className="group relative rounded-xl overflow-hidden bg-gradient-to-r from-[#0B1F3A] to-[#00388c] text-white p-7 sm:p-9 flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-lg transition-all duration-300">
            {/* Background Image */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 group-hover:scale-105 group-hover:opacity-35 transition-all duration-500 pointer-events-none">
              <Image
                src="/images/food-items-grind.jpg"
                alt="Nigerian food items to grind"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-[70%]">
              <span className="inline-block text-[11px] font-extrabold tracking-widest text-[#00AEEF] uppercase mb-2">
                HEAVY-DUTY MILLING
              </span>
              <h3 className="font-poppins font-black text-xl sm:text-2xl text-white leading-snug">
                Crush Any Tough Grain <br />
                <span className="text-[#00AEEF]">To Ultra-Fine Powder</span>
              </h3>
              <p className="text-xs text-white/80 mt-2 line-clamp-2">
                Dry pepper, beans, corn, millet, dried yam chips, tiger nut &amp; hard spices in under 60 seconds.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <Link
                href="/grandmaster-pro"
                className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0098d4] text-white text-xs font-bold px-5 py-2.5 rounded uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Shop Machines</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Banner 2: 100% Copper Motor & Safety */}
          <div className="group relative rounded-xl overflow-hidden bg-gradient-to-r from-[#0052CC] to-[#0B1F3A] text-white p-7 sm:p-9 flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 group-hover:scale-105 group-hover:opacity-30 transition-all duration-500 pointer-events-none">
              <Image
                src="/images/safety-features.jpg"
                alt="Safety and durability features"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0052CC] via-[#0052CC]/90 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-[70%]">
              <span className="inline-block text-[11px] font-extrabold tracking-widest text-[#00AEEF] uppercase mb-2">
                COMMERCIAL SPECIFICATION
              </span>
              <h3 className="font-poppins font-black text-xl sm:text-2xl text-white leading-snug">
                100% Pure Copper Motor <br />
                <span className="text-[#00AEEF]">&amp; Dual Safety Switch</span>
              </h3>
              <p className="text-xs text-white/80 mt-2 line-clamp-2">
                25,000 RPM high torque, air overload protector, and non-slip vibration-dampening feet.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <Link
                href="/grandmaster-pro#specs"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0052CC] text-xs font-bold px-5 py-2.5 rounded uppercase tracking-wider transition-colors shadow-md"
              >
                <span>View Full Specs</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
