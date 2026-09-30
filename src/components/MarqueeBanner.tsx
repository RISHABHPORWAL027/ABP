"use client";

import React from "react";

interface MarqueeBannerProps {
  items: string[];
  speed?: string;
  className?: string;
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  items,
  speed = "18s",
  className = "",
}) => {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`w-full overflow-hidden bg-white text-[#e60000] border-y border-[#e60000] py-4 whitespace-nowrap font-space font-extrabold text-xl md:text-2xl tracking-widest uppercase ${className}`}
    >
      <div
        className="inline-flex animate-marquee"
        style={{ animationDuration: speed }}
      >
        {repeatedItems.map((item, idx) => (
          <span key={idx} className="flex items-center gap-6 px-4">
            {item}
            <span className="w-2 h-2 rounded-full bg-[#e60000] inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
};
