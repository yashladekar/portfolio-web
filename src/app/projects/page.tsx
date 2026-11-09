import { Metadata } from "next";

import { projects } from "@/config/constants";
import { siteConfig } from "@/config";
import { ProjectRow } from "@/components/project-row";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected builds by ${siteConfig.author.name} — open-source, shipped, and in progress.`,
  openGraph: {
    title: `Projects — ${siteConfig.author.name}`,
    url: `${siteConfig.url}/projects`,
    description: `Selected builds by ${siteConfig.author.name}.`,
  },
};

const stats = [
  `${String(projects.length).padStart(2, "0")} featured`,
  "100+ public repositories",
  "Open source",
];

export default function Projects() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
      <header className="max-w-[64ch] pb-14 pt-14 md:pb-20 md:pt-24">
        <p className="label text-muted-foreground" data-reveal>
          01 — Work index
        </p>
        <h1 className="mt-6 text-h1 font-display font-semibold" data-reveal>
          Projects
        </h1>
        <p className="mt-7 text-lede text-muted-foreground" data-reveal>
          The builds I&apos;m proudest of from the last year — knowledge tools, AI
          pipelines and enterprise systems. All open source; dig into the code,
          open issues, send pull requests.
        </p>
        <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3" data-reveal>
          {stats.map((stat) => (
            <li key={stat} className="label flex items-center gap-3 text-muted-foreground">
              <span aria-hidden="true" className="size-1 bg-signal" />
              {stat}
            </li>
          ))}
        </ul>
      </header>

      <ul className="border-b border-border">
        {projects.map((project, i) => (
          <li key={project.slug} data-reveal>
            <ProjectRow project={project} index={i + 1} stackLimit={99} />
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-end md:justify-between md:py-24">
        <div>
          <p className="label text-muted-foreground">Elsewhere</p>
          <h2 className="mt-5 max-w-[24ch] text-h2 font-display font-semibold">
            Everything else lives on GitHub.
          </h2>
        </div>
        <a
          href={siteConfig.links.github.href}
          target="_blank"
          rel="noreferrer noopener"
          className="label inline-flex items-baseline gap-2 border border-foreground px-5 py-3.5 transition-colors hover:bg-foreground hover:text-background"
        >
          github.com/yashladekar
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
