import Hirings from "../sections/Hirings";
import Home from "../sections/Home";
import About from "../sections/About";
import Services from "../sections/Services";
import Gallery from "../sections/Gallery";
import Stats from "../sections/Stats";
import Reviews from "../sections/Reviews";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Home />
      <Hirings />
      <About />
      <Services />
      <Gallery />
      <Stats />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
