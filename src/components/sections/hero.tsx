"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FlowSignature } from "@/components/flow-signature";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--paper)]"
    >
      <div className="container-px mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-6"
          >
            Operations · Marketing · Automation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-[3.4rem]"
          >
            Building better businesses through operations, strategy{" "}
            <span className="text-[var(--green)]">&amp; technology.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg"
          >
            I&apos;m {profile.name}, a business operations professional
            helping organizations improve efficiency, execute projects
            successfully, scale marketing efforts, and automate business
            processes using modern technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="/resume.pdf" download>
              <Button className="gap-2">
                <Download className="h-4 w-4" strokeWidth={1.75} />
                Download Resume
              </Button>
            </a>
            <a href="#projects">
              <Button variant="secondary" className="gap-2">
                View Projects
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-widest text-[var(--ink-soft)]"
          >
            {profile.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto aspect-[6/5] w-full max-w-lg"
        >
          <div className="card-surface h-full w-full bg-[var(--paper-alt)] p-4">
            <FlowSignature />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
