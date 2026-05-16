import { useEffect, useState } from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { BookingSection } from "./components/sections/BookingSection";
import { ContactSection } from "./components/sections/ContactSection";
import { FAQSection } from "./components/sections/FAQSection";
import { HeroSection } from "./components/sections/HeroSection";
import { PackagesSection } from "./components/sections/PackagesSection";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { type SectionId, sectionIds } from "./data/translations";
import { useLanguage } from "./hooks/useLanguage";
import { scrollToSection } from "./utils/scrollToSection";

function App() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const targetId = window.location.hash.slice(1);

    if (sectionIds.includes(targetId as SectionId)) {
      window.requestAnimationFrame(() => {
        scrollToSection(targetId);
      });
    }
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const header = document.querySelector("header");
      const headerHeight = header instanceof HTMLElement ? header.getBoundingClientRect().height : 64;
      const activePoint = headerHeight + 120;
      let currentSection: SectionId = "home";

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);

        if (element && element.getBoundingClientRect().top <= activePoint) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    const requestUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div className="min-h-[100dvh] bg-ces-canvas text-ces-ink">
      <Navbar t={t} language={language} activeSection={activeSection} onLanguageChange={setLanguage} />
      <main>
        <HeroSection t={t} />
        <ServicesSection t={t} />
        <PackagesSection t={t} />
        <PortfolioSection t={t} />
        <BookingSection t={t} />
        <ContactSection t={t} />
        <FAQSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
