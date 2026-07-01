import { clients } from "@/lib/content";
import { CropMark } from "@/components/marks";

/**
 * Real-client credibility strip. Named brands do more work in 15 seconds than
 * any tagline. Set as small-caps serif on a hairline grid, not a logo soup.
 */
export function BrandStrip() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="container py-10">
        <div className="flex items-center gap-3">
          <CropMark className="h-3 w-3" />
          <p className="label-mono">Selected clients &amp; employers</p>
        </div>
        <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 md:gap-x-12">
          {clients.map((c) => (
            <li
              key={c}
              className="font-serif text-lg text-ink/70 transition-colors hover:text-accent md:text-xl"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
