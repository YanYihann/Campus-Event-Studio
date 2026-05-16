import { type Language, translations } from "../../data/translations";

type LanguageSwitcherProps = {
  language: Language;
  onChange: (language: Language) => void;
  label: string;
};

export function LanguageSwitcher({ language, onChange, label }: LanguageSwitcherProps) {
  const languages: Language[] = ["en", "zh"];

  return (
    <div aria-label={label} className="inline-flex rounded-md border border-ces-hairline bg-ces-canvas p-1">
      {languages.map((item) => {
        const active = item === language;
        return (
          <button
            key={item}
            type="button"
            className={`focus-ring fluid-link rounded-[6px] px-3 py-2 text-sm font-medium active:translate-y-px ${
              active ? "bg-ces-surface-card text-ces-ink" : "text-ces-muted hover:text-ces-ink"
            }`}
            aria-pressed={active}
            onClick={() => onChange(item)}
          >
            {translations[item].meta.languageName}
          </button>
        );
      })}
    </div>
  );
}
