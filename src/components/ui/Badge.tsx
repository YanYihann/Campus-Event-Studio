import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "cream" | "coral" | "dark";
};

export function Badge({ children, tone = "cream" }: BadgeProps) {
  const classes = {
    cream: "bg-ces-surface-card text-ces-ink",
    coral: "bg-ces-primary text-ces-on-primary",
    dark: "bg-ces-surface-dark-elevated text-ces-on-dark",
  };

  return <span className={`inline-flex rounded-full px-3 py-1 text-[13px] font-medium ${classes[tone]}`}>{children}</span>;
}
