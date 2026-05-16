import type { Translation } from "../../data/translations";
import { SectionShell } from "../layout/SectionShell";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

type PackagesSectionProps = {
  t: Translation;
};

export function PackagesSection({ t }: PackagesSectionProps) {
  return (
    <SectionShell id="packages" eyebrow={t.packages.eyebrow} title={t.packages.title} intro={t.packages.intro} align="stack">
      <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
        {t.packages.tiers.map((tier) => {
          const featured = tier.featured;
          return (
            <article
              key={tier.name}
              className={`flex min-h-full flex-col rounded-xl border p-6 ${
                featured
                  ? "border-ces-surface-dark bg-ces-surface-dark text-ces-on-dark"
                  : "border-ces-hairline bg-ces-canvas text-ces-ink"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge tone={featured ? "coral" : "cream"}>{featured ? t.packages.recommended : tier.label}</Badge>
              </div>
              <h3 className={`display-type mt-5 text-3xl leading-[1.08] md:text-4xl ${featured ? "text-ces-on-dark" : "text-ces-ink"}`}>
                {tier.name}
              </h3>
              <p className={`mt-3 text-2xl ${featured ? "text-ces-on-dark" : "text-ces-body-strong"}`}>{tier.price}</p>
              <div className={`mt-5 rounded-lg p-4 ${featured ? "bg-ces-surface-dark-soft" : "bg-ces-surface-card"}`}>
                <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${featured ? "text-ces-on-dark-soft" : "text-ces-muted"}`}>
                  {tier.label}
                </p>
                <p className={`mt-2 text-sm leading-relaxed ${featured ? "text-ces-on-dark" : "text-ces-body-strong"}`}>
                  {tier.suitedFor}
                </p>
              </div>
              <p className={`mt-5 text-sm leading-relaxed ${featured ? "text-ces-on-dark-soft" : "text-ces-body"}`}>
                {tier.description}
              </p>
              <ul className={`mt-6 grid gap-3 text-sm ${featured ? "text-ces-on-dark" : "text-ces-body"}`}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className={`mt-2 size-1.5 rounded-full ${featured ? "bg-ces-primary" : "bg-ces-ink"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full" href="#booking" variant={featured ? "dark" : "primary"}>
                {t.packages.cta}
              </Button>
            </article>
          );
        })}
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
        <article className="rounded-xl bg-ces-primary p-6 text-ces-on-primary">
          <h3 className="display-type text-3xl leading-none text-ces-on-primary">{t.packages.customQuoteTitle}</h3>
          <p className="mt-4 text-sm leading-relaxed">{t.packages.customQuote}</p>
        </article>
        <article className="flex flex-col justify-between gap-5 rounded-xl border border-ces-hairline bg-ces-canvas p-6 md:flex-row md:items-center">
          <p className="max-w-[58ch] text-sm leading-relaxed text-ces-body">{t.packages.pricingNote}</p>
          <Button href="#booking" className="shrink-0">
            {t.packages.cta}
          </Button>
        </article>
      </div>
    </SectionShell>
  );
}
