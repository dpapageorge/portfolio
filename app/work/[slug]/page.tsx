import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, getProject } from "@/lib/projects";
import { asset } from "@/lib/base-path";
import { Reveal } from "@/components/motion/reveal";
import { ContactCTA } from "@/components/contact-cta";
import { Badge } from "@/components/ui/badge";
import { LivePrototype } from "@/components/live-prototype";
import { Compass, RouteLine, CropMark } from "@/components/marks";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Case study" };
  return {
    title: `${project.title}, ${project.tagline}`,
    description: project.summary,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      {/* ───────────── Case study hero ───────────── */}
      <section className="border-b border-line">
        <div className="container py-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All work
          </Link>
        </div>
        <div className="container pb-16">
          <div className="md:max-w-4xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                {project.flag && <Badge variant="accent">{project.flag}</Badge>}
                <span className="label-mono">{project.industry}</span>
                <span className="text-line">·</span>
                <span className="label-mono">{project.year}</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-serif text-display text-balance">
                {project.title}
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-3 font-serif text-2xl italic text-muted-foreground">
                {project.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink/85 text-pretty">
                {project.summary}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.disciplines.map((d) => (
                  <Badge key={d}>{d}</Badge>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {project.status === "full" ? (
        <FullCaseStudy project={project} />
      ) : (
        <TemplateCaseStudy project={project} />
      )}

      {/* ───────────── Next project ───────────── */}
      <section className="border-t border-line bg-muted/40">
        <div className="container py-16">
          <p className="label-mono">Next</p>
          <Link
            href={`/work/${next.slug}`}
            className="group mt-4 flex items-end justify-between gap-6"
          >
            <div>
              <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
                {next.title}
              </h2>
              <p className="mt-1 font-serif text-lg italic text-muted-foreground">
                {next.tagline}
              </p>
            </div>
            <ArrowRight className="h-7 w-7 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent" />
          </Link>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

/* ───────────────────────── Full case study ───────────────────────── */
function FullCaseStudy({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) {
  return (
    <>
      {/* Top figure, Fig. 01 */}
      {project.gallery && project.gallery[0] && (
        <section className="border-b border-line">
          <div className="container py-12 md:py-16">
            <figure>
              <div className="relative overflow-hidden border border-line bg-paper">
                <CropMark className="absolute left-1.5 top-1.5 z-10 h-2.5 w-2.5" />
                <CropMark className="absolute right-1.5 top-1.5 z-10 h-2.5 w-2.5 rotate-90" />
                <CropMark className="absolute bottom-1.5 left-1.5 z-10 h-2.5 w-2.5 -rotate-90" />
                <CropMark className="absolute bottom-1.5 right-1.5 z-10 h-2.5 w-2.5 rotate-180" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(project.gallery[0].src)}
                  alt={project.gallery[0].caption}
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
                Fig. 01, {project.gallery[0].caption}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* Metrics band */}
      {project.metrics && (
        <section className="border-b border-line bg-ink text-paper">
          <div className="container grid grid-cols-2 gap-px md:grid-cols-4">
            {project.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.06} className="py-10">
                <div className="px-2">
                  <p className="font-serif text-4xl tracking-tight text-accent md:text-5xl">
                    {m.value}
                  </p>
                  <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-paper/70">
                    {m.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Live, interactive prototype (e.g. Moody) */}
      {project.liveUrl && <LivePrototype url={project.liveUrl} />}

      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Sticky facts sidebar */}
          <aside className="md:col-span-4 md:order-last">
            <div className="sticky top-24">
              <Reveal>
                <div className="border border-line p-7">
                  <p className="label-mono">At a glance</p>
                  <RouteLine className="mt-4 h-4 w-full" />
                  <dl className="mt-5 space-y-4">
                    {project.facts?.map((f) => (
                      <div key={f.label}>
                        <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent">
                          {f.label}
                        </dt>
                        <dd className="mt-1 leading-snug text-ink/85">
                          {f.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </aside>

          {/* Sections */}
          <div className="md:col-span-8 md:order-first">
            <div className="space-y-16">
              {project.sections?.map((section, i) => (
                <Reveal key={section.kicker} as="section" delay={0.02}>
                  <div className="flex items-center gap-3 rule pt-4">
                    <span className="font-mono text-xs text-accent tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="label-mono">{section.kicker}</span>
                  </div>
                  <h2 className="mt-5 font-serif text-3xl tracking-tight md:text-4xl text-balance">
                    {section.title}
                  </h2>
                  <div className="mt-5 max-w-prose space-y-5 text-lg leading-relaxed text-ink/85">
                    {section.body.map((p, j) => (
                      <p key={j} className="text-pretty">
                        {p}
                      </p>
                    ))}
                  </div>

                  {section.notes && (
                    <ul className="mt-7 space-y-2.5 border-l-2 border-accent/30 pl-5">
                      {section.notes.map((note) => (
                        <li
                          key={note}
                          className="flex gap-3 font-mono text-sm leading-relaxed text-ink/80"
                        >
                          <span className="text-accent" aria-hidden="true">
                            ↳
                          </span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.pullQuote && (
                    <figure className="mt-9 border-y border-line py-8">
                      <blockquote className="font-serif text-2xl leading-snug text-balance md:text-3xl">
                        “{section.pullQuote.quote}”
                      </blockquote>
                      {section.pullQuote.attribution && (
                        <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        — {section.pullQuote.attribution}
                      </figcaption>
                      )}
                    </figure>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {project.gallery && project.gallery.length > 1 && (
        <section className="border-t border-line bg-muted/30">
          <div className="container py-16 md:py-20">
            <div className="flex items-center gap-3 rule pt-4">
              <span className="font-mono text-xs text-accent">❏</span>
              <span className="label-mono">Figures · from the work</span>
            </div>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {project.gallery.slice(1).map((g, i) => (
                <Reveal
                  key={g.src}
                  delay={(i % 2) * 0.06}
                  className={g.fullWidth ? "sm:col-span-2" : undefined}
                >
                  <figure>
                    <div className="relative overflow-hidden border border-line bg-paper">
                      <CropMark className="absolute left-1.5 top-1.5 z-10 h-2.5 w-2.5" />
                      <CropMark className="absolute right-1.5 top-1.5 z-10 h-2.5 w-2.5 rotate-90" />
                      <CropMark className="absolute bottom-1.5 left-1.5 z-10 h-2.5 w-2.5 -rotate-90" />
                      <CropMark className="absolute bottom-1.5 right-1.5 z-10 h-2.5 w-2.5 rotate-180" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset(g.src)}
                        alt={g.caption}
                        loading="lazy"
                        className="w-full"
                      />
                    </div>
                    <figcaption className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
                      Fig. {String(i + 2).padStart(2, "0")}, {g.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Interactions & motion (embedded videos) */}
      {project.videos && project.videos.length > 0 && (
        <section className="border-t border-line">
          <div className="container py-16 md:py-20">
            <div className="flex items-center gap-3 rule pt-4">
              <span className="font-mono text-xs text-accent">▶</span>
              <span className="label-mono">Interactions &amp; motion</span>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
              A selection of the subtle interactions and animations I designed
              for the site, documented for engineering and built into production.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {project.videos.map((v, i) => (
                <Reveal key={v.src} delay={(i % 3) * 0.06}>
                  <figure>
                    <div className="relative aspect-video overflow-hidden border border-line bg-ink">
                      <iframe
                        src={v.src}
                        title={v.caption}
                        loading="lazy"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full border-0"
                      />
                    </div>
                    <figcaption className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
                      {v.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ─────────────── Template / teaser for in-progress studies ─────────────── */
const TEMPLATE_OUTLINE = [
  { kicker: "Business context", title: "The stakes and the setup" },
  { kicker: "Problem definition", title: "The real question, named" },
  { kicker: "Constraints", title: "What we designed around" },
  { kicker: "Process", title: "From ambiguity to a plan" },
  { kicker: "Collaboration", title: "Who I worked with, and how" },
  { kicker: "Outcomes", title: "What changed, measured" },
  { kicker: "Lessons learned", title: "What I’d carry forward" },
];

function TemplateCaseStudy({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) {
  return (
    <div className="container py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-12">
        <aside className="md:col-span-4 md:order-last">
          <div className="sticky top-24 border border-line p-7">
            <p className="label-mono">At a glance</p>
            <RouteLine className="mt-4 h-4 w-full" />
            <dl className="mt-5 space-y-4">
              {project.facts?.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent">
                    {f.label}
                  </dt>
                  <dd className="mt-1 leading-snug text-ink/85">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>

        <div className="md:col-span-8 md:order-first">
          <Reveal>
            <div className="border border-dashed border-line bg-muted/30 p-8">
              <div className="flex items-center gap-3">
                <Compass className="h-5 w-5" />
                <p className="label-mono">Write-up in progress</p>
              </div>
              <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink/85 text-pretty">
                {project.teaser}
              </p>
              <p className="mt-5 max-w-prose leading-relaxed text-ink/70">
                The full case study follows the same structure as my flagship,                 context, constraints, process, and outcomes. Want the detail
                now?{" "}
                <Link href="/contact" className="link-underline text-accent">
                  Ask me to walk you through it
                </Link>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-12 label-mono">The shape it will take</p>
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {TEMPLATE_OUTLINE.map((item, i) => (
                <li key={item.kicker} className="flex items-baseline gap-5 py-5">
                  <span className="font-mono text-xs text-accent tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {item.kicker}
                    </p>
                    <p className="mt-1 font-serif text-xl">{item.title}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
