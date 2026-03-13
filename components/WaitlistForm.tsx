"use client";

import { useState, type FormEvent } from "react";
import { trackWaitlistSubmit, trackWaitlistSuccess, trackWaitlistError } from "@/lib/analytics";

interface WaitlistFormProps {
  variant?: "default" | "large";
  location?: string;
}

export default function WaitlistForm({ variant = "default", location = "unknown" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address");
      trackWaitlistError(location, "Please enter a valid email address");
      return;
    }

    setStatus("loading");
    trackWaitlistSubmit(location, email);

    // TODO: Replace with your actual API endpoint (e.g., Resend, ConvertKit, Supabase)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    trackWaitlistSuccess(location);
  };

  if (status === "success") {
    return (
      <div
        className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-accent/10 border border-accent/20"
        style={{ animation: "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both" }}
      >
        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <span className="font-semibold text-text text-sm block">You&apos;re on the list!</span>
          <span className="text-xs text-text-secondary">We&apos;ll notify you when Trilo launches.</span>
        </div>
      </div>
    );
  }

  const isLarge = variant === "large";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 w-full max-w-md">
      <div className={`flex ${isLarge ? "flex-col sm:flex-row" : "flex-col sm:flex-row"} gap-2.5`}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@company.com"
          className={`flex-1 ${
            isLarge ? "h-14 text-base" : "h-12 text-sm"
          } px-4 rounded-xl bg-bg-elevated border border-border text-text placeholder:text-text-dim focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-200`}
          disabled={status === "loading"}
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`${
            isLarge ? "h-14 px-8 text-base" : "h-12 px-6 text-sm"
          } font-semibold rounded-xl bg-accent text-bg cursor-pointer hover:bg-accent-light active:scale-[0.97] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap`}
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="opacity-20"
                />
                <path
                  d="M12 2a10 10 0 019.95 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              Joining...
            </span>
          ) : (
            "Join Waitlist"
          )}
        </button>
      </div>
      {status === "error" && (
        <p
          className="text-danger text-sm pl-1"
          style={{ animation: "fade-in 0.2s ease both" }}
          role="alert"
        >
          {errorMsg}
        </p>
      )}
    </form>
  );
}
