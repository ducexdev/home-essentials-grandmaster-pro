"use client";

import { useState } from "react";

interface VideoEmbedProps {
  videoId: string;
  title: string;
  caption?: string;
  autoplayOnClick?: boolean;
  dark?: boolean;
}

export function VideoEmbed({
  videoId,
  title,
  caption,
  autoplayOnClick = true,
  dark = false,
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // High-res YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="w-full">
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/90 shadow-xl border border-white/10 group">
        {!isPlaying ? (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-left focus:outline-none focus:ring-4 focus:ring-[#00AEEF]/50"
            aria-label={`Play video: ${title}`}
          >
            {/* Poster Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

            {/* Play Button */}
            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00AEEF] group-hover:bg-[#0098d4] text-[#061325] flex items-center justify-center shadow-2xl shadow-cyan-500/40 transform group-hover:scale-110 transition-transform duration-300">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="ml-1"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>

            {/* Centered Play Button — zero text covering thumbnail */}
          </button>
        ) : (
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {/* Embedded Player with Top Crop to push YouTube Header off-screen */}
            <iframe
              className="absolute -top-12 -left-1 w-[102%] h-[calc(100%+48px)]"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${autoplayOnClick ? "1" : "0"}&rel=0&modestbranding=1&playsinline=1&controls=1&iv_load_policy=3&showinfo=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            {/* Bottom-Right Shield: Covers & Blocks "Watch on YouTube" button */}
            <div
              className="absolute bottom-2 right-12 z-20 pointer-events-auto bg-[#061325] text-[#00AEEF] px-2 sm:px-2.5 py-0.5 rounded text-[9px] sm:text-[10px] font-black uppercase tracking-wider border border-[#00AEEF]/40 shadow-md flex items-center gap-1 cursor-default select-none"
              title="Official Demonstration Video"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
              <span>Official Demo</span>
            </div>

            {/* Bottom-Left Click Absorber: Prevents clicking YouTube link on pause */}
            <div
              className="absolute bottom-9 left-2 w-36 h-9 z-20 pointer-events-auto cursor-default opacity-0"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            />
          </div>
        )}
      </div>

      {/* Title & Caption brought completely BELOW the video — zero text covering video, 100% visible and readable on mobile */}
      <div className="mt-3.5 px-2 text-center">
        <p className={`font-poppins font-bold text-sm sm:text-base leading-snug flex items-center justify-center gap-2 ${
          dark ? "text-white" : "text-[#0B1F3A]"
        }`}>
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
          <span>{title}</span>
        </p>
        {caption && (
          <p className={`mt-1.5 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto ${
            dark ? "text-white/85" : "text-[#344054]"
          }`}>
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
