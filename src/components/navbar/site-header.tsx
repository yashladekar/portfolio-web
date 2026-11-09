"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme-toggle";

const navItems = [
  { title: "about", href: "/about" },
  { title: "projects", href: "/projects" },
  { title: "contact", href: `mailto:${siteConfig.author.email}` },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto grid h-14 w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 md:h-16 md:px-10">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${siteConfig.author.name} — home`}
        >
          <span
            aria-hidden="true"
            className="size-2 bg-signal transition-transform duration-500 group-hover:rotate-45"
          />
          <span className="font-display text-[0.95rem] font-semibold tracking-tight">
            {siteConfig.author.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden justify-self-center md:block">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "label inline-flex items-baseline transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "text-signal transition-opacity",
                        isActive ? "opacity-100" : "opacity-45"
                      )}
                    >
                      /
                    </span>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <ThemeToggle />
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="label border border-border px-3 py-2 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground md:hidden"
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div
          id="site-menu"
          className="fixed inset-0 z-[70] flex flex-col bg-background duration-300 animate-in fade-in md:hidden"
        >
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-5">
            <span className="label text-muted-foreground">Menu</span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              className="label border border-border px-3 py-2 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              Close
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col justify-center px-5"
          >
            <ul className="flex flex-col gap-7">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-3"
                  >
                    <span aria-hidden="true" className="font-mono text-base text-signal">
                      /
                    </span>
                    <span className="font-display text-4xl font-semibold tracking-tight">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-border px-5 py-5">
            <p className="label text-muted-foreground">
              {siteConfig.author.email}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
