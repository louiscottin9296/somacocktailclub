import fullpageCocktail from "@/assets/fullpage-cocktail.jpg";

const About = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium">Our Story</p>
            <h2 className="font-serif italic text-3xl md:text-5xl text-foreground mb-8 leading-tight">
              Soma Cocktail Club
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-sans text-sm md:text-base">
              Our project is built on a passion for exceptional cocktails and memorable experiences. We specialize in
              crafting balanced, high-quality drinks and delivering a seamless bar catering experience.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 font-sans text-sm md:text-base">
              Our team consists of dedicated cocktail enthusiasts who bring expertise, creativity, and a commitment to
              excellence that is guaranteed to elevate any occasion.
            </p>
            <p className="text-muted-foreground leading-relaxed font-sans text-sm md:text-base">
              Sharing is at the heart of what we do: we always listen to your vision and thrive to deliver a fully
              personalized & unique experience for you and your guests.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={fullpageCocktail} alt="SOMA cocktail experience" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-accent/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
