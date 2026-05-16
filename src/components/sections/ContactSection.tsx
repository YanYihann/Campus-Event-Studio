import type { Translation } from "../../data/translations";
import { SectionShell } from "../layout/SectionShell";
import { Badge } from "../ui/Badge";

type ContactSectionProps = {
  t: Translation;
};

export function ContactSection({ t }: ContactSectionProps) {
  return (
    <SectionShell id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro} surface="soft">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-xl bg-ces-surface-card p-6 text-ces-ink lg:min-h-full">
          <p className="display-type max-w-[14ch] text-3xl leading-none text-ces-ink">{t.brand.slogan}</p>
          <div className="mt-6 rounded-lg bg-ces-canvas p-4">
            <h3 className="text-sm font-semibold">{t.contact.hoursTitle}</h3>
            <ul className="mt-3 grid gap-2 text-sm leading-relaxed">
              {t.contact.hours.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <dl className="rounded-xl border border-ces-hairline bg-ces-canvas p-6">
          {t.contact.channels.map((channel) => (
            <div key={channel.label} className="grid gap-2 border-b border-ces-hairline py-4 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[10rem_1fr]">
              <dt>
                <Badge>{channel.label}</Badge>
              </dt>
              <dd className="text-base font-medium text-ces-ink">{channel.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionShell>
  );
}
