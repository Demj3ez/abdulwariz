"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { profile, stats } from "@/lib/data";
import { Reveal } from "@/components/reveal";

function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return;
    let frame: number;
    const duration = 900;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(numeric * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="card-surface p-6"
    >
      <div className="font-mono text-3xl font-semibold text-[var(--green)]">
        {Number.isNaN(numeric) ? value : `${count}${suffix}`}
      </div>
      <div className="mt-2 text-sm text-[var(--ink-soft)]">{label}</div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="border-b border-[var(--line)] bg-[var(--paper)] py-24">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="section-label">About</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
              I bridge business strategy with technology.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--ink-soft)]">
              {profile.tagline}
            </p>
          </Reveal>

          <div>
            <Reveal>
              <div className="space-y-5 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                {profile.bio.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <AnimatedStat key={s.label} value={s.value} label={s.label} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
