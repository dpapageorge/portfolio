import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent";
}

export function Badge({ className, variant = "outline", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono text-[0.65rem] uppercase tracking-[0.14em] px-2.5 py-1 leading-none",
        variant === "outline" && "border border-line text-muted-foreground",
        variant === "default" && "bg-ink text-paper",
        variant === "accent" && "bg-accent/10 text-accent border border-accent/30",
        className
      )}
      {...props}
    />
  );
}
