import { cn } from "@/lib/utils";

/**
 * Bespoke field-guide plate for the Switchfly case study: a booking journey
 * "mapped" as a dotted route through four stations, with a recurring loop
 * underneath for a platform that ships continuously.
 */
const stations = [
  { x: 60, y: 150, label: "Search", n: "01" },
  { x: 145, y: 98, label: "Compare", n: "02" },
  { x: 225, y: 152, label: "Book", n: "03" },
  { x: 308, y: 104, label: "Confirm", n: "04" },
];

export function RoutePlate({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 380 340"
      className={cn("text-ink", className)}
      role="img"
      aria-label="Field-guide diagram: a travel booking mapped as a route from Search to Confirm, looping back to show a platform that ships continuously."
    >
      {/* plate frame */}
      <rect x="6" y="6" width="368" height="328" className="fill-paper stroke-line" strokeWidth="1" />
      <rect
        x="14"
        y="14"
        width="352"
        height="312"
        className="fill-none stroke-line"
        strokeWidth="0.75"
        strokeDasharray="2 4"
      />

      {/* header */}
      <text x="28" y="40" className="fill-accent font-mono" fontSize="11" letterSpacing="1.5">
        FIG. 02
      </text>
      <text x="28" y="56" className="fill-muted-foreground font-mono" fontSize="9" letterSpacing="1">
        A BOOKING, MAPPED
      </text>

      {/* compass */}
      <g transform="translate(338, 38)">
        <circle r="13" className="fill-none stroke-ink" strokeWidth="1" />
        <path d="M0 -10 L2.5 -2.5 L10 0 L2.5 2.5 L0 10 L-2.5 2.5 L-10 0 L-2.5 -2.5 Z" className="fill-accent" />
      </g>

      {/* continuous-delivery loop (drawn first, sits behind the route) */}
      <path
        d="M308 118 C342 210 250 280 188 274 C112 266 56 232 60 168"
        className="fill-none stroke-marine"
        strokeWidth="1"
        strokeDasharray="2 6"
        opacity="0.7"
      />
      <path d="M60 168 l-5 -9 l11 1 z" className="fill-marine" opacity="0.7" />
      <text x="190" y="262" textAnchor="middle" className="fill-marine font-mono" fontSize="8.5" opacity="0.8">
        the platform never stops shipping
      </text>

      {/* the booking route */}
      <path
        d="M60 150 C90 112 118 98 145 98 C175 98 200 128 225 152 C252 178 282 150 308 104"
        className="fill-none stroke-accent"
        strokeWidth="2"
        strokeDasharray="1 5"
        strokeLinecap="round"
      />

      {/* stations */}
      {stations.map((s, i) => (
        <g key={s.label}>
          <circle cx={s.x} cy={s.y} r="6.5" className="fill-paper stroke-ink" strokeWidth="1.5" />
          <circle cx={s.x} cy={s.y} r="2.5" className="fill-accent" />
          <text
            x={s.x}
            y={i % 2 === 0 ? s.y + 22 : s.y - 14}
            textAnchor="middle"
            className="fill-ink font-mono"
            fontSize="10"
            letterSpacing="0.5"
          >
            {s.label}
          </text>
          <text
            x={s.x}
            y={i % 2 === 0 ? s.y + 33 : s.y - 25}
            textAnchor="middle"
            className="fill-muted-foreground font-mono"
            fontSize="8"
          >
            {s.n}
          </text>
        </g>
      ))}

      {/* footer caption */}
      <text x="28" y="318" className="fill-muted-foreground font-mono" fontSize="8.5" letterSpacing="0.5">
        Designed across five years and three roles.
      </text>
    </svg>
  );
}
