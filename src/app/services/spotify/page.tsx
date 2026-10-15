"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero10 } from "@/components/ui/hero-10";
import { AdmitOneTicketCard, ServiceTicketData } from "@/components/ui/admit-one-ticket";
import { ServiceBookingModal } from "@/components/ServiceBookingModal";
import { ParallaxServicesSection } from "@/components/ParallaxServicesSection";
import { Music2 } from "lucide-react";

export default function SpotifyServicePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const spotifyServiceData: ServiceTicketData = {
    num: "05",
    slug: "spotify",
    badge: "STREAM",
    bg: "bg-[#7CFF6B] text-black",
    badgeBg: "#FFE600",
    badgeText: "#000000",
    title: "Spotify-focussed Campaigns",
    stubTitle: "DSP STREAMING",
    stubSubtitle: "ALGORITHMIC & PLAYLIST DATA",
    isFeaturedCaseStudy: true,
    caseStudyNote: "Featured Case Study: Alfaaz by Hamza Malik & Zain Zohaib reached #2 on Spotify Top Songs India",
    p1: "Spotify growth needs more than just hoping for streams. We use research, data, playlist strategy, and campaign planning to help artists build a stronger presence on the platform.",
    p2: "We look at search keywords, stream sources, artist profile visits, and algorithmic streams so the campaign is guided by actual performance, not guesswork.",
    highlights: [
      "Playlist placements & pitching",
      "Keyword & SEO strategy",
      "Audience data analytics",
      "Algorithmic trigger optimization",
      "Artist profile & Canvas design",
    ],
  };

  // 2 Images only as requested for the alternating parallax section
  const caseStudySections = [
    {
      id: 1,
      badge: "SPOTIFY TOP SONGS INDIA",
      badgeColor: "#7CFF6B",
      title: "Peaked at #2 Nationwide",
      subtitle: "Alfaaz — Hamza Malik & Zain Zohaib",
      description:
        "Our strategic PR campaign and editorial playlist push propelled 'Alfaaz' by Hamza Malik and Zain Zohaib from its initial debut all the way to #2 on the Spotify Top Songs India Chart.",
      imageUrl: "/services/spotify/alfaaz-spotify-chart-02-peak.jpeg",
      reverse: false,
      metric: "PEAK #2",
    },
    {
      id: 2,
      badge: "OFFICIAL ASIAN MUSIC CHART",
      badgeColor: "#FFE600",
      title: "Official Asian Chart Peak",
      subtitle: "Global Diaspora Momentum",
      description:
        "By synchronizing media press coverage, broadcast radio, and creator audio adoption, 'Alfaaz' achieved global diaspora traction, debuting and peaking at #5 on the Official Asian Music Chart.",
      imageUrl: "/services/spotify/alfaaz-asian-music-chart-05.jpeg",
      reverse: true,
      metric: "PEAK #5",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#07070A] text-white selection:bg-[#7CFF6B] selection:text-black font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            1. HERO10 COMPONENT (EXACT DESIGN REQUESTED)
           ======================================================== */}
        <Hero10
          title="Spotify Campaigns Engineered for the"
          titleLine2Prefix="Charts:"
          titleHighlight="#2 on Top Songs India"
          description="Strategic playlist pitching, algorithmic save triggers, and coordinated PR that turn releases into verified chart hits."
          socialProof="VERIFIED CASE STUDY • HAMZA MALIK & ZAIN ZOHAIB — 'ALFAAZ'"
          images={[
            "/services/spotify/alfaaz-spotify-chart-43.jpeg",
            "/services/spotify/alfaaz-spotify-chart-02-peak.jpeg",
            "/services/spotify/alfaaz-asian-music-chart-05.jpeg",
          ]}
          imageAlts={[
            "Alfaaz Spotify Top Songs India #43",
            "Alfaaz Spotify Top Songs India #2 Peak",
            "Alfaaz Official Asian Music Chart #5",
          ]}
          animation="subtle"
          variant="standard"
          primaryCTA={{
            label: "Book this service",
            variant: "primary",
            onClick: () => setBookingModalOpen(true),
          }}
          secondaryCTA={{
            label: "Stream 'Alfaaz' on Spotify",
            variant: "outline",
            href: "https://open.spotify.com/track/0tW2gwaRzFQQrgr2UCO56G",
            icon: <Music2 className="w-4 h-4 text-[#7CFF6B]" />,
          }}
        />

        {/* ========================================================
            2. PARALLAX FEATURE SECTION (2 IMAGES ONLY • BRAND PALETTE)
           ======================================================== */}
        <ParallaxServicesSection
          heading="Case Study: Alfaaz"
          subheading="Hamza Malik & Zain Zohaib • Scroll to view chart proof"
          sections={caseStudySections}
        />

        {/* ========================================================
            3. SAME CARD SORT OF DESIGN (ADMIT ONE TICKET)
           ======================================================== */}
        <section className="w-full bg-[#FFFFFF] text-black py-16 sm:py-24 font-sans border-t border-black/10">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-8">
              <span className="font-space font-extrabold text-xs uppercase tracking-[2px] text-black/60 block mb-2">
                CAMPAIGN SPECIFICATION
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-4xl text-black tracking-tight">
                Service 05 Specification Card
              </h2>
            </div>

            {/* AdmitOneTicketCard */}
            <AdmitOneTicketCard
              service={spotifyServiceData}
              onBookClick={() => setBookingModalOpen(true)}
            />
          </div>
        </section>
      </main>

      <Footer />

      {/* Booking Modal */}
      <ServiceBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedService={spotifyServiceData}
        allServices={[spotifyServiceData]}
      />
    </div>
  );
}
