"use client";

export function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      className="py-16 sm:py-20 bg-[#F4F6F8] border-b border-gray-200"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="inline-block text-[#0052CC] font-black text-xs uppercase tracking-widest mb-2 bg-[#f0f4fc] px-3.5 py-1 rounded-full border border-[#0052CC]/20">
            THE NIGERIAN KITCHEN REALITY
          </span>
          <h2 id="problem-heading" className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1F3A] mb-3 leading-tight">
            What Nigerian Homes Deal With Daily
          </h2>
          <p className="text-[#344054] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Traditional food processing shouldn&apos;t cost you hours of market stress, unhygienic meals, or burnt home blenders.
          </p>
        </div>

        {/* Contrast Grid: Agitation vs Transformation */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {/* Column 1: The Old Painful Way */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border-2 border-red-200/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-5 font-black text-xl shadow-sm">
                ✕
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block mb-1">
                The Painful Market &amp; Cheap Blender Routine
              </span>
              <h3 className="font-poppins font-black text-xl sm:text-2xl text-[#0B1F3A] mb-5">
                The Daily Grinding Struggles
              </h3>
              <ul className="space-y-4">
                {PROBLEMS.map((p) => (
                  <li key={p.title} className="flex items-start gap-3.5 text-[#344054] text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✕
                    </span>
                    <div>
                      <strong className="text-[#0B1F3A] block font-bold">{p.title}</strong>
                      <span className="text-gray-600 text-xs sm:text-sm leading-relaxed">{p.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-red-100 text-xs font-bold text-red-600 flex items-center gap-2">
              <span>⚠️</span>
              <span>Result: Wasted money, burnt food, bad hygiene, and daily kitchen stress but here&apos;s something worth considering: GRANDMASTER PRO</span>
            </div>
          </div>

          {/* Column 2: The German Grinder Transformation */}
          <div className="bg-gradient-to-b from-[#0B1F3A] to-[#061325] rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#00AEEF] text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#00AEEF] text-[#061325] flex items-center justify-center mb-5 font-black text-xl shadow-lg">
                ✓
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#00AEEF] block mb-1">
                The German Grinder Transformation
              </span>
              <h3 className="font-poppins font-black text-xl sm:text-2xl text-white mb-5">
                Effortless Power Right In Your Kitchen
              </h3>
              <ul className="space-y-4">
                {SOLUTIONS.map((s) => (
                  <li key={s.title} className="flex items-start gap-3.5 text-white/90 text-xs sm:text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] border border-[#00AEEF]/50 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <div>
                      <strong className="text-white block font-bold">{s.title}</strong>
                      <span className="text-white/80 text-xs sm:text-sm leading-relaxed">{s.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative z-10 mt-6 pt-4 border-t border-white/10 text-xs font-bold text-[#00AEEF] flex items-center gap-2">
              <span>✨</span>
              <span>Result: 100% clean hygienic food, zero market runs, and a machine built to last 10+ years.</span>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center">
          <p className="text-[#0B1F3A] font-poppins font-black text-2xl lg:text-3xl max-w-3xl mx-auto leading-tight">
            This German Grinder Machine was engineered to eliminate kitchen struggle —
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
