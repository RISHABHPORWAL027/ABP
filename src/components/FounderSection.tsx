"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export const FounderSection: React.FC = () => {
  const badgeTags = [
    "Spotify experience",
    "Berklee College of Music",
    "Music-first founder",
  ];

  return (
    <section className="w-full bg-[#0d0c12] text-white py-24 md:py-32 font-sans relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF0043]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#009082]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          {/* Left Column: Text & Badges */}
          <div className="flex-1 lg:max-w-[58%]">
            <ScrollReveal direction="up">
              {/* Top Badge */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF0043] inline-block animate-pulse shadow-sm shadow-[#FF0043]" />
                <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2.5px] uppercase text-[#FF0043]">
                  FOUNDER-LED, ALWAYS
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white mb-6">
                Meet Dhaval Kothari.
              </h2>

              {/* Description */}
              <p className="font-sans font-normal text-base sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                A music entrepreneur with experience across Spotify, Berklee College of Music, and the wider music business. Dhaval built ABP to give every campaign sharper thinking, closer collaboration, and better execution.
              </p>

              {/* Outlined Badge Pills */}
              <div className="flex flex-wrap items-center gap-3.5">
                {badgeTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-space font-medium text-xs sm:text-sm px-6 py-3 rounded-full border border-white/20 bg-white/[0.04] text-white/90 hover:border-[#FF0043] hover:bg-[#FF0043]/10 hover:text-white transition-all cursor-default shadow-sm backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Founder Image */}
          <ScrollReveal direction="left" className="w-full lg:flex-1 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[360px] sm:max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden border-2 border-white/15 p-2.5 bg-[#16141f] shadow-2xl transition-all duration-500 hover:border-[#FF0043] hover:shadow-[0_20px_50px_rgba(255,0,67,0.25)]">
              <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                <Image
                  src="/founder-image.png"
                  alt="Dhaval Kothari - Founder of ABP"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 pointer-events-none transition-opacity duration-500 group-hover:opacity-60" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 z-10 font-space">
                  <div className="text-xs font-extrabold text-[#009082] uppercase tracking-[2px] mb-1">
                    FOUNDER & DIRECTOR
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                    DHAVAL KOTHARI
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

