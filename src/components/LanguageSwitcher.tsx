import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1 font-sans text-xs tracking-[0.15em] uppercase">
      {(["en", "de", "fr"] as const).map((lang, i) => (
        <span key={lang} className="flex items-center">
          {i > 0 && <span className="text-primary-foreground/30">|</span>}
          <button
            onClick={() => setLanguage(lang)}
            className={`px-2 py-1 transition-colors duration-200 ${
              language === lang
                ? "text-primary-foreground"
                : "text-primary-foreground/40 hover:text-primary-foreground/70"
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
