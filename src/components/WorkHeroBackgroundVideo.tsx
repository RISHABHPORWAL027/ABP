"use client";

import React, { useEffect, useRef } from "react";

interface YTPlayer {
  mute: () => void;
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime?: () => number;
  destroy?: () => void;
}

interface YTPlayerEvent {
  target: YTPlayer;
  data?: number;
}

interface YTNamespace {
  Player: new (
    element: HTMLElement,
    options: {
      events?: {
        onReady?: (event: YTPlayerEvent) => void;
        onStateChange?: (event: YTPlayerEvent) => void;
      };
    }
  ) => YTPlayer;
  PlayerState: {
    ENDED: number;
  };
}

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export const WorkHeroBackgroundVideo: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const isLoopingRef = useRef<boolean>(false);

  useEffect(() => {
    // Load YouTube Iframe API if not loaded
    if (typeof window !== "undefined" && !window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    let checkInterval: NodeJS.Timeout | null = null;

    const setupPlayer = () => {
      if (!window.YT || !window.YT.Player || !iframeRef.current) return;

      try {
        playerRef.current = new window.YT.Player(iframeRef.current, {
          events: {
            onReady: (event: YTPlayerEvent) => {
              event.target.mute();
              event.target.playVideo();
            },
            onStateChange: (event: YTPlayerEvent) => {
              // If video ends, seamlessly loop back to 20s
              if (window.YT && event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(20, true);
                event.target.playVideo();
              }
            },
          },
        });

        // Precision timer: smoothly seek back to 20s once reaching 34.8s
        checkInterval = setInterval(() => {
          try {
            if (
              playerRef.current &&
              typeof playerRef.current.getCurrentTime === "function"
            ) {
              const currentTime = playerRef.current.getCurrentTime();
              if (currentTime >= 34.8 && !isLoopingRef.current) {
                isLoopingRef.current = true;
                playerRef.current.seekTo(20, true);
                setTimeout(() => {
                  isLoopingRef.current = false;
                }, 1200);
              }
            }
          } catch {
            // ignore cross-origin timing glitches
          }
        }, 150);
      } catch {
        // fallback to standard iframe loop
      }
    };

    if (window.YT && window.YT.Player) {
      setupPlayer();
    } else {
      window.onYouTubeIframeAPIReady = setupPlayer;
    }

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      try {
        if (playerRef.current && playerRef.current.destroy) {
          playerRef.current.destroy();
        }
      } catch {}
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Video Container - perfectly scaled to guarantee 16:9 aspect ratio and eliminate YouTube UI */}
      <iframe
        ref={iframeRef}
        id="hero-work-bg-player"
        src="https://www.youtube-nocookie.com/embed/M5OCLifZK1w?start=20&end=35&autoplay=1&mute=1&loop=1&playlist=M5OCLifZK1w&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1&fs=0"
        title="Aarzu Campaign Hero Video"
        style={{
          width: "max(120vw, 214vh)",
          height: "max(67.5vw, 120.375vh)",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-90 sm:opacity-95 pointer-events-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />

      {/* Gentle top navbar vignette & bottom section blend for seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-56 bg-gradient-to-t from-black via-black/75 to-transparent pointer-events-none" />
    </div>
  );
};
