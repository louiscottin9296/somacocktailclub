import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import event6 from "@/assets/event-6.jpg";

const events = [
  { image: event1, title: "Coworking Space Opening", subtitle: "Mobile Bar" },
  { image: event2, title: "Coworking Space Opening", subtitle: "Mobile Bar" },
  { image: event3, title: "Rooftop Startup Party", subtitle: "Mobile Bar" },
  { image: event4, title: "Private Indoor Party", subtitle: "White Tablecloth" },
  { image: event5, title: "Team Building Event", subtitle: "Workshop Stations" },
  { image: event6, title: "200-Person Wedding", subtitle: "Table Service + Bar" },
];

const Events = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium text-center">
          Our Portfolio
        </p>
        <h2 className="font-serif italic text-3xl md:text-5xl text-foreground mb-20 text-center">Recent Events</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
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
      </div>
    </section>
  );
};

export default Events;
