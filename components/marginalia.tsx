import { cn } from "@/lib/utils";

/**
 * Sketchbook-style margin annotation. Renders as a small handwritten-feel note,
 * slightly rotated, in the field-guide blue. Hidden on small screens where the
 * margin disappears.
 */
export function Marginalia({
  children,
  className,
  rotate = "-2deg",
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: string;
}) {
  return (
    <span
      style={{ transform: `rotate(${rotate})` }}
      className={cn(
        "hidden lg:inline-block font-mono text-[0.7rem] leading-snug text-marine/80",
        className
      )}
    >
      <span className="text-accent mr-1" aria-hidden="true">
        ↳
      </span>
      {children}
    </span>
  );
}
