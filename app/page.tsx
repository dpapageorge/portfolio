import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/section-label";
import { ProjectCard } from "@/components/project-card";
import { ContactCTA } from "@/components/contact-cta";
import { BrandStrip } from "@/components/brand-strip";
import { Specimen } from "@/components/specimen";
import { HandUnderline, RouteLine, Compass } from "@/components/marks";
import { projects } from "@/lib/projects";
import { philosophy, experience, positioning, proofPoints } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 dot-grid opacity-40" aria-hidden="true" />
        <div className="container relative pb-16 pt-16 md:pb-24 md:pt-24">
          <Reveal>
            <p className="label-mono">
              <span className="text-accent">✶</span> {positioning.kicker}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-8">
            {/* Left, headline + intro */}
            <div className="md:col-span-7">
              <Reveal delay={0.05}>
                <h1 className="font-serif text-display text-balance">
                  I{" "}
                  <span className="relative inline-block text-accent">
                    draw
                    <HandUnderline className="absolute -bottom-3 left-0 h-4 w-full" />
                  </span>{" "}
                  the system before I design the screen.
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink/85 text-pretty">
                  {positioning.intro}
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <Link
                    href="/work"
                    className="bg-ink px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent"
                  >
                    See the work
                  </Link>
                  <Link
                    href="/contact"
                    className="link-underline font-mono text-xs uppercase tracking-[0.14em] text-ink"
                  >
                    Hire me →
                  </Link>
                  <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                    Open to Senior / Staff / Lead / Manager
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Right, bespoke specimen illustration */}
            <Reveal delay={0.2} className="md:col-span-5">
              <div className="relative mx-auto max-w-sm md:ml-auto">
                <Specimen className="w-full" />
              </div>
            </Reveal>
          </div>

          <div className="mt-14 flex items-center gap-3 text-muted-foreground">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            <span className="font-mono text-xs uppercase tracking-[0.14em]">
              The proof is right below
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────── Proof by numbers ─────────────────────── */}
      <section className="border-b border-line bg-ink text-paper">
        <div className="container grid grid-cols-2 gap-px md:grid-cols-4">
          {proofPoints.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.06} className="py-10">
              <div className="px-1">
                <p className="font-serif text-4xl tracking-tight text-accent md:text-5xl">
                  {p.value}
                </p>
                <p className="mt-3 font-mono text-[0.7rem] uppercase leading-relaxed tracking-[0.12em] text-paper/70">
                  {p.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────────────── Brand strip (credibility) ─────────────────── */}
      <BrandStrip />

      {/* ──────────────────────── Selected work ──────────────────────── */}
      <section className="container py-20 md:py-28">
        <Reveal>
          <div className="flex items-end justify-between">
            <SectionLabel index="01" className="flex-1">
              Selected work
            </SectionLabel>
            <Link
              href="/work"
              className="link-underline ml-6 shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-ink"
            >
              All projects →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-3xl font-serif text-headline text-balance">
            A platform I led, an app I built, and the range around them.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">
            Switchfly is the deep one: five years, three roles, a team and a
            system I built. Moody is the one I designed, built,{" "}
            <em>and</em> deployed solo as a live web app. The rest span energy,
            fintech, nonprofit, and consumer, from the Michael J. Fox Foundation
            to Specialized.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.06}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────────────── Operating beliefs ─────────────────── */}
      <section className="border-y border-line bg-muted/40">
        <div className="container py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <SectionLabel index="02">How I actually work</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-8 font-serif text-headline text-balance">
                  Four opinions I’ll bring to your team.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-sm leading-relaxed text-ink/75">
                  Not a tasteful list of values, the actual stances I’ll argue
                  for in your roadmap meeting.
                </p>
                <div className="mt-8 flex items-center gap-3 text-muted-foreground">
                  <Compass className="h-5 w-5" />
                  <RouteLine className="h-4 w-24" />
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-8 md:pl-8">
              <ol className="divide-y divide-line border-t border-line">
                {philosophy.map((p, i) => (
                  <Reveal as="li" key={p.title} delay={i * 0.06} className="py-7">
                    <div className="flex gap-6">
                      <span className="font-mono text-sm text-accent tabular-nums pt-1.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl tracking-tight text-balance">
                          {p.title}
                        </h3>
                        <p className="mt-2 max-w-prose leading-relaxed text-ink/80">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── Experience summary ──────────────────── */}
      <section className="border-b border-line">
        <div className="container py-20 md:py-28">
          <Reveal>
            <SectionLabel index="03">Fifteen years, abbreviated</SectionLabel>
          </Reveal>

          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={(i % 2) * 0.06}>
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                  <h3 className="font-serif text-2xl">{job.company}</h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums shrink-0">
                    {job.period}
                  </span>
                </div>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">
                  {job.role} · {job.industry}
                </p>
                <p className="mt-3 leading-relaxed text-ink/80">{job.blurb}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/resume"
              className="link-underline mt-12 inline-block font-mono text-xs uppercase tracking-[0.14em] text-ink"
            >
              Full resume →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ──────────────────────── Contact CTA ──────────────────────── */}
      <ContactCTA />
    </>
  );
}
