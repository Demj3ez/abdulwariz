"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = encodeURIComponent(String(formData.get("name") ?? ""));
    const email = encodeURIComponent(String(formData.get("email") ?? ""));
    const message = encodeURIComponent(String(formData.get("message") ?? ""));
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.get("name")}`);
    const body = `${message}%0D%0A%0D%0AFrom: ${name} (${email})`;
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="bg-[var(--ink)] py-24 text-[var(--paper)]">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--green)]">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build better systems together.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">
            Have a project, a broken process, or a workflow that&apos;s
            eating your team&apos;s time? Tell me about it.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <a
                href={`mailto:${profile.email}`}
                className="focus-ring flex items-center gap-4 rounded-xl border border-white/10 p-4 transition-colors hover:border-[var(--green)]"
              >
                <Mail className="h-5 w-5 text-[var(--green)]" strokeWidth={1.75} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Email
                  </p>
                  <p className="text-sm">{profile.email}</p>
                </div>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="focus-ring flex items-center gap-4 rounded-xl border border-white/10 p-4 transition-colors hover:border-[var(--green)]"
              >
                <Phone className="h-5 w-5 text-[var(--green)]" strokeWidth={1.75} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Phone
                  </p>
                  <p className="text-sm">{profile.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 p-4">
                <MapPin className="h-5 w-5 text-[var(--green)]" strokeWidth={1.75} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Location
                  </p>
                  <p className="text-sm">{profile.location}</p>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href={profile.linkedin}
                  aria-label="LinkedIn"
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-[var(--green)] hover:text-[var(--green)]"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href={profile.github}
                  aria-label="GitHub"
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-[var(--green)] hover:text-[var(--green)]"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-white/40">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="focus-ring w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/30"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-white/40">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="focus-ring w-full rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/30"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-white/40">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="focus-ring w-full resize-none rounded-lg border border-white/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/30"
                  placeholder="What are you working on?"
                />
              </div>
              <Button
                type="submit"
                className="gap-2 bg-[var(--green)] text-[var(--ink)] hover:bg-[var(--paper)]"
              >
                Send message
                <Send className="h-4 w-4" strokeWidth={1.75} />
              </Button>
              {status === "sent" && (
                <p className="text-xs text-white/50">
                  Opening your email client with this message pre-filled.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
