"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SpotifyCard, SpotifyTrack } from "@/components/ui/spotify-card";

interface LiquidGlassCarouselProps {
  tracks: SpotifyTrack[];
  className?: string;
}

export const LiquidGlassCarousel: React.FC<LiquidGlassCarouselProps> = ({
  tracks,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = tracks.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total]);

  // Generate card position offsets relative to current index
  const getCardState = (index: number) => {
    const diff = (index - currentIndex + total) % total;
    let position = diff;
    if (diff > total / 2) position = diff - total;

    if (position === 0) {
      return {
        x: 0,
        scale: 1,
        rotateY: 0,
        zIndex: 30,
        opacity: 1,
        filter: "blur(0px)",
        isCenter: true,
      };
    } else if (position === 1) {
      return {
        x: "75%",
        scale: 0.88,
        rotateY: -18,
        zIndex: 20,
        opacity: 0.85,
        filter: "blur(2px)",
        isCenter: false,
      };
    } else if (position === -1 || position === total - 1) {
      return {
        x: "-75%",
        scale: 0.88,
        rotateY: 18,
        zIndex: 20,
        opacity: 0.85,
        filter: "blur(2px)",
        isCenter: false,
      };
    } else if (position === 2) {
      return {
        x: "130%",
        scale: 0.75,
        rotateY: -30,
        zIndex: 10,
        opacity: 0.4,
        filter: "blur(6px)",
        isCenter: false,
      };
    } else if (position === -2 || position === total - 2) {
      return {
        x: "-130%",
        scale: 0.75,
        rotateY: 30,
        zIndex: 10,
        opacity: 0.4,
        filter: "blur(6px)",
        isCenter: false,
      };
    } else {
      return {
        x: position > 0 ? "180%" : "-180%",
        scale: 0.6,
        rotateY: position > 0 ? -45 : 45,
        zIndex: 0,
        opacity: 0,
        filter: "blur(12px)",
        isCenter: false,
      };
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden py-12 flex flex-col items-center justify-center selection:bg-[#1ED760] ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Liquid Glass Background Prism Refraction Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="w-[600px] h-[450px] rounded-full bg-gradient-to-tr from-[#1ED760]/20 via-[#00F0FF]/15 to-[#FF0043]/15 blur-[100px] transform scale-110 opacity-70 animate-pulse" />
      </div>

      {/* Main Carousel Stack Area */}
      <div className="relative w-full max-w-[1280px] h-[580px] sm:h-[620px] flex items-center justify-center z-10 perspective-[1200px]">
        {tracks.map((track, idx) => {
          const cardState = getCardState(idx);

          return (
            <motion.div
              key={track.id}
              initial={false}
              animate={{
                x: cardState.x,
                scale: cardState.scale,
                rotateY: cardState.rotateY,
                opacity: cardState.opacity,
                filter: cardState.filter,
              }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 22,
                mass: 0.8,
              }}
              style={{
                zIndex: cardState.zIndex,
                position: "absolute",
                transformStyle: "preserve-3d",
              }}
              onClick={() => setCurrentIndex(idx)}
              className={`cursor-pointer transition-all duration-500 ease-out ${
                cardState.isCenter ? "cursor-default" : "hover:brightness-110"
              }`}
            >
              {/* Liquid Glass Refraction Wrapper */}
              <div className="relative group">
                <SpotifyCard track={track} />

                {/* Liquid Glass Edge Wave Distortion Overlay */}
                {!cardState.isCenter && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-white/5 backdrop-blur-[4px] border border-white/20 pointer-events-none transition-opacity duration-500 group-hover:opacity-60" />
                )}

                {/* Chromatic Prism Glow on Active Edge */}
                {cardState.isCenter && (
                  <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-[#1ED760]/40 via-[#00F0FF]/30 to-[#FF0043]/40 blur-xl opacity-60 pointer-events-none -z-10 animate-tilt" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls & Liquid Counter Indicator Bar */}
      <div className="relative z-20 flex items-center justify-between w-full max-w-xs sm:max-w-sm px-6 mt-6 bg-black/60 backdrop-blur-xl py-3 rounded-full border border-white/15 shadow-2xl">
        {/* Prev Button */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.88 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1ED760] text-white hover:text-black flex items-center justify-center transition-colors duration-300 shadow-md cursor-pointer border border-white/10"
          aria-label="Previous Spotify Card"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </motion.button>

        {/* Counter Display (e.g. 01 / 06) */}
        <div className="font-mono text-sm font-black tracking-widest text-white flex items-center gap-1.5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-[#1ED760] inline-block"
            >
              {String(currentIndex + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400">
            {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.88 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1ED760] text-white hover:text-black flex items-center justify-center transition-colors duration-300 shadow-md cursor-pointer border border-white/10"
          aria-label="Next Spotify Card"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </motion.button>
      </div>
    </div>
  );
};

