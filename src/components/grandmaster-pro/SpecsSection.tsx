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
      className="py-20 bg-white"
      aria-labelledby="specs-heading"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 bg-[#0052CC]/10 text-[#0052CC] font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            <span>🛡️ Complete Technical Blueprint & Logistics Proof</span>
          </div>
          <h2 id="specs-heading" className="font-poppins text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-4">
            Industrial Engineering Specifications
          </h2>
          <p className="text-[#344054] text-lg max-w-xl mx-auto">
            Built to commercial pulverizer standards with 100% pure copper motor and food-grade 304 stainless steel.
          </p>
        </div>

        {/* Specs Table */}
        <div className="reveal-on-scroll bg-[#F4F6F8] rounded-2xl overflow-hidden border border-gray-200 mb-10 shadow-sm">
          <table className="w-full text-sm" aria-label="Product specifications">
            <tbody>
              {getSpecRows().map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
                >
                  <th
                    scope="row"
                    className="text-left font-semibold text-[#0B1F3A] px-6 py-4 w-1/3 border-r border-gray-100"
                  >
                    {row.label}
                  </th>
                  <td className="text-[#344054] font-medium px-6 py-4">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nationwide Orders on Transit Video & Evidence */}
        <div className="reveal-on-scroll bg-[#0B1F3A] rounded-3xl p-6 sm:p-10 border border-white/10 text-white mb-12 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] mb-1 block">
              Active Orders In Transit Across Nigeria
            </span>
            <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white">
              Daily Shipments Dispatched to Different States
            </h3>
            <p className="text-white/70 text-sm mt-1 max-w-xl mx-auto">
              We package and ship daily via direct interstate waybills to customers in Lagos, Abuja, Port Harcourt, Kano, Ibadan, Enugu, and all 36 states.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
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

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-2 text-white/80">
                <p className="font-bold text-white text-sm flex items-center gap-1.5">
                  <span className="text-[#00AEEF]">🚚</span> Direct Waybill Tracking
                </p>
                <p>Every single dispatch is assigned a unique waybill tracking slip and courier direct phone contact.</p>
                <p className="text-[#00AEEF] font-bold">100% Pay On Delivery: Open and inspect your box before paying!</p>
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
