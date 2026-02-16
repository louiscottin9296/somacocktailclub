import cocktail1 from "@/assets/cocktail-1.jpg";
import cocktail2 from "@/assets/cocktail-2.jpg";
import cocktail3 from "@/assets/cocktail-3.jpg";
import cocktail4 from "@/assets/cocktail-4.jpg";
import cocktail5 from "@/assets/cocktail-5.jpg";
import cocktail6 from "@/assets/cocktail-6.jpg";
import cocktail7 from "@/assets/cocktail-7.jpg";
import cocktail8 from "@/assets/cocktail-8.jpg";

const cocktails = [cocktail1, cocktail2, cocktail3, cocktail4, cocktail5, cocktail6, cocktail7, cocktail8];

const Gallery = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium text-center">
          Our Creations
        </p>
        <h2 className="font-serif italic text-3xl md:text-5xl text-foreground mb-20 text-center">
          Signature Cocktails
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cocktails.map((src, index) => (
            <div
              key={index}
              className={`overflow-hidden group ${
                index === 0 || index === 5 ? "row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 || index === 5 ? "aspect-[3/5]" : "aspect-square"} overflow-hidden`}>
                <img
                  src={src}
                  alt={`SOMA signature cocktail ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
