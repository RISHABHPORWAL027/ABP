"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterText } from "@/components/TypewriterText";
import { AboutPhoneReel } from "@/components/AboutPhoneReel";

interface AboutHeroSectionProps {
  className?: string;
}

export const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({ className = "" }) => {
  return (
    <section id="about" className={`w-full bg-[#FFFFFF] text-[#000000] py-16 md:py-24 font-sans relative overflow-hidden ${className}`}>
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal direction="up">
              {/* Red Sub-headline / Badge */}
              <div className="mb-4 sm:mb-6">
                <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2px] uppercase text-[#FF0043]">
                  INDEPENDENT MUSIC MARKETING · INDIA
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] tracking-tight leading-[0.95] text-[#000000] mb-8">
                About <br />
                <TypewriterText
                  words={["All By Play", "Visual Strategy", "Music Campaigns"]}
                  className="font-black text-[#FF0043]"
                  cursorColor="text-[#FF0043]"
                />
              </h1>

              {/* Paragraph */}
              <p className="font-sans font-medium text-base sm:text-xl md:text-2xl text-black/80 max-w-2xl leading-relaxed mb-10">
                All By Play is a music marketing company built for artists, labels, and festivals that want more than generic promotion. We help music move with better strategy, sharper storytelling, and campaigns that actually fit the artist.
              </p>

              {/* CTA Link */}
              <div>
                <a
                  href="#story"
                  className="group inline-flex items-center gap-2.5 font-sans font-bold text-base sm:text-lg text-[#000000] hover:text-[#FF0043] transition-colors border-b-2 border-black/20 hover:border-[#FF0043] pb-1 cursor-pointer"
                >
                  <span>Read our story</span>
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Smartphone Mockup with Instagram Reel Video */}
          <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end relative py-6 sm:py-10">
            <ScrollReveal direction="left" delay={150} className="w-full flex justify-center lg:justify-end">
              <AboutPhoneReel />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};


