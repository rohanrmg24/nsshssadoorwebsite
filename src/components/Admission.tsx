import { ChevronDown, ChevronUp, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const eligibilityCriteria = ["Completion of SSLC (10th standard) with a minimum of 75% marks", "Proficiency in English language", "Satisfactory performance in the entrance examination", "Successful completion of the admission interview"];
const requiredDocuments = ["Original SSLC mark sheet and pass certificate", "Transfer certificate from previous school", "Conduct certificate", "Birth certificate", "Passport-sized photographs (4 copies)", "Aadhar card or other identity proof", "Category certificate (if applicable)"];
const admissionProcess = [{
  step: 1,
  title: "Application Submission",
  description: "Complete and submit the application form with required documents and application fee"
}, {
  step: 2,
  title: "Entrance Examination",
  description: "Successfully complete the entrance examination testing aptitude and subject knowledge"
}, {
  step: 3,
  title: "Personal Interview",
  description: "Attend an interview with the admission committee and subject experts"
}, {
  step: 4,
  title: "Selection & Fee Payment",
  description: "Upon selection, complete the admission process by paying the required fees"
}];
const faqs = [{
  question: "What is the selection process for admission?",
  answer: "The selection process includes reviewing academic records, entrance examination performance, and personal interview results. We look for students who demonstrate academic potential, good character, and alignment with our school values."
}, {
  question: "Is there a waiting list if seats are filled?",
  answer: "Yes, we maintain a waiting list for eligible candidates when all seats are filled. If vacancies arise, candidates from the waiting list are offered admission based on their position."
}, {
  question: "Are there any scholarships available?",
  answer: "We offer merit scholarships to students with exceptional academic records. Additionally, we have need-based financial assistance for deserving students from economically disadvantaged backgrounds."
}, {
  question: "Can students transfer from another school mid-session?",
  answer: "Mid-session transfers are considered on a case-by-case basis, subject to seat availability and the student meeting our academic requirements. Additional documentation may be required for mid-session transfers."
}];
const Admission = () => {
  const [activeTab, setActiveTab] = useState<string>("eligibility");
  return <section id="admission" className="section-padding bg-accent">
      <div className="container-center">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Admission Process</h2>
          <div className="mx-auto w-16 md:w-20 h-1 bg-primary mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg max-w-3xl mx-auto px-px md:px-[16px] text-center">Join our vibrant community of passionate learners.</p>
        </div>
        
        {/* Mobile Tabs Navigation */}
        <div className="md:hidden mb-6 px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-accent border border-primary/20">
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="eligibility" className="mt-4">
              <Card className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-bold mb-3 text-center">Eligibility Criteria</h3>
                <ul className="space-y-2">
                  {eligibilityCriteria.map((criterion, index) => <motion.li key={index} className="flex items-start text-sm" initial={{
                  opacity: 0,
                  x: -10
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.2,
                  delay: index * 0.1
                }} viewport={{
                  once: true
                }}>
                      <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">✓</span>
                      <span>{criterion}</span>
                    </motion.li>)}
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="documents" className="mt-4">
              <Card className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-bold mb-3 text-center">Required Documents</h3>
                <ul className="space-y-2">
                  {requiredDocuments.map((document, index) => <motion.li key={index} className="flex items-start text-sm" initial={{
                  opacity: 0,
                  x: -10
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.2,
                  delay: index * 0.1
                }} viewport={{
                  once: true
                }}>
                      <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</span>
                      <span>{document}</span>
                    </motion.li>)}
                </ul>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Desktop Two-Column Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Eligibility Criteria</h3>
            <div className="bg-white rounded-lg p-6 shadow-md h-full">
              <ul className="space-y-3">
                {eligibilityCriteria.map((criterion, index) => <motion.li key={index} className="flex items-start" initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.3,
                delay: index * 0.1
              }} viewport={{
                once: true
              }}>
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>{criterion}</span>
                  </motion.li>)}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Required Documents</h3>
            <div className="bg-white rounded-lg p-6 shadow-md h-full">
              <ul className="space-y-3">
                {requiredDocuments.map((document, index) => <motion.li key={index} className="flex items-start" initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.3,
                delay: index * 0.1
              }} viewport={{
                once: true
              }}>
                    <span className="inline-block w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">•</span>
                    <span>{document}</span>
                  </motion.li>)}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Admission Steps - Responsive for both mobile and desktop */}
        <div className="mb-8 md:mb-12 px-4 md:px-0">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">How to Apply</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {admissionProcess.map((process, index) => <motion.div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md relative" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <div className="absolute -top-3 -left-3 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                  {process.step}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2 mt-2">{process.title}</h4>
                <p className="text-sm md:text-base">{process.description}</p>
              </motion.div>)}
          </div>
        </div>
        
        {/* Application Form - Responsive */}
        <div className="mb-8 md:mb-12 flex flex-col items-center justify-center px-4 md:px-0">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Application Form</h3>
          <p className="mb-4 md:mb-6 text-center max-w-3xl text-sm md:text-base">
            Download our application form, complete it with all required information, and submit it along with the necessary documents to begin your admission process.
          </p>
          <Button className="inline-flex items-center gap-2 bg-primary hover:bg-accent-red text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-medium transition-colors">
            <Download size={18} />
            Download Application Form (PDF)
          </Button>
          <p className="mt-3 text-xs md:text-sm text-gray-600 text-center">
            You can also visit our school office to obtain a physical copy of the application form.
          </p>
        </div>
        
        {/* FAQs - Responsive */}
        <div className="px-4 md:px-0">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-3 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: index * 0.1
            }} viewport={{
              once: true
            }}>
                  <AccordionItem value={`faq-${index}`} className="border border-primary/20 rounded-lg overflow-hidden bg-white mb-3">
                    <AccordionTrigger className="px-4 py-3 md:px-6 md:py-4 text-left text-sm md:text-base font-medium hover:no-underline">
                      <span className="font-bold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 md:px-6 text-sm md:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>)}
            </Accordion>
          </div>
        </div>
      </div>
    </section>;
};
export default Admission;