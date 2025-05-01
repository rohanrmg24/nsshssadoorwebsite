
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Admission", href: "#admission" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white shadow-sm py-4"
      }`}
    >
      <div className="container-center flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}>
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">NSS</span>
          </div>
          <div className="hidden md:block">
            <h1 className="font-bold text-xl leading-tight">NSS HSS</h1>
            <p className="text-xs leading-tight">Adoor</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
              className="text-sm font-medium relative group"
            >
              {item.name}
              <motion.span
                className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </a>
          ))}
          <button
            className="bg-primary text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-accent-red transition-colors"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="text-sm font-medium py-2"
              >
                {item.name}
              </a>
            ))}
            <button
              className="bg-primary text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-accent-red transition-colors"
            >
              Apply Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
