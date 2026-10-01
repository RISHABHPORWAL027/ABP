"use client";

import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterText } from "@/components/TypewriterText";

export const WhatWeDoSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-[#111111] py-20 md:py-28 font-sans relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal direction="up">
          {/* Top Category Tag */}
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF0043] inline-block animate-pulse" />
            <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2px] uppercase text-[#FF0043]">
              WHAT WE DO
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-[#111111] mb-10 min-h-[1.1em]">
            <TypewriterText
              words={["Every play starts with a plan."]}
              loop={false}
              className="text-[#111111]"
              cursorColor="text-[#FF0043]"
            />
          </h2>

          {/* Content Block with Accent Left Border */}
          <div className="border-l-4 border-[#FF0043] pl-6 md:pl-8 space-y-4 max-w-4xl">
            <p className="font-sans font-bold text-xl sm:text-2xl md:text-3xl text-[#111111] leading-snug">
              We build release campaigns, Instagram-led content, Spotify growth plans, PR activations, ads, and branding support.
            </p>
            <p className="font-sans font-medium text-base sm:text-lg text-[#666666] leading-relaxed">
              One connected approach, so your music reaches the right people without the strategy getting lost in the noise.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
