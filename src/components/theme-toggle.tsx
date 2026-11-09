"use client";

import { useTheme } from "next-themes";

import { Icons } from "@/components/icons/icons";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="label flex items-center gap-2 border border-border px-3 py-2 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
    >
      <Icons.Moon className="size-3.5 dark:hidden" />
      <Icons.Sun className="hidden size-3.5 dark:block" />
      <span className="hidden sm:inline">
        <span className="dark:hidden">Dark</span>
        <span className="hidden dark:inline">Light</span>
      </span>
    </button>
  );
}
