"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHeroSection } from "@/components/AboutHeroSection";
import { FounderSection } from "@/components/FounderSection";
import { HowWeWorkSection } from "@/components/HowWeWorkSection";
import { WhatWeBuiltSection } from "@/components/WhatWeBuiltSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-[#FF0043] selection:text-white font-sans overflow-x-hidden">
      {/* Navbar Header */}
      <div className="bg-[#000000] border-b border-white/10 relative z-50">
        <Navbar className="bg-[#000000]" />
      </div>

      <main className="flex-1">
        {/* 1. ABOUT HERO SECTION */}
        <AboutHeroSection />

        {/* 2. FOUNDER SECTION: BUILT BY SOMEONE WHO KNOWS THE MUSIC SIDE + WHAT WE BELIEVE */}
        <section id="story">
          <FounderSection />
        </section>

        {/* 3. HOW WE WORK SECTION (BELOW WHAT WE BELIEVE) */}
        <HowWeWorkSection />

        {/* 4. WHAT WE'VE BUILT SO FAR SECTION (BELOW HOW WE WORK) */}
        <WhatWeBuiltSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
