import { Metadata } from "next";

import { projects } from "@/config/constants";
import { siteConfig } from "@/config";
import { ProjectRow } from "@/components/project-row";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected builds by ${siteConfig.author.name}: open-source, shipped, and in progress.`,
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
    <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
      <header className="pb-12 pt-14 md:pb-16 md:pt-20">
        <p className="label text-accent" data-reveal>
          01 · Work index
        </p>
        <h1 className="display mt-5 text-h1" data-reveal>
          Projects
        </h1>
        <p className="mt-7 max-w-[60ch] text-lede text-muted" data-reveal>
          The builds I&apos;m proudest of from the last year: knowledge tools, AI
          pipelines and enterprise systems. All open source, so dig into the code,
          open issues, send pull requests.
        </p>
        <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3" data-reveal>
          {stats.map((stat) => (
            <li
              key={stat}
              className="label flex items-center gap-2.5 text-muted"
            >
              <span aria-hidden="true" className="size-1.5 bg-accent" />
              {stat}
            </li>
          ))}
        </ul>
      </header>

      <ul className="border-b-[3px] border-line">
        {projects.map((project, i) => (
          <li key={project.slug} data-reveal>
            <ProjectRow project={project} index={i + 1} stackLimit={99} />
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-start gap-6 py-16 md:py-24">
        <p className="label text-accent">Elsewhere</p>
        <h2 className="display max-w-[20ch] text-h2">
          Everything else lives on GitHub.
        </h2>
        <a
          href={siteConfig.links.github.href}
          target="_blank"
          rel="noreferrer noopener"
          className="label inline-flex min-h-11 items-center gap-2 border-[3px] border-ink px-5 transition-colors hover:bg-ink hover:text-paper"
        >
          github.com/yashladekar
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
