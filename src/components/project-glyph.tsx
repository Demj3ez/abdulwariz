import type { ReactElement } from "react";

const paths: Record<string, ReactElement> = {
  stay: (
    <g>
      <rect x="24" y="36" width="52" height="34" rx="3" />
      <path d="M18 40 L50 18 L82 40" fill="none" />
      <line x1="42" y1="70" x2="42" y2="52" />
      <line x1="58" y1="70" x2="58" y2="52" />
    </g>
  ),
  study: (
    <g>
      <rect x="20" y="26" width="60" height="42" rx="3" fill="none" />
      <line x1="20" y1="40" x2="80" y2="40" />
      <line x1="30" y1="50" x2="55" y2="50" />
      <line x1="30" y1="58" x2="48" y2="58" />
    </g>
  ),
  flow: (
    <g>
      <circle cx="26" cy="30" r="7" />
      <circle cx="26" cy="68" r="7" />
      <circle cx="74" cy="49" r="9" fill="none" />
      <path d="M32 32 C 50 32, 50 49, 65 49" fill="none" />
      <path d="M32 66 C 50 66, 50 49, 65 49" fill="none" />
    </g>
  ),
  gbp: (
    <g>
      <path
        d="M50 20 C 34 20 22 32 22 47 C 22 64 50 82 50 82 C 50 82 78 64 78 47 C 78 32 66 20 50 20 Z"
        fill="none"
      />
      <circle cx="50" cy="47" r="9" />
    </g>
  ),
  campaign: (
    <g>
      <rect x="22" y="28" width="36" height="26" rx="2" fill="none" />
      <path d="M58 34 L78 24 L78 58 L58 48 Z" fill="none" />
      <line x1="30" y1="60" x2="30" y2="70" />
      <line x1="42" y1="60" x2="38" y2="72" />
    </g>
  ),
  ops: (
    <g>
      <circle cx="38" cy="42" r="14" fill="none" />
      <circle cx="66" cy="60" r="10" fill="none" />
      <rect x="32" y="36" width="12" height="12" />
      <path d="M50 46 L58 56" fill="none" />
    </g>
  ),
};

export function ProjectGlyph({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 100 100" className="h-16 w-16">
      <g
        stroke="var(--green)"
        strokeWidth={2.2}
        fill="var(--green)"
        fillOpacity={0.12}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[type] ?? paths.ops}
      </g>
    </svg>
  );
}
