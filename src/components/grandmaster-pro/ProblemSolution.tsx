"use client";

import Image from "next/image";

export function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      className="py-20 bg-[#F4F6F8] border-b border-gray-200"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#0052CC] font-black text-xs uppercase tracking-widest mb-2 bg-[#f0f4fc] px-3.5 py-1 rounded-full border border-[#0052CC]/20">
            THE NIGERIAN KITCHEN REALITY
          </span>
          <h2 id="problem-heading" className="font-poppins text-3xl lg:text-4xl font-black text-[#0B1F3A] mb-4">
            Are You Tired of These Grinding Frustrations?
          </h2>
          <p className="text-[#344054] text-base sm:text-lg max-w-2xl mx-auto">
            Traditional food processing in Nigeria shouldn&apos;t cost you hours of stress, unhygienic meals, or burnt-out appliances.
          </p>
        </div>

        {/* Contrast Grid: Agitation vs Transformation */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Column 1: The Old Painful Way */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-red-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-5 font-black text-xl">
                ✕
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-red-500 block mb-1">
                The Painful Market &amp; Cheap Blender Routine
              </span>
              <h3 className="font-poppins font-black text-xl sm:text-2xl text-[#0B1F3A] mb-5">
                What Nigerian Homes Deal With Daily
              </h3>
              <ul className="space-y-3.5">
                {PROBLEMS.map((p) => (
                  <li key={p.title} className="flex items-start gap-3 text-[#344054] text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✕
                    </span>
                    <div>
                      <strong className="text-[#0B1F3A] block">{p.title}</strong>
                      <span className="text-gray-500">{p.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-red-100 text-xs font-bold text-red-600">
              Result: Wasted money, burnt food, bad hygiene, and daily kitchen stress.
            </div>
          </div>

          {/* Column 2: The Grandmaster Pro Transformation */}
          <div className="bg-gradient-to-b from-[#0B1F3A] to-[#061325] rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#00AEEF] text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#00AEEF] text-[#061325] flex items-center justify-center mb-5 font-black text-xl shadow-lg">
                ✓
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#00AEEF] block mb-1">
                The Grandmaster Pro Transformation
              </span>
              <h3 className="font-poppins font-black text-xl sm:text-2xl text-white mb-5">
                Effortless Power Right In Your Kitchen
              </h3>
              <ul className="space-y-3.5">
                {SOLUTIONS.map((s) => (
                  <li key={s.title} className="flex items-start gap-3 text-white/90 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] border border-[#00AEEF]/40 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-white block">{s.title}</strong>
                      <span className="text-white/70">{s.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative z-10 mt-6 pt-4 border-t border-white/10 text-xs font-bold text-[#00AEEF]">
              Result: 100% clean hygienic food, zero market runs, and a machine built to last 5+ years.
            </div>
          </div>
        </div>

        {/* Engineering & Safety Highlight */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200 mb-14">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 aspect-[4/3] sm:aspect-square">
              <Image
                src="/images/safety-features.jpg"
                alt="Safety induction switch and overload protection engineering"
                width={790}
                height={791}
                className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-7">
              <span className="inline-block text-[#0052CC] font-black text-xs uppercase tracking-wider mb-2 bg-[#f0f4fc] px-3 py-1 rounded">
                BUILT-IN PROTECTIVE TECHNOLOGY
              </span>
              <h3 className="font-poppins font-black text-2xl lg:text-3xl text-[#0B1F3A] mb-4">
                Dual Safety Protection &amp; Overload Reset Switch
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-[#344054]">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#F8FAFC] border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-[#0052CC] text-white flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] text-sm mb-1">Safety Induction Snap Switch</h4>
                    <p className="text-gray-600 leading-relaxed">
                      The chamber cover features an induction snap. The safety lock must be tightened before the machine powers on. If the cover is opened while running, it immediately cuts power to safeguard your hands.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#F8FAFC] border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-[#00AEEF] text-[#061325] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] text-sm mb-1">Overload &amp; Overheat Protection</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Equipped with an intelligent thermal circuit breaker. If the machine encounters severe resistance or overheating, it automatically shuts down to prevent motor coil damage. Once cooled, simply press the reset button.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center">
          <p className="text-[#0B1F3A] font-poppins font-black text-2xl lg:text-3xl max-w-3xl mx-auto leading-tight">
            Grandmaster Pro was engineered to eliminate kitchen struggle —
            <span className="text-[#0052CC]"> reliably, every single day.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

const PROBLEMS = [
  {
    title: "Wasting Hours at Noisy Market Mills",
    desc: "Sitting in traffic and waiting in long market queues just to grind dried pepper, corn, or beans.",
  },
  {
    title: "Unhygienic Contaminated Food",
    desc: "Market engines mix previous customer debris, diesel fumes, engine oil, and blade rust into your family's food.",
  },
  {
    title: "Burning Out Domestic Plastic Blenders",
    desc: "Buying 2 to 3 cheap blenders every year whose plastic gears strip and motors smoke on tough grains.",
  },
  {
    title: "Lumpy Flours & Coarse Meals",
    desc: "Having to sieve your bean flour, yam flour (elubo), or corn meal multiple times because your blender can't pulverize.",
  },
];

const SOLUTIONS = [
  {
    title: "100% Home Hygiene & Clean Eating",
    desc: "Grind your food right inside your private kitchen with food-grade 304 stainless steel and zero dirt.",
  },
  {
    title: "25,000 RPM Super-Crushing Power",
    desc: "Industrial speed turns hard dried corn, yam chips, and bitter kola into micro-powder in under 60 seconds.",
  },
  {
    title: "100% Pure Copper Motor Winding",
    desc: "Engineered with heavy copper torque that runs for years without burning out or losing grinding speed.",
  },
  {
    title: "Zero Travel & Total Convenience",
    desc: "Grind small batches or commercial quantities anytime, day or night, without stepping out of your compound.",
  },
];
