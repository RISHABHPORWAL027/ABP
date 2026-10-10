"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Floating twinkling stars background
const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random() * 0.7 + 0.3;
  const random = () => Math.random();

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(60)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [0.8, 1.2, 0.5],
          }}
          transition={{
            duration: random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: "2px",
            height: "2px",
            backgroundColor: "#ffe600",
            borderRadius: "50%",
            zIndex: 1,
            boxShadow: "0 0 4px rgba(255, 230, 0, 0.8)",
          }}
          className="inline-block"
        />
      ))}
    </div>
  );
};

const MemoizedStars = memo(Stars);

/**
 * Pure Text Reveal Animation (Headline / Inline version)
 * Perfect for section headings without card chrome or fixed box sizes.
 */
export const TextReveal = ({
  text,
  revealText,
  className,
  textClassName,
  revealTextClassName,
  bgClassName = "bg-[#121118]",
}: {
  text: string;
  revealText: string;
  className?: string;
  textClassName?: string;
  revealTextClassName?: string;
  bgClassName?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const updatePosition = (clientX: number) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
      setWidthPercentage(percentage);
    }
  };

  const mouseMoveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(event.clientX);
  };

  const mouseLeaveHandler = () => {
    setIsMouseOver(false);
    setWidthPercentage(0);
  };

  const mouseEnterHandler = () => {
    setIsMouseOver(true);
  };

  const touchMoveHandler = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length > 0) {
      setIsMouseOver(true);
      updatePosition(event.touches[0].clientX);
    }
  };

  const touchStartHandler = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length > 0) {
      setIsMouseOver(true);
      updatePosition(event.touches[0].clientX);
    }
  };

  const rotateDeg = (widthPercentage - 50) * 0.08;

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={mouseLeaveHandler}
      ref={cardRef}
      className={cn(
        "relative w-full select-none cursor-crosshair overflow-hidden py-3",
        className
      )}
    >
      {/* Revealed layer (clipped to cursor percentage) */}
      <motion.div
        style={{ width: "100%" }}
        animate={
          isMouseOver
            ? {
                opacity: widthPercentage > 0 ? 1 : 0,
                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
              }
            : { clipPath: `inset(0 ${100 - widthPercentage}% 0 0)` }
        }
        transition={isMouseOver ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }}
        className={cn(
          "absolute inset-0 z-20 flex items-center will-change-transform pointer-events-none",
          bgClassName
        )}
      >
        <p
          className={cn(
            "font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/90 drop-shadow-[0_2px_15px_rgba(255,255,255,0.35)]",
            revealTextClassName
          )}
        >
          {revealText}
        </p>
      </motion.div>

      {/* Glowing Divider Beam */}
      <motion.div
        animate={{
          left: `${widthPercentage}%`,
          rotate: `${rotateDeg}deg`,
          opacity: widthPercentage > 0 && isMouseOver ? 1 : 0,
        }}
        transition={isMouseOver ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }}
        className="h-full w-[4px] sm:w-[5px] bg-gradient-to-b from-transparent via-[#FF0043] to-transparent absolute top-0 z-50 will-change-transform shadow-[0_0_16px_#FF0043,0_0_30px_#FF0043] pointer-events-none"
      />

      {/* Under / Base Layer with twinkling particles */}
      <div className="relative flex items-center overflow-hidden pointer-events-none">
        <p
          className={cn(
            "font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white/35 via-white/45 to-white/30",
            textClassName
          )}
        >
          {text}
        </p>
        <MemoizedStars />
      </div>
    </div>
  );
};

/**
 * Standard Text Reveal Card (Aceternity style with optional container box)
 */
export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const updatePosition = (clientX: number) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const relativeX = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
      setWidthPercentage(percentage);
    }
  };

  const mouseMoveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(event.clientX);
  };

  const mouseLeaveHandler = () => {
    setIsMouseOver(false);
    setWidthPercentage(0);
  };

  const mouseEnterHandler = () => {
    setIsMouseOver(true);
  };

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-[#1d1c20] border border-white/[0.08] w-full max-w-[40rem] rounded-2xl p-8 relative overflow-hidden",
        className
      )}
    >
      {children}

      <div className="h-36 sm:h-40 relative flex items-center overflow-hidden">
        <motion.div
          style={{ width: "100%" }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : { clipPath: `inset(0 ${100 - widthPercentage}% 0 0)` }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute inset-0 bg-[#1d1c20] z-20 flex items-center will-change-transform"
        >
          <p
            style={{ textShadow: "4px 4px 15px rgba(0,0,0,0.5)" }}
            className="text-2xl sm:text-[3rem] font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
          >
            {revealText}
          </p>
        </motion.div>

        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="h-full w-[6px] bg-gradient-to-b from-transparent via-[#FF0043] to-transparent shadow-[0_0_12px_#FF0043] absolute z-50 will-change-transform"
        />

        <div className="overflow-hidden w-full [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-2xl sm:text-[3rem] font-bold bg-clip-text text-transparent bg-[#454552]">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={cn("text-white text-lg font-bold mb-2", className)}>{children}</h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-[#a9a9a9] text-sm leading-relaxed", className)}>{children}</p>
  );
};
