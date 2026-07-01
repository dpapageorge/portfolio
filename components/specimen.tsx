import { cn } from "@/lib/utils";

/**
 * A bespoke, field-guide "specimen plate", an exploded diagram of how Danny
 * builds a product: strategy → system → flow → interface. Each layer is
 * differentiated to carry a little more meaning: the decision (a point), the
 * model (structure), the path (a flow), and the screen (still to be drawn).
 */
type Kind = "accent" | "hatch" | "flow" | "dashed";

const layers: { n: string; label: string; sub: string; kind: Kind }[] = [
  { n: "01", label: "Strategy", sub: "the decision", kind: "accent" },
  { n: "02", label: "System", sub: "the model", kind: "hatch" },
  { n: "03", label: "Flow", sub: "the path", kind: "flow" },
  { n: "04", label: "Interface", sub: "the screen", kind: "dashed" },
];

export function Specimen({ className }: { className?: string }) {
  const L = 74;
  const S = 24;
  const W = 116;
  const H = 28;
  const gap = 66;
  const startY = 104;
  const axisX = L + (S + W) / 2; // 166, through each plane's centre

  return (
    <svg
      viewBox="0 0 380 392"
      className={cn("text-ink", className)}
      role="img"
      aria-label="Field-guide diagram: how a clear product is built, from strategy to interface."
    >
      {/* plate frame */}
      <rect x="6" y="6" width="368" height="380" className="fill-paper stroke-line" strokeWidth="1" />
      <rect
        x="14"
        y="14"
        width="352"
        height="364"
        className="fill-none stroke-line"
        strokeWidth="0.75"
        strokeDasharray="2 4"
      />

      {/* header */}
      <text x="28" y="40" className="fill-accent font-mono" fontSize="11" letterSpacing="1.5">
        FIG. 01
      </text>
      <text x="28" y="56" className="fill-muted-foreground font-mono" fontSize="9" letterSpacing="1">
        ANATOMY OF A CLEAR PRODUCT
      </text>

      {/* explode axis, dash-dot */}
      <line
        x1={axisX}
        y1={startY - 14}
        x2={axisX}
        y2={startY + 3 * gap + H + 16}
        className="stroke-line"
        strokeWidth="1"
        strokeDasharray="6 3 1 3"
      />

      {layers.map((layer, k) => {
        const Y = startY + k * gap;
        const cy = Y + H / 2;
        const plane = `M${L + S} ${Y} L${L + S + W} ${Y} L${L + W} ${Y + H} L${L} ${Y + H} Z`;
        const midRightX = L + W + S / 2; // 224

        return (
          <g key={layer.n}>
            {/* the plane, differentiated by kind */}
            {layer.kind === "accent" && (
              <>
                <path d={plane} className="fill-paper stroke-accent" strokeWidth="1.4" />
                <circle cx={axisX} cy={cy} r="3.4" className="fill-accent" />
              </>
            )}

            {layer.kind === "hatch" && (
              <>
                <path d={plane} className="fill-paper stroke-ink" strokeWidth="1.4" />
                <g className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="2 2" opacity={0.7}>
                  <line x1={118} y1={Y + 23} x2={136} y2={Y + 5} />
                  <line x1={138} y1={Y + 23} x2={156} y2={Y + 5} />
                  <line x1={158} y1={Y + 23} x2={176} y2={Y + 5} />
                </g>
              </>
            )}

            {layer.kind === "flow" && (
              <>
                <path d={plane} className="fill-paper stroke-ink" strokeWidth="1.4" />
                <path
                  d={`M108 ${Y + 19} Q142 ${Y + 4} 174 ${Y + 16}`}
                  className="fill-none stroke-muted-foreground"
                  strokeWidth="1.3"
                  strokeDasharray="3 3"
                />
                <path
                  d={`M176 ${Y + 17} L165 ${Y + 17} L169 ${Y + 9} Z`}
                  className="fill-muted-foreground stroke-muted-foreground"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </>
            )}

            {layer.kind === "dashed" && (
              <path d={plane} className="fill-paper stroke-ink" strokeWidth="1.4" strokeDasharray="5 4" />
            )}

            {/* index number, left */}
            <text x={L - 18} y={cy + 4} textAnchor="end" className="fill-accent font-mono" fontSize="11">
              {layer.n}
            </text>

            {/* dotted leader + bullet + label, right */}
            <line
              x1={midRightX}
              y1={cy}
              x2={272}
              y2={cy}
              className="stroke-line"
              strokeWidth="1"
            />
            <circle cx={272} cy={cy} r="1.6" className="fill-ink" />
            <text x={278} y={cy - 1} className="fill-ink font-sans" fontSize="13" fontWeight={700}>
              {layer.label}
            </text>
            <text x={278} y={cy + 11} className="fill-muted-foreground font-mono" fontSize="8">
              {layer.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
