
import { motion } from "framer-motion";
const Hero = () => {
  return <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/d897be41-85d4-4430-b275-95ded5f388f5.png" alt="NSS HSS Adoor Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container-center relative z-10 text-center">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-white text-xl md:text-2xl mb-2 py-0 my-0">
          Welcome to
        </motion.h2>
        
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="text-white md:text-6xl font-bold mb-6 text-center text-4xl">NSS Higher Secondary School Adoor</motion.h1>
        
        
        
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.6
      }}>
          <a href="#academics" className="bg-primary hover:bg-accent-red text-white font-medium rounded-md px-8 py-3 transition-all duration-300 transform hover:scale-105">
            Explore Academics
          </a>
          <a href="#admission" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-medium rounded-md px-8 py-3 transition-all duration-300 transform hover:scale-105">
            Apply Now
          </a>
        </motion.div>
      </div>
      
      {/* News Ticker */}
      <div className="absolute bottom-0 left-0 w-full bg-white py-3 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="bg-primary text-white px-4 py-1 rounded-md font-medium mr-4 whitespace-nowrap">
              Latest News
            </div>
            <div className="overflow-hidden whitespace-nowrap">
              <div className="animate-marquee inline-block">
                <span className="mx-4">Admissions open for 2025-26 academic year</span>
                <span className="mx-4">•</span>
                <span className="mx-4">School wins State Science Exhibition first prize</span>
                <span className="mx-4">•</span>
                <span className="mx-4">National Sports Day celebrations on August 29th</span>
                <span className="mx-4">•</span>
                <span className="mx-4">100% results in Higher Secondary Examination</span>
                <span className="mx-4">•</span>
              </div>
              <div className="animate-marquee inline-block absolute">
                <span className="mx-4">Admissions open for 2025-26 academic year</span>
                <span className="mx-4">•</span>
                <span className="mx-4">School wins State Science Exhibition first prize</span>
                <span className="mx-4">•</span>
                <span className="mx-4">National Sports Day celebrations on August 29th</span>
                <span className="mx-4">•</span>
                <span className="mx-4">100% results in Higher Secondary Examination</span>
                <span className="mx-4">•</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
