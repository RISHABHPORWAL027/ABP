"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface EqualizerBar {
  baseHeight: number;
  highlighted: boolean;
}

const initialBars: EqualizerBar[] = [
  { baseHeight: 24, highlighted: false },
  { baseHeight: 44, highlighted: false },
  { baseHeight: 72, highlighted: true },
  { baseHeight: 115, highlighted: false },
  { baseHeight: 52, highlighted: false },
  { baseHeight: 135, highlighted: true },
  { baseHeight: 68, highlighted: false },
  { baseHeight: 92, highlighted: true },
  { baseHeight: 50, highlighted: false },
  { baseHeight: 74, highlighted: false },
  { baseHeight: 165, highlighted: true },
  { baseHeight: 60, highlighted: false },
  { baseHeight: 84, highlighted: false },
  { baseHeight: 122, highlighted: true },
  { baseHeight: 56, highlighted: false },
  { baseHeight: 102, highlighted: false },
  { baseHeight: 48, highlighted: false },
  { baseHeight: 128, highlighted: true },
  { baseHeight: 78, highlighted: false },
  { baseHeight: 140, highlighted: false },
  { baseHeight: 54, highlighted: false },
  { baseHeight: 95, highlighted: true },
  { baseHeight: 110, highlighted: false },
  { baseHeight: 62, highlighted: false },
  { baseHeight: 145, highlighted: true },
  { baseHeight: 88, highlighted: false },
  { baseHeight: 70, highlighted: false },
  { baseHeight: 130, highlighted: true },
  { baseHeight: 45, highlighted: false },
  { baseHeight: 105, highlighted: false },
  { baseHeight: 65, highlighted: true },
  { baseHeight: 38, highlighted: false },
];

export const AnimatedEqualizer: React.FC<{ className?: string }> = ({ className }) => {
  // Store dynamic height multiplier for each bar (0.3 to 1.25)
  const [multipliers, setMultipliers] = useState<number[]>(
    initialBars.map(() => 1)
  );

  useEffect(() => {
    // Smooth dynamic audio spectrum fluctuation loop
    const interval = setInterval(() => {
      setMultipliers(
        initialBars.map((bar) => {
          const min = bar.highlighted ? 0.45 : 0.25;
          const max = bar.highlighted ? 1.25 : 1.0;
          return Number((Math.random() * (max - min) + min).toFixed(2));
        })
      );
    }, 180); // Updates 5-6 times per second for organic audio feel

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("w-full relative z-10 pt-6 mt-auto overflow-hidden", className)}>
      <div className="w-full px-2 sm:px-4 md:px-6 flex items-end justify-between gap-1.5 sm:gap-2 md:gap-3 lg:gap-3.5 h-[175px] border-b border-white/10 pb-0">
        {initialBars.map((bar, idx) => {
          const currentHeight = Math.max(16, Math.round(bar.baseHeight * (multipliers[idx] || 1)));

          return (
            <div
              key={idx}
              className={cn(
                "flex-1 min-w-[4px] max-w-[48px] rounded-t-full transition-all duration-300 ease-out hover:opacity-100 cursor-pointer group relative",
                bar.highlighted
                  ? "bg-[#FF0043] shadow-[0_0_30px_rgba(255,0,67,0.75)]"
                  : "bg-[#2a2a30] hover:bg-[#FF0043]/60 hover:shadow-[0_0_15px_rgba(255,0,67,0.4)]"
              )}
              style={{
                height: `${currentHeight}px`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
