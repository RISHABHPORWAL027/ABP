"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface MagneticButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "dark" | "light";
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  text,
  href,
  onClick,
  variant = "dark",
  className = "",
}) => {
  const isLight = variant === "light";

  const content = (
    <div
      className={`group inline-flex items-center gap-4 cursor-pointer select-none ${className}`}
      onClick={onClick}
    >
      <div
        className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-400 ${
          isLight
            ? "border-white/30 text-white group-hover:bg-[#e60000] group-hover:border-[#e60000]"
            : "border-black/20 text-[#050505] group-hover:bg-[#e60000] group-hover:border-[#e60000] group-hover:text-white"
        }`}
      >
        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <span
        className={`font-space font-bold text-xs uppercase tracking-widest border-b-2 border-transparent pb-1 transition-all duration-300 ${
          isLight
            ? "text-[#f5f5f3] group-hover:border-[#e60000]"
            : "text-[#050505] group-hover:border-[#e60000]"
        }`}
      >
        {text}
      </span>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
};
