"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";

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
    <footer id="connect" className="w-full bg-[#000000] text-white pt-24 pb-12 font-sans relative overflow-hidden">
      {/* Background Glow Gradient with Primary & Tertiary Accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] h-[600px] bg-gradient-to-t from-[#FF0043]/20 via-[#009082]/15 to-transparent pointer-events-none z-0" />

      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Top Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF0043] inline-block animate-pulse" />
            <span className="font-space font-extrabold text-xs sm:text-sm tracking-[2px] uppercase text-[#FF0043]">
              START A CONVERSATION
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-sans font-extrabold text-2xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] text-white mb-6 min-h-[1.1em]">
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
          <div className="mb-14">
            <a
              href="mailto:hello@allbyplay.com"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-[#FF0043] hover:text-[#009082] transition-colors"
            >
              hello@allbyplay.com
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>

          {/* Form Card Container (Secondary #1A1A1A background) */}
          <div className="w-full bg-[#1A1A1A]/80 backdrop-blur-xl border border-white/15 rounded-[28px] p-8 sm:p-12 shadow-2xl relative mb-24">
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
                src="/ABP_logo.png"
                alt="ABP Logo"
                width={26}
                height={26}
                className="object-contain"
              />
              <span className="font-sans font-black text-base tracking-wider uppercase text-white">
                allbyplay <span className="text-[#FF0043]">.</span>
              </span>
            </div>

            <span className="hidden sm:inline-block text-white/20">•</span>

            <span className="text-white/40 text-xs font-medium">
              © {new Date().getFullYear()} All By Play. All rights reserved.
            </span>
          </div>

          {/* Nav Links */}
          <ul className="flex items-center justify-center flex-wrap gap-5 sm:gap-8 text-xs font-space font-extrabold tracking-widest uppercase text-white/70">
            <li>
              <Link href="/work" className="hover:text-[#ffe600] transition-colors">
                WORK
              </Link>
            </li>
            <li>
              <Link href="/journey" className="hover:text-[#ffe600] transition-colors">
                JOURNEY
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#ffe600] transition-colors">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-[#ffe600] transition-colors">
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
