import type { ProductConfig } from "@/lib/product-config";
import Link from "next/link";

interface Props {
  product?: ProductConfig;
}

const currentYear = new Date().getFullYear();

export function SiteFooter({}: Props) {
  return (
    <footer className="bg-[#0B1F3A] py-10 pb-24 md:pb-10 border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="max-w-6xl mx-auto px-4">
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p suppressHydrationWarning>
            © {currentYear} Home Essentials. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
            <Link href="/returns" className="hover:text-white/70 transition-colors">
              Returns Policy
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-white/25 text-xs max-w-2xl mx-auto leading-relaxed">
            Home Essentials is an independent retailer. All product images, prices and
            specifications are subject to confirmation. For the most current information,
            please contact us directly before purchasing.
          </p>
        </div>
      </div>
    </footer>
  );
}
