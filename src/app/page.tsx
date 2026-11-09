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

const facts = [
  { label: "Focus", value: "Full-stack engineering" },
  { label: "Base", value: "India · GMT+5:30" },
  { label: "Currently", value: "Building in the open" },
];

const heroLinks = [
  ...Object.values(siteConfig.links).map(({ title, href }) => ({ title, href })),
  { title: "Email", href: `mailto:${siteConfig.author.email}` },
];

export default function Home() {
  return (
    <>
      {/* Hero — volt field */}
      <section className="band-volt bg-volt text-volt-ink">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col px-4 pb-12 pt-10 md:min-h-[86svh] md:justify-between md:px-8 md:pb-10 md:pt-14">
          <div className="flex items-center justify-between gap-4" data-reveal>
            <p className="label text-volt-ink/70">Portfolio · 2026</p>
            <p className="label flex items-center gap-2.5 text-volt-ink/70">
              <span aria-hidden="true" className="size-2 bg-volt-ink" />
              Open to work
            </p>
          </div>

          <div className="mt-14 md:mt-20">
            <h1 className="display text-mega">
              I build software that{" "}
              <br className="hidden md:block" />
              <span className="block-mark">solves real problems</span>.
            </h1>

            <div className="mt-14 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-20">
              <p className="max-w-[54ch] text-lede" data-reveal>
                Full-stack engineer at Tata Technologies, based in India. I work
                across TypeScript, Java and Spring Boot, and I ship products end
                to end, from the data model to the interface.
              </p>

              <dl className="text-sm" data-reveal>
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-6 border-t-[3px] border-volt-ink/25 py-3.5"
                  >
                    <dt className="label text-volt-ink/70">{fact.label}</dt>
                    <dd className="font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div
              className="mt-14 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center"
              data-reveal
            >
              {heroLinks.map(({ title, href }) => (
                <a
                  key={title}
                  href={href}
                  {...(href.startsWith("mailto")
                    ? {}
                    : { target: "_blank", rel: "noreferrer noopener" })}
                  className="label flex min-h-11 items-center justify-center gap-2 border-[3px] border-volt-ink px-4 transition-colors hover:bg-volt-ink hover:text-volt sm:justify-start"
                >
                  {title}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 flex items-end justify-between" data-reveal>
            <p className="label text-volt-ink/70">Scroll ↓</p>
            <p className="label flex items-center gap-3 text-volt-ink/70">
              <LocalClock />
              <span aria-hidden="true" className="size-2 bg-volt-ink" />
              IST
            </p>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <section
        aria-label="Core technologies"
        className="band-ink bg-ink py-4 text-paper"
      >
        <div className="ticker" style={{ ["--ticker-duration" as string]: "54s" }}>
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="ticker-track"
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              {stackStrip.map((item) => (
                <span
                  key={item}
                  className="label flex items-center gap-6 text-paper/80"
                >
                  <span className="whitespace-nowrap">{item}</span>
                  <span aria-hidden="true" className="size-1.5 shrink-0 bg-volt" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Work index */}
      <section className="mx-auto w-full max-w-[1600px] px-4 pt-16 md:px-8 md:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-6 pb-10">
          <div data-reveal>
            <p className="label text-accent">01 · Selected work</p>
            <h2 className="display mt-4 text-h2">Things I&apos;ve built</h2>
          </div>
          <Link
            href="/projects"
            className="label flex min-h-11 items-center gap-2 text-muted transition-colors hover:text-ink"
          >
            All projects
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <ul className="border-b-[3px] border-line">
          {projects.map((project, i) => (
            <li key={project.slug} data-reveal>
              <ProjectRow project={project} index={i + 1} />
            </li>
          ))}
        </ul>
      </section>

      {/* Work experience */}
      <section className="mx-auto w-full max-w-[1600px] px-4 pb-4 pt-20 md:px-8 md:pt-28">
        <p className="label text-accent" data-reveal>
          02 · Experience
        </p>
        <h2 className="display mt-4 text-h2" data-reveal>
          Work experience
        </h2>

        <div className="mt-8" data-reveal>
          {jobs.map((job) => (
            <div key={job.title} className="spec">
              <h3 className="label text-muted">Company</h3>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${job.title} website`}
                  className="grid h-20 w-32 shrink-0 place-items-center border-[3px] border-line bg-white p-2.5 transition-colors hover:border-ink"
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
                  <p className="display text-h3">{job.title}</p>
                  <p className="mt-1.5 font-medium">{job.jobTitle}</p>
                  <p className="label mt-3 text-muted">
                    {job.startDate ? `${job.startDate} → Now` : "Current role"}
                  </p>
                  <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-muted">
                    {job.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="spec">
            <p className="label text-muted">Open source</p>
            <div>
              <p className="max-w-[58ch] text-sm leading-relaxed text-muted">
                Outside work I maintain 100+ public repositories on GitHub. The
                projects above started there, and everything is open source.
              </p>
              <a
                href={siteConfig.links.github.href}
                target="_blank"
                rel="noreferrer noopener"
                className="label mt-5 inline-flex min-h-11 items-center gap-2 border-[3px] border-ink px-4 transition-colors hover:bg-ink hover:text-paper"
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
