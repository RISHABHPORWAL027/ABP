"use client";

import React from "react";
import Image from "next/image";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterText } from "@/components/TypewriterText";

export const AbpJourneySection: React.FC = () => {
  const journeySteps = [
    {
      designation: "JAN 2023",
      step: "01",
      name: "All By Play begins.",
      quote: "A founder-led agency with a clear belief: thoughtful strategy makes music travel further.",
      src: "/hersection_bg.png",
      isHighlight: false,
    },
    {
      designation: "THE BUILD",
      step: "02",
      name: "One campaign at a time.",
      quote: "Expanding from release strategy into social, Spotify, PR, ads, and creative direction.",
      src: "/hersection_bg.png",
      isHighlight: false,
    },
    {
      designation: "NOW",
      step: "03",
      name: "Across India's music landscape.",
      quote: "Partnering with independent artists, labels, managers, festivals, and music teams.",
      src: "/hersection_bg.png",
      isHighlight: true,
    },
  ];

  return (
    <section className="w-full bg-[#f4f3ec] text-[#111111] py-24 md:py-32 font-sans relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/white.png"
          alt="ABP Journey Background"
          fill
          className="object-cover object-center opacity-70 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f3ec]/60 via-transparent to-[#f4f3ec]/80" />
      </div>

      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <ScrollReveal direction="up">
            {/* Top Indicator */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF0043] inline-block animate-pulse" />
              <span className="font-space font-extrabold text-xs tracking-[2px] uppercase text-[#FF0043]">
                THE ABP JOURNEY
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-[#111111] mb-6 min-h-[1.1em]">
              <TypewriterText
                words={["Built to move music forward."]}
                loop={false}
                className="text-[#111111]"
                cursorColor="text-[#FF0043]"
              />
            </h2>

            {/* Description */}
            <p className="font-sans font-medium text-lg sm:text-2xl text-[#333333] leading-relaxed max-w-3xl">
              Founded in January 2023, All By Play has grown into a music-first, founder-led agency working across indie, label, and Bollywood campaigns.
            </p>
          </ScrollReveal>
        </div>

        {/* Circular 3D Carousel Testimonials / Journey Component */}
        <div className="w-full flex justify-center pt-4">
          <CircularTestimonials
            testimonials={journeySteps}
            autoplay={true}
            colors={{
              name: "#111111",
              designation: "#FF0043",
              testimony: "#333333",
              arrowBackground: "#111111",
              arrowForeground: "#ffffff",
              arrowHoverBackground: "#FF0043",
            }}
            fontSizes={{
              name: "32px",
              designation: "14px",
              quote: "20px",
            }}
          />
        </div>
      </div>
    </section>
  );
};
