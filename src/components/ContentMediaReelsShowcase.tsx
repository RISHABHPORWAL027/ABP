"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Music2,
  Volume2,
  VolumeX,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface ReelData {
  id: string;
  name: string;
  playlistTitle: string;
  category: string;
  shortcode: string;
  instagramUrl: string;
  videoSrc: string;
  posterSrc: string;
  likes: string;
  numericLikes: number;
  comments: string;
  caption: string;
  audioTrack: string;
  strategyHook: string;
  keyMetric: string;
  authorUsername?: string;
  authorDisplayName?: string;
  authorVerified?: boolean;
}

const CONTENT_REELS_DATA: ReelData[] = [
  {
    id: "kishore",
    name: "Kishore",
    playlistTitle: "Kishore Kumar Hits",
    category: "Golden Era Classics",
    shortcode: "DdD-5XEMn7x",
    instagramUrl: "https://www.instagram.com/p/DdD-5XEMn7x/#advertiser",
    videoSrc: "/services/reels/kishore.mp4",
    posterSrc: "/services/reels/kishore.jpg",
    likes: "85K",
    numericLikes: 85200,
    comments: "27",
    caption: "Tap on Listen Now 🎧🎶 #kishorekumar #evergreen #universalmusicindia",
    audioTrack: "Kishore Kumar Hits · Universal Music India",
    strategyHook:
      "Golden-era nostalgia hook paired with dynamic bold kinetic typography, converting passive scrollers into long-session Spotify playlist listeners.",
    keyMetric: "85K+ Likes · Top Converting Ad Creative",
    authorUsername: "universalmusicindia",
    authorDisplayName: "Universal Music India",
    authorVerified: true,
  },
  {
    id: "rafi",
    name: "Rafi",
    playlistTitle: "Mohammed Rafi Classics",
    category: "Evergreen Romantic",
    shortcode: "DdD-STCsMxH",
    instagramUrl: "https://www.instagram.com/p/DdD-STCsMxH/#advertiser",
    videoSrc: "/services/reels/rafi.mp4",
    posterSrc: "/services/reels/rafi.jpg",
    likes: "15K",
    numericLikes: 15400,
    comments: "18",
    caption: "Tap on Listen Now 🎧🎶 #mohammedrafi #classics #retrobollywood",
    audioTrack: "Mohammed Rafi Classics · Universal Music India",
    strategyHook:
      "Lyric-first emotive hook designed for high shareability and playlist saves across cross-generational classic music enthusiasts.",
    keyMetric: "15K+ Likes · Exceptional Share Velocity",
    authorUsername: "universalmusicindia",
    authorDisplayName: "Universal Music India",
    authorVerified: true,
  },
  {
    id: "lofi",
    name: "Lofi",
    playlistTitle: "Lofi Chill Hindi",
    category: "Gen-Z & Chillhop",
    shortcode: "Dd3rVMGsLLD",
    instagramUrl: "https://www.instagram.com/p/Dd3rVMGsLLD/#advertiser",
    videoSrc: "/services/reels/lofi.mp4",
    posterSrc: "/services/reels/lofi.jpg",
    likes: "3.1K",
    numericLikes: 3154,
    comments: "4",
    caption: "Tap on Listen Now... 🎧✨ #lofichill #slowedandreverb #midnightvibes",
    audioTrack: "Lofi Chill Hindi · Universal Music India",
    strategyHook:
      "Midnight ambient aesthetic paired with slowed+reverb audio cues, tailored for study/chill algorithmic recommendations.",
    keyMetric: "3.1K+ Likes · High Loop Retention",
    authorUsername: "universalmusicindia",
    authorDisplayName: "Universal Music India",
    authorVerified: true,
  },
  {
    id: "sadabahar",
    name: "Sadabahar",
    playlistTitle: "Sadabahar Naghme",
    category: "All-Time Melodies",
    shortcode: "Dd3sKchszqQ",
    instagramUrl: "https://www.instagram.com/p/Dd3sKchszqQ/#advertiser",
    videoSrc: "/services/reels/sadabahar.mp4",
    posterSrc: "/services/reels/sadabahar.jpg",
    likes: "17K",
    numericLikes: 17100,
    comments: "24",
    caption: "Tap on Listen Now 🎧🎶 #sadabaharnaghme #vintagemusic #bollyretro",
    audioTrack: "Sadabahar Naghme · Universal Music India",
    strategyHook:
      "Vibrant high-contrast visuals showcasing iconic evergreen anthems to drive immediate playlist follows and saves.",
    keyMetric: "17K+ Likes · High Click-Through Rate",
    authorUsername: "universalmusicindia",
    authorDisplayName: "Universal Music India",
    authorVerified: true,
  },
  {
    id: "bollywood_romantic",
    name: "Bollywood Romantic",
    playlistTitle: "Bollywood Romantic",
    category: "Love Anthems",
    shortcode: "Dd_CXxesv-F",
    instagramUrl: "https://www.instagram.com/p/Dd_CXxesv-F/#advertiser",
    videoSrc: "/services/reels/bollywood_romantic.mp4",
    posterSrc: "/services/reels/bollywood_romantic.jpg",
    likes: "11K",
    numericLikes: 11200,
    comments: "2",
    caption: "Tap on Listen Now.. 🌹🎵 #bollywoodromantic #lovesongs #soulful",
    audioTrack: "Bollywood Romantic · Universal Music India",
    strategyHook:
      "Warm atmospheric storytelling crafted for romance and mood playlists, driving high Spotify algorithmic radio pull.",
    keyMetric: "11K+ Likes · Top CTR on Conversion Ads",
    authorUsername: "universalmusicindia",
    authorDisplayName: "Universal Music India",
    authorVerified: true,
  },
];

interface PhoneMockupProps {
  reel: ReelData;
  isMuted: boolean;
  onToggleMute: () => void;
  isLiked: boolean;
  onToggleLike: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({
  reel,
  isMuted,
  onToggleMute,
  isLiked,
  onToggleLike,
  isSaved,
  onToggleSave,
}) => {
  return (
    <div className="relative w-[240px] sm:w-[265px] md:w-[285px] h-[490px] sm:h-[540px] md:h-[580px] rounded-[44px] sm:rounded-[48px] bg-[#1a191f] p-2.5 sm:p-3 shadow-[0_22px_55px_rgba(0,0,0,0.85),0_0_24px_rgba(255,0,67,0.18)] border-2 border-white/20 flex-shrink-0 transition-transform duration-500 hover:scale-[1.025] group/phone select-none">
      {/* Hardware Side Buttons */}
      <div className="absolute -left-[4px] top-20 w-[2.5px] h-5 bg-[#2c2b33] rounded-l-xs" />
      <div className="absolute -left-[4px] top-28 w-[2.5px] h-9 bg-[#2c2b33] rounded-l-xs" />
      <div className="absolute -left-[4px] top-40 w-[2.5px] h-9 bg-[#2c2b33] rounded-l-xs" />
      <div className="absolute -right-[4px] top-30 w-[2.5px] h-13 bg-[#2c2b33] rounded-r-xs" />

      {/* Screen */}
      <div className="relative w-full h-full bg-[#000000] rounded-[36px] sm:rounded-[40px] overflow-hidden border border-white/10 shadow-inner">
        {/* Video Element */}
        <video
          playsInline
          autoPlay
          loop
          muted={isMuted}
          poster={reel.posterSrc}
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={reel.videoSrc} type="video/mp4" />
        </video>

        {/* Top Vignette */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none z-10" />

        {/* Bottom Vignette */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none z-10" />

        {/* Right Vignette */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/45 via-transparent to-transparent pointer-events-none z-10" />

        {/* Top iOS Status Bar */}
        <div className="absolute top-0 inset-x-0 z-30 px-5 pt-2 pb-1 flex items-center justify-between text-white text-[10px] font-semibold tracking-tight pointer-events-none">
          <span>9:41</span>
          {/* Dynamic Island */}
          <div className="w-20 sm:w-22 h-4.5 sm:h-5 bg-black rounded-full flex items-center justify-between px-1.5 border border-white/10 shadow-md">
            <div className="w-1.5 h-1.5 rounded-full bg-[#18181b] border border-white/10" />
            <div className="w-1 h-1 rounded-full bg-[#064e3b]" />
          </div>
          {/* Battery / Status */}
          <div className="flex items-center gap-1">
            <div className="flex items-end gap-[1px] h-2">
              <span className="w-[1.5px] h-1 bg-white rounded-xs" />
              <span className="w-[1.5px] h-1.5 bg-white rounded-xs" />
              <span className="w-[1.5px] h-2 bg-white rounded-xs" />
            </div>
            <div className="w-3.5 h-2 rounded-[2px] border border-white flex items-center p-[0.5px]">
              <div className="w-full h-full bg-white rounded-[0.5px]" />
            </div>
          </div>
        </div>

        {/* Top Nav: Reels label + Mute toggle */}
        <div className="absolute top-7 sm:top-8 inset-x-0 z-30 px-3.5 sm:px-4 py-1.5 flex items-center justify-between text-white">
          <div className="flex items-center gap-1 drop-shadow">
            <span className="font-sans font-bold text-sm sm:text-base tracking-tight">Reels</span>
            <span className="text-[9px] text-white/70">▾</span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleMute();
            }}
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors cursor-pointer"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <VolumeX className="w-3 h-3 text-white/80" />
            ) : (
              <Volume2 className="w-3 h-3 text-[#FF0043]" />
            )}
          </button>
        </div>

        {/* Right Action Rail */}
        <div className="absolute right-2.5 sm:right-3 bottom-14 sm:bottom-16 z-30 flex flex-col items-center gap-3 text-white">
          {/* Like Heart */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleLike();
            }}
            className="flex flex-col items-center gap-0.5 group/btn cursor-pointer"
          >
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-transform active:scale-125",
                isLiked ? "text-[#FF0043]" : "text-white"
              )}
            >
              <Heart
                className={cn(
                  "w-5 h-5 sm:w-5.5 sm:h-5.5 transition-colors",
                  isLiked ? "fill-[#FF0043] stroke-[#FF0043]" : "stroke-white"
                )}
              />
            </div>
            <span className="text-[9px] sm:text-[10px] font-semibold text-white/95 drop-shadow">
              {isLiked
                ? `${(reel.numericLikes + 1).toLocaleString()}`
                : reel.likes}
            </span>
          </button>

          {/* Comment */}
          <div className="flex flex-col items-center gap-0.5 cursor-pointer">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white">
              <MessageCircle className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-white" />
            </div>
            <span className="text-[9px] sm:text-[10px] font-semibold text-white/95 drop-shadow">
              {reel.comments}
            </span>
          </div>

          {/* Share */}
          <div className="flex flex-col items-center gap-0.5 cursor-pointer">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white">
              <Send className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-white" />
            </div>
            <span className="text-[8px] sm:text-[9px] font-semibold text-white/95 drop-shadow">
              Share
            </span>
          </div>

          {/* Bookmark */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave();
            }}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white cursor-pointer"
          >
            <Bookmark
              className={cn(
                "w-4.5 h-4.5 sm:w-5 sm:h-5 transition-colors",
                isSaved ? "fill-white stroke-white" : "stroke-white"
              )}
            />
          </button>

          {/* Spinning Mini Vinyl Record */}
          <div className="mt-0.5 relative cursor-pointer">
            <div
              className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-gradient-to-tr from-[#18181b] via-[#27272a] to-[#18181b] border-2 border-white/40 shadow-lg flex items-center justify-center animate-spin"
              style={{ animationDuration: "5s" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF0043] border border-white/60 flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-white" />
              </div>
            </div>
            <Music2 className="w-2.5 h-2.5 text-[#FF0043] absolute -top-1 -left-1 animate-bounce" />
          </div>
        </div>

        {/* Bottom Caption & Profile Overlay */}
        <div className="absolute left-3 right-12 bottom-3 z-30 flex flex-col gap-1 text-white">
          {/* Profile Row */}
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full p-[1px] bg-gradient-to-tr from-[#ffe600] via-[#FF0043] to-[#d946ef] flex items-center justify-center shadow-md">
              <div className="w-full h-full rounded-full bg-[#000000] flex items-center justify-center text-[7px] font-black font-space text-white">
                UMI
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-sans font-bold text-[11px] sm:text-xs tracking-tight text-white drop-shadow truncate max-w-[100px]">
                {reel.authorUsername || "universalmusicindia"}
              </span>
              <CheckCircle2 className="w-3 h-3 text-[#38bdf8] fill-[#38bdf8] stroke-black flex-shrink-0" />
            </div>
            <span className="text-[8px] bg-white/20 px-1 py-0.2 rounded text-white/90 font-mono">
              Ad
            </span>
          </div>

          {/* Caption Snippet */}
          <p className="font-sans text-[10px] sm:text-[11px] text-white/95 leading-tight line-clamp-2 drop-shadow">
            {reel.caption}
          </p>

          {/* "Listen Now" CTA Pill */}
          <div className="pt-0.5">
            <Link
              href={reel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-[#FF0043] hover:bg-[#FF0043]/90 text-white font-sans font-extrabold text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full shadow-md transition-transform active:scale-95"
            >
              <span>Listen Now 🎧</span>
              <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" />
            </Link>
          </div>

          {/* Audio Track Marquee */}
          <div className="flex items-center gap-1 text-[9px] text-white/80 pt-0.5">
            <Music2 className="w-2.5 h-2.5 text-white/90 flex-shrink-0" />
            <span className="truncate">{reel.audioTrack}</span>
          </div>
        </div>

        {/* Bottom subtle progress line */}
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-white/25 z-40">
          <div className="h-full bg-[#FFE600] w-2/3 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export const ContentMediaReelsShowcase: React.FC = () => {
  const [unmutedReelKey, setUnmutedReelKey] = useState<string | null>(null);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [savedMap, setSavedMap] = useState<Record<string, boolean>>({});
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Repeat the 5 reels 3 times for a seamless, continuous infinite horizontal marquee
  const duplicatedReels = [
    ...CONTENT_REELS_DATA,
    ...CONTENT_REELS_DATA,
    ...CONTENT_REELS_DATA,
  ];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-black/15 bg-[#000000] select-none group">
      {/* 1. SIGNATURE TOP RED HEADER BAR (#FF0043) */}
      <div className="w-full bg-[#FF0043] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border-b border-black/20 text-black">
        <span className="font-mono font-black text-xs sm:text-sm tracking-wider uppercase">
          CONTENT / VISUAL NOTES
        </span>
        <span className="font-mono font-black text-xs sm:text-sm tracking-widest uppercase">
          05 REELS
        </span>
      </div>

      {/* 2. HORIZONTAL AUTO-SCROLLING PHONES STAGE */}
      <div
        className="relative w-full h-[530px] sm:h-[590px] md:h-[640px] overflow-hidden bg-gradient-to-b from-[#090810] via-[#050408] to-[#020204] flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF0043]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#FFE600]/8 rounded-full blur-3xl pointer-events-none" />

        {/* Left & Right Edge Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent z-40 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-[#000000] via-[#000000]/80 to-transparent z-40 pointer-events-none" />

        {/* Keyframe animation for infinite horizontal auto-scroll */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes marquee-phones-content {
                0% {
                  transform: translate3d(0, 0, 0);
                }
                100% {
                  transform: translate3d(-33.333333%, 0, 0);
                }
              }
              .animate-marquee-phones-content {
                animation: marquee-phones-content 38s linear infinite;
              }
              .animate-marquee-phones-content-paused {
                animation-play-state: paused !important;
              }
            `,
          }}
        />

        {/* Infinite Moving Phones Track */}
        <div
          className={cn(
            "flex items-center gap-6 sm:gap-8 md:gap-10 pl-6 animate-marquee-phones-content will-change-transform",
            isPaused && "animate-marquee-phones-content-paused"
          )}
          style={{ width: "max-content" }}
        >
          {duplicatedReels.map((reel, index) => {
            const uniqueKey = `content-${reel.id}-${index}`;
            const isThisMuted = unmutedReelKey !== uniqueKey;
            const isLiked = !!likedMap[uniqueKey];
            const isSaved = !!savedMap[uniqueKey];

            return (
              <PhoneMockup
                key={uniqueKey}
                reel={reel}
                isMuted={isThisMuted}
                onToggleMute={() => {
                  setUnmutedReelKey((prev) =>
                    prev === uniqueKey ? null : uniqueKey
                  );
                }}
                isLiked={isLiked}
                onToggleLike={() => {
                  setLikedMap((prev) => ({
                    ...prev,
                    [uniqueKey]: !prev[uniqueKey],
                  }));
                }}
                isSaved={isSaved}
                onToggleSave={() => {
                  setSavedMap((prev) => ({
                    ...prev,
                    [uniqueKey]: !prev[uniqueKey],
                  }));
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentMediaReelsShowcase;
