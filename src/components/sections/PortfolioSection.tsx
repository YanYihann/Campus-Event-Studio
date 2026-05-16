import { useMemo, useState } from "react";
import type { Translation } from "../../data/translations";
import { SectionShell } from "../layout/SectionShell";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

type PortfolioSectionProps = {
  t: Translation;
};

type PortfolioFilter = keyof Translation["portfolio"]["filters"];

export function PortfolioSection({ t }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<PortfolioFilter>("all");
  const filters = Object.entries(t.portfolio.filters) as [PortfolioFilter, string][];

  const cases = useMemo(() => {
    if (filter === "all") {
      return t.portfolio.cases;
    }

    return t.portfolio.cases.filter((item) => item.category === filter);
  }, [filter, t.portfolio.cases]);

  return (
    <SectionShell id="portfolio" eyebrow={t.portfolio.eyebrow} title={t.portfolio.title} intro={t.portfolio.intro} surface="soft" align="stack">
      <div className="flex flex-wrap gap-2">
        {filters.map(([key, label]) => {
          const active = key === filter;
          return (
            <button
              key={key}
              type="button"
              className={`focus-ring fluid-link rounded-md px-4 py-2 text-sm font-medium active:translate-y-px ${
                active ? "bg-ces-primary text-ces-on-primary" : "border border-ces-hairline bg-ces-canvas text-ces-muted hover:text-ces-ink"
              }`}
              aria-pressed={active}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          );
        })}
      </div>

      {cases.length === 0 ? (
        <div className="mt-6 rounded-xl border border-ces-hairline bg-ces-canvas p-6 text-ces-body">
          {t.portfolio.empty}
        </div>
      ) : (
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {cases.map((item) => (
            <article
              key={item.title}
              className="case-sheet rounded-xl border border-ces-hairline bg-ces-canvas p-6 transition-colors duration-300 hover:bg-ces-surface-card"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <Badge>{t.portfolio.filters[item.category]}</Badge>
                  <h3 className="display-type mt-5 text-3xl leading-[1.08] text-ces-ink">{item.title}</h3>
                </div>
                <span className="rounded-full bg-ces-surface-card px-3 py-1 font-mono text-xs text-ces-muted">{item.budget}</span>
              </div>

              <dl className="mt-6 grid gap-5 text-sm">
                <div>
                  <dt className="font-medium text-ces-ink">{t.portfolio.contextLabel}</dt>
                  <dd className="mt-2 leading-relaxed text-ces-body">{item.context}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ces-ink">{t.portfolio.outcomeLabel}</dt>
                  <dd className="mt-2 leading-relaxed text-ces-body">{item.outcome}</dd>
                </div>
                <div className="grid gap-4 border-t border-ces-hairline pt-5 sm:grid-cols-3">
                  <div>
                    <dt className="font-medium text-ces-ink">{t.portfolio.clientLabel}</dt>
                    <dd className="mt-1 text-ces-body">{item.client}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ces-ink">{t.portfolio.packageLabel}</dt>
                    <dd className="mt-1 text-ces-body">{item.packageFit}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ces-ink">{t.portfolio.serviceLabel}</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {item.services.slice(0, 3).map((service) => (
                        <span key={service} className="rounded-full bg-ces-surface-card px-3 py-1 text-xs text-ces-body">
                          {service}
                        </span>
                      ))}
                    </dd>
                  </div>
                </div>
              </dl>
            </article>
          ))}
        </div>
      )}

      <div className="mt-10 rounded-xl bg-ces-primary p-6 text-ces-on-primary md:flex md:items-center md:justify-between md:gap-8">
        <p className="display-type max-w-[16ch] text-3xl leading-none text-ces-on-primary">{t.portfolio.cta}</p>
        <Button href="#booking" variant="secondary" className="mt-6 md:mt-0">
          {t.nav.cta}
        </Button>
      </div>
    </SectionShell>
  );
}
