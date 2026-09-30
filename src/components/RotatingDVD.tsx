"use client";

import React from "react";
import Image from "next/image";

interface RotatingDVDProps {
  className?: string;
  size?: number; // width/height in px
}

export const RotatingDVD: React.FC<RotatingDVDProps> = ({
  className = "",
  size = 170,
}) => {
  return (
    <div
      className={`relative rounded-full bg-[#0a0a0c] text-white shadow-2xl flex items-center justify-center p-2 select-none border-2 border-white/20 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* SVG Container for Curved Rotating Text */}
      <div className="absolute inset-0 w-full h-full animate-spin-slow flex items-center justify-center">
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full"
          style={{ transform: "rotate(-90deg)" }}
        >
          <path
            id="textCirclePathBlack"
            d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
            fill="none"
          />
          <text className="font-space font-extrabold text-[10px] uppercase tracking-[2.2px] fill-[#ffe600]">
            <textPath href="#textCirclePathBlack" startOffset="0%">
              STRATEGY • CULTURE • GROWTH • STRATEGY • CULTURE • GROWTH •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Record Hole & Large ABP Logo */}
      <div className="relative z-10 w-[62%] h-[62%] rounded-full bg-[#141416] flex items-center justify-center p-2 shadow-inner border border-white/10">
        <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-transparent p-1">
          <Image
            src="/ABP_logo.png"
            alt="All By Play Logo"
            width={72}
            height={72}
            className="object-contain filter drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
