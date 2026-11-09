import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "This page does not exist.",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] w-full max-w-[1440px] flex-col justify-center px-5 py-24 md:px-10">
      <p className="label text-signal">Error 404</p>
      <h1 className="mt-6 max-w-[18ch] text-h1 font-display font-semibold">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-7 max-w-[52ch] text-muted-foreground">
        The link may be stale, or the page may have moved. Head back to the index
        and start again.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/"
          className="label border border-foreground px-5 py-3.5 transition-colors hover:bg-foreground hover:text-background"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="label border border-border px-5 py-3.5 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
        >
          Projects
        </Link>
      </div>
    </section>
  );
}
