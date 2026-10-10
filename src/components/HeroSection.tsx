"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { RotatingDVD } from "@/components/RotatingDVD";
import { TypewriterText } from "@/components/TypewriterText";

export const HeroSection: React.FC = () => {
  const typewriterWords = [
    "movements.",
    "cultural moments.",
    "viral campaigns.",
    "listener growth.",
  ];

  return (
    <section className="w-full bg-[#FF0043] text-white pt-2 md:pt-4 pb-24 overflow-hidden font-sans relative">

      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        {/* Top Text Content */}
        <div className="max-w-6xl mb-14">
          {/* Badge */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-3 h-3 rounded-full bg-[#ffe600] inline-block animate-pulse shadow-md shadow-[#ffe600]/50" />
            <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2px] uppercase text-white/95">
              MUSIC-FIRST MARKETING FROM INDIA
            </span>
          </div>

          {/* Main Headline with Satoshi font */}
          <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[98px] tracking-tight leading-[0.96] md:leading-[0.92] text-white mb-6 sm:mb-8">
            Let&apos;s turn your <br />
            melodies into{" "}
            <TypewriterText
              words={typewriterWords}
              className="text-[#ffe600]"
              cursorColor="text-[#ffe600]"
            />
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-medium text-base sm:text-xl md:text-2xl text-white/95 max-w-3xl leading-relaxed mb-8 sm:mb-10">
            All By Play helps artists, labels, managers, and festivals build music campaigns that feel clear, creative, and effective.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
            <a
              href="#brief"
              className="inline-flex items-center justify-center gap-2.5 bg-[#ffe600] text-[#000000] font-sans font-extrabold text-base sm:text-lg px-7 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-300 ease-out hover:bg-yellow-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/20 active:scale-95 shadow-xl shadow-black/15 cursor-pointer"
            >
              Share your brief
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </a>

            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/80 text-white font-sans font-extrabold text-base sm:text-lg px-7 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-300 ease-out hover:bg-white hover:text-[#000000] hover:border-white hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/20 active:scale-95 shadow-md cursor-pointer"
            >
              Explore the work
            </a>
          </div>
        </div>

        {/* Media Frame Section */}
        <div className="relative max-w-[660px] mx-auto mt-6 sm:mt-10">
          {/* Rotating DVD Record - Placed Half On Video Card & Half Outside */}
          <div className="absolute -top-8 -right-4 sm:-top-16 sm:-right-16 md:-top-20 md:-right-20 z-30 transform hover:scale-110 transition-transform cursor-pointer">
            <div className="sm:hidden">
              <RotatingDVD size={110} />
            </div>
            <div className="hidden sm:block md:hidden">
              <RotatingDVD size={145} />
            </div>
            <div className="hidden md:block">
              <RotatingDVD size={180} />
            </div>
          </div>

          {/* Arch Shape YouTube Video Container */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-t-[140px] sm:rounded-t-[220px] md:rounded-t-[260px] overflow-hidden bg-[#1A1A1A] border-2 sm:border-4 border-white/20 shadow-2xl z-10">
            <iframe
              src="https://www.youtube-nocookie.com/embed/FzjBVeOJdug?autoplay=1&mute=1&loop=1&playlist=FzjBVeOJdug&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
              title="All By Play Video"
              className="w-full h-[125%] -mt-[10%] object-cover pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>

          {/* Floating Music Player Widget (Bottom Right) */}
          <div className="absolute -bottom-5 -right-2 sm:-bottom-8 sm:-right-6 z-30 bg-[#1A1A1A] text-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-2xl border border-white/15 w-[200px] sm:w-[290px]">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
              {/* Yellow PLAY pill */}
              <div className="bg-[#ffe600] text-[#000000] font-space font-black text-[9px] sm:text-[10px] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-sm">
                PLAY
              </div>
              <div>
                <div className="text-[9px] sm:text-[10px] font-space font-bold uppercase tracking-wider text-[#009082]">
                  NOW BUILDING
                </div>
                <div className="text-xs sm:text-sm font-sans font-bold text-white leading-tight">
                  Your next release
                </div>
              </div>
            </div>

            {/* Waveform Visualizer */}
            <div className="flex items-end justify-between gap-1 sm:gap-1.5 h-5 sm:h-6 pt-1 px-1">
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-1" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-2" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-3" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-4" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-5" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-6" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-7" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-8" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-2" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
