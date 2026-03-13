"use client";

import { useState, useEffect } from "react";

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
          ? "glass border-b border-border/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-xl font-bold text-text tracking-tight">
          trilo<span className="text-accent">.</span>
        </a>

        {/* CTA */}
        <a
          href="#waitlist"
          className="h-9 px-5 flex items-center rounded-lg bg-accent/10 text-accent text-sm font-medium border border-accent/20 hover:bg-accent/20 hover:border-accent/30 transition-all duration-200"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
