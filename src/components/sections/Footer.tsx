import thtLogo from "@/assets/tht-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Static language switcher for footer
const FooterLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 font-sans text-xs tracking-[0.15em] uppercase">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 transition-colors duration-200 ${
          language === "en"
            ? "text-[#f7f2ec]"
            : "text-[#f7f2ec]/40 hover:text-[#f7f2ec]/70"
        }`}
      >
        EN
      </button>
      <span className="text-[#f7f2ec]/30">|</span>
      <button
        onClick={() => setLanguage("de")}
        className={`px-2 py-1 transition-colors duration-200 ${
          language === "de"
            ? "text-[#f7f2ec]"
            : "text-[#f7f2ec]/40 hover:text-[#f7f2ec]/70"
        }`}
      >
        DE
      </button>
    </div>
  );
};

const Footer = () => {
  const { language } = useLanguage();
  const text = t(language).footer;

  return (
    <footer className="py-16 relative" style={{ backgroundColor: '#525546' }}>
      <div className="container max-w-6xl mx-auto px-6">
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="font-serif italic text-2xl md:text-3xl text-primary-foreground/90 text-center mb-4">
            {text.faqTitle}
          </h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {text.faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-primary-foreground/10"
              >
                <AccordionTrigger className="text-primary-foreground/50 font-sans text-xs tracking-[0.2em] uppercase hover:text-accent hover:no-underline py-3 [&>svg]:text-primary-foreground/40">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary-foreground/60 font-sans text-sm leading-relaxed whitespace-pre-line">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Original Footer */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <div
              className="w-56 md:w-72 h-36 md:h-48 mx-auto"
              style={{
                WebkitMaskImage: `url(${thtLogo})`,
                maskImage: `url(${thtLogo})`,
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                backgroundColor: '#f7f2ec',
              }}
            />
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
          <div className="border-t border-primary-foreground/10 pt-8 w-full flex justify-between items-center">
            <p className="text-primary-foreground/30 text-xs font-sans tracking-wider">
              © {new Date().getFullYear()} SOMA Cocktail Club. {text.allRightsReserved}
            </p>
            <FooterLanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
