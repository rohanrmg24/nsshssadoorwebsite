
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const eventDates = [5, 10, 15, 20, 25]; // Example dates with events

const newsItems = [
  {
    id: 1,
    title: "School Wins State Science Exhibition First Prize",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80",
    excerpt: "Our students showcased outstanding projects at the State Science Exhibition and secured the first prize for their innovative solution to water conservation.",
    category: "Achievement"
  },
  {
    id: 2,
    title: "Annual Sports Day Celebration",
    date: "March 28, 2025",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
    excerpt: "The Annual Sports Day was celebrated with great enthusiasm, featuring track and field events, team sports, and an impressive display of student athleticism.",
    category: "Event"
  },
  {
    id: 3,
    title: "Teachers Complete Advanced Training Program",
    date: "February 12, 2025",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80",
    excerpt: "Our teaching staff participated in a week-long advanced training program to enhance their pedagogical skills and integrate new teaching methodologies.",
    category: "News"
  },
  {
    id: 4,
    title: "Cultural Exchange Program with Japanese School",
    date: "January 20, 2025",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=80",
    excerpt: "Selected students participated in a cultural exchange program with our partner school in Japan, experiencing unique cultural immersion and educational practices.",
    category: "Program"
  }
];

const Events = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  // Generate calendar days
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
  
  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
  }
  
  // Add cells for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
    const hasEvent = eventDates.includes(day);
    
    calendarDays.push(
      <div 
        key={`day-${day}`} 
        className={`h-10 w-10 flex items-center justify-center rounded-full cursor-pointer transition-colors ${
          isToday ? "bg-primary text-white" : 
          hasEvent ? "hover:bg-primary/20 relative" : 
          "hover:bg-gray-100"
        }`}
      >
        {day}
        {hasEvent && 
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"></span>
        }
      </div>
    );
  }

  return (
    <section id="events" className="section-padding bg-white">
      <div className="container-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Events & News</h2>
          <div className="mx-auto w-20 h-1 bg-primary mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Stay updated with the latest events, news, and achievements from our school community.
          </p>
        </div>
        
        {/* Events Calendar */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Events Calendar</h3>
          <div className="bg-accent rounded-lg p-6 shadow-md max-w-md mx-auto">
            <div className="flex justify-between items-center mb-6">
              <button 
                onClick={previousMonth}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <ChevronLeft size={20} />
              </button>
              <h4 className="font-bold text-xl">
                {monthNames[currentMonth]} {currentYear}
              </h4>
              <button 
                onClick={nextMonth}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {/* Days of week headers */}
              {daysOfWeek.map(day => (
                <div key={day} className="h-10 flex items-center justify-center font-medium text-sm text-gray-500">
                  {day}
                </div>
              ))}
              
              {/* Calendar days */}
              {calendarDays}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <span className="text-sm">Event Day</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Click on a date with an indicator to view event details.
              </p>
            </div>
          </div>
        </div>
        
        {/* News Feed */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Latest News</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <motion.div 
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <a 
                    href="#" 
                    className="text-primary font-medium inline-flex items-center hover:text-accent-red transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="#" 
              className="inline-block bg-primary hover:bg-accent-red text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              View All News & Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
