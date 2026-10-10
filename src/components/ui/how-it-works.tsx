"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

// Individual step item interface
export interface HowItWorksStep {
  num?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  benefits?: string[];
  color?: "orange" | "blue" | "purple" | "red";
}

// Main component props
export interface HowItWorksProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  steps?: HowItWorksStep[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  showStepNumbers?: boolean;
  baseText?: string;
  revealText?: string;
}

type PinColor = "orange" | "blue" | "purple" | "red";

interface ThemeConfig {
  pinColor: PinColor;
  accentColor: string;
  accentGlow: string;
  bgPanel: string;
  borderPanel: string;
  bulletBg: string;
  tilt: string;
  desktopOffset: string;
}

const THEMES: Record<number, ThemeConfig> = {
  0: {
    pinColor: "orange",
    accentColor: "#FB923C",
    accentGlow: "rgba(249, 115, 22, 0.25)",
    bgPanel: "bg-gradient-to-b from-[#221614] to-[#171216]",
    borderPanel: "border-orange-500/30 hover:border-orange-500/60",
    bulletBg: "#F97316",
    tilt: "-rotate-2 md:-rotate-3",
    desktopOffset: "md:translate-y-0 lg:-translate-y-6", // High
  },
  1: {
    pinColor: "blue",
    accentColor: "#60A5FA",
    accentGlow: "rgba(59, 130, 246, 0.25)",
    bgPanel: "bg-gradient-to-b from-[#131d2e] to-[#111420]",
    borderPanel: "border-blue-500/30 hover:border-blue-500/60",
    bulletBg: "#3B82F6",
    tilt: "rotate-2 md:rotate-3",
    desktopOffset: "md:translate-y-16 lg:translate-y-24", // Lower staggered
  },
  2: {
    pinColor: "purple",
    accentColor: "#C084FC",
    accentGlow: "rgba(168, 85, 247, 0.25)",
    bgPanel: "bg-gradient-to-b from-[#21142c] to-[#15111f]",
    borderPanel: "border-purple-500/30 hover:border-purple-500/60",
    bulletBg: "#A855F7",
    tilt: "-rotate-1.5 md:-rotate-2",
    desktopOffset: "md:translate-y-0 lg:-translate-y-6", // High
  },
};

/**
 * Photorealistic 3D Pushpin (Thumbtack) SVG Component (Dark theme tuned)
 */
const PushPin: React.FC<{
  color?: PinColor;
  className?: string;
}> = ({ color = "orange", className = "" }) => {
  const pinPalettes: Record<
    PinColor,
    { primary: string; dark: string; light: string; highlight: string; glow: string }
  > = {
    orange: {
      primary: "#F97316",
      dark: "#C2410C",
      light: "#FDBA74",
      highlight: "#FFEDD5",
      glow: "rgba(249, 115, 22, 0.4)",
    },
    blue: {
      primary: "#2563EB",
      dark: "#1D4ED8",
      light: "#93C5FD",
      highlight: "#DBEAFE",
      glow: "rgba(37, 99, 235, 0.4)",
    },
    purple: {
      primary: "#9333EA",
      dark: "#7E22CE",
      light: "#D8B4FE",
      highlight: "#F3E8FF",
      glow: "rgba(147, 51, 234, 0.4)",
    },
    red: {
      primary: "#FF0043",
      dark: "#B80030",
      light: "#FFA0B8",
      highlight: "#FFE0E8",
      glow: "rgba(255, 0, 67, 0.4)",
    },
  };

  const palette = pinPalettes[color] || pinPalettes.orange;
  const uid = `dark-${color}`;

  return (
    <div className={cn("relative inline-block select-none pointer-events-none", className)}>
      <svg
        width="36"
        height="46"
        viewBox="0 0 36 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible filter drop-shadow-[0_12px_10px_rgba(0,0,0,0.6)]"
      >
        <defs>
          {/* Gradients for cylindrical 3D plastic shading */}
          <linearGradient id={`grad-head-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.light} />
            <stop offset="45%" stopColor={palette.primary} />
            <stop offset="100%" stopColor={palette.dark} />
          </linearGradient>

          <linearGradient id={`grad-body-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={palette.light} />
            <stop offset="35%" stopColor={palette.primary} />
            <stop offset="85%" stopColor={palette.dark} />
            <stop offset="100%" stopColor={palette.dark} />
          </linearGradient>

          <linearGradient id={`grad-collar-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.light} />
            <stop offset="50%" stopColor={palette.primary} />
            <stop offset="100%" stopColor={palette.dark} />
          </linearGradient>

          <linearGradient id={`grad-needle-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#CBD5E1" />
            <stop offset="80%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
        </defs>

        {/* Ambient shadow cast on the card paper */}
        <ellipse
          cx="22"
          cy="40"
          rx="7.5"
          ry="3.5"
          fill="black"
          fillOpacity="0.75"
          className="blur-[2px]"
        />

        {/* Metal Pin Shaft penetrating into the board */}
        <path d="M17 28 L17 40 L19.5 40 L19.5 28 Z" fill={`url(#grad-needle-${uid})`} />
        <polygon points="17,40 19.5,40 18.25,43" fill="#0F172A" />

        {/* Lower Tapered Base (Plastic) */}
        <path
          d="M12.5 19.5 L15.5 28.5 C15.5 29.5 21 29.5 21 28.5 L24 19.5 Z"
          fill={`url(#grad-body-${uid})`}
        />

        {/* Middle Collar / Grip Flange */}
        <ellipse
          cx="18.25"
          cy="19.5"
          rx="7.5"
          ry="3.2"
          fill={`url(#grad-collar-${uid})`}
        />
        {/* Collar top highlight curve */}
        <path
          d="M11.8 19 C13 17.5 23.5 17.5 24.7 19"
          stroke={palette.highlight}
          strokeWidth="0.9"
          strokeOpacity="0.85"
          fill="none"
        />

        {/* Upper Neck / Waist */}
        <path
          d="M13.5 11.5 C13.5 11.5 15 17 15.5 19 C16.5 19.5 20 19.5 21 19 C21.5 17 23 11.5 23 11.5 Z"
          fill={`url(#grad-body-${uid})`}
        />

        {/* Upper Bulbous Head / Knob */}
        <ellipse
          cx="18.25"
          cy="10.5"
          rx="6.5"
          ry="5.5"
          fill={`url(#grad-head-${uid})`}
        />

        {/* Top Rim Specular Gloss */}
        <ellipse
          cx="16.8"
          cy="8.2"
          rx="2.8"
          ry="1.8"
          fill="white"
          fillOpacity="0.85"
          transform="rotate(-15 16.8 8.2)"
        />
      </svg>
    </div>
  );
};

/**
 * Pinned Dark Note Card Component
 */
interface PinnedCardProps {
  step: HowItWorksStep;
  index: number;
  theme: ThemeConfig;
  cardRef: (el: HTMLDivElement | null) => void;
}

const PinnedCard: React.FC<PinnedCardProps> = ({
  step,
  index,
  theme,
  cardRef,
}) => {
  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative w-full max-w-[320px] sm:max-w-[340px] md:max-w-[330px] lg:max-w-[360px]",
        // Dark outer card
        "bg-[#161520] rounded-2xl sm:rounded-3xl",
        "pt-8 px-3.5 pb-3.5 sm:px-4 sm:pb-4",
        "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85),0_0_20px_rgba(255,255,255,0.02)]",
        "border border-white/10",
        "transition-all duration-400 ease-out",
        "hover:scale-[1.03] hover:rotate-0 hover:border-white/20 hover:z-30",
        theme.tilt,
        theme.desktopOffset
      )}
    >
      {/* 3D Pushpin Centered over the Top Border */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:rotate-6">
        <PushPin color={step.color || theme.pinColor} />
      </div>

      {/* Inner Tinted Dark Note Area */}
      <div
        className={cn(
          "w-full rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-6 lg:p-7 border transition-all duration-300",
          theme.bgPanel,
          theme.borderPanel,
          "group-hover:shadow-[0_0_30px_var(--glow)]"
        )}
        style={
          {
            "--glow": theme.accentGlow,
          } as React.CSSProperties
        }
      >
        {/* Step Number */}
        <div
          className="font-sans font-black text-2xl sm:text-3xl tracking-tight mb-2.5"
          style={{ color: theme.accentColor }}
        >
          {step.num || `0${index + 1}`}
        </div>

        {/* Step Title */}
        <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white tracking-tight mb-2.5 leading-snug">
          {step.title}
        </h3>

        {/* Step Description */}
        <p className="font-sans font-normal text-xs sm:text-sm text-white/70 leading-relaxed min-h-[48px]">
          {step.description}
        </p>

        {/* Benefits Checklist / Key Features */}
        {step.benefits && step.benefits.length > 0 && (
          <ul className="mt-5 pt-4 border-t border-white/10 space-y-2.5">
            {step.benefits.map((benefit, bIdx) => (
              <li
                key={bIdx}
                className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-white/85"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 shadow-sm transition-transform duration-300 group-hover:scale-125"
                  style={{
                    backgroundColor: theme.bulletBg,
                    boxShadow: `0 0 8px ${theme.bulletBg}`,
                  }}
                />
                <span className="leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

/**
 * A responsive "How It Works" section in rich dark theme with horizontal zig-zag layout
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({
  className,
  steps,
  title,
  subtitle,
  showStepNumbers = true,
  baseText,
  revealText,
  ...props
}) => {
  const defaultStepsData: HowItWorksStep[] = [
    {
      num: "01",
      title: "Share the brief",
      description:
        "Tell us about the music, the goals, the timeline, and what kind of support you need.",
      benefits: [
        "Smart campaign understanding",
        "Clear goal alignment",
        "Fast response timeframe",
      ],
      color: "orange",
    },
    {
      num: "02",
      title: "We shape the plan",
      description:
        "We map out the right mix of services, content, and campaign direction based on the project.",
      benefits: [
        "Tailored release strategy",
        "Multi-channel roadmap",
        "Transparent timeline & costs",
      ],
      color: "blue",
    },
    {
      num: "03",
      title: "We execute and refine",
      description:
        "We track what's happening, share the insights, and keep adjusting where needed.",
      benefits: [
        "Real-time performance tracking",
        "Direct communication",
        "Ongoing optimization",
      ],
      color: "purple",
    },
  ];

  const stepsData = steps || defaultStepsData;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [lines, setLines] = useState<
    Array<{ x1: number; y1: number; x2: number; y2: number }>
  >([]);

  // Function to calculate exact dashed lines in horizontal zig-zag and vertical fallback
  const updateLines = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const calculated: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];

    for (let i = 0; i < stepsData.length - 1; i++) {
      const cardA = cardRefs.current[i];
      const cardB = cardRefs.current[i + 1];
      if (!cardA || !cardB) continue;

      const rectA = cardA.getBoundingClientRect();
      const rectB = cardB.getBoundingClientRect();

      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        // Horizontal Zig-Zag: Connect right edge of Card A to left edge of Card B
        const x1 = rectA.right - containerRect.left;
        const y1 = rectA.top + rectA.height * 0.45 - containerRect.top;

        const x2 = rectB.left - containerRect.left;
        const y2 = rectB.top + rectB.height * 0.45 - containerRect.top;

        calculated.push({ x1, y1, x2, y2 });
      } else {
        // Mobile vertical stack: Connect bottom center of Card A to top pin of Card B
        const x1 = rectA.left + rectA.width * 0.5 - containerRect.left;
        const y1 = rectA.bottom - containerRect.top;
        const x2 = rectB.left + rectB.width * 0.5 - containerRect.left;
        const y2 = rectB.top - containerRect.top;

        calculated.push({ x1, y1, x2, y2 });
      }
    }

    setLines(calculated);
  }, [stepsData.length]);

  useEffect(() => {
    updateLines();

    const handleResize = () => {
      updateLines();
    };

    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(() => {
      updateLines();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [updateLines]);

  return (
    <section
      id="how-it-works"
      className={cn(
        "w-full text-white py-24 md:py-32 lg:py-36 font-sans relative overflow-hidden border-y border-white/10",
        className
      )}
      style={{
        backgroundColor: "#0B0A10",
        backgroundImage: `repeating-linear-gradient(
          to bottom,
          transparent,
          transparent 27px,
          rgba(255, 255, 255, 0.035) 27px,
          rgba(255, 255, 255, 0.035) 28px
        )`,
      }}
      {...props}
    >
      {/* Subtle radial ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,0,67,0.1),rgba(255,255,255,0))] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FF0043] animate-pulse" />
            <span className="font-space font-extrabold text-[11px] sm:text-xs tracking-[2px] uppercase text-white/90">
              HOW WE WORK
            </span>
          </div>

          {title !== undefined ? (
            typeof title === "string" ? (
              <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] mb-4">
                {title}
              </h2>
            ) : (
              title
            )
          ) : (
            <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] mb-4">
              A simple way to work together.
            </h2>
          )}

          {subtitle !== undefined ? (
            typeof subtitle === "string" ? (
              <p className="font-sans font-medium text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
                {subtitle}
              </p>
            ) : (
              subtitle
            )
          ) : (
            <p className="font-sans font-medium text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Clear inputs, a tailored rollout plan, and execution that keeps refining as the music travels.
            </p>
          )}
        </div>

        {/* Horizontal Zig-zag Cards Layout with Connecting Dashed Lines */}
        <div
          ref={containerRef}
          className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-32 lg:pb-36"
        >
          {/* SVG Connector Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            {lines.map((l, idx) => (
              <line
                key={idx}
                x1={l.x1}
                y1={l.y1}
                x2={l.x2}
                y2={l.y2}
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
                strokeOpacity="0.25"
              />
            ))}
          </svg>

          {/* Cards Grid: 3 columns horizontally with center card staggered down for the zig-zag */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 lg:gap-14 xl:gap-20 items-start">
            {stepsData.map((step, idx) => {
              const theme = THEMES[idx % 3];

              return (
                <div key={idx} className="flex justify-center w-full">
                  <PinnedCard
                    step={step}
                    index={idx}
                    theme={theme}
                    cardRef={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
