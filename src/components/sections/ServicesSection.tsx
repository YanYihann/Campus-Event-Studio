import type { Translation } from "../../data/translations";
import { SectionShell } from "../layout/SectionShell";

type ServicesSectionProps = {
  t: Translation;
};

export function ServicesSection({ t }: ServicesSectionProps) {
  return (
    <SectionShell id="services" eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} surface="soft">
      <div className="rounded-2xl border border-ces-hairline bg-ces-canvas p-5 md:p-8">
        <ol className="grid gap-0">
          {t.services.workflow.map((step, index) => (
            <ServiceStep key={step.title} step={step} isLast={index === t.services.workflow.length - 1} />
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

type ServiceStepProps = {
  step: Translation["services"]["workflow"][number];
  isLast: boolean;
};

function ServiceStep({ step, isLast }: ServiceStepProps) {
  return (
    <li className="grid gap-5 md:grid-cols-[8rem_minmax(0,1fr)]">
      <div className="relative pb-8 md:pb-10">
        <span className="grid size-12 place-items-center rounded-full bg-ces-surface-dark font-mono text-sm text-ces-on-dark">{step.step}</span>
        {!isLast ? <span className="absolute bottom-0 left-6 top-14 w-px bg-ces-hairline" /> : null}
      </div>
      <article className="border-b border-ces-hairline pb-8 pt-2 md:pb-10 md:pt-3">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.64fr)_minmax(260px,0.36fr)]">
          <div>
            <h3 className="display-type text-3xl leading-[1.08] text-ces-ink">{step.title}</h3>
            <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-ces-body">{step.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 self-start lg:pt-1">
            {step.services.map((service) => (
              <span key={service} className="rounded-full bg-ces-surface-card px-3 py-1 text-xs font-medium text-ces-body">
                {service}
              </span>
            ))}
          </div>
        </div>
      </article>
    </li>
  );
}
