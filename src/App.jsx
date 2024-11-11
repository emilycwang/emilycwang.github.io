import React, { useRef, useEffect } from "react";
import { Navbar, Footer } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import './index.css';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const offset = -70;
  

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop + offset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Reset scroll position to top on page load
    window.scrollTo(0, 0);

  }, []);

  return (
    <main >
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, projectsRef, contactRef }} 
      />
      <section ref={homeRef} className="neo-brutalism-white pt-0">
        <Home />
      </section>
      <section ref={aboutRef} className="neo-brutalism-white pt-0">
        <About />
      </section>
      <section ref={projectsRef} className="neo-brutalism-white mb-0">
        <Projects />
      </section>
      {/* <section ref={contactRef} className="neo-brutalism-white">
        <Contact />
      </section> */}
      <Footer />
  

    </main>
  );
};

export default App;
