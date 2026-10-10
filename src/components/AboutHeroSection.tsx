"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterText } from "@/components/TypewriterText";
import { WovenLightBackground } from "@/components/ui/woven-light-background";

interface AboutHeroSectionProps {
  className?: string;
}

export const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({ className = "" }) => {
  return (
    <section id="about" className={`w-full bg-[#FFFFFF] text-[#000000] py-16 md:py-24 font-sans relative overflow-hidden ${className}`}>
      {/* 3D Woven Light Interactive Particle Background (Light Mode) */}
      <WovenLightBackground particleCount={14000} theme="light" />

      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal direction="up">
              {/* Red Sub-headline / Badge */}
              <div className="mb-4 sm:mb-6">
                <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2.5px] uppercase text-[#FF0043]">
                  INDEPENDENT MUSIC MARKETING · INDIA
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl lg:text-[96px] tracking-tight leading-[0.95] text-[#000000] mb-8">
                About <br />
                <TypewriterText
                  words={["All By Play", "Visual Strategy", "Music Campaigns"]}
                  className="font-playfair italic font-normal text-[#FF0043]"
                  cursorColor="text-[#FF0043]"
                />
              </h1>

              {/* Paragraph */}
              <p className="font-sans font-medium text-lg sm:text-xl md:text-2xl text-black/80 max-w-2xl leading-relaxed mb-10">
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

          {/* Right Media Image Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <ScrollReveal direction="left" delay={150} className="w-full">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-[#1A1A1A] border border-black/10 group">
                <Image
                  src="/about-studio-console.jpg"
                  alt="All By Play Music Studio Console"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};


