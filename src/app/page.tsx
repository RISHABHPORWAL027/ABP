import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { ArtistsWorkedWithSection } from "@/components/ArtistsWorkedWithSection";
import { DifferentMovesSection } from "@/components/DifferentMovesSection";
import { AbpJourneySection } from "@/components/AbpJourneySection";
import { TestimonialsWithVerticalMarquee } from "@/components/ui/testimonials-with-verticalmarquee";
import { LogoCloudMarquee } from "@/components/ui/logo-cloud-marquee";
import { CountUpNumber } from "@/components/CountUpNumber";
import { getArtistSignImagesFromDisk } from "@/lib/artist-signs-server";

export default function Home() {
  const artistImages = getArtistSignImagesFromDisk();

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-[#FF0043] selection:text-white font-sans overflow-x-hidden">
      {/* Unified Hero Header Container with Dark Crimson Radial Gradient */}
      <div className="relative w-full overflow-hidden bg-[#0c0104]">
        {/* Background Image Layer & Radial Vignette */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/hero-gradient-bg-hd.webp"
            alt="Hero Background Gradient"
            fill
            priority
            sizes="100vw"
            quality={100}
            className="object-cover object-top"
          />
          {/* Subtle radial blend overlay to ensure deep velvety transition at edges */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-screen opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 16%, #781023 0%, rgba(96, 14, 28, 0.4) 45%, transparent 75%)",
            }}
          />
        </div>

        <Navbar className="bg-transparent relative z-20" />
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
        {/* DIFFERENT MUSIC. DIFFERENT MOVES SECTION */}
        <DifferentMovesSection />

        {/* ARTIST WE HAVE WORKED WITH INFINITE SCROLL SECTION */}
        <ArtistsWorkedWithSection initialImages={artistImages} />

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
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-6xl font-extrabold text-[#FF0043] tracking-tighter mb-2 font-space">
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
