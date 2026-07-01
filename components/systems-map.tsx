import { cn } from "@/lib/utils";

/**
 * A field-guide systems map, the notebook of someone who *leads* product, not
 * someone who only draws screens. People are circles, decisions are triangles,
 * systems are squares, wired together by an annotated flow that loops back on
 * itself. Primary colours live in the nodes; the wiring stays ink, for restraint.
 */

function Arrow({ x, y, deg }: { x: number; y: number; deg: number }) {
  return (
    <path
      d="M0 -3.2 L7 0 L0 3.2 Z"
      className="fill-ink"
      transform={`translate(${x} ${y}) rotate(${deg})`}
    />
  );
}

function Label({
  x,
  y,
  children,
  muted = false,
}: {
  x: number;
  y: number;
  children: string;
  muted?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      className={cn("font-mono", muted ? "fill-muted-foreground" : "fill-ink")}
      fontSize="10"
      letterSpacing="0.4"
    >
      {children}
    </text>
  );
}

export function SystemsMap({ className }: { className?: string }) {
  const edge = "stroke-ink fill-none";
  return (
    <svg
      viewBox="0 0 400 412"
      className={cn("text-ink", className)}
      role="img"
      aria-label="A hand-drawn systems map: users, research, strategy, system, team, and ship, connected in a loop with annotations."
    >
      {/* plate frame */}
      <rect x="6" y="6" width="388" height="400" className="fill-paper stroke-line" strokeWidth="1" />
      <rect x="14" y="14" width="372" height="384" className="fill-none stroke-line" strokeWidth="0.75" strokeDasharray="2 4" />

      {/* header */}
      <text x="28" y="40" className="fill-accent font-mono" fontSize="11" letterSpacing="1.5">FIG. 01</text>
      <text x="28" y="56" className="fill-muted-foreground font-mono" fontSize="9" letterSpacing="1">A SYSTEM, MAPPED</text>

      {/* compass */}
      <g transform="translate(360, 40)">
        <circle r="13" className="fill-none stroke-ink" strokeWidth="1" />
        <path d="M0 -10 L2.5 -2.5 L10 0 L2.5 2.5 L0 10 L-2.5 2.5 L-10 0 L-2.5 -2.5 Z" className="fill-accent" />
      </g>

      {/* ── edges (drawn under the nodes) ── */}
      {/* Users → Research */}
      <path d="M96 90 Q190 54 278 80" className={edge} strokeWidth="1.5" />
      <Arrow x={278} y={80} deg={6} />
      <Label x={188} y={52} muted>ask</Label>

      {/* Research → Strategy */}
      <path d="M314 92 Q346 138 332 176" className={edge} strokeWidth="1.5" />
      <Arrow x={332} y={176} deg={100} />
      <Label x={358} y={140} muted>frame</Label>

      {/* Strategy → System */}
      <path d="M322 214 Q300 262 282 282" className={edge} strokeWidth="1.5" />
      <Arrow x={282} y={282} deg={128} />
      <Label x={324} y={256} muted>model</Label>

      {/* System → Team */}
      <path d="M236 302 Q178 314 142 308" className={edge} strokeWidth="1.5" />
      <Arrow x={142} y={308} deg={186} />
      <Label x={190} y={330} muted>enable</Label>

      {/* Team → Ship */}
      <path d="M102 292 Q70 252 64 220" className={edge} strokeWidth="1.5" />
      <Arrow x={64} y={220} deg={245} />
      <Label x={58} y={266} muted>build</Label>

      {/* Ship → Users (the loop, dashed) */}
      <path d="M60 174 Q58 132 70 114" className={edge} strokeWidth="1.5" strokeDasharray="2 5" />
      <Arrow x={70} y={114} deg={290} />
      <Label x={34} y={150} muted>learn</Label>

      {/* ── nodes ── */}
      {/* Users, circle / people / blue */}
      <circle cx="74" cy="96" r="17" className="fill-paper stroke-brand-blue" strokeWidth="2" />
      <circle cx="74" cy="96" r="3" className="fill-brand-blue" />
      <Label x={74} y={134}>Users</Label>

      {/* Research, circle / people / blue */}
      <circle cx="300" cy="78" r="17" className="fill-paper stroke-brand-blue" strokeWidth="2" />
      <circle cx="300" cy="78" r="3" className="fill-brand-blue" />
      <Label x={300} y={50}>Research</Label>

      {/* Strategy, triangle / decision / solid red */}
      <path d="M332 178 L350 210 L314 210 Z" className="fill-brand-red stroke-brand-red" strokeWidth="2" strokeLinejoin="round" />
      <Label x={332} y={232}>Strategy</Label>

      {/* System, square / system / green */}
      <rect x="251" y="285" width="30" height="30" className="fill-paper stroke-brand-green" strokeWidth="2" />
      <circle cx="266" cy="300" r="2.5" className="fill-brand-green" />
      <Label x={266} y={338}>System</Label>

      {/* Team, circle / people / blue */}
      <circle cx="116" cy="306" r="17" className="fill-paper stroke-brand-blue" strokeWidth="2" />
      <circle cx="116" cy="306" r="3" className="fill-brand-blue" />
      <Label x={116} y={344}>Team</Label>

      {/* Ship, square / artifact / solid yellow */}
      <rect x="45" y="181" width="30" height="30" className="fill-brand-yellow stroke-ink" strokeWidth="1.5" />
      <Label x={60} y={234}>Ship</Label>

      {/* legend */}
      <g transform="translate(0, 372)">
        <circle cx="30" cy="0" r="5.5" className="fill-none stroke-brand-blue" strokeWidth="1.5" />
        <text x="42" y="4" className="fill-muted-foreground font-mono" fontSize="8.5">people</text>
        <path d="M150 -5 L156 5 L144 5 Z" className="fill-brand-red" />
        <text x="162" y="4" className="fill-muted-foreground font-mono" fontSize="8.5">decisions</text>
        <rect x="276" y="-5" width="10" height="10" className="fill-none stroke-brand-green" strokeWidth="1.5" />
        <text x="292" y="4" className="fill-muted-foreground font-mono" fontSize="8.5">systems</text>
      </g>

      {/* footer caption */}
      <text x="28" y="392" className="fill-muted-foreground font-mono" fontSize="8.5" letterSpacing="0.5">
        How I think before I draw a single screen.
      </text>
    </svg>
  );
}
