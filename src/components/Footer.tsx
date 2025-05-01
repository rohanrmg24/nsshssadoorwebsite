
import { ChevronRight, Facebook, Instagram, X, MessageSquare, Mail, Phone, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const quickLinks = [{
  name: "Home",
  href: "#home"
}, {
  name: "About",
  href: "#about"
}, {
  name: "Academics",
  href: "#academics"
}, {
  name: "Admission",
  href: "#admission"
}, {
  name: "Events",
  href: "#events"
}, {
  name: "Gallery",
  href: "#gallery"
}, {
  name: "Contact",
  href: "#contact"
}];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl pt-12 pb-6 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* School Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 flex-shrink-0">
                <img 
                  src="/lovable-uploads/1ccaac73-b290-432c-8806-3752c0e1f5c6.png" 
                  alt="NSS Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="font-bold leading-tight text-lg md:text-xl">NSS Higher Secondary School Adoor</h2>
                <p className="text-xs leading-tight text-gray-300">School Code: 03030</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm md:text-base">
              Empowering students since 1960 with focus on excellence and growth.
              We believe in nurturing young minds for a brighter future.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Facebook size={isMobile ? 16 : 18} />
              </a>
              <a href="#" aria-label="Instagram" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Instagram size={isMobile ? 16 : 18} />
              </a>
              <a href="#" aria-label="Twitter" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <X size={isMobile ? 16 : 18} />
              </a>
              <a href="#" aria-label="Message" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <MessageSquare size={isMobile ? 16 : 18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-primary"></span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="inline-flex items-center text-gray-300 hover:text-white hover:translate-x-1 transition-all">
                    <ChevronRight size={16} className="mr-1 text-primary" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-primary"></span>
            </h3>
            <address className="not-italic text-gray-300 space-y-4 text-sm md:text-base">
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 text-primary flex-shrink-0 mt-1" />
                <p>4PQX+64J, Road, Vadakadathucavu P.O, Ezhamkulam, Adoor, Kerala 691529</p>
              </div>
              
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-primary flex-shrink-0" />
                <p>+91 8281821908</p>
              </div>
              
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-primary flex-shrink-0" />
                <p className="break-words">nsshssadoor@gmail.com</p>
              </div>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left text-gray-400 text-xs sm:text-sm">
          <p>© {currentYear} NSS Higher Secondary School, Adoor. All rights reserved.</p>
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
