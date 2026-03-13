/* ─── GA4 Analytics Utility ─────────────────────────────────── */

type EventParams = Record<string, string | number | boolean>;

/**
 * Fire a GA4 custom event.
 * Safe to call before gtag loads — it's a no-op when unavailable.
 */
export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

/* ─── Pre-defined event helpers ─── */

/** Navbar / CTA link clicks */
export function trackClick(component: string, linkText: string, linkUrl: string) {
  trackEvent("click_cta", {
    component,
    link_text: linkText,
    link_url: linkUrl,
  });
}

/** Waitlist form events */
export function trackWaitlistSubmit(location: string, email: string) {
  trackEvent("waitlist_submit", {
    form_location: location,
    email_domain: email.split("@")[1] || "unknown",
  });
}

export function trackWaitlistSuccess(location: string) {
  trackEvent("waitlist_success", {
    form_location: location,
  });
}

export function trackWaitlistError(location: string, error: string) {
  trackEvent("waitlist_validation_error", {
    form_location: location,
    error_message: error,
  });
}

/** Social link clicks */
export function trackSocialClick(platform: string, url: string) {
  trackEvent("click_social_link", {
    component: "footer",
    platform,
    link_url: url,
  });
}

/** Section viewed (scroll-triggered) */
export function trackSectionViewed(sectionName: string) {
  trackEvent("section_viewed", {
    section: sectionName,
  });
}

/** Cookie consent */
export function trackCookieConsent(response: "accepted" | "declined") {
  trackEvent("cookie_consent_response", {
    response,
  });
}

/** 404 page */
export function track404(path: string) {
  trackEvent("page_not_found", {
    page_path: path,
  });
}
