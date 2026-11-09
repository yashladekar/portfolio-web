import { Metadata } from "next";

import { projects, tools } from "@/config/constants";
import { siteConfig } from "@/config";
import { ProjectRow } from "@/components/project-row";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.author.name}: full-stack engineer, open-source builder.`,
  openGraph: {
    title: `About — ${siteConfig.author.name}`,
    url: `${siteConfig.url}/about`,
    description: `About ${siteConfig.author.name}.`,
  },
};

const nowSlugs = ["lattice", "reelforge"];

export default function About() {
  const nowBuilding = nowSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
      <header className="pb-12 pt-14 md:pb-16 md:pt-20">
        <p className="label text-accent" data-reveal>
          03 · About
        </p>
        <h1 className="display mt-5 max-w-[20ch] text-h1" data-reveal>
          Engineer, builder, and a committed learner.
        </h1>
      </header>

      <section className="grid gap-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
        <h2 className="label text-muted" data-reveal>
          Profile
        </h2>
        <div className="max-w-[66ch] space-y-6 text-lede" data-reveal>
          <p>
            I&apos;m a full-stack developer who owns products end to end: the data
            model, the API, the interface, and the deployment that keeps it honest.
            By day I build enterprise software at Tata Technologies with Java and
            Spring Boot; the rest of the time I write TypeScript: local-first
            tools, AI pipelines, and the design systems underneath them.
          </p>
          <p className="text-muted">
            I believe in continuous learning and I&apos;d rather ship something
            real than talk about it. That habit has left me with 100+ public
            repositories on GitHub, and a preference for products I can run on my
            own machine.
          </p>
          <p className="text-muted">
            If you ever spot me in the wild, say hello. I&apos;m always up for a
            conversation about knowledge graphs, build pipelines, or the perfect
            type scale.
          </p>
        </div>
      </section>

      <section className="pt-20 md:pt-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="label text-accent" data-reveal>
            Now
          </h2>
          <p className="label text-muted" data-reveal>
            Building
          </p>
        </div>
        <ul className="mt-8 border-b-[3px] border-line">
          {nowBuilding.map((project, i) => (
            <li key={project.slug} data-reveal>
              <ProjectRow project={project} index={i + 1} />
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-20 pb-4 md:pt-28">
        <h2 className="label text-accent" data-reveal>
          Toolkit
        </h2>

        <div className="mt-8" data-reveal>
          {tools.map(({ heading, items }) => (
            <div key={heading} className="spec">
              <h3 className="label text-muted">{heading}</h3>
              <ul className="flex flex-wrap gap-x-9 gap-y-4">
                {items.map(({ name, url, description, icon: Icon }) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener"
                      title={description}
                      className="group flex min-h-11 items-center gap-3"
                    >
                      <Icon
                        aria-hidden="true"
                        className="size-5 opacity-60 transition-opacity duration-200 group-hover:opacity-100"
                      />
                      <span className="font-medium transition-colors duration-200 group-hover:text-accent">
                        {name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
