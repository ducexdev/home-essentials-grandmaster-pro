"use client";

import Image from "next/image";

export function KeyBenefits() {
  return (
    <section
      id="benefits"
      className="py-20 bg-white border-b border-gray-100"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#0052CC] font-black text-xs uppercase tracking-widest mb-2 bg-[#f0f4fc] px-3.5 py-1 rounded-full border border-[#0052CC]/20">
            ENGINEERING EXCELLENCE
          </span>
          <h2 id="benefits-heading" className="font-poppins text-3xl lg:text-4xl font-black text-[#0B1F3A] mb-4">
            Why Grandmaster Pro Outlasts Ordinary Blenders
          </h2>
          <p className="text-[#344054] text-base sm:text-lg max-w-2xl mx-auto">
            Every component is purpose-built with commercial-grade specifications to effortlessly handle the hardest Nigerian food items.
          </p>
        </div>

        {/* 6 Grid Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#F8FAFC] rounded-3xl p-7 border border-gray-100 hover:border-[#0052CC] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0052CC] text-white flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#00AEEF] group-hover:text-[#061325] transition-all shadow-md">
                  {benefit.icon}
                </div>
                <h3 className="font-poppins font-black text-[#0B1F3A] text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#344054] text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-bold text-[#0052CC] group-hover:text-[#00AEEF] transition-colors">
                <span>✓ Verified Specification</span>
              </div>
            </div>
          ))}
        </div>

        {/* Steel Durability Visual Card */}
        <div className="bg-gradient-to-br from-[#0B1F3A] to-[#061325] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[4/5] max-w-xs mx-auto w-full p-2">
              <Image
                src="/images/product-durability.jpg"
                alt="Made of High-Quality Stainless Steel, Durable & Comfortable"
                width={589}
                height={1000}
                className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-7 space-y-4">
              <span className="text-[#00AEEF] font-black text-xs uppercase tracking-widest block">
                100% FOOD-GRADE CONSTRUCTION
              </span>
              <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white">
                Heavy-Gauge Stainless Steel 304 &bull; Built For Class &amp; Durability
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Unlike common blenders with fragile plastic jugs that crack, stain, and warp with hard grains, Grandmaster Pro features a thick food-grade stainless steel drum that resists extreme impacts, scratches, and food odors.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-white/90 pt-2">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#00AEEF] text-[#061325] flex items-center justify-center font-black text-xs">✓</span>
                  <span>Heavy-duty stainless steel chamber with airtight snap-lock lid</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#00AEEF] text-[#061325] flex items-center justify-center font-black text-xs">✓</span>
                  <span>Reinforced non-slip rubber shock pads for total counter stability</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#00AEEF] text-[#061325] flex items-center justify-center font-black text-xs">✓</span>
                  <span>Seamless polished finish — simple wipe-down cleaning in 30 seconds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  {
    title: "100% Pure Copper Coil Motor",
    description: "Built with high-density copper wire winding that generates immense torque and delivers 25,000 RPM without overheating or losing grinding force.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: "Hardened 6-Leaf 304 Blades",
    description: "Laser-balanced multi-tier blades featuring a crushing blade, horn blade, and powder-stirring blade to pulverize grains evenly to powder.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: "Swing-Type 270° Tilt Pouring",
    description: "Designed with an ergonomic tilt handle so you can easily pour out fine flour, pepper, and ground ingredients without lifting the heavy machine.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
      </svg>
    ),
  },
  {
    title: "Overload Air Circuit Protector",
    description: "Never worry about motor damage. If overloaded, the circuit breaker automatically cuts off power. Just press the red reset button to resume.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "Time-Saving 0-5min Timer Knob",
    description: "Set the grinding timer for 30s to 3 minutes and walk away. The machine automatically shuts off when your flour reaches maximum fineness.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "1-Year Engine Replacement Guarantee",
    description: "Backed by our official 1-year motor guarantee and prompt nationwide customer service with readily available genuine spare parts.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
      </svg>
    ),
  },
];
