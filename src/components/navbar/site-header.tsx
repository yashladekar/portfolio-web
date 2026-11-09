"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme-toggle";

const navItems = [
  { n: "01", title: "Work", href: "/projects" },
  { n: "02", title: "About", href: "/about" },
  { n: "03", title: "Contact", href: `mailto:${siteConfig.author.email}` },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef(false);

  useEffect(() => {
    if (!open) return;

    const covered = [
      document.getElementById("skip-link"),
      document.getElementById("site-bar"),
      document.getElementById("main"),
      document.querySelector<HTMLElement>("footer"),
    ].filter((el): el is HTMLElement => Boolean(el));

    covered.forEach((el) => {
      el.inert = true;
    });

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const trigger = triggerRef.current;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        restoreFocusRef.current = true;
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      covered.forEach((el) => {
        el.inert = false;
      });
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);

      if (restoreFocusRef.current) {
        restoreFocusRef.current = false;
        trigger?.focus();
      }
    };
  }, [open]);

  return (
    <header className="band-nav sticky top-0 z-50 border-b-[3px] border-line bg-nav text-nav-ink">
      <div
        id="site-bar"
        className="mx-auto flex h-14 w-full max-w-[1600px] items-center justify-between gap-4 px-4 md:h-16 md:px-8"
      >
        <Link
          href="/"
          aria-label={`${siteConfig.author.name} — home`}
          className="group flex min-h-11 items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="size-2.5 shrink-0 bg-volt transition-transform duration-200 group-hover:rotate-45"
          />
          <span className="display whitespace-nowrap text-[0.95rem] tracking-[0.05em] md:text-base">
            {siteConfig.author.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "label relative flex min-h-11 items-center gap-2 px-4 transition-colors",
                      active
                        ? "text-nav-ink"
                        : "text-nav-ink/75 hover:text-nav-ink"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "text-[0.625rem]",
                        active ? "text-volt" : "text-nav-ink/40"
                      )}
                    >
                      {item.n}
                    </span>
                    {item.title}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-4 bottom-2 h-[3px] bg-volt"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="label flex min-h-11 items-center border-[3px] border-nav-ink px-4 text-nav-ink transition-colors hover:bg-nav-ink hover:text-nav md:hidden"
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div
          id="site-menu"
          className="band-surface fixed inset-0 z-[70] flex flex-col bg-band text-band-ink duration-200 animate-in fade-in md:hidden"
        >
          <div className="flex h-14 shrink-0 items-center justify-between border-b-[3px] border-band-ink/25 px-4">
            <span className="label text-band-ink/70">Menu</span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => {
                restoreFocusRef.current = true;
                setOpen(false);
              }}
              className="label flex min-h-11 items-center border-[3px] border-band-ink px-4 transition-colors hover:bg-band-ink hover:text-band"
            >
              Close
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col justify-center px-4"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li
                  key={item.title}
                  className="border-t-[3px] border-band-ink/25 first:border-t-0"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[92px] items-center justify-between gap-4 py-4"
                  >
                    <span className="display text-5xl">{item.title}</span>
                    <span className="label text-band-ink/70">{item.n}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shrink-0 border-t-[3px] border-band-ink/25 px-4 py-6">
            <p className="label text-band-ink/70">{siteConfig.author.email}</p>
          </div>
        </div>
      )}
    </header>
  );
}
