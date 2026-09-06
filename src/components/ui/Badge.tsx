import type { ReactNode } from "react";
import { clsx } from "clsx";

interface BadgeProps {
  children: ReactNode;
  tone?: "black" | "white" | "red" | "green" | "purple" | "amber";
  className?: string;
}

const toneClasses = {
  black: "bg-black text-white",
  white: "bg-white text-black border border-black",
  red: "bg-[var(--color-brand-accent)] text-white",
  green: "bg-emerald-700 text-white",
  purple: "bg-[var(--color-brand-purple)] text-white",
  amber: "bg-amber-500 text-white",
};

export function Badge({ children, tone = "black", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
