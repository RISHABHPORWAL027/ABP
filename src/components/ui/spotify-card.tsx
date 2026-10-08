"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, Pause, SkipBack, SkipForward, Volume2, ChevronRight, ExternalLink } from "lucide-react";
import { FaSpotify } from "react-icons/fa";

export interface SpotifyTrack {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  duration: string;
  durationSeconds: number;
  spotifyUrl: string;
  description?: string;
  audioPreviewUrl?: string;
}

interface SpotifyCardProps {
  track?: SpotifyTrack;
  tracks?: SpotifyTrack[];
  className?: string;
}

export const SpotifyCard: React.FC<SpotifyCardProps> = ({
  track,
  tracks = [],
  className = "",
}) => {
  const trackList = tracks.length > 0 ? tracks : track ? [track] : defaultTracks;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = trackList[currentIndex] || defaultTracks[0];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % trackList.length);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + trackList.length) % trackList.length);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div
      className={`relative w-full max-w-sm sm:max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-to-b from-[#0e3b1c] via-[#092612] to-[#041208] border border-[#1ED760]/30 shadow-[0_0_50px_rgba(30,215,96,0.18)] text-white font-sans transition-all duration-500 hover:border-[#1ED760]/60 ${className}`}
    >
      {/* Top Header Card Info */}
      <div className="p-6 sm:p-7 flex flex-col justify-between min-h-[360px]">
        {/* Brand Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-[#1ED760] shadow-md">
              <FaSpotify className="w-6 h-6 fill-current" />
            </div>
            <span className="font-sans font-extrabold text-xl tracking-tight text-white">
              Spotify
            </span>
          </div>

          <a
            href={currentTrack.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1ED760] hover:text-black flex items-center justify-center text-white transition-all cursor-pointer"
            aria-label="Open on Spotify"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>

        {/* Subtitle / Description */}
        <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed font-sans mb-6">
          {currentTrack.description || "Search for music and podcasts, browse your library, and control playback."}
        </p>

        {/* Center Album Cover Art */}
        <div className="relative w-full aspect-square max-w-[240px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
          <img
            src={currentTrack.albumArt}
            alt={currentTrack.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <a
            href={currentTrack.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider text-white backdrop-blur-xs"
          >
            <span>Listen on Spotify</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Dark Audio Control Bar */}
      <div className="bg-[#000000] p-5 sm:p-6 border-t border-white/10 flex flex-col justify-between">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden mb-4 cursor-pointer">
          <div
            className="h-full bg-[#1ED760] transition-all duration-300 rounded-full"
            style={{ width: isPlaying ? "45%" : "0%" }}
          />
        </div>

        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="overflow-hidden pr-2">
            <h4 className="font-sans font-bold text-base sm:text-lg text-white tracking-tight truncate">
              {currentTrack.title}
            </h4>
            <p className="font-sans text-xs text-gray-400 truncate mt-0.5">
              {currentTrack.artist}
            </p>
          </div>

          <div className="text-xs font-mono text-gray-400 whitespace-nowrap">
            {isPlaying ? "1:24" : "0:00"} / {currentTrack.duration}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between pt-1">
          <button
            onClick={handlePrev}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Previous track"
          >
            <SkipBack className="w-5 h-5 fill-current" />
          </button>

          <button
            onClick={togglePlay}
            className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          <button
            onClick={handleNext}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Next track"
          >
            <SkipForward className="w-5 h-5 fill-current" />
          </button>

          <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Volume2 className="w-4 h-4" />
            <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default Spotify ABP Campaign Tracks
export const defaultTracks: SpotifyTrack[] = [
  {
    id: "finding-her",
    title: "Finding Her",
    artist: "Kushagra, Bharath, Saaheal",
    albumArt: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
    duration: "3:27",
    durationSeconds: 207,
    spotifyUrl: "https://open.spotify.com/search/Finding%20Her%20Kushagra",
    description: "Search for music and podcasts, browse your library, and control playback.",
  },
  {
    id: "sajna-ve",
    title: "Sajna Ve",
    artist: "Prateeksha Srivastava ft. Arjun Deswal",
    albumArt: "https://img.youtube.com/vi/FzjBVeOJdug/maxresdefault.jpg",
    duration: "3:45",
    durationSeconds: 225,
    spotifyUrl: "https://open.spotify.com/search/Sajna%20Ve%20Prateeksha",
    description: "Viral Indian romantic indie anthem with 15M+ streams across Spotify & DSPs.",
  },
  {
    id: "oops-king",
    title: "OOPS",
    artist: "KING ft. Zahrah S Khan",
    albumArt: "https://img.youtube.com/vi/wo2-ldwHqyQ/maxresdefault.jpg",
    duration: "3:12",
    durationSeconds: 192,
    spotifyUrl: "https://open.spotify.com/search/OOPS%20King",
    description: "Global hit album release drive with over 100M+ total views & streams.",
  },
  {
    id: "sheesha",
    title: "SHEESHA",
    artist: "Mitta Ror ft. Swara Verma",
    albumArt: "https://img.youtube.com/vi/i52TYO13Nyg/maxresdefault.jpg",
    duration: "2:58",
    durationSeconds: 178,
    spotifyUrl: "https://open.spotify.com/search/SHEESHA%20Mitta%20Ror",
    description: "#1 Trending short-form creator audio with 25M+ organic reel views.",
  },
];
