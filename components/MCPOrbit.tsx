"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { trackSectionViewed } from "@/lib/analytics";

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

function getOrbitPos(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    top: `${Math.round((50 - radius * Math.cos(rad)) * 100) / 100}%`,
    left: `${Math.round((50 + radius * Math.sin(rad)) * 100) / 100}%`,
  };
}

export default function MCPOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [rotation, setRotation] = useState(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          trackSectionViewed("integrations");
        }
      },
      { threshold: 0.15 },
    );

    if (ref.current) {
      obs.observe(ref.current);
    }

    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const animate = (time: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;
      setRotation((prev) => (prev + (delta / 1000) * 4) % 360);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = 0;
    };
  }, [visible]);

  return (
    <section ref={ref} id="integrations" aria-labelledby="integrations-heading" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/[0.03] blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent/70 mb-4">
            Connected Ecosystem
          </span>
          <h2 id="integrations-heading" className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4">
            Decide here. <span className="text-text-secondary">Build anywhere.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Trilo syncs your decisions, architecture context, and execution state directly into your
            favorite tools so nothing gets lost between where you plan and where you build.
          </p>
        </div>

        <div
          className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="relative w-full max-w-[600px] aspect-square mx-auto">
            <div className="absolute inset-0 rounded-full border border-border/30" />

            {outerRing.map((tool, i) => {
              const baseAngle = (360 / outerRing.length) * i;
              const currentAngle = baseAngle + rotation;
              const pos = getOrbitPos(currentAngle, 50);

              return (
                <ToolNode
                  key={tool.name}
                  tool={tool}
                  pos={pos}
                  visible={visible}
                  delay={600 + i * 80}
                  size="sm"
                />
              );
            })}

            <div className="absolute inset-[18%] rounded-full border border-border/40" />

            {innerRing.map((tool, i) => {
              const baseAngle = (360 / innerRing.length) * i;
              const currentAngle = baseAngle - rotation * 1.5;
              const pos = getOrbitPos(currentAngle, 50);

              return (
                <ToolNode
                  key={tool.name}
                  tool={tool}
                  pos={pos}
                  visible={visible}
                  delay={300 + i * 80}
                  size="md"
                />
              );
            })}

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

            <div className="absolute inset-[32%] flex items-center justify-center">
              <div
                className={`relative flex items-center justify-center w-full h-full transition-all duration-700 delay-200 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              >
                <div className="absolute inset-0 rounded-full bg-accent/[0.06] animate-pulse" />
                <div
                  className="absolute -inset-3 rounded-full border border-accent/10"
                  style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
                />

                <div className="relative w-full h-full rounded-full bg-bg-card border border-accent/25 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(0,232,162,0.12)] overflow-hidden">
                  <Image
                    src="/trilo-logo.png"
                    alt="Trilo connected to your tools"
                    width={120}
                    height={120}
                    className="w-[60%] h-[60%] object-contain rounded-xl"
                    priority
                  />
                  <span className="text-[10px] md:text-xs font-mono text-accent/60 tracking-[0.15em] uppercase mt-1">
                    Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

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
    </section>
  );
}

interface ToolNodeProps {
  tool: { name: string; abbr: string; color: string };
  pos: { top: string; left: string };
  visible: boolean;
  delay: number;
  size: "sm" | "md";
}

function ToolNode({ tool, pos, visible, delay, size }: ToolNodeProps) {
  const nodeSize = size === "md" ? "w-12 h-12 md:w-14 md:h-14" : "w-10 h-10 md:w-12 md:h-12";
  const fontSize = size === "md" ? "text-xs md:text-sm" : "text-[10px] md:text-xs";
  const adjustedPos =
    size === "md"
      ? {
          top: `${18 + (parseFloat(pos.top) / 100) * 64}%`,
          left: `${18 + (parseFloat(pos.left) / 100) * 64}%`,
        }
      : pos;

  return (
    <div
      className="absolute"
      style={{
        top: adjustedPos.top,
        left: adjustedPos.left,
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
        }}
      >
        <div
          className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
          style={{ backgroundColor: `${tool.color}20` }}
        />

        <div
          className={`relative ${nodeSize} rounded-full bg-bg-card border flex items-center justify-center cursor-default transition-all duration-300 group-hover:border-opacity-60`}
          style={{ borderColor: `${tool.color}30` }}
        >
          <span
            className={`${fontSize} font-bold`}
            style={{ color: tool.color }}
          >
            {tool.abbr}
          </span>
        </div>

        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-bg-elevated border border-border text-[10px] text-text-secondary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {tool.name}
        </div>
      </div>
    </div>
  );
}

function Pulse({ delay, angle }: { delay: number; angle: number }) {
  return (
    <div
      className="absolute top-1/2 left-1/2 w-0 h-0"
      style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
    >
      <div
        className="absolute w-1.5 h-1.5 rounded-full bg-accent/50"
        style={{
          animation: `pulse-out 3s ease-out ${delay}s infinite`,
          top: "-0.75px",
          left: "-0.75px",
        }}
      />
    </div>
  );
}
