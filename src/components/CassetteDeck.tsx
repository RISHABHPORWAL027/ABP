"use client";

import React, { useState } from "react";
import { Play, Pause, RotateCcw, FastForward, Square } from "lucide-react";

export const CassetteDeck: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="relative group w-full max-w-[460px] mx-auto font-sans">
      {/* Outer Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0043]/30 via-[#009082]/20 to-[#FF0043]/30 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

      {/* Rotating Ring Badge Floating Top-Right */}
      <div className="absolute -top-10 -right-8 z-30 pointer-events-none hidden sm:block">
        <div className="relative w-28 h-28 flex items-center justify-center animate-spin-slow">
          <svg className="w-full h-full text-white/40" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              fill="none"
            />
            <text className="text-[10px] font-space font-extrabold uppercase tracking-[2.5px] fill-white/80">
              <textPath href="#circlePath">
                • STRATEGY • CULTURE • GROWTH
              </textPath>
            </text>
          </svg>
          <span className="absolute w-3 h-3 rounded-full bg-[#FF0043] animate-ping" />
          <span className="absolute w-2.5 h-2.5 rounded-full bg-[#FF0043]" />
        </div>
      </div>

      {/* Format Master Pill Badge */}
      <div className="absolute -top-4 left-6 z-30 flex items-center gap-2 bg-[#1A1A1A] border border-white/20 px-3.5 py-1 rounded-full shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#009082] animate-pulse" />
        <span className="font-space text-[10px] font-bold tracking-widest uppercase text-white/80">
          FORMAT MASTER • Retro Cassette • Hi-Fi
        </span>
      </div>

      {/* Main Deck Container (Secondary #1A1A1A / Sleek Dark Body) */}
      <div className="relative z-20 bg-[#141218] border border-white/15 rounded-[28px] p-6 shadow-2xl overflow-hidden">
        
        {/* Top Status Header Bar */}
        <div className="flex items-center justify-between font-space text-xs font-bold tracking-widest mb-4 pt-2 text-white/70 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-white">
            <span className="text-[#FF0043]">A •</span> STEREO HI-FI
          </div>
          <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-md border border-white/10 font-mono text-[#009082]">
            <span>COUNTER</span>
            <span className="text-white font-bold">04:20</span>
          </div>
        </div>

        {/* Cassette Display / Video Window Screen */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/15 shadow-inner mb-5 group/screen">
          {/* YouTube Showcase Video or Graphic Background */}
          <iframe
            src="https://www.youtube-nocookie.com/embed/FzjBVeOJdug?autoplay=1&mute=1&loop=1&playlist=FzjBVeOJdug&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="ABP Cassette Video"
            className="w-full h-full object-cover scale-110 opacity-90 pointer-events-none"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Top Label Tag */}
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-[10px] font-space font-extrabold uppercase text-white/80">
            ANALOG SOUL
          </div>

          {/* Bottom Label Tag */}
          <div className="absolute bottom-3 right-3 bg-[#FF0043]/90 text-white font-space font-black text-[10px] px-2.5 py-1 rounded-md tracking-wider uppercase shadow-md">
            CHROMA TYPE II
          </div>
        </div>

        {/* Master Vol & Bass Boost Equalizer */}
        <div className="flex items-center justify-between font-space text-[10px] font-extrabold text-white/60 mb-4 px-1">
          <span className="tracking-widest uppercase text-white/80">
            MASTER VOL // BASS BOOST
          </span>
          {/* Equalizer LED bars */}
          <div className="flex items-center gap-1">
            <span className={`w-1.5 h-3 rounded-xs ${isPlaying ? 'bg-[#009082] animate-pulse' : 'bg-white/20'}`} />
            <span className={`w-1.5 h-3 rounded-xs ${isPlaying ? 'bg-[#009082] animate-pulse' : 'bg-white/20'}`} />
            <span className={`w-1.5 h-3 rounded-xs ${isPlaying ? 'bg-[#FF0043] animate-pulse' : 'bg-white/20'}`} />
            <span className={`w-1.5 h-3 rounded-xs ${isPlaying ? 'bg-[#FF0043] animate-pulse' : 'bg-white/20'}`} />
          </div>
        </div>

        {/* Tactile Cassette Control Buttons */}
        <div className="grid grid-cols-4 gap-2.5 pt-1">
          {/* REW */}
          <button className="bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl py-3 flex items-center justify-center gap-1 text-white/80 font-space font-extrabold text-[11px] tracking-wider transition-colors">
            <RotateCcw className="w-3.5 h-3.5" />
            REW
          </button>

          {/* PLAY */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-[#FF0043] hover:bg-[#FF0043]/90 text-white border border-[#FF0043] rounded-xl py-3 flex items-center justify-center gap-1 font-space font-black text-[11px] tracking-wider shadow-lg shadow-[#FF0043]/30 transition-transform active:scale-95"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-white" />
                PLAY
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-white" />
                PLAY
              </>
            )}
          </button>

          {/* FF */}
          <button className="bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl py-3 flex items-center justify-center gap-1 text-white/80 font-space font-extrabold text-[11px] tracking-wider transition-colors">
            FF
            <FastForward className="w-3.5 h-3.5" />
          </button>

          {/* STOP */}
          <button
            onClick={() => setIsPlaying(false)}
            className="bg-white/5 hover:bg-white/15 border border-white/10 rounded-xl py-3 flex items-center justify-center gap-1 text-white/80 font-space font-extrabold text-[11px] tracking-wider transition-colors"
          >
            <Square className="w-3 h-3 fill-current" />
            STOP
          </button>
        </div>

      </div>

      {/* Floating Audio Player Pill Widget (Bottom Right) */}
      <div className="absolute -bottom-6 -right-4 z-30 bg-[#0c0b10] text-white p-3.5 px-4 rounded-2xl shadow-2xl border border-white/15 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#FF0043] text-white flex items-center justify-center font-space font-black text-[10px] shadow-md">
          <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
        </div>
        <div>
          <div className="text-[9px] font-space font-bold uppercase tracking-wider text-[#009082]">
            NOW BUILDING
          </div>
          <div className="text-xs font-sans font-bold text-white leading-tight">
            Your next release
          </div>
        </div>
        {/* Animated equalizer bars */}
        <div className="flex items-end justify-between gap-1 h-4 pl-2">
          <span className="w-1 bg-[#009082] rounded-full animate-bar-1" />
          <span className="w-1 bg-[#009082] rounded-full animate-bar-2" />
          <span className="w-1 bg-[#009082] rounded-full animate-bar-3" />
          <span className="w-1 bg-[#009082] rounded-full animate-bar-4" />
        </div>
      </div>

    </div>
  );
};
