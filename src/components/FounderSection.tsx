"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterText } from "@/components/TypewriterText";

export const FounderSection: React.FC = () => {
  return (
    <div className="w-full font-sans">
      {/* 1. TOP WHITE SECTION: BUILT BY SOMEONE WHO KNOWS THE MUSIC SIDE */}
      <section className="w-full bg-[#FFFFFF] text-[#000000] py-20 md:py-28">
        <div className="max-w-[1380px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Bio Paragraphs */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up">
                <h2 className="font-sans font-black text-4xl sm:text-6xl lg:text-[68px] tracking-tight leading-[1.04] text-[#000000] mb-8">
                  <TypewriterText
                    words={["Built by someone who knows the music side", "Strategy rooted in music experience", "Founded for artists & labels"]}
                    className="text-[#000000]"
                    cursorColor="text-[#FF0043]"
                  />
                </h2>

                {/* Accent Highlighted Intro Sentence */}
                <p className="font-sans font-extrabold text-lg sm:text-2xl text-[#FF0043] leading-snug mb-6 max-w-2xl">
                  All By Play was founded by Dhaval Kothari, a music entrepreneur, ex-Spotify team member, and Berklee alum.
                </p>

                <p className="font-sans font-normal text-base sm:text-lg text-black/70 leading-relaxed mb-6 max-w-2xl">
                  His background in artist partnerships, campaign thinking, and music business helped shape ABP into a company that approaches music marketing with both taste and structure.
                </p>

                <p className="font-sans font-normal text-base sm:text-lg text-black/70 leading-relaxed max-w-2xl">
                  He started the agency because too many good releases were getting lost in weak rollout, poor timing, or campaigns that didn&apos;t understand the music properly.
                </p>
              </ScrollReveal>
            </div>

            {/* Right Column: Quote Block with Animated Progress Line */}
            <div className="lg:col-span-5 pt-4">
              <ScrollReveal direction="left" delay={150}>
                <div className="max-w-md">
                  {/* Animated Progress Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }}
                    className="h-0.5 bg-[#FF0043] mb-6 rounded-full"
                  />

                  {/* Distinct Colored Quote */}
                  <blockquote className="font-playfair italic font-normal text-2xl sm:text-3xl lg:text-[34px] leading-[1.25] text-[#FF0043] mb-8">
                    &ldquo;The campaign should understand the music before it asks people to care.&rdquo;
                  </blockquote>

                  <div className="font-space font-extrabold text-xs tracking-[2px] uppercase text-black/80">
                    DHAVAL KOTHARI · FOUNDER, ALL BY PLAY
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BOTTOM DARK SECTION: WHAT WE BELIEVE */}
      <section className="w-full bg-[#121118] text-white py-20 md:py-28 border-t border-white/10">
        <div className="max-w-[1380px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: What We Believe Statements */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up">
                <h2 className="font-sans font-black text-5xl sm:text-7xl lg:text-[84px] tracking-tight leading-[0.95] mb-12">
                  What we <br />
                  <TypewriterText
                    words={["believe", "stand for", "deliver"]}
                    className="text-[#FF0043]"
                    cursorColor="text-[#FF0043]"
                  />
                </h2>

                <div className="space-y-8 max-w-2xl">
                  <p className="font-sans font-bold text-lg sm:text-2xl text-white/95 leading-relaxed">
                    We believe music should be marketed like something people care about, not something people scroll past.
                  </p>

                  <p className="font-sans font-bold text-lg sm:text-2xl text-white/95 leading-relaxed">
                    We believe strong campaigns come from knowing the artist, the release, and the audience.
                  </p>

                  <p className="font-sans font-bold text-lg sm:text-2xl text-white/95 leading-relaxed">
                    We believe the best work sits somewhere between creative instinct and clear data.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Founder Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <ScrollReveal direction="left" delay={150} className="w-full">
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-[#1A1A1A] border border-white/15 shadow-2xl group">
                  <Image
                    src="/founder-image.png"
                    alt="Dhaval Kothari - Founder of All By Play"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <span className="font-space font-extrabold text-xs text-[#009082] uppercase tracking-[2px] block mb-1">
                      FOUNDER &amp; DIRECTOR
                    </span>
                    <h4 className="font-sans font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                      DHAVAL KOTHARI
                    </h4>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
