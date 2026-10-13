"use client";

import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const WorkHeroBackgroundVideo: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
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
            onReady: (event: any) => {
              event.target.mute();
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              // If video ends, seamlessly loop back to 20s
              if (event.data === window.YT.PlayerState.ENDED) {
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
      {/* Video Container - scaled to eliminate YouTube UI overlays */}
      <iframe
        ref={iframeRef}
        id="hero-work-bg-player"
        src="https://www.youtube-nocookie.com/embed/M5OCLifZK1w?start=20&end=35&autoplay=1&mute=1&loop=1&playlist=M5OCLifZK1w&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1&fs=0"
        title="Aarzu Campaign Hero Video"
        className="absolute top-1/2 left-1/2 w-[180vh] min-w-full min-h-full h-[60vw] -translate-x-1/2 -translate-y-1/2 object-cover opacity-90 sm:opacity-95 pointer-events-none scale-125 sm:scale-130"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />

      {/* Gentle top navbar vignette & bottom section blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  );
};
