"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type CategoryFilter = "all" | "grinders" | "commercial" | "accessories";

interface ProductItem {
  id: string;
  name: string;
  category: string;
  categoryKey: CategoryFilter;
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
  reviewsCount: number;
  image: string;
  badge: string;
  badgeStyle: string;
  specs: string[];
  inStock: boolean;
  isFlagship?: boolean;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "gmp-2500a",
    name: "Grandmaster Pro 2500A Commercial High-Speed Grinder",
    category: "Commercial Grinders",
    categoryKey: "grinders",
    price: "₦75,000",
    originalPrice: "₦120,000",
    discount: "-38%",
    rating: 5,
    reviewsCount: 148,
    image: "/images/hero-grinder-official.png",
    badge: "Bestseller",
    badgeStyle: "bg-[#0052CC] text-white",
    specs: ["100% Pure Copper Coil Motor", "25,000 RPM Super Crushing", "6-Leaf 304 Stainless Blades", "Free Doorstep Courier"],
    inStock: true,
    isFlagship: true,
  },
  {
    id: "gmp-4500a",
    name: "Grandmaster Pro 4500A Industrial Grain & Spice Mill",
    category: "Commercial Grinders",
    categoryKey: "commercial",
    price: "₦125,000",
    originalPrice: "₦180,000",
    discount: "-31%",
    rating: 5,
    reviewsCount: 89,
    image: "/images/product-hero.webp",
    badge: "Heavy Duty",
    badgeStyle: "bg-[#0B1F3A] text-white",
    specs: ["4500W Industrial Motor", "4.5kg Hopper Capacity", "Continuous Catering Operation", "Overload Air Switch"],
    inStock: true,
  },
  {
    id: "blade-set-304",
    name: "Official 6-Leaf Hardened 304 Stainless Blade Replacement Set",
    category: "Spare Parts & Accessories",
    categoryKey: "accessories",
    price: "₦12,500",
    originalPrice: "₦18,000",
    discount: "-30%",
    rating: 5,
    reviewsCount: 64,
    image: "/images/gallery-blades.webp",
    badge: "Genuine Spares",
    badgeStyle: "bg-[#0052CC] text-white",
    specs: ["Laser-Sharpened Edge", "Food-Grade Stainless Steel", "Includes Locking Nut & Washers", "Fits 2500A & 4500A"],
    inStock: true,
  },
  {
    id: "copper-motor-core",
    name: "High-Torque 25,000 RPM Pure Copper Stator Assembly",
    category: "Spare Parts & Accessories",
    categoryKey: "accessories",
    price: "₦28,000",
    originalPrice: "₦38,000",
    discount: "-26%",
    rating: 5,
    reviewsCount: 39,
    image: "/images/gallery-motor.jpg",
    badge: "100% Copper",
    badgeStyle: "bg-[#00AEEF] text-white",
    specs: ["Pure Copper Winding", "Internal Carbon Brushes", "Heavy-Duty Bearing", "Thermal Cutoff Protection"],
    inStock: true,
  },
  {
    id: "safety-hopper-lid",
    name: "Stainless Steel Milling Chamber Hopper & Safety Lid Assembly",
    category: "Spare Parts & Accessories",
    categoryKey: "accessories",
    price: "₦19,500",
    originalPrice: "₦26,000",
    discount: "-25%",
    rating: 5,
    reviewsCount: 42,
    image: "/images/gallery-hopper.jpg",
    badge: "Grade 304",
    badgeStyle: "bg-gray-800 text-white",
    specs: ["Heavy Gauge Stainless Chamber", "Quick-Lock Safety Screws", "Airtight Seal Ring", "Zero Residue Polished Interior"],
    inStock: true,
  },
  {
    id: "essential-accessory-kit",
    name: "Complete Maintenance Kit (Carbon Brushes, Sieve & Wrenches)",
    category: "Spare Parts & Accessories",
    categoryKey: "accessories",
    price: "₦8,500",
    originalPrice: "₦12,000",
    discount: "-29%",
    rating: 5,
    reviewsCount: 57,
    image: "/images/gallery-accessories.jpg",
    badge: "Toolkit",
    badgeStyle: "bg-[#0052CC] text-white",
    specs: ["2x Carbon Brushes", "Fine Mesh Sieve", "Chamber Brush & Dusting Cloth", "Tightening Socket Tool"],
    inStock: true,
  },
];

const TABS = [
  { key: "all", label: "All Products" },
  { key: "grinders", label: "Commercial Grinders" },
  { key: "commercial", label: "Industrial Grain Mills" },
  { key: "accessories", label: "Spares & Accessories" },
];

export function StoreProductCatalog() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === "all") return true;
    return p.categoryKey === activeTab;
  });

  return (
    <>
      <section id="featured-products" className="py-14 bg-[#f7f7f7] border-b border-[#ebebeb]">
        <div className="max-w-[1350px] mx-auto px-4">
          {/* Tabs Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-[#ebebeb] gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#0052CC] mb-1 block">
                Official Appliance Catalog
              </span>
              <h2 className="font-poppins font-black text-2xl sm:text-3xl text-[#0B1F3A]">
                Featured Products &amp; Equipment
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1 sm:gap-2 border-b md:border-b-0 border-gray-200">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key as CategoryFilter)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                    activeTab === tab.key
                      ? "border-[#0052CC] text-[#0052CC]"
                      : "border-transparent text-[#767676] hover:text-[#0052CC]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-[#ebebeb] hover:border-[#0052CC] hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Card Visual Top */}
                  <div className="relative p-6 bg-white aspect-square flex items-center justify-center border-b border-[#f0f0f0] overflow-hidden">
                    {/* Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10 flex flex-col gap-1">
                      <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${product.badgeStyle}`}>
                        {product.badge}
                      </span>
                      <span className="bg-[#00AEEF] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-sm">
                        {product.discount}
                      </span>
                    </div>

                    {/* Wishlist Button */}
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                        isWishlisted
                          ? "bg-[#00AEEF] text-white border-[#00AEEF]"
                          : "bg-white text-gray-400 border-gray-200 hover:text-[#00AEEF]"
                      }`}
                      aria-label="Toggle wishlist"
                    >
                      ♥
                    </button>

                    {/* Image with hover zoom */}
                    <div className="relative w-full h-full flex items-center justify-center p-2">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={280}
                        height={280}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Quick View Button Hover Strip */}
                    <div className="absolute inset-x-4 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        type="button"
                        onClick={() => setQuickViewProduct(product)}
                        className="w-full bg-[#0052CC] hover:bg-[#0041a8] text-white text-[11px] font-bold uppercase tracking-wider py-2 rounded shadow transition-colors flex items-center justify-center gap-1.5"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>Quick View Specs</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Details Bottom */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category */}
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#767676] block mb-1">
                        {product.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-poppins font-bold text-sm text-[#242424] group-hover:text-[#0052CC] transition-colors leading-snug line-clamp-2 mb-2">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 text-xs text-amber-500 mb-2">
                        <span>★★★★★</span>
                        <span className="text-gray-400 text-[10px]">({product.reviewsCount} reviews)</span>
                      </div>

                      {/* Specs bullets preview */}
                      <ul className="text-[11px] text-[#767676] space-y-1 mb-3">
                        {product.specs.slice(0, 2).map((spec, i) => (
                          <li key={i} className="flex items-center gap-1.5 truncate">
                            <span className="text-[#00AEEF]">✓</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and Order Button (Accent / CTA Color #00AEEF) */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                      <div>
                        <span className="block text-base font-black text-[#0052CC]">
                          {product.price}
                        </span>
                        <span className="block text-[11px] text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      </div>

                      <Link
                        href="/grandmaster-pro"
                        className="bg-[#00AEEF] hover:bg-[#0098d4] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-2.5 rounded transition-colors shadow-sm"
                      >
                        Order (POD) →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 transition-opacity"
            onClick={() => setQuickViewProduct(null)}
          />

          <div className="min-h-full flex items-center justify-center p-4">
            <div className="relative bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#ebebeb] z-10">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 font-bold text-lg"
              >
                ✕
              </button>

              <div className="grid sm:grid-cols-2 gap-6 items-center">
                {/* Product Image */}
                <div className="bg-[#fafafa] rounded-xl p-4 border border-gray-100 flex items-center justify-center aspect-square">
                  <Image
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    width={320}
                    height={320}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0052CC]">
                    {quickViewProduct.category}
                  </span>
                  <h3 className="font-poppins font-black text-lg text-[#0B1F3A] leading-snug">
                    {quickViewProduct.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-amber-500">
                    <span>★★★★★</span>
                    <span className="text-gray-500 text-[11px]">({quickViewProduct.reviewsCount} Customer Reviews)</span>
                  </div>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-2xl font-black text-[#0052CC]">
                      {quickViewProduct.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {quickViewProduct.originalPrice}
                    </span>
                    <span className="bg-[#00AEEF] text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm">
                      {quickViewProduct.discount}
                    </span>
                  </div>

                  {/* Stock status */}
                  <div className="flex items-center gap-2 text-xs text-sky-800 font-semibold bg-[#e5f7fd] p-2 rounded">
                    <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
                    <span>In Stock &bull; Ready for Daily Interstate Dispatch</span>
                  </div>

                  {/* Specs */}
                  <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs text-[#242424]">
                    {quickViewProduct.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[#00AEEF]">✓</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-3 flex flex-col gap-2">
                    <Link
                      href="/grandmaster-pro"
                      onClick={() => setQuickViewProduct(null)}
                      className="block w-full bg-[#00AEEF] hover:bg-[#0098d4] text-white text-center py-3 rounded font-black text-xs uppercase tracking-wider transition-colors shadow-lg shadow-cyan-500/20"
                    >
                      Proceed to Order (Pay on Delivery) →
                    </Link>
                    <a
                      href={`https://wa.me/2347045787045?text=Hello%20Home%20Essentials%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(
                        quickViewProduct.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#25D366] hover:bg-[#1da851] text-white text-center py-2.5 rounded font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      💬 Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
