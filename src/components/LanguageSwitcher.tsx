import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1 font-sans text-xs tracking-[0.15em] uppercase">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 transition-colors duration-200 ${
          language === "en"
            ? "text-primary-foreground"
            : "text-primary-foreground/40 hover:text-primary-foreground/70"
        }`}
      >
        EN
      </button>
      <span className="text-primary-foreground/30">|</span>
      <button
        onClick={() => setLanguage("de")}
        className={`px-2 py-1 transition-colors duration-200 ${
          language === "de"
            ? "text-primary-foreground"
            : "text-primary-foreground/40 hover:text-primary-foreground/70"
        }`}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
