"use client";

import React from "react";
import { PhoneMockupCard } from "@/components/PhoneMockupCard";

interface CardData {
  title: string;
  subtitle: string;
  category: string;
}

interface InfiniteCardScrollProps {
  cards: CardData[];
  speed?: string; // e.g., "30s"
}

export const InfiniteCardScroll: React.FC<InfiniteCardScrollProps> = ({
  cards,
  speed = "32s",
}) => {
  // Duplicate array 3x for endless seamless looping
  const repeatedCards = [...cards, ...cards, ...cards];

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Edge Gradients for Soft Fade Out */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div
        className="flex items-center gap-8 w-max animate-marquee hover:[animation-play-state:paused]"
        style={{ animationDuration: speed }}
      >
        {repeatedCards.map((card, idx) => (
          <div key={idx} className="w-[260px] sm:w-[290px] shrink-0">
            <PhoneMockupCard
              title={card.title}
              subtitle={card.subtitle}
              category={card.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
