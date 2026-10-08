"use client";

import React, { useEffect, useRef, useState } from "react";

interface ParticleTextAnimationProps {
  text?: string;
  subtitle?: string;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  friction: number;
  ease: number;
}

export const ParticleTextAnimation: React.FC<ParticleTextAnimationProps> = ({
  text = "OUR WORK",
  subtitle = "VIRAL REELS · MUSIC VIDEOS · STREAMING CAMPAIGNS",
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000, radius: 120 };

    const colors = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FF0043", "#00FF66", "#00F0FF"];

    const init = () => {
      const width = container.clientWidth;
      const height = Math.min(Math.max(width * 0.35, 320), 450);

      canvas.width = width;
      canvas.height = height;

      // Offscreen rendering to extract text pixel positions
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#FFFFFF";

      // Calculate fluid dynamic font size
      const fontSize = Math.min(width * 0.14, 140);
      ctx.font = `900 ${fontSize}px "Inter", "Plus Jakarta Sans", sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText(text, width / 2, height / 2);

      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;

      ctx.clearRect(0, 0, width, height);

      particles = [];
      const gap = width < 640 ? 4 : 5; // Sampling density

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 128) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              originX: x,
              originY: y,
              vx: 0,
              vy: 0,
              size: Math.random() * 1.5 + 1.8,
              color: color,
              friction: 0.84,
              ease: 0.08 + Math.random() * 0.04,
            });
          }
        }
      }
    };

    init();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Calculate distance from mouse pointer
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          const push = force * 15;

          p.vx -= Math.cos(angle) * push;
          p.vy -= Math.sin(angle) * push;
        }

        // Return force towards target pixel coordinate
        const homeDx = p.originX - p.x;
        const homeDy = p.originY - p.y;

        p.vx += homeDx * p.ease;
        p.vy += homeDy * p.ease;

        p.vx *= p.friction;
        p.vy *= p.friction;

        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw interactive cursor liquid glow (lime green / red dot as in reference design)
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = "#00FF66";
        ctx.shadowColor = "#00FF66";
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Event Handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleResize = () => {
      init();
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("resize", handleResize);
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex flex-col items-center justify-center py-12 px-4 bg-[#000000] text-white overflow-hidden selection:bg-[#FF0043] ${className}`}
    >
      {/* Top Tag / Category Badge */}
      <div className="mb-4">
        <span className="font-space font-extrabold text-xs sm:text-sm tracking-[3px] uppercase text-[#FF0043] bg-[#FF0043]/10 px-4 py-1.5 rounded-full border border-[#FF0043]/30">
          ALL BY PLAY · CAMPAIGNS & SHOWCASES
        </span>
      </div>

      {/* Interactive Canvas */}
      <div className="relative w-full max-w-[1200px] flex items-center justify-center cursor-crosshair">
        <canvas ref={canvasRef} className="w-full block relative z-10" />

        {/* Ambient Radial Glow behind particles */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF0043]/10 via-[#00F0FF]/10 to-[#00FF66]/10 blur-3xl pointer-events-none rounded-full transform scale-90" />
      </div>

      {/* Bottom Subtitle */}
      <div className="mt-6 text-center max-w-xl mx-auto z-10">
        <p className="font-sans font-extrabold text-sm sm:text-base text-gray-300 tracking-wider uppercase">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

