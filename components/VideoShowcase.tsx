"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { trackSectionViewed, trackEvent } from "@/lib/analytics";

export default function VideoShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          trackSectionViewed("video_demo");
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  /* Track milestone percentages */
  const milestonesRef = useRef(new Set<number>());

  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const pct = Math.floor((v.currentTime / v.duration) * 100);
    for (const m of [25, 50, 75, 100]) {
      if (pct >= m && !milestonesRef.current.has(m)) {
        milestonesRef.current.add(m);
        trackEvent("video_milestone", { milestone: m });
      }
    }
  }, []);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      if (!hasStarted) {
        setHasStarted(true);
        trackEvent("video_play", { video: "Trilo_Idea_to_Execution" });
      }
    } else {
      v.pause();
      trackEvent("video_pause", { video: "Trilo_Idea_to_Execution" });
    }
  }, [hasStarted]);

  return (
    <section ref={ref} id="demo" aria-labelledby="demo-heading" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.02] blur-[200px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent/70 mb-4">
            See it in action
          </span>
          <h2 id="demo-heading" className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4">
            From Chaos to{" "}
            <span className="gradient-text">Clarity</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Watch how Trilo continuously guides decisions, compares trade-offs, and tracks execution.
          </p>
        </div>

        {/* Video container */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Browser-style chrome */}
          <div className="rounded-2xl overflow-hidden border border-border/60 bg-bg-card shadow-2xl shadow-black/30">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-bg-elevated/50">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="h-6 px-4 flex items-center rounded-md bg-bg/60 text-[11px] text-text-dim font-mono">
                  trilo.dev/demo
                </div>
              </div>
              <div className="w-14" />
            </div>

            {/* Video player */}
            <div className="relative aspect-video bg-bg">
              <video
                ref={videoRef}
                src="/Trilo__Idea_to_Execution.mp4"
                poster="/api/video-thumbnail"
                controls
                controlsList="nodownload"
                playsInline
                preload="metadata"
                onPlay={() => { setPlaying(true); setHasStarted(true); }}
                onPause={() => setPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => {
                  setPlaying(false);
                  trackEvent("video_complete", { video: "Trilo_Idea_to_Execution" });
                }}
                className="w-full h-full object-cover"
              />

              {/* Big centered play overlay — clickable, only before first play */}
              {!hasStarted && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-bg/50 cursor-pointer z-10"
                  onClick={() => togglePlay()}
                >
                  <div className="w-20 h-20 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center backdrop-blur-sm hover:bg-accent/25 hover:border-accent/40 hover:scale-110 transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-accent ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Subtle grid pattern — visible before playing */}
              {!hasStarted && (
                <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
              )}
            </div>
          </div>

          {/* Badge under video */}
          <div className="flex justify-center mt-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-elevated border border-border/60 text-xs text-text-secondary">
              <svg
                className="w-3.5 h-3.5 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Full walkthrough · Under 2 minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
