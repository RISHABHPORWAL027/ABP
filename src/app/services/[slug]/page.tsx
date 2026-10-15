"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdmitOneTicketCard } from "@/components/ui/admit-one-ticket";
import { ServiceBookingModal } from "@/components/ServiceBookingModal";
import { ALL_SERVICES, getServiceBySlug } from "@/lib/services-data";
import { ArrowUpRight, ChevronLeft, TrendingUp } from "lucide-react";

export default function GenericServicePage() {
  const params = useParams();
  const rawSlug = params?.slug as string;
  const service = getServiceBySlug(rawSlug);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col bg-[#07070A] text-white">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center text-center p-8">
          <h1 className="font-sans font-black text-4xl mb-4">Service Not Found</h1>
          <p className="font-sans text-white/70 mb-8 max-w-md">
            The requested service could not be found. Please browse all available services in our toolkit.
          </p>
          <Link
            href="/services"
            className="px-6 py-3 rounded-full bg-[#ffe600] text-black font-extrabold"
          >
            Back to Services
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#07070A] text-white selection:bg-[#FF0043] selection:text-white font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            1. CLEAN & COMPACT HERO SECTION
           ======================================================== */}
        <section className="w-full bg-[#07070A] pt-6 sm:pt-10 pb-12 font-sans border-b border-white/10 relative">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-space font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-space font-extrabold text-xs uppercase tracking-widest mb-4"
                  style={{ backgroundColor: service.badgeBg, color: service.badgeText }}
                >
                  <span>SERVICE {service.num} • {service.badge}</span>
                </div>

                <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1] text-white mb-4">
                  {service.title}
                </h1>

                <p className="font-sans font-medium text-base sm:text-xl text-white/80 max-w-2xl leading-relaxed mb-6">
                  {service.heroTagline}
                </p>

                {/* Case Study Callout Link */}
                <Link
                  href="/services/spotify"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-xs font-space font-semibold transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#1DB954]" />
                  <span>View Case Study: &apos;Alfaaz&apos; #2 on Spotify Top Songs India</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#ffe600]" />
                </Link>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(true)}
                  className="bg-[#ffe600] hover:bg-[#ffe600]/90 text-black font-sans font-extrabold text-base px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-xl cursor-pointer"
                >
                  <span>Book this service</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <a
                  href="#spec-card"
                  className="bg-white/10 hover:bg-white/20 text-white font-sans font-bold text-base px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>View Specification</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. SAME CARD SORT OF DESIGN (ADMIT ONE TICKET)
           ======================================================== */}
        <section id="spec-card" className="w-full bg-[#FFFFFF] text-black py-16 sm:py-20 font-sans">
          <div className="max-w-[1380px] mx-auto px-6 md:px-12">
            <div className="max-w-2xl mb-8">
              <span className="font-space font-extrabold text-xs uppercase tracking-[2px] text-black/60 block mb-2">
                CAMPAIGN SPECIFICATION
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-4xl text-black tracking-tight">
                Service {service.num} Specification Card
              </h2>
            </div>

            {/* AdmitOneTicketCard */}
            <AdmitOneTicketCard
              service={service}
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
        selectedService={service}
        allServices={ALL_SERVICES}
      />
    </div>
  );
}
