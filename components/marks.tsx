import { cn } from "@/lib/utils";

/** Hand-drawn underline, field-guide flourish under headlines */
export function HandUnderline({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-accent", className)}
      viewBox="0 0 300 12"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 8C44 4 92 3 140 5C188 7 244 9 298 4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small compass / asterisk mark used as a section divider glyph */
export function Compass({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-accent", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M12 4L13.6 10.4L20 12L13.6 13.6L12 20L10.4 13.6L4 12L10.4 10.4L12 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Dotted route line, sketchbook connector */
export function RouteLine({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-line", className)}
      viewBox="0 0 100 20"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 10C20 2 30 18 50 10C70 2 80 18 100 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="1 4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Corner registration mark, like a print crop mark */
export function CropMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-muted-foreground", className)}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 8H10M8 0V10" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
