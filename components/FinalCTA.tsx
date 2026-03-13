"use client";

import { useRef, useEffect, useState } from "react";
import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="waitlist" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[150px] pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      <div
        className={`relative z-10 max-w-2xl mx-auto px-6 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Accent line */}
        <div className="w-12 h-px bg-accent/40 mx-auto mb-8" />

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
          Be the first to{" "}
          <span className="gradient-text">plan smarter</span>
        </h2>

        <p className="text-text-secondary text-lg mb-10 leading-relaxed">
          Stop guessing. Stop over-engineering. Get an architecture-driven plan
          that turns your idea into reality.
        </p>

        {/* Form */}
        <div className="flex justify-center mb-8">
          <WaitlistForm variant="large" />
        </div>

        {/* Trust */}
        <p className="text-sm text-text-dim">
          Join <span className="text-text-secondary font-medium">500+ founders and engineers</span>{" "}
          already on the waitlist. No spam, ever.
        </p>
      </div>
    </section>
  );
}
