import barSetup from "@/assets/bar-setup.jpg";

const steps = [
  {
    number: "01",
    title: "Discuss",
    description: "We discuss your needs and create a tailor-made offer.",
  },
  {
    number: "02",
    title: "Integrate",
    description:
      "We integrate seamlessly and work hand in hand with your other service providers, at any stage of your event.",
  },
  {
    number: "03",
    title: "Set Up",
    description: "We take care of delivery and set up your personalized bar ahead of your event.",
  },
  {
    number: "04",
    title: "Celebrate",
    description:
      "Our expert bartenders shake up exceptional cocktails for you and your guests.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={barSetup}
          alt="SOMA bar setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-sans font-medium text-center">
          Simple & Seamless
        </p>
        <h2 className="font-serif italic text-3xl md:text-5xl text-primary-foreground mb-6 text-center">
          How Does It Work?
        </h2>
        <p className="text-center text-primary-foreground/70 font-sans text-sm mb-20 max-w-xl mx-auto">
          As simple as it gets: an unforgettable event, in 4 easy steps.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <span className="font-serif text-5xl text-accent/50">{step.number}</span>
              <h3 className="font-serif italic text-xl text-primary-foreground mt-3 mb-3">
                {step.title}
              </h3>
              <p className="text-primary-foreground/60 text-xs font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block border-t border-accent/30 pt-6">
            <p className="font-serif italic text-xl text-accent">
              Your event is a success.
            </p>
            <p className="text-primary-foreground/50 text-xs font-sans mt-2">
              You have an amazing evening and enthusiastically recommend us to your network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
