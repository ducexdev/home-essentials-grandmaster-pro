"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function StoreFlashDeal() {
  // Live Countdown Timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 36,
    seconds: 48,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, "0");

  return (
    <section id="flash-deal" className="py-12 bg-white border-b border-[#ebebeb]">
      <div className="max-w-[1350px] mx-auto px-4">
        {/* Header Bar with Countdown */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-6 mb-8 border-b border-[#ebebeb] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-ping" />
              <span className="text-xs font-black uppercase tracking-widest text-[#0052CC]">
                SPECIAL LIMITED PROMOTION
              </span>
            </div>
            <h2 className="font-poppins font-black text-2xl sm:text-3xl text-[#0B1F3A]">
              Deals of the Day
            </h2>
          </div>

          {/* Countdown Clock Box */}
          <div className="flex items-center gap-2 sm:gap-3 bg-[#fafafa] border border-[#ebebeb] rounded-lg p-2 sm:p-2.5">
            <span className="text-xs font-bold text-[#767676] uppercase tracking-wider hidden sm:inline mr-1">
              Ends In:
            </span>
            <div className="flex items-center gap-1.5 text-center">
              <div className="bg-[#0B1F3A] text-white rounded px-2.5 py-1 min-w-[36px]">
                <span className="font-mono font-bold text-sm sm:text-base leading-none">
                  {formatNum(timeLeft.hours)}
                </span>
                <span className="block text-[8px] text-gray-400 uppercase mt-0.5">Hours</span>
              </div>
              <span className="font-bold text-[#0052CC]">:</span>
              <div className="bg-[#0B1F3A] text-white rounded px-2.5 py-1 min-w-[36px]">
                <span className="font-mono font-bold text-sm sm:text-base leading-none">
                  {formatNum(timeLeft.minutes)}
                </span>
                <span className="block text-[8px] text-gray-400 uppercase mt-0.5">Mins</span>
              </div>
              <span className="font-bold text-[#0052CC]">:</span>
              <div className="bg-[#00AEEF] text-white rounded px-2.5 py-1 min-w-[36px] shadow-sm">
                <span className="font-mono font-bold text-sm sm:text-base leading-none">
                  {formatNum(timeLeft.seconds)}
                </span>
                <span className="block text-[8px] text-sky-100 uppercase mt-0.5">Secs</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Spotlight Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Deal 1: 2500A Flagship */}
          <div className="border border-[#ebebeb] rounded-xl p-6 sm:p-7 bg-[#fafafa] hover:border-[#0052CC] transition-all flex flex-col justify-between group">
            <div className="grid sm:grid-cols-12 gap-5 items-center">
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-44 h-44 bg-white rounded-lg p-3 border border-gray-100 flex items-center justify-center">
                  <span className="absolute top-2 left-2 bg-[#00AEEF] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                    -38%
                  </span>
                  <Image
                    src="/images/hero-grinder-official.png"
                    alt="Grandmaster Pro 2500A Deal of Day"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>

              <div className="sm:col-span-7 space-y-2">
                <span className="text-[10px] text-[#0052CC] font-bold uppercase tracking-wider">
                  Commercial Bestseller
                </span>
                <h3 className="font-poppins font-black text-lg text-[#0B1F3A] leading-snug">
                  Grandmaster Pro 2500A Grinder
                </h3>
                <div className="flex items-center gap-1 text-xs text-amber-500">
                  <span>★★★★★</span>
                  <span className="text-gray-400 text-[10px]">(148 reviews)</span>
                </div>

                <div className="flex items-baseline gap-2 pt-1">
                  <span className="text-xl font-black text-[#0052CC]">₦75,000</span>
                  <span className="text-xs text-gray-400 line-through">₦120,000</span>
                </div>

                {/* Stock Progress Bar (Accent / CTA #00AEEF) */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-gray-600 mb-1">
                    <span>Stock: <strong className="text-[#0052CC]">52 Sold</strong></span>
                    <span className="text-[#00AEEF]">8 Units Left</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#00AEEF] h-full rounded-full w-[86%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#ebebeb] flex items-center justify-between">
              <span className="text-[11px] text-gray-500 font-medium">
                ✓ Free Doorstep Delivery &amp; POD
              </span>
              <Link
                href="/grandmaster-pro"
                className="bg-[#00AEEF] hover:bg-[#0098d4] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-colors shadow-sm"
              >
                Order with POD →
              </Link>
            </div>
          </div>

          {/* Deal 2: 4500A Industrial High Capacity */}
          <div className="border border-[#ebebeb] rounded-xl p-6 sm:p-7 bg-[#fafafa] hover:border-[#0052CC] transition-all flex flex-col justify-between group">
            <div className="grid sm:grid-cols-12 gap-5 items-center">
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-44 h-44 bg-white rounded-lg p-3 border border-gray-100 flex items-center justify-center">
                  <span className="absolute top-2 left-2 bg-[#0052CC] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                    -31%
                  </span>
                  <Image
                    src="/images/product-hero.webp"
                    alt="Grandmaster Pro 4500A Industrial Grinder"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>

              <div className="sm:col-span-7 space-y-2">
                <span className="text-[10px] text-[#0052CC] font-bold uppercase tracking-wider">
                  Industrial Double Capacity
                </span>
                <h3 className="font-poppins font-black text-lg text-[#0B1F3A] leading-snug">
                  Grandmaster Pro 4500A Industrial
                </h3>
                <div className="flex items-center gap-1 text-xs text-amber-500">
                  <span>★★★★★</span>
                  <span className="text-gray-400 text-[10px]">(89 reviews)</span>
                </div>

                <div className="flex items-baseline gap-2 pt-1">
                  <span className="text-xl font-black text-[#0052CC]">₦125,000</span>
                  <span className="text-xs text-gray-400 line-through">₦180,000</span>
                </div>

                {/* Stock Progress Bar */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-gray-600 mb-1">
                    <span>Stock: <strong className="text-[#0052CC]">34 Sold</strong></span>
                    <span className="text-[#00AEEF]">6 Units Left</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#0052CC] h-full rounded-full w-[85%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#ebebeb] flex items-center justify-between">
              <span className="text-[11px] text-gray-500 font-medium">
                ✓ Commercial 4.5kg Hopper Capacity
              </span>
              <Link
                href="/grandmaster-pro"
                className="bg-[#0052CC] hover:bg-[#0041a8] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded transition-colors shadow-sm"
              >
                Order 4500A with POD →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
