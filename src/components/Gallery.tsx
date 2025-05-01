
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=600&h=400&q=80",
    alt: "School Building",
    category: "campus"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=500&q=80",
    alt: "Computer Lab",
    category: "facilities"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400&q=80",
    alt: "Annual Day Celebration",
    category: "events"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=700&q=80",
    alt: "School Building Second View",
    category: "campus"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80",
    alt: "Programming Class",
    category: "academics"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=500&q=80",
    alt: "School Library",
    category: "facilities"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=600&h=600&q=80",
    alt: "Art Exhibition",
    category: "events"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&h=400&q=80",
    alt: "Computer Lab Second View",
    category: "facilities"
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "campus", name: "Campus" },
  { id: "facilities", name: "Facilities" },
  { id: "academics", name: "Academics" },
  { id: "events", name: "Events" }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);
  
  return (
    <section id="gallery" className="section-padding bg-accent">
      <div className="container-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Photo Gallery</h2>
          <div className="mx-auto w-20 h-1 bg-primary mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Explore our vibrant school community through our collection of images showcasing campus life, events, and activities.
          </p>
        </div>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id 
                  ? "bg-primary text-white" 
                  : "bg-white hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md bg-white cursor-pointer h-[250px]"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(image.id)}
              layoutId={`gallery-image-${image.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="h-full w-full overflow-hidden group relative">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                    Click to view
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
                layoutId={`gallery-image-${selectedImage}`}
              >
                <button 
                  className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={20} />
                </button>
                
                <div className="w-full aspect-video">
                  {galleryImages.find(img => img.id === selectedImage)?.src && (
                    <img 
                      src={galleryImages.find(img => img.id === selectedImage)?.src} 
                      alt={galleryImages.find(img => img.id === selectedImage)?.alt || "Gallery image"}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                <div className="p-4">
                  <h4 className="font-bold text-lg">
                    {galleryImages.find(img => img.id === selectedImage)?.alt}
                  </h4>
                  <p className="text-sm text-gray-600 capitalize">
                    Category: {galleryImages.find(img => img.id === selectedImage)?.category}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-block bg-primary hover:bg-accent-red text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
