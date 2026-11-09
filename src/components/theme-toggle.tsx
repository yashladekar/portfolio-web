"use client";

import { useTheme } from "next-themes";

import { Icons } from "@/components/icons/icons";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="label flex min-h-11 min-w-11 items-center justify-center gap-2 border-[3px] border-nav-ink px-3 text-nav-ink transition-colors hover:bg-nav-ink hover:text-nav sm:px-4"
    >
      <Icons.Moon className="size-4 dark:hidden" />
      <Icons.Sun className="hidden size-4 dark:block" />
      <span className="sr-only">Toggle colour theme</span>
      <span aria-hidden="true" className="hidden sm:inline">
        <span className="dark:hidden">Dark</span>
        <span className="hidden dark:inline">Light</span>
      </span>
    </button>
  );
}
