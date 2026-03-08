import event1 from "@/assets/event-1.jpg";
import staffingHero from "@/assets/staffing-hero.jpg";
import cocktail4 from "@/assets/cocktail-4.jpg";
import cocktail5 from "@/assets/cocktail-5.jpg";

const offers = [
  {
    number: "01",
    title: "Event Planning",
    description:
      "A successful event begins with a quality bar. We bring character and an extra dimension to your evening. We take the time to design a tailor-made experience that meets your expectations and aligns perfectly with your vision.",
    image: staffingHero,
  },
  {
    number: "02",
    title: "Signature Cocktail Menus",
    description:
      "We offer our creative advice to help you design a high-end & custom menu. By suggesting drinks that complement the event’s concept, brand, and creative direction, we make sure each event is unique & memorable.",
    image: cocktail5,
  },
  {
    number: "03",
    title: "Staffing & Execution",
    description:
      "We hire from our pool of expert bartenders and execute the event for you, or train your existing staff and share all our best tips. We consider the preparation time of each cocktail, keeping the ideal speed-to-quality ratio at every stage of production.",
    image: event1,
  },
  {
    number: "04",
    title: "Cocktail Workshops",
    description:
      "We introduce you to the world of mixology and the history of cocktails — so that you can start crafting top-tier cocktails at home. We also propose non-alcoholic workshops, where you will discover equally exciting home-made alternatives.",
    image: cocktail4,
  },
];

const Offers = () => {
  return (
    <section id="offers" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium text-center">
          What We Do
        </p>
        <h2 className="font-serif italic text-3xl md:text-5xl text-foreground mb-20 text-center">Our Offers</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div key={offer.number} className="group relative overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={offer.image}
                  alt={`${offer.title} - SOMA Cocktail Club`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent justify-end p-8 flex flex-col px-[32px]">
                <span className="font-serif text-4xl text-accent/60 mb-1">{offer.number}</span>
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
