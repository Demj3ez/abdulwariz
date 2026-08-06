"use client";

import { Download, FileText } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  return (
    <section id="resume" className="border-b border-[var(--line)] bg-[var(--paper)] py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="section-label">Resume</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
              Full CV, one click away.
            </h2>
          </div>
          <a href="/resume.pdf" download>
            <Button variant="secondary" className="gap-2">
              <Download className="h-4 w-4" strokeWidth={1.75} />
              Download PDF
            </Button>
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="card-surface overflow-hidden bg-[var(--paper-alt)]">
            <div className="flex items-center gap-2 border-b border-[var(--line)] px-5 py-3">
              <FileText
                className="h-4 w-4 text-[var(--green)]"
                strokeWidth={1.75}
              />
              <span className="font-mono text-xs text-[var(--ink-soft)]">
                resume.pdf
              </span>
            </div>
            <object
              data="/resume.pdf#toolbar=0"
              type="application/pdf"
              className="h-[70vh] w-full"
              aria-label="Abdulwariz Yusuff resume preview"
            >
              <div className="flex h-[40vh] items-center justify-center p-8 text-center text-sm text-[var(--ink-soft)]">
                Your browser can&apos;t preview PDFs inline.{" "}
                <a
                  href="/resume.pdf"
                  className="ml-1 text-[var(--green)] underline"
                >
                  Open the resume directly
                </a>
                .
              </div>
            </object>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
