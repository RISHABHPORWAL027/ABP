"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Disc, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceTicketData {
  num: string;
  slug?: string;
  badge: string;
  bg: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  stubTitle?: string;
  stubSubtitle?: string;
  p1: string;
  p2?: string;
  highlights: string[];
  caseStudyNote?: string;
  isFeaturedCaseStudy?: boolean;
}

interface AdmitOneTicketProps {
  service: ServiceTicketData;
  className?: string;
  onBookClick?: (service: ServiceTicketData) => void;
}

export const AdmitOneTicketCard: React.FC<AdmitOneTicketProps> = ({
  service,
  className,
  onBookClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rX = ((y - centerY) / centerY) * -6; // max 6deg tilt
    const rY = ((x - centerX) / centerX) * 6;

    setRotateX(rX);
    setRotateY(rY);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const stubTitle = service.stubTitle || "CAMPAIGN SPEC";
  const stubSubtitle = service.stubSubtitle || "FULL EXECUTION & ROLLOUT";
  const targetSlug = service.slug || (service.num === "05" ? "spotify" : `service-${service.num}`);
  const targetUrl = `/services/${targetSlug}`;
  const isSpotify = service.num === "05" || service.slug === "spotify";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative w-full rounded-3xl transition-transform duration-200 ease-out perspective-1000 group select-none",
        className
      )}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      {/* Ticket / Spec Card Outer Wrapper */}
      <div
        className={cn(
          "relative w-full rounded-3xl overflow-hidden shadow-2xl border border-black/15 flex flex-col lg:flex-row transition-all duration-300",
          service.bg
        )}
      >
        {/* Dynamic Glare Reflection Overlay */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            opacity: glarePos.opacity,
          }}
        />

        {/* Dithered / Grain Noise Texture Background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none z-0 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* --- MAIN SPEC SECTION (LEFT / BODY) --- */}
        <div className="relative z-10 flex-1 p-8 sm:p-10 md:p-12 flex flex-col justify-between">
          {/* Header Bar */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="font-space font-extrabold text-xs tracking-widest uppercase opacity-80 px-3 py-1 rounded-full border border-current/20">
                  SERVICE {service.num}
                </span>
                <span
                  className="font-space font-extrabold text-xs tracking-[2px] uppercase px-3 py-1 rounded-full shadow-md"
                  style={{
                    backgroundColor: service.badgeBg,
                    color: service.badgeText,
                  }}
                >
                  {service.badge}
                </span>
              </div>

              <div className="flex items-center gap-1.5 opacity-70 font-space font-bold text-xs tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#ffe600]" />
                <span>CAMPAIGN SPEC</span>
              </div>
            </div>

            {/* Featured Case Study Badge for Spotify */}
            {isSpotify && (
              <div className="mb-5">
                <Link
                  href={targetUrl}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/90 text-[#ffe600] hover:bg-black font-space font-extrabold text-xs tracking-wider border border-[#ffe600]/40 shadow-lg group/badge transition-transform hover:scale-[1.02]"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1DB954] animate-pulse" />
                  <span>🔥 FEATURED CASE STUDY: ALFAAZ (#2 SPOTIFY INDIA)</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5" />
                </Link>
              </div>
            )}

            {/* Title with link to service page */}
            <Link href={targetUrl} className="group/title block">
              <h3 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6 group-hover/title:underline decoration-current/40 underline-offset-8 transition-all">
                {service.title}
              </h3>
            </Link>

            {/* Description Paragraphs */}
            <div className="space-y-4 font-sans text-base sm:text-lg opacity-90 leading-relaxed max-w-3xl mb-8">
              <p>{service.p1}</p>
              {service.p2 && <p>{service.p2}</p>}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-6 border-t border-b border-current/15 mb-8">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 font-bold text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-current/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={targetUrl}
                className="inline-flex items-center gap-2.5 font-sans font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-full bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-xl group/exp cursor-pointer"
              >
                <span>{isSpotify ? "View Case Study & Details" : "Explore Service Page"}</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform group-hover/exp:translate-x-0.5 group-hover/exp:-translate-y-0.5" />
              </Link>

              {onBookClick ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookClick(service);
                  }}
                  className="inline-flex items-center gap-2 font-sans font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-full bg-black/15 hover:bg-black hover:text-white transition-all duration-300 shadow-md group/btn cursor-pointer border border-current/25"
                >
                  <span>Book this service</span>
                </button>
              ) : (
                <Link
                  href="/#connect"
                  className="inline-flex items-center gap-2 font-sans font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-full bg-black/15 hover:bg-black hover:text-white transition-all duration-300 shadow-md group/btn cursor-pointer border border-current/25"
                >
                  <span>Book this service</span>
                </Link>
              )}
            </div>

            <span className="font-space font-extrabold text-xs tracking-widest opacity-60 uppercase hidden sm:inline-block">
              ALL BY PLAY / ARTIST & LABEL SERVICES
            </span>
          </div>
        </div>

        {/* --- PERFORATED DIVIDER LINE & NOTCHES --- */}
        <div className="relative flex lg:flex-col items-center justify-between z-20">
          {/* Top Notch Cutout */}
          <div className="hidden lg:block absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFFFFF] shadow-inner z-30" />
          
          {/* Mobile Left Notch */}
          <div className="lg:hidden absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FFFFFF] shadow-inner z-30" />

          {/* Perforated Dashed Line */}
          <div className="w-full lg:w-0 lg:h-full border-b-2 lg:border-r-2 border-dashed border-current/30 my-4 lg:my-0" />

          {/* Bottom Notch Cutout */}
          <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFFFFF] shadow-inner z-30" />

          {/* Mobile Right Notch */}
          <div className="lg:hidden absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FFFFFF] shadow-inner z-30" />
        </div>

        {/* --- CAMPAIGN SCOPE STUB (RIGHT SECTION) --- */}
        <div className="relative z-10 w-full lg:w-[280px] p-8 lg:p-10 flex flex-col justify-between items-center lg:items-start bg-black/10 backdrop-blur-sm border-t lg:border-t-0 lg:border-l border-current/10">
          <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <Disc className="w-5 h-5 animate-spin-slow opacity-80" />
              <span className="font-space font-extrabold text-xs tracking-[3px] uppercase opacity-90">
                SPEC #{service.num}
              </span>
            </div>

            {/* Dynamic Specific Campaign Deliverable Header */}
            <div className="font-sans font-extrabold text-2xl lg:text-3xl uppercase tracking-wider mb-2">
              {stubTitle}
            </div>
            <p className="font-sans font-semibold text-xs opacity-80 mb-6 uppercase tracking-wider">
              {stubSubtitle}
            </p>

            {/* Barcode Graphic */}
            <div className="w-full bg-white/95 p-4 rounded-xl shadow-md flex flex-col items-center justify-center gap-1 text-black my-4">
              {/* Programmatic Barcode Lines */}
              <div className="w-full h-12 flex items-center justify-between gap-[2px] px-1">
                {[
                  3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 4, 1, 3, 2, 4, 1, 3, 2, 1, 4
                ].map((width, i) => (
                  <div
                    key={i}
                    className="h-full bg-black rounded-sm"
                    style={{ width: `${width * 2}px` }}
                  />
                ))}
              </div>
              <span className="font-mono text-[10px] tracking-[4px] uppercase font-bold text-black/70">
                ABP-SPEC-2026-{service.num}
              </span>
            </div>

            <Link
              href={targetUrl}
              className="w-full mt-2 py-2 px-3 rounded-xl bg-black/80 hover:bg-black text-white font-space font-extrabold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md group/stub"
            >
              <span>{isSpotify ? "View Case Study" : "Open Spec"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/stub:translate-x-0.5 group-hover/stub:-translate-y-0.5" />
            </Link>
          </div>

          <div className="w-full pt-4 border-t border-current/20 flex items-center justify-between text-[11px] font-space font-bold opacity-75 uppercase">
            <span>SERIES 2026</span>
            <span>ACTIVE ROLLOUT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
