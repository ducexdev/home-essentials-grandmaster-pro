"use client";

import Image from "next/image";
import { VideoEmbed } from "./VideoEmbed";

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="py-16 sm:py-20 bg-[#061325] text-white border-b border-white/10"
      aria-labelledby="usecases-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-block text-[#00AEEF] font-black text-xs uppercase tracking-widest mb-2 bg-[#00AEEF]/10 border border-[#00AEEF]/30 px-3.5 py-1 rounded-full">
            UNMATCHED VERSATILITY
          </span>
          <h2 id="usecases-heading" className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
            Crushes Tough Nigerian Food Items In Under 60 Seconds
          </h2>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            From rock-hard grains and dried yam chips to oily nuts, bitter kola, and tough spices — built for real Nigerian home and catering demands.
          </p>
        </div>

        {/* Visual Callout: Food Items It Can Grind */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-6 sm:p-10 border border-white/15 mb-16 shadow-2xl backdrop-blur-md">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-square max-w-md mx-auto w-full p-2">
              <Image
                src="/images/food-items-grind.jpg"
                alt="Food items this German Grinder Machine can grind: corn, millet, wheat, pepper, beans, herbs, nuts"
                width={500}
                height={500}
                className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#00AEEF] font-black text-xs uppercase tracking-wider block bg-[#00AEEF]/15 px-3 py-1 rounded-full border border-[#00AEEF]/30 w-fit">
                DRY &amp; COMMERCIAL-GRADE MILLING
              </span>
              <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white">
                What Can This German Grinder Machine Pulverize?
              </h3>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
                Engineered with high-speed Japanese-style rotary cutting blades and a pure copper core that pulverizes fibrous, oily, and rock-hard ingredients into silky-fine powders without leaving coarse grits.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-bold text-white pt-2">
                {[
                  "Dry Pepper & Egusi",
                  "Dried Yam Chips (Elubo)",
                  "Beans for Akara & Moi-Moi",
                  "Corn, Maize & Ogi Grain",
                  "Tigernuts (Kunun Aya)",
                  "Bitter Kola & Hard Roots",
                  "Suya Spices & Cloves",
                  "Scent Leaves & Herbs",
                  "Coffee Beans & Hard Seeds",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm hover:border-[#00AEEF]/50 transition-colors">
                    <span className="text-[#00AEEF] font-black text-sm">✓</span>
                    <span className="leading-tight text-white/95">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Crushing Video Demonstrations */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#00AEEF] mb-1.5 block bg-[#00AEEF]/10 px-3 py-1 rounded-full border border-[#00AEEF]/30 w-fit mx-auto">
              REAL CRUSHING EVIDENCE
            </span>
            <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white">
              Watch It Crush Hard Ingredients in Seconds
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-4 sm:p-6 rounded-3xl border border-white/15 shadow-xl backdrop-blur-md">
              <h4 className="font-poppins font-bold text-sm sm:text-base text-white mb-3.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
                <span>Demo 1: Tough Grains, Yam Chips &amp; Dried Spices</span>
              </h4>
              <VideoEmbed
                videoId="lSExZP7rVIM"
                title="How it crushes food items in minutes — Video Demo 1"
                caption="Watch dry ingredients pulverized into ultra-fine powder in real-time."
                dark={true}
              />
            </div>

            <div className="bg-white/5 p-4 sm:p-6 rounded-3xl border border-white/15 shadow-xl backdrop-blur-md">
              <h4 className="font-poppins font-bold text-sm sm:text-base text-white mb-3.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0052CC] animate-pulse" />
                <span>Demo 2: Continuous High-Speed Rotary Crushing</span>
              </h4>
              <VideoEmbed
                videoId="MYvxCB89O2U"
                title="High-speed continuous grinding action — Video Demo 2"
                caption="Smooth motor sound and rapid ingredient processing without jamming."
                dark={true}
              />
            </div>
          </div>
        </div>

        {/* Household vs Catering Use */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Home Users */}
          <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/15 hover:border-[#0052CC] transition-colors flex flex-col justify-between backdrop-blur-sm shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#0052CC] flex items-center justify-center mb-6 text-white text-2xl font-black shadow-lg">
                🏠
              </div>
              <h3 className="font-poppins font-black text-white text-xl mb-2">Everyday Nigerian Household Use</h3>
              <p className="text-white/80 text-xs sm:text-sm mb-5 leading-relaxed">
                Take complete control over your family&apos;s diet. Prepare fresh spices, unadulterated bean flours, and clean baby foods on your own schedule without stepping outside your home.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-white/90">
                {[
                  "Fresh pepper & egusi soup prep in 45 seconds",
                  "Smooth bean flour for quick weekday akara and moi-moi",
                  "100% clean and hygienic baby cereals & corn pap",
                  "Zero reliance on smelly, diesel-contaminated market machines",
                ].map((use) => (
                  <li key={use} className="flex items-center gap-2.5">
                    <span className="text-[#00AEEF] font-black">✓</span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Users */}
          <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/15 hover:border-[#00AEEF] transition-colors flex flex-col justify-between backdrop-blur-sm shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#00AEEF] flex items-center justify-center mb-6 text-[#061325] text-2xl font-black shadow-lg">
                🍲
              </div>
              <h3 className="font-poppins font-black text-white text-xl mb-2">Catering, Restaurants &amp; Food Vendors</h3>
              <p className="text-white/80 text-xs sm:text-sm mb-5 leading-relaxed">
                An indispensable heavy-duty machine for commercial caterers, buka owners, herbalists, spice vendors, and food packaging businesses requiring uninterrupted daily throughput.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-white/90">
                {[
                  "Continuous batch processing for events and large orders",
                  "Bulk spice blending (suya pepper, curry, thyme, ginger powder)",
                  "Commercial packaging of bean flour, plantain flour & elubo",
                  "Heavy-duty pure copper motor that handles high workload daily",
                ].map((use) => (
                  <li key={use} className="flex items-center gap-2.5">
                    <span className="text-[#00AEEF] font-black">✓</span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
