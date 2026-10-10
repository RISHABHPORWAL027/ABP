"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MenuVertical } from "@/components/ui/menu-vertical";
import { SlideTabs } from "@/components/ui/slide-tabs";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Journey", href: "/journey" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className={`w-full bg-transparent text-white py-6 md:py-8 font-sans relative z-50 ${className}`}>
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 flex items-center justify-between relative z-50">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group py-0.5" aria-label="All By Play Home">
          <div className="relative h-11 sm:h-13 md:h-14 w-auto flex items-center group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/abp_gradientwhite_opacity.png"
              alt="All By Play"
              width={150}
              height={130}
              className="h-11 sm:h-13 md:h-14 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Slide Tabs Navigation (Desktop) */}
        <SlideTabs items={navLinks} />

        {/* Right Connect Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <a
            href="#connect"
            className="inline-flex items-center gap-2.5 bg-white text-[#000000] font-sans font-extrabold text-base px-7 py-3 rounded-full transition-all duration-300 ease-out hover:bg-[#ffe600] hover:text-[#000000] hover:scale-[1.03] hover:shadow-xl active:scale-95 shadow-lg cursor-pointer"
          >
            Connect
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Phone Kebab Menu (MenuVertical Component) */}
        <MenuVertical items={navLinks} ctaLabel="Connect With Us" ctaHref="#connect" />
      </div>
    </header>
  );
};
