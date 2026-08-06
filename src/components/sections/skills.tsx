import { Cog, LineChart, Megaphone, Workflow } from "lucide-react";
import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

const icons = [LineChart, Megaphone, Cog, Workflow];

export function Skills() {
  return (
    <section id="skills" className="border-b border-[var(--line)] bg-[var(--paper-alt)] py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="section-label">Skills</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
            A toolkit built for execution, not just theory.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={group.category} delay={i * 0.08}>
                <div className="card-surface flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--green)]">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--green-tint)] text-[var(--green)]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--ink)]">
                    {group.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
