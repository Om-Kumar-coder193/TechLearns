import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqsData } from '../data/stats';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 sm:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center mb-12 sm:mb-16">
          
          {/* Capsule Pill Tag */}
          <div className="inline-block mb-3">
            <span className="bg-[#F4EFFF] border border-[#8B5CF6]/30 text-[#612D92] text-[10px] sm:text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xs inline-flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>TECHLEARNS · KNOWLEDGE BASE</span>
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0F1D38] tracking-tight leading-tight">
            Frequently Asked <span className="text-gradient-purple">Questions</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`rounded-2xl border-l-[5px] border-[#612D92] shadow-xs overflow-hidden transition-all duration-300 ${
                  isOpen ? 'bg-[#F4EFFF] shadow-md border-r border-y border-purple-200/60' : 'bg-[#F8F6FE] hover:bg-[#F3EEFE]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-black text-base sm:text-lg text-[#0F1D38] hover:text-[#612D92] transition-colors cursor-pointer"
                >
                  <span className="leading-snug pr-2">
                    {faq.question}
                  </span>
                  
                  {/* Circular Purple Toggle Icon */}
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#612D92] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#7C3AED]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                {/* Animated Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed border-t border-purple-200/50 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
