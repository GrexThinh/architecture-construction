"use client";

import { useEffect, useState } from "react";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10"
    >
      <span
        className="i-mdi-white-balance-sunny hidden dark:inline"
        aria-hidden
      />
      <span
        className="i-mdi-moon-waning-crescent inline dark:hidden"
        aria-hidden
      />
      {theme === "light" ? "Dark" : "Light"} mode
    </button>
  );
}
