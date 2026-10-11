import { VideoEmbed } from "./VideoEmbed";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="hiw-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-14 reveal-on-scroll">
          <span className="inline-block text-[#0052CC] font-black text-xs uppercase tracking-widest mb-2 bg-[#f0f4fc] px-3.5 py-1 rounded-full border border-[#0052CC]/20">
            EFFORTLESS 4-STEP OPERATION
          </span>
          <h2 id="hiw-heading" className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1F3A] mb-3 sm:mb-4">
            From Raw Hard Seeds to Ultra-Fine Flour in 2 Minutes
          </h2>
          <p className="text-[#344054] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            No sweating with manual mortars. No paying transport to dirty market mills. 
            Enjoy effortless, commercial-grade pulverizing right on your kitchen counter.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 relative mb-16">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#0052CC]/20 via-[#00AEEF] to-[#0052CC]/20" aria-hidden="true" />

          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="reveal-on-scroll relative flex flex-col items-center text-center p-6 rounded-3xl bg-[#F8FAFC] border border-gray-200/80 hover:border-[#0052CC] hover:shadow-lg transition-all"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Step number badge */}
              <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0052CC] to-[#0B1F3A] flex items-center justify-center shadow-lg shadow-blue-500/25 mb-4 group-hover:scale-110 transition-transform">
                <span className="text-[#00AEEF] font-poppins font-black text-lg sm:text-xl">0{i + 1}</span>
              </div>

              {/* Icon */}
              <div className="text-[#0052CC] mb-3">{step.icon}</div>

              {/* Text */}
              <h3 className="font-poppins font-black text-[#0B1F3A] text-base mb-1.5">
                {step.title}
              </h3>
              <p className="text-[#475467] text-xs sm:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Video Demonstrations: How It Works & How to Use It */}
        <div className="reveal-on-scroll bg-gradient-to-b from-[#0B1F3A] to-[#061325] rounded-3xl p-6 sm:p-10 border border-white/10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center mb-8 relative z-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#00AEEF] mb-1.5 block bg-[#00AEEF]/10 px-3 py-1 rounded-full border border-[#00AEEF]/30 w-fit mx-auto">
              LIVE EVIDENCE DEMONSTRATIONS
            </span>
            <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white">
              Watch This German Grinder in Action
            </h3>
            <p className="text-white/80 text-xs sm:text-sm mt-1.5 max-w-xl mx-auto leading-relaxed">
              See the exact unboxing, secure lid locking, fast dial operation, and the smooth flour output.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-white/5 p-4 sm:p-6 rounded-3xl border border-white/10 backdrop-blur-md shadow-xl">
              <h4 className="font-poppins font-bold text-sm sm:text-base text-white mb-3.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-pulse" />
                <span>Complete Machine Walkthrough</span>
              </h4>
              <VideoEmbed
                videoId="DGKwW-0uR3o"
                title="Here's How It Works — German Grinder Machine"
                caption="Full product walkthrough, motor build, and operational overview."
                dark={true}
              />
            </div>

            <div className="bg-white/5 p-4 sm:p-6 rounded-3xl border border-white/10 backdrop-blur-md shadow-xl">
              <h4 className="font-poppins font-bold text-sm sm:text-base text-white mb-3.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0052CC] animate-pulse" />
                <span>Step-by-Step Loading &amp; Grinding</span>
              </h4>
              <VideoEmbed
                videoId="7qt6eIQnZ00"
                title="How to Use It — Step-by-Step Demonstration"
                caption="Loading dry staples, operating the 0-5m timer, and the 270° easy tilt-pour."
                dark={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    title: "1. Load Dry Food Staples",
    description:
      "Pour dried pepper, melon seed (egusi), dried yam slices, beans, or hard corn directly into the food-grade 304 steel chamber.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
  },
  {
    title: "2. Lock Safety Wing-Nuts",
    description:
      "Twist tight the reinforced heavy-duty safety clamps. The airtight silicone ring prevents fine dust or flying particles in your kitchen.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    title: "3. Set 0-5 Min Timer Dial",
    description:
      "Turn the mechanical knob to 1-2 minutes for regular flour or 3 minutes for ultra-fine powder. The 25,000 RPM copper motor engages instantly.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "4. Swing 270° & Pour",
    description:
      "Release the swing lock and tilt the container smoothly into your bowl or basin. Zero sieving needed — smooth, silky powder ready to cook!",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];
