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
import { CampaignJourneySection } from "@/components/CampaignJourneySection";
import { AbpJourneySection } from "@/components/AbpJourneySection";
import { FounderSection } from "@/components/FounderSection";
import { TestimonialsWithVerticalMarquee } from "@/components/ui/testimonials-with-verticalmarquee";
import { LogoCloudMarquee } from "@/components/ui/logo-cloud-marquee";
import { CountUpNumber } from "@/components/CountUpNumber";
import { TypewriterText } from "@/components/TypewriterText";
import { ArrowUpRight, Play, Disc } from "lucide-react";

export default function Home() {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);

  const showcaseCards = [
    { title: "Sajna Ve", subtitle: "Prateeksha Srivastava ft. Arjun Deswal", category: "MUSIC VIDEO", youtubeId: "FzjBVeOJdug" },
    { title: "Bairan", subtitle: "Silver Strings Music", category: "SINGLE", youtubeId: "vsHtDl4Wee4" },
    { title: "SHEESHA", subtitle: "Mitta Ror ft. Swara Verma", category: "VIRAL REEL", youtubeId: "i52TYO13Nyg" },
    { title: "KASHISH", subtitle: "Ashish Bhatia & Kashish Ratnani", category: "MUSIC VIDEO", youtubeId: "nwXAkF8OFCc" },
    { title: "bargad", subtitle: "sufr ft. Arpit Bala & Toorjo Dey", category: "LYRIC VIDEO", youtubeId: "NlvLxP9ehWE" },
    { title: "Aarzu", subtitle: "Noor, Khan, Madhurxo", category: "OFFICIAL RELEASE", youtubeId: "M5OCLifZK1w" },
    { title: "OOPS", subtitle: "KING ft. Zahrah S Khan", category: "CHAMPAGNE TALK", youtubeId: "wo2-ldwHqyQ" },
  ];

  const tracks = [
    { num: "01", title: "MIDNIGHT HORIZON", tag: "ELECTRONIC / AMBIENT", duration: "3:42" },
    { num: "02", title: "NEON ECHOES", tag: "SYNTHWAVE", duration: "4:15" },
    { num: "03", title: "SYNAPTIC WAVE", tag: "EXPERIMENTAL", duration: "3:08" },
    { num: "04", title: "CHRONO DRIFT", tag: "CINEMATIC", duration: "5:20" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-[#FF0043] selection:text-white font-sans overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Hero Section */}
      <HeroSection />

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
        {/* STATEMENT SECTION (SEAMLESS DARK FLOW) */}
        <section id="about" className="bg-[#0a0a0c] text-white py-24 md:py-32 relative overflow-hidden font-sans">
          {/* Background Image Overlay with Smooth Faded Flow */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/black-redscreen.png"
              alt="Mission Background"
              fill
              className="object-cover object-center opacity-40 mix-blend-screen"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0a0a0c]/40 to-[#0a0a0c]" />
          </div>

          <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">
              {/* Statement Left */}
              <div className="flex-1 lg:max-w-[55%]">
                <ScrollReveal direction="up">
                  <span className="text-[#009082] text-xs font-bold tracking-widest uppercase mb-4 inline-block font-space">
                    MISSION & PHILOSOPHY
                  </span>
                  <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-tight mb-8 text-white min-h-[1.1em]">
                    <TypewriterText
                      words={[
                        "WE TURN GREAT MUSIC INTO CULTURAL MOMENTS.",
                        "CREATIVE STORYTELLING & DATA STRATEGY.",
                        "BRIDGING INDIE ARTISTRY & CULTURE.",
                      ]}
                      className="text-white"
                      cursorColor="text-[#FF0043]"
                    />
                  </h2>
                  <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                    All By Play bridges the gap between independent artistry and mainstream culture. We combine data-driven digital strategy with authentic creative storytelling.
                  </p>
                </ScrollReveal>
              </div>

              {/* Statement Right - Feature Items */}
              <div className="flex-1 w-full flex flex-col justify-center">
                {[
                  { title: "STRATEGY", desc: "Tailored release roadmaps aligned with streaming algorithm signals and listener demographics." },
                  { title: "CULTURE", desc: "Authentic creator partnerships and community-driven content that resonates with fans." },
                  { title: "GROWTH", desc: "Sustainable fanbase expansion with measurable monthly active listeners and venue tickets sold." },
                ].map((item, idx) => (
                  <ScrollReveal key={idx} direction="up" delay={idx * 150}>
                    <div className="border-b border-white/10 py-8 group cursor-pointer transition-colors hover:border-white/20">
                      <div className="flex items-center justify-between">
                        <h3 className="font-space text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white group-hover:text-[#009082] transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-sm text-[#FF0043] font-bold">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-[#a0a0a0] font-sans text-sm mt-3 max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIFFERENT MUSIC. DIFFERENT MOVES SECTION */}
        <DifferentMovesSection />

        {/* SHOWCASE CAROUSEL SECTION */}
        <div id="work" className="pt-16 bg-[#000000] text-white">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12 text-center mb-8">
            <ScrollReveal direction="up">
              <span className="text-[#009082] font-space text-xs font-extrabold tracking-widest uppercase">
                CAMPAIGNS & SHOWCASES
              </span>
              <h3 className="font-sans font-extrabold text-3xl sm:text-5xl uppercase tracking-tight mt-2 text-white">
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

        {/* THE ABP JOURNEY - BUILT TO MOVE MUSIC FORWARD */}
        <AbpJourneySection />

        {/* DISCOGRAPHY & AUDIO EXPERIENCE SECTION */}
        <section id="journey" className="bg-[#1A1A1A] text-white py-24 md:py-32 relative font-sans border-t border-b border-white/10">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              {/* Left Column - Cover / Media */}
              <ScrollReveal direction="right" className="w-full lg:flex-1">
                <div className="relative group max-w-md mx-auto overflow-hidden rounded-2xl border border-white/15">
                  <div className="aspect-square bg-gradient-to-tr from-[#FF0043] via-[#1A1A1A] to-[#009082]/40 flex flex-col justify-end p-8">
                    <Disc className="w-16 h-16 text-[#009082] animate-spin-slow mb-4" />
                    <span className="text-xs font-bold text-[#009082] tracking-widest uppercase mb-1 font-space">
                      FEATURED CAMPAIGN AUDIOS
                    </span>
                    <h3 className="text-3xl font-extrabold uppercase tracking-tight text-white font-sans">
                      STRATEGY IN MOTION
                    </h3>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column - Tracklist */}
              <div className="w-full lg:flex-1">
                <ScrollReveal direction="up">
                  <span className="text-[#FF0043] text-xs font-bold tracking-widest uppercase mb-2 block font-space">
                    SOUND & CAMPAIGN DISCOGRAPHY
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight mb-8 text-white font-sans">
                    EXPLORE THE SOUND <span className="text-[#009082]">.</span>
                  </h2>
                </ScrollReveal>

                <div className="flex flex-col border-t border-white/15">
                  {tracks.map((track, idx) => (
                    <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                      <div
                        onClick={() => setActiveTrack(activeTrack === idx ? null : idx)}
                        className={`group flex items-center justify-between py-6 border-b border-white/15 cursor-pointer transition-all ${
                          activeTrack === idx ? "text-[#009082] pl-2" : "text-[#f5f5f3] hover:text-[#009082]"
                        }`}
                      >
                        <div className="flex items-center gap-6">
                          <span className="text-xs font-bold text-[#f5f5f3]/40">
                            {track.num}
                          </span>
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight font-sans">
                              {track.title}
                            </h4>
                            <span className="text-[10px] text-[#FF0043] font-bold tracking-wider uppercase font-space">
                              {track.tag}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="text-xs text-[#a0a0a0] font-sans">
                            {track.duration}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#FF0043] text-[#000000] group-hover:text-white flex items-center justify-center transition-colors">
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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

        {/* FOUNDER SECTION */}
        <FounderSection />

        {/* TRUSTED BY LABELS - LOGO CLOUD MARQUEE */}
        <LogoCloudMarquee />
      </main>

      {/* Footer / Connect with us */}
      <Footer />
    </div>
  );
}
