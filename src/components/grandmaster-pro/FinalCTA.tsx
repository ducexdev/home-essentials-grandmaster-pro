import type { ProductConfig } from "@/lib/product-config";
import Image from "next/image";

interface Props {
  product: ProductConfig;
  selectedVariantId: string;
  onOrderClick: (variantId?: string) => void;
  whatsappUrl: string;
}

export function FinalCTA({ product, selectedVariantId, onOrderClick, whatsappUrl }: Props) {
  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId);

  return (
    <section
      id="order"
      className="py-20 bg-gradient-to-br from-[#061325] via-[#0052CC]/90 to-[#061325] relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#00AEEF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Heading */}
        <div className="reveal-on-scroll mb-10">
          <div className="inline-flex items-center gap-2 bg-[#00AEEF]/20 border border-[#00AEEF]/40 text-[#00AEEF] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            <span>⚡ Zero Risk • Pay On Delivery Nationwide</span>
          </div>
          <h2 id="final-cta-heading" className="font-poppins text-3xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Stop Straining With Manual Mortars & Burning Inferior Blenders.<br />
            <span className="text-[#00AEEF]">Get Your Grandmaster Pro Today.</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            Join over 3,400 Nigerian families and caterers who enjoy quick, hygienic pulverizing at home. Order now and pay only when inspected.
          </p>
        </div>

        {/* Product Visual Centerpiece */}
        <div className="reveal-on-scroll flex items-center justify-center gap-4 mb-10">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-white/10 p-2 border border-white/20 shadow-2xl overflow-hidden flex items-center justify-center">
            <Image
              src="/images/hero-grinder-official.png"
              alt="Grandmaster Pro 2500A Official Product"
              width={160}
              height={160}
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <div className="text-left space-y-1.5">
            <div className="inline-flex items-center gap-2 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold px-3 py-1 rounded-full">
              <span>●</span>
              <span>Available for Dispatch</span>
            </div>
            <p className="text-white font-poppins font-bold text-lg sm:text-xl">Grandmaster Pro</p>
            <p className="text-white/70 text-xs">Delivered to your door in all 36 States + FCT</p>
          </div>
        </div>

        {/* Benefits recap */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 reveal-on-scroll">
          {FINAL_BENEFITS.map((b) => (
            <div key={b.label} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-[#00AEEF] mb-2 flex justify-center">{b.icon}</div>
              <p className="text-white text-xs font-semibold">{b.label}</p>
            </div>
          ))}
        </div>

        {/* Price recap */}
        {selectedVariant && selectedVariant.priceKobo > 0 && (
          <div className="mb-6 reveal-on-scroll">
            <p className="text-white/50 text-sm mb-1">
              {selectedVariant.name} — Current Price
            </p>
            <p className="font-poppins font-bold text-white text-4xl">
              {selectedVariant.priceDisplay}
            </p>
          </div>
        )}

        {/* Popping Free Gifts Reminder */}
        <div className="mb-8 p-4 rounded-2xl bg-white/10 border-2 border-[#00AEEF] backdrop-blur-md max-w-xl mx-auto text-left flex items-center gap-3.5 shadow-xl">
          <span className="text-3xl flex-shrink-0 animate-bounce">🎁</span>
          <div>
            <p className="text-white font-poppins font-black text-xs sm:text-sm uppercase tracking-wide">
              FREE GIFTS INCLUDED IN TODAY&apos;S DISPATCH:
            </p>
            <p className="text-[#00AEEF] text-xs font-bold mt-0.5">
              1 Extra Blade + 1 Sieve + 1 Cleaning Brush + Lifetime VIP After-Purchase Support
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-on-scroll">
          <button
            onClick={() => onOrderClick(selectedVariantId)}
            className="flex items-center justify-center gap-2 bg-[#00AEEF] hover:bg-[#0098d4] text-[#061325] font-extrabold text-lg px-10 py-5 rounded-2xl transition-all duration-200 hover:shadow-2xl hover:shadow-cyan-500/30 active:scale-95 animate-pulse-soft"
          >
            Claim Grandmaster Pro (Pay On Delivery) →
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Order
          </a>
        </div>

        <p className="mt-6 text-white/40 text-sm reveal-on-scroll">
          Questions? Email{" "}
          <a href={`mailto:${product.contact.email}`} className="text-white/60 hover:text-white underline transition-colors">
            {product.contact.email}
          </a>
        </p>
      </div>
    </section>
  );
}

const FINAL_BENEFITS = [
  {
    label: "Genuine Product",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    label: "Nationwide Delivery",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
  {
    label: "Customer Support",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/></svg>,
  },
  {
    label: "Easy Ordering",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>,
  },
];
