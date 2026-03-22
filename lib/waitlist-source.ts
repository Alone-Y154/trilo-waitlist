"use client";

const ATTRIBUTION_STORAGE_KEY = "trilo.waitlist.attribution";
const MAX_SOURCE_LENGTH = 100;
const MAX_SOURCE_PART_LENGTH = 40;

type AttributionOrigin = "utm" | "referrer" | "direct";

interface AttributionSnapshot {
  channel: string;
  origin: AttributionOrigin;
}

const CHANNEL_ALIASES: Record<string, string> = {
  fb: "facebook",
  facebook: "facebook",
  ig: "instagram",
  instagram: "instagram",
  li: "linkedin",
  linkedin: "linkedin",
  lnkd: "linkedin",
  meta: "facebook",
  x: "x",
  twitter: "x",
};

const REFERRER_CHANNELS = [
  { channel: "instagram", hosts: ["instagram.com", "l.instagram.com"] },
  { channel: "facebook", hosts: ["facebook.com", "m.facebook.com", "l.facebook.com", "lm.facebook.com"] },
  { channel: "linkedin", hosts: ["linkedin.com", "www.linkedin.com", "lnkd.in"] },
  { channel: "x", hosts: ["x.com", "twitter.com", "t.co"] },
  { channel: "youtube", hosts: ["youtube.com", "www.youtube.com", "youtu.be"] },
  { channel: "google", hosts: ["google.com", "www.google.com"] },
];

function sanitizeSourcePart(value: string) {
  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_+/g, "_");

  return normalized.slice(0, MAX_SOURCE_PART_LENGTH);
}

function normalizeChannel(rawValue: string) {
  const sanitized = sanitizeSourcePart(rawValue);
  return CHANNEL_ALIASES[sanitized] ?? sanitized;
}

function readStoredAttribution(): AttributionSnapshot | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as Partial<AttributionSnapshot>;
    if (typeof parsed.channel !== "string" || typeof parsed.origin !== "string") {
      return null;
    }

    return {
      channel: parsed.channel,
      origin: parsed.origin as AttributionOrigin,
    };
  } catch {
    return null;
  }
}

function writeStoredAttribution(snapshot: AttributionSnapshot) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(snapshot));
  } catch {
    // Ignore storage failures and keep attribution best-effort.
  }
}

function getUtmChannel() {
  if (typeof window === "undefined") {
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source");
  if (!utmSource) {
    return null;
  }

  const channel = normalizeChannel(utmSource);
  return channel || null;
}

function getExternalReferrerChannel() {
  if (typeof window === "undefined" || !document.referrer) {
    return null;
  }

  try {
    const referrerUrl = new URL(document.referrer);
    if (referrerUrl.origin === window.location.origin) {
      return null;
    }

    const host = referrerUrl.hostname.toLowerCase();
    for (const entry of REFERRER_CHANNELS) {
      if (entry.hosts.some((candidate) => host === candidate || host.endsWith(`.${candidate}`))) {
        return entry.channel;
      }
    }
  } catch {
    return null;
  }

  return null;
}

function resolveAttributionSnapshot() {
  const utmChannel = getUtmChannel();
  if (utmChannel) {
    const snapshot = { channel: utmChannel, origin: "utm" } satisfies AttributionSnapshot;
    writeStoredAttribution(snapshot);
    return snapshot;
  }

  const storedSnapshot = readStoredAttribution();
  if (storedSnapshot) {
    return storedSnapshot;
  }

  const referrerChannel = getExternalReferrerChannel();
  if (referrerChannel) {
    const snapshot = { channel: referrerChannel, origin: "referrer" } satisfies AttributionSnapshot;
    writeStoredAttribution(snapshot);
    return snapshot;
  }

  return { channel: "direct", origin: "direct" } satisfies AttributionSnapshot;
}

export function primeWaitlistAttribution() {
  resolveAttributionSnapshot();
}

export function buildWaitlistSource(formLocation: string) {
  const placement = sanitizeSourcePart(formLocation) || "unknown";
  const attribution = resolveAttributionSnapshot();
  const source = `${attribution.channel}:${placement}`;

  return source.slice(0, MAX_SOURCE_LENGTH);
}
