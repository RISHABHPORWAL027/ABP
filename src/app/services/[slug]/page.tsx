"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { servicesData } from "@/data/servicesData";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Disc, Sparkles, Star } from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = use(params);

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find index for pagination / next service
  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];
  const prevService = servicesData[(currentIndex - 1 + servicesData.length) % servicesData.length];

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-[#FF0043] selection:text-white font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Service Hero Section */}
        <section className="w-full bg-[#FF0043] text-white pt-10 pb-20 md:pb-28 relative font-sans overflow-hidden">
          {/* Ambient Background Radial */}
          <div className="absolute inset-0 bg-radial from-transparent via-[#FF0043]/40 to-[#FF0043]/90 pointer-events-none" />

          <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
            {/* Back Navigation Button */}
            <div className="mb-8">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-xs font-space font-extrabold tracking-widest uppercase bg-black/20 hover:bg-black/40 text-white px-4 py-2 rounded-full backdrop-blur-md transition-all border border-white/20"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Services
              </Link>
            </div>

            {/* Service Badge & Number */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-[#ffe600] inline-block animate-pulse shadow-md shadow-[#ffe600]/50" />
              <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2.5px] uppercase text-white/95">
                SERVICE {service.num} / 08
              </span>
            </div>

            {/* Main Service Title */}
            <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white mb-6 max-w-5xl">
              {service.title} <span className="text-[#ffe600]">.</span>
            </h1>

            {/* Service Overview Paragraph */}
            <p className="font-sans font-medium text-lg sm:text-2xl text-white/95 max-w-3xl leading-relaxed mb-10">
              {service.overview}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#brief"
                className="inline-flex items-center justify-center gap-2.5 bg-[#ffe600] text-[#000000] font-sans font-extrabold text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-300 ease-out hover:bg-yellow-300 hover:scale-[1.03] shadow-xl shadow-black/15 active:scale-95"
              >
                Share your brief
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="#scope"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-white/80 text-white font-sans font-extrabold text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-300 ease-out hover:bg-white hover:text-[#000000] hover:scale-[1.03] active:scale-95 shadow-md"
              >
                Explore Deliverables
              </a>
            </div>
          </div>
        </section>

        {/* Key Deliverables & Scope Grid */}
        <section id="scope" className="w-full bg-[#0a0a0c] py-20 md:py-28 font-sans border-t border-white/10 relative">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12">
            <ScrollReveal direction="up">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF0043] animate-pulse" />
                <span className="font-space font-extrabold text-xs tracking-[2px] uppercase text-[#FF0043]">
                  DELIVERABLES & SCOPE OF WORK
                </span>
              </div>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-12">
                What we build for you <span className="text-[#ffe600]">.</span>
              </h2>
            </ScrollReveal>

            {/* Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
              {service.deliverables.map((item, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                  <div className="bg-[#14121a] border border-white/15 rounded-2xl p-8 hover:border-[#FF0043]/50 transition-all duration-300 hover:bg-white/[0.04] flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#FF0043]/15 border border-[#FF0043]/30 flex items-center justify-center text-[#FF0043] font-space font-extrabold text-sm group-hover:bg-[#FF0043] group-hover:text-white transition-colors">
                          0{idx + 1}
                        </div>
                        <CheckCircle2 className="w-6 h-6 text-[#ffe600]" />
                      </div>
                      <h3 className="font-sans font-extrabold text-2xl text-white mb-3 group-hover:text-[#ffe600] transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-sans font-medium text-white/75 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Highlights Callout Card */}
            <div className="bg-gradient-to-r from-[#1A1A1A] via-[#14121a] to-[#FF0043]/20 border border-white/20 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-[#ffe600]" />
                  <span className="font-space font-extrabold text-xs tracking-widest uppercase text-[#ffe600]">
                    KEY HIGHLIGHTS & MECHANISMS
                  </span>
                </div>
                <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white mb-6">
                  Core execution elements:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-white/90 font-medium text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#ffe600] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {service.pricingOrCommitment && (
                  <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-3">
                    <Star className="w-5 h-5 text-[#FF0043]" />
                    <span className="font-space font-extrabold text-sm text-[#ffe600] uppercase tracking-wider">
                      TERMS: {service.pricingOrCommitment}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Featured Artists or Tour Roster (If available) */}
            {service.featuredCampaigns && service.featuredCampaigns.length > 0 && (
              <div className="mb-16">
                <h3 className="font-space font-extrabold text-xs tracking-[2px] uppercase text-[#009082] mb-6">
                  FEATURED CAMPAIGNS & ARTISTS WORKED WITH
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.featuredCampaigns.map((artist, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-white font-sans font-extrabold text-sm tracking-wide hover:border-[#ffe600] hover:text-[#ffe600] transition-colors"
                    >
                      {artist}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Live Campaign Video Showcase */}
            <div className="mb-20">
              <h3 className="font-space font-extrabold text-xs tracking-[2px] uppercase text-white/50 mb-6">
                LIVE CAMPAIGN SHOWCASE
              </h3>
              <div className="relative w-full aspect-[16/9] max-w-4xl rounded-2xl overflow-hidden bg-[#1A1A1A] border-2 border-white/20 shadow-2xl">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${service.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${service.youtubeId}&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                  title={service.title}
                  className="w-full h-full object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>

            {/* Next / Prev Service Pagination */}
            <div className="border-t border-white/15 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link
                href={`/services/${prevService.slug}`}
                className="flex items-center gap-3 text-white/70 hover:text-[#ffe600] transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="font-space text-[10px] uppercase tracking-widest text-white/40 block">
                    PREVIOUS SERVICE
                  </span>
                  <span className="font-sans font-extrabold text-base">{prevService.title}</span>
                </div>
              </Link>

              <Link
                href={`/services/${nextService.slug}`}
                className="flex items-center gap-3 text-white/70 hover:text-[#ffe600] transition-colors group text-right"
              >
                <div>
                  <span className="font-space text-[10px] uppercase tracking-widest text-white/40 block">
                    NEXT SERVICE
                  </span>
                  <span className="font-sans font-extrabold text-base">{nextService.title}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Brief Section */}
        <section id="brief" className="w-full bg-[#1A1A1A] py-20 text-white font-sans border-t border-white/10">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-6">
                <Disc className="w-4 h-4 text-[#FF0043] animate-spin-slow" />
                <span className="font-space font-extrabold text-xs tracking-[2px] uppercase text-[#FF0043]">
                  START YOUR CAMPAIGN
                </span>
              </div>
              <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white mb-6 tracking-tight">
                Ready to take your music further <span className="text-[#ffe600]">?</span>
              </h2>
              <p className="font-sans font-medium text-white/75 text-lg mb-8 leading-relaxed">
                Tell us about your upcoming release or artist goals, and we&apos;ll tailor a custom strategy roadmap.
              </p>
              <Link
                href="/#connect"
                className="inline-flex items-center gap-3 bg-[#FF0043] hover:bg-[#009082] text-white font-sans font-extrabold text-lg px-9 py-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                Discuss {service.title}
                <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
