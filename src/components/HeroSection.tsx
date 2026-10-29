"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import { RotatingDVD } from "@/components/RotatingDVD";
import { TypewriterText } from "@/components/TypewriterText";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetRef = useRef<HTMLAnchorElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const typewriterWords = [
    "movements.",
    "cultural moments.",
    "viral campaigns.",
    "listener growth.",
  ];

  const drawArrow = useCallback(() => {
    if (!canvasRef.current || !targetRef.current || !ctxRef.current) return;

    const targetEl = targetRef.current;
    const ctx = ctxRef.current;
    const mouse = mousePosRef.current;

    const x0 = mouse.x;
    const y0 = mouse.y;

    if (x0 === null || y0 === null) return;

    const rect = targetEl.getBoundingClientRect();
    // Only draw when the button is within the viewport
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;

    // Do not show arrow if cursor is directly on the target button
    if (
      x0 >= rect.left - 4 &&
      x0 <= rect.right + 4 &&
      y0 >= rect.top - 4 &&
      y0 <= rect.bottom + 4
    ) {
      return;
    }

    // Do not show arrow if cursor is under/inside the text content block
    if (textContainerRef.current) {
      const textRect = textContainerRef.current.getBoundingClientRect();
      if (
        x0 >= textRect.left &&
        x0 <= textRect.right &&
        y0 >= textRect.top &&
        y0 <= textRect.bottom
      ) {
        return;
      }
    }

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const a = Math.atan2(cy - y0, cx - x0);
    const x1 = cx - Math.cos(a) * (rect.width / 2 + 12);
    const y1 = cy - Math.sin(a) * (rect.height / 2 + 12);

    const midX = (x0 + x1) / 2;
    const midY = (y0 + y1) / 2;
    const offset = Math.min(200, Math.hypot(x1 - x0, y1 - y0) * 0.5);
    const t = Math.max(-1, Math.min(1, (y0 - y1) / 200));
    const controlX = midX;
    const controlY = midY + offset * t;

    const r = Math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2);
    // Smooth opacity ramp-up based on distance from target
    const opacity = Math.max(0, Math.min(1.0, (r - Math.max(rect.width, rect.height) / 2) / 450));

    if (opacity <= 0.05) return;

    // Crisp white dashed stroke with subtle glow
    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.85})`;
    ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.85})`;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    // Draw curve
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.quadraticCurveTo(controlX, controlY, x1, y1);
    ctx.setLineDash([10, 5]);
    ctx.stroke();
    ctx.restore();

    // Draw arrowhead
    const angle = Math.atan2(y1 - controlY, x1 - controlX);
    const headLength = 12;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLength * Math.cos(angle - Math.PI / 6),
      y1 - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLength * Math.cos(angle + Math.PI / 6),
      y1 - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.stroke();

    // Start anchor dot at mouse cursor
    ctx.beginPath();
    ctx.arc(x0, y0, 3.5, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctxRef.current = canvas.getContext("2d");

    const updateCanvasSize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      if (ctxRef.current) {
        ctxRef.current.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = { x: null, y: null };
    };

    window.addEventListener("resize", updateCanvasSize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("blur", handleMouseLeave);

    updateCanvasSize();

    const animateLoop = () => {
      if (ctxRef.current && canvas) {
        ctxRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
        drawArrow();
      }
      animationFrameIdRef.current = requestAnimationFrame(animateLoop);
    };

    animateLoop();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("blur", handleMouseLeave);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [drawArrow]);

  return (
    <section className={`w-full bg-transparent text-white pt-6 sm:pt-10 md:pt-14 pb-16 sm:pb-24 overflow-hidden font-sans relative ${className}`}>
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Text Content - Centered Modern Layout */}
        <div className="w-full max-w-[70vw] min-[1440px]:max-w-6xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-14">
          
          {/* Main Hero Header & Copy Block */}
          <div ref={textContainerRef} className="w-full flex flex-col items-center">
            {/* Badge */}
            <div className="flex items-center justify-center mb-5 sm:mb-6">
              <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2px] uppercase text-white/90">
                India&apos;s First 360° Music Marketing Agency
              </span>
            </div>

            {/* Main Headline with Playfair Display Bold */}
            <h1 className="font-playfair font-bold text-[clamp(28px,4.8vw,76px)] min-[1440px]:text-[93.6px] tracking-[0px] leading-[1.1] min-[1440px]:leading-[100px] text-white text-center mb-6 sm:mb-8 w-full mx-auto">
              <span className="inline">
                Let&apos;s turn your <span className="whitespace-normal sm:whitespace-nowrap">melodies into</span>
              </span>{" "}
              <br />
              <TypewriterText
                words={typewriterWords}
                className="text-[#ffe600]"
                cursorColor="text-[#ffe600]"
                noWrap
              />
            </h1>

            {/* Subtitle with Syne Regular */}
            <p className="font-syne font-normal text-base sm:text-lg md:text-xl min-[1440px]:text-[28.5px] leading-relaxed md:leading-[1.5] min-[1440px]:leading-[50.67px] tracking-[0px] text-white/90 max-w-2xl min-[1440px]:max-w-3xl mx-auto text-center mb-8 sm:mb-10">
              Influencer marketing, artist management, ads, PR, artist retainers, and more. We help artists, labels, and managers build campaigns that actually move music.
            </p>
          </div>

          {/* Interactive CTA Button Target: Our Work with DM Sans Bold */}
          <div className="flex items-center justify-center relative z-20">
            <a
              ref={targetRef}
              href="#work"
              className="inline-flex items-center justify-center gap-2.5 bg-[#ffe600] text-[#000000] font-dmsans font-bold text-base sm:text-lg lg:text-[19px] xl:text-[21.54px] lg:leading-[30px] xl:leading-[32.3px] tracking-[0px] px-8 sm:px-10 py-3.5 sm:py-4 xl:py-4.5 rounded-full transition-all duration-300 ease-out hover:bg-yellow-300 hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#ffe600]/30 active:scale-95 shadow-xl shadow-black/30 cursor-pointer group"
            >
              <span>Our Work</span>
              <ArrowUpRight className="w-5 h-5 xl:w-6 xl:h-6 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Media Frame Section - Nested Rounded Glassmorphic Card */}
        <div className="relative max-w-4xl mx-auto mt-6 sm:mt-10">
          
          {/* Rotating DVD Record - Corner Accent */}
          <div className="absolute -top-7 -right-2 sm:-top-12 sm:-right-8 md:-top-14 md:-right-10 z-30 transform hover:scale-110 transition-transform cursor-pointer">
            <div className="sm:hidden">
              <RotatingDVD size={95} />
            </div>
            <div className="hidden sm:block md:hidden">
              <RotatingDVD size={135} />
            </div>
            <div className="hidden md:block">
              <RotatingDVD size={165} />
            </div>
          </div>

          {/* Double Frame: Outer Pill Container */}
          <div className="rounded-[2.2rem] sm:rounded-[2.6rem] p-1.5 sm:p-2.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/20 shadow-2xl backdrop-blur-md">
            
            {/* Inner Video Container running ABP Showcase video */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden bg-[#111113] border border-white/15 shadow-inner">
              

              {/* ABP Showcase Video */}
              <iframe
                src="https://www.youtube-nocookie.com/embed/FzjBVeOJdug?autoplay=1&mute=1&loop=1&playlist=FzjBVeOJdug&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
                title="All By Play Video"
                className="w-full h-[125%] -mt-[7%] object-cover pointer-events-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>

          {/* Floating Music Player Widget (Bottom Right) */}
          <div className="absolute -bottom-5 -right-1 sm:-bottom-7 sm:-right-4 z-30 bg-[#1A1A1A]/95 backdrop-blur-md text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 w-[190px] sm:w-[270px]">
            <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5 sm:mb-2">
              <div className="bg-[#ffe600] text-[#000000] font-space font-black text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                PLAY
              </div>
              <div>
                <div className="text-[9px] sm:text-[10px] font-space font-bold uppercase tracking-wider text-[#009082]">
                  NOW BUILDING
                </div>
                <div className="text-xs sm:text-sm font-sans font-bold text-white leading-tight">
                  Your next release
                </div>
              </div>
            </div>

            {/* Waveform Visualizer */}
            <div className="flex items-end justify-between gap-1 sm:gap-1.5 h-4 sm:h-5 pt-1 px-1">
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-1" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-2" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-3" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-4" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-5" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-6" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-7" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-8" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-2" />
              <span className="w-1 sm:w-1.5 bg-[#009082] rounded-full animate-bar-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Mouse Arrow Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-30" />
    </section>
  );
};
