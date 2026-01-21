import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 md:px-6">
        <Home />
        <About />
        <Projects />
        <Resume />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
