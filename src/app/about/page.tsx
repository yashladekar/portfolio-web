import { Metadata } from "next";

import { projects, tools } from "@/config/constants";
import { siteConfig } from "@/config";
import { ProjectRow } from "@/components/project-row";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.author.name} — full-stack engineer, open-source builder.`,
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
    <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
      <header className="max-w-[64ch] pb-14 pt-14 md:pb-20 md:pt-24">
        <p className="label text-muted-foreground" data-reveal>
          03 — About
        </p>
        <h1 className="mt-6 text-h1 font-display font-semibold" data-reveal>
          Full-stack engineer, based in India, building in the open.
        </h1>
      </header>

      <section className="grid gap-12 border-t border-border py-14 md:grid-cols-[14rem_minmax(0,1fr)] md:py-20">
        <h2 className="label text-muted-foreground" data-reveal>
          Profile
        </h2>
        <div
          className="max-w-[68ch] space-y-6 text-lede text-foreground/80"
          data-reveal
        >
          <p>
            I&apos;m a full-stack developer who owns products end to end: the data
            model, the API, the interface, and the deployment that keeps it honest.
            By day I build enterprise software at Tata Technologies with Java and
            Spring Boot; the rest of the time I&apos;m writing TypeScript — local-first
            tools, AI pipelines, and the design systems underneath them.
          </p>
          <p>
            I believe in continuous learning and I&apos;d rather ship something real
            than talk about it. That habit has left me with 100+ public repositories
            on GitHub, and a preference for products I can run on my own machine.
          </p>
          <p>
            If you ever spot me in the wild, say hello. I&apos;m always up for a
            conversation about knowledge graphs, build pipelines, or the perfect
            type scale.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-14 md:py-20">
        <div className="flex items-end justify-between">
          <h2 className="label text-muted-foreground" data-reveal>
            Now
          </h2>
          <p className="label hidden text-muted-foreground sm:block" data-reveal>
            Building
          </p>
        </div>
        <ul className="mt-10 border-b border-border">
          {nowBuilding.map((project, i) => (
            <li key={project.slug} data-reveal>
              <ProjectRow project={project} index={i + 1} />
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border py-14 md:py-20">
        <h2 className="label text-muted-foreground" data-reveal>
          Toolkit
        </h2>

        <div className="mt-10">
          {tools.map(({ heading, items }) => (
            <div
              key={heading}
              className="grid gap-6 border-t border-border py-8 md:grid-cols-[14rem_minmax(0,1fr)]"
              data-reveal
            >
              <h3 className="label text-muted-foreground">{heading}</h3>
              <ul className="flex flex-wrap gap-x-9 gap-y-5">
                {items.map(({ name, url, description, icon: Icon }) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener"
                      title={description}
                      className="group flex items-center gap-2.5"
                    >
                      <Icon
                        aria-hidden="true"
                        className="size-4 opacity-40 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                      <span className="text-sm text-foreground/80 transition-colors group-hover:text-signal-ink">
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
