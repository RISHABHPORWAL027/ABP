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

const REELS_DATA: ReelData[] = [
  {
    id: "venkatesh",
    name: "Vyankatesh Pande",
    playlistTitle: "Viral Reel Campaign",
    category: "Couple Comedy / Trend",
    shortcode: "DcVS5V5sxhE",
    instagramUrl: "https://www.instagram.com/reel/DcVS5V5sxhE/?igsi=MThwdTB4MzdtNWliMA==",
    videoSrc: "/services/reels/instagram/DcVS5V5sxhE.mp4",
    posterSrc: "/services/reels/instagram/DcVS5V5sxhE.jpg",
    likes: "94K",
    numericLikes: 93940,
    comments: "357",
    caption: "This is how to get her hug😉🤍 #reels #viral #trending #chocolate #adiven",
    audioTrack: "Trending Audio · ABP Viral Strategy",
    strategyHook:
      "Relatable situational comedy hook that converts passive viewers into highly engaged listeners and sound replays.",
    keyMetric: "94K+ Likes · Top Creator Reach",
    authorUsername: "venkatesh.pande",
    authorDisplayName: "Vyankatesh Pande",
    authorVerified: true,
  },
  {
    id: "beat_push",
    name: "Radhika Nrk",
    playlistTitle: "Release Beat Drop",
    category: "Audio Trend Push",
    shortcode: "DcIqowuyZoB",
    instagramUrl: "https://www.instagram.com/reels/DcIqowuyZoB/",
    videoSrc: "/services/reels/instagram/DcIqowuyZoB.mp4",
    posterSrc: "/services/reels/instagram/DcIqowuyZoB.jpg",
    likes: "48K",
    numericLikes: 48200,
    comments: "142",
    caption: "Drop that beat 🎧✨ Tap on Listen Now to stream the full track #indie #trendingaudio",
    audioTrack: "Original Release Sound · ABP Campaign",
    strategyHook:
      "High-energy hook crafted for rapid discoverability and Spotify library additions.",
    keyMetric: "48K+ Likes · High Conversion",
    authorUsername: "radhikanrk",
    authorDisplayName: "Radhika Nrk",
    authorVerified: true,
  },
  {
    id: "music_discovery",
    name: "Music Discovery",
    playlistTitle: "Indie Discovery",
    category: "Late Night Playlist",
    shortcode: "DXEuGdmiTOK",
    instagramUrl: "https://www.instagram.com/reel/DXEuGdmiTOK/",
    videoSrc: "/services/reels/instagram/DXEuGdmiTOK.mp4",
    posterSrc: "/services/reels/instagram/DXEuGdmiTOK.jpg",
    likes: "32K",
    numericLikes: 32400,
    comments: "88",
    caption: "New song recommendation for your late-night drive playlist 🌙🎵 #newsong #indieartist",
    audioTrack: "Indie Pop Audio · All By Play",
    strategyHook:
      "Aesthetic editorial curation tailored for moody late-night playlists and high bookmark velocity.",
    keyMetric: "32K+ Likes · High Loop Retention",
    authorUsername: "music.discovery.in",
    authorDisplayName: "Music Discovery",
    authorVerified: false,
  },
  {
    id: "sameera",
    name: "Sameera Soni",
    playlistTitle: "Majboor Campaign",
    category: "Lip-Sync & Dance",
    shortcode: "DW_oQgnk6uF",
    instagramUrl: "https://www.instagram.com/reel/DW_oQgnk6uF/?igsh=MWE1NmZ1cWdjd2dmOQ%3D%3D",
    videoSrc: "/services/reels/instagram/DW_oQgnk6uF.mp4",
    posterSrc: "/services/reels/instagram/DW_oQgnk6uF.jpg",
    likes: "217K",
    numericLikes: 217000,
    comments: "1,153",
    caption: "This songgg has been playing in my head 24/7 😭❤️ #majboor #aapkahikehnabanta #samira #lipsync #viral",
    audioTrack: "Majboor · Aap Kahi Kehna Banta",
    strategyHook:
      "Viral earworm lip-sync activation generating exponential audio usage across creator ecosystems.",
    keyMetric: "217K+ Likes · 1.1K+ Comments · Mega Viral",
    authorUsername: "samiraahaha",
    authorDisplayName: "Sameera Soni",
    authorVerified: true,
  },
  {
    id: "shreyaa",
    name: "Shreyaa Thapa",
    playlistTitle: "Aesthetic Lifestyle",
    category: "Slowed & Reverb Mood",
    shortcode: "DZxgHZoJejp",
    instagramUrl: "https://www.instagram.com/reels/DZxgHZoJejp/",
    videoSrc: "/services/reels/instagram/DZxgHZoJejp.mp4",
    posterSrc: "/services/reels/instagram/DZxgHZoJejp.jpg",
    likes: "39K",
    numericLikes: 38874,
    comments: "52",
    caption: "🙏 #foryou #fyp #explorepage✨ #trending #reelitfeelit",
    audioTrack: "Trending Audio · ABP Indie Pulse",
    strategyHook:
      "Atmospheric lifestyle visuals synced to melodic hooks, driving strong sound saves and repeat views.",
    keyMetric: "39K+ Likes · High Share Velocity",
    authorUsername: "shr3yaa.thapa",
    authorDisplayName: "shreyaa",
    authorVerified: false,
  },
  {
    id: "momo",
    name: "Momo Art",
    playlistTitle: "Jo Na Ho Tum",
    category: "Digital Art & Story",
    shortcode: "DaNw0lssDjk",
    instagramUrl: "https://www.instagram.com/reels/DaNw0lssDjk/",
    videoSrc: "/services/reels/instagram/DaNw0lssDjk.mp4",
    posterSrc: "/services/reels/instagram/DaNw0lssDjk.jpg",
    likes: "18K",
    numericLikes: 18200,
    comments: "45",
    caption: "Jo na ho tum stream now. #explore #art #artist #digitalart #couples",
    audioTrack: "Jo Na Ho Tum · Official Sound",
    strategyHook:
      "Hand-crafted visual animation pairing music lyrics with heartwarming relationship art.",
    keyMetric: "18K+ Likes · Niche Art Audience",
    authorUsername: "momo_yarrrr",
    authorDisplayName: "momo✧",
    authorVerified: false,
  },
  {
    id: "aditya",
    name: "Aditya Khalkho",
    playlistTitle: "Cinematography Film",
    category: "Cinematic Film Edit",
    shortcode: "DZuss_5yKRA",
    instagramUrl: "https://www.instagram.com/reels/DZuss_5yKRA/",
    videoSrc: "/services/reels/instagram/DZuss_5yKRA.mp4",
    posterSrc: "/services/reels/instagram/DZuss_5yKRA.jpg",
    likes: "16K",
    numericLikes: 15787,
    comments: "31",
    caption: "Na ho tum… #explorepage #viralpage #cinema #cinematography #films",
    audioTrack: "Na Ho Tum · Cinematic Audio",
    strategyHook:
      "Film-grade color grading and cinematic framing that elevate the song into a cultural moment.",
    keyMetric: "16K+ Likes · High Aesthetic Credibility",
    authorUsername: "wzar.__",
    authorDisplayName: "ᴀᴅɪᴛʏᴀ ᴋʜᴀʟᴋʜᴏ",
    authorVerified: false,
  },
  {
    id: "harshika",
    name: "Mehta Harshika",
    playlistTitle: "Emotional Ballad",
    category: "Love Storytelling",
    shortcode: "DbXYJN7KIGe",
    instagramUrl: "https://www.instagram.com/reel/DbXYJN7KIGe/?igsh=MXZhczliczlhcGJjMw==",
    videoSrc: "/services/reels/instagram/DbXYJN7KIGe.mp4",
    posterSrc: "/services/reels/instagram/DbXYJN7KIGe.jpg",
    likes: "14K",
    numericLikes: 13948,
    comments: "192",
    caption: "jo kuch mera hai sab kuch… unka♥️",
    audioTrack: "Original Acoustic · Track Release",
    strategyHook:
      "Intimate relationship storytelling connecting lyrics with genuine human connection.",
    keyMetric: "14K+ Likes · High Comment Ratio",
    authorUsername: "harshikamehtaa",
    authorDisplayName: "Mehta Harshika",
    authorVerified: false,
  },
  {
    id: "yashika",
    name: "Yashika Sharma",
    playlistTitle: "Dance Anthem",
    category: "Creator Choreography",
    shortcode: "DcL1i_VMJ18",
    instagramUrl: "https://www.instagram.com/reel/DcL1i_VMJ18/?igsh=bGs0cmUxOGo0Zjhs",
    videoSrc: "/services/reels/instagram/DcL1i_VMJ18.mp4",
    posterSrc: "/services/reels/instagram/DcL1i_VMJ18.jpg",
    likes: "115K",
    numericLikes: 114917,
    comments: "2,602",
    caption: "❤️❤️ #yashikasharma #trending #reels",
    audioTrack: "Trending Dance Anthem · ABP Push",
    strategyHook:
      "Dynamic creator dance choreography igniting mass replications and sound adoption.",
    keyMetric: "115K+ Likes · 2.6K+ Comments · Dance Push",
    authorUsername: "belleyashika",
    authorDisplayName: "Yashika Sharma🪷",
    authorVerified: true,
  },
  {
    id: "sakshi",
    name: "Sakshi Shrivas",
    playlistTitle: "Obsessed Trend",
    category: "Fashion / Glamour",
    shortcode: "DcOZAXxTHsS",
    instagramUrl: "https://www.instagram.com/reel/DcOZAXxTHsS/",
    videoSrc: "/services/reels/instagram/DcOZAXxTHsS.mp4",
    posterSrc: "/services/reels/instagram/DcOZAXxTHsS.jpg",
    likes: "27K",
    numericLikes: 27100,
    comments: "596",
    caption: "Currently obsessed with this song ❤️ Shot by: @whoisparry Hair: @hair_house_1111 Outfit: @the_adhya_designer",
    audioTrack: "Obsessed With This Song · Original",
    strategyHook:
      "High-fashion lookbook aesthetic paired with release chorus drops for maximum lifestyle resonance.",
    keyMetric: "27K+ Likes · 590+ Comments",
    authorUsername: "sakshishrivas___",
    authorDisplayName: "Sakshi Shrivas",
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
              <div className="w-full h-full rounded-full bg-[#000000] flex items-center justify-center text-[7px] font-black font-space text-white uppercase">
                {(reel.authorUsername || reel.name).slice(0, 3)}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-sans font-bold text-[11px] sm:text-xs tracking-tight text-white drop-shadow truncate max-w-[100px]">
                {reel.authorUsername || reel.name}
              </span>
              {reel.authorVerified && (
                <CheckCircle2 className="w-3 h-3 text-[#38bdf8] fill-[#38bdf8] stroke-black flex-shrink-0" />
              )}
            </div>
            <span className="text-[8px] bg-white/20 px-1 py-0.2 rounded text-white/90 font-mono">
              Reel
            </span>
          </div>

          {/* Caption Snippet */}
          <p className="font-sans text-[10px] sm:text-[11px] text-white/95 leading-tight line-clamp-2 drop-shadow">
            {reel.caption}
          </p>

          {/* "View Reel 🎧" CTA Pill */}
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

export const InstagramReelsShowcase: React.FC = () => {
  const [unmutedReelKey, setUnmutedReelKey] = useState<string | null>(null);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [savedMap, setSavedMap] = useState<Record<string, boolean>>({});
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Repeat the 10 reels twice for a seamless, continuous infinite horizontal marquee
  const duplicatedReels = [...REELS_DATA, ...REELS_DATA];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-black/15 bg-[#000000] select-none group">
      {/* 1. SIGNATURE TOP RED HEADER BAR (#FF0043) */}
      <div className="w-full bg-[#FF0043] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border-b border-black/20 text-black">
        <span className="font-mono font-black text-xs sm:text-sm tracking-wider uppercase">
          SOCIAL / VISUAL NOTES
        </span>
        <span className="font-mono font-black text-xs sm:text-sm tracking-widest uppercase">
          10 REELS
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
              @keyframes marquee-phones-ig {
                0% {
                  transform: translate3d(0, 0, 0);
                }
                100% {
                  transform: translate3d(-50%, 0, 0);
                }
              }
              .animate-marquee-phones-ig {
                animation: marquee-phones-ig 60s linear infinite;
              }
              .animate-marquee-phones-ig-paused {
                animation-play-state: paused !important;
              }
            `,
          }}
        />

        {/* Infinite Moving Phones Track */}
        <div
          className={cn(
            "flex items-center gap-6 sm:gap-8 md:gap-10 pl-6 animate-marquee-phones-ig will-change-transform",
            isPaused && "animate-marquee-phones-ig-paused"
          )}
          style={{ width: "max-content" }}
        >
          {duplicatedReels.map((reel, index) => {
            const uniqueKey = `ig-${reel.id}-${index}`;
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

export default InstagramReelsShowcase;
