"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How long does a smile makeover take?",
    answer: "Most cosmetic assessments are completed in one hour. CEREC technology allows for permanent porcelain crowns in a single 2-hour appointment, eliminating the traditional two-week wait."
  },
  {
    question: "Do you offer lunchtime appointments?",
    answer: "Yes. Our Sydney CBD location is specifically optimized for professionals to receive treatment during work breaks efficiently."
  },
  {
    question: "Is the treatment painful?",
    answer: "We utilize laser dentistry (needle-free) and sleep dentistry options to minimize discomfort. Our 'Dental Spa' environment is specifically designed to reduce physiological stress."
  },
  {
    question: "Do you accept my health fund?",
    answer: "We use HICAPS for on-the-spot electronic claims. We accept all major Australian private health funds."
  },
  {
    question: "Where are you located?",
    answer: "Level 2, 70 Pitt Street, Sydney. We are a short walk from Wynyard and Martin Place stations."
  }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-off-white">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
            Common Inquiries
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen ? 'border-gold-light/20 border-l-2 border-l-gold-main shadow-sm' : 'border-gold-light/10'}`}
              >
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-heading font-bold text-charcoal"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    className={`text-gold-main transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
                    size={20} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-slate-grey font-outfit font-light border-t border-gold-light/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
