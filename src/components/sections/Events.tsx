import cocktailsBar from "@/assets/cocktails-bar.jpg";
import rooftopBar from "@/assets/rooftop-bar.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import workshopSetup from "@/assets/workshop-setup.jpg";
import event6 from "@/assets/event-6.jpg";
import event7 from "@/assets/event-7.jpg";
import event8 from "@/assets/event-8.jpg";
import event9 from "@/assets/event-9.jpg";
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

const images = [cocktailsBar, rooftopBar, event3, event7, event8, event9, event4, event6, workshopSetup];

const Events = () => {
  const { language } = useLanguage();
  const text = t(language).events;

  return (
    <section className="pt-16 md:pt-20 pb-24 md:pb-32" style={{ backgroundColor: '#f7f2ec' }}>
      <div className="container max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium text-center">
          {text.label}
        </p>
        <h2 className="font-serif italic text-3xl md:text-5xl mb-20 text-center" style={{ color: '#525546' }}>{text.title}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {text.items.map((event, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="aspect-square overflow-hidden">
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
          <h3 className="font-serif italic text-3xl md:text-5xl mb-6" style={{ color: '#525546' }}>{text.trustedBy}</h3>
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap pl-4 md:pl-8">
            <div className="h-5 md:h-6 w-24 md:w-28 mr-6 md:mr-10" style={{ backgroundColor: '#525546', WebkitMaskImage: `url(${patchworkLogo})`, maskImage: `url(${patchworkLogo})`, WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }} />
            <div className="h-14 md:h-[68px] w-28 md:w-32" style={{ backgroundColor: '#525546', WebkitMaskImage: `url(${toryburchLogo})`, maskImage: `url(${toryburchLogo})`, WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }} />
            <div className="h-32 md:h-40 w-32 md:w-40 ml-4 md:ml-8" style={{ backgroundColor: '#525546', WebkitMaskImage: `url(${salomonLogo})`, maskImage: `url(${salomonLogo})`, WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }} />
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap -mt-8">
            <div className="h-20 md:h-28 w-24 md:w-32" style={{ backgroundColor: '#525546', WebkitMaskImage: `url(${dijoLogo})`, maskImage: `url(${dijoLogo})`, WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }} />
            <div className="h-6 md:h-8 w-24 md:w-28" style={{ backgroundColor: '#525546', WebkitMaskImage: `url(${atelierDeLucaLogo})`, maskImage: `url(${atelierDeLucaLogo})`, WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }} />
            <div className="h-6 md:h-8 w-24 md:w-28" style={{ backgroundColor: '#525546', WebkitMaskImage: `url(${hyperlineLogo})`, maskImage: `url(${hyperlineLogo})`, WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }} />
            <div className="h-12 md:h-16 w-24 md:w-28" style={{ backgroundColor: '#525546', WebkitMaskImage: `url(${momentLogo})`, maskImage: `url(${momentLogo})`, WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }} />
            <div className="h-5 md:h-6 w-20 md:w-24" style={{ backgroundColor: '#525546', WebkitMaskImage: `url(${pigmentLogo})`, maskImage: `url(${pigmentLogo})`, WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }} />
            <div className="h-4 md:h-5 w-16 md:w-20" style={{ backgroundColor: '#525546', WebkitMaskImage: `url(${newLogo})`, maskImage: `url(${newLogo})`, WebkitMaskSize: 'contain', maskSize: 'contain', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
