"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import DiscCascadeCarousel, {
  DiscCascadeItem,
} from "@/components/ui/disc-cascade-carousel";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TypewriterText } from "@/components/TypewriterText";
import { X, ArrowDown } from "lucide-react";

import { type SpotifyTrack } from "@/components/ui/spotify-card";
import { LiquidGlassCarousel } from "@/components/ui/liquid-glass-carousel";
import DiagonalMarqueeCarousel, { CardItem } from "@/components/ui/great-ui-diagonal-marquee-carousel";
import { WorkHeroBackgroundVideo } from "@/components/WorkHeroBackgroundVideo";
import { STATIC_ARTIST_SIGNS } from "@/lib/artist-signs-data";

export default function WorkPage() {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    artist: string;
    youtubeId: string;
    category: string;
  } | null>(null);

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CardItem | null>(null);

  // Dynamic Case Studies & Artist Campaigns Data from public/artist sign
  const [caseStudyCards, setCaseStudyCards] = useState<CardItem[]>(STATIC_ARTIST_SIGNS);

  useEffect(() => {
    let isMounted = true;
    const fetchCards = async () => {
      try {
        const res = await fetch("/api/artist-signs");
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && Array.isArray(data?.images) && data.images.length > 0) {
          setCaseStudyCards(data.images);
        }
      } catch {
        // Fallback silently
      }
    };

    fetchCards();
    window.addEventListener("focus", fetchCards);
    return () => {
      isMounted = false;
      window.removeEventListener("focus", fetchCards);
    };
  }, []);

  // Spotify Target Songs Data
  const spotifyCampaignTracks: SpotifyTrack[] = [
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
      id: "sheesha",
      title: "SHEESHA",
      artist: "Mitta Ror ft. Swara Verma",
      albumArt: "https://img.youtube.com/vi/i52TYO13Nyg/maxresdefault.jpg",
      duration: "2:58",
      durationSeconds: 178,
      spotifyUrl: "https://open.spotify.com/search/SHEESHA%20Mitta%20Ror",
      description: "#1 Trending short-form creator audio with 25M+ organic reel views.",
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
      id: "bairan",
      title: "Bairan",
      artist: "Silver Strings Music",
      albumArt: "https://img.youtube.com/vi/vsHtDl4Wee4/maxresdefault.jpg",
      duration: "3:30",
      durationSeconds: 210,
      spotifyUrl: "https://open.spotify.com/search/Bairan%20Silver%20Strings",
      description: "Top 50 Indie India chartbuster with multi-million Spotify stream growth.",
    },
    {
      id: "bargad",
      title: "bargad",
      artist: "sufr ft. Arpit Bala & Toorjo Dey",
      albumArt: "https://img.youtube.com/vi/NlvLxP9ehWE/maxresdefault.jpg",
      duration: "4:05",
      durationSeconds: 245,
      spotifyUrl: "https://open.spotify.com/search/bargad%20sufr",
      description: "Featured on Spotify Fresh Finds India with cult indie fan engagement.",
    },
  ];

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
        {/* HERO SECTION - PROPER FULL-VIEWPORT HERO SCREEN WITH IMMERSIVE BG VIDEO */}
        <section className="relative w-full min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-88px)] flex flex-col justify-center pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 bg-[#000000] overflow-hidden">
          {/* Background YouTube Video (20s to 35s loop, bright visibility, mathematically 16:9) */}
          <WorkHeroBackgroundVideo />

          <div className="max-w-[1380px] w-full mx-auto px-6 md:px-12 relative z-10 my-auto py-6 sm:py-10">
            <ScrollReveal direction="up">
              {/* Main Headline */}
              <div className="max-w-5xl mb-6 sm:mb-8">
                <h1 className="font-playfair font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[93.6px] tracking-[0px] leading-[1.08] sm:leading-[1.04] lg:leading-[85px] xl:leading-[100px] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                  Work that turns <br />
                  tracks into{" "}
                  <TypewriterText
                    words={[
                      "viral movements.",
                      "chart anthems.",
                      "cultural moments.",
                      "diehard fanbases.",
                    ]}
                    className="text-[#FF0043]"
                    cursorColor="text-[#ffe600]"
                  />
                </h1>
              </div>

              {/* Subtitle */}
              <p className="font-syne font-normal text-base sm:text-lg md:text-xl lg:text-[24px] xl:text-[28.5px] leading-relaxed md:leading-[1.5] lg:leading-[42px] xl:leading-[50.67px] tracking-[0px] text-white/95 max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] mb-8 sm:mb-10">
                A curated collection of our release rollouts, viral short-form creator trends, and Spotify growth campaigns across indie, label, and Bollywood music.
              </p>

              {/* Interactive CTA Buttons */}
              <div className="flex items-center pt-2">
                <a
                  href="#campaigns"
                  className="inline-flex items-center gap-2.5 bg-[#FF0043] hover:bg-[#e0003b] text-white font-dmsans font-bold text-base sm:text-lg lg:text-[19px] xl:text-[21.54px] lg:leading-[30px] xl:leading-[32.3px] tracking-[0px] px-8 sm:px-9 xl:px-10 py-3.5 sm:py-4 xl:py-4.5 rounded-full transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:shadow-[#FF0043]/40 active:scale-95 shadow-xl cursor-pointer"
                >
                  <span>Explore Campaigns</span>
                  <ArrowDown className="w-5 h-5 xl:w-6 xl:h-6 stroke-[2.5]" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 3D DISC CASCADE CAROUSEL CONTAINER */}
        <section id="campaigns" className="relative w-full my-6 sm:my-10 py-8 sm:py-14 bg-gradient-to-b from-[#000000] via-[#09090b] to-[#000000] overflow-hidden border-t border-b border-white/10">
          <DiscCascadeCarousel
            items={campaignWorkItems}
            height="clamp(720px, 92vh, 980px)"
            discSize="clamp(220px, min(50vmin, 40vw), 460px)"
            brand="ALL BY PLAY"
            indexLabel="Select Campaign"
            onSelect={handleSelectDisc}
            autoplay={5000}
            loop={true}
          />
        </section>

        {/* SPOTIFY FEATURED RELEASES SECTION */}
        <section className="py-28 sm:py-36 px-6 md:px-12 max-w-[1380px] mx-auto border-t border-white/10">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
              <div>
                <span className="text-[#1ED760] font-space text-xs sm:text-sm font-extrabold tracking-[2px] uppercase block mb-3">
                  SPOTIFY CAMPAIGNS & STREAMING DRIVES
                </span>
                <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[56px] 2xl:text-7xl tracking-[0px] leading-[1.1] md:leading-[1.08] lg:leading-[1.06] xl:leading-[1.05] text-white">
                  Spotify featured tracks <span className="text-[#1ED760]">.</span>
                </h2>
              </div>
              <p className="text-white/80 max-w-md text-base sm:text-lg font-syne font-normal leading-relaxed tracking-[0px]">
                Explore our top Spotify-focused campaigns, DSP chartbusters, and viral indie releases built for long-term algorithmic growth.
              </p>
            </div>
          </ScrollReveal>

          {/* Liquid Glass Refraction Carousel for Spotify Cards */}
          <LiquidGlassCarousel tracks={spotifyCampaignTracks} />
        </section>

        {/* RECENT TOP CAMPAIGNS - CASE STUDIES SECTION */}
        <section className="py-24 sm:py-32 relative bg-[#000000] border-t border-white/10 overflow-hidden">
          <div className="px-6 md:px-12 max-w-[1380px] mx-auto mb-10 sm:mb-14">
            <ScrollReveal direction="up">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                <div>
                  <span className="text-[#FF0043] font-space text-xs sm:text-sm font-extrabold tracking-[2px] uppercase block mb-3">
                    CASE STUDIES & ARTIST CAMPAIGNS
                  </span>
                  <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[56px] 2xl:text-7xl tracking-[0px] leading-[1.1] md:leading-[1.08] lg:leading-[1.06] xl:leading-[1.05] text-white">
                    Our recent top campaigns & case studies <span className="text-[#FF0043]">.</span>
                  </h2>
                </div>
                <p className="text-white/80 max-w-md text-base sm:text-lg font-syne font-normal leading-relaxed tracking-[0px]">
                  Deep-dive breakdowns of viral momentum, artist rollouts, and chart-topping digital strategies for standout music campaigns.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Diagonal Marquee Carousel Container */}
          <div className="relative w-full h-[620px] sm:h-[720px] md:h-[820px] overflow-hidden">
            <DiagonalMarqueeCarousel
              cards={caseStudyCards}
              angle={-14}
              baseSpeed={90}
              onCardClick={(card) => setSelectedCaseStudy(card)}
              className="h-full w-full"
              cardClassName="h-[300px] w-[240px] sm:h-[360px] sm:w-[290px] md:h-[420px] md:w-[340px] rounded-2xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
              fadeClassName="from-[#000000] via-[#000000]/70 to-transparent"
            />
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

      {/* CASE STUDY PREVIEW MODAL */}
      {selectedCaseStudy && (
        <div
          onClick={() => setSelectedCaseStudy(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full bg-[#111111] border border-white/20 rounded-2xl overflow-hidden shadow-2xl cursor-default"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#18181b]">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-[#FF0043] uppercase block font-space">
                  CASE STUDY
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                  {selectedCaseStudy.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF0043] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Image */}
            <div className="relative w-full max-h-[75vh] flex items-center justify-center bg-black p-4 overflow-hidden">
              <img
                src={selectedCaseStudy.url}
                alt={selectedCaseStudy.title}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl"
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
