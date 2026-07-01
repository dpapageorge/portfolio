import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { CropPlate } from "@/components/crop-plate";
import { ProjectGlyph } from "@/components/project-glyph";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
  large = false,
}: {
  project: Project;
  index: number;
  large?: boolean;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group relative flex h-full flex-col border border-line bg-paper p-6 transition-colors duration-300 hover:border-ink sm:p-8",
        large && "md:p-10"
      )}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.flag ? (
          <Badge variant="accent">{project.flag}</Badge>
        ) : (
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
            {project.year}
          </span>
        )}
      </div>

      <CropPlate
        title={project.title}
        caption={project.industry}
        index={index}
        glyph={<ProjectGlyph motif={project.motif} />}
        large={large}
        live={!!project.liveUrl}
        className="mt-6"
      />

      <div className="mt-8 flex items-baseline gap-3">
        <h3
          className={cn(
            "font-serif tracking-tight",
            large ? "text-4xl md:text-5xl" : "text-3xl"
          )}
        >
          {project.title}
        </h3>
        <ArrowUpRight className="h-5 w-5 -translate-y-0.5 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1.5 group-hover:text-accent" />
      </div>

      <p className="mt-1 font-serif text-lg italic text-muted-foreground">
        {project.tagline}
      </p>

      <p
        className={cn(
          "mt-5 max-w-prose text-pretty leading-relaxed text-ink/80",
          large ? "text-lg" : "text-[0.95rem]"
        )}
      >
        {project.summary}
      </p>

      <div className="mt-auto pt-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-4">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
            {project.industry}
          </span>
          <span className="text-line">·</span>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
            {project.role}
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.disciplines.slice(0, large ? 5 : 3).map((d) => (
            <Badge key={d}>{d}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
