import { siteConfig } from "@/config";
import { LocalClock } from "@/components/local-clock";

const elsewhere = Object.values(siteConfig.links);

export default function Footer() {
  return (
    <footer className="band-volt mt-24 bg-volt text-volt-ink">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <section className="grid gap-14 py-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-20 md:py-24">
          <div data-reveal>
            <p className="label text-volt-ink/70">04 · Contact</p>
            <h2 className="display mt-6 max-w-[15ch] text-h1">
              Let&apos;s build something solid.
            </h2>
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="mt-10 inline-flex min-h-11 items-center gap-3 border-b-[3px] border-volt-ink pb-1 text-lg font-semibold transition-colors hover:border-volt-ink/40 hover:text-volt-ink/80"
            >
              {siteConfig.author.email}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <dl data-reveal>
            <div className="spec">
              <dt className="label text-volt-ink/70">Availability</dt>
              <dd className="font-medium">Open to roles and collaborations</dd>
            </div>
            <div className="spec">
              <dt className="label text-volt-ink/70">Local time</dt>
              <dd className="font-medium">
                India · GMT+5:30 · <LocalClock />
              </dd>
            </div>
            <div className="spec">
              <dt className="label text-volt-ink/70">Elsewhere</dt>
              <dd className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
                {elsewhere.map(({ title, href }) => (
                  <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-11 items-center gap-1.5 underline decoration-[3px] underline-offset-4 transition-colors hover:text-volt-ink/70"
                  >
                    {title}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </dd>
            </div>
            <div className="spec">
              <dt className="label text-volt-ink/70">Colophon</dt>
              <dd className="max-w-[48ch] text-sm leading-relaxed">
                Set in Anton and Archivo. Built with Next.js, Tailwind CSS and
                React.
              </dd>
            </div>
          </dl>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t-[3px] border-volt-ink/25 py-6">
          <p className="label text-volt-ink/70">
            © {new Date().getFullYear()} {siteConfig.author.name}
          </p>
          <a
            href="#top"
            className="label flex min-h-11 items-center transition-colors hover:text-volt-ink/70"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
