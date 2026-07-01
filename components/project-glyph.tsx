import { cn } from "@/lib/utils";

type Motif = "travel" | "wellbeing" | "energy" | "research" | "cycling" | "data" | "brew" | "coffee";

/**
 * Hand-drawn, field-guide style illustration per project, used on the work
 * cards instead of screenshots. Line-art, single accent, slightly imperfect.
 */
export function ProjectGlyph({
  motif,
  className,
}: {
  motif?: Motif;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={cn("h-28 w-auto text-ink", className)}
      fill="none"
      role="img"
      aria-hidden="true"
    >
      {motif === "travel" && <Travel />}
      {motif === "wellbeing" && <Wellbeing />}
      {motif === "energy" && <Energy />}
      {motif === "research" && <Research />}
      {motif === "cycling" && <Cycling />}
      {motif === "data" && <Data />}
      {motif === "brew" && <Brew />}
      {motif === "coffee" && <Coffee />}
      {!motif && <Travel />}
    </svg>
  );
}

/* common stroke props */
const s = {
  className: "stroke-ink",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Travel, a journey: an origin, a dotted path, and a destination pin */
function Travel() {
  return (
    <>
      {/* origin */}
      <circle cx="22" cy="80" r="4" className="stroke-ink" strokeWidth={2} fill="none" />
      {/* dotted path */}
      <path
        d="M22 80 C44 72 40 50 62 46 C76 43 85 47 90 52"
        className="stroke-accent"
        strokeWidth={2}
        strokeDasharray="1 6"
        strokeLinecap="round"
        fill="none"
      />
      {/* destination pin */}
      <g transform="translate(91 38) scale(1.05)">
        <path
          className="stroke-ink"
          fill="none"
          strokeWidth={2.2}
          strokeLinejoin="round"
          d="M0 -12 C7 -12 9.5 -6.5 9.5 -2 C9.5 5 0 14 0 14 C0 14 -9.5 5 -9.5 -2 C-9.5 -6.5 -7 -12 0 -12 Z"
        />
        <circle cx="0" cy="-2" r="3" className="fill-accent" />
      </g>
    </>
  );
}

/* Wellbeing, a soft mood wave across a notebook line, with today's dot */
function Wellbeing() {
  return (
    <>
      <line x1="14" y1="78" x2="106" y2="78" className="stroke-line" strokeWidth={1.5} strokeDasharray="2 4" />
      <path d="M16 58 Q34 30 50 52 T84 46" {...s} fill="none" />
      <circle cx="16" cy="58" r="2.5" className="fill-ink" />
      <circle cx="50" cy="52" r="2.5" className="fill-ink" />
      <circle cx="84" cy="46" r="5" className="fill-accent" />
      <path d="M99 30 l3 6 M108 33 l-4 5 M104 24 v6" className="stroke-accent" strokeWidth={1.5} strokeLinecap="round" />
    </>
  );
}

/* Energy, a meter ring with a lightning bolt */
function Energy() {
  return (
    <>
      <path d="M30 76 A34 34 0 1 1 90 76" {...s} fill="none" />
      <path d="M30 76 h-6 M90 76 h6" className="stroke-line" strokeWidth={1.5} strokeLinecap="round" />
      <g transform="translate(60 54) scale(0.82) translate(-60 -54)">
        <path d="M62 26 L48 58 L60 58 L54 78 L74 50 L62 50 Z" className="fill-accent" />
        <circle cx="60" cy="58" r="1.6" className="fill-ink" />
      </g>
    </>
  );
}

/* Research, an ECG / pulse line with a small heart spike */
function Research() {
  return (
    <>
      <path d="M12 56 H40 L48 56 L54 34 L62 78 L70 50 L76 56 H108" {...s} fill="none" />
      <path
        d="M88 70 c-6 -6 -14 -2 -14 6 c0 7 14 14 14 14 c0 0 14 -7 14 -14 c0 -8 -8 -12 -14 -6 Z"
        className="stroke-accent"
        strokeWidth={2}
        fill="none"
        transform="translate(-2 -2) scale(0.62) translate(34 10)"
      />
    </>
  );
}

/* Cycling, a simple line bicycle */
function Cycling() {
  return (
    <>
      <circle cx="30" cy="66" r="18" {...s} fill="none" />
      <circle cx="90" cy="66" r="18" {...s} fill="none" />
      <circle cx="30" cy="66" r="2.5" className="fill-accent" />
      <circle cx="90" cy="66" r="2.5" className="fill-accent" />
      <path d="M30 66 L52 66 L66 40 L78 66 M52 66 L66 66 M66 40 L58 40" {...s} fill="none" />
      <path d="M90 66 L72 40 L66 40" {...s} fill="none" />
      <path d="M52 40 h12" className="stroke-accent" strokeWidth={2} strokeLinecap="round" />
    </>
  );
}

/* Brew, a pint glass with a foamy head and a few bubbles */
function Brew() {
  return (
    <>
      {/* glass */}
      <path d="M40 36 L80 36 L75 86 L45 86 Z" {...s} fill="none" />
      {/* foam head */}
      <path
        d="M40 36 Q43 27 49 32 Q54 24 60 32 Q66 25 71 32 Q77 28 80 36 Z"
        className="fill-accent stroke-ink"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      {/* fill line */}
      <line x1="42.5" y1="50" x2="77.5" y2="50" className="stroke-line" strokeWidth={1.5} />
      {/* bubbles */}
      <circle cx="55" cy="60" r="2.4" className="fill-ink" />
      <circle cx="64" cy="68" r="1.8" className="fill-ink" />
      <circle cx="57" cy="74" r="1.6" className="fill-ink" />
    </>
  );
}

/* Coffee, a line-art mug with rising steam, echoing the Heady badge */
function Coffee() {
  return (
    <>
      {/* three rising steam waves */}
      <path d="M53 46 q-4 -5 0 -10 q4 -5 0 -10" className="stroke-accent" strokeWidth={2.4} strokeLinecap="round" fill="none" />
      <path d="M60 48 q-4 -5 0 -11 q4 -5 0 -11" className="stroke-accent" strokeWidth={2.4} strokeLinecap="round" fill="none" />
      <path d="M67 46 q-4 -5 0 -10 q4 -5 0 -10" className="stroke-accent" strokeWidth={2.4} strokeLinecap="round" fill="none" />
      {/* mug body */}
      <path d="M46 56 L74 56 L71 85 Q70.5 88 67 88 L53 88 Q49.5 88 49 85 Z" {...s} fill="none" />
      {/* rim opening */}
      <ellipse cx="60" cy="56" rx="14" ry="3.4" {...s} fill="none" />
      {/* coffee surface */}
      <path d="M49.5 60 Q60 64 70.5 60" className="stroke-accent" strokeWidth={2} strokeLinecap="round" fill="none" />
      {/* handle */}
      <path d="M74 62 Q88 62 88 71 Q88 80 74 79" {...s} fill="none" />
      {/* saucer */}
      <path d="M40 92 H80" className="stroke-line" strokeWidth={1.5} strokeLinecap="round" />
    </>
  );
}

/* Data, bar chart with a trend line over it */
function Data() {
  return (
    <>
      <line x1="20" y1="20" x2="20" y2="82" className="stroke-line" strokeWidth={1.5} />
      <line x1="20" y1="82" x2="104" y2="82" className="stroke-line" strokeWidth={1.5} />
      <rect x="32" y="60" width="12" height="22" {...s} fill="none" />
      <rect x="54" y="48" width="12" height="34" {...s} fill="none" />
      <rect x="76" y="36" width="12" height="46" {...s} fill="none" />
      <path d="M38 56 L60 44 L82 30" className="stroke-accent" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="82" cy="30" r="3" className="fill-accent" />
    </>
  );
}
