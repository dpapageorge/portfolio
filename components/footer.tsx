import Link from "next/link";
import { site } from "@/lib/content";
import { Compass } from "@/components/marks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line mt-24">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-serif text-2xl leading-snug max-w-md text-balance">
              Looking for a designer who can run the strategy room and the
              kerning argument?
            </p>
            <Link
              href="/contact"
              className="link-underline mt-5 inline-block font-mono text-sm uppercase tracking-[0.14em] text-accent"
            >
              Start a conversation →
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="label-mono mb-4">Pages</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/work" className="link-underline">Work</Link></li>
              <li><Link href="/about" className="link-underline">About</Link></li>
              <li><Link href="/resume" className="link-underline">Resume</Link></li>
              <li><Link href="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label-mono mb-4">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="link-underline"
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Compass className="h-3.5 w-3.5" />
            <span className="font-mono text-xs">
              © {year} {site.name}
            </span>
          </div>
          <p className="font-mono text-[0.7rem] text-muted-foreground">
            Built with Next.js, Tailwind &amp; a paper notebook · Set in Newsreader &amp; Inter
          </p>
        </div>
      </div>
    </footer>
  );
}
