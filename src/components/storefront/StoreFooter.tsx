"use client";

import Link from "next/link";
import Image from "next/image";

export function StoreFooter() {
  const WHATSAPP_URL =
    "https://wa.me/2347045787045?text=Hello%20Home%20Essentials%2C%20I%20want%20to%20subscribe%20to%20appliance%20updates.";

  return (
    <footer className="bg-[#f7f7f7] border-t border-[#ebebeb] text-[#767676] pt-14 pb-10">
      <div className="max-w-[1350px] mx-auto px-4">
        {/* Top: Newsletter Strip */}
        <div className="bg-white border border-[#ebebeb] rounded-xl p-6 sm:p-8 mb-12 grid md:grid-cols-12 gap-6 items-center shadow-sm">
          <div className="md:col-span-7">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#00AEEF] mb-1 block">
              VIP Restock &amp; Discount Alerts
            </span>
            <h3 className="font-poppins font-black text-xl sm:text-2xl text-[#0B1F3A]">
              Subscribe for Restock Notifications &amp; Maintenance Guides
            </h3>
            <p className="text-xs text-[#767676] mt-1">
              Be the first to know when new shipments of commercial grinders, replacement blades, and kitchen equipment arrive.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter your phone or WhatsApp..."
              className="bg-[#fafafa] border border-[#e6e6e6] rounded px-3.5 py-2.5 text-xs text-[#242424] placeholder-gray-400 focus:outline-none focus:border-[#0052CC] flex-1"
            />
            <button
              type="button"
              className="bg-[#00AEEF] hover:bg-[#0098d4] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded transition-colors shadow-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* 4-Column Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-xs">
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-gray-200 bg-white p-0.5 shadow-sm">
                <Image
                  src="/favicon.png"
                  alt="Home Essentials Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-poppins font-black text-base text-[#0052CC]">Home Essentials</span>
            </div>
            <p className="text-[#767676] leading-relaxed">
              Nigeria&apos;s premier brand for heavy-duty kitchen appliances, commercial spice grinders, and grain mills.
            </p>
            <p className="text-[#00AEEF] font-bold italic">
              &ldquo;Grandmaster pro.... Built to Last.&rdquo;
            </p>
            <div className="space-y-1 pt-1 text-[#242424] font-medium">
              <p>📞 Phone: 0704 578 7045</p>
              <p>💬 WhatsApp: +234 704 578 7045</p>
              <p>✉️ Email: order@homeessentials.com.ng</p>
            </div>
          </div>

          {/* Col 2: Product Catalog */}
          <div className="space-y-3">
            <h4 className="font-poppins font-bold text-[#0B1F3A] text-xs uppercase tracking-wider">
              Appliance Catalog
            </h4>
            <ul className="space-y-2 text-[#767676]">
              <li>
                <Link href="/grandmaster-pro" className="hover:text-[#0052CC] transition-colors font-medium">
                  Grandmaster Pro 2500A (Bestseller)
                </Link>
              </li>
              <li>
                <Link href="/grandmaster-pro#specs" className="hover:text-[#0052CC] transition-colors">
                  Grandmaster Pro 4500A Industrial
                </Link>
              </li>
              <li>
                <Link href="/grandmaster-pro#gallery" className="hover:text-[#0052CC] transition-colors">
                  Hardened 6-Leaf 304 Blades
                </Link>
              </li>
              <li>
                <Link href="/grandmaster-pro#benefits" className="hover:text-[#0052CC] transition-colors">
                  Pure Copper Motor Stator
                </Link>
              </li>
              <li>
                <Link href="/grandmaster-pro#specs" className="hover:text-[#0052CC] transition-colors">
                  Carbon Brushes &amp; Maintenance Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Service */}
          <div className="space-y-3">
            <h4 className="font-poppins font-bold text-[#0B1F3A] text-xs uppercase tracking-wider">
              Customer Protection
            </h4>
            <ul className="space-y-2 text-[#767676]">
              <li>
                <Link href="/grandmaster-pro" className="hover:text-[#0052CC] transition-colors">
                  Payment on Delivery Terms
                </Link>
              </li>
              <li>
                <Link href="/grandmaster-pro#specs" className="hover:text-[#0052CC] transition-colors">
                  1-Year Full Motor Guarantee
                </Link>
              </li>
              <li>
                <Link href="/grandmaster-pro#specs" className="hover:text-[#0052CC] transition-colors">
                  10-Day Replacement Policy
                </Link>
              </li>
              <li>
                <Link href="#waybills" className="hover:text-[#0052CC] transition-colors">
                  Interstate Waybill Tracking
                </Link>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#0052CC] transition-colors">
                  24/7 WhatsApp Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Interstate Coverage */}
          <div className="space-y-3">
            <h4 className="font-poppins font-bold text-[#0B1F3A] text-xs uppercase tracking-wider">
              Nationwide Delivery Hubs
            </h4>
            <p className="text-[#767676] leading-relaxed">
              Same-day dispatch and doorstep courier coverage across major hubs and all 36 Nigerian states:
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              {["Lagos", "Abuja FCT", "Port Harcourt", "Ibadan", "Kano", "Enugu", "Asaba", "Kaduna", "Benin City"].map((hub) => (
                <span key={hub} className="bg-white border border-[#ebebeb] px-2 py-0.5 rounded text-[10px] text-[#0052CC] font-semibold">
                  {hub}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-[#00AEEF] font-bold pt-1">
              ✓ Doorstep inspection before payment in every state.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#ebebeb] flex flex-col sm:flex-row items-center justify-between text-xs text-[#767676] gap-4">
          <p suppressHydrationWarning className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Home Essentials Nigeria. All rights reserved. &bull; Grandmaster Pro &bull; Built to Last.
          </p>

          <div className="flex items-center gap-4 text-xs font-semibold text-[#0B1F3A]">
            <span className="flex items-center gap-1">
              <span className="text-[#00AEEF]">✓</span> 100% Payment on Delivery
            </span>
            <span className="flex items-center gap-1">
              <span className="text-[#00AEEF]">✓</span> Genuine Copper Motor
            </span>
            <span className="flex items-center gap-1">
              <span className="text-[#00AEEF]">✓</span> Doorstep Inspection
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
