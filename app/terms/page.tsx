import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Trilo",
  description:
    "Terms governing the use of Trilo's waitlist and website. Plain-language terms covering acceptable use, data practices, and your rights.",
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

export default function TermsOfService() {
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
            Terms of Service
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
              { id: "acceptance", label: "Acceptance of terms" },
              { id: "service", label: "What Trilo is" },
              { id: "waitlist", label: "The waitlist" },
              { id: "acceptable-use", label: "Acceptable use" },
              { id: "intellectual-property", label: "Intellectual property" },
              { id: "disclaimers", label: "Disclaimers" },
              { id: "liability", label: "Limitation of liability" },
              { id: "termination", label: "Termination" },
              { id: "changes", label: "Changes to these terms" },
              { id: "governing-law", label: "Governing law" },
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
          <Section id="acceptance" title="1. Acceptance of terms">
            <p>
              By accessing or using the Trilo website at{" "}
              <strong className="text-text font-medium">trilo.dev</strong>,
              you agree to be bound by these Terms of Service. If you don&apos;t
              agree, please don&apos;t use the site.
            </p>
            <p>
              These terms apply to the waitlist page and marketing site only.
              Separate terms will govern the Trilo product when it launches.
            </p>
          </Section>

          <Section id="service" title="2. What Trilo is">
            <p>
              Trilo is a product development system currently in development.
              The website at trilo.dev serves as a waitlist and information page
              for people interested in early access. The product described on
              the site represents our planned features and direction — the final
              product may differ.
            </p>
          </Section>

          <Section id="waitlist" title="3. The waitlist">
            <p>
              When you join the waitlist, you provide your email address
              voluntarily. In return:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                We&apos;ll notify you when Trilo launches or early access
                becomes available
              </li>
              <li>
                We may send occasional product updates (you can unsubscribe
                anytime)
              </li>
              <li>
                Joining the waitlist does not guarantee access to the product,
                pricing, or features
              </li>
            </ul>
            <p>
              See our{" "}
              <Link
                href="/privacy"
                className="text-accent hover:text-accent-light transition-colors duration-200 underline underline-offset-2"
              >
                Privacy Policy
              </Link>{" "}
              for details on how we handle your data.
            </p>
          </Section>

          <Section id="acceptable-use" title="4. Acceptable use">
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>
                Submit false or misleading information (e.g., fake email
                addresses)
              </li>
              <li>
                Attempt to disrupt, overload, or interfere with the website
              </li>
              <li>
                Use automated scripts or bots to submit forms or scrape content
              </li>
              <li>
                Attempt to gain unauthorized access to our systems
              </li>
              <li>
                Use the site for any unlawful purpose
              </li>
            </ul>
          </Section>

          <Section id="intellectual-property" title="5. Intellectual property">
            <p>
              All content on trilo.dev — including text, design, logos, graphics,
              and code — is owned by Trilo or its creators. You may not copy,
              reproduce, distribute, or create derivative works without written
              permission.
            </p>
            <p>
              The Trilo name, logo, and &quot;Decide, compare, build —
              continuously&quot; tagline are trademarks of Trilo.
            </p>
          </Section>

          <Section id="disclaimers" title="6. Disclaimers">
            <p>
              The site and waitlist are provided{" "}
              <strong className="text-text font-medium">
                &quot;as is&quot;
              </strong>{" "}
              without warranties of any kind, either express or implied. We
              don&apos;t guarantee:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>The site will be available without interruption</li>
              <li>
                The product will launch on any specific timeline
              </li>
              <li>
                Features described on the site will be included in the final
                product
              </li>
              <li>
                Early access will be granted to all waitlist members
              </li>
            </ul>
          </Section>

          <Section id="liability" title="7. Limitation of liability">
            <p>
              To the maximum extent permitted by law, Trilo and its creators
              shall not be liable for any indirect, incidental, special, or
              consequential damages arising from your use of the website or
              waitlist. Our total liability is limited to the amount you paid us
              — which, for a free waitlist, is zero.
            </p>
          </Section>

          <Section id="termination" title="8. Termination">
            <p>
              You can leave the waitlist at any time by contacting us at{" "}
              <a
                href="mailto:privacy@trilo.dev"
                className="text-accent hover:text-accent-light transition-colors duration-200 underline underline-offset-2"
              >
                privacy@trilo.dev
              </a>{" "}
              to request removal of your data.
            </p>
            <p>
              We reserve the right to remove any waitlist entry or restrict
              access to the site at our discretion, particularly in cases of
              abuse or violation of these terms.
            </p>
          </Section>

          <Section id="changes" title="9. Changes to these terms">
            <p>
              We may update these terms as Trilo evolves. If we make material
              changes, we&apos;ll notify waitlist members by email at least 14
              days before the changes take effect. Continued use of the site
              after changes constitutes acceptance.
            </p>
          </Section>

          <Section id="governing-law" title="10. Governing law">
            <p>
              These terms are governed by and construed in accordance with
              applicable law. Any disputes will be resolved through good-faith
              negotiation first. If that fails, disputes will be resolved in the
              courts of the jurisdiction where Trilo is incorporated.
            </p>
          </Section>

          <Section id="contact" title="11. Contact">
            <p>
              Questions about these terms? Reach out:
            </p>
            <div className="mt-3 p-4 rounded-xl border border-border/60 bg-bg-card/60">
              <p>
                <strong className="text-text font-medium">Email:</strong>{" "}
                <a
                  href="mailto:hello@trilo.dev"
                  className="text-accent hover:text-accent-light transition-colors duration-200 underline underline-offset-2"
                >
                  hello@trilo.dev
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
              These terms are provided for informational purposes and do not
              constitute legal advice. We recommend consulting a qualified
              attorney for your specific needs.
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
