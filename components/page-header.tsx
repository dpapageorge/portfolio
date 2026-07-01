import { Reveal } from "@/components/motion/reveal";

export function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="border-b border-line">
      <div className="container py-16 md:py-20">
        <Reveal>
          <p className="label-mono">
            <span className="text-accent">✶</span> {kicker}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-4xl font-serif text-headline text-balance">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80 text-pretty">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
