import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CropMark } from "@/components/marks";
import { asset } from "@/lib/base-path";

/**
 * Image-ready "plate" for project cards. Drop a real screenshot in via the
 * `image` prop and it fills the frame; until then it renders a designed
 * editorial cover (monogram + caption) so the empty state looks intentional,
 * never broken. Crop marks at the corners keep the field-guide/print feel.
 */
export function CropPlate({
  title,
  caption,
  index,
  image,
  glyph,
  large = false,
  live = false,
  className,
}: {
  title: string;
  caption: string;
  index: number;
  image?: string;
  glyph?: ReactNode;
  large?: boolean;
  live?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group/plate relative w-full overflow-hidden border border-line bg-muted/40",
        large ? "aspect-[16/7]" : "aspect-[3/2]",
        className
      )}
    >
      {/* live prototype badge */}
      {live && (
        <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 bg-ink px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-paper">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Live
        </span>
      )}

      {/* crop marks */}
      <CropMark className="absolute left-1.5 top-1.5 h-2.5 w-2.5" />
      <CropMark className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rotate-90" />
      <CropMark className="absolute bottom-1.5 left-1.5 h-2.5 w-2.5 -rotate-90" />
      <CropMark className="absolute bottom-1.5 right-1.5 h-2.5 w-2.5 rotate-180" />

      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(image)}
          alt={`${title}, case study preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover/plate:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 dot-grid">
          <div className="flex h-full items-center justify-center transition-transform duration-500 group-hover/plate:scale-105">
            {glyph ? (
              <div className={large ? "scale-[1.9]" : "scale-[1.7]"}>{glyph}</div>
            ) : (
              <span className="select-none font-serif text-[5rem] leading-none text-ink/10 md:text-[7rem]">
                {title.charAt(0)}
              </span>
            )}
          </div>
          <span className="absolute left-4 top-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
            Fig. {String(index + 1).padStart(2, "0")}
          </span>
          <span className="absolute bottom-3 left-4 right-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}
