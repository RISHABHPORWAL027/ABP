"use client";

import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterText } from "@/components/TypewriterText";

export const HowWeWorkSection: React.FC = () => {
  const steps = [
    {
      label: "Understand",
      detail: "The music, goal, timing, and context.",
    },
    {
      label: "Shape",
      detail: "The right campaign and creative mix.",
    },
    {
      label: "Move",
      detail: "Execute, learn, and keep refining.",
    },
  ];

  return (
    <section className="w-full bg-white font-sans overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">
        {/* Left Column: Video with "Listen first. Build second." caption */}
        <div className="lg:col-span-6 relative min-h-[450px] lg:min-h-full bg-[#111111] group overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          >
            <source src="/how-we-work.mp4" type="video/mp4" />
          </video>

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

          {/* Bottom Left Caption */}
          <div className="absolute bottom-8 left-8 right-8 z-10 pointer-events-none">
            <ScrollReveal direction="up">
              <p className="font-sans italic font-medium text-xl sm:text-2xl md:text-3xl text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <TypewriterText
                  words={["Listen first. Build second.", "Strategy shaped around the music", "Built for long-term growth"]}
                  className="text-white"
                  cursorColor="text-[#FF0043]"
                />
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Column: Red Brand Container (#FF0043) */}
        <div className="lg:col-span-6 bg-[#FF0043] text-white p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center">
          <ScrollReveal direction="up">
            {/* Headline */}
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[56px] 2xl:text-7xl tracking-tight leading-[1.1] md:leading-[1.08] lg:leading-[1.06] xl:leading-[1.05] mb-8">
              How we <br />
              work
            </h2>

            {/* Main Paragraph 1 */}
            <p className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-6 max-w-xl">
              We don&apos;t force every project into the same shape. Some need release support. Some need social energy. Some need Spotify focus. Some need all of it together.
            </p>

            {/* Main Paragraph 2 */}
            <p className="font-sans font-medium text-base sm:text-lg text-white/90 leading-relaxed mb-12 max-w-xl">
              So we start by understanding the music, the goal, and the context, then build the campaign around that.
            </p>

            {/* 3 Step Divider Rows */}
            <div className="border-t border-white/30 space-y-0">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="py-6 border-b border-white/30 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
                >
                  <div className="sm:col-span-5 font-sans font-bold text-xl sm:text-2xl text-white">
                    {step.label}
                  </div>
                  <div className="sm:col-span-7 font-sans font-medium text-sm sm:text-base text-white/90">
                    {step.detail}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
