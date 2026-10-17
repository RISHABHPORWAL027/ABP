"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    links: "",
    goals: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", links: "", goals: "" });
    }, 4000);
  };

  return (
    <footer id="connect" className="w-full bg-[#000000] text-white pt-14 sm:pt-24 pb-12 font-sans relative overflow-hidden [isolation:isolate]">
      {/* Background Glow Gradient with Primary & Tertiary Accents (Edge-to-edge full width) */}
      <div className="absolute inset-x-0 bottom-0 w-full h-[600px] bg-gradient-to-t from-[#FF0043]/20 via-[#009082]/15 to-transparent pointer-events-none z-0" />

      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] xl:text-[56px] 2xl:text-7xl tracking-tight leading-[1.1] md:leading-[1.08] lg:leading-[1.06] xl:leading-[1.05] text-white mb-6 min-h-[1.1em]">
            <TypewriterText
              words={[
                "Connect with us.",
                "Start a conversation.",
                "hello@allbyplay.com",
              ]}
              loop={true}
              className="text-white"
              cursorColor="text-[#FF0043]"
            />
          </h2>

          {/* Description */}
          <p className="font-sans font-medium text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mb-6">
            Whether you&apos;re an artist, manager, label, or team, share your profile links, goals, and a short brief. We&apos;ll help you figure out the next step.
          </p>

          {/* Direct Email Link */}
          <div className="mb-8 sm:mb-14">
            <a
              href="mailto:hello@allbyplay.com"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-[#FF0043] hover:text-[#009082] transition-colors"
            >
              hello@allbyplay.com
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>

          {/* Form Card Container (Secondary #1A1A1A background) */}
          <div className="w-full bg-[#1A1A1A]/80 backdrop-blur-xl border border-white/15 rounded-[24px] sm:rounded-[28px] p-6 sm:p-12 shadow-2xl relative mb-16 sm:mb-24">
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center gap-4">
                <CheckCircle2 className="w-16 h-16 text-[#009082] animate-bounce" />
                <h3 className="font-space font-extrabold text-2xl uppercase tracking-tight text-white">
                  Brief Received!
                </h3>
                <p className="text-white/70 font-sans text-sm max-w-md">
                  Thank you for sharing your project. Our team will review your info and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="font-space font-extrabold text-xs tracking-widest uppercase text-white/60">
                      NAME / TEAM
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="How should we address you?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/25 pb-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF0043] font-sans text-base transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="font-space font-extrabold text-xs tracking-widest uppercase text-white/60">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/25 pb-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF0043] font-sans text-base transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Profile Links */}
                <div className="flex flex-col gap-2">
                  <label className="font-space font-extrabold text-xs tracking-widest uppercase text-white/60">
                    PROFILE LINKS
                  </label>
                  <input
                    type="text"
                    placeholder="Spotify, Instagram, website, or EPK"
                    value={formData.links}
                    onChange={(e) => setFormData({ ...formData, links: e.target.value })}
                    className="w-full bg-transparent border-b border-white/25 pb-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF0043] font-sans text-base transition-colors"
                  />
                </div>

                {/* Row 3: Goals & Context */}
                <div className="flex flex-col gap-2">
                  <label className="font-space font-extrabold text-xs tracking-widest uppercase text-white/60">
                    GOALS & CONTEXT
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you're working on and where you need support."
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    className="w-full bg-transparent border-b border-white/25 pb-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF0043] font-sans text-base transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 bg-[#FF0043] text-white font-sans font-extrabold text-base px-8 py-3.5 rounded-full hover:bg-[#009082] transition-all hover:scale-105 shadow-xl shadow-[#FF0043]/20 cursor-pointer"
                  >
                    Send your brief
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2.5 sm:gap-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/abp_gradientwhite_opacity.png"
                alt="All By Play Logo"
                width={38}
                height={33}
                className="h-8 w-auto object-contain"
              />
            </div>

            <span className="hidden sm:inline-block text-white/20">•</span>

            <span className="text-white/40 text-xs font-medium">
              © {new Date().getFullYear()} All By Play. All rights reserved.
            </span>

            <span className="hidden sm:inline-block text-white/20">•</span>

            {/* Social Redirection Icons (Logo Only) */}
            <div className="flex items-center gap-3.5 pt-1 sm:pt-0">
              <a
                href="https://www.instagram.com/allbyplay"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/50 hover:text-[#ffe600] transition-colors p-1 hover:scale-110 transform transition-transform"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@allbyplay"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/50 hover:text-[#ffe600] transition-colors p-1 hover:scale-110 transform transition-transform"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/allbyplay"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/50 hover:text-[#ffe600] transition-colors p-1 hover:scale-110 transform transition-transform"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <ul className="flex items-center justify-center flex-wrap gap-5 sm:gap-8 text-xs font-space font-extrabold tracking-widest uppercase text-white/70">
            <li>
              <Link href="/work" className="hover:text-[#ffe600] transition-colors">
                WORK
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#ffe600] transition-colors">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#ffe600] transition-colors">
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
