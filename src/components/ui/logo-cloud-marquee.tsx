"use client";

import React from "react";

interface LabelLogo {
  name: string;
  src: string;
}

const labelsList: LabelLogo[] = [
  {
    name: "WARNER MUSIC GROUP",
    src: "/labels_logo/images.png",
  },
  {
    name: "SAREGAMA",
    src: "/labels_logo/Saregama_logo.png",
  },
  {
    name: "SONY MUSIC",
    src: "/labels_logo/images.jpeg",
  },
  {
    name: "UNIVERSAL MUSIC GROUP",
    src: "/labels_logo/images (1).jpeg",
  },
  {
    name: "ZEE MUSIC CO.",
    src: "/labels_logo/Zee_Music_Company.svg.webp",
  },
  {
    name: "TIPS MUSIC",
    src: "/labels_logo/images (1).png",
  },
  {
    name: "TIMES MUSIC",
    src: "/labels_logo/Times-Music-logo.webp",
  },
  {
    name: "VYRL ORIGINALS",
    src: "/labels_logo/images (2).jpeg",
  },
  {
    name: "MASS APPEAL",
    src: "/labels_logo/images (2).png",
  },
];

export const LogoCloudMarquee: React.FC = () => {
  // Two complementary sets for multi-directional motion
  const row1 = labelsList;
  const row2 = [...labelsList.slice(4), ...labelsList.slice(0, 4)];

  const repeatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const repeatedRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="w-full bg-[#000000] text-white py-24 font-sans relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF0043]/10 blur-[170px] rounded-full pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10 mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF0043] animate-pulse" />
          <span className="font-space font-extrabold text-xs tracking-[2.5px] uppercase text-[#FF0043]">
            TRUSTED BY LABELS
          </span>
        </div>

        <h2 className="font-sans font-extrabold text-2xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white uppercase mb-4">
          INDUSTRY PARTNERS & LABELS <span className="text-[#FF0043]">.</span>
        </h2>

        <p className="font-sans font-medium text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
          Partnering with premier indie, major, and international music labels across Bollywood, hip-hop, electronic, and pop music.
        </p>
      </div>

      {/* Infinite Logo Cloud Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 flex flex-col gap-8 sm:gap-12 group">
        {/* Left & Right Edge Fade Overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#000000] via-[#000000]/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Row 1 - Moving Left */}
        <div className="flex items-center gap-8 sm:gap-14 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {repeatedRow1.map((label, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex items-center justify-center shrink-0 px-4 transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <img
                src={label.src}
                alt={label.name}
                className="h-12 sm:h-16 w-auto max-w-[160px] sm:max-w-[200px] object-contain select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Marquee Row 2 - Moving Right (Reverse) */}
        <div className="flex items-center gap-8 sm:gap-14 w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {repeatedRow2.map((label, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex items-center justify-center shrink-0 px-4 transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <img
                src={label.src}
                alt={label.name}
                className="h-12 sm:h-16 w-auto max-w-[160px] sm:max-w-[200px] object-contain select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
