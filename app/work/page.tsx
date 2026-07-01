import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { ContactCTA } from "@/components/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product design work across travel, fintech, energy, nonprofits, healthcare, and SaaS.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        kicker="Selected work · 2015-2026"
        title={
          <>
            Eight problems, one
            <span className="text-accent"> way of thinking</span>.
          </>
        }
        intro="A spread of work across travel, wellbeing, energy, nonprofit, consumer, fintech, and brand identity, each written up in full as a detailed case study."
      />

      <section className="container py-16 md:py-20">
        <div className="grid gap-px bg-line md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.06}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 max-w-prose font-mono text-xs leading-relaxed text-muted-foreground">
            ↳ Note: most of my strongest work lives under NDA. Happy to walk
            through the confidential details, and show the messy middle, in a
            conversation.
          </p>
        </Reveal>
      </section>

      <ContactCTA />
    </>
  );
}
