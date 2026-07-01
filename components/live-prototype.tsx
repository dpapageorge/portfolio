import { ArrowUpRight } from "lucide-react";
import { Marginalia } from "@/components/marginalia";
import { CropMark } from "@/components/marks";

/**
 * Live, interactive prototype embed. Renders the real app inside a hand-built
 * browser-chrome frame so a recruiter can tap around without leaving the case
 * study. Used on Moody, which is a live web app on GitHub Pages.
 */
export function LivePrototype({ url }: { url: string }) {
  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <section className="border-b border-line bg-muted/40">
      <div className="container py-16 md:py-20">
        <div className="flex items-center gap-3 rule pt-4">
          <span className="font-mono text-xs text-accent">★</span>
          <span className="label-mono">Live prototype · go ahead, tap around</span>
        </div>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight text-balance md:text-4xl">
              This one’s real. Try it right here.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">
              Moody is running live, the same web app I designed, built, and
              deployed solo with Figma, Claude, GitHub, and Supabase. Poke around the check-in,
              the history view, the whole thing.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-5">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent"
            >
              Open full screen <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Desktop + mobile frames, side by side on large screens */}
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-start md:gap-8">
          {/* Desktop, browser chrome */}
          <div className="md:col-span-8">
            <div className="relative">
              <div className="overflow-hidden rounded-xl border border-ink shadow-2xl">
                {/* title bar */}
                <div className="flex items-center gap-3 border-b border-paper/15 bg-ink px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-accent" />
                    <span className="h-3 w-3 rounded-full bg-paper/30" />
                    <span className="h-3 w-3 rounded-full bg-paper/30" />
                  </div>
                  <div className="mx-auto flex max-w-md flex-1 items-center justify-center gap-2 rounded-md bg-paper/10 px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="truncate font-mono text-[0.7rem] text-paper/70">
                      {displayUrl}
                    </span>
                  </div>
                  <span className="hidden font-mono text-[0.7rem] uppercase tracking-[0.14em] text-paper/40 sm:inline">
                    Live
                  </span>
                </div>

                {/* viewport */}
                <div className="relative aspect-[16/10] w-full bg-paper">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                      Loading Moody…
                    </span>
                  </div>
                  <iframe
                    src={url}
                    title="Moody, live prototype, desktop"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full border-0 bg-paper"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              </div>

              {/* crop marks */}
              <CropMark className="absolute -left-3 -top-3 h-3 w-3" />
              <CropMark className="absolute -right-3 -top-3 h-3 w-3 rotate-90" />
              <CropMark className="absolute -bottom-3 -left-3 h-3 w-3 -rotate-90" />
              <CropMark className="absolute -bottom-3 -right-3 h-3 w-3 rotate-180" />
            </div>
            <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
              Fig. 03, Moody on desktop
            </p>
          </div>

          {/* Mobile, clean bezel, no notch */}
          <div className="flex flex-col items-center md:col-span-4">
            <div className="w-[300px] max-w-full">
              <div className="relative rounded-[2.25rem] border-[10px] border-ink bg-ink shadow-2xl">
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.6rem] bg-paper">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                      Loading…
                    </span>
                  </div>
                  <iframe
                    src={url}
                    title="Moody, live prototype, mobile"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full border-0 bg-paper"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 flex w-[300px] max-w-full items-center justify-between">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
                Fig. 04, on mobile
              </p>
              <Marginalia className="block" rotate="-2deg">
                the real app
              </Marginalia>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
