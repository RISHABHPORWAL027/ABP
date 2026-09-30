"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  review: string;
  rating?: number;
}

const testimonials: TestimonialCardProps[] = [
  {
    name: "Prateeksha Srivastava",
    role: "Independent Artist",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    review:
      "ABP helped us turn 'Sajna Ve' into a widespread viral moment. The strategy, editorial playlist pitching, and creator pushes were executed flawlessly.",
    rating: 5,
  },
  {
    name: "Arpit Bala",
    role: "Musician & Creator",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    review:
      "Working with All By Play gave our release campaign the exact sharpness it needed. The Spotify audience growth exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Mitta Ror",
    role: "Independent Artist",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    review:
      "The team bridges independent culture and mainstream reach like nobody else in India. 10/10 execution across the board.",
    rating: 5,
  },
  {
    name: "Silver Strings Music",
    role: "Music Label Exec",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    review:
      "From release roadmaps to Instagram reels and PR, ABP delivers measurable streaming numbers and genuine listener retention.",
    rating: 5,
  },
  {
    name: "Ashish Bhatia",
    role: "Pop Artist",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    review:
      "All By Play brought total clarity to our release strategy. Their campaign direction resulted in top editorial playlist placements.",
    rating: 5,
  },
  {
    name: "Swara Verma",
    role: "Playback Singer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    review:
      "Transparent reporting, incredible team, and deep understanding of what contemporary music audiences want.",
    rating: 5,
  },
  {
    name: "Swaroop Khan",
    role: "Singer & Composer",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    review:
      "Our festival campaign and tour activation sold out faster than ever. Highly recommended for serious music projects.",
    rating: 5,
  },
  {
    name: "Kashish Ratnani",
    role: "Artist Manager",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    review:
      "ABP is our go-to partner for every major single rollout. Sharp strategy, fast execution, and genuine passion for music.",
    rating: 5,
  },
  {
    name: "Noor",
    role: "R&B Artist",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    review:
      "The Spotify playlisting strategy and social content pushes gave our single millions of organic streams within weeks.",
    rating: 5,
  },
];

export const TestimonialsWithVerticalMarquee: React.FC = () => {
  // Split into 4 columns for full-width 3D vertical marquee scrolling
  const col1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const col2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];
  const col3 = [...testimonials.slice(6, 9), ...testimonials.slice(6, 9)];
  const col4 = [...testimonials.slice(1, 4), ...testimonials.slice(1, 4)];

  return (
    <section className="w-full bg-[#000000] text-white py-24 md:py-32 font-sans relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#FF0043]/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF0043] animate-pulse" />
          <span className="font-space font-extrabold text-xs tracking-[2px] uppercase text-[#FF0043]">
            CLIENT REVIEWS & TESTIMONIALS
          </span>
        </div>

        <h2 className="font-sans font-extrabold text-4xl sm:text-6xl tracking-tight leading-[1.05] text-white mb-6 uppercase min-h-[1.1em]">
          <TypewriterText
            words={["WHAT ARTISTS & LABELS SAY ."]}
            loop={false}
            className="text-white"
            cursorColor="text-[#FF0043]"
          />
        </h2>

        <p className="font-sans font-medium text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
          Real stories from independent artists, managers, and label executives who built their release campaigns with All By Play.
        </p>
      </div>

      {/* Full-Width Borderless Kinetic Vertical Marquee Display */}
      <div className="relative w-full h-[650px] overflow-hidden group">
        {/* Top & Bottom Gradient Fade Overlays */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#000000] via-[#000000]/85 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#000000] via-[#000000]/85 to-transparent z-20 pointer-events-none" />

        {/* 4 Column Full-Width Grid */}
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
          {/* Column 1 - Moving UP */}
          <div className="flex flex-col gap-6 animate-marquee-vertical-up group-hover:[animation-play-state:paused]">
            {col1.map((item, idx) => (
              <CardItem key={idx} {...item} />
            ))}
          </div>

          {/* Column 2 - Moving DOWN */}
          <div className="flex flex-col gap-6 animate-marquee-vertical-down group-hover:[animation-play-state:paused]">
            {col2.map((item, idx) => (
              <CardItem key={idx} {...item} />
            ))}
          </div>

          {/* Column 3 - Moving UP */}
          <div className="hidden lg:flex flex-col gap-6 animate-marquee-vertical-up group-hover:[animation-play-state:paused]">
            {col3.map((item, idx) => (
              <CardItem key={idx} {...item} />
            ))}
          </div>

          {/* Column 4 - Moving DOWN */}
          <div className="hidden lg:flex flex-col gap-6 animate-marquee-vertical-down group-hover:[animation-play-state:paused]">
            {col4.map((item, idx) => (
              <CardItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CardItem: React.FC<TestimonialCardProps> = ({
  name,
  role,
  avatar,
  review,
  rating = 5,
}) => (
  <div className="bg-[#14121a] border border-white/10 p-6 rounded-2xl shadow-xl hover:border-[#FF0043] transition-all duration-300 flex flex-col justify-between shrink-0">
    <div>
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4 text-[#ffe600]">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current stroke-none" />
        ))}
      </div>

      {/* Review Text */}
      <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed mb-6 font-medium">
        &ldquo;{review}&rdquo;
      </p>
    </div>

    {/* User Avatar & Info */}
    <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
      <div className="w-10 h-10 rounded-full overflow-hidden relative border border-white/20 shrink-0">
        <Image src={avatar} alt={name} fill className="object-cover" />
      </div>
      <div>
        <h4 className="font-sans font-extrabold text-sm text-white uppercase tracking-wide">
          {name}
        </h4>
        <p className="font-space text-xs text-[#009082] font-bold tracking-wider uppercase">
          {role}
        </p>
      </div>
    </div>
  </div>
);
