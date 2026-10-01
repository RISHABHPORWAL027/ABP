"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { servicesData } from "@/data/servicesData";
import { ArrowUpRight, CheckCircle2, Disc } from "lucide-react";

export default function ServicesOverviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-[#FF0043] selection:text-white font-sans overflow-x-hidden">
      <Navbar className="bg-[#FF0043]" />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="w-full bg-[#FF0043] text-white py-20 md:py-28 relative font-sans overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#ffe600] inline-block animate-pulse shadow-md shadow-[#ffe600]/50" />
                <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2.5px] uppercase text-white/95">
                  ALL BY PLAY SERVICES & OFFERINGS
                </span>
              </div>

              <h1 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white mb-6">
                Every service built to move music forward <span className="text-[#ffe600]">.</span>
              </h1>

              <p className="font-sans font-medium text-lg sm:text-2xl text-white/95 max-w-3xl leading-relaxed">
                Explore our 8 specialized music marketing, growth, branding, PR, performance ads, and 360 management services. Click any service to explore detailed scope and deliverables.
              </p>
            </div>
          </div>
        </section>

        {/* 8 Services Grid */}
        <section className="w-full bg-[#0a0a0c] py-20 md:py-28 font-sans border-t border-white/10 relative">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map((service, idx) => (
                <ScrollReveal key={service.slug} direction="up" delay={idx * 80}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group bg-[#14121a] border border-white/15 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#FF0043] hover:bg-white/[0.04] transition-all duration-300 shadow-xl h-full cursor-pointer relative overflow-hidden"
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-space font-extrabold text-sm text-[#FF0043]">
                          {service.num} / 08
                        </span>
                        <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-[#FF0043] group-hover:bg-[#FF0043] text-white flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
                          <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white mb-4 group-hover:text-[#ffe600] transition-colors leading-tight">
                        {service.title}
                      </h2>

                      {/* Short Description */}
                      <p className="font-sans font-medium text-white/75 text-sm sm:text-base leading-relaxed mb-6">
                        {service.shortDesc}
                      </p>

                      {/* Deliverables Preview */}
                      <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                        {service.highlights.slice(0, 2).map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-white/90 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#ffe600] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Tags */}
                    <div>
                      <span className="font-space font-extrabold text-[10px] tracking-widest text-[#FF0043] uppercase block">
                        {service.tags}
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Brief Section */}
        <section className="w-full bg-[#1A1A1A] py-20 text-white font-sans border-t border-white/10">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-6">
                <Disc className="w-4 h-4 text-[#FF0043] animate-spin-slow" />
                <span className="font-space font-extrabold text-xs tracking-[2px] uppercase text-[#FF0043]">
                  START A CONVERSATION
                </span>
              </div>
              <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-white mb-6 tracking-tight">
                Not sure which service fits your release <span className="text-[#ffe600]">?</span>
              </h2>
              <p className="font-sans font-medium text-white/75 text-lg mb-8 leading-relaxed">
                Share your upcoming timeline and goals with us, and we&apos;ll curate the right combination of services.
              </p>
              <Link
                href="/#connect"
                className="inline-flex items-center gap-3 bg-[#FF0043] hover:bg-[#009082] text-white font-sans font-extrabold text-lg px-9 py-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                Share your brief
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
