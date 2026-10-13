"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Disc3 } from "lucide-react";

export const AboutDvdDisc: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const lastAngleRef = useRef<number>(0);
  const rotationRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const animFrameRef = useRef<number | null>(null);

  // Keep ref synchronized
  rotationRef.current = rotation;
  isDraggingRef.current = isDragging;

  // Continuous smooth ambient rotation when user is not actively dragging
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (!isDraggingRef.current) {
        // Spin at ~12 degrees per second (smooth ~30s per full rotation)
        rotationRef.current = (rotationRef.current + 12 * dt) % 360;
        setRotation(rotationRef.current);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Calculate pointer angle relative to disc center
  const getAngle = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const radians = Math.atan2(clientY - centerY, clientX - centerX);
    return (radians * 180) / Math.PI;
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    isDraggingRef.current = true;
    lastAngleRef.current = getAngle(e.clientX, e.clientY);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Non-critical fallback
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const currentAngle = getAngle(e.clientX, e.clientY);
    let delta = currentAngle - lastAngleRef.current;

    // Normalize across -180 / 180 angle boundary
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    rotationRef.current = (rotationRef.current + delta) % 360;
    lastAngleRef.current = currentAngle;
    setRotation(rotationRef.current);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    isDraggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Non-critical
    }
  };

  return (
    <div className="relative translate-x-[12%] sm:translate-x-[20%] lg:translate-x-[42%] xl:translate-x-[48%] group select-none">
      {/* Outer Glow & Shadow Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[540px] md:h-[540px] lg:w-[620px] lg:h-[620px] xl:w-[680px] xl:h-[680px] rounded-full bg-[#0c0c0e] border-[10px] sm:border-[14px] md:border-[16px] border-[#18181b] shadow-[-30px_15px_70px_rgba(255,0,67,0.35),_0_0_50px_rgba(255,0,67,0.2)] ring-2 ring-[#FF0043]/50 flex items-center justify-center overflow-hidden transition-shadow duration-500 hover:shadow-[-30px_15px_80px_rgba(255,0,67,0.45),_0_0_60px_rgba(255,0,67,0.3)] ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ touchAction: "none" }}
      >
        {/* 1. Base Video: Plays continuously and stays upright WITHOUT rotating */}
        <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden pointer-events-none select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/need-help-in-marketing.mp4" type="video/mp4" />
            <source src="/need%20help%20in%20marketing%20.mp4" type="video/mp4" />
          </video>
        </div>

        {/* 2. Rotatable DVD Disc Surface & Primary Color Overlays: Rotates smoothly & follows drag */}
        <div
          className="absolute inset-0 w-full h-full rounded-full overflow-hidden flex items-center justify-center will-change-transform pointer-events-none"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* Primary Color (#FF0043) Iridescent Holographic Sheen (Authentic DVD light refraction) */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-screen opacity-55"
            style={{
              background:
                "conic-gradient(from 45deg, rgba(255,0,67,0.55) 0deg, rgba(255,140,0,0.3) 45deg, rgba(255,230,0,0.2) 90deg, rgba(0,220,255,0.2) 140deg, rgba(255,0,67,0.65) 180deg, rgba(255,0,120,0.35) 230deg, rgba(0,220,255,0.2) 280deg, rgba(255,0,67,0.55) 360deg)",
            }}
          />

          {/* ABP Primary Brand (#FF0043) Soft Tint Layer */}
          <div className="absolute inset-0 bg-[#FF0043]/12 mix-blend-overlay pointer-events-none" />

          {/* Fine Laser Optical Track Grooves (Microgroove texture) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at center, transparent 0, transparent 4px, rgba(255,0,67,0.2) 5px, transparent 6px)",
            }}
          />

          {/* Concentric Reflective Disc Rims with Primary Red Accents */}
          <div className="absolute inset-3 sm:inset-5 rounded-full border border-[#FF0043]/35 pointer-events-none" />
          <div className="absolute inset-8 sm:inset-12 rounded-full border border-white/20 pointer-events-none" />
          <div className="absolute inset-16 sm:inset-28 rounded-full border border-[#FF0043]/20 pointer-events-none" />
          <div className="absolute inset-28 sm:inset-44 rounded-full border border-white/10 pointer-events-none" />

          {/* Glossy Diagonal DVD Highlight / Light Sweep */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF0043]/20 via-transparent to-white/15 pointer-events-none" />

          {/* Inner Mirror Clamping Ring (Authentic DVD Hub Band with Micro-Etching) */}
          <div className="absolute inset-[30%] sm:inset-[32%] rounded-full border border-[#FF0043]/50 bg-[#FF0043]/10 backdrop-blur-[1px] pointer-events-none flex items-center justify-center shadow-inner">
            <div className="absolute inset-1.5 rounded-full border border-white/30" />
            <span className="font-mono text-[7px] sm:text-[8px] tracking-[0.25em] uppercase text-white/90 font-bold select-none drop-shadow">
              ALL BY PLAY · DVD-VIDEO
            </span>
          </div>

          {/* Clear Acrylic Center Spindle Hole (Transparent & authentic) */}
          <div className="relative z-20 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-white/50 bg-white/10 shadow-sm flex items-center justify-center pointer-events-none ring-1 ring-[#FF0043]/60">
            {/* Center Punch Rim */}
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-white/70 bg-black/40 shadow-inner flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-white/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Interactive Pill Badge */}
      <div className="absolute top-8 left-4 sm:top-12 sm:left-6 z-30 bg-black/85 backdrop-blur-md text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#FF0043]/40 shadow-[0_4px_20px_rgba(255,0,67,0.3)] flex items-center gap-2 pointer-events-none select-none">
        <span className="w-2 h-2 rounded-full bg-[#FF0043] animate-ping" />
        <Disc3 className="w-3.5 h-3.5 text-[#FF0043] animate-spin" style={{ animationDuration: "3s" }} />
        <span className="font-space font-extrabold text-[9px] sm:text-[10px] tracking-wider uppercase text-white">
          DRAG TO ROTATE · DVD PLAYING
        </span>
      </div>
    </div>
  );
};
