"use client";

import { useEffect, useState, type FormEvent } from "react";
import { trackWaitlistSubmit, trackWaitlistSuccess, trackWaitlistError } from "@/lib/analytics";
import { buildWaitlistSource, primeWaitlistAttribution } from "@/lib/waitlist-source";

interface WaitlistFormProps {
  variant?: "default" | "large";
  location?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WAITLIST_API_URL = `${process.env.NEXT_PUBLIC_WAITLIST_BACKEND_ORIGIN ?? "http://localhost:5000"}/api/waitlist`;

export default function WaitlistForm({ variant = "default", location = "unknown" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "already_joined" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const isLarge = variant === "large";

  useEffect(() => {
    primeWaitlistAttribution();
  }, []);

  const submitWaitlist = async () => {
    if (status === "loading") {
      return;
    }

    const trimmedEmail = email.trim();

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address");
      trackWaitlistError(location, "Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setErrorMsg("");
    trackWaitlistSubmit(location, trimmedEmail);

    try {
      const res = await fetch(WAITLIST_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
          source: buildWaitlistSource(location),
        }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (res.status === 201) {
        setStatus("success");
        trackWaitlistSuccess(location);
        return;
      }

      if (res.status === 200) {
        setStatus("already_joined");
        trackWaitlistSuccess(location);
        return;
      }

      setStatus("error");
      if (res.status === 400) {
        setErrorMsg(data.message || "Please enter a valid email address");
      } else if (res.status === 429) {
        setErrorMsg("Too many requests. Please try again later.");
      } else if (res.status === 403) {
        setErrorMsg("Request origin is not allowed.");
      } else {
        setErrorMsg("Unable to complete the signup right now");
      }
      trackWaitlistError(location, data.message || `Request failed with status ${res.status}`);
    } catch {
      setStatus("error");
      setErrorMsg("Unable to complete the signup right now");
      trackWaitlistError(location, "Network error while joining waitlist");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitWaitlist();
  };

  if (status === "success" || status === "already_joined") {
    return (
      <div
        className={`w-full max-w-md mx-auto rounded-xl border border-accent/20 bg-accent/10 ${
          isLarge ? "px-5 py-4" : "px-4 py-3.5"
        }`}
        style={{ animation: "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both" }}
      >
        <div className="flex items-start gap-3 text-left">
          <div
            className={`rounded-full bg-accent/20 flex items-center justify-center shrink-0 ${
              isLarge ? "w-10 h-10" : "w-9 h-9"
            }`}
          >
            <svg className={`${isLarge ? "w-5 h-5" : "w-4 h-4"} text-accent`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <p className={`${isLarge ? "text-base" : "text-sm"} font-semibold text-text leading-tight`}>
              {status === "already_joined" ? "You're already on the list!" : "You're on the list!"}
            </p>
            <p className={`${isLarge ? "text-sm" : "text-xs"} text-text-secondary leading-relaxed mt-1`}>
              {status === "already_joined"
                ? "We already have your email and will notify you when Trilo launches."
                : "We'll notify you when Trilo launches."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2.5 w-full max-w-md">
      <div className={`flex ${isLarge ? "flex-col sm:flex-row" : "flex-col sm:flex-row"} gap-2.5`}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") {
              setStatus("idle");
              setErrorMsg("");
            }
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
          onClick={(e) => {
            e.preventDefault();
            void submitWaitlist();
          }}
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
