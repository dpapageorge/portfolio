import Link from "next/link";
import { Compass } from "@/components/marks";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Compass className="h-8 w-8" />
      <p className="mt-8 label-mono">Error 404 · off the map</p>
      <h1 className="mt-6 font-serif text-headline">
        This page is still a blank notebook.
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/80">
        The link you followed doesn’t lead anywhere yet. Let’s get you back to
        solid ground.
      </p>
      <Link
        href="/"
        className="mt-9 bg-ink px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent"
      >
        Back home
      </Link>
    </section>
  );
}
