"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  Sparkles,
  Disc,
  ArrowUpRight,
  Loader2,
  Check,
} from "lucide-react";
import { ServiceTicketData } from "@/components/ui/admit-one-ticket";

interface ServiceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: ServiceTicketData | null;
  allServices: ServiceTicketData[];
}

export const ServiceBookingModal: React.FC<ServiceBookingModalProps> = ({
  isOpen,
  onClose,
  selectedService,
  allServices,
}) => {
  // Current active service inside modal (can switch if user chooses)
  const [currentService, setCurrentService] = useState<ServiceTicketData | null>(
    selectedService
  );

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [prevSelectedService, setPrevSelectedService] = useState<ServiceTicketData | null>(selectedService);
  if (selectedService !== prevSelectedService) {
    setPrevSelectedService(selectedService);
    if (selectedService) {
      setCurrentService(selectedService);
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !currentService) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    // Simulate booking request transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleResetAndClose = () => {
    setName("");
    setEmail("");
    setComments("");
    setIsSubmitted(false);
    onClose();
  };

  const stubTitle = currentService.stubTitle || "CAMPAIGN SPEC";
  const stubSubtitle = currentService.stubSubtitle || "FULL EXECUTION & ROLLOUT";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-0"
          />

          {/* Modal Ticket Wrapper (Matches Admit One Ticket Card Design) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto no-scrollbar my-auto rounded-[32px] sm:rounded-[36px] shadow-[0_30px_90px_rgba(0,0,0,0.65)] border border-black/20"
          >
            {/* The Ticket Enclosure */}
            <div
              className={`relative w-full rounded-[32px] sm:rounded-[36px] overflow-hidden flex flex-col lg:flex-row shadow-2xl transition-colors duration-500 ${currentService.bg}`}
            >
              {/* Dithered Grain Noise Overlay Texture */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none z-0 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Close Button (Top-Right Floating) */}
              <button
                type="button"
                onClick={handleResetAndClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40 w-10 h-10 rounded-full bg-black/35 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* --- MAIN FORM SPEC SECTION (LEFT BODY) --- */}
              <div className="relative z-10 flex-1 p-6 sm:p-9 md:p-11 flex flex-col justify-between">
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center gap-3 mb-5 pr-12">
                    <span className="font-space font-extrabold text-[11px] sm:text-xs tracking-widest uppercase opacity-80 px-3 py-1 rounded-full border border-current/20">
                      SERVICE {currentService.num}
                    </span>
                    <span
                      className="font-space font-extrabold text-[11px] sm:text-xs tracking-[2px] uppercase px-3 py-1 rounded-full shadow-md"
                      style={{
                        backgroundColor: currentService.badgeBg,
                        color: currentService.badgeText,
                      }}
                    >
                      {currentService.badge}
                    </span>
                    <div className="hidden sm:flex items-center gap-1.5 opacity-75 font-space font-bold text-xs tracking-wider uppercase ml-auto">
                      <Sparkles className="w-3.5 h-3.5 text-[#ffe600]" />
                      <span>BOOKING SPEC</span>
                    </div>
                  </div>

                  {/* Main Title */}
                  <h3 className="font-sans font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] mb-2">
                    Book {currentService.title}
                  </h3>
                  <p className="font-sans font-medium text-xs sm:text-sm opacity-85 leading-relaxed mb-6 max-w-xl">
                    Fill out your artist or release details below. Our strategy team will review your brief and send over a customized campaign roadmap.
                  </p>

                  {/* Booking Form or Success Confirmation */}
                  {isSubmitted ? (
                    <div className="py-10 sm:py-14 text-center flex flex-col items-center justify-center gap-4 bg-black/10 rounded-2xl border border-current/15 p-6 my-4">
                      <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                        <CheckCircle2 className="w-10 h-10 text-[#FF0043]" />
                      </div>
                      <h4 className="font-sans font-black text-2xl sm:text-3xl tracking-tight uppercase">
                        Booking Spec Received!
                      </h4>
                      <p className="font-sans text-sm sm:text-base opacity-90 max-w-md leading-relaxed">
                        Thank you, <span className="font-bold underline">{name}</span>! We&apos;ve logged your request for{" "}
                        <span className="font-bold">{currentService.title}</span>. We&apos;ll be in touch at{" "}
                        <span className="font-bold underline">{email}</span> within 24 hours.
                      </p>
                      <button
                        type="button"
                        onClick={handleResetAndClose}
                        className="mt-4 px-8 py-3.5 rounded-full bg-black text-white hover:bg-white hover:text-black font-sans font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer"
                      >
                        Done & Close
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
                      {/* Name Field */}
                      <div>
                        <label className="block font-space font-bold text-[11px] sm:text-xs tracking-wider uppercase opacity-85 mb-1.5">
                          Name / Artist Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. John Doe / Artist Alias"
                          className="w-full bg-black/15 hover:bg-black/20 focus:bg-black/25 text-inherit placeholder:text-inherit placeholder:opacity-50 border border-current/20 focus:border-current rounded-xl px-4 py-3 font-sans text-sm sm:text-base outline-none transition-all shadow-inner"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block font-space font-bold text-[11px] sm:text-xs tracking-wider uppercase opacity-85 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. artist@label.com"
                          className="w-full bg-black/15 hover:bg-black/20 focus:bg-black/25 text-inherit placeholder:text-inherit placeholder:opacity-50 border border-current/20 focus:border-current rounded-xl px-4 py-3 font-sans text-sm sm:text-base outline-none transition-all shadow-inner"
                        />
                      </div>

                      {/* Service Selector (Pre-filled based on click) */}
                      <div>
                        <label className="block font-space font-bold text-[11px] sm:text-xs tracking-wider uppercase opacity-85 mb-1.5">
                          Selected Service (Pre-filled)
                        </label>
                        <div className="relative">
                          <select
                            value={currentService.num}
                            onChange={(e) => {
                              const found = allServices.find((s) => s.num === e.target.value);
                              if (found) setCurrentService(found);
                            }}
                            className="w-full bg-black/25 text-white font-sans text-sm sm:text-base border border-current/25 focus:border-current rounded-xl px-4 py-3 outline-none appearance-none cursor-pointer pr-10 shadow-inner font-bold"
                          >
                            {allServices.map((s) => (
                              <option key={s.num} value={s.num} className="bg-[#18181b] text-white">
                                Service {s.num}: {s.title} ({s.badge})
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-70 text-xs">
                            ▾
                          </div>
                        </div>
                      </div>

                      {/* Comments / Brief Notes Field */}
                      <div>
                        <label className="block font-space font-bold text-[11px] sm:text-xs tracking-wider uppercase opacity-85 mb-1.5">
                          Comments & Campaign Goals
                        </label>
                        <textarea
                          rows={3}
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                          placeholder="Tell us about your upcoming track/album release date, goals, budget, or links to your music..."
                          className="w-full bg-black/15 hover:bg-black/20 focus:bg-black/25 text-inherit placeholder:text-inherit placeholder:opacity-50 border border-current/20 focus:border-current rounded-xl px-4 py-3 font-sans text-sm sm:text-base outline-none transition-all shadow-inner resize-none"
                        />
                      </div>

                      {/* Submit Action Row */}
                      <div className="pt-2 sm:pt-3 flex items-center justify-between gap-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-2.5 font-sans font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full bg-black text-white hover:bg-white hover:text-black transition-all duration-300 shadow-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group/btn"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span>Sending Spec...</span>
                            </>
                          ) : (
                            <>
                              <span>Confirm Booking Spec</span>
                              <ArrowUpRight className="w-5 h-5 stroke-[2.5] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </>
                          )}
                        </button>

                        <span className="font-space font-extrabold text-[10px] sm:text-xs tracking-widest opacity-60 uppercase hidden sm:inline-block">
                          PRIORITY INTAKE 2026
                        </span>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* --- PERFORATED DIVIDER LINE & NOTCHES --- */}
              <div className="relative flex lg:flex-col items-center justify-between z-20">
                {/* Top Notch Cutout */}
                <div className="hidden lg:block absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black/90 shadow-inner z-30" />

                {/* Mobile Left Notch */}
                <div className="lg:hidden absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/90 shadow-inner z-30" />

                {/* Perforated Dashed Line */}
                <div className="w-full lg:w-0 lg:h-full border-b-2 lg:border-r-2 border-dashed border-current/30 my-4 lg:my-0" />

                {/* Bottom Notch Cutout */}
                <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black/90 shadow-inner z-30" />

                {/* Mobile Right Notch */}
                <div className="lg:hidden absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/90 shadow-inner z-30" />
              </div>

              {/* --- TICKET STUB (RIGHT SECTION) --- */}
              <div className="relative z-10 w-full lg:w-[300px] p-6 sm:p-8 lg:p-9 flex flex-col justify-between items-center lg:items-start bg-black/10 backdrop-blur-sm border-t lg:border-t-0 lg:border-l border-current/10">
                <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
                  {/* Top Spec Header */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Disc className="w-4 h-4 animate-spin-slow opacity-80" />
                    <span className="font-space font-extrabold text-xs tracking-[3px] uppercase opacity-90">
                      SPEC #{currentService.num}
                    </span>
                  </div>

                  {/* Stub Titles */}
                  <div className="font-sans font-extrabold text-xl lg:text-2xl uppercase tracking-wider mb-1">
                    {stubTitle}
                  </div>
                  <p className="font-sans font-semibold text-xs opacity-80 mb-5 uppercase tracking-wider">
                    {stubSubtitle}
                  </p>

                  {/* Highlights Bullet Checklist */}
                  <div className="w-full space-y-2 py-3 border-t border-b border-current/15 text-left mb-4">
                    <span className="font-space text-[10px] font-extrabold tracking-widest uppercase opacity-70 block mb-1">
                      DELIVERABLES INCLUDED:
                    </span>
                    {currentService.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold opacity-90">
                        <Check className="w-3.5 h-3.5 stroke-[3] shrink-0 opacity-80" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Barcode Graphic */}
                  <div className="w-full bg-white/95 p-3 sm:p-3.5 rounded-xl shadow-md flex flex-col items-center justify-center gap-1 text-black my-2">
                    <div className="w-full h-9 flex items-center justify-between gap-[2px] px-1">
                      {[
                        3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 4, 1, 3, 2, 4, 1
                      ].map((width, i) => (
                        <div
                          key={i}
                          className="h-full bg-black rounded-sm"
                          style={{ width: `${width * 1.8}px` }}
                        />
                      ))}
                    </div>
                    <span className="font-mono text-[9px] tracking-[3px] uppercase font-bold text-black/70">
                      ABP-SPEC-2026-{currentService.num}
                    </span>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="w-full pt-4 border-t border-current/20 flex items-center justify-between text-[10px] sm:text-[11px] font-space font-bold opacity-75 uppercase">
                  <span>CONFIRMED INTAKE</span>
                  <span>ALL BY PLAY</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
