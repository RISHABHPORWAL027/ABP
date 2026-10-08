"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export interface SlideTabItem {
  name: string;
  href: string;
}

interface SlideTabsProps {
  items: SlideTabItem[];
}

export const SlideTabs: React.FC<SlideTabsProps> = ({ items }) => {
  const pathname = usePathname();
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <ul
      onMouseLeave={() => setHoveredTab(null)}
      className="relative hidden md:flex items-center w-fit rounded-full border border-white/20 bg-white/10 p-1.5 backdrop-blur-md font-sans selection:bg-transparent"
    >
      {items.map((item) => {
        const isPathActive = item.href.startsWith("/#")
          ? pathname === "/"
          : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

        const isSelected = hoveredTab ? hoveredTab === item.name : isPathActive;

        return (
          <li
            key={item.name}
            onMouseEnter={() => setHoveredTab(item.name)}
            className="relative z-10"
          >
            <Link
              href={item.href}
              className={`relative block px-6 py-2 text-sm lg:text-base font-extrabold transition-colors duration-200 uppercase tracking-wider rounded-full ${
                isSelected ? "text-[#000000]" : "text-white hover:text-white/90"
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="slideTabCursor"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 30,
                  }}
                  className="absolute inset-0 bg-[#ffe600] rounded-full -z-10 shadow-md shadow-[#ffe600]/20"
                />
              )}
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
