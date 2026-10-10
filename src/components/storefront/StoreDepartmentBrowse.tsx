"use client";

import Link from "next/link";
import Image from "next/image";

export function StoreDepartmentBrowse() {
  return (
    <section id="categories" className="py-14 bg-white border-b border-[#ebebeb]">
      <div className="max-w-[1350px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#0052CC] mb-1 block">
            Department Browse
          </span>
          <h2 className="font-poppins font-black text-2xl sm:text-3xl text-[#0B1F3A]">
            Shop by Appliance Category
          </h2>
          <p className="text-xs sm:text-sm text-[#767676] mt-1 max-w-xl mx-auto">
            From everyday family meal preparation to heavy-duty market operations and commercial food processing.
          </p>
        </div>

        {/* 4 Category Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEPARTMENTS.map((dept) => (
            <Link
              key={dept.title}
              href={dept.link}
              className="group bg-[#fafafa] hover:bg-white rounded-xl p-5 border border-[#ebebeb] hover:border-[#0052CC] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] rounded-lg bg-white border border-gray-100 overflow-hidden mb-4 p-3 flex items-center justify-center">
                <Image
                  src={dept.image}
                  alt={dept.title}
                  width={280}
                  height={220}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 right-2.5 bg-[#0052CC] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-sm">
                  {dept.tag}
                </span>
              </div>

              <div>
                <h3 className="font-poppins font-black text-base text-[#242424] group-hover:text-[#0052CC] transition-colors mb-1">
                  {dept.title}
                </h3>
                <p className="text-xs text-[#767676] leading-relaxed mb-3">
                  {dept.description}
                </p>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore Series</span>
                  <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const DEPARTMENTS = [
  {
    title: "Commercial Grinders",
    tag: "High Torque",
    image: "/images/hero-grinder-official.png",
    description: "High-speed multi-function stainless grain and pepper grinders for domestic and commercial kitchens.",
    link: "/grandmaster-pro",
  },
  {
    title: "Industrial Grain Mills",
    tag: "Double Capacity",
    image: "/images/product-hero.webp",
    description: "Heavy-duty electric continuous mills for corn flour, dried yam chips, millet, and tiger nuts.",
    link: "/grandmaster-pro#specs",
  },
  {
    title: "Hardened 304 Blades",
    tag: "Spare Parts",
    image: "/images/gallery-blades.webp",
    description: "Laser-balanced 6-leaf stainless steel blades designed to pulverize the toughest Nigerian soup ingredients.",
    link: "/grandmaster-pro#gallery",
  },
  {
    title: "Copper Stator Motors",
    tag: "25,000 RPM",
    image: "/images/gallery-motor.jpg",
    description: "High-efficiency 100% pure copper coil motor cores with thermal fuse and overload protection.",
    link: "/grandmaster-pro#benefits",
  },
];
