import { useState, useCallback, useRef } from "react";
import cocktail1 from "@/assets/cocktail-1.jpg";
import cocktail2 from "@/assets/cocktail-2.jpg";
import cocktail3 from "@/assets/cocktail-3.jpg";
import cocktail4 from "@/assets/cocktail-4.jpg";
import cocktail5 from "@/assets/cocktail-5.jpg";
import cocktail6 from "@/assets/cocktail-6.jpg";
import cocktail7 from "@/assets/cocktail-7.jpg";
import cocktail8 from "@/assets/cocktail-8.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

const cocktails = [cocktail1, cocktail2, cocktail3, cocktail4, cocktail5, cocktail6, cocktail7, cocktail8];

const positions: Record<string, { left: string; width: string; opacity: number; zIndex: number; scale: number }> = {
  "-2": { left: "0%", width: "13%", opacity: 0.3, zIndex: 10, scale: 0.8 },
  "-1": { left: "14%", width: "17%", opacity: 0.6, zIndex: 20, scale: 0.85 },
  "0":  { left: "34%", width: "32%", opacity: 1,   zIndex: 30, scale: 1 },
  "1":  { left: "69%", width: "17%", opacity: 0.6, zIndex: 20, scale: 0.85 },
  "2":  { left: "87%", width: "13%", opacity: 0.3, zIndex: 10, scale: 0.8 },
};

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useLanguage();
  const text = t(language).gallery;

  const getOffset = useCallback((i: number) => {
    let diff = i - activeIndex;
    if (diff > cocktails.length / 2) diff -= cocktails.length;
    if (diff < -cocktails.length / 2) diff += cocktails.length;
    return diff;
  }, [activeIndex]);

  const goTo = (index: number) => setActiveIndex(index);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % cocktails.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + cocktails.length) % cocktails.length);

  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? goNext() : goPrev(); }
    touchStartX.current = null;
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden" style={{ backgroundColor: '#f7f2ec' }}>
      <div className="container max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium text-center">
          {text.label}
        </p>
        <h2 className="font-serif italic text-3xl md:text-5xl mb-20 text-center" style={{ color: '#525546' }}>
          {text.title}
        </h2>

        <div className="relative h-[360px] md:h-[500px] touch-pan-y" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {cocktails.map((src, i) => {
            const offset = getOffset(i);
            const isVisible = offset >= -2 && offset <= 2;
            const pos = positions[String(offset)] ?? positions["0"];
            const isCenter = offset === 0;

            return (
              <button
                key={i}
                onClick={() => !isCenter && goTo(i)}
                disabled={isCenter}
                className={`absolute top-1/2 aspect-[3/4] overflow-hidden ${
                  isCenter ? "rounded-2xl ring-1 ring-accent/20 shadow-2xl cursor-default" : "rounded-xl shadow-lg cursor-pointer"
                }`}
                style={{
                  left: pos.left,
                  width: pos.width,
                  opacity: isVisible ? pos.opacity : 0,
                  zIndex: pos.zIndex,
                  transform: `translateY(-50%) scale(${pos.scale})`,
                  transition: "left 0.6s cubic-bezier(0.4, 0, 0.2, 1), width 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                <img src={src} alt={`SOMA signature cocktail ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {cocktails.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === activeIndex ? "bg-accent w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2"
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
