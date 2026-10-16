"use client";

import React from "react";
import SteppedMorphSlider, { SteppedSlide } from "@/components/ui/stepped-morph-slider";

const journeySlides: SteppedSlide[] = [
  {
    title: "All By Play Founded",
    caption: "Founded in January 2023 by Dhaval Kothari to provide artists and labels with proper strategic resources.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&auto=format&fit=crop&q=80",
    palette: "dawn",
    seed: 4,
  },
  {
    title: "Strategy & Multi-Channel Rollouts",
    caption: "Expanding from release strategy into social media, Spotify growth, PR storytelling, and performance ads.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&auto=format&fit=crop&q=80",
    palette: "alpine",
    seed: 12,
  },
  {
    title: "Your Data, Demystified",
    caption: "Granular campaign analytics, audience retention data, and predictive blueprints for future releases.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&auto=format&fit=crop&q=80",
    palette: "dusk",
    seed: 23,
  },
  {
    title: "Across India's Music Landscape",
    caption: "Partnering with 50+ indie artists, labels, and festivals, turning release spikes into loyal listener communities.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&auto=format&fit=crop&q=80",
    palette: "mist",
    seed: 31,
  },
];

export const JourneyMorphSliderSection: React.FC = () => {
  return (
    <section
      id="journey-timeline"
      className="w-full bg-[#000000] text-white py-20 md:py-28 font-sans border-t border-white/10 relative overflow-hidden"
    >
      {/* Subtle Top Red Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(255,0,67,0.12),transparent_70%)] pointer-events-none blur-3xl" />

      {/* Header Block */}
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10 mb-10 md:mb-14">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF0043] animate-pulse" />
            <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2px] uppercase text-[#FF0043]">
              THE ABP JOURNEY
            </span>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[56px] 2xl:text-7xl tracking-tight leading-[1.1] md:leading-[1.08] lg:leading-[1.06] xl:leading-[1.05] text-white mb-4">
            A Story Of Growth
          </h2>

          <p className="font-sans font-medium text-base sm:text-lg md:text-xl text-white/75 leading-relaxed">
            Our journey reflects years of collaboration, creativity, and dedication to helping indie artists and labels build lasting audience communities.
          </p>
        </div>
      </div>

      {/* Full-width Stepped Morph Slider (No Card Container, No Inset Borders / Radius) */}
      <div className="w-full px-4 sm:px-6 md:px-12 relative z-10">
        <SteppedMorphSlider
          slides={journeySlides}
          background="transparent"
          ink="#FFFFFF"
          muted="rgba(255, 255, 255, 0.65)"
          accent="#FF0043"
          outline="rgba(255, 255, 255, 0.2)"
          columns={9}
          aspect={2.1 / 1}
          autoplay={4800}
          duration={1100}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default JourneyMorphSliderSection;
