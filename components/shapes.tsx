import { cn } from "@/lib/utils";

export type Shape = "circle" | "triangle" | "square";
export type Tone = "red" | "blue" | "green" | "yellow";

const fillFor: Record<Tone, string> = {
  red: "fill-brand-red",
  blue: "fill-brand-blue",
  green: "fill-brand-green",
  yellow: "fill-brand-yellow",
};

/** A single filled primary shape, circle, triangle, or square. */
export function ShapeGlyph({
  shape,
  tone = "red",
  className,
}: {
  shape: Shape;
  tone?: Tone;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={cn("h-3 w-3 shrink-0", fillFor[tone], className)}
      aria-hidden="true"
    >
      {shape === "circle" && <circle cx="8" cy="8" r="6" />}
      {shape === "square" && <rect x="2.5" y="2.5" width="11" height="11" />}
      {shape === "triangle" && <path d="M8 2 L14.5 14 L1.5 14 Z" />}
    </svg>
  );
}

/** The brand signature, circle / triangle / square in three primaries. */
export function ShapeTrio({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 align-middle", className)}>
      <ShapeGlyph shape="circle" tone="blue" className="h-2.5 w-2.5" />
      <ShapeGlyph shape="triangle" tone="red" className="h-2.5 w-2.5" />
      <ShapeGlyph shape="square" tone="green" className="h-2.5 w-2.5" />
    </span>
  );
}

/** Deterministic shape + tone from a section index like "01", "02"… */
const SHAPES: Shape[] = ["circle", "triangle", "square"];
const TONES: Tone[] = ["blue", "red", "green", "yellow"];

export function shapeForIndex(index?: string): { shape: Shape; tone: Tone } {
  const n = index ? parseInt(index, 10) : NaN;
  if (Number.isNaN(n)) return { shape: "circle", tone: "blue" };
  return { shape: SHAPES[(n - 1) % SHAPES.length], tone: TONES[(n - 1) % TONES.length] };
}
