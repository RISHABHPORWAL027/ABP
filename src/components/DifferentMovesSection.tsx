"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FlipCampaignCard } from "@/components/FlipCampaignCard";
import { TypewriterText } from "@/components/TypewriterText";

export const DifferentMovesSection: React.FC = () => {
  const campaignCards = [
    {
      num: "01",
      category: "CAMPAIGN STRATEGY",
      subtags: "RELEASE POSITIONING · CONTENT DIRECTION · ROLLOUT",
      title: "A release rollout with a reason to listen.",
      footerText: "One connected campaign",
      bgColor: "bg-purple-700",
      textColor: "text-white",
      accentColor: "border-white/40 text-white hover:bg-white hover:text-purple-700",
      backDetails: {
        stat1: "+240%",
        stat1Label: "FIRST-WEEK STREAMS",
        stat2: "4.8M",
        stat2Label: "ORGANIC REACH",
        description: "Custom pre-save funnel, release timeline strategy, and influencer seeding across Spotify & Apple Music.",
      },
    },
    {
      num: "02",
      category: "SPOTIFY GROWTH",
      subtags: "AUDIENCE DATA · PLAYLIST STRATEGY · PROFILE GROWTH",
      title: "Turning discovery into lasting listeners.",
      footerText: "A stronger listener journey",
      bgColor: "bg-[#ffe600]",
      textColor: "text-[#000000]",
      accentColor: "border-black/30 text-black hover:bg-black hover:text-white",
      backDetails: {
        stat1: "185K",
        stat1Label: "NEW SAVES & LIKES",
        stat2: "#12",
        stat2Label: "VIRAL 50 CHART",
        description: "Data-driven playlist pitching, algorithmic trigger acceleration, and targeted canvas ads.",
      },
    },
    {
      num: "03",
      category: "INSTAGRAM & REELS",
      subtags: "CREATIVE EDITS · CREATOR NETWORK · SOCIAL MOMENTUM",
      title: "A social push designed for music culture.",
      footerText: "Content people want to share",
      bgColor: "bg-[#f5f5f0]",
      textColor: "text-[#000000]",
      accentColor: "border-black/30 text-black hover:bg-black hover:text-white",
      backDetails: {
        stat1: "14.2M",
        stat1Label: "REELS IMPRESSIONS",
        stat2: "350+",
        stat2Label: "AUDIO USES",
        description: "Short-form video assets, sound bite optimization, and high-impact creator network distribution.",
      },
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0c] text-white py-24 md:py-32 font-sans relative overflow-hidden">
      {/* Background Image Overlay with Seamless Flow Mask */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/black.png"
          alt="Campaigns Background"
          fill
          className="object-cover object-center opacity-45 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#000000]" />
      </div>

      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF0043] inline-block animate-pulse" />
              <span className="font-space font-extrabold text-xs tracking-[2px] uppercase text-[#FF0043]">
                CAMPAIGNS
              </span>
            </div>

            <h2 className="font-sans font-extrabold text-4xl sm:text-6xl tracking-tight leading-[1.05] text-white mb-6 min-h-[1.1em]">
              <TypewriterText
                words={["Different music. Different moves."]}
                loop={false}
                className="text-white"
                cursorColor="text-[#FF0043]"
              />
            </h2>

            <p className="font-sans font-medium text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
              Take a look at some of the campaigns we&apos;ve worked on — each one built around a different artist, goal, and audience.
            </p>
          </ScrollReveal>
        </div>

        {/* 3D Flip Campaign Cards Stack */}
        <div className="flex flex-col gap-8 mb-16">
          {campaignCards.map((card, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 150}>
              <FlipCampaignCard {...card} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <ScrollReveal direction="up">
          <div className="flex items-center justify-start">
            <a
              href="#connect"
              className="inline-flex items-center gap-2.5 border-2 border-white/60 text-white font-sans font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 ease-out hover:bg-white hover:text-[#000000] hover:border-white hover:scale-[1.03] hover:shadow-xl active:scale-95 cursor-pointer"
            >
              Discuss a campaign
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
