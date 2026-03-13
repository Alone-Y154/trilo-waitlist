import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" }}
        >
          From idea to{" "}
          <span className="gradient-text">architecture</span>
          <br />
          in minutes
        </h1>

        {/* Subtext */}
        <p
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
        >
          Describe what you want to build. Get a complete engineering blueprint — then
          send it straight to Cursor, Replit, or Lovable via MCP to start building.
        </p>

        {/* Waitlist Form */}
        <div
          className="flex justify-center"
          style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}
        >
          <WaitlistForm />
        </div>

        {/* Social proof */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-10 text-sm text-text-dim"
          style={{ animation: "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both" }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
            <span>
              <strong className="text-text-secondary font-medium">500+</strong> builders on the waitlist
            </span>
          </div>
          <div className="w-px h-3.5 bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-warm/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            <span>
              For <strong className="text-text-secondary font-medium">founders & engineers</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
