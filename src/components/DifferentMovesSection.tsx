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
      category: "RELEASE CAMPAIGNS",
      subtags: "RELEASE POSITIONING · CONTENT DIRECTION · ROLLOUT",
      title: "A release rollout with a reason to listen.",
      footerText: "Pre & post-release strategy",
      bgColor: "bg-purple-700",
      textColor: "text-white",
      accentColor: "border-white/40 text-white hover:bg-white hover:text-purple-700",
      serviceLink: "/services#service-02",
      serviceButtonText: "View Services",
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
      category: "INSTAGRAM & REELS",
      subtags: "CREATIVE EDITS · CREATOR NETWORK · SOCIAL MOMENTUM",
      title: "A social push designed for music culture.",
      footerText: "Content people want to share",
      bgColor: "bg-[#FF6B4A]",
      textColor: "text-white",
      accentColor: "border-white/40 text-white hover:bg-white hover:text-[#FF6B4A]",
      serviceLink: "/services#service-04",
      serviceButtonText: "View Services",
      backDetails: {
        stat1: "14.2M",
        stat1Label: "REELS IMPRESSIONS",
        stat2: "350+",
        stat2Label: "AUDIO USES",
        description: "Short-form video assets, sound bite optimization, and high-impact creator network distribution.",
      },
    },
    {
      num: "03",
      category: "SPOTIFY GROWTH",
      subtags: "AUDIENCE DATA · PLAYLIST STRATEGY · PROFILE GROWTH",
      title: "Turning discovery into lasting listeners.",
      footerText: "A stronger listener journey",
      bgColor: "bg-[#ffe600]",
      textColor: "text-[#000000]",
      accentColor: "border-black/30 text-black hover:bg-black hover:text-white",
      serviceLink: "/services#service-05",
      serviceButtonText: "View Services",
      backDetails: {
        stat1: "185K",
        stat1Label: "NEW SAVES & LIKES",
        stat2: "#12",
        stat2Label: "VIRAL 50 CHART",
        description: "Data-driven playlist pitching, algorithmic trigger acceleration, and targeted canvas ads.",
      },
    },
    {
      num: "04",
      category: "PR ACTIVATION",
      subtags: "EDITORIAL REACH · MEDIA OUTREACH · PRESS FEATURES",
      title: "Story-led press that puts the music into culture.",
      footerText: "Multi-channel media reach",
      bgColor: "bg-[#FF0043]",
      textColor: "text-white",
      accentColor: "border-white/40 text-white hover:bg-white hover:text-[#FF0043]",
      serviceLink: "/services#service-03",
      serviceButtonText: "View Services",
      backDetails: {
        stat1: "45+",
        stat1Label: "EDITORIAL FEATURES",
        stat2: "10M+",
        stat2Label: "CULTURAL AUDIENCE",
        description: "Story-led placements across national print, music blogs, digital publications, radio interviews, and podcasts.",
      },
    },
    {
      num: "05",
      category: "ADS MARKETING",
      subtags: "TARGETED MEDIA · CONVERSION FUNNELS · DSP REDIRECTION",
      title: "High-precision ads that convert listeners into fans.",
      footerText: "Data-guided ad spend",
      bgColor: "bg-[#009082]",
      textColor: "text-white",
      accentColor: "border-white/40 text-white hover:bg-white hover:text-[#009082]",
      serviceLink: "/services#service-06",
      serviceButtonText: "View Services",
      backDetails: {
        stat1: "3.8X",
        stat1Label: "STREAMING CONVERSION",
        stat2: "68%",
        stat2Label: "LOWER COST-PER-SAVE",
        description: "High-ROI Instagram conversion ads, YouTube video promos, and smart streaming redirection campaigns.",
      },
    },
    {
      num: "06",
      category: "BRANDING SUPPORT",
      subtags: "VISUAL IDENTITY · ARTIST PERSONA · CREATIVE DIRECTION",
      title: "A visual identity that makes the music unforgettable.",
      footerText: "Consistent across every touchpoint",
      bgColor: "bg-[#f5f5f0]",
      textColor: "text-[#000000]",
      accentColor: "border-black/30 text-black hover:bg-black hover:text-white",
      serviceLink: "/services#service-01",
      serviceButtonText: "View Services",
      backDetails: {
        stat1: "100%",
        stat1Label: "BESPOKE VISUAL DIRECTION",
        stat2: "360°",
        stat2Label: "ACROSS ALL PLATFORMS",
        description: "Custom cover art direction, typography guidelines, stage persona building, and unified social media asset design.",
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
          sizes="100vw"
          className="object-cover object-center opacity-45 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#000000]" />
      </div>

      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal direction="up">
            <div className="flex items-center mb-4">
              <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2px] uppercase text-[#FF0043]">
                CAMPAIGNS
              </span>
            </div>

            <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[56px] 2xl:text-7xl tracking-[0px] leading-[1.1] md:leading-[1.08] lg:leading-[1.06] xl:leading-[1.05] text-white mb-6 min-h-[1.1em]">
              <TypewriterText
                words={["Different music. Different moves."]}
                loop={false}
                className="text-white"
                cursorColor="text-[#FF0043]"
              />
            </h2>

            <p className="font-syne font-normal text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl tracking-[0px]">
              From music marketing and PR to artist management and live experiences, explore the services we bring together to make every move count.
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
              className="inline-flex items-center gap-2.5 border-2 border-white/60 text-white font-dmsans font-bold text-base sm:text-lg tracking-[0px] px-8 py-3.5 rounded-full transition-all duration-300 ease-out hover:bg-white hover:text-[#000000] hover:border-white hover:scale-[1.03] hover:shadow-xl active:scale-95 cursor-pointer"
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
