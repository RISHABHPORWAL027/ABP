"use client";

import React, { useRef, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterText } from "@/components/TypewriterText";

interface TiltPopCardProps {
  children: React.ReactNode;
  className?: string;
  isHighlight?: boolean;
}

const TiltPopCard: React.FC<TiltPopCardProps> = ({
  children,
  className,
  isHighlight = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)"
  );
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation (max 7deg)
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    // Card pops out (scale up to 1.035 & translateZ lift)
    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.035) translateZ(20px)`
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)"
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isHovered
          ? "transform 0.12s ease-out, box-shadow 0.2s ease"
          : "transform 0.45s ease-out, box-shadow 0.3s ease",
        transformStyle: "preserve-3d",
      }}
      className={`${className} ${
        isHovered
          ? isHighlight
            ? "shadow-2xl shadow-[#FF0043]/40 z-20"
            : "shadow-2xl shadow-black/15 z-20"
          : ""
      }`}
    >
      {children}
    </div>
  );
};

export const AbpJourneySection: React.FC = () => {
  const journeySteps = [
    {
      subLabel: "JAN 2023",
      title: "All By Play begins.",
      desc: "A founder-led agency with a clear belief: thoughtful strategy makes music travel further.",
      isHighlight: false,
      progress: "33%",
    },
    {
      subLabel: "THE BUILD",
      title: "One campaign at a time.",
      desc: "Expanding from release strategy into social, Spotify, PR, ads, and creative direction.",
      isHighlight: false,
      progress: "66%",
    },
    {
      subLabel: "NOW",
      title: "Across India's music landscape.",
      desc: "Partnering with independent artists, labels, managers, festivals, and music teams.",
      isHighlight: true,
      progress: "100%",
    },
  ];

  return (
    <section className="w-full bg-[#F6F4EB] text-[#111111] py-20 md:py-32 font-sans relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header Block */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <ScrollReveal direction="up">
            {/* Top Indicator Tag */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF0043] inline-block animate-pulse" />
              <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2px] uppercase text-[#FF0043]">
                THE ABP JOURNEY
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-[#111111] mb-6 min-h-[1.1em]">
              <TypewriterText
                words={["Built to move music forward."]}
                loop={false}
                className="text-[#111111]"
                cursorColor="text-[#FF0043]"
              />
            </h2>

            {/* Subtitle Paragraph */}
            <p className="font-sans font-medium text-lg sm:text-2xl text-[#333333] leading-relaxed max-w-3xl">
              Founded in January 2023, All By Play has grown into a music-first, founder-led agency working across indie, label, and Bollywood campaigns.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-Column Interactive Journey Cards with Connecting Timeline */}
        <div className="relative">
          {/* Connecting Background Line across top of cards (Desktop) */}
          <div className="hidden md:block absolute top-[50px] left-[8%] right-[8%] h-[2px] bg-black/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {journeySteps.map((step, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 150}>
                <TiltPopCard
                  isHighlight={step.isHighlight}
                  className={`rounded-[28px] p-8 md:p-10 flex flex-col justify-between min-h-[340px] md:min-h-[380px] cursor-pointer transition-all ${
                    step.isHighlight
                      ? "bg-[#FF0043] text-white shadow-xl shadow-[#FF0043]/20 border border-[#FF0043]"
                      : "bg-[#ECE9DF] text-[#111111] border border-[#DFDACB] shadow-sm hover:border-[#FF0043]/30"
                  }`}
                >
                  <div>
                    {/* Top Concentric Target Dot & Progress Line Header */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          step.isHighlight ? "border-white bg-[#FF0043]" : "border-[#FF0043] bg-[#ECE9DF]"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            step.isHighlight ? "bg-white" : "bg-[#FF0043]"
                          }`}
                        />
                      </div>

                      {/* Progress Line */}
                      <div
                        className={`flex-1 h-[2.5px] rounded-full overflow-hidden ${
                          step.isHighlight ? "bg-white/25" : "bg-black/10"
                        }`}
                      >
                        <div
                          className={`h-full transition-all duration-500 ${
                            step.isHighlight ? "bg-white" : "bg-[#FF0043]"
                          }`}
                          style={{ width: step.progress }}
                        />
                      </div>
                    </div>

                    {/* Sub-label */}
                    <span
                      className={`font-space font-extrabold text-xs tracking-[2px] uppercase inline-block mb-6 ${
                        step.isHighlight ? "text-white" : "text-[#FF0043]"
                      }`}
                    >
                      {step.subLabel}
                    </span>

                    {/* Main Title */}
                    <h3
                      className={`font-sans font-extrabold text-2xl sm:text-3xl tracking-tight leading-snug mb-4 ${
                        step.isHighlight ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className={`font-sans font-medium text-sm sm:text-base leading-relaxed ${
                      step.isHighlight ? "text-white/90" : "text-[#555555]"
                    }`}
                  >
                    {step.desc}
                  </p>
                </TiltPopCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
