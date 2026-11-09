import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types/project";

export function ProjectRow({
  project,
  index,
  stackLimit = 4,
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
      className="index-row group block px-2 py-7 md:px-3 md:py-9"
    >
      <div className="grid gap-x-8 gap-y-5 md:grid-cols-[4.5rem_minmax(0,1fr)_auto]">
        <span className="label text-accent transition-colors group-hover:text-volt-ink">
          {String(index).padStart(2, "0")}
        </span>

        <div className="min-w-0">
          <h3 className="display text-h3 group-hover:text-volt-ink">{name}</h3>
          <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted transition-colors group-hover:text-volt-ink/80">
            {tagline}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stack.slice(0, stackLimit).map((item) => (
              <li
                key={item}
                className="label border-2 border-line px-2.5 py-1.5 text-muted transition-colors group-hover:border-volt-ink/40 group-hover:text-volt-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 md:flex-col md:items-end md:gap-3">
          <span className="label text-muted transition-colors group-hover:text-volt-ink/80">
            {year}
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="size-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </a>
  );
}
