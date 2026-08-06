"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] py-10 text-white/60">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="focus-ring transition-colors hover:text-[var(--green)]"
          >
            <Mail className="h-4 w-4" strokeWidth={1.75} />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            className="focus-ring transition-colors hover:text-[var(--green)]"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            aria-label="GitHub"
            className="focus-ring transition-colors hover:text-[var(--green)]"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>

        <a
          href="#home"
          className="focus-ring inline-flex items-center gap-2 text-xs uppercase tracking-widest transition-colors hover:text-[var(--green)]"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.75} />
        </a>
      </div>
    </footer>
  );
}
