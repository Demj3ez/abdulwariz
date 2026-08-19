import { cn } from "@/lib/utils";
import { techIcons } from "@/lib/tech-icons";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const label = typeof children === "string" ? children : undefined;
  const icon = label ? techIcons[label] : undefined;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--paper-alt)] px-3 py-1 text-xs font-medium text-[var(--ink-soft)]",
        className
      )}
    >
      {icon && (
        <svg
          viewBox="0 0 24 24"
          width={13}
          height={13}
          fill={`#${icon.hex}`}
          aria-hidden="true"
          className="shrink-0"
        >
          <path d={icon.path} />
        </svg>
      )}
      {children}
    </span>
  );
}
