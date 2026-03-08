import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

import Offers from "@/components/sections/Offers";
import HowItWorks from "@/components/sections/HowItWorks";
import Gallery from "@/components/sections/Gallery";
import Events from "@/components/sections/Events";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main>
      <Hero />
      <About />
      
      <Offers />
      <HowItWorks />
      <Gallery />
      <Events />
      <Footer />
    </main>
  );
};

export default Index;
