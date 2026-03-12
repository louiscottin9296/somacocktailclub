import thtLogo from "@/assets/tht-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  { question: "FAQ question 1", answer: "Text answer 1" },
  { question: "FAQ question 2", answer: "Text answer 2" },
  { question: "FAQ question 3", answer: "Text answer 3" },
  { question: "FAQ question 4", answer: "Text answer 4" },
  { question: "FAQ question 5", answer: "Text answer 5" },
];

const Footer = () => {
  const { language } = useLanguage();
  const text = t(language).footer;

  return (
    <footer className="py-16" style={{ backgroundColor: '#525546' }}>
      <div className="container max-w-6xl mx-auto px-6">
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="font-serif italic text-2xl md:text-3xl text-primary-foreground/90 text-center mb-4">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-primary-foreground/10"
              >
                <AccordionTrigger className="text-primary-foreground/80 font-sans text-sm tracking-wide hover:text-accent hover:no-underline py-3 [&>svg]:text-primary-foreground/40">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-primary-foreground/60 font-sans text-sm leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Original Footer */}
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
