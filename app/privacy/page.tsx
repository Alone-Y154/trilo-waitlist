import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Trilo",
  description:
    "How Trilo collects, uses, and protects your data. Covers email collection, analytics cookies, and your rights under GDPR and CCPA.",
  robots: { index: false, follow: true },
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-xl font-bold text-text mb-4 tracking-tight">
        {title}
      </h2>
      <div className="space-y-3 text-text-secondary text-[15px] leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
    <Navbar />
    <main className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-0 vignette" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-dim hover:text-accent transition-colors duration-200 mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to home
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-text tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-text-dim text-sm">
            Last updated: March 17, 2026 · Effective: March 17, 2026
          </p>
        </div>

        {/* Table of contents */}
        <nav
          aria-label="Table of contents"
          className="mb-12 p-5 rounded-xl border border-border/60 bg-bg-card/60"
        >
          <p className="text-xs font-semibold text-text-dim uppercase tracking-wider mb-3">
            Contents
          </p>
          <ol className="space-y-1.5 text-sm text-text-secondary list-decimal list-inside">
            {[
              { id: "overview", label: "Overview" },
              { id: "what-we-collect", label: "What we collect" },
              { id: "how-we-collect", label: "How we collect it" },
              { id: "why-we-collect", label: "Why we collect it" },
              { id: "cookies", label: "Cookies & analytics" },
              { id: "third-parties", label: "Third parties" },
              { id: "data-retention", label: "Data retention" },
              { id: "your-rights", label: "Your rights" },
              { id: "security", label: "Security" },
              { id: "children", label: "Children's privacy" },
              { id: "changes", label: "Changes to this policy" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-12">
          <Section id="overview" title="1. Overview">
            <p>
              Trilo (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) operates
              the website at{" "}
              <strong className="text-text font-medium">trilo.dev</strong>.
              This Privacy Policy explains what data we collect from visitors to
              our waitlist page, how we use it, and what rights you have over
              your information.
            </p>
            <p>
              By submitting your email address or continuing to use our site,
              you agree to the practices described here. If you don&apos;t
              agree, please don&apos;t use the site or submit your email.
            </p>
          </Section>

          <Section id="what-we-collect" title="2. What we collect">
            <p>We collect a minimal amount of data:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                <strong className="text-text font-medium">Email address</strong>{" "}
                — when you join the waitlist
              </li>
              <li>
                <strong className="text-text font-medium">
                  Approximate location
                </strong>{" "}
                — country and city, derived from your IP address at the time of
                signup (we do not store your IP address)
              </li>
              <li>
                <strong className="text-text font-medium">
                  Analytics data
                </strong>{" "}
                — pages viewed, time on site, device type, browser, and
                referral source (collected via Google Analytics)
              </li>
              <li>
                <strong className="text-text font-medium">
                  Cookie preferences
                </strong>{" "}
                — whether you accepted or declined analytics cookies
              </li>
            </ul>
            <p>
              We do <strong className="text-text font-medium">not</strong>{" "}
              collect payment information, passwords, health data, biometric
              data, or any special category data.
            </p>
          </Section>

          <Section id="how-we-collect" title="3. How we collect it">
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                <strong className="text-text font-medium">Directly</strong> —
                you enter your email into the waitlist form
              </li>
              <li>
                <strong className="text-text font-medium">Automatically</strong>{" "}
                — Google Analytics collects anonymized usage data when you
                browse the site (only if you consent to cookies)
              </li>
              <li>
                <strong className="text-text font-medium">
                  Derived
                </strong>{" "}
                — we use your IP address at signup to determine approximate
                location, then discard the IP
              </li>
            </ul>
          </Section>

          <Section id="why-we-collect" title="4. Why we collect it">
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                <strong className="text-text font-medium">
                  Waitlist notifications
                </strong>{" "}
                — to email you when Trilo launches or when early access is
                available
              </li>
              <li>
                <strong className="text-text font-medium">
                  Product updates
                </strong>{" "}
                — occasional updates about Trilo&apos;s development (you can
                unsubscribe anytime)
              </li>
              <li>
                <strong className="text-text font-medium">Analytics</strong> —
                to understand how visitors use the site and improve the
                experience
              </li>
              <li>
                <strong className="text-text font-medium">
                  Geographic insight
                </strong>{" "}
                — to understand where our users are and plan localization
              </li>
            </ul>
            <p>
              We will <strong className="text-text font-medium">never</strong>{" "}
              sell your data or share your email with third parties for marketing
              purposes.
            </p>
          </Section>

          <Section id="cookies" title="5. Cookies & analytics">
            <p>
              We use{" "}
              <strong className="text-text font-medium">
                Google Analytics 4
              </strong>{" "}
              with{" "}
              <strong className="text-text font-medium">
                Consent Mode v2
              </strong>
              . Here&apos;s what that means:
            </p>

            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border border-border/60 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-bg-card/80">
                    <th className="text-left px-4 py-2.5 text-text font-semibold border-b border-border/60">
                      Cookie
                    </th>
                    <th className="text-left px-4 py-2.5 text-text font-semibold border-b border-border/60">
                      Purpose
                    </th>
                    <th className="text-left px-4 py-2.5 text-text font-semibold border-b border-border/60">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30">
                    <td className="px-4 py-2.5 font-mono text-xs text-accent">
                      _ga
                    </td>
                    <td className="px-4 py-2.5">
                      Distinguishes unique visitors
                    </td>
                    <td className="px-4 py-2.5">2 years</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="px-4 py-2.5 font-mono text-xs text-accent">
                      _ga_*
                    </td>
                    <td className="px-4 py-2.5">
                      Maintains session state
                    </td>
                    <td className="px-4 py-2.5">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-mono text-xs text-warm">
                      trilo_cookie_consent
                    </td>
                    <td className="px-4 py-2.5">
                      Stores your cookie preference
                    </td>
                    <td className="px-4 py-2.5">Persistent (localStorage)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3">
              <strong className="text-text font-medium">Before you consent</strong>,
              Google Analytics runs in cookieless mode — no identifying cookies
              are set. If you decline cookies, analytics data remains fully
              anonymized.
            </p>
            <p>
              You can change your cookie preference at any time by clearing your
              browser&apos;s local storage for trilo.dev, or by using your
              browser&apos;s cookie management settings.
            </p>
          </Section>

          <Section id="third-parties" title="6. Third parties">
            <p>
              We share data with the following service providers, solely for the
              purposes described above:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                <strong className="text-text font-medium">
                  Google Analytics
                </strong>{" "}
                (Google LLC) — anonymized usage analytics.{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light transition-colors duration-200 underline underline-offset-2"
                >
                  Google&apos;s Privacy Policy
                </a>
              </li>
              <li>
                <strong className="text-text font-medium">Vercel</strong> —
                website hosting. Your requests pass through Vercel&apos;s
                infrastructure.{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light transition-colors duration-200 underline underline-offset-2"
                >
                  Vercel&apos;s Privacy Policy
                </a>
              </li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal data to any third
              party.
            </p>
          </Section>

          <Section id="data-retention" title="7. Data retention">
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                <strong className="text-text font-medium">
                  Email addresses
                </strong>{" "}
                — retained until Trilo launches and you create an account, or
                until you request deletion, whichever comes first
              </li>
              <li>
                <strong className="text-text font-medium">
                  Analytics data
                </strong>{" "}
                — retained by Google Analytics for 14 months, then automatically
                deleted
              </li>
              <li>
                <strong className="text-text font-medium">
                  Location data
                </strong>{" "}
                — stored alongside your waitlist entry, deleted when your email
                is deleted
              </li>
            </ul>
          </Section>

          <Section id="your-rights" title="8. Your rights">
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                <strong className="text-text font-medium">Access</strong> —
                request a copy of the data we hold about you
              </li>
              <li>
                <strong className="text-text font-medium">Deletion</strong> —
                request we delete your email and associated data
              </li>
              <li>
                <strong className="text-text font-medium">Correction</strong> —
                update inaccurate data
              </li>
              <li>
                <strong className="text-text font-medium">Opt-out</strong> —
                unsubscribe from emails at any time via the link in every email
              </li>
              <li>
                <strong className="text-text font-medium">
                  Withdraw consent
                </strong>{" "}
                — disable analytics cookies at any time
              </li>
            </ul>
            <p>
              To exercise any of these rights, email us at{" "}
              <a
                href="mailto:privacy@trilo.dev"
                className="text-accent hover:text-accent-light transition-colors duration-200 underline underline-offset-2"
              >
                privacy@trilo.dev
              </a>
              . We&apos;ll respond within 30 days.
            </p>
            <p>
              <strong className="text-text font-medium">
                EU/EEA residents (GDPR)
              </strong>
              : Our legal basis for processing your email is consent (you
              submitted it voluntarily). For analytics, we rely on legitimate
              interest (improving the site), balanced against your right to
              decline cookies. You have the right to lodge a complaint with your
              local data protection authority.
            </p>
            <p>
              <strong className="text-text font-medium">
                California residents (CCPA)
              </strong>
              : You have the right to know what data we collect, request
              deletion, and opt out of the sale of personal data. We do not sell
              personal data.
            </p>
          </Section>

          <Section id="security" title="9. Security">
            <p>
              We take reasonable measures to protect your data, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>HTTPS encryption on all pages</li>
              <li>Hosting on Vercel&apos;s secure infrastructure</li>
              <li>
                Minimal data collection — we only collect what we need
              </li>
            </ul>
            <p>
              No system is 100% secure. If you believe your data has been
              compromised, contact us immediately at{" "}
              <a
                href="mailto:privacy@trilo.dev"
                className="text-accent hover:text-accent-light transition-colors duration-200 underline underline-offset-2"
              >
                privacy@trilo.dev
              </a>
              .
            </p>
          </Section>

          <Section id="children" title="10. Children's privacy">
            <p>
              Trilo is not directed at children under 13. We do not knowingly
              collect data from children. If you believe a child has provided us
              with personal data, please contact us and we will delete it
              promptly.
            </p>
          </Section>

          <Section id="changes" title="11. Changes to this policy">
            <p>
              We may update this policy as Trilo evolves. If we make material
              changes, we&apos;ll notify waitlist members by email at least 14
              days before the changes take effect. The &quot;Last updated&quot;
              date at the top reflects the most recent revision.
            </p>
          </Section>

          <Section id="contact" title="12. Contact">
            <p>
              If you have questions about this privacy policy or your data,
              reach out:
            </p>
            <div className="mt-3 p-4 rounded-xl border border-border/60 bg-bg-card/60">
              <p>
                <strong className="text-text font-medium">Email:</strong>{" "}
                <a
                  href="mailto:privacy@trilo.dev"
                  className="text-accent hover:text-accent-light transition-colors duration-200 underline underline-offset-2"
                >
                  privacy@trilo.dev
                </a>
              </p>
              <p className="mt-1">
                <strong className="text-text font-medium">Website:</strong>{" "}
                <a
                  href="https://trilo.dev"
                  className="text-accent hover:text-accent-light transition-colors duration-200 underline underline-offset-2"
                >
                  trilo.dev
                </a>
              </p>
            </div>
          </Section>

          {/* Legal disclaimer */}
          <div className="mt-16 p-5 rounded-xl border border-warm/20 bg-warm/[0.04]">
            <p className="text-xs text-text-dim leading-relaxed">
              <strong className="text-warm/80 font-semibold">Disclaimer:</strong>{" "}
              This privacy policy is provided for informational purposes and
              does not constitute legal advice. We recommend consulting a
              qualified attorney specializing in data privacy law for your
              specific needs.
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
