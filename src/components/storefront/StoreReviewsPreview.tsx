"use client";

import Link from "next/link";
import { VideoEmbed } from "../grandmaster-pro/VideoEmbed";

export function StoreReviewsPreview() {
  return (
    <section id="reviews" className="py-14 bg-[#f7f7f7] border-b border-[#ebebeb]">
      <div className="max-w-[1350px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#f0f4fc] border border-[#0052CC]/20 text-[#0052CC] text-xs font-bold px-3 py-1 rounded mb-2">
            <span className="text-amber-500">★★★★★</span>
            <span>Verified Customer Video Feedback</span>
          </div>
          <h2 className="font-poppins font-black text-2xl sm:text-3xl text-[#0B1F3A]">
            Customer Unboxing &amp; Video Reviews
          </h2>
          <p className="text-xs sm:text-sm text-[#767676] mt-1 max-w-xl mx-auto">
            Watch real customers from Lagos, Abuja, Port Harcourt, and beyond testing their Grandmaster Pro machines on everyday Nigerian soup ingredients.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="bg-white rounded-xl p-5 border border-[#ebebeb] shadow-sm flex flex-col justify-between hover:border-[#0052CC] transition-colors">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-amber-500 text-xs">★★★★★</span>
                <span className="text-[#0052CC] text-[9px] font-black uppercase bg-[#f0f4fc] px-2 py-0.5 rounded">
                  Verified Order
                </span>
              </div>
              <h3 className="font-poppins font-bold text-[#0B1F3A] text-xs sm:text-sm mb-1 leading-snug">
                Fast Grinding &amp; Zero Heat Buildup
              </h3>
              <p className="text-[#767676] text-xs leading-relaxed">
                &ldquo;It handled my dried beans and corn effortlessly. The flour was so smooth and fine, exactly what I needed for my catering business.&rdquo;
              </p>
            </div>
            <VideoEmbed
              videoId="C_TN5mRjMPI"
              title="Happy Customer Review 1"
              caption="Live customer test on daily food processing."
            />
          </div>

          {/* Review 2 */}
          <div className="bg-white rounded-xl p-5 border border-[#ebebeb] shadow-sm flex flex-col justify-between hover:border-[#0052CC] transition-colors">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-amber-500 text-xs">★★★★★</span>
                <span className="text-[#0052CC] text-[9px] font-black uppercase bg-[#f0f4fc] px-2 py-0.5 rounded">
                  Verified Order
                </span>
              </div>
              <h3 className="font-poppins font-bold text-[#0B1F3A] text-xs sm:text-sm mb-1 leading-snug">
                Saved Trips to The Market Mill
              </h3>
              <p className="text-[#767676] text-xs leading-relaxed">
                &ldquo;No more going to the market engine mill to grind dry pepper. Everything is done right inside my kitchen in seconds with clean hygienic flour.&rdquo;
              </p>
            </div>
            <VideoEmbed
              videoId="F1C7ofUMfPs"
              title="Happy Customer Review 2"
              caption="Unboxing and testing in Lagos home kitchen."
            />
          </div>

          {/* Review 3 */}
          <div className="bg-white rounded-xl p-5 border border-[#ebebeb] shadow-sm flex flex-col justify-between hover:border-[#0052CC] transition-colors">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-amber-500 text-xs">★★★★★</span>
                <span className="text-[#0052CC] text-[9px] font-black uppercase bg-[#f0f4fc] px-2 py-0.5 rounded">
                  Verified Order
                </span>
              </div>
              <h3 className="font-poppins font-bold text-[#0B1F3A] text-xs sm:text-sm mb-1 leading-snug">
                Heavy Duty &amp; Built Like a Tank
              </h3>
              <p className="text-[#767676] text-xs leading-relaxed">
                &ldquo;The stainless body is solid and the motor has immense torque. The payment on delivery gave me complete peace of mind to inspect before paying.&rdquo;
              </p>
            </div>
            <VideoEmbed
              videoId="LIBhHFgDY6c"
              title="Happy Customer Review 3"
              caption="Hard spice grinding demonstration in Abuja."
            />
          </div>
        </div>

        {/* CTA Bar (Accent / CTA Color #00AEEF) */}
        <div className="mt-8 text-center">
          <Link
            href="/grandmaster-pro"
            className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0098d4] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded transition-colors shadow-lg shadow-cyan-500/20"
          >
            <span>Order Grandmaster Pro with Payment on Delivery</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
