import { useState } from "react";
import type { Translation } from "../../data/translations";
import { SectionShell } from "../layout/SectionShell";

type FAQSectionProps = {
  t: Translation;
};

export function FAQSection({ t }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionShell id="faq" eyebrow={t.faq.eyebrow} title={t.faq.title} align="stack">
      <div className="mx-auto grid max-w-[900px] gap-3">
        {t.faq.items.map((item, index) => {
          const open = openIndex === index;
          const panelId = `faq-panel-${index}`;
          return (
            <article key={item.question} className="rounded-xl border border-ces-hairline bg-ces-canvas">
              <button
                type="button"
                className="focus-ring flex w-full items-center justify-between gap-5 rounded-xl px-5 py-4 text-left active:translate-y-px"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span className="text-base font-semibold text-ces-ink">{item.question}</span>
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-ces-hairline text-ces-muted">
                  {open ? "-" : "+"}
                </span>
              </button>
              <div
                id={panelId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ces-body">{item.answer}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
