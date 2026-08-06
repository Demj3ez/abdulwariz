"use client";

import { motion } from "framer-motion";

const nodes = [
  { key: "strategy", label: "Strategy", cx: 60, cy: 200 },
  { key: "operations", label: "Operations", cx: 240, cy: 90 },
  { key: "marketing", label: "Marketing", cx: 240, cy: 310 },
  { key: "automation", label: "Automation", cx: 420, cy: 200 },
];

const links: [string, string][] = [
  ["strategy", "operations"],
  ["strategy", "marketing"],
  ["operations", "automation"],
  ["marketing", "automation"],
];

function getNode(key: string) {
  return nodes.find((n) => n.key === key)!;
}

export function FlowSignature() {
  return (
    <svg
      viewBox="0 0 480 400"
      className="h-full w-full"
      role="img"
      aria-label="Diagram showing strategy and marketing flowing into operations, converging into automation"
    >
      <defs>
        <linearGradient id="thread" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--green)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--green)" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {links.map(([a, b], i) => {
        const from = getNode(a);
        const to = getNode(b);
        const midX = (from.cx + to.cx) / 2;
        const path = `M ${from.cx} ${from.cy} C ${midX} ${from.cy}, ${midX} ${to.cy}, ${to.cx} ${to.cy}`;
        return (
          <g key={`${a}-${b}`}>
            <path
              d={path}
              fill="none"
              stroke="var(--line)"
              strokeWidth={1.5}
            />
            <motion.path
              d={path}
              fill="none"
              stroke="url(#thread)"
              strokeWidth={2}
              strokeDasharray="6 10"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -160 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3,
              }}
            />
          </g>
        );
      })}

      {nodes.map((n, i) => (
        <g key={n.key}>
          <motion.circle
            cx={n.cx}
            cy={n.cy}
            r={n.key === "automation" ? 30 : 24}
            fill="var(--paper)"
            stroke={n.key === "automation" ? "var(--green)" : "var(--line)"}
            strokeWidth={n.key === "automation" ? 2 : 1.5}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          />
          {n.key === "automation" && (
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r={30}
              fill="none"
              stroke="var(--green)"
              strokeWidth={1}
              initial={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: 0, scale: 1.6 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
          )}
          <text
            x={n.cx}
            y={n.cy + (n.key === "automation" ? 50 : 44)}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="11"
            letterSpacing="0.06em"
            fill="var(--ink-soft)"
          >
            {n.label.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );
}
