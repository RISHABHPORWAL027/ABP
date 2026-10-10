"use client";

import { cn } from "@/lib/utils";
import { Layers, Search, Zap } from "lucide-react";
import type React from "react";
import { TypewriterText } from "@/components/TypewriterText";

// Individual step item interface
export interface HowItWorksStep {
  num?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  benefits?: string[];
}

// Main component props
export interface HowItWorksProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  steps?: HowItWorksStep[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  showStepNumbers?: boolean;
}

// Props for a single step card
interface StepCardProps {
  num?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  benefits?: string[];
}

/**
 * A single step card within the "How It Works" section.
 * It displays an icon/number, title, description, and an optional list of benefits.
 */
const StepCard: React.FC<StepCardProps> = ({
  num,
  icon,
  title,
  description,
  benefits,
}) => (
  <div
    className={cn(
      "relative rounded-2xl border border-white/10 bg-[#1a1924] p-8 sm:p-10 text-card-foreground transition-all duration-300 ease-in-out flex flex-col justify-between h-full group shadow-xl",
      "hover:scale-[1.02] hover:shadow-2xl hover:border-[#FF0043]/60 hover:bg-[#201f2e]"
    )}
  >
    <div>
      {/* Number Badge or Icon */}
      {num && (
        <span className="font-space font-extrabold text-xs text-white/40 group-hover:text-[#ffe600] transition-colors block mb-8">
          {num}
        </span>
      )}
      {!num && icon && (
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-[#FF0043] group-hover:bg-[#FF0043]/20 transition-colors">
          {icon}
        </div>
      )}

      {/* Title and Description */}
      <h3 className="font-outfit font-extrabold text-2xl sm:text-3xl text-white mb-4 group-hover:text-[#FF0043] transition-colors leading-tight">
        {title}
      </h3>
      <p className="font-sans font-normal text-white/70 text-sm sm:text-base leading-relaxed">
        {description}
      </p>

      {/* Benefits List (if provided) */}
      {benefits && benefits.length > 0 && (
        <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#FF0043]/20">
                <div className="h-2 w-2 rounded-full bg-[#FF0043]"></div>
              </div>
              <span className="text-white/80 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

/**
 * A responsive "How It Works" section component.
 * Supports custom steps, titles, and themes while preserving brand color styling.
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({
  className,
  steps,
  title,
  subtitle,
  showStepNumbers = true,
  ...props
}) => {
  const defaultStepsData: HowItWorksStep[] = [
    {
      num: "01",
      icon: <Search className="h-6 w-6" />,
      title: "Share the brief",
      description:
        "Tell us about the music, the goals, the timeline, and what kind of support you need.",
      benefits: [
        "Smart campaign understanding",
        "Clear goal alignment",
        "Fast response timeframe",
      ],
    },
    {
      num: "02",
      icon: <Layers className="h-6 w-6" />,
      title: "We shape the plan",
      description:
        "We map out the right mix of services, content, and campaign direction based on the project.",
      benefits: [
        "Tailored release strategy",
        "Multi-channel roadmap",
        "Transparent timeline & costs",
      ],
    },
    {
      num: "03",
      icon: <Zap className="h-6 w-6" />,
      title: "We execute and refine",
      description:
        "We track what's happening, share the insights, and keep adjusting where needed.",
      benefits: [
        "Real-time performance tracking",
        "Direct communication",
        "Ongoing optimization",
      ],
    },
  ];

  const stepsData = steps || defaultStepsData;

  const defaultTitle = (
    <h2 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
      <TypewriterText
        words={[
          "A simple way to work together",
          "Clear inputs & considered plans",
          "Execution built for the release",
        ]}
        className="text-white"
        cursorColor="text-[#FF0043]"
      />
    </h2>
  );

  const defaultSubtitle = (
    <p className="font-sans font-normal text-white/70 text-lg sm:text-2xl max-w-3xl leading-relaxed mt-4">
      Clear inputs, a considered plan, and execution that keeps learning as the campaign moves.
    </p>
  );

  return (
    <section
      id="how-it-works"
      className={cn("w-full bg-[#121118] text-white py-20 md:py-28 font-sans relative border-t border-white/10", className)}
      {...props}
    >
      <div className="max-w-[1380px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          {title !== undefined ? (
            typeof title === "string" ? (
              <h2 className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
                {title}
              </h2>
            ) : (
              title
            )
          ) : (
            defaultTitle
          )}

          {subtitle !== undefined ? (
            typeof subtitle === "string" ? (
              <p className="font-sans font-normal text-white/70 text-lg sm:text-2xl max-w-3xl leading-relaxed mt-4">
                {subtitle}
              </p>
            ) : (
              subtitle
            )
          ) : (
            defaultSubtitle
          )}
        </div>

        {/* Step Indicators with Connecting Line (optional visual overlay) */}
        {showStepNumbers && (
          <div className="relative mx-auto mb-12 w-full max-w-4xl hidden md:block">
            <div
              aria-hidden="true"
              className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-white/15"
            ></div>
            <div className="relative grid grid-cols-3">
              {stepsData.map((step, index) => (
                <div
                  key={index}
                  className="flex h-9 w-9 items-center justify-center justify-self-center rounded-full bg-[#1a1924] border border-white/20 font-space font-extrabold text-xs text-[#ffe600] ring-4 ring-[#121118] shadow-lg"
                >
                  {step.num || index + 1}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              num={step.num}
              icon={step.icon}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
