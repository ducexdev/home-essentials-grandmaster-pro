"use client";

import { VideoEmbed } from "./VideoEmbed";
import { TestimonialCarousel } from "./TestimonialCarousel";

interface Props {
  onOrderClick: () => void;
}

const VIDEO_REVIEWS = [
  {
    videoId: "C_TN5mRjMPI",
    title: "Mrs. Folashade Adeyemi",
    location: "Lekki Phase 1, Lagos",
    role: "Homemaker & Mother of 4",
    state: "Lagos State",
    quote:
      "It handled my dried beans and hard yellow corn in under 90 seconds without any stress. Very fast, no heating up, and cleanup was just with the dry brush!",
    embedTitle: "Happy Customer Review 1 — Grandmaster Pro",
    caption: "Live customer feedback on daily kitchen performance.",
  },
  {
    videoId: "F1C7ofUMfPs",
    title: "Alhaja Fatima Bello",
    location: "Bompai, Kano",
    role: "Home Spice Specialist",
    state: "Kano State",
    quote:
      "No more sending my housemaid to the market mill to grind pepper and spices. Now I do everything right inside my kitchen with total peace of mind and hygiene.",
    embedTitle: "Happy Customer Review 2 — Grandmaster Pro",
    caption: "Customer demonstrating speed and ease of use.",
  },
  {
    videoId: "LIBhHFgDY6c",
    title: "Chef Emeka Okafor",
    location: "GRA Phase 2, Port Harcourt",
    role: "Catering Business Owner",
    state: "Rivers State",
    quote:
      "The stainless steel is thick and genuine. The blades crush tough dried yam slices and crayfish to smooth flour. Truly industrial grade as advertised.",
    embedTitle: "Happy Customer Review 3 — Grandmaster Pro",
    caption: "Reviewing heavy-duty construction and motor strength.",
  },
];

export function CustomerReviews({ onOrderClick }: Props) {
  return (
    <section
      id="reviews"
      className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-gray-100"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 bg-[#0052CC]/10 text-[#0052CC] font-black text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <span className="text-amber-500">★★★★★</span>
            <span>Real Nigerian Customers • Unfiltered Proof</span>
          </div>
          <h2
            id="reviews-heading"
            className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] mb-4 leading-tight"
          >
            Loved by Over{" "}
            <span className="text-[#0052CC]">3,400+</span>{" "}
            Nigerian Homes &amp; Caterers
          </h2>
          <p className="text-[#344054] text-base sm:text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — read unfiltered WhatsApp chat feedback from real buyers across Nigeria, then watch live kitchen demonstrations below.
          </p>
        </div>

        {/* Proof Count Stats Row */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-12 reveal-on-scroll">
          {[
            { num: "3,400+", label: "Happy Buyers" },
            { num: "36", label: "States Served" },
            { num: "★ 4.9", label: "Avg. Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 rounded-2xl bg-white border-2 border-[#E8F0FF] shadow-sm">
              <p className="font-poppins font-black text-2xl text-[#0052CC]">{s.num}</p>
              <p className="text-[#344054] text-xs font-semibold mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 3-Column Sliding WhatsApp Testimonial Carousel */}
        <div className="reveal-on-scroll mb-16">
          <TestimonialCarousel />
        </div>

        {/* Video Review Cards Grid */}
        <div className="mb-4 reveal-on-scroll">
          <p className="text-center text-xs font-black uppercase tracking-wider text-[#0B1F3A]/50 mb-8">
            🎬 Watch Real Buyers Demonstrate The Machine In Their Own Kitchen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {VIDEO_REVIEWS.map((r) => (
            <div
              key={r.videoId}
              className="reveal-on-scroll bg-white rounded-3xl border border-gray-200 shadow-sm flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top reviewer info */}
              <div className="p-5 pb-3">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-amber-500 text-sm tracking-wider font-black">★★★★★</span>
                  <span className="text-[#0052CC] text-[11px] font-black bg-[#0052CC]/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span>✓</span>
                    <span>{r.state}</span>
                  </span>
                </div>

                <h3 className="font-poppins font-black text-[#0B1F3A] text-base mb-0.5">{r.title}</h3>
                <p className="text-gray-500 text-xs font-medium mb-3">
                  {r.location} • {r.role}
                </p>

                <blockquote className="text-[#344054] text-xs leading-relaxed bg-[#F8FAFC] p-3.5 rounded-2xl border border-gray-100 italic">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
              </div>

              {/* Video — always cleanly below text, never overlapping */}
              <div className="px-5 pb-5 mt-auto">
                <VideoEmbed
                  videoId={r.videoId}
                  title={r.embedTitle}
                  caption={r.caption}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="reveal-on-scroll text-center bg-gradient-to-br from-[#0B1F3A] via-[#0052CC] to-[#0B1F3A] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-blue-400/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#00AEEF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#00AEEF]/20 text-[#00AEEF] text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-[#00AEEF]/30">
              <span>🛡️ 100% Risk-Free — Pay Only After Doorstep Inspection</span>
            </div>

            <h3 className="font-poppins font-black text-2xl sm:text-3xl lg:text-4xl text-white mb-3 leading-tight">
              Ready to Never Visit a Dirty<br className="hidden sm:block" /> Market Mill Again?
            </h3>

            <p className="text-white/75 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Join 3,400+ Nigerian families. Order your Grandmaster Pro today with nationwide delivery and pay only when you&apos;ve personally inspected the machine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <button
                onClick={onOrderClick}
                className="flex-1 min-h-[54px] flex items-center justify-center gap-2 bg-[#00AEEF] hover:bg-[#0098d4] text-[#061325] font-black text-base px-8 py-4 rounded-2xl transition-all shadow-xl shadow-cyan-500/25 active:scale-95"
              >
                Claim Your Machine (Pay on Delivery) →
              </button>
            </div>

            {/* Micro reassurance tags */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {["✓ No Upfront Deposit", "✓ All 36 States + FCT", "✓ 1-Year Warranty", "✓ Free Gifts Included"].map((tag) => (
                <span key={tag} className="text-white/60 text-xs font-semibold">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
