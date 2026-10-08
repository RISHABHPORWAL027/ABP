"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpNumberProps {
  end: number;
  start?: number;
  duration?: number; // duration in ms
  prefix?: string;
  suffix?: string;
  padZeros?: number; // e.g., 2 to format 3 as "03"
  className?: string;
}

export const CountUpNumber: React.FC<CountUpNumberProps> = ({
  end,
  start = 0,
  duration = 2000,
  prefix = "",
  suffix = "",
  padZeros = 0,
  className = "",
}) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Ease out cubic formula for smooth decelerating count
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(start + easeProgress * (end - start));

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [end, start, duration, hasAnimated]);

  const displayCount = padZeros
    ? String(count).padStart(padZeros, "0")
    : String(count);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayCount}
      {suffix}
    </span>
  );
};
