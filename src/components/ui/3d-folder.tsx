"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ProjectCardItem {
  id: string | number;
  image: string;
  title: string;
  tag?: string;
}

export interface AnimatedFolderProps {
  title?: string;
  subtitle?: string;
  projects?: ProjectCardItem[];
  className?: string;
}

const DEFAULT_PROJECTS: ProjectCardItem[] = [
  {
    id: "1",
    title: "Release Rollouts",
    tag: "Campaign Strategy",
    image: "/services/release_camp.png",
  },
  {
    id: "2",
    title: "Spotify Growth",
    tag: "Data & Streams",
    image: "/services/spotify_growth.png",
  },
  {
    id: "3",
    title: "PR Activation",
    tag: "Press & Culture",
    image: "/services/pr_Activation.png",
  },
];

export const AnimatedFolder: React.FC<AnimatedFolderProps> = ({
  title = "Campaign Toolkit",
  subtitle,
  projects = DEFAULT_PROJECTS,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardItems = projects.length > 0 ? projects.slice(0, 3) : DEFAULT_PROJECTS;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className={cn(
        "w-full max-w-[320px] sm:max-w-[350px] bg-transparent border-0 shadow-none p-4 flex flex-col items-center justify-center select-none",
        className
      )}
    >
      {/* 3D Stage: 220px tall to give plenty of upward headroom for cards */}
      <div className="relative w-[230px] h-[210px] flex items-end justify-center [perspective:1000px]">
        {/* Main Folder Box (150px wide x 110px tall) */}
        <div className="relative w-[150px] h-[110px] flex items-end justify-center">
          {/* 1. Back Folder Panel with Tab */}
          <div className="absolute inset-0 z-0">
            {/* Tab on top-left */}
            <div className="absolute -top-3 left-2.5 w-14 h-4 rounded-t-lg bg-[#ea580c] shadow-sm" />
            {/* Back Plate */}
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#fb923c] to-[#ea580c] shadow-sm border-t border-white/30" />
          </div>

          {/* 2. Project Cards (Emerging and fanning out UPWARDS on hover) */}
          <div className="absolute inset-x-0 bottom-2 flex items-end justify-center pointer-events-none">
            {/* Card 1 (Left) */}
            {cardItems[0] && (
              <motion.div
                initial={false}
                animate={
                  isHovered
                    ? {
                        y: -84,
                        x: -48,
                        rotate: -16,
                        scale: 1.02,
                        opacity: 1,
                        zIndex: 12,
                      }
                    : {
                        y: 0,
                        x: -12,
                        rotate: -4,
                        scale: 0.94,
                        opacity: 0.9,
                        zIndex: 5,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 20,
                  mass: 0.7,
                }}
                className="absolute bottom-0 w-[78px] h-[108px] rounded-xl overflow-hidden shadow-xl border-[2px] border-white bg-neutral-900 pointer-events-auto"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={cardItems[0].image}
                    alt={cardItems[0].title}
                    fill
                    className="object-cover"
                    sizes="90px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white tracking-wide truncate max-w-[85%] drop-shadow">
                    {cardItems[0].title}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Card 2 (Center - Rises Highest) */}
            {cardItems[1] && (
              <motion.div
                initial={false}
                animate={
                  isHovered
                    ? {
                        y: -104,
                        x: 0,
                        rotate: 0,
                        scale: 1.08,
                        opacity: 1,
                        zIndex: 16,
                      }
                    : {
                        y: -4,
                        x: 0,
                        rotate: 0,
                        scale: 0.97,
                        opacity: 0.95,
                        zIndex: 8,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 20,
                  mass: 0.7,
                }}
                className="absolute bottom-0 w-[78px] h-[108px] rounded-xl overflow-hidden shadow-2xl border-[2px] border-white bg-neutral-900 pointer-events-auto"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={cardItems[1].image}
                    alt={cardItems[1].title}
                    fill
                    className="object-cover"
                    sizes="90px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white tracking-wide truncate max-w-[85%] drop-shadow">
                    {cardItems[1].title}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Card 3 (Right) */}
            {cardItems[2] && (
              <motion.div
                initial={false}
                animate={
                  isHovered
                    ? {
                        y: -84,
                        x: 48,
                        rotate: 16,
                        scale: 1.02,
                        opacity: 1,
                        zIndex: 12,
                      }
                    : {
                        y: 0,
                        x: 12,
                        rotate: 4,
                        scale: 0.94,
                        opacity: 0.9,
                        zIndex: 5,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 20,
                  mass: 0.7,
                }}
                className="absolute bottom-0 w-[78px] h-[108px] rounded-xl overflow-hidden shadow-xl border-[2px] border-white bg-neutral-900 pointer-events-auto"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={cardItems[2].image}
                    alt={cardItems[2].title}
                    fill
                    className="object-cover"
                    sizes="90px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white tracking-wide truncate max-w-[85%] drop-shadow">
                    {cardItems[2].title}
                  </span>
                </div>
              </motion.div>
            )}
          </div>

          {/* 3. Front Folder Flap (72px tall, tilts forward in 3D on hover) */}
          <motion.div
            initial={false}
            animate={
              isHovered
                ? {
                    rotateX: -42,
                    y: 3,
                  }
                : {
                    rotateX: 0,
                    y: 0,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 20,
            }}
            style={{
              transformOrigin: "bottom center",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-x-0 bottom-0 h-[72px] rounded-2xl z-20 overflow-hidden shadow-[0_12px_24px_-4px_rgba(234,88,12,0.35)] pointer-events-none"
          >
            <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#ffa059] via-[#ff8433] to-[#f97316] border-t border-white/50 relative">
              {/* Glossy specular shine on upper flap */}
              <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
              {/* Inner lip shadow */}
              <div className="absolute inset-x-0 top-0 h-1 bg-black/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Label below the folder */}
      <div className="mt-6 text-center">
        <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-neutral-900 tracking-tight">
          {title}
        </h3>
        {subtitle ? (
          <p className="font-sans font-semibold text-sm text-neutral-400 mt-1">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default AnimatedFolder;
