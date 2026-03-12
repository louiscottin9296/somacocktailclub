import cocktailsBar from "@/assets/cocktails-bar.jpg";
import rooftopBar from "@/assets/rooftop-bar.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import workshopSetup from "@/assets/workshop-setup.jpg";
import event6 from "@/assets/event-6.jpg";
import patchworkLogo from "@/assets/patchwork-logo.png";
import salomonLogo from "@/assets/salomon-logo.png";
import toryburchLogo from "@/assets/toryburch-logo.webp";
import dijoLogo from "@/assets/dijo-logo.png";
import atelierDeLucaLogo from "@/assets/atelier-de-luca-logo.png";
import hyperlineLogo from "@/assets/hyperline-logo.svg";
import momentLogo from "@/assets/moment-logo.png";
import pigmentLogo from "@/assets/pigment-logo.svg";
import newLogo from "@/assets/Frame_1321316415.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const images = [cocktailsBar, rooftopBar, event3, event4, event6, workshopSetup];

const Events = () => {
  const { language } = useLanguage();
  const text = t(language).events;

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium text-center">
          {text.label}
        </p>
        <h2 className="font-serif italic text-3xl md:text-5xl text-foreground mb-20 text-center">{text.title}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {text.items.map((event, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images[index]}
                  alt={`${event.title} - SOMA Cocktail Club`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="font-serif italic text-lg text-primary-foreground">{event.title}</h3>
                <p className="text-primary-foreground/60 text-xs font-sans tracking-widest uppercase mt-1">
                  {event.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-32 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium">
            {text.label}
          </p>
          <h3 className="font-serif italic text-3xl md:text-5xl text-foreground mb-6">{text.trustedBy}</h3>
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            <img src={patchworkLogo} alt="Patchwork" className="h-5 md:h-6 object-contain brightness-0 mr-6 md:mr-10" />
            <img src={toryburchLogo} alt="Tory Burch" className="h-12 md:h-14 object-contain brightness-0" />
            <img src={salomonLogo} alt="Salomon" className="h-32 md:h-40 object-contain brightness-0" />
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap -mt-8">
            <img src={dijoLogo} alt="Dijo" className="h-20 md:h-28 object-contain brightness-0" />
            <img src={atelierDeLucaLogo} alt="Atelier de Luca" className="h-6 md:h-8 object-contain brightness-0" />
            <img src={hyperlineLogo} alt="Hyperline" className="h-6 md:h-8 object-contain brightness-0" />
            <img src={momentLogo} alt="Moment" className="h-12 md:h-16 object-contain brightness-0" />
            <img src={pigmentLogo} alt="Pigment" className="h-5 md:h-6 object-contain brightness-0" />
            <img src={newLogo} alt="New Partner" className="h-4 md:h-5 object-contain brightness-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
