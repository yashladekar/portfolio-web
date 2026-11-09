import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config";
import { jobs, projects } from "@/config/constants";
import { LocalClock } from "@/components/local-clock";
import { ProjectRow } from "@/components/project-row";

const stackStrip = [
  "TypeScript",
  "Java",
  "Spring Boot",
  "Next.js",
  "React",
  "Prisma",
  "PostgreSQL",
  "tRPC",
  "Tailwind CSS",
  "Tauri",
  "Expo",
  "FFmpeg",
  "OpenFGA",
  "Redis",
];

const heroLinks = [
  ...Object.values(siteConfig.links).map(({ title, href }) => ({ title, href })),
  { title: "Email", href: `mailto:${siteConfig.author.email}` },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-[1440px] flex-col px-5 pb-16 pt-14 md:min-h-[84svh] md:justify-between md:px-10 md:pb-12 md:pt-20">
        <div className="flex items-center justify-between" data-reveal>
          <p className="label text-muted-foreground">Portfolio — 2026</p>
          <p className="label hidden items-center gap-2.5 text-muted-foreground sm:flex">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
            Available for work
          </p>
        </div>

        <div className="mt-20 md:mt-24">
          <h1 className="max-w-[17ch] text-display font-display font-semibold">
            I build software that{" "}
            <span className="marker">solves real problems</span>.
          </h1>

          <p
            className="mt-10 max-w-[60ch] text-lede text-muted-foreground"
            data-reveal
          >
            Full-stack engineer at Tata Technologies, based in India. I work across
            TypeScript, Java and Spring Boot, and I ship products end to end, from
            the data model to the interface.
          </p>

          <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4" data-reveal>
            {heroLinks.map(({ title, href }) => (
              <li key={title}>
                <a
                  href={href}
                  {...(href.startsWith("mailto")
                    ? {}
                    : { target: "_blank", rel: "noreferrer noopener" })}
                  className="label inline-flex items-baseline gap-1.5 text-foreground/80 transition-colors hover:text-signal-ink"
                >
                  {title}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 flex items-end justify-between" data-reveal>
          <p className="label text-muted-foreground">Scroll ↓</p>
          <p className="label flex items-center gap-2 text-muted-foreground">
            <LocalClock />
            <span aria-hidden="true" className="size-1 bg-signal" />
            IST
          </p>
        </div>
      </section>

      {/* Stack strip */}
      <section
        aria-label="Core technologies"
        className="border-y border-border bg-foreground py-4 text-background"
      >
        <div className="marquee" style={{ ["--marquee-duration" as string]: "52s" }}>
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="marquee-track"
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              {stackStrip.map((item) => (
                <span key={item} className="label flex items-center gap-6">
                  <span className="whitespace-nowrap">{item}</span>
                  <span aria-hidden="true" className="size-1 shrink-0 bg-signal" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
        <div className="flex items-end justify-between py-16 md:py-24">
          <div data-reveal>
            <p className="label text-muted-foreground">01 — Selected work</p>
            <h2 className="mt-5 text-h2 font-display font-semibold">
              Things I&apos;ve built
            </h2>
          </div>
          <Link
            href="/projects"
            className="label hidden text-muted-foreground transition-colors hover:text-foreground md:block"
          >
            All projects ↗
          </Link>
        </div>

        <ul className="border-b border-border">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <ProjectRow project={project} index={i + 1} />
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mt-24 border-t border-border md:mt-32">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-[minmax(0,1fr)_2fr] md:px-10 md:py-24">
          <div data-reveal>
            <p className="label text-muted-foreground">02 — Experience</p>
            <h2 className="mt-4 text-h2 font-display font-semibold">
              Work experience
            </h2>
            <p className="mt-4 max-w-[28ch] text-sm text-foreground/70">
              Enterprise software by day, open source the rest of the time.
            </p>
          </div>

          <div data-reveal>
            {jobs.map((job) => (
              <article
                key={job.title}
                className="grid gap-5 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-start md:gap-6"
              >
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${job.title} website`}
                  className={`grid h-20 w-32 shrink-0 place-items-center rounded-md border border-border p-2.5 transition-colors hover:border-foreground ${
                    job.isTransparent ? "bg-white" : "bg-secondary/50"
                  }`}
                >
                  <Image
                    src={job.logo}
                    alt={`${job.title} logo`}
                    width={112}
                    height={72}
                    className={
                      job.isTransparent
                        ? "h-full w-full object-contain"
                        : "h-full w-full object-cover"
                    }
                  />
                </a>

                <div>
                  <h3 className="text-h3 font-display font-semibold">{job.title}</h3>
                  <p className="mt-1.5 text-foreground/70">{job.jobTitle}</p>
                  <p className="mt-5 max-w-[58ch] text-sm leading-relaxed text-foreground/70">
                    {job.description}
                  </p>
                </div>
                <p className="label text-muted-foreground md:text-right">
                  {job.startDate ? `${job.startDate} — Present` : "Present"}
                </p>
              </article>
            ))}

            <div className="mt-12 border-t border-border pt-8">
              <p className="max-w-[58ch] text-sm leading-relaxed text-foreground/70">
                Outside work I maintain 100+ public repositories on GitHub. The
                projects above started there, and everything is open source.
              </p>
              <a
                href={siteConfig.links.github.href}
                target="_blank"
                rel="noreferrer noopener"
                className="label mt-6 inline-flex items-baseline gap-2 text-foreground/80 transition-colors hover:text-signal-ink"
              >
                github.com/yashladekar
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
