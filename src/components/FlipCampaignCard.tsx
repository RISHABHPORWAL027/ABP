"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, RotateCw, CheckCircle, Zap } from "lucide-react";

interface FlipCampaignCardProps {
  num: string;
  category: string;
  subtags: string;
  title: string;
  footerText: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  backDetails: {
    stat1: string;
    stat1Label: string;
    stat2: string;
    stat2Label: string;
    description: string;
  };
  serviceLink?: string;
  serviceButtonText?: string;
}

export const FlipCampaignCard: React.FC<FlipCampaignCardProps> = ({
  num,
  category,
  subtags,
  title,
  footerText,
  bgColor,
  textColor,
  accentColor,
  backDetails,
  serviceLink,
  serviceButtonText = "View Service",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-[360px] sm:h-[400px] md:h-[430px] cursor-pointer group relative"
      style={{ perspective: "1800px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseMove={() => {
        if (!isFlipped) setIsFlipped(true);
      }}
      onMouseLeave={(e) => {
        // Prevent false unflip during 3D rotation: only unflip if mouse genuinely left the rectangular boundary
        const rect = e.currentTarget.getBoundingClientRect();
        const buffer = 4; // 4px margin of safety
        if (
          e.clientX >= rect.left - buffer &&
          e.clientX <= rect.right + buffer &&
          e.clientY >= rect.top - buffer &&
          e.clientY <= rect.bottom + buffer
        ) {
          return;
        }
        setIsFlipped(false);
      }}
      onClick={(e) => {
        // Prevent flipping if user clicked on or inside an interactive link/button
        const target = e.target as HTMLElement;
        if (target.closest("a, button, [data-no-flip='true']")) {
          return;
        }
        setIsFlipped((prev) => !prev);
      }}
    >
      <div
        className="relative w-full h-full rounded-[24px] sm:rounded-[28px] shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          willChange: "transform",
        }}
      >
        {/* FRONT SIDE OF CARD */}
        <div
          className={`absolute inset-0 w-full h-full rounded-[24px] sm:rounded-[28px] p-5 sm:p-9 md:p-12 flex flex-col justify-between overflow-hidden ${bgColor} ${textColor}`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            pointerEvents: isFlipped ? "none" : "auto",
          }}
        >
          {/* Subtle Concentric Rings SVG Background */}
          <div className="absolute -right-24 -bottom-24 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] opacity-15 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-current stroke-[1.5]">
              <circle cx="100" cy="100" r="30" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="90" />
              <circle cx="100" cy="100" r="120" />
            </svg>
          </div>

          {/* Top Bar */}
          <div className="flex items-center justify-between font-space relative z-10">
            <span className="font-extrabold text-sm sm:text-base opacity-80">{num}</span>
            <span className="font-extrabold text-[10px] sm:text-sm tracking-widest uppercase opacity-90 truncate max-w-[70%]">
              {category}
            </span>
          </div>

          {/* Middle Body */}
          <div className="relative z-10 my-auto pt-2 sm:pt-4">
            <span className="font-space font-extrabold text-[10px] sm:text-sm tracking-widest uppercase opacity-75 block mb-2 sm:mb-3">
              {subtags}
            </span>
            <h3 className="font-sans font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] uppercase max-w-3xl">
              {title}
            </h3>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between font-space relative z-10 pt-4 sm:pt-6 border-t border-current/15">
            <span className="font-medium text-xs sm:text-base opacity-85">{footerText}</span>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-60 hidden sm:inline">
                TAP / HOVER TO FLIP
              </span>
              <div
                className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all ${accentColor}`}
              >
                <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE OF CARD (FLIPPED STATE) */}
        <div
          className="absolute inset-0 w-full h-full rounded-[24px] sm:rounded-[28px] p-5 sm:p-9 md:p-12 flex flex-col justify-between overflow-hidden bg-[#16121b] text-white border-2 border-[#FF0043]/40"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            pointerEvents: isFlipped ? "auto" : "none",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
            <div className="flex items-center gap-2 text-[#009082]">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              <span className="font-space font-extrabold text-[10px] sm:text-sm tracking-widest uppercase">
                CAMPAIGN IMPACT & METRICS
              </span>
            </div>
            <RotateCw className="w-4 h-4 sm:w-5 sm:h-5 text-white/40" />
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 my-auto">
            <div className="bg-white/5 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10">
              <div className="font-space font-black text-2xl sm:text-4xl md:text-5xl text-[#FF0043] tracking-tight mb-1 sm:mb-2">
                {backDetails.stat1}
              </div>
              <div className="font-sans text-[10px] sm:text-sm font-bold text-white/70 uppercase tracking-wider">
                {backDetails.stat1Label}
              </div>
            </div>

            <div className="bg-white/5 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10">
              <div className="font-space font-black text-2xl sm:text-4xl md:text-5xl text-[#ffe600] tracking-tight mb-1 sm:mb-2">
                {backDetails.stat2}
              </div>
              <div className="font-sans text-[10px] sm:text-sm font-bold text-white/70 uppercase tracking-wider">
                {backDetails.stat2Label}
              </div>
            </div>
          </div>

          {/* Description & Action */}
          <div className="border-t border-white/10 pt-3 sm:pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <p className="font-sans text-[11px] sm:text-sm text-white/80 max-w-sm sm:max-w-md md:max-w-lg font-medium leading-relaxed line-clamp-2 sm:line-clamp-none">
              {backDetails.description}
            </p>

            {serviceLink ? (
              <Link
                href={serviceLink}
                data-no-flip="true"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  setIsFlipped(true);
                }}
                onMouseLeave={(e) => {
                  e.stopPropagation();
                }}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#FF0043] hover:bg-[#ffe600] text-white hover:text-black font-space font-extrabold text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#FF0043]/30 hover:shadow-[#ffe600]/40 shrink-0 cursor-pointer group/svcbtn self-start sm:self-auto"
              >
                <span>{serviceButtonText}</span>
                <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5] transition-transform duration-300 group-hover/svcbtn:translate-x-0.5 group-hover/svcbtn:-translate-y-0.5" />
              </Link>
            ) : (
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FF0043] text-white flex items-center justify-center shrink-0 shadow-lg ml-2">
                <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
