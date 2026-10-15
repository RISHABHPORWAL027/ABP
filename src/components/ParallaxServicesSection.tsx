"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, TrendingUp, Award, ExternalLink } from "lucide-react";

interface ParallaxSectionData {
  id: number;
  badge: string;
  badgeColor?: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  reverse: boolean;
  metric?: string;
}

interface ParallaxServicesSectionProps {
  heading?: string;
  subheading?: string;
  sections?: ParallaxSectionData[];
}

const defaultSections: ParallaxSectionData[] = [
  {
    id: 1,
    badge: "SPOTIFY TOP SONGS INDIA",
    badgeColor: "#7CFF6B",
    title: "Peaked at #2 Nationwide",
    subtitle: "Alfaaz — Hamza Malik & Zain Zohaib",
    description:
      "A strategic PR campaign and algorithmic playlist activation propelled 'Alfaaz' by Hamza Malik and Zain Zohaib to #2 on the Spotify Top Songs India Chart, competing directly alongside major label releases.",
    imageUrl: "/services/spotify/alfaaz-spotify-chart-02-peak.jpeg",
    reverse: false,
    metric: "PEAK #2",
  },
  {
    id: 2,
    badge: "OFFICIAL ASIAN MUSIC CHART",
    badgeColor: "#FFE600",
    title: "Official Asian Chart Peak",
    subtitle: "Global Diaspora Reach",
    description:
      "Synchronized digital press coverage, radio features, and creator audio adoption expanded the release across borders, debuting and peaking at #5 on the Official Asian Music Chart.",
    imageUrl: "/services/spotify/alfaaz-asian-music-chart-05.jpeg",
    reverse: true,
    metric: "PEAK #5",
  },
];

const ParallaxSectionItem: React.FC<{ section: ParallaxSectionData }> = ({ section }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const opacityContent = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const clipProgress = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const translateContent = useTransform(scrollYProgress, [0, 1], [-40, 0]);

  return (
    <div
      ref={sectionRef}
      className={`min-h-[75vh] flex flex-col md:flex-row items-center justify-center md:gap-24 lg:gap-36 gap-12 py-16 ${
        section.reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content Column */}
      <motion.div style={{ y: translateContent }} className="max-w-lg">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-space font-extrabold uppercase tracking-widest mb-4">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: section.badgeColor || "#7CFF6B" }}
          />
          <span style={{ color: section.badgeColor || "#7CFF6B" }}>{section.badge}</span>
        </div>

        <div className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-[1.05]">
          {section.title}
        </div>

        {section.subtitle && (
          <div className="font-space font-bold text-sm sm:text-base text-[#FFE600] mt-3 uppercase tracking-wider">
            {section.subtitle}
          </div>
        )}

        <motion.p
          style={{ y: translateContent }}
          className="text-white/75 max-w-lg mt-6 font-sans font-medium text-base sm:text-lg leading-relaxed"
        >
          {section.description}
        </motion.p>

        {section.metric && (
          <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
            <span className="font-sans font-black text-2xl text-[#7CFF6B]">
              {section.metric}
            </span>
            <span className="font-space text-xs text-white/50 uppercase tracking-wider">
              Verified Chart Proof • All By Play
            </span>
          </div>
        )}
      </motion.div>

      {/* Image with Clip-Path Parallax Animation */}
      <motion.div
        style={{
          opacity: opacityContent,
          clipPath: clipProgress,
        }}
        className="relative group"
      >
        <div className="relative w-64 sm:w-72 md:w-80 aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 p-2 group-hover:border-[#7CFF6B] transition-colors duration-300">
          <img
            src={section.imageUrl}
            className="w-full h-full object-contain rounded-2xl"
            alt={section.title}
          />
        </div>
      </motion.div>
    </div>
  );
};

export const ParallaxServicesSection: React.FC<ParallaxServicesSectionProps> = ({
  heading = "CASE STUDY: ALFAAZ",
  subheading = "Scroll to explore the verified chart climb",
  sections = defaultSections,
}) => {
  return (
    <div className="w-full bg-[#07070A] text-white font-sans overflow-hidden">
      {/* Section Intro Banner */}
      <div className="py-16 flex flex-col items-center justify-center text-center px-6">
        <span className="font-space font-extrabold text-xs text-[#7CFF6B] uppercase tracking-[3px] mb-3">
          VERIFIED CAMPAIGN EVIDENCE
        </span>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight max-w-3xl leading-[1.02]">
          {heading}
        </h2>
        <p className="mt-6 flex items-center gap-2 text-xs sm:text-sm font-space font-bold uppercase tracking-wider text-white/60">
          <span>{subheading}</span>
          <ArrowDown size={15} className="animate-bounce text-[#7CFF6B]" />
        </p>
      </div>

      {/* Parallax Alternating Rows */}
      <div className="max-w-[1380px] mx-auto px-6 md:px-12">
        {sections.map((section) => (
          <ParallaxSectionItem key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};
