import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { ProjectGlyph } from "@/components/project-glyph";

export function Projects() {
  return (
    <section id="projects" className="border-b border-[var(--line)] bg-[var(--paper-alt)] py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="section-label">Featured Projects</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
            Selected work across operations, marketing, and automation.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <Link
                href={`/projects/${project.slug}`}
                className="focus-ring group card-surface flex h-full flex-col overflow-hidden bg-[var(--paper)] transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--green)]"
              >
                <div className="flex aspect-[16/10] items-center justify-center bg-[var(--green-tint)]">
                  <ProjectGlyph type={project.cover} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="section-label">{project.category}</span>
                  <h3 className="mt-2 flex items-center gap-1.5 text-lg font-semibold text-[var(--ink)]">
                    {project.title}
                    <ArrowUpRight
                      className="h-4 w-4 text-[var(--ink-soft)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--green)]"
                      strokeWidth={1.75}
                    />
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
