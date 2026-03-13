"use client";

import { useState, useEffect } from "react";
import { trackCookieConsent } from "@/lib/analytics";

const COOKIE_KEY = "trilo_cookie_consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't flash on load
    const timer = setTimeout(() => {
      const consent = localStorage.getItem(COOKIE_KEY);
      if (!consent) setShow(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setShow(false);
    trackCookieConsent("accepted");
    // Re-enable GA if it was paused
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setShow(false);
    trackCookieConsent("declined");
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-100 p-4 md:p-6 animate-[fade-in-up_0.5s_ease-out]"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-2xl mx-auto rounded-2xl bg-bg-card/95 backdrop-blur-xl border border-border/60 shadow-2xl shadow-black/40 p-5 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Icon + Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg" aria-hidden="true">
                🍪
              </span>
              <h3 className="font-display text-sm font-semibold text-text">
                We use cookies
              </h3>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              We use analytics cookies to understand how you interact with our
              site and improve your experience. No personal data is sold or
              shared with third parties.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={decline}
              className="h-9 px-4 rounded-lg text-xs font-medium text-text-secondary border border-border/60 hover:border-border hover:text-text transition-all duration-200 cursor-pointer"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="h-9 px-5 rounded-lg text-xs font-semibold bg-accent text-bg border border-accent hover:bg-accent-light transition-all duration-200 cursor-pointer"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
