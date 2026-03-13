"use client";

import { useRef, useEffect, useState } from "react";

/* ─── Tool definitions with brand colors ─── */

const innerRing = [
  { name: "Cursor", abbr: "Cu", color: "#00A0FF" },
  { name: "Lovable", abbr: "Lo", color: "#FF385C" },
  { name: "Bolt.new", abbr: "⚡", color: "#FFCC00" },
  { name: "VS Code", abbr: "VS", color: "#007ACC" },
  { name: "Figma", abbr: "Fi", color: "#A259FF" },
  { name: "Builder.io", abbr: "Bi", color: "#18B4F4" },
];

const outerRing = [
  { name: "GitHub", abbr: "GH", color: "#E6EDF3" },
  { name: "Vercel", abbr: "▲", color: "#FFFFFF" },
  { name: "Supabase", abbr: "Sb", color: "#3ECF8E" },
  { name: "Replit", abbr: "Re", color: "#F26207" },
  { name: "Windsurf", abbr: "Ws", color: "#00D4AA" },
  { name: "Antigravity", abbr: "Ag", color: "#8B5CF6" },
  { name: "Linear", abbr: "Li", color: "#5E6AD2" },
  { name: "Notion", abbr: "No", color: "#FFFFFFCC" },
];

export default function MCPOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/[0.03] blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent/70 mb-4">
            Connected Ecosystem
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4">
            Plan here.{" "}
            <span className="text-text-secondary">Build anywhere.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Trilo creates your blueprint, then sends it directly to your favorite build platform via MCP — so you go from plan to code without copy-pasting a thing.
          </p>
        </div>

        {/* Orbit visualization */}
        <div
          className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {/* Orbit container — fixed aspect ratio */}
          <div className="relative w-full max-w-[600px] aspect-square mx-auto">

            {/* Outer orbit ring */}
            <div
              className="absolute inset-0 rounded-full border border-border/30"
              style={{
                animation: visible
                  ? "spin-slow 90s linear infinite"
                  : "none",
              }}
            >
              {outerRing.map((tool, i) => {
                const angle = (360 / outerRing.length) * i;
                return (
                  <ToolNode
                    key={tool.name}
                    tool={tool}
                    angle={angle}
                    radius={50}
                    orbitDirection="reverse"
                    visible={visible}
                    delay={600 + i * 80}
                    size="sm"
                  />
                );
              })}
            </div>

            {/* Inner orbit ring */}
            <div
              className="absolute inset-[18%] rounded-full border border-border/40"
              style={{
                animation: visible
                  ? "spin-slow 60s linear infinite reverse"
                  : "none",
              }}
            >
              {innerRing.map((tool, i) => {
                const angle = (360 / innerRing.length) * i;
                return (
                  <ToolNode
                    key={tool.name}
                    tool={tool}
                    angle={angle}
                    radius={50}
                    orbitDirection="normal"
                    visible={visible}
                    delay={300 + i * 80}
                    size="md"
                  />
                );
              })}
            </div>

            {/* MCP Connection pulses */}
            {visible && (
              <>
                <Pulse delay={0} angle={30} />
                <Pulse delay={2} angle={120} />
                <Pulse delay={4} angle={210} />
                <Pulse delay={1} angle={300} />
                <Pulse delay={3} angle={75} />
                <Pulse delay={5} angle={165} />
              </>
            )}

            {/* Center: Trilo logo */}
            <div className="absolute inset-[32%] flex items-center justify-center">
              <div
                className={`relative flex items-center justify-center w-full h-full transition-all duration-700 delay-200 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              >
                {/* Glow rings */}
                <div className="absolute inset-0 rounded-full bg-accent/[0.06] animate-pulse" />
                <div
                  className="absolute -inset-3 rounded-full border border-accent/10"
                  style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
                />

                {/* Core */}
                <div className="relative w-full h-full rounded-full bg-bg-card border border-accent/25 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(0,232,162,0.12)]">
                  <span className="font-display text-2xl md:text-3xl font-extrabold text-text tracking-tight">
                    trilo
                    <span className="text-accent">.</span>
                  </span>
                  <span className="text-[10px] md:text-xs font-mono text-accent/60 tracking-[0.15em] uppercase mt-1">
                    MCP Hub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom labels */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 mt-14 transition-all duration-700 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[...innerRing, ...outerRing].map((tool) => (
            <span
              key={tool.name}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-elevated border border-border/60 text-xs text-text-secondary"
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: tool.color }}
              />
              {tool.name}
            </span>
          ))}
        </div>
      </div>

      {/* CSS for orbit spin */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}

/* ─── Orbiting Tool Node ─── */

interface ToolNodeProps {
  tool: { name: string; abbr: string; color: string };
  angle: number;
  radius: number;
  orbitDirection: "normal" | "reverse";
  visible: boolean;
  delay: number;
  size: "sm" | "md";
}

function ToolNode({
  tool,
  angle,
  radius,
  orbitDirection,
  visible,
  delay,
  size,
}: ToolNodeProps) {
  const nodeSize = size === "md" ? "w-12 h-12 md:w-14 md:h-14" : "w-10 h-10 md:w-12 md:h-12";
  const fontSize = size === "md" ? "text-xs md:text-sm" : "text-[10px] md:text-xs";

  /* Counter-rotate so the icon stays upright while orbit spins */
  const counterDuration = orbitDirection === "reverse" ? "90s" : "60s";
  const counterDirection = orbitDirection === "reverse" ? "normal" : "reverse";

  return (
    <div
      className="absolute"
      style={{
        top: `${50 - radius * Math.cos((angle * Math.PI) / 180)}%`,
        left: `${50 + radius * Math.sin((angle * Math.PI) / 180)}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`group relative transition-all ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{
          transitionDuration: "500ms",
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          /* Counter-rotate to stay upright */
          animation: visible
            ? `spin-counter ${counterDuration} linear infinite ${counterDirection}`
            : "none",
        }}
      >
        {/* Glow on hover */}
        <div
          className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
          style={{ backgroundColor: `${tool.color}20` }}
        />

        {/* Node circle */}
        <div
          className={`relative ${nodeSize} rounded-full bg-bg-card border flex items-center justify-center cursor-default transition-all duration-300 group-hover:border-opacity-60`}
          style={{
            borderColor: `${tool.color}30`,
          }}
        >
          <span
            className={`${fontSize} font-bold`}
            style={{ color: tool.color }}
          >
            {tool.abbr}
          </span>
        </div>

        {/* Tooltip */}
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-bg-elevated border border-border text-[10px] text-text-secondary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {tool.name}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-counter {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

/* ─── Connection Pulse ─── */

function Pulse({ delay, angle }: { delay: number; angle: number }) {
  return (
    <div
      className="absolute top-1/2 left-1/2 w-0 h-0"
      style={{
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
      }}
    >
      <div
        className="absolute w-1.5 h-1.5 rounded-full bg-accent/50"
        style={{
          animation: `pulse-out 3s ease-out ${delay}s infinite`,
          top: "-0.75px",
          left: "-0.75px",
        }}
      />
      <style jsx>{`
        @keyframes pulse-out {
          0% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-200px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
