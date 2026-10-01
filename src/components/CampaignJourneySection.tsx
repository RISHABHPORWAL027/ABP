"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterText } from "@/components/TypewriterText";

export const CampaignJourneySection: React.FC = () => {
  const [modal, setModal] = useState<{ active: boolean; index: number }>({
    active: false,
    index: 0,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Automatically dismiss preview modal when scrolling away from section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.bottom < 50 || rect.top > window.innerHeight - 50) {
        setModal({ active: false, index: 0 });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesList = [
    {
      num: "01",
      slug: "content-social-media",
      title: "Release campaigns",
      desc: "Pre- and post-release support built around your timeline, goals, and what the music actually needs.",
      tags: "STRATEGY / ROLLOUT / REPORTING",
      youtubeId: "FzjBVeOJdug",
    },
    {
      num: "02",
      slug: "content-social-media",
      title: "Instagram & content",
      desc: "Content plans, creative direction, edit-page pushes, and influencer support for stronger social reach.",
      tags: "CONTENT / CREATORS / CULTURE",
      youtubeId: "vsHtDl4Wee4",
    },
    {
      num: "03",
      slug: "spotify-growth-strategy",
      title: "Spotify growth",
      desc: "Data-led plans built around playlists, streams, profile visits, and real audience behaviour.",
      tags: "DISCOVERY / DATA / LISTENERS",
      youtubeId: "NlvLxP9ehWE",
    },
    {
      num: "04",
      slug: "pr-activation-media",
      title: "PR activation",
      desc: "Story-led placements across social, print, digital, radio, television, podcasts, and indie platforms.",
      tags: "NARRATIVE / PRESS / REACH",
      youtubeId: "wo2-ldwHqyQ",
    },
    {
      num: "05",
      slug: "ads-performance-marketing",
      title: "Ads marketing",
      desc: "Targeted campaigns across Instagram, YouTube, lead generation, and redirection channels.",
      tags: "TARGETING / MEDIA / RESULTS",
      youtubeId: "i52TYO13Nyg",
    },
    {
      num: "06",
      slug: "branding-digital-identity",
      title: "Branding support",
      desc: "A clear identity and visual language that helps artists and labels show up consistently.",
      tags: "IDENTITY / DIRECTION / DESIGN",
      youtubeId: "nwXAkF8OFCc",
    },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setModal({ active: false, index: 0 })}
      className="w-full bg-[#0a0a0c] text-white py-24 md:py-32 font-sans relative overflow-hidden border-t border-white/10"
    >
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF0043] inline-block animate-pulse" />
              <span className="font-space font-extrabold text-xs tracking-[2px] uppercase text-[#FF0043]">
                SERVICES
              </span>
            </div>

            <h2 className="font-sans font-extrabold text-4xl sm:text-6xl tracking-tight leading-[1.05] text-white mb-6 min-h-[1.1em]">
              <TypewriterText
                words={["The full campaign journey."]}
                loop={false}
                className="text-white"
                cursorColor="text-[#FF0043]"
              />
            </h2>

            <p className="font-sans font-medium text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl">
              From release-based campaigns to Spotify strategy, PR, and content, every plan is tailored to the artist, audience, and ambition.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Accordion List with Hover Modal Trigger */}
        <div className="flex flex-col border-t border-white/15 relative">
          {servicesList.map((service, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 100}>
              <Link
                href={`/services/${service.slug}`}
                onMouseEnter={() => setModal({ active: true, index: idx })}
                onMouseLeave={() => setModal({ active: false, index: idx })}
                className="group py-8 px-4 sm:px-6 -mx-4 sm:-mx-6 border-b border-white/15 cursor-pointer block transition-colors duration-300 hover:bg-white/[0.04] rounded-2xl"
              >
                <div className="flex items-center justify-between gap-6">
                  {/* Left Column: Number + Content */}
                  <div className="flex items-start gap-6 sm:gap-10 flex-1">
                    <span className="font-space text-xs sm:text-sm font-extrabold text-white/40 pt-2 shrink-0">
                      {service.num}
                    </span>

                    <div className="flex-1 max-w-2xl">
                      <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#ffe600] group-hover:text-[#FF0043] transition-colors mb-3">
                        {service.title}
                      </h3>

                      <p className="font-sans text-sm sm:text-base text-white/80 font-medium leading-relaxed mb-4">
                        {service.desc}
                      </p>

                      <span className="font-space font-bold text-[11px] tracking-widest text-white/40 uppercase block">
                        {service.tags}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Arrow Icon Button with Steady Hit-Area (No Layout Shift) */}
                  <div className="shrink-0 p-2">
                    <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-[#FF0043] group-hover:bg-[#FF0043] text-white flex items-center justify-center transition-colors shadow-lg">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Floating Animated Hover Preview Modal Card */}
      <AnimatePresence>
        {modal.active && (
          <motion.div
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: "-50%",
              y: "-50%",
            }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed pointer-events-none z-50 overflow-hidden rounded-2xl w-[210px] sm:w-[320px] md:w-[380px] h-[140px] sm:h-[220px] md:h-[260px] bg-[#14121a] border-2 border-white/25 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-2 sm:p-2.5"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
              {/* Live Preview Video */}
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${servicesList[modal.index].youtubeId}?autoplay=1&mute=1&loop=1&playlist=${servicesList[modal.index].youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                title={servicesList[modal.index].title}
                className="w-[180%] h-[180%] -translate-x-[22%] -translate-y-[22%] object-cover pointer-events-none opacity-90 scale-110"
              />

              {/* Dark Overlay Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

              {/* Center Circular "View" Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#FF0043] text-white font-space font-black text-xs tracking-widest uppercase flex items-center justify-center shadow-xl shadow-[#FF0043]/50 animate-pulse border border-white/20">
                  VIEW
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-space text-[10px] font-extrabold uppercase tracking-widest text-white/80">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15">
                  {servicesList[modal.index].num} / 06
                </span>
                <span className="text-[#ffe600] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15">
                  {servicesList[modal.index].title}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
