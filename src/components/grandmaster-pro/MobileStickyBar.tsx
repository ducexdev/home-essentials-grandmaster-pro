"use client";

interface Props {
  selectedVariantName?: string;
  selectedVariantPrice?: string;
  onOrderClick: () => void;
  whatsappUrl: string;
}

export function MobileStickyBar({
  selectedVariantName,
  selectedVariantPrice,
  onOrderClick,
  whatsappUrl,
}: Props) {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 mobile-sticky-bar"
      role="complementary"
      aria-label="Quick order actions"
    >
      {/* Top micro-bar: Free Gifts + POD assurance */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-[#0B1F3A] border-t border-[#00AEEF]/30">
        <span className="text-[10px] font-extrabold text-[#00AEEF] flex items-center gap-1">
          <span className="animate-bounce inline-block">🎁</span>
          Free: Blade + Sieve + Brush Included
        </span>
        <span className="text-emerald-400 text-[10px] font-black flex items-center gap-0.5">
          <span>✓</span> Pay On Delivery
        </span>
      </div>

      {/* Main action row */}
      <div className="flex gap-2 px-3 py-2.5 bg-[#061325] border-t border-white/10">
        {/* Selected package info pill */}
        {selectedVariantName && selectedVariantPrice && (
          <div className="hidden xs:flex flex-col justify-center flex-shrink-0 min-w-[70px] bg-white/5 border border-white/10 rounded-xl px-2.5 py-1">
            <p className="text-[9px] font-semibold text-white/50 leading-none truncate">{selectedVariantName}</p>
            <p className="text-xs font-black text-[#00AEEF] leading-tight">{selectedVariantPrice}</p>
          </div>
        )}

        {/* Primary CTA */}
        <button
          onClick={onOrderClick}
          className="flex-1 flex items-center justify-center gap-2 bg-[#00AEEF] hover:bg-[#0098d4] text-[#061325] font-black text-sm py-3.5 rounded-2xl transition-all shadow-lg shadow-cyan-500/25 active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M20 5H4l1.68 8.39a2 2 0 0 0 2 1.61h8.64a2 2 0 0 0 2-1.61L20 5z"/>
            <path d="M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
          Order Now — Pay On Delivery
        </button>

        {/* WhatsApp button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex flex-col items-center justify-center gap-0.5 bg-[#25D366] hover:bg-[#1da851] text-white font-black text-[10px] px-3.5 py-2 rounded-2xl transition-all shadow-md shadow-green-500/20 active:scale-95"
          aria-label="Order via WhatsApp"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
