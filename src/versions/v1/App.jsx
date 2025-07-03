import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      // once: true,
      once: false,
    });
  }, []);
  return (
    <div>
      <NavBar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="features">
          <Features />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="reviews">
          <Reviews />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
