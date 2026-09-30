"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Journey", href: "#journey" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="w-full bg-[#FF0043] text-white py-6 md:py-8 font-sans">
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Image
              src="/ABP_logo.png"
              alt="All By Play Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="font-sans font-black text-2xl md:text-3xl tracking-tight text-white lowercase">
            allbyplay
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-12 font-sans text-base md:text-lg font-bold text-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#ffe600] transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#ffe600] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Connect Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#connect"
            className="inline-flex items-center gap-2.5 bg-white text-[#000000] font-sans font-extrabold text-base px-7 py-3 rounded-full hover:bg-[#ffe600] hover:text-[#000000] transition-all hover:scale-105 shadow-lg"
          >
            Connect
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[88px] bg-[#FF0043] z-50 flex flex-col items-center justify-center gap-8 p-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-extrabold text-white hover:text-[#ffe600] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#connect"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 bg-white text-[#000000] font-extrabold text-lg px-9 py-4 rounded-full mt-4 shadow-xl"
          >
            Connect
            <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
          </a>
        </div>
      )}
    </header>
  );
};
