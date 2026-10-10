"use client";

import { VideoEmbed } from "./VideoEmbed";
import { TestimonialCarousel } from "./TestimonialCarousel";

interface Props {
  onOrderClick: () => void;
}

export function CustomerReviews({ onOrderClick }: Props) {
  return (
    <section
      id="reviews"
      className="py-20 bg-white border-t border-gray-100"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 bg-[#0052CC]/10 text-[#0052CC] font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <span className="text-amber-500">★★★★★</span>
            <span>Real Nigerian Customers • Unfiltered Customer Proof</span>
          </div>
          <h2 id="reviews-heading" className="font-poppins text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">
            Loved by Over 3,400+ Nigerian Homes &amp; Food Caterers
          </h2>
          <p className="text-[#344054] text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Read unfiltered chat feedback from real buyers across Nigeria and watch live kitchen demonstrations below.
          </p>
        </div>

        {/* 3-Column Sliding WhatsApp Testimonial Proof Carousel (Pause on Hover) */}
        <div className="reveal-on-scroll mb-16">
          <TestimonialCarousel />
        </div>

        {/* 3 Video Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {/* Review 1 */}
          <div className="reveal-on-scroll bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-amber-500 text-sm tracking-wider">★★★★★</span>
                <span className="text-[#0052CC] text-[11px] font-bold bg-[#0052CC]/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span>✓</span> Lagos State
                </span>
              </div>
              <h3 className="font-poppins font-bold text-[#0B1F3A] text-base mb-1">
                Mrs. Folashade Adeyemi
              </h3>
              <p className="text-gray-500 text-xs mb-3 font-medium">Lekki Phase 1, Lagos • Homemaker & Mother</p>
              <p className="text-[#344054] text-xs leading-relaxed mb-4 bg-white p-3 rounded-xl border border-gray-100">
                &ldquo;It handled my dried beans and hard yellow corn in under 90 seconds without any stress. Very fast, no heating up, and cleanup was just with the dry brush!&rdquo;
              </p>
            </div>
            <VideoEmbed
              videoId="C_TN5mRjMPI"
              title="Happy Customer Review 1 — Grandmaster Pro"
              caption="Live customer feedback on daily kitchen performance."
            />
          </div>

          {/* Review 2 */}
          <div className="reveal-on-scroll bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-amber-500 text-sm tracking-wider">★★★★★</span>
                <span className="text-[#0052CC] text-[11px] font-bold bg-[#0052CC]/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span>✓</span> Kano State
                </span>
              </div>
              <h3 className="font-poppins font-bold text-[#0B1F3A] text-base mb-1">
                Alhaja Fatima Bello
              </h3>
              <p className="text-gray-500 text-xs mb-3 font-medium">Bompai, Kano • Home Spice Specialist</p>
              <p className="text-[#344054] text-xs leading-relaxed mb-4 bg-white p-3 rounded-xl border border-gray-100">
                &ldquo;No more sending my housemaid to the market mill to grind pepper and spices. Now I do everything right inside my kitchen with total peace of mind and hygiene.&rdquo;
              </p>
            </div>
            <VideoEmbed
              videoId="F1C7ofUMfPs"
              title="Happy Customer Review 2 — Grandmaster Pro"
              caption="Customer demonstrating speed and ease of use."
            />
          </div>

          {/* Review 3 */}
          <div className="reveal-on-scroll bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-amber-500 text-sm tracking-wider">★★★★★</span>
                <span className="text-[#0052CC] text-[11px] font-bold bg-[#0052CC]/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span>✓</span> Rivers State
                </span>
              </div>
              <h3 className="font-poppins font-bold text-[#0B1F3A] text-base mb-1">
                Chef Emeka Okafor
              </h3>
              <p className="text-gray-500 text-xs mb-3 font-medium">GRA Phase 2, Port Harcourt • Catering Business</p>
              <p className="text-[#344054] text-xs leading-relaxed mb-4 bg-white p-3 rounded-xl border border-gray-100">
                &ldquo;The stainless steel is thick and genuine. The blades crush tough dried yam slices and crayfish to smooth flour. Truly industrial grade as advertised.&rdquo;
              </p>
            </div>
            <VideoEmbed
              videoId="LIBhHFgDY6c"
              title="Happy Customer Review 3 — Grandmaster Pro"
              caption="Reviewing heavy-duty construction and motor strength."
            />
          </div>
        </div>

        {/* Action Callout */}
        <div className="reveal-on-scroll text-center bg-gradient-to-r from-[#0B1F3A] via-[#0052CC] to-[#0B1F3A] rounded-3xl p-8 sm:p-10 text-white max-w-3xl mx-auto shadow-2xl border border-blue-400/20">
          <div className="inline-flex items-center gap-2 bg-[#00AEEF]/20 text-[#00AEEF] text-xs font-bold px-3 py-1 rounded-full mb-3">
            <span>🛡️ 100% Risk-Free Guarantee</span>
          </div>
          <h3 className="font-poppins font-black text-2xl sm:text-3xl lg:text-4xl text-white mb-3 drop-shadow-md">
            Ready to Never Visit a Dirty Market Mill Again?
          </h3>
          <p className="text-white/80 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Order your Grandmaster Pro today with nationwide delivery and pay only when you inspect the machine at your doorstep.
          </p>
          <button
            onClick={onOrderClick}
            className="bg-[#00AEEF] hover:bg-[#0098d4] text-[#061325] font-extrabold text-base px-9 py-4 rounded-xl transition-all shadow-xl shadow-cyan-500/25 active:scale-95"
          >
            Claim Your Machine (Pay on Delivery) →
          </button>
        </div>
      </div>
    </section>
  );
}
