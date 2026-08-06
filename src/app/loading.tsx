export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--paper)]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 animate-ping rounded-full border-2 border-[var(--green)] opacity-40" />
          <div className="absolute inset-0 rounded-full border-2 border-[var(--line)] border-t-[var(--green)] animate-spin" />
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--ink-soft)]">
          Loading
        </p>
      </div>
    </div>
  );
}
