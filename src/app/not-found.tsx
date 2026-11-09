import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "This page does not exist.",
};

export default function NotFound() {
  return (
    <section className="mx-auto grid min-h-[70svh] w-full max-w-[1600px] content-center gap-8 px-4 py-24 md:px-8">
      <p className="label text-accent">Error 404</p>
      <h1 className="display max-w-[16ch] text-h1">This page doesn&apos;t exist.</h1>
      <p className="max-w-[52ch] text-muted">
        The link may be stale, or the page may have moved. Head back to the index
        and start again.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="label flex min-h-11 items-center border-[3px] border-ink px-5 transition-colors hover:bg-ink hover:text-paper"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="label flex min-h-11 items-center border-[3px] border-line px-5 text-muted transition-colors hover:border-ink hover:text-ink"
        >
          Projects
        </Link>
      </div>
    </section>
  );
}
