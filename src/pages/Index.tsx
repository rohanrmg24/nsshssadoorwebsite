
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Academics from "../components/Academics";
import Admission from "../components/Admission";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  useEffect(() => {
    document.title = "NSS HSS Adoor | Empowering Futures, Inspiring Excellence";
  }, []);

  return (
    <div className="font-poppins">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Admission />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
      
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-primary hover:bg-accent-red text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-40 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
