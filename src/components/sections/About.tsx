import fullpageCocktail from "@/assets/fullpage-cocktail.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const About = () => {
  const { language } = useLanguage();
  const text = t(language).about;

  return (
    <>
      <section className="about-section py-16 md:py-24 bg-card">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium">
            {text.label}
          </p>
          <h2 className="font-serif italic text-3xl md:text-5xl text-foreground mb-8 leading-tight">
            {text.title}
          </h2>
          <p className="text-foreground/90 leading-relaxed mb-6 font-sans text-sm md:text-base font-medium">
            {text.intro}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6 font-sans text-sm md:text-base">{text.p1}</p>
          <p className="text-muted-foreground leading-relaxed mb-6 font-sans text-sm md:text-base">{text.p2}</p>
          <p className="text-muted-foreground leading-relaxed font-sans text-sm md:text-base">{text.p3}</p>
        </div>
      </section>

      <section className="relative w-full min-h-[500px] md:min-h-[600px]">
        <img
          src={fullpageCocktail}
          alt="SOMA cocktail experience"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>
    </>
  );
};

export default About;
