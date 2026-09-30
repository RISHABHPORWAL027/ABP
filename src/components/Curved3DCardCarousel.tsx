"use client";

import React from "react";
import { PhoneMockupCard } from "@/components/PhoneMockupCard";

interface CardData {
  title: string;
  subtitle: string;
  category: string;
  youtubeId?: string;
}

interface Curved3DCardCarouselProps {
  cards: CardData[];
  speed?: string | number;
}

export const Curved3DCardCarousel: React.FC<Curved3DCardCarouselProps> = ({
  cards,
  speed = "28s",
}) => {
  // Triple array for seamless infinite looping
  const repeatedCards = [...cards, ...cards, ...cards];
  const animDuration = typeof speed === "number" ? `${30 / speed}s` : speed;

  return (
    <div className="w-full overflow-hidden py-6 relative group">
      {/* Edge Gradients for Soft Fade */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none" />

      {/* Straight Line Infinite Auto-Scrolling Track with Tall Mobile Cards */}
      <div
        className="flex items-center gap-7 w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: animDuration }}
      >
        {repeatedCards.map((card, idx) => (
          <div key={idx} className="shrink-0 py-2">
            <PhoneMockupCard
              title={card.title}
              subtitle={card.subtitle}
              category={card.category}
              youtubeId={card.youtubeId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
