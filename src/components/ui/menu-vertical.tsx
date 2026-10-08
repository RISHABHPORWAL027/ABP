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
              className="absolute top-0 right-0 w-full sm:w-[380px] h-full bg-[#FF0043] border-l border-white/15 p-8 pt-28 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              {/* Menu Navigation Items */}
              <div>
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
                          <span className={`font-syne font-extrabold text-3xl tracking-tight ${isPathActive ? "text-[#ffe600]" : "text-white"}`}>
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
                className="pt-6 border-t border-white/15 mb-4"
              >
                <a
                  href={ctaHref}
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#ffe600] text-[#000000] font-sans font-extrabold text-lg py-4 rounded-2xl shadow-xl active:scale-95 transition-transform"
                >
                  {ctaLabel}
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
