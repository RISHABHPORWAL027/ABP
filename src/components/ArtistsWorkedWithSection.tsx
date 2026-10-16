"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  ArtistSignItem,
  STATIC_ARTIST_SIGNS,
} from "@/lib/artist-signs-data";

interface ArtistsWorkedWithSectionProps {
  initialImages?: ArtistSignItem[];
}

export const ArtistsWorkedWithSection: React.FC<ArtistsWorkedWithSectionProps> = ({
  initialImages,
}) => {
  const [images, setImages] = useState<ArtistSignItem[]>(
    initialImages && initialImages.length > 0 ? initialImages : STATIC_ARTIST_SIGNS
  );

  useEffect(() => {
    let isMounted = true;

    const loadImages = async () => {
      try {
        const res = await fetch("/api/artist-signs");
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && Array.isArray(data?.images) && data.images.length > 0) {
          setImages(data.images);
        }
      } catch {
        // Fallback silently to existing images
      }
    };

    loadImages();

    // Auto-update when the window gets focus (e.g. user dropped an image into public/artist sign in Finder)
    window.addEventListener("focus", loadImages);
    return () => {
      isMounted = false;
      window.removeEventListener("focus", loadImages);
    };
  }, []);

  // Duplicate for a seamless infinite loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section id="work" className="w-full py-20 md:py-28 bg-[#000000] text-white relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,0,67,0.08),transparent_70%)] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 text-center mb-12 md:mb-16 relative z-10">
        <ScrollReveal direction="up">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FFE600] uppercase block mb-3">
            CAMPAIGN COLLABORATIONS
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[56px] 2xl:text-7xl tracking-tight leading-[1.1] md:leading-[1.08] lg:leading-[1.06] xl:leading-[1.05] text-white">
            Artist we have worked with
          </h2>
        </ScrollReveal>
      </div>

      {/* Scrolling Marquee Container with fade edge masks */}
      <div className="relative z-10 w-full overflow-hidden py-4">
        <div className="scroll-mask-container w-full">
          <div className="infinite-scroll-track flex gap-5 sm:gap-6 md:gap-8 w-max hover:[animation-play-state:paused]">
            {duplicatedImages.map((artist, index) => (
              <div
                key={`${artist.id || artist.src}-${index}`}
                className="artist-item flex-shrink-0 w-52 sm:w-64 md:w-72 lg:w-80 aspect-[750/930] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B0B10] cursor-pointer group"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={artist.src}
                    alt={artist.alt}
                    fill
                    sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                    loading={index < 8 ? "eager" : "lazy"}
                  />
                  {/* Subtle glossy border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-[#FF0043]/40 transition-colors duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

      {/* Scoped CSS for Keyframes and CSS Mask */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .infinite-scroll-track {
          animation: scroll-left 35s linear infinite;
          will-change: transform;
        }

        .scroll-mask-container {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .artist-item {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.3s ease,
            box-shadow 0.3s ease;
        }

        .artist-item:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 20px 40px -10px rgba(255, 0, 67, 0.25);
        }
      `}</style>
    </section>
  );
};
