"use client";

import React from "react";

interface LabelLogo {
  name: string;
  src: string;
}

const labelsList: LabelLogo[] = [
  {
    name: "WARNER MUSIC GROUP",
    src: "/labels_logo/Rectangle.svg",
  },
  {
    name: "SAREGAMA",
    src: "/labels_logo/I.svg",
  },
  {
    name: "SONY MUSIC",
    src: "/labels_logo/H.svg",
  },
  {
    name: "ZEE MUSIC CO.",
    src: "/labels_logo/I (1).svg",
  },
  {
    name: "UNIVERSAL MUSIC GROUP",
    src: "/labels_logo/images (1).jpeg",
  },
  {
    name: "TIPS MUSIC",
    src: "/labels_logo/Rectangle (1).svg",
  },
  {
    name: "TIMES MUSIC",
    src: "/labels_logo/I (2).svg",
  },
  {
    name: "AZAADI RECORDS",
    src: "/labels_logo/I (4).svg",
  },
  {
    name: "55 RECORDS",
    src: "/labels_logo/I (5).svg",
  },
  {
    name: "TM MUSIC",
    src: "/labels_logo/I (3).svg",
  },
  {
    name: "VYRL ORIGINALS",
    src: "/labels_logo/images (2).jpeg",
  },
  {
    name: "MASS APPEAL",
    src: "/labels_logo/images (2).png",
  },
  {
    name: "PLAY DMF",
    src: "/labels_logo/playdmf.jpeg",
  },
];

export const LogoCloudMarquee: React.FC = () => {
  // Two complementary sets for multi-directional motion
  const row1 = labelsList;
  const row2 = [...labelsList.slice(6), ...labelsList.slice(0, 6)];

  // 2 repetitions is optimal for continuous loop without exceeding mobile WebKit texture memory
  const repeatedRow1 = [...row1, ...row1];
  const repeatedRow2 = [...row2, ...row2];

  return (
    <section className="w-full bg-[#000000] text-white py-14 sm:py-24 font-sans relative overflow-hidden border-t border-white/10 [isolation:isolate]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF0043]/10 blur-[170px] rounded-full pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10 mb-8 sm:mb-14 text-center">
        <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-6xl tracking-tight leading-[1.1] text-white uppercase mb-3 sm:mb-4">
          INDUSTRY PARTNERS & LABELS <span className="text-[#FF0043]">.</span>
        </h2>

        <p className="font-sans font-medium text-sm sm:text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
          Partnering with premier indie, major, and international music labels across Bollywood, hip-hop, electronic, and pop music.
        </p>
      </div>

      {/* Infinite Logo Cloud Marquee Container */}
      <div className="relative w-full overflow-hidden py-3 sm:py-4 flex flex-col gap-6 sm:gap-12 group [isolation:isolate]">
        {/* Left & Right Edge Fade Overlays - Tailored for mobile & desktop */}
        <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-28 md:w-44 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-28 md:w-44 bg-gradient-to-l from-[#000000] via-[#000000]/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Row 1 - Moving Left */}
        <div className="flex items-center gap-6 sm:gap-14 w-max animate-marquee group-hover:[animation-play-state:paused] will-change-transform">
          {repeatedRow1.map((label, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex items-center justify-center shrink-0 px-3 sm:px-4 transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <img
                src={label.src}
                alt={label.name}
                className="h-10 sm:h-16 w-auto max-w-[140px] sm:max-w-[200px] object-contain select-none rounded-md"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Marquee Row 2 - Moving Right (Reverse) */}
        <div className="flex items-center gap-6 sm:gap-14 w-max animate-marquee-reverse group-hover:[animation-play-state:paused] will-change-transform">
          {repeatedRow2.map((label, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex items-center justify-center shrink-0 px-3 sm:px-4 transition-transform duration-300 hover:scale-110 cursor-pointer"
            >
              <img
                src={label.src}
                alt={label.name}
                className="h-10 sm:h-16 w-auto max-w-[140px] sm:max-w-[200px] object-contain select-none rounded-md"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
