import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactCTA } from "@/components/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/section-label";
import { Marginalia } from "@/components/marginalia";
import { RouteLine, CropMark } from "@/components/marks";
import { asset } from "@/lib/base-path";
import { fieldNotes, skills, aiWorkflow } from "@/lib/content";

const illustrations = [
  {
    src: "/illustrations/mondo-robot.gif",
    title: "Mondo Robot",
    tag: "Type & systems",
    note: "Hand-built isometric lettering and architecture, animated, structure as illustration.",
    alt: "Animated isometric typographic illustration spelling Mondo Robot",
    personal: false,
  },
  {
    src: "/illustrations/mcdevitt-badge.png",
    title: "McDevitt Taco Supply",
    tag: "Brand identity",
    note: "Badge identity for a Boulder taco brand, sister to Heady Coffee Co.",
    alt: "McDevitt Taco Supply circular badge logo",
    personal: false,
  },
  {
    src: "/illustrations/saturn-nice.gif",
    title: "Saturn",
    tag: "Motion",
    note: "An animated loop, Saturn and its rings in clean black and white.",
    alt: "Animated line illustration of the planet Saturn and its rings",
    personal: false,
  },
  {
    src: "/illustrations/faces.png",
    title: "Faces",
    tag: "Personal work",
    note: "Ink and halftone, drawn purely to keep the pen moving.",
    alt: "Bold red and black character illustration of stacked faces",
    personal: true,
  },
  {
    src: "/illustrations/snail-mail.png",
    title: "Snail Mail",
    tag: "Personal work",
    note: "A halftone snail riding a postage stamp, a small visual pun.",
    alt: "Halftone illustration of a snail on a postage stamp",
    personal: true,
  },
  {
    src: "/illustrations/Snowman.png",
    title: "Snowman",
    tag: "Personal work",
    note: "A pop-art snowman gone gently occult, drawn for the fun of it.",
    alt: "Colorful pop illustration of a hooded snowman with a flaming skull staff",
    personal: true,
  },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Danny Papageorge, product designer with a fine-arts background, 15+ years across travel, fintech, energy, nonprofits, healthcare, and SaaS.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About · the long version"
        title={
          <>
            I came to product design through
            <span className="text-accent"> drawing</span>, and it never left.
          </>
        }
      />

      <section className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Main column */}
          <div className="md:col-span-7">
            <Reveal>
              <div className="max-w-prose space-y-6 text-lg leading-relaxed text-ink/85">
                <p className="drop-cap">
                  I came up through graphic design and illustration, a BA from
                  Flagler College and the kind of kid who filled notebooks with
                  diagrams of things that didn’t exist yet. Somewhere along the
                  way I realized that products are just systems you can draw, and
                  that the same instinct for composition, hierarchy, and line
                  could untangle a booking flow or a financial dashboard.
                </p>
                <p>
                  Fifteen-plus years later, I’ve designed across travel (Switchfly),
                  energy (Uplight), financial analytics (Pellucid), and a stretch
                  of agency work for clients from the Michael J. Fox Foundation to
                  Specialized and Comcast. The throughline isn’t an industry, it’s
                  a temperament. I’m drawn to ambiguous, high-stakes problems where
                  the first act of design is figuring out the real question.
                </p>
                <p>
                  I think in systems first. Before I draw a screen I want the
                  model: the objects, the states, the decisions, the
                  consequences. Get that right and the interface mostly designs
                  itself. Get it wrong and no amount of polish will save you.
                </p>
                <p>
                  I’m equally happy leading and making. At Switchfly I managed a
                  team of designers while still delivering wireframes, prototypes,
                  research, and high-fidelity work myself, and I still love
                  sitting alone with a hard layout and a pot of coffee. I’m looking
                  for a role that uses both halves: the strategist and the
                  craftsperson.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12">
                <SectionLabel index=", ">What I bring to a team</SectionLabel>
                <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                  {skills.map((s) => (
                    <div key={s.group}>
                      <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                        {s.group}
                      </h3>
                      <ul className="mt-3 space-y-1.5 text-ink/85">
                        {s.items.map((it) => (
                          <li key={it} className="leading-snug">
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-12 border border-line p-7">
                <SectionLabel index="AI">Working with AI</SectionLabel>
                <p className="mt-6 max-w-prose leading-relaxed text-ink/85">
                  {aiWorkflow.intro}
                </p>
                <ul className="mt-6 space-y-3">
                  {aiWorkflow.tools.map((t) => (
                    <li key={t.name} className="flex gap-3">
                      <span className="font-mono text-xs text-accent pt-1">↳</span>
                      <span className="text-ink/85">
                        <span className="font-semibold">{t.name}</span>, {t.note}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-line pt-5 font-mono text-sm leading-relaxed text-marine">
                  {aiWorkflow.proof}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Field-guide sidebar */}
          <aside className="md:col-span-5 md:pl-8">
            <Reveal delay={0.08}>
              <div className="sticky top-24 border border-line p-7 dot-grid">
                <div className="bg-paper">
                  <p className="label-mono">Field notes</p>
                  <p className="mt-1 font-serif text-xl italic text-muted-foreground">
                    A few true things
                  </p>
                  <RouteLine className="mt-4 h-4 w-full" />
                  <ul className="mt-5 space-y-4">
                    {fieldNotes.map((note, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className="font-mono text-xs text-accent pt-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-ink/85">{note}</span>
                      </li>
                    ))}
                  </ul>
                  <Marginalia className="mt-6 block" rotate="-1deg">
                    Banjo says hi
                  </Marginalia>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Drawn by hand */}
      <section className="border-t border-line bg-muted/30">
        <div className="container py-16 md:py-20">
          <SectionLabel index="✎">Drawn by hand</SectionLabel>
          <p className="mt-6 max-w-prose leading-relaxed text-ink/85">
            Before the product work, the drawing. The same instinct for
            composition, type, and structure that I bring to an interface, with
            the occasional personal piece to keep the hand loose.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {illustrations.map((art, i) => (
              <Reveal key={art.title} delay={(i % 3) * 0.06}>
                <figure>
                  <div className="relative overflow-hidden border border-line bg-paper">
                    <CropMark className="absolute left-1.5 top-1.5 z-10 h-2.5 w-2.5" />
                    <CropMark className="absolute right-1.5 top-1.5 z-10 h-2.5 w-2.5 rotate-90" />
                    <CropMark className="absolute bottom-1.5 left-1.5 z-10 h-2.5 w-2.5 -rotate-90" />
                    <CropMark className="absolute bottom-1.5 right-1.5 z-10 h-2.5 w-2.5 rotate-180" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset(art.src)} alt={art.alt} loading="lazy" className="w-full" />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-3">
                    <span className="font-serif text-lg">{art.title}</span>
                    <span
                      className={
                        art.personal
                          ? "font-mono text-[0.65rem] uppercase tracking-[0.14em] text-marine"
                          : "font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent"
                      }
                    >
                      {art.tag}
                    </span>
                  </figcaption>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {art.note}
                  </p>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-prose font-mono text-xs leading-relaxed text-muted-foreground">
            ↳ The hand behind the systems. Logos and identity available as
            commissions, the rest is for the love of it.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
