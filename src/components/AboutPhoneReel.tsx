"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Music2,
  Volume2,
  VolumeX,
  Camera,
  CheckCircle2,
} from "lucide-react";

export const AboutPhoneReel: React.FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync video time to Instagram progress bar
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const toggleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <div className="relative group select-none flex items-center justify-center">
      {/* Ambient Phone Glow Backdrop */}
      <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#FF0043]/20 via-[#FF0043]/10 to-transparent rounded-[60px] blur-2xl opacity-60 pointer-events-none transition-opacity duration-700 group-hover:opacity-90" />

      {/* External Phone Chassis (iPhone Frame) */}
      <div className="relative w-[280px] sm:w-[310px] md:w-[330px] lg:w-[340px] h-[570px] sm:h-[630px] md:h-[670px] lg:h-[690px] rounded-[48px] sm:rounded-[54px] bg-[#1a191d] p-3 sm:p-3.5 shadow-[-20px_25px_60px_rgba(0,0,0,0.25),0_15px_40px_rgba(255,0,67,0.15)] border-2 border-white/20 transition-transform duration-500 hover:scale-[1.015]">
        
        {/* Hardware Side Buttons */}
        {/* Silent / Action Button (Left) */}
        <div className="absolute -left-[5px] top-24 w-[3px] h-6 bg-[#2a292f] rounded-l-sm" />
        {/* Volume Up (Left) */}
        <div className="absolute -left-[5px] top-34 w-[3px] h-11 bg-[#2a292f] rounded-l-sm" />
        {/* Volume Down (Left) */}
        <div className="absolute -left-[5px] top-48 w-[3px] h-11 bg-[#2a292f] rounded-l-sm" />
        {/* Power Button (Right) */}
        <div className="absolute -right-[5px] top-36 w-[3px] h-16 bg-[#2a292f] rounded-r-sm" />

        {/* Inner Phone Screen Frame */}
        <div className="relative w-full h-full bg-[#000000] rounded-[38px] sm:rounded-[44px] overflow-hidden border border-white/10 shadow-inner">
          
          {/* 1. Background Video (Natural 9:16 vertical Reel) */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/need-help-in-marketing.mp4" type="video/mp4" />
          </video>

          {/* Vignette Gradients for Instagram Reel UI Legibility */}
          {/* Top Header Dark Vignette */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/75 via-black/35 to-transparent pointer-events-none z-10" />
          {/* Bottom Caption Dark Vignette */}
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black/90 via-black/55 to-transparent pointer-events-none z-10" />
          {/* Right Action Rail Dark Vignette */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/40 via-transparent to-transparent pointer-events-none z-10" />

          {/* 2. Top iOS Status Bar */}
          <div className="relative z-30 px-6 pt-2.5 pb-1 flex items-center justify-between text-white text-[11px] font-semibold tracking-tight">
            {/* Time */}
            <span>9:41</span>

            {/* Dynamic Island */}
            <div className="w-22 sm:w-24 h-5 sm:h-5.5 bg-black rounded-full flex items-center justify-between px-2 border border-white/10 shadow-md">
              <div className="w-2 h-2 rounded-full bg-[#18181b] border border-white/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#064e3b]" />
            </div>

            {/* Status Icons: Signal, Wifi, Battery */}
            <div className="flex items-center gap-1.5">
              {/* Cellular Signal Bars */}
              <div className="flex items-end gap-[1.5px] h-2.5">
                <span className="w-[2px] h-1 bg-white rounded-xs" />
                <span className="w-[2px] h-1.5 bg-white rounded-xs" />
                <span className="w-[2px] h-2 bg-white rounded-xs" />
                <span className="w-[2px] h-2.5 bg-white rounded-xs" />
              </div>
              {/* Battery Pill */}
              <div className="w-4 h-2 rounded-[3px] border border-white flex items-center p-[1px]">
                <div className="w-full h-full bg-white rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* 3. Instagram Reels Header */}
          <div className="relative z-30 px-4 sm:px-5 py-2 flex items-center justify-between text-white">
            <div className="flex items-center gap-1.5">
              <span className="font-sans font-bold text-base sm:text-lg tracking-tight">Reels</span>
              <span className="text-[10px] text-white/70">▾</span>
            </div>

            {/* Header Right Action: Camera & Audio Mute Toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleMute}
                className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/75 transition-colors cursor-pointer"
                title={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#FF0043]" />}
              </button>
              <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                <Camera className="w-3.5 h-3.5 text-white/90" />
              </div>
            </div>
          </div>

          {/* 4. Right Side Action Rail (Instagram Interactive Buttons) */}
          <div className="absolute right-3 sm:right-3.5 bottom-16 sm:bottom-18 z-30 flex flex-col items-center gap-4 sm:gap-4.5 text-white">
            {/* Heart / Like */}
            <button
              type="button"
              onClick={toggleLike}
              className="flex flex-col items-center gap-1 group/btn cursor-pointer"
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform active:scale-125 ${
                  isLiked ? "text-[#FF0043]" : "text-white group-hover/btn:scale-110"
                }`}
              >
                <Heart
                  className={`w-6 h-6 sm:w-6.5 sm:h-6.5 transition-colors ${
                    isLiked ? "fill-[#FF0043] stroke-[#FF0043]" : "stroke-white"
                  }`}
                />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-white/95 drop-shadow">
                {isLiked ? "48.3K" : "48.2K"}
              </span>
            </button>

            {/* Comment */}
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 sm:w-6.5 sm:h-6.5 stroke-white" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-white/95 drop-shadow">1,240</span>
            </div>

            {/* Send / Share */}
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Send className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-white" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-white/95 drop-shadow">8.9K</span>
            </div>

            {/* Bookmark / Save */}
            <button
              type="button"
              onClick={toggleSave}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform"
            >
              <Bookmark
                className={`w-5.5 h-5.5 sm:w-6 sm:h-6 transition-colors ${
                  isSaved ? "fill-white stroke-white" : "stroke-white"
                }`}
              />
            </button>

            {/* More Options */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white cursor-pointer">
              <MoreHorizontal className="w-5 h-5 stroke-white" />
            </div>

            {/* Spinning Mini Audio Vinyl Disc */}
            <div className="mt-1 relative cursor-pointer">
              <div
                className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-gradient-to-tr from-[#18181b] via-[#27272a] to-[#18181b] border-2 border-white/40 shadow-lg flex items-center justify-center animate-spin"
                style={{ animationDuration: "5s" }}
              >
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF0043] border border-white/60 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-white" />
                </div>
              </div>
              {/* Mini Music Note Floating Icon */}
              <Music2 className="w-3 h-3 text-[#FF0043] absolute -top-1 -left-1 animate-bounce" />
            </div>
          </div>

          {/* 5. Bottom Profile & Caption Section */}
          <div className="absolute left-3.5 sm:left-4 right-14 sm:right-16 bottom-3.5 sm:bottom-4 z-30 flex flex-col gap-1.5 text-white">
            {/* Profile Avatar + Handle + Follow Pill */}
            <div className="flex items-center gap-2">
              {/* Brand Avatar */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-[#ffe600] via-[#FF0043] to-[#d946ef] flex items-center justify-center shadow-md">
                <div className="w-full h-full rounded-full bg-[#000000] flex items-center justify-center text-[8px] font-black font-space text-white tracking-tighter">
                  ABP
                </div>
              </div>

              {/* Username + Verified Badge */}
              <div className="flex items-center gap-1">
                <span className="font-sans font-bold text-xs sm:text-sm tracking-tight text-white drop-shadow">
                  allbyplay
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] fill-[#38bdf8] stroke-black" />
              </div>

              {/* Follow Button */}
              <button
                type="button"
                className="ml-1 px-2.5 py-0.5 rounded-full border border-white/60 text-white text-[10px] sm:text-[11px] font-semibold hover:bg-white hover:text-black transition-colors"
              >
                Follow
              </button>
            </div>

            {/* Reel Caption */}
            <p className="font-sans text-[11px] sm:text-xs text-white/95 leading-snug line-clamp-2 drop-shadow">
              Need help with marketing? We&apos;ve got you covered ⚡ <span className="text-white/70">#musicmarketing #allbyplay</span>
            </p>

            {/* Audio Track Marquee */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-white/85">
              <Music2 className="w-3 h-3 text-white/90" />
              <span className="truncate">Original Audio · allbyplay</span>
            </div>
          </div>

          {/* 6. Instagram Reel Scrubbing Progress Bar (at the very bottom edge) */}
          <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-white/20 z-40">
            <div
              className="h-full bg-white transition-all duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
