import type { ProductConfig } from "@/lib/product-config";
import Image from "next/image";
import { VideoEmbed } from "./VideoEmbed";

interface Props {
  product?: ProductConfig;
}

export function SpecsSection({}: Props) {
  return (
    <section
      id="specs"
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="specs-heading"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-14 reveal-on-scroll">
          <span className="inline-block text-[#0052CC] font-black text-xs uppercase tracking-widest mb-2 bg-[#f0f4fc] px-3.5 py-1 rounded-full border border-[#0052CC]/20">
            TECHNICAL BLUEPRINT &amp; LOGISTICS PROOF
          </span>
          <h2 id="specs-heading" className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1F3A] mb-3 sm:mb-4">
            Industrial Engineering Specifications
          </h2>
          <p className="text-[#344054] text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            Built to commercial pulverizer standards with 100% pure copper motor and food-grade 304 stainless steel.
          </p>
        </div>

        {/* Specs Table */}
        <div className="reveal-on-scroll bg-[#F8FAFC] rounded-3xl overflow-hidden border border-gray-200 mb-12 shadow-sm">
          <table className="w-full text-xs sm:text-sm" aria-label="Product specifications">
            <tbody>
              {getSpecRows().map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
                >
                  <th
                    scope="row"
                    className="text-left font-black text-[#0B1F3A] px-5 sm:px-6 py-4 w-2/5 sm:w-1/3 border-r border-gray-100"
                  >
                    {row.label}
                  </th>
                  <td className="text-[#344054] font-medium px-5 sm:px-6 py-4">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nationwide Orders on Transit Video & Evidence */}
        <div className="reveal-on-scroll bg-gradient-to-b from-[#0B1F3A] to-[#061325] rounded-3xl p-6 sm:p-10 border border-white/10 text-white mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center mb-8 relative z-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#00AEEF] mb-1.5 block bg-[#00AEEF]/10 px-3 py-1 rounded-full border border-[#00AEEF]/30 w-fit mx-auto">
              REAL-TIME DISPATCH EVIDENCE
            </span>
            <h3 className="font-poppins font-black text-2xl sm:text-3xl text-white">
              Daily Shipments Dispatched Across All 36 States
            </h3>
            <p className="text-white/80 text-xs sm:text-sm mt-1.5 max-w-xl mx-auto leading-relaxed">
              We package and ship daily via direct interstate waybills to customers in Lagos, Abuja, Port Harcourt, Kano, Ibadan, Enugu, and every state nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Transit Video */}
            <div className="md:col-span-7">
              <VideoEmbed
                videoId="UN3biGYPDHM"
                title="Customer Orders on Transit Across Different States"
                caption="Live evidence of boxed machines being loaded and dispatched to interstate terminals."
                dark={true}
              />
            </div>

            {/* Waybill Picture & Points */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 aspect-[16/10] shadow-md">
                <Image
                  src="/images/dispatch-waybills.jpg"
                  alt="Waybill records of dispatched customer orders across Nigeria"
                  width={710}
                  height={380}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2 text-white/85">
                <p className="font-black text-white text-sm flex items-center gap-1.5">
                  <span className="text-[#00AEEF]">🚚</span> Direct Waybill Tracking
                </p>
                <p className="leading-relaxed">Every dispatch is assigned a unique tracking slip and dedicated delivery phone contact.</p>
                <p className="text-[#00AEEF] font-black">100% Pay On Delivery: Open and inspect your carton before paying!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery & Warranty Policy Cards */}
        <div className="grid md:grid-cols-2 gap-6 reveal-on-scroll">
          <div className="bg-[#0B1F3A] rounded-2xl p-6 border border-white/10">
            <h3 className="font-poppins font-bold text-white text-lg mb-4 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
              Doorstep Delivery Arrangement
            </h3>
            <dl className="space-y-2.5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-white/60">Nationwide Coverage</dt>
                <dd className="text-white font-medium text-right">
                  All 36 States + FCT Abuja
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/60">Delivery Timeline</dt>
                <dd className="text-[#00AEEF] font-semibold text-right">
                  24–48 Hours (Lagos/Abuja/PH) | 2–4 Days (Other States)
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/60">Payment Model</dt>
                <dd className="text-emerald-400 font-bold text-right">
                  Pay on Delivery (Cash or Bank Transfer)
                </dd>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="text-white/60 text-xs">Zero upfront deposit required. Our rider calls before arriving.</p>
              </div>
            </dl>
          </div>

          <div className="bg-gradient-to-br from-[#0052CC] to-[#0B1F3A] rounded-2xl p-6 border border-blue-400/20 shadow-lg">
            <h3 className="font-poppins font-bold text-white text-lg mb-4 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              1-Year Warranty & Guarantee
            </h3>
            <dl className="space-y-2.5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-white/80">Manufacturer Warranty</dt>
                <dd className="text-white font-bold">1 Full Year Official Warranty</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/80">Replacement Policy</dt>
                <dd className="text-[#00AEEF] font-bold">14-Day Immediate Swap Guarantee</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/80">Spare Parts Support</dt>
                <dd className="text-white font-semibold">Genuine Factory Parts Stocked</dd>
              </div>
              <div className="pt-2 border-t border-white/20">
                <p className="text-white/80 text-xs">Direct technical care line on WhatsApp for routine maintenance support.</p>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function getSpecRows() {
  return [
    { label: "Motor Construction", value: "100% Pure Copper Heavy-Duty High-Torque Motor" },
    { label: "Motor Speed", value: "25,000 – 32,000 RPM (Rotations Per Minute)" },
    { label: "Chamber Material", value: "304 Food-Grade Thickened Surgical Stainless Steel (Rust-Free)" },
    { label: "Blade Configuration", value: "6-Leaf Multi-Layer Crushing Blade Assembly" },
    { label: "Available Capacities", value: "400g, 500g, 800g, 1000g (1kg), 2000g (2kg), 3000g (3kg), and 5000g (5kg)" },
    { label: "Voltage & Frequency", value: "220V – 240V / 50Hz (Standard Nigerian Single-Phase Socket)" },
    { label: "Timer Dial", value: "0 to 5 Minutes Precision Mechanical Shutoff Timer" },
    { label: "Safety System", value: "Air-Overload Circuit Breaker with One-Touch Reset Button" },
    { label: "Pouring Mechanism", value: "270° Ergonomic Tilting Swing-Body with Locking Handle" },
    { label: "Free Accessories in Box", value: "Full Machine, Extra 6-Leaf Blade Assembly, 2x Carbon Brushes, Micro Sieve, Soft Dusting Brush, Tamper Bar, Manual" },
  ];
}
