"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Props {
  onOrderClick: () => void;
  whatsappUrl: string;
}

export function SiteHeader({ onOrderClick, whatsappUrl }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Psychological Trust & Reassurance Ribbon */}
      <div className="bg-[#0052CC] text-white text-[11px] sm:text-xs font-semibold py-1.5 px-4 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="bg-[#00AEEF] text-[#061325] text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm animate-pulse">
              100% RISK-FREE
            </span>
            <span>
              Payment on Delivery Available Nationwide &bull; Inspect Before Paying!
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-white/90 text-[11px]">
            <a href="tel:+2347045787045" className="hover:underline font-bold">
              📞 0704 578 7045
            </a>
            <span>&bull;</span>
            <span className="text-[#00AEEF] font-bold">Zero Advance Payment</span>
          </div>
        </div>
      </div>

      {/* High-Converting FREE GIFTS Announcement Bar */}
      <div className="bg-gradient-to-r from-[#061325] via-[#0B2545] to-[#061325] border-b border-[#00AEEF]/40 py-2 px-4 text-center text-white shadow-inner">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs">
          <span className="inline-flex items-center gap-1.5 font-black text-[#00AEEF] uppercase tracking-wider bg-[#00AEEF]/20 px-2.5 py-0.5 rounded-full border border-[#00AEEF]/40 animate-pulse">
            <span className="text-sm">🎁</span> FREE GIFTS TODAY:
          </span>
          <span className="font-extrabold flex items-center gap-1 text-white">
            <span className="text-[#00AEEF]">★</span> 1 Extra Blade
          </span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span className="font-extrabold flex items-center gap-1 text-white">
            <span className="text-[#00AEEF]">★</span> 1 Sifting Sieve
          </span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span className="font-extrabold flex items-center gap-1 text-white">
            <span className="text-[#00AEEF]">★</span> 1 Grinder Cleaning Brush
          </span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span className="font-extrabold text-[#00AEEF] flex items-center gap-1 bg-[#0052CC]/60 border border-[#00AEEF]/50 px-2.5 py-0.5 rounded-full">
            🛡️ VIP After-Purchase Support
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#061325]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Logo & Slogan */}
          <Link href="/grandmaster-pro" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-white p-0.5 border border-white/20 shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
              <Image
                src="/favicon.png"
                alt="Home Essentials Nigeria"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="block text-white font-poppins font-extrabold text-[11px] sm:text-[12px] tracking-tight leading-tight">
                HOME ESSENTIALS
              </span>
              <span className="block text-[#00AEEF] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-none mt-0.5">
                Grandmaster Pro
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-white/80" aria-label="Main navigation">
            <a href="#problem-solution" className="hover:text-[#00AEEF] transition-colors">Why It&apos;s Better</a>
            <a href="#use-cases" className="hover:text-[#00AEEF] transition-colors">Food Items</a>
            <a href="#how-it-works" className="hover:text-[#00AEEF] transition-colors">Video Demos</a>
            <a href="#reviews" className="hover:text-[#00AEEF] transition-colors">Reviews</a>
            <a href="#pricing" className="hover:text-[#00AEEF] transition-colors text-[#00AEEF]">Discount Offer</a>
          </nav>

          {/* Action Group */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-[#25D366] border border-emerald-500/30 text-xs font-bold px-3.5 py-2.5 rounded-lg transition-all"
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>

            {/* Magnetic CTA Button in Accent #00AEEF */}
            <button
              onClick={onOrderClick}
              className="flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0098d4] text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
            >
              <span>Order With POD</span>
              <span>→</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#061325] border-t border-white/10 px-4 py-5 flex flex-col gap-3 text-xs font-bold uppercase tracking-wider">
            <a href="#problem-solution" className="text-white py-2 border-b border-white/5" onClick={() => setMenuOpen(false)}>Why It&apos;s Better</a>
            <a href="#use-cases" className="text-white py-2 border-b border-white/5" onClick={() => setMenuOpen(false)}>What It Grinds</a>
            <a href="#how-it-works" className="text-white py-2 border-b border-white/5" onClick={() => setMenuOpen(false)}>Video Demonstrations</a>
            <a href="#reviews" className="text-white py-2 border-b border-white/5" onClick={() => setMenuOpen(false)}>Customer Reviews</a>
            <a href="#pricing" className="text-[#00AEEF] py-2 border-b border-white/5" onClick={() => setMenuOpen(false)}>Promo Packages &bull; Save Up to ₦135,000</a>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => { setMenuOpen(false); onOrderClick(); }}
                className="bg-[#00AEEF] text-white font-black py-3 rounded-xl text-center uppercase tracking-wider shadow-md"
              >
                Order with Pay on Delivery →
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-bold py-3 rounded-xl text-center flex items-center justify-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <WhatsAppIcon />
                <span>Chat on WhatsApp (0704 578 7045)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
