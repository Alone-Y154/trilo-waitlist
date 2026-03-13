"use client";

import { useRef, useEffect, useState } from "react";

import { trackSectionViewed } from "@/lib/analytics";

const problems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Technology Confusion",
    description:
      "Thousands of tools and frameworks. No clear answer on what to use for your specific project, team, and budget.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Unrealistic Timelines",
    description:
      "3-week estimates that spiral into 3-month projects. Without understanding true complexity, launches slip endlessly.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    title: "Hidden Complexity",
    description:
      '"Add real-time chat" sounds simple. It actually requires websockets, persistence, presence systems, and scaling logic.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Architecture Blind Spots",
    description:
      "Critical system design decisions made without expertise. One wrong call early on can cost months of rework.",
  },
];

export default function Problems() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          trackSectionViewed("problems");
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="problems" aria-labelledby="problems-heading" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent/70 mb-4">
            The Problem
          </span>
          <h2 id="problems-heading" className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight">
            Building software is a{" "}
            <span className="text-text-secondary">maze of decisions</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className={`glow-card p-6 md:p-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5">
                {problem.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2.5 text-text">
                {problem.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
