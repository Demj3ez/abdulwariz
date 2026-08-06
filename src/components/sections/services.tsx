import { services } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Services() {
  return (
    <section id="services" className="border-b border-[var(--line)] bg-[var(--paper)] py-24">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="section-label">Services</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
            How I can help your business.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 divide-y divide-[var(--line)] border-y border-[var(--line)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="group h-full p-8 transition-colors duration-300 hover:bg-[var(--paper-alt)]">
                <span className="font-mono text-xs text-[var(--ink-soft)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-[var(--ink)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {service.description}
                </p>
                <span className="mt-4 block h-0.5 w-0 bg-[var(--green)] transition-all duration-300 group-hover:w-10" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
