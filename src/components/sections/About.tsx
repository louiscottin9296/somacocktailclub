import fullpageCocktail from "@/assets/fullpage-cocktail.jpg";

const About = () => {
  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium">
            SOMA's Story
          </p>
          <h2 className="font-serif italic text-3xl md:text-5xl text-foreground leading-tight">
            Our Values
          </h2>
        </div>
      </section>

      <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center">
        <img
          src={fullpageCocktail}
          alt="SOMA cocktail experience"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container max-w-3xl mx-auto px-6 py-24 md:py-32">
          <p className="text-white/80 leading-relaxed mb-6 font-sans text-sm md:text-base">
            Our project is built on a passion for exceptional cocktails and memorable experiences. We specialize in
            crafting balanced, high-quality drinks and delivering a seamless bar catering experience.
          </p>
          <p className="text-white/80 leading-relaxed mb-6 font-sans text-sm md:text-base">
            Our team consists of dedicated cocktail enthusiasts who bring expertise, creativity, and a commitment to
            excellence that is guaranteed to elevate any occasion.
          </p>
          <p className="text-white/80 leading-relaxed font-sans text-sm md:text-base">
            Sharing is at the heart of what we do: we always listen to your vision and thrive to deliver a fully
            personalized & unique experience for you and your guests.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
