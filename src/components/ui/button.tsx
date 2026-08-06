import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  asChild?: boolean;
};

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--green-strong)] hover:-translate-y-0.5",
  secondary:
    "border border-[var(--line)] text-[var(--ink)] hover:border-[var(--green)] hover:text-[var(--green)] hover:-translate-y-0.5",
  ghost: "text-[var(--ink)] hover:text-[var(--green)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
