"use client";

import Image from "next/image";
import { VideoEmbed } from "./VideoEmbed";

export function ProductShowcase() {
  return (
    <section
      id="showcase"
      className="py-20 bg-white border-b border-gray-100"
      aria-labelledby="showcase-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-[#0052CC] font-black text-xs uppercase tracking-widest mb-2 bg-[#f0f4fc] px-3.5 py-1 rounded-full border border-[#0052CC]/20">
            CINEMATIC SHOWCASE
          </span>
          <h2 id="showcase-heading" className="font-poppins text-3xl lg:text-4xl font-black text-[#0B1F3A] mb-4">
            Engineered with Industrial Precision &amp; Power
          </h2>
          <p className="text-[#344054] text-base sm:text-lg max-w-2xl mx-auto">
            Heavy-duty commercial-grade stainless steel construction built for unmatched durability and performance.
          </p>
        </div>

        {/* Gallery grid with real product photography — text brought cleanly below images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#0052CC]"
            >
              {/* Unobstructed Image: zero text covering the image */}
              <div className="relative w-full aspect-[4/3] bg-[#F8FAFC] flex items-center justify-center p-5 overflow-hidden border-b border-gray-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Container: brought cleanly DOWN below the image, highly visible and readable on mobile */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0B1F3A] to-[#061325] text-white">
                <div>
                  <span className="text-[11px] font-black uppercase text-[#00AEEF] tracking-wider block mb-1.5">
                    {item.tag}
                  </span>
                  <h3 className="font-poppins font-black text-base sm:text-lg text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Video Showcase: KITCHEN'S SECRET WEAPON */}
        <div className="bg-gradient-to-b from-[#0B1F3A] to-[#061325] rounded-3xl p-5 sm:p-12 text-center shadow-2xl border border-white/10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block bg-[#00AEEF] text-[#061325] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 sm:mb-4 shadow">
              FEATURED VIDEO DEMONSTRATION
            </span>
            <h3 className="font-poppins font-black text-white text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">
              Kitchen&apos;s Secret Weapon in Action
            </h3>
            <p className="text-white/85 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
              Watch how effortlessly this German Grinder Machine pulverizes and prepares tough ingredients in seconds.
            </p>

            {/* Video Player — video frame is 100% clean and unobstructed, text is below */}
            <div className="max-w-2xl mx-auto">
              <VideoEmbed
                videoId="UU-6hPHN-Kg"
                title="Kitchen's Secret Weapon — German Grinder Machine Demonstration"
                caption="Tap to watch real-time grinding power and quiet commercial-grade motor performance."
                dark={true}
              />
            </div>
          </div>
        </div>

        {/* FREE GIFTS UNBOXING & AFTER-PURCHASE SUPPORT SHOWCASE */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#F8FAFC] to-blue-50/60 p-6 sm:p-10 border-2 border-[#0052CC]/30 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-2 bg-[#0052CC] text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 shadow">
              <span>🎁</span> 100% FREE GIFTS INCLUDED IN BOX
            </span>
            <h3 className="font-poppins font-black text-2xl sm:text-3xl text-[#0B1F3A]">
              We Equip You Completely From Day One
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              You never have to hunt for accessories or pay extra. Every order ships with these 3 essential tools + dedicated support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Gift 1 */}
            <div className="bg-white p-5 rounded-2xl border-2 border-[#00AEEF]/40 shadow-sm hover:border-[#00AEEF] transition-all flex flex-col justify-between">
              <div>
                <span className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 text-[#0052CC] flex items-center justify-center text-2xl mb-3 font-bold">
                  🔪
                </span>
                <span className="text-[10px] font-black uppercase text-[#00AEEF] tracking-wide block">FREE GIFT #1</span>
                <h4 className="font-poppins font-black text-[#0B1F3A] text-base mb-1.5">1 Extra Blade Assembly</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Heavy-duty 6-leaf multi-layer stainless blade set. Keep grinding uninterrupted for years without paying for blade replacements.
                </p>
              </div>
              <span className="mt-4 inline-block text-[11px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded w-fit">
                Worth ₦15,000 — FREE
              </span>
            </div>

            {/* Gift 2 */}
            <div className="bg-white p-5 rounded-2xl border-2 border-[#00AEEF]/40 shadow-sm hover:border-[#00AEEF] transition-all flex flex-col justify-between">
              <div>
                <span className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 text-[#0052CC] flex items-center justify-center text-2xl mb-3 font-bold">
                  🥣
                </span>
                <span className="text-[10px] font-black uppercase text-[#00AEEF] tracking-wide block">FREE GIFT #2</span>
                <h4 className="font-poppins font-black text-[#0B1F3A] text-base mb-1.5">1 Sifting Sieve</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Precision micro-mesh stainless steel sieve. Sift your yam flour, bean flour, or maize powder to flawless, bakery-smooth texture.
                </p>
              </div>
              <span className="mt-4 inline-block text-[11px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded w-fit">
                Worth ₦5,000 — FREE
              </span>
            </div>

            {/* Gift 3 */}
            <div className="bg-white p-5 rounded-2xl border-2 border-[#00AEEF]/40 shadow-sm hover:border-[#00AEEF] transition-all flex flex-col justify-between">
              <div>
                <span className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 text-[#0052CC] flex items-center justify-center text-2xl mb-3 font-bold">
                  🖌️
                </span>
                <span className="text-[10px] font-black uppercase text-[#00AEEF] tracking-wide block">FREE GIFT #3</span>
                <h4 className="font-poppins font-black text-[#0B1F3A] text-base mb-1.5">1 Cleaning Brush</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Specialized long-bristle dry cleaning brush. Clean out fine spice and grain powder cleanly in seconds without touching water.
                </p>
              </div>
              <span className="mt-4 inline-block text-[11px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded w-fit">
                Worth ₦3,500 — FREE
              </span>
            </div>

            {/* Gift 4: After-Purchase Support */}
            <div className="bg-gradient-to-br from-[#0052CC] to-[#0B1F3A] text-white p-5 rounded-2xl border-2 border-[#00AEEF] shadow-md flex flex-col justify-between">
              <div>
                <span className="w-12 h-12 rounded-xl bg-[#00AEEF] text-[#061325] flex items-center justify-center text-2xl mb-3 font-bold shadow">
                  🛡️
                </span>
                <span className="text-[10px] font-black uppercase text-[#00AEEF] tracking-wide block">EXCLUSIVE PRIVILEGE</span>
                <h4 className="font-poppins font-black text-white text-base mb-1.5">After-Purchase Support</h4>
                <p className="text-white/80 text-xs leading-relaxed">
                  Direct WhatsApp & phone engineering support. If you ever have questions on usage, maintenance or spare parts, we are here for you.
                </p>
              </div>
              <span className="mt-4 inline-block text-[11px] font-extrabold text-[#00AEEF] bg-white/10 px-2 py-0.5 rounded w-fit">
                Priceless Peace of Mind
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const GALLERY_ITEMS = [
  {
    tag: "Chamber & Locking System",
    src: "/images/gallery-hopper.jpg",
    title: "Commercial Stainless Steel Chamber",
    description: "Deep food-grade chamber with dual secure snap locks and safety induction sensor.",
    width: 1600,
    height: 1600,
  },
  {
    tag: "Multi-Tier Blade Assembly",
    src: "/images/gallery-blades.webp",
    title: "Multi-Tier Grinding Blades",
    description: "Precision-milled stainless steel blades capable of pulverizing coarse dry items into fine flour.",
    width: 800,
    height: 800,
  },
  {
    tag: "Heavy-Duty Copper Motor",
    src: "/images/gallery-motor.jpg",
    title: "Heavy Copper Motor Core",
    description: "High-torque industrial motor winding engineered for long hours of intense grinding without fading.",
    width: 1200,
    height: 1200,
  },
  {
    tag: "Free Gifts Included",
    src: "/images/gallery-accessories.jpg",
    title: "Free Gifts: Extra Blade + Sieve + Brush",
    description: "Includes 1 extra blade, 1 sieve, 1 cleaning brush, and direct after-purchase customer support.",
    width: 1000,
    height: 1000,
  },
];
