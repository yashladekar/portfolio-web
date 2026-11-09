import { siteConfig } from "@/config";
import { LocalClock } from "@/components/local-clock";

const socials = Object.values(siteConfig.links);

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
        <section className="grid gap-12 py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:py-24">
          <div className="duration-700 animate-in fade-in slide-in-from-bottom-4">
            <p className="label text-muted-foreground">04 — Contact</p>
            <h2 className="mt-6 max-w-[20ch] text-h1 font-display font-semibold">
              Let&apos;s build something <span className="marker">solid</span>.
            </h2>
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="mt-8 inline-flex items-baseline gap-3 font-display text-h3 font-medium"
            >
              <span className="ink-link">{siteConfig.author.email}</span>
              <span aria-hidden="true" className="text-signal">
                ↗
              </span>
            </a>
          </div>

          <div className="md:text-right">
            <p className="label text-muted-foreground">Availability</p>
            <p className="mt-4 flex items-center gap-2.5 md:justify-end">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
              <span className="text-sm text-foreground/80">
                Open to roles and collaborations
              </span>
            </p>
          </div>
        </section>

        <div className="grid gap-10 border-t border-border py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label text-muted-foreground">Elsewhere</p>
            <ul className="mt-5 space-y-2.5">
              {socials.map(({ title, href }) => (
                <li key={title}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-foreground/80 transition-colors hover:text-signal-ink"
                  >
                    {title} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label text-muted-foreground">Local time</p>
            <p className="mt-5 text-sm text-foreground/80">India · GMT+5:30</p>
            <p className="mt-1.5 font-mono text-sm text-foreground/80">
              <LocalClock />
            </p>
          </div>

          <div>
            <p className="label text-muted-foreground">Colophon</p>
            <p className="mt-5 text-sm text-foreground/80">
              Set in Bricolage Grotesque and Geist Mono. Built with Next.js,
              Tailwind CSS and React.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <p className="label text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.author.name}
            </p>
            <a
              href="#top"
              className="label text-foreground/80 transition-colors hover:text-signal-ink"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
