
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const timelineItems = [
  { year: "1960", title: "Founding", description: "NSS HSS Adoor was established to provide quality education to the local community." },
  { year: "1975", title: "Higher Secondary", description: "The school was upgraded to a Higher Secondary institution." },
  { year: "1990", title: "New Building", description: "A new multi-story building was inaugurated to accommodate growing student strength." },
  { year: "2005", title: "Technology Lab", description: "State-of-the-art computer and science laboratories were established." },
  { year: "2020", title: "Diamond Jubilee", description: "Celebrated 60 years of academic excellence and community service." },
];

const accordionItems = [
  {
    title: "Our Mission",
    content: "To provide holistic education that nurtures intellectual growth, character development, and social responsibility, preparing students to excel academically and contribute meaningfully to society."
  },
  {
    title: "Our Vision",
    content: "To be a premier educational institution that empowers students with knowledge, skills, and values necessary to thrive in a rapidly changing world, fostering innovation, critical thinking, and ethical leadership."
  },
  {
    title: "Principal's Message",
    content: "Welcome to NSS Higher Secondary School, Adoor! For over six decades, our institution has been committed to academic excellence, character formation, and holistic development. We believe in nurturing not just brilliant minds but compassionate hearts. Our dedicated faculty, state-of-the-art facilities, and rich heritage create an environment where students can discover their potential and pursue their passions. As we prepare our students for future challenges, we emphasize both traditional values and progressive thinking. I invite you to explore what makes NSS HSS Adoor an exceptional place for learning and growth."
  }
];

const staffMembers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Principal",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80",
    contact: "principal@nsshssadoor.edu"
  },
  {
    name: "Prof. Priya Menon",
    role: "Vice Principal",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
    contact: "vp@nsshssadoor.edu"
  },
  {
    name: "Dr. Anil Thomas",
    role: "Science Department Head",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80",
    contact: "science@nsshssadoor.edu"
  },
  {
    name: "Prof. Lakshmi Nair",
    role: "Commerce Department Head",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80",
    contact: "commerce@nsshssadoor.edu"
  }
];

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="about" className="section-padding bg-accent">
      <div className="container-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our School</h2>
          <div className="mx-auto w-20 h-1 bg-primary mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            With over 60 years of excellence in education, NSS HSS Adoor has been shaping young minds and building futures.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-primary"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex-1 md:w-1/2 mb-4 md:mb-0">
                    <div className={`p-6 rounded-lg shadow-md bg-white h-full ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}>
                      <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="md:w-0 flex justify-center">
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mission, Vision, Principal's Message */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Philosophy</h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {accordionItems.map((item, index) => (
              <div 
                key={index}
                className="border border-primary rounded-lg overflow-hidden bg-white"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                >
                  <span className="text-lg font-bold">{item.title}</span>
                  {activeAccordion === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeAccordion === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 border-t border-primary/20">
                    <p>{item.content}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Staff */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Our Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-lg overflow-hidden shadow-md"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-primary">{member.contact}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
