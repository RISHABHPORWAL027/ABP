"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MoreVertical, X } from "lucide-react";

export interface MenuItem {
  name: string;
  href: string;
}

interface MenuVerticalProps {
  items: MenuItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export const MenuVertical: React.FC<MenuVerticalProps> = ({
  items,
  ctaLabel = "Connect",
  ctaHref = "#connect",
}) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="md:hidden">
      {/* Mobile Kebab Menu Trigger Button */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="relative z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md text-white transition-all active:scale-90 focus:outline-none"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="flex items-center justify-center w-6 h-6"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MoreVertical className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </button>

      {/* Fullscreen Mobile Slide Panel Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#000000]/80 backdrop-blur-xl"
            onClick={toggleMenu}
          >
            {/* Sliding Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 w-full sm:w-[380px] h-full bg-[#0c0104] border-l border-white/15 p-8 pt-28 flex flex-col justify-between shadow-2xl overflow-y-auto overflow-x-hidden relative"
            >
              {/* Background Gradient & Texture matching Hero */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat pointer-events-none opacity-85"
                style={{ backgroundImage: "url('/hero-gradient-bg-hd.webp')" }}
              />
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 120% 75% at 50% 8%, rgba(96, 14, 28, 0.6) 0%, rgba(12, 1, 4, 0.85) 65%, #0c0104 100%)",
                }}
              />

              {/* Menu Navigation Items */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8 border-b border-white/15 pb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffe600] animate-pulse" />
                  <span className="font-space font-extrabold text-xs tracking-[2.5px] uppercase text-white/90">
                    NAVIGATION
                  </span>
                </div>

                <nav className="flex flex-col gap-3">
                  {items.map((item, idx) => {
                    const isPathActive = item.href.startsWith("/#")
                      ? pathname === "/"
                      : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.06 + idx * 0.05,
                          type: "spring",
                          stiffness: 280,
                          damping: 24,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center justify-between py-4 px-5 rounded-2xl border transition-colors w-full ${
                            isPathActive
                              ? "bg-white/20 border-[#ffe600] text-[#ffe600]"
                              : "bg-white/5 active:bg-white/15 border-white/10 text-white"
                          }`}
                        >
                          <span className={`font-sans font-extrabold text-3xl tracking-tight ${isPathActive ? "text-[#ffe600]" : "text-white"}`}>
                            {item.name}
                          </span>

                          <div className="flex items-center gap-2.5">
                            <span className="font-space font-extrabold text-xs text-[#ffe600]">
                              0{idx + 1}
                            </span>
                            <ArrowUpRight className="w-5 h-5 text-white/80 stroke-[2.5]" />
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Action CTA */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, type: "spring", stiffness: 280, damping: 24 }}
                className="pt-6 border-t border-white/15 mb-4 relative z-10"
              >
                <a
                  href={ctaHref}
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#ffe600] text-[#000000] font-sans font-extrabold text-lg py-4 rounded-2xl shadow-xl active:scale-95 transition-transform"
                >
                  {ctaLabel}
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </a>

                {/* Social Redirection Links */}
                <div className="flex items-center justify-center gap-3 pt-4">
                  <a
                    href="https://www.instagram.com/allbyplay"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-[#ffe600] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@allbyplay"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-[#ffe600] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/allbyplay"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-[#ffe600] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
