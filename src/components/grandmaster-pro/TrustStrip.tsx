import type { ProductConfig } from "@/lib/product-config";
import Image from "next/image";

interface Props {
  product: ProductConfig;
}

const TRUST_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "100% Genuine Machine",
    sub: "Direct from Official Importer",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    label: "Dedicated Nigerian Support",
    sub: "Lagos, Abuja & Port Harcourt",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    ),
    label: "Interstate Doorstep Delivery",
    sub: "All 36 States & FCT Covered",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    label: "Pay Only When You Inspect",
    sub: "Zero Advance Payment Required",
  },
];

export function TrustStrip({}: Props) {
  return (
    <section className="bg-white border-b border-gray-100 py-12" aria-label="Purchase reassurance">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#0052CC] bg-[#f0f4fc] px-3.5 py-1 rounded-full border border-[#0052CC]/20 inline-block mb-2">
            GUARANTEED PEACE OF MIND
          </span>
          <h2 className="font-poppins font-black text-2xl sm:text-3xl text-[#0B1F3A]">
            Why Over 3,400+ Nigerians Trust Home Essentials
          </h2>
          <p className="text-[#475467] text-xs sm:text-sm mt-1.5 max-w-xl mx-auto">
            We eliminate 100% of online shopping risk so you can order with total confidence today.
          </p>
        </div>

        {/* Core Reassurance Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 mb-8">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200/80 hover:border-[#0052CC]/50 hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-white text-[#0052CC] border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                {item.icon}
              </span>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-[#0B1F3A] leading-tight">
                  {item.label}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#475467] mt-1 font-medium">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Popping Free Gifts & After-Purchase Support Highlight Strip */}
        <div className="my-8 rounded-2xl bg-gradient-to-r from-[#061325] via-[#0B2545] to-[#061325] p-5 sm:p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 border-2 border-[#00AEEF]">
          <div className="flex items-center gap-3.5">
            <span className="w-12 h-12 rounded-xl bg-[#00AEEF] text-[#061325] flex items-center justify-center text-2xl flex-shrink-0 font-black shadow-lg">
              🎁
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#00AEEF] text-[#061325] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                  FREE ACCESSORY BUNDLE
                </span>
                <span className="text-white/80 text-xs font-semibold">Included 100% Free In Every Carton</span>
              </div>
              <h3 className="font-poppins font-black text-sm sm:text-base text-white mt-1 leading-snug">
                1 Extra 6-Leaf Blade + 1 Micro-Mesh Sieve + 1 Cleaning Brush + Dedicated Support
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-black text-[#00AEEF] bg-white/10 px-4 py-2.5 rounded-xl border border-white/15 whitespace-nowrap">
            <span>🛡️ Dedicated Nigerian Engineer Support</span>
          </div>
        </div>

        {/* Visual Proof Row (POD Badge, Warranty Badge, Waybill Photo) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-6 border-t border-gray-100">
          {/* Badge 1: Pay on Delivery */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50/60 to-white border border-[#0052CC]/25 shadow-sm">
            <div className="w-16 h-14 relative flex-shrink-0">
              <Image
                src="/images/badge-pod.png"
                alt="Payment on Delivery Verified"
                width={80}
                height={62}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-[#0052CC] font-black text-xs uppercase tracking-wide">Pay on Delivery</p>
              <p className="text-[#475467] text-xs mt-0.5 leading-relaxed">Zero advance payment. Inspect your package thoroughly before paying the delivery agent.</p>
            </div>
          </div>

          {/* Badge 2: Replacement / Warranty */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-sky-50/60 to-white border border-[#00AEEF]/30 shadow-sm">
            <div className="w-16 h-14 relative flex-shrink-0">
              <Image
                src="/images/warranty-badge.webp"
                alt="Warranty and Replacement Guarantee"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-[#0052CC] font-black text-xs uppercase tracking-wide">1-Year Engine Warranty</p>
              <p className="text-[#475467] text-xs mt-0.5 leading-relaxed">Guaranteed 10-day instant swap policy if any factory defect occurs.</p>
            </div>
          </div>

          {/* Badge 3: Active Waybills */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-gray-200 shadow-sm">
            <div className="w-16 h-14 relative rounded-xl overflow-hidden flex-shrink-0 border border-gray-200">
              <Image
                src="/images/dispatch-waybills.jpg"
                alt="Waybill dispatch record for customers across Nigeria"
                width={80}
                height={60}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[#0B1F3A] font-black text-xs uppercase tracking-wide">Daily Waybill Dispatches</p>
              <p className="text-[#475467] text-xs mt-0.5 leading-relaxed">Dispatched daily via GIG, Peace, Speedaf &amp; top interstate logistics terminals nationwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
