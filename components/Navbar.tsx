"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { trackClick } from "@/lib/analytics";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={() => trackClick("navbar", "Logo", "#")} className="flex items-center gap-2">
          <Image
            src="/trilo-logo.png"
            alt="Trilo"
            width={32}
            height={32}
            className="rounded-lg"
            priority
          />
          <span className="font-display text-xl font-bold text-text tracking-tight">
            trilo<span className="text-accent">.</span>
          </span>
        </a>

        {/* CTA */}
        <a
          href="#waitlist"
          onClick={() => trackClick("navbar", "Join Waitlist", "#waitlist")}
          className="h-9 px-5 flex items-center rounded-lg bg-accent/10 text-accent text-sm font-medium border border-accent/20 hover:bg-accent/20 hover:border-accent/30 transition-all duration-200"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
