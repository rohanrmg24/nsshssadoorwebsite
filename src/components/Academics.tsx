import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Download, Search } from "lucide-react";
const courses = [{
  id: "science",
  title: "Science Stream",
  description: "Our Science stream offers a comprehensive curriculum covering Physics, Chemistry, Biology, and Mathematics, preparing students for careers in medicine, engineering, and scientific research.",
  subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English"],
  features: ["Well-equipped laboratories for practical training", "Experienced faculty with research background", "Regular field trips and science exhibitions", "Special coaching for competitive exams like JEE, NEET"]
}, {
  id: "commerce",
  title: "Commerce Stream",
  description: "The Commerce stream provides a solid foundation in business studies, economics, and accountancy, preparing students for careers in finance, management, and entrepreneurship.",
  subjects: ["Business Studies", "Accountancy", "Economics", "Mathematics/Computer Science", "English"],
  features: ["Practical accounting software training", "Business case study approach", "Entrepreneurship development programs", "Industrial visits and internship opportunities"]
}, {
  id: "humanities",
  title: "Humanities Stream",
  description: "Our Humanities program offers diverse subjects in social sciences and languages, fostering critical thinking and communication skills for careers in law, journalism, civil services, and more.",
  subjects: ["History", "Political Science", "Sociology", "Economics", "English Literature"],
  features: ["Debate and public speaking training", "Social research projects", "Language proficiency development", "Cultural and heritage study tours"]
}];
const documents = [{
  name: "Academic Calendar 2025-26",
  type: "PDF",
  size: "1.2 MB"
}, {
  name: "Science Stream Syllabus",
  type: "PDF",
  size: "2.5 MB"
}, {
  name: "Commerce Stream Syllabus",
  type: "PDF",
  size: "2.3 MB"
}, {
  name: "Humanities Stream Syllabus",
  type: "PDF",
  size: "2.1 MB"
}, {
  name: "Exam Schedule",
  type: "PDF",
  size: "1.0 MB"
}, {
  name: "School Timetable",
  type: "PDF",
  size: "1.5 MB"
}];
const calendarEvents = [{
  date: "Jun 1, 2025",
  title: "Academic Year Begins",
  type: "academic"
}, {
  date: "Aug 15, 2025",
  title: "Independence Day Celebration",
  type: "event"
}, {
  date: "Sep 5, 2025",
  title: "Teachers' Day",
  type: "event"
}, {
  date: "Oct 2-15, 2025",
  title: "First Term Examinations",
  type: "exam"
}, {
  date: "Oct 21-30, 2025",
  title: "Autumn Break",
  type: "holiday"
}, {
  date: "Dec 22-Jan 5, 2026",
  title: "Winter Break",
  type: "holiday"
}, {
  date: "Jan 26, 2026",
  title: "Republic Day Celebration",
  type: "event"
}, {
  date: "Feb 15-28, 2026",
  title: "Pre-Board Examinations",
  type: "exam"
}, {
  date: "Mar 10-30, 2026",
  title: "Board Examinations",
  type: "exam"
}, {
  date: "Apr 15, 2026",
  title: "Academic Year Ends",
  type: "academic"
}];
const Academics = () => {
  const [activeTab, setActiveTab] = useState("science");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredEvents = calendarEvents.filter(event => {
    if (activeFilter !== "all" && event.type !== activeFilter) return false;
    return event.title.toLowerCase().includes(searchTerm.toLowerCase()) || event.date.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return <section id="academics" className="section-padding bg-white">
      <div className="container-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Programs</h2>
          <div className="mx-auto w-20 h-1 bg-primary mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg">We offer programs that prepare students for future success.</p>
        </div>
        
        {/* Course Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center mb-6 border-b">
            {courses.map(course => <button key={course.id} className={`px-6 py-3 font-medium text-sm sm:text-base relative ${activeTab === course.id ? "text-primary" : "text-gray-600"}`} onClick={() => setActiveTab(course.id)}>
                {course.title}
                {activeTab === course.id && <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" layoutId="activeTab" />}
              </button>)}
          </div>
          
          <div className="bg-accent rounded-lg p-6">
            <AnimatePresence mode="wait">
              {courses.map(course => {
              if (activeTab !== course.id) return null;
              return <motion.div key={course.id} initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -10
              }} transition={{
                duration: 0.3
              }}>
                    <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                    <p className="mb-6">{course.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold mb-3">Core Subjects</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {course.subjects.map((subject, index) => <li key={index}>{subject}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-3">Program Features</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {course.features.map((feature, index) => <li key={index}>{feature}</li>)}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-center">
                      
                    </div>
                  </motion.div>;
            })}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Academic Calendar */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Academic Calendar</h3>
          <div className="bg-accent rounded-lg p-6">
            <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input type="text" placeholder="Search events..." className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-primary" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              </div>
              <div className="flex gap-2">
                <button onClick={() => setActiveFilter("all")} className={`px-3 py-1 rounded-md text-sm ${activeFilter === "all" ? "bg-primary text-white" : "bg-gray-200"}`}>
                  All
                </button>
                <button onClick={() => setActiveFilter("exam")} className={`px-3 py-1 rounded-md text-sm ${activeFilter === "exam" ? "bg-primary text-white" : "bg-gray-200"}`}>
                  Exams
                </button>
                <button onClick={() => setActiveFilter("holiday")} className={`px-3 py-1 rounded-md text-sm ${activeFilter === "holiday" ? "bg-primary text-white" : "bg-gray-200"}`}>
                  Holidays
                </button>
                <button onClick={() => setActiveFilter("event")} className={`px-3 py-1 rounded-md text-sm ${activeFilter === "event" ? "bg-primary text-white" : "bg-gray-200"}`}>
                  Events
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-4 rounded-tl-md">Date</th>
                    <th className="text-left p-4">Event</th>
                    <th className="text-left p-4 rounded-tr-md">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEvents.length > 0 ? filteredEvents.map((event, index) => <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 border-t border-gray-200">
                          <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-primary" />
                            <span>{event.date}</span>
                          </div>
                        </td>
                        <td className="p-4 border-t border-gray-200">{event.title}</td>
                        <td className="p-4 border-t border-gray-200">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.type === "exam" ? "bg-red-100 text-red-800" : event.type === "holiday" ? "bg-green-100 text-green-800" : event.type === "event" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>
                        </td>
                      </tr>) : <tr>
                      <td colSpan={3} className="p-4 text-center">No events found matching your search</td>
                    </tr>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Documents */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Academic Resources</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => <motion.div key={index} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow" whileHover={{
            y: -5
          }} transition={{
            duration: 0.2
          }}>
                <div className="p-6">
                  <h4 className="font-bold mb-2">{doc.name}</h4>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{doc.type}</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
                <div className="bg-gray-100 px-6 py-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600">Download</span>
                  <button className="bg-primary hover:bg-accent-red text-white p-2 rounded-full transition-colors">
                    <Download size={18} />
                  </button>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Academics;