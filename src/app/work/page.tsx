"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import DiscCascadeCarousel, {
  DiscCascadeItem,
} from "@/components/ui/disc-cascade-carousel";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Play, X, ExternalLink, Sparkles, Disc, Flame, ArrowUpRight } from "lucide-react";

export default function WorkPage() {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    artist: string;
    youtubeId: string;
    category: string;
  } | null>(null);

  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  // Work items mapped for DiscCascadeCarousel and showcase grid
  const campaignWorkItems: (DiscCascadeItem & { youtubeId: string; subtitle: string; category: string; stats: string })[] = [
    {
      title: "Sajna Ve",
      subtitle: "Prateeksha Srivastava ft. Arjun Deswal",
      category: "MUSIC VIDEO",
      youtubeId: "FzjBVeOJdug",
      src: "https://img.youtube.com/vi/FzjBVeOJdug/maxresdefault.jpg",
      alt: "Sajna Ve Campaign",
      stats: "15M+ Views & Reels",
      labelStyle: "arc",
      credits: [
        { label: "ARTIST", value: "Prateeksha Srivastava ft. Arjun Deswal" },
        { label: "CAMPAIGN", value: "Viral Reel & PR Push" },
        { label: "STREAMS", value: "15M+ Cross-Platform" },
        { label: "YEAR", value: "2024" },
      ],
      reviews: [
        { source: "SPOTIFY INDIA", quote: "Viral Trending Anthem of the Season", stars: 5 },
        { source: "REELS IMPACT", quote: "Over 500k+ Creator Videos Built", stars: 5 },
      ],
    },
    {
      title: "Bairan",
      subtitle: "Silver Strings Music",
      category: "SINGLE RELEASE",
      youtubeId: "vsHtDl4Wee4",
      src: "https://img.youtube.com/vi/vsHtDl4Wee4/maxresdefault.jpg",
      alt: "Bairan Campaign",
      stats: "8M+ Cross-Platform",
      labelStyle: "block",
      credits: [
        { label: "ARTIST", value: "Silver Strings Music" },
        { label: "CAMPAIGN", value: "Single Release Strategy" },
        { label: "CHARTS", value: "Top 50 Indie India" },
        { label: "YEAR", value: "2024" },
      ],
      reviews: [
        { source: "APPLE MUSIC", quote: "Indie Pop Masterpiece & Chartbuster", stars: 5 },
        { source: "YOUTUBE MUSIC", quote: "Top 50 Trending Tracks", stars: 5 },
      ],
    },
    {
      title: "SHEESHA",
      subtitle: "Mitta Ror ft. Swara Verma",
      category: "VIRAL REEL",
      youtubeId: "i52TYO13Nyg",
      src: "https://img.youtube.com/vi/i52TYO13Nyg/maxresdefault.jpg",
      alt: "SHEESHA Campaign",
      stats: "25M+ Reel Views",
      labelStyle: "arc",
      credits: [
        { label: "ARTIST", value: "Mitta Ror ft. Swara Verma" },
        { label: "CAMPAIGN", value: "Short-Form Creator Trend" },
        { label: "REACH", value: "25M+ Organic Impressions" },
        { label: "YEAR", value: "2024" },
      ],
      reviews: [
        { source: "INSTAGRAM REELS", quote: "#1 Trending Audio of the Month", stars: 5 },
        { source: "ABP STRATEGY", quote: "100% Organic Creator Wave", stars: 5 },
      ],
    },
    {
      title: "KASHISH",
      subtitle: "Ashish Bhatia & Kashish Ratnani",
      category: "MUSIC VIDEO",
      youtubeId: "nwXAkF8OFCc",
      src: "https://img.youtube.com/vi/nwXAkF8OFCc/maxresdefault.jpg",
      alt: "KASHISH Campaign",
      stats: "12M+ Impressions",
      labelStyle: "block",
      credits: [
        { label: "ARTIST", value: "Ashish Bhatia & Kashish Ratnani" },
        { label: "CAMPAIGN", value: "Celeb Influencer Activation" },
        { label: "ENGAGEMENT", value: "12M+ Audience Reach" },
        { label: "YEAR", value: "2023" },
      ],
      reviews: [
        { source: "BOLLYWOOD HUNGAMA", quote: "High-Energy Visual Spectacle", stars: 5 },
        { source: "METRICS", quote: "98% Positive Engagement Score", stars: 5 },
      ],
    },
    {
      title: "bargad",
      subtitle: "sufr ft. Arpit Bala & Toorjo Dey",
      category: "LYRIC VIDEO",
      youtubeId: "NlvLxP9ehWE",
      src: "https://img.youtube.com/vi/NlvLxP9ehWE/maxresdefault.jpg",
      alt: "bargad Campaign",
      stats: "6M+ Cult Streams",
      labelStyle: "arc",
      credits: [
        { label: "ARTIST", value: "sufr ft. Arpit Bala & Toorjo Dey" },
        { label: "CAMPAIGN", value: "Cult Indie Visualiser Push" },
        { label: "COMMUNITY", value: "High Retention Fan Tribe" },
        { label: "YEAR", value: "2023" },
      ],
      reviews: [
        { source: "ROLLING STONE INDIA", quote: "Groundbreaking Indie Visual Concept", stars: 5 },
        { source: "SPOTIFY", quote: "Featured on Fresh Finds India", stars: 5 },
      ],
    },
    {
      title: "Aarzu",
      subtitle: "Noor, Khan, Madhurxo",
      category: "OFFICIAL RELEASE",
      youtubeId: "M5OCLifZK1w",
      src: "https://img.youtube.com/vi/M5OCLifZK1w/maxresdefault.jpg",
      alt: "Aarzu Campaign",
      stats: "10M+ Total Plays",
      labelStyle: "block",
      credits: [
        { label: "ARTIST", value: "Noor, Khan, Madhurxo" },
        { label: "CAMPAIGN", value: "360 Launch & Streaming PR" },
        { label: "RETENTION", value: "Top Radio & DSP Playlists" },
        { label: "YEAR", value: "2023" },
      ],
      reviews: [
        { source: "WYNK MUSIC", quote: "Chart Top 10 Entry Nationwide", stars: 5 },
        { source: "ABP CAMPAIGNS", quote: "Strategic Multi-Channel Launch", stars: 5 },
      ],
    },
    {
      title: "OOPS",
      subtitle: "KING ft. Zahrah S Khan",
      category: "CHAMPAGNE TALK",
      youtubeId: "wo2-ldwHqyQ",
      src: "https://img.youtube.com/vi/wo2-ldwHqyQ/maxresdefault.jpg",
      alt: "OOPS Campaign",
      stats: "100M+ Global Plays",
      labelStyle: "arc",
      credits: [
        { label: "ARTIST", value: "KING ft. Zahrah S Khan" },
        { label: "CAMPAIGN", value: "Major Album Release Drive" },
        { label: "GLOBAL STREAMS", value: "100M+ Views & Plays" },
        { label: "YEAR", value: "2022" },
      ],
      reviews: [
        { source: "GLOBAL CHARTS", quote: "Blockbuster Hit Release of the Year", stars: 5 },
        { source: "YOUTUBE", quote: "#1 Trending Music Video Worldwide", stars: 5 },
      ],
    },
  ];

  const categories = ["ALL", "MUSIC VIDEO", "VIRAL REEL", "SINGLE RELEASE", "OFFICIAL RELEASE"];

  const filteredItems =
    activeFilter === "ALL"
      ? campaignWorkItems
      : campaignWorkItems.filter((item) =>
          item.category.toUpperCase().includes(activeFilter.toUpperCase())
        );

  const handleSelectDisc = (item: DiscCascadeItem) => {
    const found = campaignWorkItems.find((w) => w.title === item.title);
    if (found) {
      setSelectedVideo({
        title: found.title,
        artist: found.subtitle,
        youtubeId: found.youtubeId,
        category: found.category,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-[#FF0043] selection:text-white font-sans overflow-x-hidden">
      {/* Navbar Header */}
      <div className="bg-[#000000] border-b border-white/10 relative z-50">
        <Navbar className="bg-[#000000]" />
      </div>

      <main className="flex-1">
        {/* HERO TITLE SECTION */}
        <section className="pt-12 pb-6 px-6 md:px-12 max-w-[1380px] mx-auto text-center">
          <ScrollReveal direction="up">

            <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white mb-4">
              OUR WORK <span className="text-[#FF0043]">&amp;</span> REELS
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-sans">
              Interact with our 3D disc cascade carousel showcasing viral reels, hit music videos, and multi-million stream campaigns. Click any disc to launch the YouTube preview.
            </p>
          </ScrollReveal>
        </section>

        {/* 3D DISC CASCADE CAROUSEL CONTAINER */}
        <section className="relative w-full py-4 bg-gradient-to-b from-[#000000] via-[#09090b] to-[#000000] overflow-hidden border-t border-b border-white/10">
          <DiscCascadeCarousel
            items={campaignWorkItems}
            height="80vh"
            brand="ALL BY PLAY"
            indexLabel="Select Campaign"
            onSelect={handleSelectDisc}
            autoplay={5000}
            loop={true}
          />
        </section>

        {/* CAMPAIGNS GRID & EXPLORER */}
        <section className="py-20 px-6 md:px-12 max-w-[1380px] mx-auto">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
              <div>
                <span className="text-[#009082] text-xs font-extrabold tracking-widest uppercase font-space block mb-2">
                  FULL CAMPAIGN CATALOGUE
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                  FEATURED RELEASES <span className="text-[#FF0043]">.</span>
                </h2>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                      activeFilter === cat
                        ? "bg-[#FF0043] text-white shadow-lg shadow-[#FF0043]/30 scale-105"
                        : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                <div
                  onClick={() =>
                    setSelectedVideo({
                      title: item.title,
                      artist: item.subtitle,
                      youtubeId: item.youtubeId,
                      category: item.category,
                    })
                  }
                  className="group relative bg-[#111111] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#FF0043]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF0043]/10 flex flex-col justify-between"
                >
                  {/* Thumbnail / Video Preview Header */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/40" />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest text-[#009082] uppercase border border-[#009082]/30">
                      {item.category}
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#FF0043] text-white flex items-center justify-center group-hover:scale-115 transition-transform duration-300 shadow-xl shadow-[#FF0043]/40">
                        <Play className="w-6 h-6 fill-current ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-white tracking-tight group-hover:text-[#FF0043] transition-colors">
                          {item.title}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-xs font-semibold text-gray-400 mb-4">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Stats Ribbon */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-space font-bold">
                      <span className="text-[#009082] flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-[#FF0043]" />
                        {item.stats}
                      </span>
                      <span className="text-gray-500 group-hover:text-white transition-colors flex items-center gap-1">
                        Watch Reel <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>


      </main>

      {/* YOUTUBE VIDEO PREVIEW MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#111111] border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#18181b]">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-[#009082] uppercase block font-space">
                  {selectedVideo.category}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white uppercase tracking-tight">
                  {selectedVideo.title} —{" "}
                  <span className="text-gray-400 text-sm font-normal">
                    {selectedVideo.artist}
                  </span>
                </h3>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF0043] text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Iframe */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
