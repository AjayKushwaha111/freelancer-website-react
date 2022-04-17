import React from "react";
import Navbar from "./includes/Navbar";
import Hero from "./section/Hero";
import Portfolio from "./section/Portfolio";
import About from "./section/About";
import Contact from "./section/Contact";
import Footer from "./includes/Footer";

const App = () => (
    <div>
        <Navbar />
        <Hero />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
    </div>
)

export default App