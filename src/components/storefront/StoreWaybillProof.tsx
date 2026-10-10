"use client";

import Image from "next/image";
import { VideoEmbed } from "../grandmaster-pro/VideoEmbed";

export function StoreWaybillProof() {
  return (
    <section id="waybills" className="py-14 bg-white border-b border-[#ebebeb]">
      <div className="max-w-[1350px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#0052CC] mb-1 block">
            Verified Logistics
          </span>
          <h2 className="font-poppins font-black text-2xl sm:text-3xl text-[#0B1F3A]">
            Interstate Waybills &amp; Real Delivery Evidence
          </h2>
          <p className="text-xs sm:text-sm text-[#767676] mt-1 max-w-xl mx-auto">
            See how customer orders are boxed, loaded, and dispatched daily to all 36 states across Nigeria.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#fafafa] rounded-xl p-6 sm:p-9 border border-[#ebebeb]">
          {/* Video of orders in transit */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00AEEF]" />
              <h3 className="font-poppins font-black text-base sm:text-lg text-[#0052CC]">
                Customer Packages On Transit Across States
              </h3>
            </div>
            <VideoEmbed
              videoId="UN3biGYPDHM"
              title="Customer Orders on Transit Across Different States"
              caption="Live warehouse and courier transit evidence showing boxed machines dispatched nationwide."
            />
          </div>

          {/* Waybill Record Photo & Steps */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-[#ebebeb] aspect-[16/10] shadow-sm">
              <Image
                src="/images/dispatch-waybills.jpg"
                alt="Active Waybill Dispatch Receipts"
                width={710}
                height={380}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2.5 left-2.5 bg-[#0052CC]/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                Daily Interstate Shipments
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-[#242424]">
              <div className="p-3 bg-white rounded-lg border border-[#ebebeb] flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-[#f0f4fc] text-[#0052CC] font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-[#0052CC] text-xs uppercase tracking-wide">Waybill Dispatch Call</h4>
                  <p className="text-[#767676] text-[11px] mt-0.5">As soon as your order is packaged, you receive your courier waybill tracking number via SMS and WhatsApp.</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-[#ebebeb] flex items-start gap-3">
                <span className="w-6 h-6 rounded bg-[#e5f7fd] text-[#00AEEF] font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-[#0052CC] text-xs uppercase tracking-wide">Doorstep Delivery &amp; Inspection</h4>
                  <p className="text-[#767676] text-[11px] mt-0.5">The dispatch driver calls you for delivery. You open the carton, verify all accessories, and pay on the spot.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
