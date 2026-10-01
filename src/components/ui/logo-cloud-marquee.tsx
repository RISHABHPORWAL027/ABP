"use client";

import React from "react";

interface LabelLogo {
  name: string;
  category?: string;
  icon: React.ReactNode;
}

const labelsList: LabelLogo[] = [
  {
    name: "WARNER MUSIC GROUP",
    category: "MAJOR LABEL",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 22h3.6l3.4-8.5L12 18l2-4.5 3.4 8.5H21L12 2z" />
      </svg>
    ),
  },
  {
    name: "SAREGAMA",
    category: "MUSIC & FILM",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
      </svg>
    ),
  },
  {
    name: "SONY MUSIC",
    category: "GLOBAL MAJOR",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
  {
    name: "UNIVERSAL MUSIC GROUP",
    category: "UMG",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "ZEE MUSIC CO.",
    category: "BOLLYWOOD & INDIE",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 4h14l-10 16h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "TIPS MUSIC",
    category: "RECORDINGS",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 18V5l10-2v13M9 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3zm10-2a3 3 0 1 1-3-3 3 3 0 0 1 3 3z" />
      </svg>
    ),
  },
  {
    name: "MERCHANT RECORDS",
    category: "INDIE LABEL",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" />
      </svg>
    ),
  },
  {
    name: "NORTH RECORDS",
    category: "REGIONAL",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" />
      </svg>
    ),
  },
  {
    name: "ALL FOR SOUL",
    category: "INDEPENDENT",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    name: "G' RECORDINGS",
    category: "INDIE HIP-HOP",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-3v-2h3v2zm1-5h-4V7h4v4z" />
      </svg>
    ),
  },
  {
    name: "TM MUSIC",
    category: "LABEL & MGMT",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 6h8v3H7v9H4V9H3V6zm10 0h3l2.5 6L21 6h3v12h-3V11l-2.5 6h-1L15 11v7h-2V6z" />
      </svg>
    ),
  },
  {
    name: "A* ARTISTS",
    category: "TALENT AGENCY",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
  },
  {
    name: "ATLANTIC RECORDS",
    category: "WARNER MUSIC",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L2 12l10 9 10-9-10-9zm0 3.8L17.8 12 12 17.2 6.2 12 12 6.8z" />
      </svg>
    ),
  },
  {
    name: "DEF JAM RECORDINGS",
    category: "HIP-HOP / URBAN",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "DAY ONE",
    category: "SONY MUSIC INDIA",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 5h2v6h-2V7zm1 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      </svg>
    ),
  },
  {
    name: "TIMES MUSIC",
    category: "SPIRITUAL & POP",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="4" width="18" height="3" rx="1.5" />
        <rect x="10.5" y="7" width="3" height="13" rx="1.5" />
      </svg>
    ),
  },
  {
    name: "i RECORDS",
    category: "INDEPENDENT",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="6" r="2" />
        <rect x="10.5" y="10" width="3" height="9" rx="1" />
      </svg>
    ),
  },
  {
    name: "VYRL ORIGINALS",
    category: "UNIVERSAL MUSIC",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
      </svg>
    ),
  },
  {
    name: "EYP CREATIONS",
    category: "PUNJABI & INDIE",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h20L12 2zm0 5l6.5 12h-13L12 7z" />
      </svg>
    ),
  },
  {
    name: "SHARK & INK",
    category: "TALENT & BOUTIQUE",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c5.52 0 10 4.48 10 10 0 4.28-2.69 7.93-6.47 9.35l-1.03-3.48c2.47-.93 4.22-3.3 4.22-6.07 0-3.71-3.01-6.72-6.72-6.72S5.28 8.09 5.28 11.8c0 2.77 1.75 5.14 4.22 6.07l-1.03 3.48C4.69 19.93 2 16.28 2 12 2 6.48 6.48 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "55 RECORDS",
    category: "INDIE ARTIST",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h7v3H7v3h4v8H4v-3h4v-2H4V4zm10 0h7v3h-4v3h4v8h-7v-3h4v-2h-4V4z" />
      </svg>
    ),
  },
  {
    name: "AWAL",
    category: "MUSIC DISTRIBUTION",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 20h4l6-12 6 12h4L12 2z" />
      </svg>
    ),
  },
  {
    name: "AZADI RECORDS",
    category: "DESI HIP-HOP",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    name: "ULTRA RECORDS",
    category: "ELECTRONIC",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 12h3v8H2v-8zm5-5h3v13H7V7zm5-4h3v17h-3V3zm5 7h3v10h-3V10zm5-3h3v13h-3V7z" />
      </svg>
    ),
  },
  {
    name: "MASS APPEAL",
    category: "GLOBAL HIP-HOP",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h3l5 9 5-9h3v16h-3V9.5L12 18l-5-8.5V20H4V4z" />
      </svg>
    ),
  },
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
            <LabelCard key={idx} name={label.name} category={label.category} icon={label.icon} />
          ))}
        </div>

        {/* Marquee Row 2 - Moving Right (Reverse) */}
        <div className="flex items-center gap-6 w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {repeatedRow2.map((label, idx) => (
            <LabelCard key={idx} name={label.name} category={label.category} icon={label.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LabelCard: React.FC<{ name: string; category?: string; icon: React.ReactNode }> = ({
  name,
  category,
  icon,
}) => (
  <div className="bg-[#14121a] border border-white/15 px-6 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:border-[#FF0043] hover:bg-white/[0.08] hover:scale-105 shrink-0 shadow-lg cursor-pointer group/card">
    {/* Stylized Label Logo Icon Badge */}
    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center text-[#FF0043] group-hover/card:text-[#ffe600] group-hover/card:border-[#FF0043]/50 shrink-0 transition-colors shadow-inner">
      {icon}
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
