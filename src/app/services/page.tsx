"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HowItWorks } from "@/components/ui/how-it-works";
import { ServiceTicketData } from "@/components/ui/admit-one-ticket";
import { AnimatedEqualizer } from "@/components/AnimatedEqualizer";
import { TypewriterText } from "@/components/TypewriterText";
import { AnimatedFolder } from "@/components/ui/3d-folder";
import { ServiceBookingModal } from "@/components/ServiceBookingModal";
import DiagonalMarqueeCarousel from "@/components/ui/great-ui-diagonal-marquee-carousel";
import { spotifySongCards } from "@/lib/spotify-songs-data";
import { BrandingShowcaseBanner } from "@/components/BrandingShowcaseBanner";
import { InstagramReelsShowcase } from "@/components/InstagramReelsShowcase";
import { ContentMediaReelsShowcase } from "@/components/ContentMediaReelsShowcase";

interface ServiceCardBannerProps {
  images: string[];
  alt: string;
  categoryTag?: string;
  framesCount?: string;
  priority?: boolean;
}

const ServiceCardBanner: React.FC<ServiceCardBannerProps> = ({
  images,
  alt,
  categoryTag = "BRAND",
  framesCount,
  priority = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 45) {
      // Swiped left -> next
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (diff < -45) {
      // Swiped right -> prev
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
    setTouchStartX(null);
  };

  if (images.length === 0) return null;

  const displayFrames = framesCount
    ? `${framesCount} FRAMES`
    : images.length > 1
    ? `0${images.length} FRAMES`
    : "01 FRAMES";

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-black/15 bg-black select-none group/carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. SIGNATURE TOP RED HEADER BAR (#FF0043) */}
      <div className="w-full bg-[#FF0043] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border-b border-black/20 text-black">
        <span className="font-mono font-black text-xs sm:text-sm tracking-wider uppercase">
          {categoryTag} / VISUAL NOTES
        </span>
        <span className="font-mono font-black text-xs sm:text-sm tracking-widest uppercase">
          {displayFrames}
        </span>
      </div>

      {/* 2. MEDIA / IMAGE CONTENT */}
      {images.length === 1 ? (
        <div className="relative w-full bg-black overflow-hidden flex items-center justify-center">
          <Image
            src={images[0]}
            alt={alt}
            width={1400}
            height={584}
            className="w-full h-auto block object-cover"
            priority={priority}
          />
        </div>
      ) : (
        <div className="relative w-full aspect-[1400/584] overflow-hidden bg-black">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                idx === currentIndex
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              )}
            >
              <Image
                src={img}
                alt={`${alt} frame ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                className="object-cover"
                priority={priority && idx === 0}
              />
            </div>
          ))}

          {/* Navigation Arrow - Left */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center opacity-70 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-opacity duration-300 backdrop-blur-sm shadow-xl cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Navigation Arrow - Right */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center opacity-70 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-opacity duration-300 backdrop-blur-sm shadow-xl cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Pagination Dot Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 shadow-lg">
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(dotIdx);
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  dotIdx === currentIndex
                    ? "w-6 bg-[#FF0043]"
                    : "w-2 bg-white/40 hover:bg-white"
                )}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function ServicesOverviewPage() {
  const [activeTab, setActiveTab] = useState("01");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingService, setSelectedBookingService] = useState<ServiceTicketData | null>(null);

  const handleOpenBookingModal = (service: ServiceTicketData) => {
    setSelectedBookingService(service);
    setBookingModalOpen(true);
  };



  interface ToolkitServiceItem extends ServiceTicketData {
    categoryTag: string;
    framesCount: string;
    cardImage: string;
    cardImages?: string[];
  }

  // 7 Connected Toolkit Services matching the provided reference layout
  const toolkitServices: ToolkitServiceItem[] = [
    {
      num: "01",
      slug: "branding",
      badge: "BRAND",
      categoryTag: "BRAND",
      framesCount: "02",
      cardImage: "/services/cards/card-01-shreya-spread@2x.png",
      cardImages: [
        "/Services page/branding and marketing/shrreya1.png",
        "/Services page/branding and marketing/shreya2.png",
      ],
      bg: "bg-[#5B3BE8] text-white",
      badgeBg: "#FFE600",
      badgeText: "#000000",
      title: "Branding & Marketing",
      stubTitle: "BRAND IDENTITY",
      stubSubtitle: "VISUAL & CREATIVE DIRECTION",
      p1: "A strong artist brand makes everything else easier. We help shape the visual identity, design language, and overall online presence so the artist or label feels consistent across every touchpoint.",
      p2: "From social media to campaign creatives, we build a look and feel that fits the music and stands out in a crowded space.",
      highlights: [
        "Identity direction",
        "Visual language",
        "Social media look and feel",
        "Creative asset guidance",
      ],
    },
    {
      num: "02",
      slug: "release-campaigns",
      badge: "RELEASE",
      categoryTag: "RELEASE",
      framesCount: "02",
      cardImage: "/services/cards/released-based-camp.webp",
      cardImages: [
        "/services/cards/released-based-camp.webp",
      ],
      bg: "bg-[#FFC72C] text-black",
      badgeBg: "#5B3BE8",
      badgeText: "#FFFFFF",
      title: "Release-based Campaigns",
      stubTitle: "RELEASE SUITE",
      stubSubtitle: "PRE & POST LAUNCH ROLLOUT",
      p1: "A release should feel planned, not rushed. We build pre-release and post-release campaigns that support the music across the full rollout, from the first push to the follow-through after launch.",
      p2: "The strategy is shaped around the timeline, the goals, and what the song or project needs to land better.",
      highlights: [
        "Release planning",
        "Pre-release support",
        "Post-release push",
        "Retainer-based execution",
      ],
    },
    {
      num: "03",
      slug: "pr-activation",
      badge: "PR",
      categoryTag: "PRESS",
      framesCount: "02",
      cardImage: "/services/cards/card-03-clean@2x.png",
      cardImages: [
        "/services/cards/card-03-clean@2x.png",
      ],
      bg: "bg-[#1E1E28] text-white",
      badgeBg: "#FFE600",
      badgeText: "#000000",
      title: "PR Activation",
      stubTitle: "MEDIA & PR",
      stubSubtitle: "EDITORIAL & BROADCAST REACH",
      p1: "When a story is strong, PR helps it travel further. We build PR activations that go beyond one channel and instead look at the full mix — social, print, digital, radio, television, podcasts, and music platforms.",
      p2: "The goal is to place the artist and the release in spaces where the story actually connects with people.",
      highlights: [
        "Media outreach",
        "Story-led placements",
        "Press features",
        "Broadcast and podcast visibility",
      ],
    },
    {
      num: "04",
      slug: "instagram",
      badge: "SOCIAL",
      categoryTag: "SOCIAL",
      framesCount: "10",
      cardImage: "/services/cards/card-04-clean@2x.png",
      cardImages: [
        "/services/cards/card-04-clean@2x.png",
      ],
      bg: "bg-[#FF6B4A] text-white",
      badgeBg: "#FFE600",
      badgeText: "#000000",
      title: "Instagram-centric Campaigns",
      stubTitle: "VIRAL REELS",
      stubSubtitle: "CREATOR & INFLUENCER PUSH",
      p1: "Instagram is one of the main places where music gets noticed, shared, and talked about. We build campaigns that use content plans, creatives, edit-page pushes, review-led support, and creator collaborations to give a song more reach.",
      p2: "This includes thinking about the artist's profile as a whole, not just one release at a time.",
      highlights: [
        "Content planning",
        "Edit-page campaigns",
        "Review campaigns",
        "Influencer campaigns",
        "Profile growth support",
      ],
    },
    {
      num: "05",
      slug: "spotify",
      badge: "STREAM",
      categoryTag: "STREAM",
      framesCount: "24",
      cardImage: "/services/spotify/spotify_songs/Rectangle%20(1).svg",
      cardImages: [
        "/services/spotify/spotify_songs/Rectangle%20(1).svg",
      ],
      bg: "bg-[#7CFF6B] text-black",
      badgeBg: "#FFE600",
      badgeText: "#000000",
      title: "Spotify-focussed Campaigns",
      stubTitle: "DSP STREAMING",
      stubSubtitle: "ALGORITHMIC & PLAYLIST DATA",
      isFeaturedCaseStudy: true,
      caseStudyNote: "Featured Case Study: Alfaaz by Hamza Malik & Zain Zohaib reached #2 on Spotify Top Songs India Charts",
      p1: "Spotify growth needs more than just hoping for streams. We use research, data, playlist strategy, and campaign planning to help artists build a stronger presence on the platform.",
      p2: "We look at search keywords, stream sources, artist profile visits, and algorithmic streams so the campaign is guided by actual performance, not guesswork.",
      highlights: [
        "Playlist placements",
        "Keyword strategy",
        "Audience data",
        "Streaming analysis",
        "Profile growth",
      ],
    },
    {
      num: "06",
      slug: "ads",
      badge: "ADS",
      categoryTag: "ADS",
      framesCount: "02",
      cardImage: "/services/cards/card-06-clean@2x.png",
      cardImages: [
        "/services/cards/card-06-clean@2x.png",
      ],
      bg: "bg-[#2563EB] text-white",
      badgeBg: "#FFE600",
      badgeText: "#000000",
      title: "Ads Marketing",
      stubTitle: "PAID MEDIA",
      stubSubtitle: "TARGETED ADS & RETARGETING",
      p1: "Our music-focused ad campaigns build around the data we already have on the project and the audience. That means the work is guided by context, not just by running ads for the sake of it.",
      p2: "Campaigns can include Instagram awareness and conversion ads, YouTube in-feed and in-stream ads, lead generation, and redirection campaigns.",
      highlights: [
        "Instagram ads",
        "YouTube ads",
        "Lead generation",
        "Retargeting and redirection",
      ],
    },
    {
      num: "07",
      slug: "content",
      badge: "CONTENT",
      categoryTag: "CONTENT",
      framesCount: "05",
      cardImage: "/services/cards/card-07-clean@2x.png",
      cardImages: [
        "/services/cards/card-07-clean@2x.png",
      ],
      bg: "bg-[#E8E6DF] text-black",
      badgeBg: "#FFE600",
      badgeText: "#000000",
      title: "Content & Social Media Management",
      stubTitle: "CONTENT OPS",
      stubSubtitle: "DAILY STRATEGY & ARTIST PERSONA",
      p1: "Keeping a music project active online takes more than posting randomly. We help with content ideas, page planning, artist persona building, and day-to-day social direction so the brand feels consistent and alive.",
      p2: "This is especially useful when the artist or label needs a clearer rhythm for content around releases, events, and ongoing visibility.",
      highlights: [
        "Content ideas",
        "Daily planning",
        "Artist persona building",
        "Social media direction",
        "Campaign support",
      ],
    },
  ];

  const scrollToService = (num: string) => {
    setActiveTab(num);
    const element =
      document.getElementById(`service-${num}`) ||
      document.getElementById(num);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      let targetNum = "";
      if (hash.startsWith("service-")) {
        targetNum = hash.replace("service-", "");
      } else {
        const found = toolkitServices.find(
          (s) => s.num === hash || s.slug === hash
        );
        if (found) {
          targetNum = found.num;
        }
      }

      if (targetNum) {
        scrollToService(targetNum);
        const t1 = setTimeout(() => scrollToService(targetNum), 150);
        const t2 = setTimeout(() => scrollToService(targetNum), 500);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
        };
      }
    };

    const cleanup = handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => {
      if (cleanup) cleanup();
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const services = ["01", "02", "03", "04", "05", "06", "07"];
      for (const num of services) {
        const el = document.getElementById(`service-${num}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260 && rect.bottom >= 140) {
            setActiveTab(num);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-[#FF0043] selection:text-white font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="w-full bg-[#000000] text-white pt-6 pb-0 sm:pt-10 md:pt-14 relative font-sans overflow-hidden min-h-[85vh] flex flex-col justify-between">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12 w-full pt-4 md:pt-8 relative z-10 flex-1 flex flex-col justify-center">
            <div className="max-w-5xl">
              <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[72px] 2xl:text-[90px] tracking-tight leading-[1.02] md:leading-[1.0] lg:leading-[0.98] xl:leading-[0.95] text-white mb-6 md:mb-8">
                <span className="block sm:whitespace-nowrap">Music marketing that feels</span>
                <TypewriterText
                  words={[
                    "clear, creative, and built around the release.",
                    "strategic, bold, and culturally aligned.",
                    "driven by story, data, and audience growth.",
                  ]}
                  className="text-[#FF0043]"
                  cursorColor="text-[#ffe600]"
                />
              </h1>

              <p className="font-sans font-medium text-base sm:text-xl md:text-2xl text-white/95 max-w-3xl leading-relaxed mb-8 md:mb-10">
                All By Play helps artists, labels, managers, and festivals grow through music marketing that actually makes sense. From release campaigns and PR to Instagram, Spotify, ads, and branding, we build strategies shaped around the music, the goals, and the audience.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-14 sm:mb-20">
                <Link
                  href="/#connect"
                  className="bg-[#ffe600] hover:bg-[#ffe600]/90 text-black font-sans font-extrabold text-base sm:text-lg px-7 sm:px-8 py-3.5 sm:py-4 rounded-full inline-flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-xl cursor-pointer"
                >
                  <span>Start your project</span>
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </Link>

                <Link
                  href="/#work"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/25 hover:border-white font-sans font-bold text-base sm:text-lg px-7 sm:px-8 py-3.5 sm:py-4 rounded-full inline-flex items-center justify-center transition-all duration-300 cursor-pointer"
                >
                  See our work
                </Link>
              </div>
            </div>
          </div>

          {/* Animated Equalizer Sound Wave Graphic */}
          <AnimatedEqualizer />
        </section>

        {/* 2. WHAT WE HELP WITH SECTION */}
        <section className="w-full bg-[#F5F4EE] text-[#000000] py-20 md:py-28 font-sans relative overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Text Content */}
              <div className="lg:col-span-7">
                <ScrollReveal direction="up">
                  <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[56px] 2xl:text-7xl tracking-tight leading-[1.1] md:leading-[1.08] lg:leading-[1.06] xl:leading-[1.05] text-[#000000] mb-8">
                    <TypewriterText
                      words={[
                        "What we help with",
                        "Full campaign strategy",
                        "Digital & PR rollout",
                      ]}
                      className="text-[#000000]"
                      cursorColor="text-[#FF0043]"
                    />
                  </h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={100}>
                  <p className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-[#111111] leading-snug tracking-tight mb-8">
                    Every artist and project needs something a little different. Some need a stronger rollout. Some need more visibility. Some need a better content rhythm.
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={200}>
                  <p className="font-sans font-medium text-base sm:text-lg text-black/70 leading-relaxed">
                    And sometimes, the work is about building the full picture from scratch. That&apos;s why we don&apos;t work with a fixed template. We look at what the music needs, what the artist needs, and what the release actually deserves.
                  </p>
                </ScrollReveal>
              </div>

              {/* Right Column: 3D Folder Component */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <ScrollReveal direction="left" delay={250}>
                  <AnimatedFolder
                    title="Campaign Toolkit"
                    projects={[
                      {
                        id: "1",
                        title: "Instagram",
                        tag: "Social & Reels",
                        image: "/services/instagram_content.png",
                        logo: "/labels_logo/company_logo/instagram-logo.avif",
                      },
                      {
                        id: "2",
                        title: "Spotify",
                        tag: "Streaming Growth",
                        image: "/services/spotify_growth.png",
                        logo: "/labels_logo/company_logo/spotify-logo.png",
                      },
                      {
                        id: "3",
                        title: "YouTube",
                        tag: "Video & Ads",
                        image: "/services/ads_marketing.png",
                        logo: "/labels_logo/company_logo/youtube-logo.png",
                      },
                    ]}
                  />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BUILT FOR DIFFERENT PARTS OF THE MUSIC WORLD SECTION */}
        <section className="w-full bg-[#FF0043] text-white py-20 md:py-28 font-sans relative overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <ScrollReveal direction="up">
                <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[56px] 2xl:text-7xl tracking-tight leading-[1.1] md:leading-[1.08] lg:leading-[1.06] xl:leading-[1.05] text-white mb-8">
                  <TypewriterText
                    words={[
                      "Built for different parts of the music world",
                      "For Indie Artists, Labels & Managers",
                      "For Festivals & Cultural Projects",
                    ]}
                    className="text-white"
                    cursorColor="text-[#ffe600]"
                  />
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100}>
                <p className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-white leading-relaxed mb-6 max-w-4xl">
                  We work with indie artists, labels, managers, festival teams, and music projects that need a more thoughtful approach to marketing.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <p className="font-sans font-medium text-base sm:text-lg text-white/90 leading-relaxed mb-10 max-w-3xl">
                  Whether the goal is release growth, audience reach, profile building, or stronger brand visibility, we shape the work around the brief.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                  {[
                    "INDIE ARTISTS",
                    "LABELS",
                    "MANAGERS",
                    "FESTIVALS",
                    "MUSIC PROJECTS",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/60 bg-transparent text-white font-space font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-full uppercase tracking-wider shadow-sm hover:bg-white hover:text-[#FF0043] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 4. STICKY SERVICE SELECTOR BAR */}
        <div className="sticky top-0 z-40 bg-[#121217] border-b border-white/15 text-white py-3.5 px-6 md:px-12 shadow-2xl backdrop-blur-md">
          <div className="max-w-[1380px] mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-space font-extrabold text-[10px] sm:text-xs tracking-[2px] uppercase text-white/60 hidden sm:inline">
                SERVICE SELECTOR
              </span>
              <span className="font-space font-extrabold text-xs sm:text-sm tracking-wider text-[#ffe600] bg-white/10 px-3 py-1 rounded-md border border-white/10">
                {activeTab} / 07
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto no-scrollbar py-0.5">
              {toolkitServices.map((service) => (
                <button
                  key={service.num}
                  onClick={() => scrollToService(service.num)}
                  className={`font-space font-extrabold text-xs sm:text-sm px-3.5 sm:px-4 py-1.5 rounded-lg transition-all duration-300 cursor-pointer ${
                    activeTab === service.num
                      ? "bg-[#ffe600] text-black shadow-lg scale-105"
                      : "bg-white/10 hover:bg-white/20 text-white/80"
                  }`}
                >
                  {service.num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 5. ONE CONNECTED CAMPAIGN TOOLKIT (WHITE BACKGROUND SECTION) */}
        <section className="w-full bg-[#FFFFFF] text-[#000000] py-16 md:py-24 font-sans relative">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12">
            <ScrollReveal direction="up" threshold={0.08} duration={750}>
              <div className="mb-14 md:mb-20">
                <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] xl:text-[60px] 2xl:text-[76px] text-black tracking-tight leading-[1.04] max-w-5xl">
                  One connected<br className="hidden sm:inline" /> campaign toolkit for{" "}
                  <TypewriterText
                    words={[
                      "Branding & Marketing",
                      "Release-based Campaigns",
                      "PR Activation",
                      "Instagram-centric Campaigns",
                      "Spotify-focussed Campaigns",
                      "Ads Marketing",
                      "Content & Social Media",
                    ]}
                    className="text-[#5B3BE8]"
                    cursorColor="text-[#FF0043]"
                    loop={true}
                    triggerOnView={true}
                    typingSpeed={60}
                    deletingSpeed={35}
                    pauseDuration={2200}
                  />
                </h2>
                <div className="w-full border-b border-black/15 mt-8 md:mt-12" />
              </div>
            </ScrollReveal>

            {/* List of 7 Services styled with editorial layout & Visual Notes cards at the end */}
            <div className="space-y-16 md:space-y-24">
              {toolkitServices.map((service, index) => (
                <div
                  key={service.num}
                  id={`service-${service.num}`}
                  data-service-num={service.num}
                  data-service-slug={service.slug}
                  className="scroll-mt-32 relative"
                >
                  <span
                    id={service.slug}
                    className="scroll-mt-32 invisible pointer-events-none absolute -top-32"
                  />

                  {/* Top Row: Service Header + Content Grid with Staggered Entrance */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-8 md:mb-10">
                    {/* Left Column: Number tag & Auto-Typewriting Title */}
                    <div className="lg:col-span-5">
                      <ScrollReveal
                        direction="up"
                        delay={40}
                        duration={750}
                        distance={20}
                        threshold={0.05}
                        rootMargin="0px 0px -30px 0px"
                      >
                        <span className="font-mono font-bold text-xs sm:text-[13px] tracking-[0.16em] uppercase text-[#5B3BE8] block mb-3">
                          SERVICE {service.num}
                        </span>
                        <h3 className="font-sans font-black text-3xl sm:text-4xl md:text-[44px] text-black tracking-tight leading-[1.08] min-h-[1.15em]">
                          <TypewriterText
                            words={[service.title]}
                            loop={false}
                            typingSpeed={45}
                            startDelay={150}
                            triggerOnView={true}
                            className="text-black"
                            cursorColor="text-[#5B3BE8]"
                          />
                        </h3>
                      </ScrollReveal>
                    </div>

                    {/* Right Column: Descriptions, Features, Examples, Discuss link */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <ScrollReveal
                        direction="up"
                        delay={160}
                        duration={750}
                        distance={22}
                        threshold={0.05}
                        rootMargin="0px 0px -30px 0px"
                      >
                        <p className="font-sans font-medium text-base sm:text-lg text-black/85 leading-relaxed mb-4">
                          {service.p1}
                        </p>
                        {service.p2 && (
                          <p className="font-sans font-normal text-sm sm:text-base text-black/65 leading-relaxed mb-5">
                            {service.p2}
                          </p>
                        )}

                        {/* Checklist with + icon & subtle dividing borders */}
                        <div className="border-y border-black/10 py-3 sm:py-4 my-2">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                            {service.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center gap-2.5">
                                <span className="text-[#5B3BE8] font-bold text-base leading-none select-none">+</span>
                                <span className="font-sans font-medium text-xs sm:text-sm text-black/80">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Discuss this service link */}
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => handleOpenBookingModal(service)}
                            className="group inline-flex items-center gap-1.5 font-sans font-semibold text-xs sm:text-sm text-black underline underline-offset-4 decoration-black/35 hover:decoration-black transition-colors cursor-pointer"
                          >
                            <span>Discuss this service</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </button>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>

                  {/* Visual Notes Card at end of service with smooth glide-up entrance */}
                  <ScrollReveal
                    direction="up"
                    delay={260}
                    duration={850}
                    distance={26}
                    threshold={0.04}
                    rootMargin="0px 0px -30px 0px"
                  >
                    {service.num === "01" ? (
                      <BrandingShowcaseBanner priority={index === 0} />
                    ) : service.num === "04" ? (
                      <InstagramReelsShowcase />
                    ) : service.num === "05" ? (
                      <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-black/15 bg-[#000000] select-none">
                        {/* 1. SIGNATURE TOP RED HEADER BAR (#FF0043) */}
                        <div className="w-full bg-[#FF0043] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border-b border-black/20 text-black">
                          <span className="font-mono font-black text-xs sm:text-sm tracking-wider uppercase">
                            {service.categoryTag || "STREAM"} / VISUAL NOTES
                          </span>
                          <span className="font-mono font-black text-xs sm:text-sm tracking-widest uppercase">
                            {service.framesCount ? `${service.framesCount} FRAMES` : "24 FRAMES"}
                          </span>
                        </div>

                        {/* Diagonal Marquee Carousel Slider */}
                        <div className="relative w-full h-[480px] sm:h-[580px] md:h-[650px] overflow-hidden bg-[#000000]">
                          <DiagonalMarqueeCarousel
                            cards={spotifySongCards}
                            angle={-12}
                            baseSpeed={85}
                            disableHover={true}
                            pauseOnHover={false}
                            className="h-full w-full"
                            cardClassName="h-[270px] w-[152px] sm:h-[330px] sm:w-[185px] md:h-[380px] md:w-[214px] rounded-xl border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.85)] bg-[#07070A]"
                            fadeClassName="from-[#000000] via-[#000000]/60 to-transparent"
                          />
                        </div>
                      </div>
                    ) : service.num === "07" ? (
                      <ContentMediaReelsShowcase />
                    ) : (
                      <ServiceCardBanner
                        images={
                          service.cardImages && service.cardImages.length > 0
                            ? service.cardImages
                            : [service.cardImage]
                        }
                        alt={`${service.title} Visual Notes`}
                        categoryTag={service.categoryTag}
                        framesCount={service.framesCount}
                        priority={index < 2}
                      />
                    )}
                  </ScrollReveal>

                  {/* Huge Stylized Number at Bottom-Right & Divider */}
                  <ScrollReveal
                    direction="up"
                    delay={320}
                    duration={650}
                    distance={14}
                    threshold={0.04}
                  >
                    <div className="flex justify-end pt-3 sm:pt-4 pb-2">
                      <span className="font-sans font-black text-4xl sm:text-5xl md:text-6xl tracking-wider text-[#D4CFC4] select-none scale-y-90">
                        {service.num}
                      </span>
                    </div>

                    {/* Divider Line between services */}
                    {index < toolkitServices.length - 1 && (
                      <div className="w-full border-b border-black/15 mt-10 md:mt-14" />
                    )}
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Booking Ticket Modal matching Admit One Ticket card design */}
        <ServiceBookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          selectedService={selectedBookingService}
          allServices={toolkitServices}
        />

        {/* 6. A SIMPLE WAY TO WORK TOGETHER SECTION */}
        <HowItWorks />

      </main>

      <Footer />

    </div>
  );
}
