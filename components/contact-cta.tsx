import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { HandUnderline } from "@/components/marks";
import { site } from "@/lib/content";

export function ContactCTA() {
  return (
    <section className="container py-24">
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <p className="label-mono justify-center">Currently open to new roles</p>
        <h2 className="mt-6 font-serif text-headline text-balance">
          Let’s make something
          <span className="relative ml-3 inline-block text-accent">
            clear
            <HandUnderline className="absolute -bottom-2 left-0 h-3 w-full" />
          </span>
          .
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
          Senior, Staff, Lead, or Design Manager, if you’re untangling
          something complicated and want a designer who thinks in systems, I’d
          love to hear about it.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={`mailto:${site.email}`}
            className="bg-ink px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent"
          >
            {site.email}
          </Link>
          <Link
            href="/contact"
            className="link-underline font-mono text-xs uppercase tracking-[0.14em] text-ink"
          >
            Other ways to reach me →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
