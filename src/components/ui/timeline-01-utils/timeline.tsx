"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  image?: string;
  className?: string;
}

export interface TimelineProps {
  items: TimelineItemProps[];
  className?: string;
}

const TimelineItem = ({
  title,
  description,
  date,
  image,
  index,
}: TimelineItemProps & { index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 items-center md:gap-0 gap-8 py-6 md:py-12">
      {/* Text Column - Appears slowly with smooth delayed fade */}
      <div
        className={cn(
          "flex flex-col justify-center p-0 md:p-12 z-10",
          isEven ? "md:items-end md:text-right" : "md:order-2"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-3 max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
            className="space-y-2"
          >
            <span className="inline-block text-xs md:text-sm font-space font-extrabold tracking-[2px] text-[#FF0043] uppercase bg-[#FF0043]/10 border border-[#FF0043]/20 px-3 py-1 rounded-full">
              {date}
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              {title}
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="text-base md:text-lg text-white/70 leading-relaxed font-medium"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {/* Image Column - Glides smoothly from left to right */}
      <div
        className={cn(
          "flex items-center justify-center p-0 md:p-12 z-10",
          isEven ? "md:order-2" : ""
        )}
      >
        {image && (
          <div className="w-full relative p-2 md:p-3 rounded-3xl bg-white/[0.04] border border-white/10 shadow-2xl backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, x: -75, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1], // Smooth spring-like curve
              }}
              className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 group"
            >
              <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle cinematic gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Timeline = ({ items, className }: TimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const dotTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={cn("relative md:px-0", className)}>
      {/* Central Timeline track line */}
      <div className="absolute md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-white/15" />

      {/* Animated Red Progress Fill & Glowing Tracker Orb */}
      <div className="absolute md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
        <motion.div
          style={{ scaleY: smoothProgress, originY: 0 }}
          className="absolute inset-0 bg-[#FF0043] w-full shadow-[0_0_12px_#FF0043]"
        />
        <motion.div
          style={{ top: dotTop }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 h-4 w-4 rounded-full border-4 border-[#0A0A0D] bg-[#FF0043] shadow-[0_0_20px_#FF0043] md:block hidden"
        />
      </div>

      <div className="flex flex-col md:px-0 px-6 md:py-0 py-8 md:gap-0 gap-12">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
