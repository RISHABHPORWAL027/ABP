"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { HowItWorks } from "@/components/ui/how-it-works";
import { AdmitOneTicketCard } from "@/components/ui/admit-one-ticket";
import { AnimatedEqualizer } from "@/components/AnimatedEqualizer";
import { TypewriterText } from "@/components/TypewriterText";

export default function ServicesOverviewPage() {
  const [activeTab, setActiveTab] = useState("01");



  // 7 Connected Toolkit Services matching the provided reference layout
  const toolkitServices = [
    {
      num: "01",
      badge: "BRAND",
      bg: "bg-[#5B3BE8] text-white",
      badgeBg: "#FFE600",
      badgeText: "#000000",
      title: "Branding & Marketing",
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
      badge: "RELEASE",
      bg: "bg-[#FFC72C] text-black",
      badgeBg: "#5B3BE8",
      badgeText: "#FFFFFF",
      title: "Release-based Campaigns",
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
      badge: "PR",
      bg: "bg-[#1E1E28] text-white",
      badgeBg: "#FFE600",
      badgeText: "#000000",
      title: "PR Activation",
      p1: "When a story is strong, PR helps it travel further. We build PR activations that go beyond one channel and instead look at the full mix — social, print, digital, radio, television, podcasts, and music platforms.",
      p2: "The goal is to place the artist and the release in spaces where the story actually connects with people.",
      highlights: [
        "Media outreach",
        "Heavy text placements",
        "Press features",
        "Broadcast and podcast visibility",
      ],
    },
    {
      num: "04",
      badge: "SOCIAL",
      bg: "bg-[#FF6B4A] text-white",
      badgeBg: "#FFE600",
      badgeText: "#000000",
      title: "Instagram-centric Campaigns",
      p1: "Instagram is one of the main places where music gets noticed, shared, and talked about. We build campaigns that use content plans, creatives, edit-page pushes, review-led support, and creator collaborations to give a song more reach.",
      p2: "This includes thinking about the artist's profile as a whole, not just one release at a time.",
      highlights: [
        "Content planning",
        "Edit page campaigns",
        "Reel campaigns",
        "Influencer campaigns",
        "Profile growth support",
      ],
    },
    {
      num: "05",
      badge: "STREAM",
      bg: "bg-[#7CFF6B] text-black",
      badgeBg: "#FFE600",
      badgeText: "#000000",
      title: "Spotify-focussed Campaigns",
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
      badge: "ADS",
      bg: "bg-[#2563EB] text-white",
      badgeBg: "#FFE600",
      badgeText: "#000000",
      title: "Ads Marketing",
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
      badge: "CONTENT",
      bg: "bg-[#E8E6DF] text-black",
      badgeBg: "#FFE600",
      badgeText: "#000000",
      title: "Content & Social Media Management",
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
    const element = document.getElementById(`service-${num}`);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
              <h1 className="font-outfit font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[82px] tracking-tight leading-[1.04] text-white mb-6 md:mb-8">
                Music marketing that feels{" "}
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

              <p className="font-sans font-normal text-white/75 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed mb-8 md:mb-10">
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
        <section className="w-full bg-[#F5F4EE] text-[#000000] py-20 md:py-28 font-sans relative">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <ScrollReveal direction="up">
                <h2 className="font-outfit font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05] text-[#000000] mb-8">
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
                <p className="font-outfit font-bold text-xl sm:text-3xl lg:text-[34px] text-[#111111] leading-snug tracking-tight mb-8 max-w-4xl">
                  Every artist and project needs something a little different. Some need a stronger rollout. Some need more visibility. Some need a better content rhythm.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <p className="font-sans font-medium text-black/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
                  And sometimes, the work is about building the full picture from scratch. That&apos;s why we don&apos;t work with a fixed template. We look at what the music needs, what the artist needs, and what the release actually deserves.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 3. BUILT FOR DIFFERENT PARTS OF THE MUSIC WORLD SECTION */}
        <section className="w-full bg-[#FF0043] text-white py-20 md:py-28 font-sans relative overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <ScrollReveal direction="up">
                <h2 className="font-outfit font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05] text-white mb-8">
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
                <p className="font-sans font-semibold text-lg sm:text-2xl lg:text-[28px] text-white leading-relaxed mb-6 max-w-4xl">
                  We work with indie artists, labels, managers, festival teams, and music projects that need a more thoughtful approach to marketing.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <p className="font-sans font-medium text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
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
        <section className="w-full bg-[#FFFFFF] text-[#000000] py-20 md:py-28 font-sans relative">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12">
            <ScrollReveal direction="up">
              <h2 className="font-outfit font-extrabold text-4xl sm:text-6xl lg:text-7xl text-black tracking-tight leading-[1.05] mb-16 md:mb-20">
                One connected campaign toolkit.
              </h2>
            </ScrollReveal>

            {/* List of 7 Services styled as Admit One Ticket cards */}
            <div className="space-y-16 md:space-y-24">
              {toolkitServices.map((service) => (
                <div
                  key={service.num}
                  id={`service-${service.num}`}
                  className="scroll-mt-28"
                >
                  <ScrollReveal direction="up">
                    <AdmitOneTicketCard service={service} />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. A SIMPLE WAY TO WORK TOGETHER SECTION */}
        <HowItWorks />


      </main>

      <Footer />
    </div>
  );
}
