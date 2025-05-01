import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, X, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
const initialFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
};
const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = "Phone number is invalid";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = {
          ...prev
        };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData(initialFormState);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return <section id="contact" className="section-padding bg-white">
      <div className="container-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="mx-auto w-20 h-1 bg-primary mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">Contact us, and we’ll help you out.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.name ? 'border-red-500' : 'border-gray-300 focus:border-primary'} focus:outline-none transition-colors`} placeholder="Your name" />
                {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.email ? 'border-red-500' : 'border-gray-300 focus:border-primary'} focus:outline-none transition-colors`} placeholder="Your email" />
                  {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.phone ? 'border-red-500' : 'border-gray-300 focus:border-primary'} focus:outline-none transition-colors`} placeholder="Your phone number" />
                  {formErrors.phone && <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:outline-none transition-colors">
                  <option value="">Select a subject</option>
                  <option value="Admission Inquiry">Admission Inquiry</option>
                  <option value="General Information">General Information</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className={`w-full px-4 py-2 rounded-md border ${formErrors.message ? 'border-red-500' : 'border-gray-300 focus:border-primary'} focus:outline-none transition-colors`} placeholder="Your message" />
                {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
              </div>
              
              <div>
                <button type="submit" className={`w-full bg-primary hover:bg-accent-red text-white font-medium rounded-md px-6 py-3 transition-colors flex items-center justify-center ${isSubmitting ? 'cursor-not-allowed opacity-80' : ''}`} disabled={isSubmitting}>
                  {isSubmitting ? <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </> : 'Send Message'}
                </button>
                
                {submitSuccess && <motion.div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md" initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }}>
                    Thank you! Your message has been sent successfully.
                  </motion.div>}
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            {/* School Address & Contact */}
            <div className="bg-accent rounded-lg p-6 mb-8 shadow-sm">
              
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-primary mr-3 flex-shrink-0" size={20} />
                  <p className="text-base">4PQX+64J, Road, Vadakadathucavu P.O, Ezhamkulam, Adoor, Kerala 691529</p>
                </div>
                
                <div className="flex items-center cursor-pointer group" onClick={() => copyToClipboard("+91 9876543210")}>
                  <Phone className="text-primary mr-3 flex-shrink-0" size={20} />
                  <p className="group-hover:text-primary transition-colors">+91 8281821908</p>
                  <span className="text-xs ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500">(Click to copy)</span>
                </div>
                
                <div className="flex items-center cursor-pointer group" onClick={() => copyToClipboard("info@nsshssadoor.edu")}>
                  <Mail className="text-primary mr-3 flex-shrink-0" size={20} />
                  <p className="group-hover:text-primary transition-colors">nsshssadoor@gmail.com</p>
                  <span className="text-xs ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500">(Click to copy)</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-6">
                <h5 className="font-medium mb-3">Follow us</h5>
                <div className="flex gap-3">
                  <a href="#" className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <X size={20} />
                  </a>
                  <a href="#" className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <MessageSquare size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="h-[300px] rounded-lg overflow-hidden shadow-sm">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.87219339898!2d76.72940271520727!3d9.00062219117627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0613a7aa1d1d03%3A0xa62d11a95d4fcee9!2sAdoor%2C%20Kerala!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin" width="100%" height="100%" style={{
              border: 0
            }} loading="lazy" title="School Location"></iframe>
            </div>
            
            {/* Office Hours */}
            <div className="mt-6 p-4 bg-gray-100 rounded-md">
              <h5 className="font-bold mb-2">Office Hours</h5>
              <p className="text-gray-700">Monday to Friday: 8:00 AM - 4:30 PM</p>
              <p className="text-gray-700">Saturday: 9:00 AM - 12:00 PM</p>
              <p className="text-gray-700">Sunday & Public Holidays: Closed</p>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-16 bg-accent rounded-lg p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="mb-6">Stay updated with the latest news, events, and announcements from our school.</p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:outline-none" required />
              <button type="submit" className="bg-primary hover:bg-accent-red text-white font-medium px-6 py-3 rounded-md transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to receive our newsletter emails. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;