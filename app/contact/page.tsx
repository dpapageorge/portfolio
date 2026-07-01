import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/section-label";
import { ContactForm } from "@/components/contact-form";
import { Marginalia } from "@/components/marginalia";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about Senior, Staff, Lead, or Design Manager roles.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact · say hello"
        title={
          <>
            Tell me about the
            <span className="text-accent"> complicated thing</span>.
          </>
        }
        intro="Hiring for a senior, staff, lead, or design-manager role? Curious about the work? Want to talk shop about design systems or grid theory? All good reasons."
      />

      <section className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <SectionLabel index="01">Drop a line</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>

          <aside className="md:col-span-5 md:pl-8">
            <Reveal delay={0.08}>
              <SectionLabel index="02">The direct routes</SectionLabel>
              <div className="mt-10 space-y-8">
                <div>
                  <p className="label-mono mb-2">Email</p>
                  <Link
                    href={`mailto:${site.email}`}
                    className="link-underline font-serif text-2xl"
                  >
                    {site.email}
                  </Link>
                </div>
                <div>
                  <p className="label-mono mb-2">Phone</p>
                  <Link
                    href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                    className="link-underline font-serif text-2xl"
                  >
                    {site.phone}
                  </Link>
                </div>
                <div>
                  <p className="label-mono mb-3">Elsewhere</p>
                  <ul className="space-y-2">
                    {site.social.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target={s.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="link-underline text-lg"
                        >
                          {s.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label-mono mb-2">Status</p>
                  <p className="flex items-center gap-2 text-lg">
                    <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                    Open to new roles · {site.location}
                  </p>
                  <Marginalia className="mt-4 block" rotate="-1.5deg">
                    typically reply within a day
                  </Marginalia>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
