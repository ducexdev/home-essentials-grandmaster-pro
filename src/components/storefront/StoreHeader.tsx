"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface StoreHeaderProps {
  cartCount?: number;
  onCartClick?: () => void;
}

export function StoreHeader({ cartCount = 1, onCartClick }: StoreHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const WHATSAPP_URL =
    "https://wa.me/2347045787045?text=Hello%20Home%20Essentials%2C%20I%20am%20browsing%20your%20store%20and%20would%20like%20to%20order.";

  const handleOpenCart = () => {
    if (onCartClick) {
      onCartClick();
    } else {
      setCartDrawerOpen(true);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-[#e6e6e6] shadow-[0_2px_10px_rgba(0,82,204,0.06)]">
        {/* 1. WoodMart Top Bar */}
        <div className="bg-[#f7f7f7] border-b border-[#e6e6e6] text-[#767676] text-xs py-2 px-4 hidden md:block">
          <div className="max-w-[1350px] mx-auto flex items-center justify-between">
            {/* Top Left: Selectors & Notice */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-medium hover:text-[#0052CC] cursor-pointer">
                <span>Nigeria (NGN ₦)</span>
                <span className="text-[10px]">▾</span>
              </div>
              <span className="text-[#d1d5db]">|</span>
              <div className="flex items-center gap-1.5 font-medium hover:text-[#0052CC] cursor-pointer">
                <span>English</span>
                <span className="text-[10px]">▾</span>
              </div>
              <span className="text-[#d1d5db]">|</span>
              <span className="text-[#0052CC] font-bold">
                ⚡ FREE NATIONWIDE SHIPPING &bull; PAYMENT ON DELIVERY IN ALL 36 STATES
              </span>
            </div>

            {/* Top Right: Socials & Support */}
            <div className="flex items-center gap-4 text-xs">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-bold flex items-center gap-1"
              >
                <span>💬 WhatsApp Hotline: 0704 578 7045</span>
              </a>
              <span className="text-[#d1d5db]">|</span>
              <Link href="/grandmaster-pro#specs" className="hover:text-[#0052CC] transition-colors">
                Order Tracking
              </Link>
              <span className="text-[#d1d5db]">|</span>
              <Link href="/grandmaster-pro" className="hover:text-[#0052CC] transition-colors font-medium">
                Customer Support
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Main Header (Middle Row) */}
        <div className="max-w-[1350px] mx-auto px-4 py-3.5 sm:py-4">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            {/* Mobile Menu Opener & Brand Logo */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#242424] hover:text-[#0052CC] focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
                <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-gray-100 bg-white p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                  <Image
                    src="/favicon.png"
                    alt="Home Essentials Logo"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="block font-poppins font-black text-xl sm:text-2xl text-[#0052CC] leading-tight tracking-tight">
                    HOME ESSENTIALS
                  </span>
                  <span className="block text-[10px] text-[#00AEEF] font-bold uppercase tracking-widest leading-none">
                    Grandmaster Pro &bull; Built to Last
                  </span>
                </div>
              </Link>
            </div>

            {/* Central Search with Category Dropdown */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-4">
              <div className="relative w-full flex items-center border-2 border-[#0052CC] rounded-md overflow-hidden bg-white shadow-sm">
                {/* Category Dropdown */}
                <div className="relative border-r border-[#e6e6e6] bg-[#f7f7f7] px-3 py-2.5 text-xs font-semibold text-[#242424] flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
                  <span>{selectedCategory}</span>
                  <span className="text-[10px] text-[#767676]">▾</span>
                  <select
                    aria-label="Filter search by category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  >
                    <option value="All Categories">All Categories</option>
                    <option value="Heavy-Duty Grinders">Heavy-Duty Grinders</option>
                    <option value="Commercial Grain Mills">Commercial Grain Mills</option>
                    <option value="Stainless Steel Blades">Stainless Steel Blades</option>
                    <option value="Pure Copper Motors">Pure Copper Motors</option>
                  </select>
                </div>

                {/* Search Input */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search heavy duty grinders, blenders, motors, spare blades..."
                  className="w-full pl-4 pr-12 py-2.5 text-xs text-[#242424] placeholder-[#767676] focus:outline-none"
                />

                {/* Search Button (Accent / CTA Color #00AEEF) */}
                <button
                  type="button"
                  className="bg-[#00AEEF] hover:bg-[#0098d4] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Right Tools Elements */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Phone Hotline Info Box (Desktop) */}
              <div className="hidden xl:flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#f0f4fc] border border-[#0052CC]/25 flex items-center justify-center text-[#0052CC]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] text-[#767676] uppercase font-semibold leading-tight">Order Hotline</span>
                  <a href="tel:+2347045787045" className="block text-xs font-bold text-[#0052CC] hover:underline">
                    0704 578 7045
                  </a>
                </div>
              </div>

              {/* Wishlist Button */}
              <Link
                href="/grandmaster-pro"
                className="hidden sm:flex flex-col items-center text-[#242424] hover:text-[#0052CC] relative"
                title="Wishlist"
              >
                <div className="relative">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="absolute -top-1.5 -right-2 bg-[#0052CC] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    0
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold mt-1">Wishlist</span>
              </Link>

              {/* Shopping Cart Button */}
              <button
                type="button"
                onClick={handleOpenCart}
                className="flex items-center gap-2.5 p-2 rounded-md hover:bg-blue-50/50 border border-transparent hover:border-[#0052CC]/20 transition-all text-left"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <div className="relative">
                  <svg className="w-6 h-6 text-[#0052CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1.5 -right-2 bg-[#00AEEF] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                </div>
                <div className="hidden sm:block">
                  <span className="block text-[10px] text-[#767676] uppercase font-semibold leading-tight">My Cart</span>
                  <span className="block text-xs font-black text-[#0052CC]">₦75,000</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Bottom Navigation Strip */}
        <div className="border-t border-[#ebebeb] bg-white">
          <div className="max-w-[1350px] mx-auto px-4 flex items-center justify-between">
            {/* Left: Browse Categories Dropdown (Royal Blue #0052CC) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="bg-[#0052CC] hover:bg-[#0041a8] text-white px-5 py-3 font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>Browse Categories</span>
                <span className="text-[10px]">▾</span>
              </button>

              {/* Category Dropdown Menu */}
              {categoriesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-[#ebebeb] shadow-xl z-50 py-2 divide-y divide-gray-100 text-xs">
                  <Link
                    href="/grandmaster-pro"
                    onClick={() => setCategoriesOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-[#f0f4fc] hover:text-[#0052CC] text-[#242424] font-medium"
                  >
                    <span>⚡ Heavy-Duty Commercial Grinders</span>
                    <span className="text-[10px] text-[#00AEEF]">→</span>
                  </Link>
                  <Link
                    href="/grandmaster-pro#specs"
                    onClick={() => setCategoriesOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-[#f0f4fc] hover:text-[#0052CC] text-[#242424] font-medium"
                  >
                    <span>🌾 High-Speed Grain &amp; Spice Mills</span>
                    <span className="text-[10px] text-[#00AEEF]">→</span>
                  </Link>
                  <Link
                    href="/grandmaster-pro#gallery"
                    onClick={() => setCategoriesOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-[#f0f4fc] hover:text-[#0052CC] text-[#242424] font-medium"
                  >
                    <span>🔪 6-Leaf Hardened 304 Blades</span>
                    <span className="text-[10px] text-[#00AEEF]">→</span>
                  </Link>
                  <Link
                    href="/grandmaster-pro#benefits"
                    onClick={() => setCategoriesOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-[#f0f4fc] hover:text-[#0052CC] text-[#242424] font-medium"
                  >
                    <span>⚡ 100% Pure Copper Coil Motors</span>
                    <span className="text-[10px] text-[#00AEEF]">→</span>
                  </Link>
                  <Link
                    href="#waybills"
                    onClick={() => setCategoriesOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-[#f0f4fc] hover:text-[#0052CC] text-[#242424] font-medium"
                  >
                    <span>📦 Interstate Delivery &amp; Waybill Proof</span>
                    <span className="text-[10px] text-[#00AEEF]">→</span>
                  </Link>
                  <Link
                    href="#reviews"
                    onClick={() => setCategoriesOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-[#f0f4fc] hover:text-[#0052CC] text-[#242424] font-medium"
                  >
                    <span>⭐ Customer Video Reviews</span>
                    <span className="text-[10px] text-[#00AEEF]">→</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Center: Main Horizontal Menu Links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-[#242424]">
              <Link href="/" className="text-[#0052CC] hover:text-[#0052CC] transition-colors py-3 border-b-2 border-[#0052CC]">
                Home
              </Link>
              <Link href="/grandmaster-pro" className="hover:text-[#0052CC] transition-colors py-3 flex items-center gap-1.5">
                <span>Grandmaster Pro 2500A</span>
                <span className="bg-[#00AEEF] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                  HOT
                </span>
              </Link>
              <Link href="#featured-products" className="hover:text-[#0052CC] transition-colors py-3">
                All Products
              </Link>
              <Link href="#flash-deal" className="hover:text-[#0052CC] transition-colors py-3">
                Deal of the Day
              </Link>
              <Link href="#waybills" className="hover:text-[#0052CC] transition-colors py-3">
                Interstate Waybills
              </Link>
              <Link href="#reviews" className="hover:text-[#0052CC] transition-colors py-3">
                Verified Reviews
              </Link>
              <Link
                href="/grandmaster-pro"
                className="hover:text-[#0052CC] transition-colors py-3 text-[#0052CC] flex items-center gap-1.5"
              >
                <span>Direct Sales Page</span>
                <span className="bg-[#00AEEF] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                  OFFER
                </span>
              </Link>
            </nav>

            {/* Right: Limited Special Offer Pill (CTA Cyan / Sky Blue #00AEEF) */}
            <div className="hidden xl:flex items-center gap-2 text-xs font-bold text-[#0052CC]">
              <span className="bg-[#e5f7fd] text-[#00AEEF] px-2 py-0.5 rounded">⚡ FLASH SALE:</span>
              <span className="text-[#242424]">SAVE 38% WITH FREE NATIONWIDE DELIVERY</span>
            </div>
          </div>
        </div>

        {/* 4. Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#ebebeb] px-4 py-4 space-y-3 text-xs font-semibold">
            {/* Mobile Search */}
            <div className="relative mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search heavy duty grinders..."
                className="w-full bg-[#f7f7f7] border border-gray-200 rounded-md px-3 py-2 text-xs text-[#242424] focus:outline-none focus:border-[#0052CC]"
              />
            </div>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#0052CC] border-b border-gray-100"
            >
              Home Storefront
            </Link>
            <Link
              href="/grandmaster-pro"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#242424] hover:text-[#0052CC] border-b border-gray-100 flex items-center justify-between"
            >
              <span>Grandmaster Pro 2500A (Sales Page)</span>
              <span className="bg-[#00AEEF] text-white text-[9px] font-black px-1.5 py-0.5 rounded">HOT</span>
            </Link>
            <Link
              href="#featured-products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#242424] hover:text-[#0052CC] border-b border-gray-100"
            >
              All Product Catalog
            </Link>
            <Link
              href="#flash-deal"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#242424] hover:text-[#0052CC] border-b border-gray-100"
            >
              Deals of the Day
            </Link>
            <Link
              href="#waybills"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#242424] hover:text-[#0052CC] border-b border-gray-100"
            >
              Interstate Waybills &amp; Proof
            </Link>
            <Link
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#242424] hover:text-[#0052CC] border-b border-gray-100"
            >
              Customer Video Reviews
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-[#25D366] font-bold"
            >
              💬 WhatsApp Order Hotline (+234 704 578 7045)
            </a>
          </div>
        )}
      </header>

      {/* 5. Interactive Mini Cart Drawer */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 transition-opacity"
            onClick={() => setCartDrawerOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
              {/* Drawer Header */}
              <div className="p-5 border-b border-[#ebebeb] flex items-center justify-between bg-[#f7f7f7]">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0052CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <h3 className="font-poppins font-bold text-sm text-[#0052CC] uppercase tracking-wider">
                    Shopping Cart ({cartCount})
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setCartDrawerOpen(false)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  ✕
                </button>
              </div>

              {/* Drawer Items */}
              <div className="p-5 flex-1 overflow-y-auto space-y-4">
                <div className="flex gap-4 p-3 rounded-lg border border-[#ebebeb] bg-white">
                  <div className="w-20 h-20 bg-[#fafafa] rounded border border-gray-100 flex items-center justify-center p-1 flex-shrink-0">
                    <Image
                      src="/images/hero-grinder-official.png"
                      alt="Grandmaster Pro 2500A"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-[#0052CC] font-bold uppercase">Commercial Series</span>
                    <h4 className="text-xs font-bold text-[#242424] line-clamp-2">
                      Grandmaster Pro 2500A Heavy-Duty Commercial Grinder
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-1">1 Unit &bull; 100% Copper Motor</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-black text-[#0052CC]">₦75,000</span>
                      <span className="text-[10px] text-gray-400 line-through">₦120,000</span>
                    </div>
                  </div>
                </div>

                {/* Free Delivery & POD Notice */}
                <div className="bg-[#e5f7fd] border border-[#00AEEF]/30 rounded-lg p-3.5 text-xs text-[#0052CC] space-y-1">
                  <p className="font-bold flex items-center gap-1.5 text-[#0052CC]">
                    <span className="text-[#00AEEF]">✓</span>
                    <span>Free Doorstep Delivery Included</span>
                  </p>
                  <p className="text-[11px] text-[#0369a1]">
                    Pay on Delivery available in Lagos, Abuja &amp; all 36 Nigerian states. Inspect before paying!
                  </p>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-5 border-t border-[#ebebeb] bg-[#fafafa] space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>Subtotal:</span>
                  <span className="text-base font-black text-[#0052CC]">₦75,000</span>
                </div>
                <div className="flex items-center justify-between text-xs text-emerald-600 font-semibold">
                  <span>Nationwide Courier:</span>
                  <span className="uppercase font-bold">FREE (₦0.00)</span>
                </div>

                {/* CTA Button: Accent / CTA #00AEEF */}
                <Link
                  href="/grandmaster-pro"
                  onClick={() => setCartDrawerOpen(false)}
                  className="block w-full bg-[#00AEEF] hover:bg-[#0098d4] text-white text-center py-3.5 rounded font-black text-xs uppercase tracking-wider transition-colors shadow-lg shadow-cyan-500/20"
                >
                  Proceed to Checkout (Pay on Delivery) →
                </Link>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] hover:bg-[#1da851] text-white text-center py-2.5 rounded font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Order via WhatsApp Hotline
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
