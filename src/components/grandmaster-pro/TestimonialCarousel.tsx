"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ReviewItem {
  id: number;
  image: string;
  customerName: string;
  location: string;
  verifiedTag: string;
}

const REVIEWS_DATA: ReviewItem[] = [
  { id: 1, image: "/images/reviews/review-1.jpeg", customerName: "Verified Buyer", location: "Lagos State", verifiedTag: "WhatsApp Order Delivered" },
  { id: 2, image: "/images/reviews/review-2.jpeg", customerName: "Verified Buyer", location: "Abuja (FCT)", verifiedTag: "Inspected & Paid on Delivery" },
  { id: 3, image: "/images/reviews/review-3.jpeg", customerName: "Verified Buyer", location: "Port Harcourt, Rivers", verifiedTag: "WhatsApp Proof" },
  { id: 4, image: "/images/reviews/review-4.jpeg", customerName: "Verified Buyer", location: "Ibadan, Oyo", verifiedTag: "Order Confirmed & Received" },
  { id: 5, image: "/images/reviews/review-5.jpeg", customerName: "Verified Buyer", location: "Enugu State", verifiedTag: "Happy Customer Feedback" },
  { id: 6, image: "/images/reviews/review-6.jpeg", customerName: "Verified Buyer", location: "Benin City, Edo", verifiedTag: "Verified Delivery" },
  { id: 7, image: "/images/reviews/review-7.jpeg", customerName: "Verified Buyer", location: "Asaba, Delta", verifiedTag: "Delivered with Free Gifts" },
  { id: 8, image: "/images/reviews/review-8.jpeg", customerName: "Verified Buyer", location: "Kano State", verifiedTag: "WhatsApp Feedback" },
  { id: 9, image: "/images/reviews/review-9.jpeg", customerName: "Verified Buyer", location: "Uyo, Akwa Ibom", verifiedTag: "Inspected at Doorstep" },
  { id: 10, image: "/images/reviews/review-10.jpeg", customerName: "Verified Buyer", location: "Abeokuta, Ogun", verifiedTag: "100% Satisfied" },
  { id: 11, image: "/images/reviews/review-11.jpeg", customerName: "Verified Buyer", location: "Owerri, Imo", verifiedTag: "Smooth Powder Proof" },
  { id: 12, image: "/images/reviews/review-12.jpeg", customerName: "Verified Buyer", location: "Jos, Plateau", verifiedTag: "Fast Grinding Confirmed" },
  { id: 13, image: "/images/reviews/review-13.jpeg", customerName: "Verified Buyer", location: "Warri, Delta", verifiedTag: "Verified Delivery" },
  { id: 14, image: "/images/reviews/review-14.jpeg", customerName: "Verified Buyer", location: "Kaduna State", verifiedTag: "WhatsApp Screenshot" },
  { id: 15, image: "/images/reviews/review-15.jpeg", customerName: "Verified Buyer", location: "Ilorin, Kwara", verifiedTag: "Order Received" },
  { id: 16, image: "/images/reviews/review-16.jpeg", customerName: "Verified Buyer", location: "Calabar, Cross River", verifiedTag: "Happy Homemaker" },
  { id: 17, image: "/images/reviews/review-17.jpeg", customerName: "Verified Buyer", location: "Lekki, Lagos", verifiedTag: "Pay On Delivery Proof" },
  { id: 18, image: "/images/reviews/review-18.jpeg", customerName: "Verified Buyer", location: "Onitsha, Anambra", verifiedTag: "Commercial Caterer" },
  { id: 19, image: "/images/reviews/review-19.jpeg", customerName: "Verified Buyer", location: "Akure, Ondo", verifiedTag: "Delivered & Inspected" },
];

export function TestimonialCarousel() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Duplicate items for seamless continuous infinite marquee
  const displayItems = [...REVIEWS_DATA, ...REVIEWS_DATA];

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 380;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative my-10">
      {/* Header Badge */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 px-2">
        <div className="flex items-center gap-2">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <p className="text-xs font-black uppercase tracking-wider text-[#0B1F3A]">
            Real WhatsApp Customer Testimonies &amp; Delivery Proofs
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
          <span className="hidden sm:inline">Hover over any card to pause • Click to zoom</span>
          <div className="flex items-center gap-1.5 ml-2">
            <button
              onClick={() => handleScroll("left")}
              className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-[#0052CC] hover:text-white flex items-center justify-center transition-all active:scale-95 text-[#0B1F3A]"
              aria-label="Previous testimonials"
            >
              ←
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-[#0052CC] hover:text-white flex items-center justify-center transition-all active:scale-95 text-[#0B1F3A]"
              aria-label="Next testimonials"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Carousel Container */}
      <div
        className="relative overflow-hidden rounded-3xl bg-[#F8FAFC] border border-gray-200/80 p-4 sm:p-6 shadow-inner group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Soft edge fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />

        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none select-none scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            className={`flex gap-4 sm:gap-6 ${
              isHovered ? "[animation-play-state:paused]" : ""
            }`}
            style={{
              animation: "marqueeSlide 55s linear infinite",
              width: "max-content",
            }}
          >
            {displayItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => setSelectedImage(item.image)}
                className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 cursor-pointer rounded-2xl bg-white border-2 border-gray-200 hover:border-[#0052CC] shadow-sm hover:shadow-xl transition-all duration-300 p-3 flex flex-col justify-between group/card"
              >
                {/* Card Top Information Bar */}
                <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center text-[10px] font-black">
                      ✓
                    </span>
                    <span className="text-[11px] font-bold text-[#0B1F3A]">
                      {item.location}
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    {item.verifiedTag}
                  </span>
                </div>

                {/* Screenshot Container */}
                <div className="relative w-full aspect-[9/14] rounded-xl overflow-hidden bg-gray-100 border border-gray-100 group-hover/card:brightness-95 transition-all">
                  <Image
                    src={item.image}
                    alt={`Customer WhatsApp Testimony from ${item.location}`}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
                    className="object-cover object-top"
                    loading="lazy"
                  />
                  {/* Subtle hover overlay hint */}
                  <div className="absolute inset-0 bg-[#0B1F3A]/40 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#0B1F3A] font-black text-xs px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-1.5 transform scale-90 group-hover/card:scale-100 transition-transform">
                      <span>🔍</span>
                      <span>Tap to Read Chat</span>
                    </span>
                  </div>
                </div>

                {/* Card Bottom Trust Badge */}
                <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
                  <span className="text-amber-500 font-black tracking-wider">★★★★★</span>
                  <span className="text-gray-500 font-semibold">100% Genuine Order</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal for Reading Chat Evidence */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#061325]/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-lg w-full max-h-[90vh] bg-white rounded-3xl p-3 sm:p-4 shadow-2xl flex flex-col items-center animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Controls */}
            <div className="w-full flex items-center justify-between pb-3 px-2 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-base text-[#25D366]">💬</span>
                <span className="font-poppins font-black text-xs sm:text-sm text-[#0B1F3A]">
                  Verified Customer WhatsApp Conversation
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-[#0B1F3A] font-black text-sm flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Image display */}
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden mt-3 bg-gray-50 border border-gray-100">
              <Image
                src={selectedImage}
                alt="Enlarged Customer WhatsApp Testimony"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 500px"
                priority
              />
            </div>

            <p className="text-center text-xs text-gray-500 font-medium mt-3">
              Press Escape or tap outside to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
