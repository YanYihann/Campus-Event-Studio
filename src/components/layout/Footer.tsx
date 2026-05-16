import type { Translation } from "../../data/translations";
import { scrollToSection } from "../../utils/scrollToSection";

type FooterProps = {
  t: Translation;
};

export function Footer({ t }: FooterProps) {
  const serviceLinks = t.services.groups.flatMap((group) => group.items.map((item) => item.title));

  return (
    <footer className="bg-ces-surface-dark px-4 py-16 text-ces-on-dark-soft md:px-8">
      <div className="content-shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-ces-on-dark text-xs font-semibold text-ces-surface-dark">
                {t.brand.shortName}
              </span>
              <span className="text-base font-semibold text-ces-on-dark">{t.brand.name}</span>
            </div>
            <p className="mt-5 max-w-[34ch] text-sm leading-relaxed">{t.brand.description}</p>
            <p className="display-type mt-8 max-w-[12ch] text-3xl leading-none text-ces-on-dark">{t.brand.slogan}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ces-on-dark">{t.footer.quickLinks}</h2>
            <ul className="mt-4 grid gap-3 text-sm">
              {t.nav.items.map((item) => (
                <li key={item.id}>
                  <a
                    className="focus-ring fluid-link rounded-sm hover:text-ces-on-dark"
                    href={`#${item.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ces-on-dark">{t.footer.services}</h2>
            <ul className="mt-4 grid gap-3 text-sm">
              {serviceLinks.slice(0, 6).map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ces-on-dark">{t.footer.contact}</h2>
            <ul className="mt-4 grid gap-3 text-sm">
              {t.contact.channels.map((channel) => (
                <li key={channel.label}>
                  <span className="block text-ces-on-dark">{channel.label}</span>
                  <span>{channel.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ces-surface-dark-elevated pt-6 text-sm">{t.footer.copyright}</div>
      </div>
    </footer>
  );
}
