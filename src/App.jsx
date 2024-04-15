import { useState } from "react";
import "./App.css";
import Home from "./sections/Home";
import Hirings from "./sections/Hirings";
import About from "./sections/About";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Stats from "./sections/Stats";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const [count, setCount] = useState(0);

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
}

export default App;
