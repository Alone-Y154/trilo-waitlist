"use client";

import { useState, useEffect, useRef } from "react";
import { trackSectionViewed } from "@/lib/analytics";

const TYPED_TEXT = "A SaaS analytics dashboard with AI-powered insights";

const techStack = [
  { name: "Next.js", label: "Frontend" },
  { name: "Supabase", label: "Backend" },
  { name: "PostgreSQL", label: "Database" },
  { name: "Vercel", label: "Infra" },
  { name: "OpenAI", label: "AI Layer" },
  { name: "Stripe", label: "Payments" },
];

const timeline = [
  { name: "Foundation", weeks: 1.5, pct: 21 },
  { name: "Core Features", weeks: 3, pct: 43 },
  { name: "AI Integration", weeks: 1.5, pct: 21 },
  { name: "Testing & Launch", weeks: 1, pct: 15 },
];

const costs = [
  { name: "Database hosting", cost: "$25" },
  { name: "Serverless functions", cost: "$20" },
  { name: "AI inference", cost: "$30" },
];

export default function FlowDemo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState("");

  /* Trigger when section scrolls into view */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          setStarted(true);
          trackSectionViewed("how_it_works");
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* Animation sequence */
  useEffect(() => {
    if (!started) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    let typeInterval: ReturnType<typeof setInterval> | null = null;

    // Step 1: Show input area
    timers.push(setTimeout(() => setStep(1), 400));

    // Step 2: Start typing
    timers.push(
      setTimeout(() => {
        setStep(2);
        let i = 0;
        typeInterval = setInterval(() => {
          if (i < TYPED_TEXT.length) {
            setTypedText(TYPED_TEXT.slice(0, i + 1));
            i++;
          } else {
            if (typeInterval) clearInterval(typeInterval);
          }
        }, 40);
      }, 900)
    );

    // Step 3: Analyzing
    timers.push(setTimeout(() => setStep(3), 3400));

    // Step 4: Architecture nodes
    timers.push(setTimeout(() => setStep(4), 4800));

    // Step 5: Timeline + costs
    timers.push(setTimeout(() => setStep(5), 6800));

    // Step 6: Blueprint ready
    timers.push(setTimeout(() => setStep(6), 9000));

    return () => {
      timers.forEach((t) => clearTimeout(t));
      if (typeInterval) clearInterval(typeInterval);
    };
  }, [started]);

  const sectionVisible = started;

  return (
    <section ref={sectionRef} id="how-it-works" aria-labelledby="how-it-works-heading" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent/70 mb-4">
            How It Works
          </span>
          <h2 id="how-it-works-heading" className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4">
            See Trilo in action
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Watch how a product idea transforms into a complete engineering blueprint
          </p>
        </div>

        {/* Browser mockup */}
        <div
          className={`rounded-2xl border border-border overflow-hidden bg-bg-elevated shadow-2xl shadow-black/40 transition-all duration-700 delay-200 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Chrome bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-card/80">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]/80" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="h-7 px-4 flex items-center rounded-md bg-bg/60 text-[11px] text-text-dim font-mono">
                app.trilo.dev
              </div>
            </div>
            <div className="w-14" />
          </div>

          {/* Demo content */}
          <div className="p-5 md:p-8 lg:p-10 min-h-[420px] md:min-h-[480px] space-y-6">
            {/* ── Step 1-2: Describe ── */}
            {step >= 1 && (
              <div style={{ animation: "fade-in-up 0.5s cubic-bezier(0.16,1,0.3,1) both" }}>
                <StepLabel num={1} text="Describe your idea" />
                <div className="bg-bg rounded-xl border border-border p-4 min-h-[52px] flex items-center">
                  <span className="font-mono text-sm text-text-secondary break-all">
                    {typedText}
                    {step <= 2 && (
                      <span className="inline-block w-[2px] h-4 bg-accent ml-0.5 align-middle animate-pulse" />
                    )}
                  </span>
                </div>
              </div>
            )}

            {/* ── Step 3: Analyzing ── */}
            {step === 3 && (
              <div
                className="flex items-center gap-3"
                style={{ animation: "fade-in 0.3s ease both" }}
              >
                <svg className="animate-spin w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="opacity-20" />
                  <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="text-sm font-medium text-accent">
                  Analyzing architecture requirements…
                </span>
              </div>
            )}

            {/* ── Step 4: Architecture ── */}
            {step >= 4 && (
              <div style={{ animation: "fade-in-up 0.5s cubic-bezier(0.16,1,0.3,1) both" }}>
                <StepLabel num={2} text="Recommended stack" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                  {techStack.map((tech, i) => (
                    <div
                      key={tech.name}
                      className="p-3 rounded-lg border border-border bg-bg text-center"
                      style={{
                        animation: `scale-in 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both`,
                      }}
                    >
                      <span className="text-[10px] text-accent/60 font-mono uppercase tracking-wider block mb-1">
                        {tech.label}
                      </span>
                      <span className="text-sm font-semibold text-text">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Step 5: Timeline + Cost ── */}
            {step >= 5 && (
              <div
                className="grid md:grid-cols-2 gap-6"
                style={{ animation: "fade-in-up 0.5s cubic-bezier(0.16,1,0.3,1) both" }}
              >
                {/* Timeline */}
                <div>
                  <StepLabel num={3} text="Development timeline" />
                  <div className="space-y-3">
                    {timeline.map((phase, i) => (
                      <div key={phase.name}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-text-secondary">{phase.name}</span>
                          <span className="text-text-dim font-mono">{phase.weeks}w</span>
                        </div>
                        <div className="h-2 rounded-full bg-border overflow-hidden">
                          <div
                            className="h-full rounded-full bg-accent origin-left"
                            style={{
                              width: `${phase.pct}%`,
                              animation: `fill-bar 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms both`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between text-xs pt-1 border-t border-border/50">
                      <span className="text-text-secondary font-medium">Total</span>
                      <span className="text-accent font-mono font-semibold">7 weeks</span>
                    </div>
                  </div>
                </div>

                {/* Cost */}
                <div>
                  <StepLabel num={4} text="Infrastructure cost" />
                  <div className="space-y-0">
                    {costs.map((item, i) => (
                      <div
                        key={item.name}
                        className="flex justify-between text-sm py-2.5 border-b border-border/40"
                        style={{
                          animation: `fade-in 0.4s ease ${i * 80}ms both`,
                        }}
                      >
                        <span className="text-text-secondary">{item.name}</span>
                        <span className="font-mono text-text">{item.cost}</span>
                      </div>
                    ))}
                    <div className="flex justify-between text-sm pt-3 font-semibold">
                      <span className="text-text">Estimated monthly</span>
                      <span className="font-mono text-accent">$75/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 6: Ready ── */}
            {step >= 6 && (
              <div
                className="flex items-center gap-3.5 p-4 rounded-xl bg-accent/[0.08] border border-accent/20"
                style={{ animation: "scale-in 0.5s cubic-bezier(0.16,1,0.3,1) both" }}
              >
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-text text-sm block">
                    Your blueprint is ready
                  </span>
                  <span className="text-xs text-text-secondary">
                    7 weeks · 6 services · $75/mo estimated infrastructure
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Step indicator bar */}
          <div className="flex items-center justify-center gap-3 py-4 border-t border-border bg-bg-card/40">
            {[
              { label: "Describe", active: step >= 1 },
              { label: "Analyze", active: step >= 4 },
              { label: "Plan", active: step >= 5 },
              { label: "Ready", active: step >= 6 },
            ].map((s, i, arr) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    s.active ? "bg-accent shadow-[0_0_8px_rgba(0,232,162,0.4)]" : "bg-border"
                  }`}
                />
                <span
                  className={`text-xs font-medium transition-colors duration-500 ${
                    s.active ? "text-accent" : "text-text-dim"
                  }`}
                >
                  {s.label}
                </span>
                {i < arr.length - 1 && <div className="w-6 md:w-10 h-px bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Helpers ── */

function StepLabel({ num, text }: { num: number; text: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-5 h-5 rounded-md bg-accent/15 text-accent text-[10px] font-bold flex items-center justify-center">
        {num}
      </span>
      <span className="text-xs font-mono text-accent/60 uppercase tracking-wider">
        {text}
      </span>
    </div>
  );
}
