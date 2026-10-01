"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Globe from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

// Reusable ScrollGlobe component following shadcn/ui patterns
export interface ScrollGlobeProps {
  sections?: {
    id: string;
    badge?: string;
    title: string;
    subtitle?: string;
    description: string;
    align?: "left" | "center" | "right";
    features?: { title: string; description: string }[];
    actions?: { label: string; variant: "primary" | "secondary"; onClick?: () => void }[];
  }[];
  globeConfig?: {
    positions: {
      top: string;
      left: string;
      scale: number;
    }[];
  };
  className?: string;
}

const defaultGlobeConfig = {
  positions: [
    { top: "50%", left: "75%", scale: 1.3 }, // Hero: Right side, balanced
    { top: "25%", left: "30%", scale: 1.0 }, // Innovation: Left side, subtle
    { top: "20%", left: "80%", scale: 1.6 }, // Discovery: Right side, large
    { top: "50%", left: "50%", scale: 1.7 }, // Founder / Future: Center backdrop
  ],
};

const parsePercent = (str: string): number => parseFloat(str.replace("%", ""));

export function ScrollGlobe({ sections, globeConfig = defaultGlobeConfig, className }: ScrollGlobeProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [globeTransform, setGlobeTransform] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const animationFrameId = useRef<number | undefined>(undefined);

  const displaySections = useMemo(() => {
    if (sections && sections.length > 0) return sections;
    return [
      {
        id: "how-we-work",
        badge: "How We Work",
        title: "Empowering Musicians & Labels",
        subtitle: "OUR CORE OBJECTIVE",
        description:
          "The All By Play team's industry expertise, musical competence and creative flair converge at the common objective of empowering musicians to achieve the recognition they truly deserve. We start all our campaigns with a deep understanding of client goals, budgets, and duration of the retainership.",
        align: "left" as const,
        features: [
          {
            title: "Goal & Budget Alignment",
            description: "Campaigns built from day one around clear objectives, tailored budgets, and flexible retainer timelines.",
          },
          {
            title: "Musical & Industry Competence",
            description: "Merging deep music understanding with algorithmic data to unlock real audience growth across platforms.",
          },
        ],
        actions: [
          {
            label: "Explore Our Work",
            variant: "primary" as const,
            onClick: () => {
              if (typeof window !== "undefined") window.location.href = "/#work";
            },
          },
          {
            label: "View All Services",
            variant: "secondary" as const,
            onClick: () => {
              if (typeof window !== "undefined") window.location.href = "/services";
            },
          },
        ],
      },
      {
        id: "strategy-retargeting",
        badge: "Strategy & Execution",
        title: "It's Not Just About One Song",
        subtitle: "WEEKLY 1-ON-1 SESSIONS",
        description:
          "When you work with us, there are weekly one-on-one sessions where we analyse and brainstorm on active growth retargeting. We build long-term momentum that transforms single release spikes into lasting listener communities.",
        align: "right" as const,
        features: [
          {
            title: "Weekly 1-on-1 Brainstorming",
            description: "Continuous strategic feedback sessions to evaluate active campaigns, pivot creatives, and optimize ad setups.",
          },
          {
            title: "Active Growth Retargeting",
            description: "Funneling casual track streamers and reel viewers into dedicated, long-term profile followers.",
          },
        ],
      },
      {
        id: "data-insights",
        badge: "Data & Transparency",
        title: "Your Data, Demystified",
        subtitle: "WHAT WORKED & WHAT'S NEXT",
        description:
          "At the end of each project, we provide the most essential thing artists usually overlook: YOUR DATA! We offer proper insights into what worked and what did not work for you, and what is projected to be helpful for future releases.",
        align: "left" as const,
        features: [
          {
            title: "Complete Campaign Analytics",
            description: "Granular reports mapping audience demographics, stream sources, Spotify listener retention, and ad conversion rates.",
          },
          {
            title: "Future Release Blueprint",
            description: "Data-backed recommendations and strategic roadmaps for your upcoming singles, EPs, and tour announcements.",
          },
        ],
      },
      {
        id: "founder-story",
        badge: "Founder Story",
        title: "Meet Dhaval Kothari",
        subtitle: "ARTIST & MUSIC BUSINESS PROFESSIONAL",
        description:
          "Dhaval Kothari is an artist and a music business professional. From his student days at Berklee College of Music, Valencia, to being a former team member in Artists & Labels Partnerships at Spotify, Dhaval has an industry experience of over 6 years, working with 10 lakh+ indie artists, international labels, and Bollywood projects. Based on rich first-hand experiences, Dhaval founded All By Play in early 2022 to fulfill the much-needed role of providing musicians and labels with proper resources.",
        align: "center" as const,
        actions: [
          {
            label: "Get In Touch",
            variant: "primary" as const,
            onClick: () => {
              if (typeof window !== "undefined") window.location.href = "mailto:contact@allbyplay.com";
            },
          },
          {
            label: "Back to Home",
            variant: "secondary" as const,
            onClick: () => {
              if (typeof window !== "undefined") window.location.href = "/";
            },
          },
        ],
      },
    ];
  }, [sections]);

  const calculatedPositions = useMemo(() => {
    return globeConfig.positions.map((pos) => ({
      top: parsePercent(pos.top),
      left: parsePercent(pos.left),
      scale: pos.scale,
    }));
  }, [globeConfig.positions]);

  const updateScrollPosition = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);

    setScrollProgress(progress);

    const viewportCenter = window.innerHeight / 2;
    let newActiveSection = 0;
    let minDistance = Infinity;

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          newActiveSection = index;
        }
      }
    });

    const posIndex = Math.min(newActiveSection, calculatedPositions.length - 1);
    const currentPos = calculatedPositions[posIndex];
    const transform = `translate3d(${currentPos.left}vw, ${currentPos.top}vh, 0) translate3d(-50%, -50%, 0) scale3d(${currentPos.scale}, ${currentPos.scale}, 1)`;

    setGlobeTransform(transform);
    setActiveSection(newActiveSection);
  }, [calculatedPositions]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        animationFrameId.current = requestAnimationFrame(() => {
          updateScrollPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollPosition();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [updateScrollPosition]);

  useEffect(() => {
    const initialPos = calculatedPositions[0];
    const initialTransform = `translate3d(${initialPos.left}vw, ${initialPos.top}vh, 0) translate3d(-50%, -50%, 0) scale3d(${initialPos.scale}, ${initialPos.scale}, 1)`;
    setGlobeTransform(initialTransform);
  }, [calculatedPositions]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full max-w-screen overflow-x-hidden min-h-screen bg-[#0a0a0c] text-white font-sans",
        className
      )}
    >
      {/* Top Brand Red Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div
          className="h-full bg-[#FF0043] will-change-transform"
          style={{
            transform: `scaleX(${scrollProgress})`,
            transformOrigin: "left center",
            transition: "transform 0.15s ease-out",
          }}
        />
      </div>

      {/* Floating Side Navigation Dots */}
      <div className="hidden sm:flex fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="space-y-4 lg:space-y-6">
          {displaySections.map((section, index) => (
            <div key={section.id || index} className="relative group">
              <div
                className={cn(
                  "nav-label absolute right-6 lg:right-8 top-1/2 -translate-y-1/2",
                  "px-3 py-1 rounded-md text-xs font-space font-extrabold tracking-wider uppercase whitespace-nowrap",
                  "bg-black/90 text-white/90 border border-white/10 z-50 transition-opacity duration-300",
                  activeSection === index ? "opacity-100 text-[#ffe600]" : "opacity-0 text-white/60 group-hover:opacity-100"
                )}
              >
                <span>{section.badge || `0${index + 1}`}</span>
              </div>

              <button
                onClick={() => {
                  sectionRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className={cn(
                  "relative w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer border",
                  activeSection === index
                    ? "bg-[#FF0043] border-[#FF0043] scale-125"
                    : "bg-transparent border-white/40 hover:border-white"
                )}
                aria-label={`Go to ${section.badge || `section ${index + 1}`}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Rotating 3D Earth Globe with Smooth Fixed Transitions */}
      <div
        className="fixed z-10 pointer-events-none will-change-transform transition-all duration-[1300ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          transform: globeTransform,
          filter: `opacity(${activeSection === 3 ? 0.35 : 0.85})`,
        }}
      >
        <div className="scale-90 md:scale-100 lg:scale-110">
          <Globe />
        </div>
      </div>

      {/* Rendered Journey Sections — Transparent, Clean, Professional */}
      {displaySections.map((section, index) => (
        <section
          key={section.id || index}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          className={cn(
            "relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 z-20 py-20 lg:py-28",
            "w-full max-w-full overflow-hidden",
            section.align === "center" && "items-center text-center",
            section.align === "right" && "items-end text-right",
            section.align !== "center" && section.align !== "right" && "items-start text-left"
          )}
        >
          <div
            className={cn(
              "w-full max-w-xl lg:max-w-2xl xl:max-w-3xl bg-transparent p-0 border-none shadow-none transition-all duration-700"
            )}
          >
            {/* Minimalist Badge Header (No Sparkles Icon, No Heavy Box) */}
            {section.badge && (
              <div
                className={cn(
                  "flex items-center gap-2 mb-4 text-[#FF0043] font-space font-extrabold text-xs tracking-[2.5px] uppercase",
                  section.align === "center" && "justify-center",
                  section.align === "right" && "justify-end"
                )}
              >
                <span className="w-2 h-2 rounded-full bg-[#FF0043] inline-block animate-pulse" />
                <span>{section.badge}</span>
              </div>
            )}

            {/* Title & Yellow Subtitle */}
            <h2 className="font-sans font-extrabold tracking-tight leading-[1.08] mb-4 text-white">
              {section.subtitle ? (
                <div className="space-y-1">
                  <div className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white">
                    {section.title}
                  </div>
                  <div className="text-[#ffe600] text-sm sm:text-base md:text-lg font-space font-extrabold tracking-wider uppercase">
                    {section.subtitle}
                  </div>
                </div>
              ) : (
                <div className="text-3xl sm:text-5xl lg:text-6xl text-white">{section.title}</div>
              )}
            </h2>

            {/* Clean Description */}
            <p className="text-white/80 leading-relaxed text-base sm:text-lg font-normal mb-8 max-w-2xl">
              {section.description}
            </p>

            {/* Clean Minimalist Features (No cards, no heavy box borders, no AI icons) */}
            {section.features && section.features.length > 0 && (
              <div className="space-y-6 mb-8 text-left max-w-2xl">
                {section.features.map((feature, featureIndex) => (
                  <div
                    key={feature.title || featureIndex}
                    className="border-l-2 border-[#FF0043] pl-5 py-0.5 space-y-1"
                  >
                    <h3 className="font-sans font-bold text-white text-base sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base font-normal leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            {section.actions && section.actions.length > 0 && (
              <div
                className={cn(
                  "flex flex-wrap items-center gap-4 pt-2",
                  section.align === "center" && "justify-center",
                  section.align === "right" && "justify-end",
                  (!section.align || section.align === "left") && "justify-start"
                )}
              >
                {section.actions.map((action, actionIndex) => (
                  <button
                    key={action.label || actionIndex}
                    onClick={action.onClick}
                    className={cn(
                      "group inline-flex items-center gap-2 px-6 py-3 rounded-full font-space font-extrabold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg",
                      action.variant === "primary"
                        ? "bg-[#FF0043] text-white hover:bg-[#FF0043]/80"
                        : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                    )}
                  >
                    <span>{action.label}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

// Export default demo component as requested
export default function GlobeScrollDemo() {
  return <ScrollGlobe />;
}
