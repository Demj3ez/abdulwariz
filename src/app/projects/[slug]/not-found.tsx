import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[var(--paper)] px-6 text-center">
        <span className="font-mono text-sm text-[var(--green)]">404</span>
        <h1 className="mt-3 text-2xl font-semibold text-[var(--ink)]">
          This case study doesn&apos;t exist.
        </h1>
        <p className="mt-2 max-w-sm text-sm text-[var(--ink-soft)]">
          The project you&apos;re looking for may have moved or hasn&apos;t
          been published yet.
        </p>
        <Link
          href="/#projects"
          className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--green)]"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          Back to projects
        </Link>
      </main>
      <Footer />
    </>
  );
}
