"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface PhoneMockupCardProps {
  title?: string;
  subtitle?: string;
  category?: string;
  youtubeId?: string;
}

export const PhoneMockupCard: React.FC<PhoneMockupCardProps> = ({
  youtubeId,
  title,
  subtitle,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : null;

  const embedUrl = youtubeId
    ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`
    : null;

  return (
    <div
      onClick={() => setIsPlaying(true)}
      className="flex flex-col items-center gap-3 group cursor-pointer"
    >
      {/* Phone Mockup Frame Container */}
      <div className="w-[220px] sm:w-[270px] h-[420px] sm:h-[510px] rounded-[36px] sm:rounded-[42px] p-2 sm:p-2.5 bg-[#09080c] border-2 border-white/20 shadow-2xl overflow-hidden relative transition-all duration-500 hover:border-[#FF0043] hover:shadow-[0_0_35px_rgba(255,0,67,0.35)] hover:scale-[1.02]">
        
        {/* Phone Screen Frame */}
        <div className="w-full h-full bg-[#000000] rounded-[28px] sm:rounded-[32px] overflow-hidden relative border border-white/10">
          
          {/* Top Notch / Camera Cutout */}
          <div className="w-20 sm:w-24 h-3.5 sm:h-4 bg-[#09080c] rounded-full mx-auto z-30 absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 border border-white/10 shadow-md pointer-events-none" />

          {/* Video or Thumbnail Poster */}
          {isPlaying && embedUrl ? (
            <div className="absolute inset-0 w-full h-full overflow-hidden z-10 rounded-[28px] sm:rounded-[32px]">
              <iframe
                src={embedUrl}
                title={title || "YouTube Reel"}
                className="w-[185%] h-[185%] -translate-x-[23%] -translate-y-[23%] object-cover scale-125"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          ) : thumbnailUrl ? (
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0 rounded-[28px] sm:rounded-[32px] group/poster">
              <Image
                src={thumbnailUrl}
                alt={title || "Video Preview"}
                fill
                sizes="(max-width: 640px) 220px, 270px"
                className="object-cover scale-125 transition-transform duration-700 group-hover/poster:scale-135"
              />
              {/* Dark Overlay Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF0043] text-white flex items-center justify-center shadow-xl shadow-[#FF0043]/40 border border-white/20 group-hover/poster:scale-110 transition-transform">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-[#16141d] flex items-center justify-center text-white/40 text-xs font-space">
              NO VIDEO
            </div>
          )}
        </div>
      </div>

      {/* Song Name & Artist Title Label */}
      {title && (
        <div className="w-[220px] sm:w-[270px] text-center px-2">
          <h4 className="font-sans font-black text-xs sm:text-base uppercase tracking-tight text-white group-hover:text-[#FF0043] transition-colors truncate">
            {title}
          </h4>
          {subtitle && (
            <p className="font-sans text-[11px] sm:text-xs text-white/70 font-medium truncate mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
