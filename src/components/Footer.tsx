import { ChevronRight, Facebook, Instagram, X, MessageSquare } from "lucide-react";
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
  return <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-bold text-lg">NSS</span>
              </div>
              <div>
                <h2 className="font-bold leading-tight text-lg">NSS Higher Secondary School Adoor</h2>
                <p className="text-xs leading-tight text-gray-300">School Code: 03030</p>
              </div>
            </div>
            <p className="mb-6 text-gray-300">
              Empowering students with knowledge, skills, and values since 1960. We focus on academic excellence and holistic development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <X size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
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
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.name}>
                  <a href={link.href} className="inline-flex items-center text-gray-300 hover:text-white hover:translate-x-1 transition-all">
                    <ChevronRight size={16} className="mr-1 text-primary" />
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map(link => <li key={link.name}>
                  <a href={link.href} className="inline-flex items-center text-gray-300 hover:text-white hover:translate-x-1 transition-all">
                    <ChevronRight size={16} className="mr-1 text-primary" />
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-primary"></span>
            </h3>
            <address className="not-italic text-gray-300 space-y-4">
              <p>NSS HSS Road, Adoor</p>
              <p>Pathanamthitta District</p>
              <p>Kerala, India - 691523</p>
              <p className="mt-4">
                <span className="block">Phone: +91 9876543210</span>
                <span className="block mt-1">Email: info@nsshssadoor.edu</span>
              </p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {currentYear} NSS Higher Secondary School, Adoor. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            {" | "}
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;