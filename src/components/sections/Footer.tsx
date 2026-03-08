import somaLogo from "@/assets/soma-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <p className="font-serif text-3xl text-primary-foreground tracking-wider">SOMA</p>
            <p className="text-[10px] tracking-[0.35em] uppercase text-primary-foreground/50 font-sans mt-1">
              Cocktail Club
            </p>
          </div>
          <p className="font-serif italic text-xl text-primary-foreground/80 mb-6 max-w-md">
            Elevating your moments of togetherness.
          </p>
          <div className="flex gap-8 mb-10">
            <a
              href="#offers"
              className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase font-sans hover:text-accent transition-colors"
            >
              Our Offers
            </a>
            <a
              href="#"
              className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase font-sans hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 w-full">
            <p className="text-primary-foreground/30 text-xs font-sans tracking-wider">
              © {new Date().getFullYear()} SOMA Cocktail Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
