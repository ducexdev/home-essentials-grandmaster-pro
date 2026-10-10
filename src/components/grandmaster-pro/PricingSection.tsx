"use client";

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
  const variant2500 = product.variants.find((v) => v.id.includes("2500")) || product.variants[0];
  const variant4500 = product.variants.find((v) => v.id.includes("4500")) || product.variants[1];

  return (
    <section
      id="pricing"
      className="py-20 bg-[#F4F6F8]"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 bg-[#0052CC]/10 text-[#0052CC] font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <span>🎁 Limited Time Warehouse Promotional Deal</span>
          </div>
          <h2 id="pricing-heading" className="font-poppins text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">
            Select Your Grandmaster Pro Package
          </h2>
          <p className="text-[#344054] text-lg max-w-2xl mx-auto">
            Direct from warehouse discount. Every order includes our complete ₦37,500 bonus accessory kit + Free Doorstep Delivery.
          </p>

          {/* Scarcity Banner */}
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold px-4 py-2 rounded-xl">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span>⚡ Only 7 units remaining in today&apos;s batch at this promotional rate. Next batch reflects new import rates.</span>
          </div>

          {/* HIGH-CONVERTING FREE GIFTS STRIP */}
          <div className="mt-6 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#0052CC] via-[#09357a] to-[#0052CC] p-4 text-white border-2 border-[#00AEEF] shadow-xl text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl animate-bounce">🎁</span>
              <div>
                <p className="font-poppins font-black text-sm uppercase tracking-wide text-white">
                  GIFTS WE OFFER WITH EVERY MACHINE:
                </p>
                <p className="text-xs text-white/90 font-medium">
                  1 Extra Blade + 1 Sieve + 1 Brush for Cleaning the Grinder + Dedicated After-Purchase Support
                </p>
              </div>
            </div>
            <span className="bg-[#00AEEF] text-[#061325] text-xs font-black uppercase px-3 py-1.5 rounded-xl shadow whitespace-nowrap">
              ₦0 EXTRA CHARGE
            </span>
          </div>
        </div>

        {/* Side-by-Side Dual Tier Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          {/* Card 1: 2500A Family Edition */}
          <div
            className={`reveal-on-scroll relative rounded-3xl bg-white p-7 sm:p-9 border-2 transition-all duration-200 flex flex-col justify-between shadow-md ${
              selectedVariantId === variant2500?.id
                ? "border-[#0052CC] shadow-xl ring-2 ring-[#0052CC]/20"
                : "border-gray-200 hover:border-[#0052CC]/40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider bg-gray-100 text-[#0B1F3A] px-3 py-1 rounded-full">
                  Home & Family Edition
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Save ₦50,000
                </span>
              </div>

              <h3 className="font-poppins font-bold text-[#0B1F3A] text-2xl mb-1">
                Grandmaster Pro 2500A
              </h3>
              <p className="text-gray-500 text-xs mb-5">
                2,500g (2.5kg) Capacity • Ideal for everyday households & family meals
              </p>

              {/* Price display */}
              <div className="mb-6 p-4 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                <div className="flex items-baseline gap-3">
                  <span className="font-poppins font-extrabold text-[#0B1F3A] text-3xl sm:text-4xl">
                    ₦75,000
                  </span>
                  <span className="text-gray-400 line-through text-base font-medium">
                    ₦125,000
                  </span>
                </div>
                <p className="text-emerald-600 font-semibold text-xs mt-1">
                  ✓ Free Doorstep Delivery + Zero Pre-payment
                </p>
              </div>

              {/* Free Gifts Highlight Box Inside Card */}
              <div className="mb-5 p-3.5 rounded-xl bg-blue-50/70 border border-[#00AEEF]/40 space-y-1.5">
                <p className="text-[11px] font-black uppercase text-[#0052CC] flex items-center gap-1.5">
                  <span>🎁</span> Free Gifts Included In This Box:
                </p>
                <div className="grid grid-cols-2 gap-1 text-[11px] text-[#0B1F3A] font-bold">
                  <div>★ 1 Extra Blade</div>
                  <div>★ 1 Sifting Sieve</div>
                  <div>★ 1 Cleaning Brush</div>
                  <div className="text-emerald-700">★ VIP Support</div>
                </div>
              </div>

              {/* What is inside the box */}
              <div className="space-y-3 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">Full Package Breakdown:</p>
                <ul className="space-y-2.5 text-xs text-[#344054]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#0052CC] font-bold">✓</span>
                    <span><strong>1x Grandmaster Pro 2500A Machine</strong> (100% Copper Motor)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00AEEF] font-bold">★</span>
                    <span className="text-[#0B1F3A]"><strong>FREE GIFT: 1 Extra 6-Leaf Blade Set</strong> (Value ₦15,000)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00AEEF] font-bold">★</span>
                    <span className="text-[#0B1F3A]"><strong>FREE GIFT: 1 Precision Sifting Sieve</strong> (Value ₦5,000)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00AEEF] font-bold">★</span>
                    <span className="text-[#0B1F3A]"><strong>FREE GIFT: 1 Grinder Cleaning Brush</strong> (Value ₦3,500)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">★</span>
                    <span className="text-emerald-700"><strong>FREE BONUS: VIP After-Purchase Support</strong> (Direct Care)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0052CC] font-bold">★</span>
                    <span><strong>FREE Express Doorstep Delivery</strong> Nationwide (Value ₦8,000)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>1 Full Year Warranty</strong> + 14-Day Immediate Swap</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => {
                  if (variant2500) onVariantSelect(variant2500.id);
                  onOrderClick(variant2500?.id);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#00AEEF] hover:bg-[#0098d4] text-[#061325] font-extrabold text-base py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
              >
                Order 2500A + Free Gifts (₦75,000) →
              </button>
              <p className="text-center text-[11px] text-gray-500 font-medium">
                🔒 Pay on Delivery • Zero Risk • Open & Inspect First
              </p>
            </div>
          </div>

          {/* Card 2: 4500A Commercial Edition (High Value Target) */}
          <div
            className={`reveal-on-scroll relative rounded-3xl bg-white p-7 sm:p-9 border-2 transition-all duration-200 flex flex-col justify-between shadow-lg ${
              selectedVariantId === variant4500?.id
                ? "border-[#0052CC] ring-4 ring-[#0052CC]/20 shadow-2xl"
                : "border-[#0052CC]/60 hover:border-[#0052CC]"
            }`}
          >
            {/* Best Value Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0052CC] to-[#00AEEF] text-white font-extrabold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <span>⭐</span>
              <span>Most Popular For Catering & Food Business</span>
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pt-2">
                <span className="text-xs font-extrabold uppercase tracking-wider bg-[#0052CC]/10 text-[#0052CC] px-3 py-1 rounded-full">
                  Commercial & Bulk Edition
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Save ₦50,000
                </span>
              </div>

              <h3 className="font-poppins font-bold text-[#0B1F3A] text-2xl mb-1">
                Grandmaster Pro 4500A
              </h3>
              <p className="text-gray-500 text-xs mb-5">
                4,500g (4.5kg) Commercial Capacity • High-torque continuous pulverizing
              </p>

              {/* Price display */}
              <div className="mb-6 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                <div className="flex items-baseline gap-3">
                  <span className="font-poppins font-extrabold text-[#0B1F3A] text-3xl sm:text-4xl">
                    ₦125,000
                  </span>
                  <span className="text-gray-400 line-through text-base font-medium">
                    ₦175,000
                  </span>
                </div>
                <p className="text-[#0052CC] font-semibold text-xs mt-1">
                  ✓ Commercial Grade 4.5kg Chamber + Free Nationwide Waybill
                </p>
              </div>

              {/* Free Gifts Highlight Box Inside Card */}
              <div className="mb-5 p-3.5 rounded-xl bg-blue-50/70 border border-[#00AEEF]/40 space-y-1.5">
                <p className="text-[11px] font-black uppercase text-[#0052CC] flex items-center gap-1.5">
                  <span>🎁</span> Free Gifts Included In This Box:
                </p>
                <div className="grid grid-cols-2 gap-1 text-[11px] text-[#0B1F3A] font-bold">
                  <div>★ 1 Extra Commercial Blade</div>
                  <div>★ 1 Sifting Sieve</div>
                  <div>★ 1 Cleaning Brush</div>
                  <div className="text-emerald-700">★ VIP Support</div>
                </div>
              </div>

              {/* What is inside the box */}
              <div className="space-y-3 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">Full Package Breakdown:</p>
                <ul className="space-y-2.5 text-xs text-[#344054]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#0052CC] font-bold">✓</span>
                    <span><strong>1x Grandmaster Pro 4500A Machine</strong> (Commercial High Torque)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00AEEF] font-bold">★</span>
                    <span className="text-[#0B1F3A]"><strong>FREE GIFT: 1 Extra Heavy-Duty Blade Set</strong> (Value ₦18,000)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00AEEF] font-bold">★</span>
                    <span className="text-[#0B1F3A]"><strong>FREE GIFT: 1 Commercial Sifting Sieve</strong> (Value ₦6,000)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00AEEF] font-bold">★</span>
                    <span className="text-[#0B1F3A]"><strong>FREE GIFT: 1 Grinder Cleaning Brush & Pusher</strong> (Value ₦4,500)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">★</span>
                    <span className="text-emerald-700"><strong>FREE BONUS: Lifetime VIP After-Purchase Support</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#00AEEF] font-bold">★</span>
                    <span><strong>FREE Insured Interstate Waybill</strong> Nationwide (Value ₦10,000)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>1 Full Year Commercial Warranty</strong> + Technical Line</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => {
                  if (variant4500) onVariantSelect(variant4500.id);
                  onOrderClick(variant4500?.id);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#0052CC] hover:bg-[#0041a3] text-white font-extrabold text-base py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 active:scale-95"
              >
                Order 4500A + Free Gifts (₦125,000) →
              </button>
              <p className="text-center text-[11px] text-gray-500 font-medium">
                🔒 Pay on Delivery • Zero Risk • Open & Inspect First
              </p>
            </div>
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
