import heroCocktail from "@/assets/hero-cocktail.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroCocktail}
          alt="Signature cocktail by SOMA Cocktail Club"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="text-xs tracking-[0.4em] uppercase text-primary-foreground/60 font-sans mb-3">
          Cocktail Club
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-primary-foreground mb-2 leading-none tracking-wide">
          SOMA
        </h1>
        <div className="w-16 h-px bg-accent mx-auto my-8" />
        <p className="font-serif italic text-xl md:text-2xl text-primary-foreground/80 mb-8">
          The Art of Good Living
        </p>
        <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/80 mb-12">
          Connection · Pleasure · Mixology
        </p>
        <a
          href="#offers"
          className="inline-block border border-primary-foreground/50 text-primary-foreground px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-primary-foreground/10 transition-colors duration-300"
        >
          Discover Our Offer
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-primary-foreground/40 mx-auto mb-2" />
        <span className="text-primary-foreground/50 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
