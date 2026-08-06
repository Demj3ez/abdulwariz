import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-b border-[var(--line)] bg-[var(--paper-alt)] py-24"
    >
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="section-label">Testimonials</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
            What it&apos;s like to work together.
          </h2>
          <p className="mt-3 text-sm text-[var(--ink-soft)]">
            Placeholder quotes shown for layout — swap in real client
            feedback as it comes in.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.08}>
              <div className="card-surface flex h-full flex-col bg-[var(--paper)] p-6">
                <Quote
                  className="h-5 w-5 text-[var(--green)]"
                  strokeWidth={1.75}
                />
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[var(--ink)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-[var(--line)] pt-4">
                  <p className="text-sm font-medium text-[var(--ink)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--ink-soft)]">{t.context}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
