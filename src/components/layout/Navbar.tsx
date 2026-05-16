import { type MouseEvent, useState } from "react";
import type { Language, SectionId, Translation } from "../../data/translations";
import { scrollToSection } from "../../utils/scrollToSection";
import { Button } from "../ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

type NavbarProps = {
  t: Translation;
  language: Language;
  activeSection: SectionId;
  onLanguageChange: (language: Language) => void;
};

export function Navbar({ t, language, activeSection, onLanguageChange }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    event.preventDefault();
    closeMenu();
    scrollToSection(id);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-ces-hairline bg-ces-canvas">
      <nav className="content-shell flex min-h-16 items-center justify-between gap-5 px-4 md:px-8" aria-label={t.brand.name}>
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-md py-2" onClick={(event) => navigateToSection(event, "home")}>
          <span className="grid size-8 place-items-center rounded-full bg-ces-ink text-xs font-semibold text-ces-on-dark">
            {t.brand.shortName}
          </span>
          <span className="text-sm font-semibold tracking-tight text-ces-ink md:text-base">{t.brand.name}</span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {t.nav.items.map((item) => {
            const active = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`focus-ring fluid-link rounded-md px-3 py-2 text-sm font-medium ${
                  active ? "bg-ces-surface-card text-ces-ink" : "text-ces-muted hover:text-ces-ink"
                }`}
                onClick={(event) => navigateToSection(event, item.id)}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher language={language} onChange={onLanguageChange} label={t.nav.languageLabel} />
          <Button href="#booking">{t.nav.cta}</Button>
        </div>

        <button
          type="button"
          className="focus-ring fluid-link grid size-10 place-items-center rounded-md border border-ces-hairline bg-ces-canvas text-ces-ink active:translate-y-px xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-1 block h-px w-5 bg-current transition-transform duration-300 ${
                open ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-1 left-0 block h-px w-5 bg-current transition-transform duration-300 ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`xl:hidden ${open ? "block" : "hidden"} border-t border-ces-hairline bg-ces-canvas px-4 pb-5 pt-2 md:px-8`}
      >
        <div className="content-shell grid gap-4">
          <div className="grid gap-1">
            {t.nav.items.map((item) => {
              const active = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`focus-ring fluid-link rounded-md px-3 py-3 text-base font-medium ${
                    active ? "bg-ces-surface-card text-ces-ink" : "text-ces-muted hover:text-ces-ink"
                  }`}
                  onClick={(event) => navigateToSection(event, item.id)}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 border-t border-ces-hairline pt-4 sm:flex-row sm:items-center sm:justify-between">
            <LanguageSwitcher language={language} onChange={onLanguageChange} label={t.nav.languageLabel} />
            <Button href="#booking" onClick={closeMenu}>
              {t.nav.cta}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
