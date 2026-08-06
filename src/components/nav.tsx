"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { nav } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[var(--line)] bg-[var(--paper)]/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a
          href="#home"
          className="focus-ring font-mono text-sm font-semibold tracking-tight text-[var(--ink)]"
        >
          AY<span className="text-[var(--green)]">.</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--green)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href="/resume.pdf" download>
            <Button size="sm" variant="secondary" className="gap-2">
              <Download className="h-3.5 w-3.5" strokeWidth={1.75} />
              Download CV
            </Button>
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)]"
          >
            {open ? (
              <X className="h-4 w-4" strokeWidth={1.75} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[var(--line)] bg-[var(--paper)] px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--green)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
