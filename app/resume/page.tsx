import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/section-label";
import { Badge } from "@/components/ui/badge";
import { experience, skills, education, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Danny Papageorge, Product Designer with 15+ years across strategy, systems, research, and visual design.",
};

export default function ResumePage() {
  return (
    <>
      <PageHeader
        kicker="Resume · curriculum vitae"
        title={
          <>
            The structured version of
            <span className="text-accent"> fifteen years</span>.
          </>
        }
        intro="Product Designer open to Senior, Staff, Lead, and Design Manager roles. Below is the short form, for the PDF or a deeper walkthrough, just ask."
      />

      <section className="container py-16 md:py-20">
        <div className="mb-12 flex flex-wrap items-center gap-4">
          <Link
            href={`mailto:${site.email}?subject=Resume request`}
            className="bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent"
          >
            Request PDF resume
          </Link>
          <Link
            href="/contact"
            className="link-underline font-mono text-xs uppercase tracking-[0.14em] text-ink"
          >
            Get in touch →
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          {/* Experience */}
          <div className="md:col-span-8">
            <SectionLabel index="01">Experience</SectionLabel>
            <div className="mt-8 space-y-10">
              {experience.map((job, i) => (
                <Reveal key={job.company} delay={i * 0.05}>
                  <article className="border-l border-line pl-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-serif text-2xl tracking-tight">
                        {job.role}
                      </h3>
                      <span className="font-mono text-xs text-muted-foreground tabular-nums">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-accent">
                      {job.company} · {job.industry}
                    </p>
                    <p className="mt-3 leading-relaxed text-ink/80">
                      {job.blurb}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-ink/85">
                          <span className="text-accent" aria-hidden="true">
                            →
                          </span>
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sidebar: skills + education */}
          <aside className="md:col-span-4 md:pl-4">
            <Reveal>
              <SectionLabel index="02">Capabilities</SectionLabel>
              <div className="mt-8 space-y-7">
                {skills.map((s) => (
                  <div key={s.group}>
                    <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                      {s.group}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <Badge key={it}>{it}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-12">
                <SectionLabel index="03">Education</SectionLabel>
                <ul className="mt-8 space-y-5">
                  {education.map((e) => (
                    <li key={e.school}>
                      <p className="font-serif text-lg">{e.school}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {e.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
