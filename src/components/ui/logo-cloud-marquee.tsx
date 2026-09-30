"use client";

import React from "react";
import Image from "next/image";

interface LabelLogo {
  name: string;
  category?: string;
  logoUrl?: string;
  svgText?: string;
}

const labelsList: LabelLogo[] = [
  { name: "WARNER MUSIC GROUP", category: "MAJOR LABEL" },
  { name: "SAREGAMA", category: "MUSIC & FILM" },
  { name: "SONY MUSIC", category: "GLOBAL MAJOR" },
  { name: "UNIVERSAL MUSIC GROUP", category: "UMG" },
  { name: "ZEE MUSIC CO.", category: "BOLLYWOOD & INDIE" },
  { name: "TIPS MUSIC", category: "RECORDINGS" },
  { name: "MERCHANT RECORDS", category: "INDIE LABEL" },
  { name: "NORTH RECORDS", category: "REGIONAL" },
  { name: "ALL FOR SOUL", category: "INDEPENDENT" },
  { name: "G' RECORDINGS", category: "INDIE HIP-HOP" },
  { name: "TM MUSIC", category: "LABEL & MGMT" },
  { name: "A* ARTISTS", category: "TALENT AGENCY" },
  { name: "ATLANTIC RECORDS", category: "WARNER MUSIC" },
  { name: "DEF JAM RECORDINGS", category: "HIP-HOP / URBAN" },
  { name: "DAY ONE", category: "SONY MUSIC INDIA" },
  { name: "TIMES MUSIC", category: "SPIRITUAL & POP" },
  { name: "i RECORDS", category: "INDEPENDENT" },
  { name: "VYRL ORIGINALS", category: "UNIVERSAL MUSIC" },
  { name: "EYP CREATIONS", category: "PUNJABI & INDIE" },
  { name: "SHARK & INK", category: "TALENT & BOUTIQUE" },
  { name: "55 RECORDS", category: "INDIE ARTIST" },
  { name: "AWAL", category: "MUSIC DISTRIBUTION" },
  { name: "AZADI RECORDS", category: "DESI HIP-HOP" },
  { name: "ULTRA RECORDS", category: "ELECTRONIC" },
  { name: "MASS APPEAL", category: "GLOBAL HIP-HOP" },
];

export const LogoCloudMarquee: React.FC = () => {
  const row1 = labelsList.slice(0, 13);
  const row2 = labelsList.slice(13);

  const repeatedRow1 = [...row1, ...row1, ...row1];
  const repeatedRow2 = [...row2, ...row2, ...row2];

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

        <h2 className="font-sans font-extrabold text-4xl sm:text-6xl tracking-tight leading-[1.05] text-white uppercase mb-4">
          INDUSTRY PARTNERS & LABELS <span className="text-[#FF0043]">.</span>
        </h2>

        <p className="font-sans font-medium text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
          Partnering with premier indie, major, and international music labels across Bollywood, hip-hop, electronic, and pop music.
        </p>
      </div>

      {/* Infinite Logo Cloud Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 flex flex-col gap-6 group">
        {/* Left & Right Edge Fade Overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#000000] via-[#000000]/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Row 1 - Moving Left */}
        <div className="flex items-center gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {repeatedRow1.map((label, idx) => (
            <LabelCard key={idx} name={label.name} category={label.category} />
          ))}
        </div>

        {/* Marquee Row 2 - Moving Right (Reverse) */}
        <div className="flex items-center gap-6 w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {repeatedRow2.map((label, idx) => (
            <LabelCard key={idx} name={label.name} category={label.category} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LabelCard: React.FC<{ name: string; category?: string }> = ({
  name,
  category,
}) => (
  <div className="bg-[#14121a] border border-white/15 px-7 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:border-[#FF0043] hover:bg-white/[0.06] hover:scale-105 shrink-0 shadow-lg cursor-pointer group/card">
    {/* Stylized Label Badge Icon */}
    <div className="w-8 h-8 rounded-full bg-[#FF0043]/15 border border-[#FF0043]/30 flex items-center justify-center text-[#FF0043] font-space font-black text-xs shrink-0 group-hover/card:bg-[#FF0043] group-hover/card:text-white transition-colors">
      {name.charAt(0)}
    </div>

    <div>
      <h4 className="font-sans font-black text-sm sm:text-base tracking-wider uppercase text-white group-hover/card:text-[#ffe600] transition-colors whitespace-nowrap">
        {name}
      </h4>
      {category && (
        <span className="font-space font-extrabold text-[9px] tracking-widest uppercase text-white/50 block">
          {category}
        </span>
      )}
    </div>
  </div>
);
