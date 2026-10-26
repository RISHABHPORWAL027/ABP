"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  ArtistSignItem,
  STATIC_ARTIST_SIGNS,
} from "@/lib/artist-signs-data";

interface ArtistsWorkedWithSectionProps {
  initialImages?: ArtistSignItem[];
}

export const ArtistsWorkedWithSection: React.FC<ArtistsWorkedWithSectionProps> = ({
  initialImages,
}) => {
  const [images, setImages] = useState<ArtistSignItem[]>(
    initialImages && initialImages.length > 0 ? initialImages : STATIC_ARTIST_SIGNS
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Position and animation state refs
  const offsetRef = useRef<number>(0);
  const targetShiftRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const dragStartOffsetRef = useRef<number>(0);
  const hasMovedRef = useRef<boolean>(false);
  const isHoveredRef = useRef<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Fetch updated images if available from API
  useEffect(() => {
    let isMounted = true;

    const loadImages = async () => {
      try {
        const res = await fetch("/api/artist-signs");
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && Array.isArray(data?.images) && data.images.length > 0) {
          setImages(data.images);
        }
      } catch {
        // Fallback silently to existing images
      }
    };

    loadImages();

    window.addEventListener("focus", loadImages);
    return () => {
      isMounted = false;
      window.removeEventListener("focus", loadImages);
    };
  }, []);

  // 3 sets of images for a flawless, bidirectional infinite translation loop
  const duplicatedImages = [
    ...images,
    ...images,
    ...images,
  ];

  // Continuous auto-scroll loop with GPU translate3d & manual momentum
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const renderLoop = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      const safeDelta = Math.min(delta, 64);

      const singleSetWidth = track.scrollWidth / 3;

      if (singleSetWidth > 0) {
        // 1. Process button click or wheel smooth shift momentum
        if (Math.abs(targetShiftRef.current) > 0.5) {
          const shiftAmount = targetShiftRef.current * 0.12;
          offsetRef.current += shiftAmount;
          targetShiftRef.current -= shiftAmount;
        }

        // 2. Process auto-scroll when not actively dragging
        if (!isDraggingRef.current) {
          // Continuous smooth auto-scroll: ~36px per second
          const baseSpeed = isHoveredRef.current ? 18 : 36;
          const pxToMove = (baseSpeed * safeDelta) / 1000;
          offsetRef.current -= pxToMove;
        }

        // 3. Seamless infinite wrap
        if (offsetRef.current <= -singleSetWidth) {
          offsetRef.current += singleSetWidth;
          if (isDraggingRef.current) {
            dragStartOffsetRef.current += singleSetWidth;
          }
        } else if (offsetRef.current > 0) {
          offsetRef.current -= singleSetWidth;
          if (isDraggingRef.current) {
            dragStartOffsetRef.current -= singleSetWidth;
          }
        }

        // 4. Direct GPU translation
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [images]);

  // Mouse / Pointer drag handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const container = containerRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    targetShiftRef.current = 0; // Cancel ongoing button shift
    setIsDragging(true);

    if (e.pointerType === "mouse") {
      try {
        container.setPointerCapture(e.pointerId);
      } catch {
        // fallback
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 4) {
      hasMovedRef.current = true;
    }

    const singleSetWidth = track.scrollWidth / 3;
    let nextOffset = dragStartOffsetRef.current + dx;

    if (singleSetWidth > 0) {
      if (nextOffset <= -singleSetWidth) {
        nextOffset += singleSetWidth;
        dragStartOffsetRef.current += singleSetWidth;
      } else if (nextOffset > 0) {
        nextOffset -= singleSetWidth;
        dragStartOffsetRef.current -= singleSetWidth;
      }
    }

    offsetRef.current = nextOffset;
    track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  const handlePointerUp = (e?: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    const container = containerRef.current;
    if (container && e && e.pointerType === "mouse") {
      try {
        if (container.hasPointerCapture(e.pointerId)) {
          container.releasePointerCapture(e.pointerId);
        }
      } catch {
        // fallback
      }
    }
  };

  // Trackpad / Mouse wheel horizontal scroll handler
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 1) return;

    // Apply scroll delta smoothly with momentum
    targetShiftRef.current -= delta * 0.85;
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (hasMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Button navigation
  const handleNavClick = (direction: "left" | "right") => {
    const container = containerRef.current;
    const cardWidth = container && container.clientWidth > 768 ? 440 : 300;
    const shift = direction === "left" ? cardWidth : -cardWidth;
    targetShiftRef.current += shift;
  };

  return (
    <section id="work" className="w-full py-20 md:py-28 bg-[#000000] text-white relative overflow-hidden select-none">
      {/* Background radial gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,0,67,0.08),transparent_70%)] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 text-center mb-12 md:mb-16 relative z-10">
        <ScrollReveal direction="up">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FFE600] uppercase block mb-3">
            CAMPAIGN COLLABORATIONS
          </span>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[56px] 2xl:text-7xl tracking-[0px] leading-[1.1] md:leading-[1.08] lg:leading-[1.06] xl:leading-[1.05] text-white">
            Artist we have worked with
          </h2>
        </ScrollReveal>
      </div>

      {/* Interactive Horizontal Track with Edge Fade Masks & Navigation Buttons */}
      <div className="relative z-10 w-full group/carousel">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={() => handleNavClick("left")}
          aria-label="Scroll left"
          className="absolute left-3 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-14 md:h-14 rounded-full bg-black/80 hover:bg-[#FFE600] text-white hover:text-black border border-white/20 hover:border-[#FFE600] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-0.5 stroke-[2.5]" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={() => handleNavClick("right")}
          aria-label="Scroll right"
          className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-14 md:h-14 rounded-full bg-black/80 hover:bg-[#FFE600] text-white hover:text-black border border-white/20 hover:border-[#FFE600] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-0.5 stroke-[2.5]" />
        </button>

        {/* Gradient edge mask container */}
        <div className="scroll-mask-container w-full overflow-hidden">
          {/* Interactive touch/drag container */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onMouseEnter={() => {
              isHoveredRef.current = true;
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false;
              handlePointerUp();
            }}
            onWheel={handleWheel}
            onClickCapture={handleClickCapture}
            className={`w-full py-4 select-none touch-pan-y overscroll-x-contain ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            <div
              ref={trackRef}
              className="flex gap-5 sm:gap-6 md:gap-8 w-max select-none px-4 will-change-transform"
            >
              {duplicatedImages.map((artist, index) => (
                <div
                  key={`${artist.id || artist.src}-${index}`}
                  className="artist-item flex-shrink-0 w-52 sm:w-64 md:w-72 lg:w-80 aspect-[750/930] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B0B10] select-none group/card cursor-pointer"
                >
                  <div className="relative w-full h-full overflow-hidden select-none pointer-events-none">
                    <Image
                      src={artist.src}
                      alt={artist.alt}
                      fill
                      sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                      className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-105 group-hover/card:brightness-110 select-none pointer-events-none"
                      loading={index < 8 ? "eager" : "lazy"}
                      draggable={false}
                    />
                    {/* Subtle glossy border glow on hover */}
                    <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover/card:border-[#FF0043]/40 transition-colors duration-300 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

      {/* Scoped CSS for masking and hover effects */}
      <style jsx>{`
        .scroll-mask-container {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
        }

        .artist-item {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.3s ease,
            box-shadow 0.3s ease;
        }

        .artist-item:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 20px 40px -10px rgba(255, 0, 67, 0.25);
        }
      `}</style>
    </section>
  );
};
