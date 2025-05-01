
import { ChevronRight, Facebook, Instagram, X, MessageSquare, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

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

const resourceLinks = [{
  name: "Academic Calendar",
  href: "#"
}, {
  name: "Exam Schedule",
  href: "#"
}, {
  name: "Student Handbook",
  href: "#"
}, {
  name: "Parent Portal",
  href: "#"
}, {
  name: "Career Opportunities",
  href: "#"
}];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm md:text-base text-white/80">
                Stay updated with the latest news, events, and announcements from our school.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md text-gray-900 w-full sm:w-64 md:w-80"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto max-w-6xl pt-12 pb-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <span className="font-bold text-lg">NSS</span>
              </div>
              <div>
                <h2 className="font-bold leading-tight text-lg md:text-xl">NSS Higher Secondary School Adoor</h2>
                <p className="text-xs leading-tight text-gray-300">School Code: 03030</p>
              </div>
            </div>
            <p className="mb-6 text-gray-300">
              Empowering students since 1960 with focus on excellence and growth.
              We believe in nurturing young minds for a brighter future.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <X size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3 grid grid-cols-1">
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
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map(link => (
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
            <address className="not-italic text-gray-300 space-y-4">
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
                <p>nsshssadoor@gmail.com</p>
              </div>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left text-gray-400 text-sm">
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
