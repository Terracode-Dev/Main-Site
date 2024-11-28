// QA.tsx
import React, { useState } from 'react';
import ContactForm from '@/components/contactus/Contact';

interface FAQItem {
  question: string;
  answer: string;
}

const QA: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const faqData: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of services including Enterprise Solutions, Web Development, App Development, AI Development, and custom solutions tailored to your specific needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while complex enterprise solutions could take several months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What is your pricing model?",
      answer: "Our pricing is project-based and depends on your specific requirements. We offer competitive rates and flexible payment terms. Contact us for a detailed quote tailored to your needs."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive maintenance and support packages. This includes regular updates, bug fixes, security patches, and technical support to ensure your solution runs smoothly."
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain transparent communication through regular meetings, progress reports, and a dedicated project management platform. You'll have a direct line to your project manager throughout the development process."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOpenContactForm = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <>
      <div className="max-w-40xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            <span>Frequently Asked</span> <span className='bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent'>Questions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our services and processes
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full px-6 py-4 text-left bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-gray-600">{faq.answer}</div>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <span>Still have questions?</span>
            <button
              onClick={handleOpenContactForm}
              className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center group"
            >
              Contact our support team
              <svg 
                className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={handleCloseContactForm}
      />
    </>
  );
};

export default QA;

