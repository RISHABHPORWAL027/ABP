"use client";

import React from "react";

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
  const embedUrl = youtubeId
    ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`
    : null;

  return (
    <div className="flex flex-col items-center gap-3 group cursor-pointer">
      {/* Phone Mockup Frame Container */}
      <div className="w-[250px] sm:w-[270px] h-[480px] sm:h-[510px] rounded-[42px] p-2.5 bg-[#09080c] border-2 border-white/20 shadow-2xl overflow-hidden relative transition-all duration-500 hover:border-[#FF0043] hover:shadow-[0_0_35px_rgba(255,0,67,0.35)] hover:scale-[1.02]">
        
        {/* Phone Screen Frame */}
        <div className="w-full h-full bg-[#000000] rounded-[32px] overflow-hidden relative border border-white/10">
          
          {/* Top Notch / Camera Cutout */}
          <div className="w-24 h-4 bg-[#09080c] rounded-full mx-auto z-30 absolute top-3 left-1/2 -translate-x-1/2 border border-white/10 shadow-md pointer-events-none" />

          {/* Live Fullscreen YouTube Video */}
          {embedUrl ? (
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none rounded-[32px]">
              <iframe
                src={embedUrl}
                title={title || "YouTube Reel"}
                className="w-[185%] h-[185%] -translate-x-[23%] -translate-y-[23%] object-cover opacity-95 scale-125"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              {/* Subtle Edge Vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-[#16141d] flex items-center justify-center text-white/40 text-xs font-space">
              NO VIDEO
            </div>
          )}
        </div>
      </div>

      {/* Song Name & Artist Title Label (Fetched from YouTube link) */}
      {title && (
        <div className="w-[250px] sm:w-[270px] text-center px-2">
          <h4 className="font-sans font-black text-sm sm:text-base uppercase tracking-tight text-white group-hover:text-[#FF0043] transition-colors truncate">
            {title}
          </h4>
          {subtitle && (
            <p className="font-sans text-xs text-white/70 font-medium truncate mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
