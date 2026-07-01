import { cn } from "@/lib/utils";

/** Field-guide style section label: index number + mono kicker on a hairline */
export function SectionLabel({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 pt-4 rule", className)}>
      {index && (
        <span className="font-mono text-xs text-accent tabular-nums">
          {index}
        </span>
      )}
      <span className="label-mono">{children}</span>
    </div>
  );
}
