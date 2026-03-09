import barSetup from "@/assets/bar-setup.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const HowItWorks = () => {
  const { language } = useLanguage();
  const text = t(language).howItWorks;
  const numbers = ["01", "02", "03", "04"];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={barSetup} alt="SOMA bar setup" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium text-center">
          {text.label}
        </p>
        <h2 className="font-serif italic text-3xl md:text-5xl text-primary-foreground mb-6 text-center">
          {text.title}
        </h2>
        <p className="text-center text-primary-foreground/70 font-sans text-sm mb-20 max-w-xl mx-auto">
          {text.subtitle}
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {text.steps.map((step, i) => (
            <div key={numbers[i]} className="text-center">
              <span className="font-serif text-5xl text-accent/50">{numbers[i]}</span>
              <h3 className="font-serif italic text-xl text-primary-foreground mt-3 mb-3">{step.title}</h3>
              <p className="text-primary-foreground/60 text-xs font-sans leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block border-t border-accent/30 pt-6">
            <p className="font-serif italic text-xl text-accent">{text.successTitle}</p>
            <p className="text-primary-foreground/50 text-xs font-sans mt-2">{text.successSubtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
