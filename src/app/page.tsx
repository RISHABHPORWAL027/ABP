"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MagneticButton } from "@/components/MagneticButton";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { Curved3DCardCarousel } from "@/components/Curved3DCardCarousel";
import { DifferentMovesSection } from "@/components/DifferentMovesSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { CampaignJourneySection } from "@/components/CampaignJourneySection";
import { AbpJourneySection } from "@/components/AbpJourneySection";
import { TestimonialsWithVerticalMarquee } from "@/components/ui/testimonials-with-verticalmarquee";
import { LogoCloudMarquee } from "@/components/ui/logo-cloud-marquee";
import { CountUpNumber } from "@/components/CountUpNumber";
import { TypewriterText } from "@/components/TypewriterText";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const showcaseCards = [
    { title: "Sajna Ve", subtitle: "Prateeksha Srivastava ft. Arjun Deswal", category: "MUSIC VIDEO", youtubeId: "FzjBVeOJdug" },
    { title: "Bairan", subtitle: "Silver Strings Music", category: "SINGLE", youtubeId: "vsHtDl4Wee4" },
    { title: "SHEESHA", subtitle: "Mitta Ror ft. Swara Verma", category: "VIRAL REEL", youtubeId: "i52TYO13Nyg" },
    { title: "KASHISH", subtitle: "Ashish Bhatia & Kashish Ratnani", category: "MUSIC VIDEO", youtubeId: "nwXAkF8OFCc" },
    { title: "bargad", subtitle: "sufr ft. Arpit Bala & Toorjo Dey", category: "LYRIC VIDEO", youtubeId: "NlvLxP9ehWE" },
    { title: "Aarzu", subtitle: "Noor, Khan, Madhurxo", category: "OFFICIAL RELEASE", youtubeId: "M5OCLifZK1w" },
    { title: "OOPS", subtitle: "KING ft. Zahrah S Khan", category: "CHAMPAGNE TALK", youtubeId: "wo2-ldwHqyQ" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-[#FF0043] selection:text-white font-sans overflow-x-hidden">
      {/* Unified Hero Header Container */}
      <div className="bg-[#FF0043]">
        <Navbar className="bg-[#FF0043]" />
        <HeroSection />
      </div>

      {/* Marquee Ribbon Banner at base of Hero */}
      <MarqueeBanner
        items={[
          "BRAND STRATEGY",
          "RELEASE CAMPAIGNS",
          "INSTAGRAM CONTENT",
          "SPOTIFY GROWTH",
          "PR ACTIVATION",
          "MUSIC-FIRST MARKETING",
        ]}
      />

      <main className="flex-1">
        {/* WHAT WE DO SECTION */}
        <WhatWeDoSection />

        {/* DIFFERENT MUSIC. DIFFERENT MOVES SECTION */}
        <DifferentMovesSection />

        {/* SHOWCASE CAROUSEL SECTION */}
        <div id="work" className="pt-16 bg-[#000000] text-white">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12 text-center mb-8">
            <ScrollReveal direction="up">
              <span className="text-[#009082] font-space text-xs font-extrabold tracking-widest uppercase">
                CAMPAIGNS & SHOWCASES
              </span>
              <h3 className="font-sans font-extrabold text-2xl sm:text-5xl uppercase tracking-tight mt-2 text-white">
                FEATURED REELS & RESULTS
              </h3>
            </ScrollReveal>
          </div>

          {/* Carousel Container */}
          <div className="w-full pb-12">
            <Curved3DCardCarousel cards={showcaseCards} speed={1.2} />
          </div>
        </div>

        {/* THE FULL CAMPAIGN JOURNEY SECTION */}
        <CampaignJourneySection />

        {/* THE ABP JOURNEY SECTION */}
        <AbpJourneySection />

        {/* METRICS & STATS SECTION WITH ANIMATED COUNT UP */}
        <section className="bg-white text-[#000000] py-24 border-t border-b border-black/10 font-sans">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { end: 50, suffix: "M+", label: "TOTAL STREAMS GENERATED" },
                { end: 120, suffix: "+", label: "MUSIC CAMPAIGNS" },
                { end: 35, suffix: "+", label: "CHARTING RELEASES" },
                { end: 100, suffix: "%", label: "ARTIST RETENTION" },
              ].map((stat, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                  <div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FF0043] tracking-tighter mb-2 font-space">
                      <CountUpNumber end={stat.end} suffix={stat.suffix} duration={2200} />
                    </div>
                    <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#000000]/75">
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT REVIEWS & TESTIMONIALS VERTICAL MARQUEE */}
        <TestimonialsWithVerticalMarquee />

        {/* TRUSTED BY LABELS - LOGO CLOUD MARQUEE */}
        <LogoCloudMarquee />
      </main>

      {/* Footer / Connect with us */}
      <Footer />
    </div>
  );
}
