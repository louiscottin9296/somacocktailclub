import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

// Photos come from the "SOMA-carousel-photos" folder (copied into src/assets/carousel
// automatically when the preview starts). They are shown in file-name order.
const carouselModules = import.meta.glob<string>("@/assets/carousel/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
});
const stripImages = Object.keys(carouselModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => carouselModules[key]);

const About = () => {
  const { language } = useLanguage();
  const text = t(language).about;

  return (
    <>
      <section className="about-section py-16 md:py-24 bg-card">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium">
            {text.label}
          </p>
          <h2 className="font-serif italic text-3xl md:text-5xl text-foreground mb-8 leading-tight">
            {text.title}
          </h2>
          <p className="text-foreground/90 leading-relaxed mb-6 font-sans text-sm md:text-base font-medium">
            {text.intro}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6 font-sans text-sm md:text-base">{text.p1}</p>
          <p className="text-muted-foreground leading-relaxed mb-6 font-sans text-sm md:text-base">{text.p2}</p>
          <p className="text-muted-foreground leading-relaxed font-sans text-sm md:text-base">{text.p3}</p>
        </div>
      </section>

      <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden">
        <div className="hero-strip-track flex h-full w-max absolute inset-0">
          {[...stripImages, ...stripImages].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Recent SOMA Cocktail Club event"
              className="h-full w-auto max-w-none shrink-0"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
