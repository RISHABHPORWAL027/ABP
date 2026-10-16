"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandingShowcaseBannerProps {
  priority?: boolean;
}

export const BrandingShowcaseBanner: React.FC<BrandingShowcaseBannerProps> = ({
  priority = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const totalSlides = 2;

  // Auto-run carousel between Slide 0 (Dual horizontal images) and Slide 1 (Full-width YouTube video)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) handleNext();
    else if (diff < -45) handlePrev();
    setTouchStartX(null);
  };

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-black/15 bg-black select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. SIGNATURE TOP RED HEADER BAR (#FF0043) */}
      <div className="w-full bg-[#FF0043] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border-b border-black/20 text-black">
        <span className="font-mono font-black text-xs sm:text-sm tracking-wider uppercase">
          BRAND / VISUAL NOTES
        </span>
        <span className="font-mono font-black text-xs sm:text-sm tracking-widest uppercase">
          02 FRAMES
        </span>
      </div>

      {/* 2. SLIDES CONTAINER (Consistent aspect ratio across both slides) */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:h-[580px] lg:h-[640px] overflow-hidden bg-black">
        {/* SLIDE 1: BOTH FRAMES (1 AND 2) HORIZONTAL IN THE SAME DIV */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out",
            currentSlide === 0
              ? "opacity-100 z-10 pointer-events-auto"
              : "opacity-0 z-0 pointer-events-none"
          )}
        >
          <div className="relative w-full h-full flex flex-row items-center justify-center bg-black overflow-hidden">
            {/* Frame 1: Headline Melody (shrreya1.png) */}
            <div className="relative w-1/2 h-full">
              <Image
                src="/Services page/branding and marketing/shrreya1.png"
                alt="Shreya Ghoshal - When Every Headline Was A Melody"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 45vw, 600px"
                className="object-contain"
                priority={priority}
              />
            </div>

            {/* Frame 2: PR Rollout (shreya2.png) */}
            <div className="relative w-1/2 h-full">
              <Image
                src="/Services page/branding and marketing/shreya2.png"
                alt="Shreya Ghoshal - PR Rollout across Media"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 45vw, 600px"
                className="object-contain"
                priority={priority}
              />
            </div>
          </div>
        </div>

        {/* SLIDE 2: FULL WIDTH YOUTUBE VIDEO */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out bg-black",
            currentSlide === 1
              ? "opacity-100 z-10 pointer-events-auto"
              : "opacity-0 z-0 pointer-events-none"
          )}
        >
          <div className="relative w-full h-full">
            <iframe
              src="https://www.youtube-nocookie.com/embed/6VD0NDgN-RM?autoplay=1&mute=1&loop=1&playlist=6VD0NDgN-RM&controls=1&modestbranding=1&playsinline=1"
              title="Shreya Ghoshal - O Kanha Re (Official Music Video)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0 block"
            />
          </div>
        </div>

        {/* 3. SUBTLE NAVIGATION ARROWS */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* 4. CLEAN MINIMALIST DOT INDICATORS (NO BUTTONS / LABELS) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 shadow-lg">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                "rounded-full transition-all duration-300 cursor-pointer",
                currentSlide === idx
                  ? "w-6 h-2 bg-[#FFE600]"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
