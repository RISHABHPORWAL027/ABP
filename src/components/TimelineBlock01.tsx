"use client";

import React from "react";
import Timeline from "@/components/ui/timeline-01-utils/timeline";
import { Badge } from "@/components/ui/badge";

const timelineData = [
  {
    title: "All By Play Founded",
    description:
      "Founded by Dhaval Kothari with a clear belief: thoughtful strategy makes music travel further. Started with a mission to empower musicians and labels with proper resources, strategic rollout roadmaps, and tailored retainer execution.",
    date: "JAN 2023",
    image:
      "https://cdn.21st.dev/assets/localized/0ea25e6c9f3a254d713265295d48f2f515a3ce40d9cf2adcfd9454a3a96df996.webp",
  },
  {
    title: "Strategy & Multi-Channel Rollouts",
    description:
      "Expanding from release strategy into social media, Spotify playlists and algorithmic growth, PR storytelling, and targeted performance ad funnels. Instituting weekly 1-on-1 sessions to analyze and brainstorm active growth retargeting.",
    date: "2023 - 2024",
    image:
      "https://cdn.21st.dev/assets/localized/8fcabd896d283359f9f601b92bce74fc06aa48f368e56afbd21dca69a9742809.webp",
  },
  {
    title: "Your Data, Demystified",
    description:
      "Delivering what artists and labels usually overlook: comprehensive campaign analytics, granular audience retention data, stream source breakdown, and predictive blueprints for upcoming singles, EPs, and live tours.",
    date: "2024 - 2025",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Across India's Music Landscape",
    description:
      "Partnering with 50+ independent artists, major labels, artist managers, and festival circuits across India, transforming single release spikes into lasting listener communities and cultural impact.",
    date: "2025 - 2026",
    image:
      "https://cdn.21st.dev/assets/localized/f8596260a4e342a4a2d85e821ff477a8e71182f373aea763dfd4f13fe657f5fa.webp",
  },
];

export const TimelineBlock01 = () => {
  return (
    <section
      id="journey-timeline"
      className="relative overflow-hidden bg-[#0A0A0E] text-white py-20 md:py-32 font-sans border-t border-white/10"
    >
      {/* Background Layer 1: Atmospheric studio background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.06] mix-blend-luminosity filter blur-[1px] pointer-events-none"
        style={{ backgroundImage: `url('/about-studio-console.jpg')` }}
      />

      {/* Background Layer 2: Subtle architectural grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 31px,
            rgba(255, 255, 255, 0.04) 31px,
            rgba(255, 255, 255, 0.04) 32px
          ),
          repeating-linear-gradient(
            to right,
            transparent,
            transparent 31px,
            rgba(255, 255, 255, 0.04) 31px,
            rgba(255, 255, 255, 0.04) 32px
          )`,
        }}
      />

      {/* Background Layer 3: Vibrant ambient glowing radial spots */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(255,0,67,0.18),transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(91,59,232,0.12),transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,230,0,0.06),transparent_70%)] pointer-events-none blur-3xl" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Section Header Card */}
        <div className="border-x border-b border-white/10 px-6 py-10 md:px-10 md:py-16 lg:px-16 lg:py-20 bg-white/[0.02] backdrop-blur-md rounded-t-3xl">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FF0043] animate-pulse" />
              <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2px] uppercase text-[#FF0043]">
                THE ABP JOURNEY
              </span>
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                A Story Of Growth
              </h2>
              <p className="md:text-lg text-base text-white/70 leading-relaxed font-medium">
                Our journey reflects years of collaboration, creativity, and
                dedication to helping indie artists and labels build lasting audience communities.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="md:border-x border-r border-white/10 bg-black/25 backdrop-blur-sm">
          <Timeline items={timelineData} />
        </div>

        {/* Bottom Framing Border */}
        <div className="border-x border-t border-white/10 h-16 md:h-24 bg-white/[0.01] rounded-b-3xl" />
      </div>
    </section>
  );
};

export default TimelineBlock01;
