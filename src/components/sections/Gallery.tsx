import { useState, useCallback } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  const getIndex = useCallback((offset: number) => {
    return (activeIndex + offset + cocktails.length) % cocktails.length;
  }, [activeIndex]);

  const goTo = (index: number) => setActiveIndex(index);

  return (
    <section className="py-24 md:py-32 bg-card overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium text-center">
          Our Creations
        </p>
        <h2 className="font-serif italic text-3xl md:text-5xl text-foreground mb-20 text-center">
          Signature Cocktails
        </h2>

        <div className="relative flex items-center justify-center h-[360px] md:h-[500px]">
          {/* Far left */}
          <button
            onClick={() => goTo(getIndex(-2))}
            className="absolute left-0 md:left-[5%] z-10 w-[18%] md:w-[15%] aspect-[3/4] rounded-lg overflow-hidden opacity-30 hover:opacity-50 transition-all duration-500 cursor-pointer"
          >
            <img src={cocktails[getIndex(-2)]} alt="Cocktail preview" className="w-full h-full object-cover" />
          </button>

          {/* Previous */}
          <button
            onClick={() => goTo(getIndex(-1))}
            className="absolute left-[12%] md:left-[18%] z-20 w-[24%] md:w-[20%] aspect-[3/4] rounded-xl overflow-hidden opacity-60 hover:opacity-80 transition-all duration-500 cursor-pointer shadow-lg"
          >
            <img src={cocktails[getIndex(-1)]} alt="Previous cocktail" className="w-full h-full object-cover" />
          </button>

          {/* Center (active) */}
          <div className="relative z-30 w-[44%] md:w-[32%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-accent/20">
            <img
              src={cocktails[activeIndex]}
              alt={`SOMA signature cocktail ${activeIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* Next */}
          <button
            onClick={() => goTo(getIndex(1))}
            className="absolute right-[12%] md:right-[18%] z-20 w-[24%] md:w-[20%] aspect-[3/4] rounded-xl overflow-hidden opacity-60 hover:opacity-80 transition-all duration-500 cursor-pointer shadow-lg"
          >
            <img src={cocktails[getIndex(1)]} alt="Next cocktail" className="w-full h-full object-cover" />
          </button>

          {/* Far right */}
          <button
            onClick={() => goTo(getIndex(2))}
            className="absolute right-0 md:right-[5%] z-10 w-[18%] md:w-[15%] aspect-[3/4] rounded-lg overflow-hidden opacity-30 hover:opacity-50 transition-all duration-500 cursor-pointer"
          >
            <img src={cocktails[getIndex(2)]} alt="Cocktail preview" className="w-full h-full object-cover" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {cocktails.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-accent w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to cocktail ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
