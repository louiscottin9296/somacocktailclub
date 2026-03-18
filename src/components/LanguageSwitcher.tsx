import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const LIGHT_SECTION_SELECTORS = [
  "section.about-section",
  "#offers",
  "section.gallery-section",
  "section.events-section",
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const checkOverlap = () => {
      const switcherY = 40; // approx vertical center of the fixed switcher
      const lightSections = document.querySelectorAll(
        LIGHT_SECTION_SELECTORS.join(", ")
      );
      let isOnLight = false;
      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= switcherY && rect.bottom >= switcherY) {
          isOnLight = true;
        }
      });
      setOnLight(isOnLight);
    };

    window.addEventListener("scroll", checkOverlap, { passive: true });
    checkOverlap();
    return () => window.removeEventListener("scroll", checkOverlap);
  }, []);

  const base = onLight ? "text-foreground" : "text-primary-foreground";
  const dimmed = onLight
    ? "text-foreground/40 hover:text-foreground/70"
    : "text-primary-foreground/40 hover:text-primary-foreground/70";
  const separator = onLight ? "text-foreground/30" : "text-primary-foreground/30";

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1 font-sans text-xs tracking-[0.15em] uppercase">
      {(["en", "de", "fr"] as const).map((lang, i) => (
        <span key={lang} className="flex items-center">
          {i > 0 && <span className={separator}>|</span>}
          <button
            onClick={() => setLanguage(lang)}
            className={`px-2 py-1 transition-colors duration-200 ${
              language === lang ? base : dimmed
            }`}
          >
            {lang.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
