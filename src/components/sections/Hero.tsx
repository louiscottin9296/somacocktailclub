import heroCocktail from "@/assets/hero-cocktail.jpg";
import thtLogo from "@/assets/tht-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const Hero = () => {
  const { language } = useLanguage();
  const text = t(language).hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCocktail} alt="Signature cocktail by SOMA Cocktail Club" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <img src={thtLogo} alt="SOMA Cocktail Club" className="w-48 md:w-64 lg:w-80 mx-auto mb-4 opacity-80" />
        <div className="w-16 h-px bg-accent mx-auto my-8" />
        <p className="font-serif italic text-xl md:text-2xl text-primary-foreground/80 mb-8">{text.tagline}</p>
        <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/80 mb-12">
          {text.subtitle}
        </p>
        <a
          href="#offers"
          className="inline-block border border-primary-foreground/50 text-primary-foreground px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-primary-foreground/10 transition-colors duration-300"
        >
          {text.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;
