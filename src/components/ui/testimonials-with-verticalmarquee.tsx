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
    name: "Curtain Blue",
    role: "Music Producer & Artist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    review:
      "Had a great one working with folks at All by Play. My campaign went well with all organic promotions and thoughtful strategies proposed by the team. Would definitely work with the team again for my next release.",
    rating: 5,
  },
  {
    name: "Unnati Shah",
    role: "Independent Artist",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    review:
      "All By Play turned my dream into reality. They made my independent music release journey smooth, hassle-free, and impactful. Their expert PR services ensured my debut song reached a wide audience and featured on the right platforms.",
    rating: 5,
  },
  {
    name: "Twinbeatz",
    role: "DJ & Producer Duo",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    review:
      "All By Play is an amazing team to work with. They're very knowledgeable on the industry, marketing, reaching the proper markets. They're passionate about what they do and go above and beyond!",
    rating: 5,
  },
  {
    name: "Sparsh Dangwal",
    role: "Singer-Songwriter & Artist",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    review:
      "All By Play's expertise in marketing, playlist pitching, and artist brand development is truly remarkable. Their invaluable support and guidance have propelled my music to new heights, granting it substantial exposure. With a strategic approach and meticulous attention to detail, All By Play has played a pivotal role in shaping my career. I am immensely grateful for their unwavering support and highly recommend them to any artist seeking to elevate their craft and flourish in the music industry.",
    rating: 5,
  },
  {
    name: "Roop Ghuman",
    role: "Independent Artist",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    review:
      "All By Play has been an absolute godsend in helping me navigate the wild world of social media and releases. Their invaluable support helped me grow my music and reach audiences I never thought possible. Beyond expertise, their passion and care make them like family. They'll help you swim with the sharks.",
    rating: 5,
  },
  {
    name: "Semwal",
    role: "Hip-Hop & Recording Artist",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    review:
      "All By Play has been a game-changer for my music career! From crafting wicked social media campaigns to creating dope content and running slick ads, these guys have my back. Thanks to their targeted Instagram ads, my latest release 'Nedhe Nedhe' is blowing up. The All By Play crew is like my own dream team, constantly planning releases, discussing ideas, and tweaking strategies every week. If you're a serious artist looking to make waves in the industry, ABP is where it's at. They provide the support, guidance, and skills you need to smash it in the music world.",
    rating: 5,
  },
];

export const TestimonialsWithVerticalMarquee: React.FC = () => {
  // Split into 4 columns for full-width 3D vertical marquee scrolling
  // Seamless loop with 4 items per column duplicated once
  const col1 = [
    testimonials[0],
    testimonials[1],
    testimonials[2],
    testimonials[3],
    testimonials[0],
    testimonials[1],
    testimonials[2],
    testimonials[3],
  ];
  const col2 = [
    testimonials[4],
    testimonials[5],
    testimonials[0],
    testimonials[1],
    testimonials[4],
    testimonials[5],
    testimonials[0],
    testimonials[1],
  ];
  const col3 = [
    testimonials[2],
    testimonials[3],
    testimonials[4],
    testimonials[5],
    testimonials[2],
    testimonials[3],
    testimonials[4],
    testimonials[5],
  ];
  const col4 = [
    testimonials[1],
    testimonials[3],
    testimonials[5],
    testimonials[0],
    testimonials[1],
    testimonials[3],
    testimonials[5],
    testimonials[0],
  ];

  return (
    <section className="w-full bg-[#000000] text-white py-14 sm:py-24 md:py-32 font-sans relative overflow-hidden">
      {/* Background ambient lighting - GPU-safe radial gradient instead of heavy blur */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 0, 67, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Header Container */}
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10 mb-10 sm:mb-16 text-center flex flex-col items-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-4">
          <span className="font-space font-extrabold text-xs tracking-[2px] uppercase text-[#FF0043]">
            CLIENT REVIEWS & TESTIMONIALS
          </span>
        </div>

        <h2 className="font-playfair font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-6xl tracking-[0px] leading-[1.1] text-white mb-6 uppercase min-h-[1.1em] text-center w-full flex justify-center">
          <TypewriterText
            words={["WHAT ARTISTS & LABELS SAY"]}
            loop={false}
            className="text-white text-center justify-center"
            cursorColor="text-[#FF0043]"
          />
        </h2>

        <p className="font-syne font-normal text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto text-center tracking-[0px]">
          Real stories from independent artists, managers, and label executives who built their release campaigns with All By Play.
        </p>
      </div>

      {/* Full-Width Borderless Kinetic Vertical Marquee Display */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[650px] overflow-hidden group">
        {/* Top & Bottom Gradient Fade Overlays */}
        <div className="absolute top-0 inset-x-0 h-20 sm:h-36 bg-gradient-to-b from-[#000000] via-[#000000]/85 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-20 sm:h-36 bg-gradient-to-t from-[#000000] via-[#000000]/85 to-transparent z-20 pointer-events-none" />

        {/* 4 Column Full-Width Grid */}
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
          {/* Column 1 - Moving UP */}
          <div className="flex flex-col gap-6 animate-marquee-vertical-up group-hover:[animation-play-state:paused]">
            {col1.map((item, idx) => (
              <CardItem key={idx} {...item} />
            ))}
          </div>

          {/* Column 2 - Moving DOWN (Hidden on mobile, 2 cols on tablet, 4 on desktop) */}
          <div className="hidden sm:flex flex-col gap-6 animate-marquee-vertical-down group-hover:[animation-play-state:paused]">
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

      {/* Review Quote Text in Montserrat */}
      <p className="font-playfair italic text-base sm:text-lg text-white/95 leading-relaxed mb-6 font-normal tracking-wide">
        &ldquo;{review}&rdquo;
      </p>
    </div>

    {/* User Avatar & Info */}
    <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
      <div className="w-10 h-10 rounded-full overflow-hidden relative border border-white/20 shrink-0">
        <Image src={avatar} alt={name} fill sizes="40px" className="object-cover" />
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
