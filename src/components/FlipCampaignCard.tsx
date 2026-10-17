"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FlipCampaignCardProps {
  num: string;
  category: string;
  subtags: string;
  title: string;
  footerText: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  backDetails?: {
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
  serviceLink = "/services",
  serviceButtonText = "View Services",
}) => {
  return (
    <Link
      href={serviceLink}
      className={`block w-full h-[360px] sm:h-[400px] md:h-[430px] rounded-[24px] sm:rounded-[28px] p-5 sm:p-9 md:p-12 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 ease-out hover:scale-[1.015] hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.6)] cursor-pointer group relative ${bgColor} ${textColor}`}
    >
      {/* Subtle Concentric Rings SVG Background */}
      <div className="absolute -right-24 -bottom-24 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] opacity-15 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110">
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

      {/* Bottom Bar: Tab to View Services & Redirection */}
      <div className="flex items-center justify-between font-space relative z-10 pt-4 sm:pt-6 border-t border-current/15">
        <span className="font-medium text-xs sm:text-base opacity-85">{footerText}</span>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-xs sm:text-sm font-space font-extrabold uppercase tracking-wider opacity-90 group-hover:opacity-100 transition-opacity">
            {serviceButtonText}
          </span>
          <div
            className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${accentColor}`}
          >
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
};
