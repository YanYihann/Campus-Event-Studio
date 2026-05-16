import type { ReactNode } from "react";
import { Badge } from "../ui/Badge";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  surface?: "canvas" | "soft" | "dark";
  align?: "split" | "stack";
};

export function SectionShell({ id, eyebrow, title, intro, children, surface = "canvas" }: SectionShellProps) {
  const surfaceClasses = {
    canvas: "bg-transparent text-ces-ink",
    soft: "bg-ces-surface-soft text-ces-ink",
    dark: "bg-ces-surface-dark text-ces-on-dark",
  };

  const titleClasses = surface === "dark" ? "text-ces-on-dark" : "text-ces-ink";
  const introClasses = surface === "dark" ? "text-ces-on-dark-soft" : "text-ces-body";

  return (
    <section id={id} className={`section-pad scroll-mt-24 ${surfaceClasses[surface]}`}>
      <div className="content-shell">
        <div className="grid gap-10">
          <div className="min-w-0">
            <Badge tone={surface === "dark" ? "dark" : "cream"}>{eyebrow}</Badge>
            <h2 className={`display-type mt-5 max-w-[820px] text-4xl leading-[1.08] md:text-5xl ${titleClasses}`}>{title}</h2>
            {intro ? <p className={`mt-5 max-w-[65ch] text-base leading-relaxed ${introClasses}`}>{intro}</p> : null}
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
