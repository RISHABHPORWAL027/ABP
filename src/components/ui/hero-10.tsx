"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";
import { Cta, type CtaProps } from "@/components/ui/hero-10-utils/cta";

export interface Hero10Props {
  title: string;
  titleLine2Prefix?: string;
  titleHighlight?: string;
  description: string;
  badge?: string;
  socialProof?: string;
  images: string[];
  imageAlts?: string[];
  animation?: "none" | "subtle";
  primaryCTA: CtaProps;
  secondaryCTA?: CtaProps;
  variant?: "standard" | "compact";
}

const variantStyles = {
  standard: {
    section: "pt-8 pb-16 sm:pt-12 sm:pb-24",
    title: "text-3xl sm:text-5xl md:text-6xl lg:text-7xl",
    description: "max-w-xl text-base sm:text-lg",
    header: "gap-5",
    content: "gap-8 sm:gap-10",
    fan: "max-w-3xl",
    fanCard: "aspect-[3/4] sm:aspect-[9/16]",
  },
  compact: {
    section: "pt-6 pb-12 sm:pt-10 sm:pb-16",
    title: "text-2xl sm:text-4xl md:text-5xl lg:text-6xl",
    description: "max-w-lg text-sm sm:text-base",
    header: "gap-4",
    content: "gap-6 sm:gap-8",
    fan: "max-w-2xl",
    fanCard: "aspect-[3/4] sm:aspect-[9/16]",
  },
} as const;

const fanSlots = [
  { width: "w-[36%] sm:w-[32%]", layout: "-mr-6 sm:-mr-10 z-10", rotate: -6, x: 48, ty: 24 },
  { width: "w-[42%] sm:w-[38%]", layout: "z-20", rotate: 0, x: 0, ty: -8 },
  { width: "w-[36%] sm:w-[32%]", layout: "-ml-6 sm:-ml-10 z-10", rotate: 6, x: -48, ty: 24 },
];

const fanContainer: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const fanCard: Variants = {
  hidden: (slot: (typeof fanSlots)[number]) => ({
    x: slot.x,
    rotate: slot.rotate,
    y: slot.ty,
  }),
  visible: (slot: (typeof fanSlots)[number]) => ({
    x: 0,
    rotate: slot.rotate,
    y: slot.ty,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function Reveal({
  active,
  variants,
  className,
  children,
}: Readonly<{
  active: boolean;
  variants?: Variants;
  className?: string;
  children: React.ReactNode;
}>) {
  if (!active) return <div className={className}>{children}</div>;

  return (
    <motion.div variants={variants ?? item} className={className}>
      {children}
    </motion.div>
  );
}

function ImageFan({
  images,
  imageAlts,
  cardAspect,
  animate,
}: Readonly<{
  images: string[];
  imageAlts?: string[];
  cardAspect: string;
  animate: boolean;
}>) {
  return (
    <motion.div
      className="relative flex w-full items-center justify-center pt-2"
      variants={fanContainer}
      initial={animate ? "hidden" : false}
      whileInView={animate ? "visible" : undefined}
      animate={animate ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
    >
      {images.slice(0, 3).map((src, i) => {
        const slot = fanSlots[i] ?? fanSlots[1];
        return (
          <motion.div
            key={src}
            custom={slot}
            variants={fanCard}
            className={cn(
              "relative shrink-0 overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20 bg-black p-1 transition-transform duration-300 hover:scale-105 hover:z-30 hover:border-[#7CFF6B]",
              cardAspect,
              slot.width,
              slot.layout
            )}
          >
            <img
              src={src}
              alt={imageAlts?.[i] ?? ""}
              decoding="async"
              className="size-full object-cover rounded-xl"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export function Hero10({
  title,
  titleLine2Prefix,
  titleHighlight,
  description,
  badge,
  socialProof,
  images,
  imageAlts,
  animation = "subtle",
  primaryCTA,
  secondaryCTA,
  variant = "standard",
}: Readonly<Hero10Props>) {
  const reduce = useReducedMotion();
  const animate = animation === "subtle" && !reduce;
  const vs = variantStyles[variant];

  const titleElement = title && (
    <h1
      className={cn(
        "text-white font-sans font-black tracking-tight text-balance leading-[1.02]",
        vs.title
      )}
    >
      <Balancer>{title}</Balancer>
      {(titleLine2Prefix || titleHighlight) && (
        <>
          <br />
          <Balancer>
            {titleLine2Prefix && <span>{titleLine2Prefix} </span>}
            {titleHighlight && (
              <span className="text-[#7CFF6B]">{titleHighlight}</span>
            )}
          </Balancer>
        </>
      )}
    </h1>
  );

  const descriptionElement = description && (
    <p className={cn("text-white/80 font-sans font-medium leading-relaxed", vs.description)}>
      <Balancer>{description}</Balancer>
    </p>
  );

  const ctasElement = (primaryCTA?.ctaEnabled !== false || secondaryCTA?.ctaEnabled !== false) && (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
      {primaryCTA?.ctaEnabled !== false && <Cta cta={primaryCTA} />}
      {secondaryCTA?.ctaEnabled !== false && secondaryCTA && (
        <Cta
          cta={{ ...secondaryCTA, variant: secondaryCTA.variant ?? "outline" }}
        />
      )}
    </div>
  );

  const socialProofElement = socialProof && (
    <p className="text-white/50 text-xs sm:text-sm font-space font-semibold uppercase tracking-wider">
      {socialProof}
    </p>
  );

  const mediaElement = images?.length ? (
    <ImageFan
      images={images}
      imageAlts={imageAlts}
      cardAspect={vs.fanCard}
      animate={animate}
    />
  ) : null;

  return (
    <section className="bg-[#07070A] relative isolate w-full overflow-hidden border-b border-white/10">
      {/* Radial ambient glow in Spotify green */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1DB954]/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      <motion.div
        className={cn(
          "relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center",
          vs.section,
          vs.content
        )}
        variants={animate ? container : undefined}
        initial={animate ? "hidden" : false}
        whileInView={animate ? "visible" : undefined}
        viewport={{ once: true, margin: "-80px" }}
      >
        <Reveal
          active={animate}
          className={cn(
            "flex w-full max-w-2xl flex-col items-center",
            vs.header
          )}
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7CFF6B]/15 text-[#7CFF6B] font-space font-extrabold text-xs uppercase tracking-widest mb-2 border border-[#7CFF6B]/30">
              <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-ping" />
              <span>{badge}</span>
            </div>
          )}

          {titleElement}
          {descriptionElement}
        </Reveal>

        <Reveal active={animate} className="flex flex-col items-center gap-4">
          {ctasElement}
          {socialProofElement}
        </Reveal>

        <div className={cn("mx-auto w-full", vs.fan)}>{mediaElement}</div>
      </motion.div>
    </section>
  );
}

export default Hero10;
