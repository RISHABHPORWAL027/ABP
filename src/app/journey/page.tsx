"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollGlobe } from "@/components/ui/landing-page";

export default function JourneyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0c] text-white selection:bg-[#FF0043] selection:text-white font-sans overflow-x-hidden">
      <Navbar />

      <main className="flex-1 relative">
        <ScrollGlobe />
      </main>

      <Footer />
    </div>
  );
}
