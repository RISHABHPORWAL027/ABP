"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import { RotatingDVD } from "@/components/RotatingDVD";
import { TypewriterText } from "@/components/TypewriterText";

// Crisp SVG Icons for Socials
const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetRef = useRef<HTMLAnchorElement>(null);
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
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-14">
          
          {/* Badge */}
          <div className="flex items-center justify-center gap-2.5 mb-5 sm:mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffe600] inline-block animate-pulse shadow-md shadow-[#ffe600]/50" />
            <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2px] uppercase text-white/90">
              MUSIC-FIRST MARKETING FROM INDIA
            </span>
          </div>

          {/* Main Headline with Montserrat font */}
          <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] tracking-tight leading-[1.04] sm:leading-[1.0] lg:leading-[0.98] text-white text-center mb-5 sm:mb-7">
            Let&apos;s turn your melodies into <br className="hidden sm:inline" />
            <TypewriterText
              words={typewriterWords}
              className="text-[#ffe600]"
              cursorColor="text-[#ffe600]"
            />
          </h1>

          {/* Subtitle */}
          <p className="font-sans font-medium text-base sm:text-xl md:text-2xl text-white/85 max-w-2xl mx-auto text-center leading-relaxed mb-8 sm:mb-10">
            All By Play helps artists, labels, managers, and festivals build music campaigns that feel clear, creative, and effective.
          </p>

          {/* Interactive CTA Button Target: Our Work */}
          <div className="flex items-center justify-center relative z-20">
            <a
              ref={targetRef}
              href="#work"
              className="inline-flex items-center justify-center gap-2.5 bg-[#ffe600] text-[#000000] font-sans font-extrabold text-base sm:text-lg px-9 sm:px-12 py-3.5 sm:py-4 rounded-full transition-all duration-300 ease-out hover:bg-yellow-300 hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#ffe600]/30 active:scale-95 shadow-xl shadow-black/30 cursor-pointer group"
            >
              <span>Our Work</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
              
              {/* Badge Overlay */}
              <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/15 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#FF0043] animate-pulse" />
                <span className="font-space font-extrabold text-[9px] sm:text-[11px] tracking-[2px] uppercase text-white/90">
                  ALL BY PLAY SHOWCASE
                </span>
              </div>

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

        {/* Social Redirection Links at Bottom of Hero */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-14 sm:mt-18 pt-6 relative z-20">
          <span className="font-space font-extrabold text-[10px] sm:text-xs tracking-[2.5px] uppercase text-white/50">
            CONNECT ON SOCIALS
          </span>
          <div className="flex items-center flex-wrap justify-center gap-2.5 sm:gap-3.5">
            <a
              href="https://www.instagram.com/allbyplay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/35 text-white/85 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm shadow-md"
            >
              <InstagramIcon className="w-4 h-4 text-white/80 group-hover:text-[#ffe600] transition-colors" />
              <span className="font-sans font-bold text-xs sm:text-sm tracking-wide">Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#ffe600] transition-colors" />
            </a>

            <a
              href="https://www.youtube.com/@allbyplay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/35 text-white/85 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm shadow-md"
            >
              <YoutubeIcon className="w-4 h-4 text-white/80 group-hover:text-[#ffe600] transition-colors" />
              <span className="font-sans font-bold text-xs sm:text-sm tracking-wide">YouTube</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#ffe600] transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/company/allbyplay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/35 text-white/85 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm shadow-md"
            >
              <LinkedinIcon className="w-4 h-4 text-white/80 group-hover:text-[#ffe600] transition-colors" />
              <span className="font-sans font-bold text-xs sm:text-sm tracking-wide">LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#ffe600] transition-colors" />
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Mouse Arrow Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-30" />
    </section>
  );
};
