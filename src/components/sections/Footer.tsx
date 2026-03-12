import thtLogo from "@/assets/tht-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const Footer = () => {
  const { language } = useLanguage();
  const text = t(language).footer;

  return (
    <footer className="py-16" style={{ backgroundColor: '#5B5E4B' }}>
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <img src={thtLogo} alt="SOMA Cocktail Club" className="w-36 md:w-48 mx-auto opacity-80" />
          </div>
          <p className="font-serif italic text-xl text-primary-foreground/80 mb-6 max-w-md">
            {text.tagline}
          </p>
          <div className="flex flex-col items-center gap-3 mb-10">
            <a
              href="mailto:hello@soma-cc.com"
              className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase font-sans hover:text-accent transition-colors"
            >
              hello@soma-cc.com
            </a>
            <a
              href="https://wa.me/33772352185"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase font-sans hover:text-accent transition-colors"
            >
              +33 7 72 35 21 85
            </a>
            <a
              href="https://www.instagram.com/somacocktailclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase font-sans hover:text-accent transition-colors"
            >
              Instagram
            </a>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 w-full">
            <p className="text-primary-foreground/30 text-xs font-sans tracking-wider">
              © {new Date().getFullYear()} SOMA Cocktail Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
