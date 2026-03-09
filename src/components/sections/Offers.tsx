import event1 from "@/assets/event-1.jpg";
import staffingHero from "@/assets/staffing-hero.jpg";
import cocktail4 from "@/assets/cocktail-4.jpg";
import cocktail5 from "@/assets/cocktail-5.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const images = [staffingHero, cocktail5, event1, cocktail4];

const Offers = () => {
  const { language } = useLanguage();
  const text = t(language).offers;
  const numbers = ["01", "02", "03", "04"];

  return (
    <section id="offers" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium text-center">
          {text.label}
        </p>
        <h2 className="font-serif italic text-3xl md:text-5xl text-foreground mb-20 text-center">{text.title}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {text.items.map((offer, i) => (
            <div key={numbers[i]} className="group relative overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={images[i]}
                  alt={`${offer.title} - SOMA Cocktail Club`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent justify-end p-8 flex flex-col px-[32px]">
                <span className="font-serif text-4xl text-accent/60 mb-1">{numbers[i]}</span>
                <h3 className="font-serif italic text-2xl text-primary-foreground mb-3">{offer.title}</h3>
                <p className="text-primary-foreground/70 text-sm font-sans leading-relaxed max-w-sm">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
