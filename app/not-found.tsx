"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { track404 } from "@/lib/analytics";

export default function NotFound() {
  useEffect(() => {
    track404(window.location.pathname);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute inset-0 vignette" />

      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-danger/[0.06] blur-[180px]"
        style={{ top: "20%", left: "25%", animation: "pulse-glow 6s ease-in-out infinite" }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[150px]"
        style={{ top: "50%", right: "20%", animation: "pulse-glow 8s ease-in-out infinite 2s" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src="/trilo-logo.png"
            alt="Trilo"
            width={48}
            height={48}
            className="rounded-xl opacity-80"
          />
        </div>

        <div className="relative mb-8">
          <h1
            className="font-display text-[10rem] md:text-[14rem] font-extrabold leading-none tracking-tighter select-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(255, 92, 92, 0.3)",
            }}
            aria-hidden="true"
          >
            404
          </h1>

          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ animation: "shimmer 3s linear infinite" }}
          >
            <span className="font-display text-[10rem] md:text-[14rem] font-extrabold leading-none tracking-tighter gradient-text select-none">
              404
            </span>
          </div>
        </div>

        <div className="relative mb-10">
          <div className="inline-block border-2 border-dashed border-border/60 rounded-xl px-8 py-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-danger animate-pulse" />
              <span className="font-mono text-xs text-danger/80 tracking-widest uppercase">
                Route Not Found
              </span>
            </div>

            <h2 className="font-display text-xl md:text-2xl font-bold text-text mb-2">
              This page doesn&apos;t exist in the architecture
            </h2>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-md mx-auto">
              Looks like you&apos;ve navigated to an unplanned route. Even the best systems have
              boundaries.
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-bg-elevated border border-border/60 mb-10 font-mono text-sm">
          <span className="text-accent">$</span>
          <span className="text-text-dim">trilo navigate</span>
          <span className="text-danger/70">
            <PathDisplay />
          </span>
          <span className="text-danger">{"// route undefined"}</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="h-12 px-8 flex items-center justify-center rounded-xl bg-accent text-bg font-semibold hover:bg-accent-light active:scale-[0.97] transition-all duration-200"
          >
            Back to Home
          </Link>
          <Link
            href="/#waitlist"
            className="h-12 px-8 flex items-center justify-center rounded-xl bg-bg-elevated border border-border text-text-secondary font-medium hover:border-border-hover hover:text-text transition-all duration-200"
          >
            Join Waitlist
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center gap-4 opacity-30">
          {["React", "Node", "???", "Supabase", "MCP"].map((node, i) => (
            <div
              key={node}
              className="flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-lg bg-bg-card border border-border/40 flex items-center justify-center text-xs font-mono text-text-dim"
                style={{
                  animation: `fade-in 0.5s ease ${i * 0.15}s both`,
                  opacity: node === "???" ? 0.3 : undefined,
                }}
              >
                {node === "???" ? <span className="text-danger animate-pulse">?</span> : node.slice(0, 2)}
              </div>
              {i < 4 && (
                <div
                  className="w-6 h-px"
                  style={{
                    background: node === "???"
                      ? "rgba(255, 92, 92, 0.3)"
                      : "rgba(255, 255, 255, 0.08)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-text-dim font-mono">
          error.code: ROUTE_NOT_FOUND · trilo v0.1.0
        </p>
      </div>
    </div>
  );
}

function PathDisplay() {
  const [path] = useState(() => (typeof window === "undefined" ? "/..." : window.location.pathname));
  return <>{path}</>;
}
