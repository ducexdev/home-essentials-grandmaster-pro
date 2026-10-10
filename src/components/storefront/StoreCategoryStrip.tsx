"use client";

import Link from "next/link";

interface CategoryItem {
  id: string;
  name: string;
  count: string;
  icon: string;
  href: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "grinders",
    name: "Heavy-Duty Grinders",
    count: "1500W – 4500W Series",
    icon: "⚙️",
    href: "/grandmaster-pro",
  },
  {
    id: "mills",
    name: "Commercial Grain Mills",
    count: "Flour, Spices & Grains",
    icon: "🌾",
    href: "/grandmaster-pro#specs",
  },
  {
    id: "blades",
    name: "6-Leaf 304 Blades",
    count: "Hardened Stainless Steel",
    icon: "🔪",
    href: "/grandmaster-pro#gallery",
  },
  {
    id: "motors",
    name: "Pure Copper Motors",
    count: "25,000 RPM High Torque",
    icon: "⚡",
    href: "/grandmaster-pro#benefits",
  },
  {
    id: "waybills",
    name: "Interstate Waybills",
    count: "Daily 36 State Dispatch",
    icon: "📦",
    href: "#waybills",
  },
  {
    id: "reviews",
    name: "Customer Video Reviews",
    count: "Verified Nigerian Buyers",
    icon: "⭐",
    href: "#reviews",
  },
];

export function StoreCategoryStrip() {
  return (
    <section className="bg-white border-b border-[#ebebeb] py-4">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group flex items-center gap-3 p-3 rounded-lg border border-[#f0f0f0] bg-[#fafafa] hover:bg-white hover:border-[#0052CC] hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-[#eaeaea] flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 group-hover:border-[#00AEEF] transition-transform">
                {cat.icon}
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-[#242424] group-hover:text-[#0052CC] transition-colors truncate">
                  {cat.name}
                </h4>
                <p className="text-[10px] text-[#767676] group-hover:text-[#00AEEF] truncate mt-0.5 transition-colors">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
