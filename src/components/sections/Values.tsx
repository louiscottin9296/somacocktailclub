import cocktail1 from "@/assets/cocktail-1.jpg";
import cocktail2 from "@/assets/cocktail-2.jpg";
import cocktail3 from "@/assets/cocktail-3.jpg";

const values = [
  {
    number: "01",
    title: "Passion",
    description:
      "SOMA Cocktail Club is first and foremost about enhancing your moments of togetherness and celebration. Through our services, we hope to share our expertise in mixology, and bring this craft to life with our genuine passion.",
    image: cocktail1,
  },
  {
    number: "02",
    title: "Sharing",
    description:
      "Establishing a sense of sharing is at the heart of what we do. Our goal: to meet your needs and requests as best we can, to welcome you into our universe, while creating products & services tailored to yours.",
    image: cocktail2,
  },
  {
    number: "03",
    title: "Expertise",
    description:
      "Experience working with major brands and prestigious bars, we constantly seek out the finest spirits and use only fresh ingredients. Our vision is clear: a blend of traditional and innovative recipes, premium products, meticulous planning & execution.",
    image: cocktail3,
  },
];

const Values = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium text-center">
          What Drives Us
        </p>
        <h2 className="font-serif italic text-3xl md:text-5xl text-foreground mb-6 text-center">
          Our Values
        </h2>
        <p className="text-center text-muted-foreground font-serif italic text-lg md:text-xl max-w-2xl mx-auto mb-20">
          A project driven by passionate, curious & hardworking cocktail enthusiasts.
        </p>

        <div className="space-y-24">
          {values.map((value, index) => (
            <div
              key={value.number}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <span className="font-serif text-6xl text-accent/30">{value.number}</span>
                <h3 className="font-serif italic text-2xl md:text-3xl text-foreground mt-2 mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-sans text-sm">
                  {value.description}
                </p>
              </div>
              <div className={`aspect-square overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <img
                  src={value.image}
                  alt={`${value.title} - SOMA Cocktail Club`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
