import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { ProjectGlyph } from "@/components/project-glyph";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Nav />
      <main className="bg-[var(--paper)]">
        <section className="border-b border-[var(--line)] py-16 lg:py-20">
          <div className="container-px mx-auto max-w-4xl">
            <Reveal>
              <Link
                href="/#projects"
                className="focus-ring inline-flex items-center gap-2 text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--green)]"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                All projects
              </Link>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--green-tint)]">
                  <ProjectGlyph type={project.cover} />
                </div>
                <div>
                  <span className="section-label">{project.category}</span>
                  <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
                    {project.title}
                  </h1>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container-px mx-auto grid max-w-4xl gap-14">
            <Reveal>
              <span className="section-label">Problem</span>
              <p className="mt-3 text-lg leading-relaxed text-[var(--ink)]">
                {project.problem}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <span className="section-label">Challenges</span>
              <ul className="mt-4 space-y-3">
                {project.challenges.map((c) => (
                  <li key={c} className="flex gap-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--green)]" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <span className="section-label">Approach</span>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                {project.approach}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <span className="section-label">Process</span>
              <ol className="mt-4 space-y-4">
                {project.process.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-mono text-sm text-[var(--green)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-relaxed text-[var(--ink-soft)]">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.2}>
              <span className="section-label">Results</span>
              <ul className="mt-4 space-y-3">
                {project.results.map((r) => (
                  <li key={r} className="flex gap-3 text-[15px] leading-relaxed text-[var(--ink)]">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[var(--green)]"
                      strokeWidth={1.75}
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.25} className="card-surface bg-[var(--paper-alt)] p-6">
              <span className="section-label">Lessons learned</span>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink)]">
                {project.lessons}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-[var(--line)] bg-[var(--paper-alt)] py-12">
          <div className="container-px mx-auto flex max-w-4xl items-center justify-between">
            <span className="section-label">Next case study</span>
            <Link
              href={`/projects/${next.slug}`}
              className="focus-ring group flex items-center gap-2 text-lg font-semibold text-[var(--ink)] transition-colors hover:text-[var(--green)]"
            >
              {next.title}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
