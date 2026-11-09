import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/project";

export function ProjectRow({
  project,
  index,
  stackLimit = 3,
}: {
  project: Project;
  index: number;
  stackLimit?: number;
}) {
  const { name, tagline, stack, year, projectUrl } = project;
  const href = projectUrl.live ?? projectUrl.github;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="index-row group block border-t border-border px-1 py-6 md:px-2 md:py-8"
    >
      <div className="grid grid-cols-[2.25rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-3 md:grid-cols-[4.5rem_minmax(0,1fr)_auto] md:gap-x-8">
        <span className="label text-muted-foreground transition-colors group-hover:text-background/60">
          {String(index).padStart(2, "0")}
        </span>

        <div className="min-w-0">
          <h3 className="text-h3 font-display font-semibold">{name}</h3>
          <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-foreground/70 transition-colors group-hover:text-background/70">
            {tagline}
          </p>
        </div>

        <div className="col-start-2 flex flex-wrap items-center gap-x-5 gap-y-2 md:col-start-3 md:justify-end">
          <span className="label hidden transition-colors group-hover:text-background/60 lg:block text-muted-foreground">
            {stack.slice(0, stackLimit).join(" / ")}
          </span>
          <span className="label text-muted-foreground transition-colors group-hover:text-background/60">
            {year}
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </a>
  );
}
