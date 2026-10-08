"use client";

import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUpNumber } from "@/components/CountUpNumber";
import { TypewriterText } from "@/components/TypewriterText";

export const WhatWeBuiltSection: React.FC = () => {
  const stats = [
    {
      end: 2023,
      start: 2000,
      suffix: "",
      padZeros: 0,
      label: "FOUNDED IN JANUARY",
    },
    {
      end: 50,
      start: 0,
      suffix: "+",
      padZeros: 0,
      label: "ARTISTS SERVED",
    },
    {
      end: 3,
      start: 0,
      suffix: "",
      padZeros: 2,
      label: "INDIE, BOLLYWOOD & LABEL CAMPAIGNS",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] text-[#000000] py-20 md:py-28 font-sans border-t border-[#E5E5E5]">
      <div className="max-w-[1380px] mx-auto px-6 md:px-12">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-24">
          <div className="lg:col-span-6">
            <ScrollReveal direction="up">
              <h2 className="font-sans font-black text-4xl sm:text-6xl lg:text-[76px] tracking-tight leading-[0.98] text-[#000000]">
                What we&apos;ve <br />
                <TypewriterText
                  words={["built so far", "achieved", "delivered"]}
                  className="text-[#000000]"
                  cursorColor="text-[#FF0043]"
                />
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 pt-2">
            <ScrollReveal direction="up" delay={100}>
              <p className="font-sans font-medium text-base sm:text-lg lg:text-xl text-black/70 leading-relaxed max-w-xl">
                All By Play has grown through work across indie artists, labels, live shows, festivals, and profile-building campaigns. The team has worked on release rollouts, Instagram campaigns, PR, Spotify strategy, ads, and creative direction.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* 3 Animated Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#E5E5E5]">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 100}>
              <div
                className={`py-10 px-4 md:px-8 flex flex-col justify-between min-h-[220px] ${
                  idx < 2 ? "md:border-r border-[#E5E5E5]" : ""
                } ${idx > 0 ? "border-t md:border-t-0 border-[#E5E5E5]" : ""}`}
              >
                <div className="font-sans font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#000000] mb-8">
                  <CountUpNumber
                    end={stat.end}
                    start={stat.start}
                    suffix={stat.suffix}
                    padZeros={stat.padZeros}
                    duration={2400}
                  />
                </div>
                <div className="font-space font-extrabold text-xs tracking-[2px] uppercase text-black/80">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
