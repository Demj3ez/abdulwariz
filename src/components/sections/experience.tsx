import { experience, education } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section id="experience" className="border-b border-[var(--line)] bg-[var(--paper)] py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="section-label">Experience</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
            Where the work has happened.
          </h2>
        </Reveal>

        <div className="relative mt-14 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--line)]"
          />
          <div className="space-y-14">
            {experience.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.08} className="relative pl-10">
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--green)] bg-[var(--paper)]"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-[var(--ink)]">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--green)]">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--ink-soft)]">
                  {job.org}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                  {job.summary}
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-[var(--ink-soft)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--green)]" />
                      {point}
                    </li>
                  ))}
                </ul>
                {job.achievements.length > 0 && (
                  <div className="mt-4 rounded-xl border border-dashed border-[var(--line)] p-4">
                    <p className="section-label mb-2">Key achievements</p>
                    <ul className="space-y-1.5">
                      {job.achievements.map((a) => (
                        <li
                          key={a}
                          className="text-sm leading-relaxed text-[var(--ink)]"
                        >
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 max-w-3xl border-t border-[var(--line)] pt-10">
          <span className="section-label">Education</span>
          <div className="mt-6 space-y-6">
            {education.map((ed) => (
              <div
                key={ed.degree}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
              >
                <div>
                  <p className="text-sm font-medium text-[var(--ink)]">
                    {ed.degree}
                  </p>
                  <p className="text-sm text-[var(--ink-soft)]">{ed.school}</p>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink-soft)]">
                  {ed.period}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
