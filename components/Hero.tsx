import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute inset-0 vignette" />

      {/* Gradient orbs */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full bg-accent/[0.06] blur-[180px]"
        style={{
          top: "-15%",
          left: "-10%",
          animation: "pulse-glow 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-warm/[0.04] blur-[150px]"
        style={{
          bottom: "-10%",
          right: "-10%",
          animation: "pulse-glow 10s ease-in-out infinite 3s",
        }}
      />

      {/* Orbiting dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
        <div
          className="w-1 h-1 rounded-full bg-accent/30"
          style={{ animation: "orbit 20s linear infinite" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] mb-8"
          style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-accent font-medium tracking-wide">
            Launching 2026
          </span>
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" }}
        >
          <span className="gradient-text">Never lose clarity</span> on
          <br className="hidden sm:block" />
          {" "}what you&apos;re building
        </h1>

        {/* Subtext */}
        <p
          className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed"
          style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
        >
          Trilo is a product development system that guides what to build,
          why, and in what order — then remembers every decision so you never start from scratch.
        </p>

        {/* Value pillars — scannable at a glance */}
        <div
          className="flex flex-wrap items-center justify-center gap-2.5 mb-10"
          style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both" }}
        >
          {[
            { icon: "◇", text: "Guided decisions" },
            { icon: "⇄", text: "Trade-off comparisons" },
            { icon: "↻", text: "Memory that persists" },
          ].map((pillar) => (
            <span
              key={pillar.text}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border bg-bg-card/60 text-sm text-text-secondary"
            >
              <span className="text-accent text-xs font-mono">{pillar.icon}</span>
              {pillar.text}
            </span>
          ))}
        </div>

        {/* Waitlist Form */}
        <div
          className="flex justify-center"
          style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.36s both" }}
        >
          <WaitlistForm location="hero" />
        </div>

        {/* Brand tagline */}
        <p
          className="mt-5 text-sm text-text-dim tracking-wide"
          style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.42s both" }}
        >
          Decide, compare, build — <span className="text-text-secondary font-medium">continuously</span>
        </p>

        {/* Social proof */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-10 text-sm text-text-dim"
          style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.48s both" }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
            <span>
              Trusted by <strong className="text-text-secondary font-medium">500+ builders</strong> on the waitlist
            </span>
          </div>
          <div className="w-px h-3.5 bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-warm/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            <span>
              Built for <strong className="text-text-secondary font-medium">founders, CTOs & solo devs</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-bg to-transparent" />
    </section>
  );
}
