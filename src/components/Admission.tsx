
import { ChevronDown, ChevronUp, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const eligibilityCriteria = [
  "Completion of SSLC (10th standard) with a minimum of 75% marks",
  "Proficiency in English language",
  "Satisfactory performance in the entrance examination",
  "Successful completion of the admission interview"
];

const requiredDocuments = [
  "Original SSLC mark sheet and pass certificate",
  "Transfer certificate from previous school",
  "Conduct certificate",
  "Birth certificate",
  "Passport-sized photographs (4 copies)",
  "Aadhar card or other identity proof",
  "Category certificate (if applicable)"
];

const admissionProcess = [
  {
    step: 1,
    title: "Application Submission",
    description: "Complete and submit the application form with required documents and application fee"
  },
  {
    step: 2,
    title: "Entrance Examination",
    description: "Successfully complete the entrance examination testing aptitude and subject knowledge"
  },
  {
    step: 3,
    title: "Personal Interview",
    description: "Attend an interview with the admission committee and subject experts"
  },
  {
    step: 4,
    title: "Selection & Fee Payment",
    description: "Upon selection, complete the admission process by paying the required fees"
  }
];

const faqs = [
  {
    question: "What is the selection process for admission?",
    answer: "The selection process includes reviewing academic records, entrance examination performance, and personal interview results. We look for students who demonstrate academic potential, good character, and alignment with our school values."
  },
  {
    question: "Is there a waiting list if seats are filled?",
    answer: "Yes, we maintain a waiting list for eligible candidates when all seats are filled. If vacancies arise, candidates from the waiting list are offered admission based on their position."
  },
  {
    question: "Are there any scholarships available?",
    answer: "We offer merit scholarships to students with exceptional academic records. Additionally, we have need-based financial assistance for deserving students from economically disadvantaged backgrounds."
  },
  {
    question: "Can students transfer from another school mid-session?",
    answer: "Mid-session transfers are considered on a case-by-case basis, subject to seat availability and the student meeting our academic requirements. Additional documentation may be required for mid-session transfers."
  },
];

const Admission = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="admission" className="section-padding bg-accent">
      <div className="container-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Process</h2>
          <div className="mx-auto w-20 h-1 bg-primary mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Join our vibrant community of learners. We welcome applications from students who are passionate about learning and personal growth.
          </p>
        </div>
        
        {/* Admission Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Eligibility Criteria</h3>
            <div className="bg-white rounded-lg p-6 shadow-md h-full">
              <ul className="space-y-3">
                {eligibilityCriteria.map((criterion, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>{criterion}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Required Documents</h3>
            <div className="bg-white rounded-lg p-6 shadow-md h-full">
              <ul className="space-y-3">
                {requiredDocuments.map((document, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                    <span>{document}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Admission Process Steps */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Admission Steps</h3>
          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 h-full w-1 bg-primary md:transform md:-translate-x-1/2 hidden sm:block"></div>
            
            {/* Process Steps */}
            <div className="space-y-12">
              {admissionProcess.map((process, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col sm:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="hidden sm:block sm:w-1/2"></div>
                  <div className="hidden sm:flex justify-center">
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {process.step}
                    </div>
                  </div>
                  <div className="pl-12 sm:pl-0 sm:w-1/2 relative">
                    <div className="sm:hidden absolute left-0 top-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {process.step}
                    </div>
                    <div className={`p-6 rounded-lg shadow-md bg-white h-full ${
                      index % 2 === 0 ? "sm:ml-8" : "sm:mr-8"
                    }`}>
                      <h4 className="text-xl font-bold text-primary mb-2">{process.title}</h4>
                      <p>{process.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Application Form */}
        <div className="mb-12 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold mb-6 text-center">Application Form</h3>
          <p className="mb-6 text-center max-w-3xl">
            Download our application form, complete it with all required information, and submit it along with the necessary documents to begin your admission process.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-accent-red text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <Download size={18} />
            Download Application Form (PDF)
          </a>
          <p className="mt-4 text-sm text-gray-600">
            You can also visit our school office to obtain a physical copy of the application form.
          </p>
        </div>
        
        {/* FAQs */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="border border-primary rounded-lg overflow-hidden bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                >
                  <span className="text-lg font-bold">{faq.question}</span>
                  {activeFaq === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 border-t border-primary/20">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
