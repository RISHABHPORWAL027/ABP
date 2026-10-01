import React from "react";
import Image from "next/image";

const Globe: React.FC = () => {
  return (
    <>
      <style>
        {`
          @keyframes spinVinyl {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes neonGlowPulse {
            0%, 100% {
              box-shadow: 0 0 35px rgba(255, 0, 67, 0.4), 0 0 70px rgba(255, 0, 67, 0.2);
            }
            50% {
              box-shadow: 0 0 55px rgba(255, 0, 67, 0.7), 0 0 100px rgba(255, 230, 0, 0.25);
            }
          }
        `}
      </style>

      <div className="flex items-center justify-center h-screen select-none">
        {/* Outer Neon Red Glow Wrapper */}
        <div
          className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full flex items-center justify-center border-2 border-[#FF0043]/60"
          style={{ animation: "neonGlowPulse 3.5s ease-in-out infinite" }}
        >
          {/* Main Auto-Rotating Dark Vinyl Record Body */}
          <div
            className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center"
            style={{
              animation: "spinVinyl 20s linear infinite",
              background: `
                conic-gradient(from 120deg at center, transparent 0deg, rgba(255,255,255,0.07) 30deg, transparent 60deg, rgba(255,255,255,0.05) 200deg, transparent 230deg),
                repeating-radial-gradient(circle at center, #141419 0px, #08080a 2px, #1d1d26 4px, #0b0b0e 6px)
              `,
            }}
          >
            {/* Outer Vinyl Edge Ring */}
            <div className="absolute inset-1 rounded-full border border-[#FF0043]/40 pointer-events-none" />
            <div className="absolute inset-4 rounded-full border border-white/10 pointer-events-none" />

            {/* Curved Circular Yellow Typography */}
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ transform: "rotate(-90deg)" }}
            >
              <path
                id="vinylTextCircle"
                d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                fill="none"
              />
              <text className="font-space font-extrabold text-[9px] uppercase tracking-[2.7px] fill-[#ffe600]">
                <textPath href="#vinylTextCircle" startOffset="0%">
                  ALL BY PLAY • MUSIC STRATEGY • ARTIST GROWTH • DATA & CULTURE •
                </textPath>
              </text>
            </svg>

            {/* Inner Vinyl Groove Rings */}
            <div className="absolute inset-10 rounded-full border border-white/10 pointer-events-none" />
            <div className="absolute inset-16 rounded-full border border-[#FF0043]/20 pointer-events-none" />
            <div className="absolute inset-24 rounded-full border border-white/10 pointer-events-none" />
          </div>

          {/* Clean Upright Center Hub with ALL BY PLAY Logo */}
          <div className="relative z-20 w-[42%] h-[42%] rounded-full bg-gradient-to-br from-[#FF0043] via-[#c40034] to-[#7d0021] border-2 border-white/30 flex items-center justify-center p-3.5 shadow-[0_0_30px_rgba(255,0,67,0.5),inset_0_0_15px_rgba(0,0,0,0.8)]">
            {/* Center Spindle Hub */}
            <div className="relative w-full h-full rounded-full bg-[#0a0a0c] border border-white/20 flex items-center justify-center p-2 shadow-inner">
              <Image
                src="/ABP_logo.png"
                alt="All By Play Logo"
                width={84}
                height={84}
                className="object-contain filter drop-shadow-[0_0_10px_rgba(255,0,67,0.7)]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Globe;
