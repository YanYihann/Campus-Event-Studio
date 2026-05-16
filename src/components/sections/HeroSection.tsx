import type { Translation } from "../../data/translations";
import { Badge } from "../ui/Badge";

type HeroSectionProps = {
  t: Translation;
};

export function HeroSection({ t }: HeroSectionProps) {
  const titleLines = t.home.title.split(/,\s*|，/).filter(Boolean);
  const backgroundUrl = `${import.meta.env.BASE_URL}images/home-campus-bg.png`;

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100dvh-4rem)] scroll-mt-24 items-center overflow-hidden px-4 py-16 md:px-8 md:py-24"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-[0.18]"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-ces-canvas/78" aria-hidden="true" />
      <div className="content-shell relative">
        <Badge>{t.home.eyebrow}</Badge>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-ces-primary">{t.brand.name}</p>
        <h1 className="display-type mt-4 max-w-[980px] text-5xl leading-[1.02] md:text-6xl lg:text-7xl">
          {titleLines.length > 1
            ? titleLines.map((line) => (
                <span key={line} className="block">
                  {line.trim()}
                </span>
              ))
            : t.home.title}
        </h1>
      </div>
    </section>
  );
}
