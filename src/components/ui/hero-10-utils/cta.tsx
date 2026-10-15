"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CtaProps {
  ctaEnabled?: boolean;
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: "primary" | "outline" | "secondary";
  className?: string;
  icon?: React.ReactNode;
}

export function Cta({ cta }: { cta: CtaProps }) {
  if (cta.ctaEnabled === false) return null;

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-sans font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg active:scale-95";

  const variantStyles = {
    primary:
      "bg-[#7CFF6B] hover:bg-[#6be45b] text-black hover:scale-[1.03] shadow-[#7CFF6B]/20",
    outline:
      "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40",
    secondary:
      "bg-white text-black hover:bg-[#ffe600] hover:text-black",
  };

  const content = (
    <>
      <span>{cta.label}</span>
      {cta.icon ?? <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
    </>
  );

  if (cta.onClick) {
    return (
      <button
        type="button"
        onClick={cta.onClick}
        className={cn(baseStyles, variantStyles[cta.variant ?? "primary"], cta.className)}
      >
        {content}
      </button>
    );
  }

  if (cta.href) {
    if (cta.href.startsWith("http")) {
      return (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variantStyles[cta.variant ?? "primary"], cta.className)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={cta.href}
        className={cn(baseStyles, variantStyles[cta.variant ?? "primary"], cta.className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={cn(baseStyles, variantStyles[cta.variant ?? "primary"], cta.className)}
    >
      {content}
    </button>
  );
}
