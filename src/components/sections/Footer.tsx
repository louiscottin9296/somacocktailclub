import { useState } from "react";
import thtLogo from "@/assets/tht-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

// Static language switcher for footer
const FooterLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 font-sans text-xs tracking-[0.15em] uppercase">
      {(["en", "de", "fr"] as const).map((lang, i) => (
        <span key={lang} className="flex items-center">
          {i > 0 && <span className="text-[#f7f2ec]/30">|</span>}
          <button
            onClick={() => setLanguage(lang)}
            className={`px-2 py-1 transition-colors duration-200 ${
              language === lang
                ? "text-[#f7f2ec]"
                : "text-[#f7f2ec]/40 hover:text-[#f7f2ec]/70"
            }`}
          >
            {lang.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
};

const Footer = () => {
  const { language } = useLanguage();
  const text = t(language).footer;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formspreeEndpoints: Record<string, string> = {
    en: "https://formspree.io/f/mlgpapag",
    de: "https://formspree.io/f/mlgpapag",
    fr: "", // TODO: Add FR endpoint
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = formspreeEndpoints[language];
    if (!endpoint) {
      toast({ title: "Form submission not yet configured for this language.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast({ title: text.contact.success });
        setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
      } else {
        toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Network error. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-accent font-sans text-sm";
  const labelClasses = "text-primary-foreground/50 font-sans text-xs tracking-[0.15em] uppercase";

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

        {/* Contact Form */}
        <div className="mb-16">
          <h2 className="font-serif italic text-2xl md:text-3xl text-primary-foreground/90 text-center mb-8">
            {text.contact.title}
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className={labelClasses}>{text.contact.firstName}</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  className={inputClasses}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className={labelClasses}>{text.contact.lastName}</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className={labelClasses}>{text.contact.email}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className={inputClasses}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className={labelClasses}>{text.contact.phone}</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className={inputClasses}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className={labelClasses}>{text.contact.company}</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className={inputClasses}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className={labelClasses}>{text.contact.message}</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className={inputClasses}
              />
            </div>
            <div className="text-center pt-2">
              <button
                type="submit"
                className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/70 border border-primary-foreground/20 px-8 py-3 hover:bg-primary-foreground/10 hover:text-primary-foreground transition-colors duration-200"
              >
                {text.contact.send}
              </button>
            </div>
          </form>
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
