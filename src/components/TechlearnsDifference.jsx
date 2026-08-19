import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function TechlearnsDifference() {
  const cards = [
    {
      number: '01',
      title: 'Holistic Experience Approach',
      subtitle: 'Stand-ups, sprint planning, Jira tickets, code reviews, and quality gates are how you actually work every week.',
      bgColor: 'bg-gradient-to-br from-[#FF7A65] to-[#E0523C]',
      badgeColor: 'bg-[#FF7A65]',
      shadowColor: 'shadow-[#FF7A65]/25',
      offset: 'translate-y-0'
    },
    {
      number: '02',
      title: 'Safe & Supportive Work Rituals',
      subtitle: 'Expert sessions, workplace visits, employer challenge briefs, and project reviews are scheduled curriculum milestones.',
      bgColor: 'bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]',
      badgeColor: 'bg-[#8B5CF6]',
      shadowColor: 'shadow-[#8B5CF6]/35',
      offset: 'lg:-translate-y-4' // Elevated middle card matching img1
    },
    {
      number: '03',
      title: 'Proven Adaptive Execution',
      subtitle: 'Every important competency generates an artifact, automated test suite evaluation, or verified proof record inside your Skill Passport.',
      bgColor: 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]',
      badgeColor: 'bg-[#F59E0B]',
      shadowColor: 'shadow-[#F59E0B]/25',
      offset: 'translate-y-0'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/80 relative overflow-hidden text-center">
      
      {/* Decorative Wavy Lines */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-20 pointer-events-none hidden lg:block opacity-30">
        <svg viewBox="0 0 1200 100" className="w-full h-full" fill="none">
          <path
            d="M 0 50 Q 300 0 600 50 T 1200 50"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-[#8B5CF6] text-xs font-extrabold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built by Industry Leads</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0F1D38] tracking-tight leading-tight mb-3">
            The Techlearns <span className="text-gradient-purple">Difference</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold max-w-xl mx-auto">
            Our learning environment is designed to inspire curiosity and engineering performance, fostering real-world execution while supporting every developer's growth.
          </p>
        </motion.div>

        {/* 3 Stepped Cards Grid with Top Badges matching img1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative ${card.bgColor} text-white rounded-3xl p-8 shadow-xl ${card.shadowColor} ${card.offset} transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[260px]`}
            >
              {/* Circular Number Badge atop Card */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-[#0F1D38] font-black text-sm flex items-center justify-center shadow-lg border-2 border-white">
                <span className={`w-8 h-8 rounded-full ${card.badgeColor} text-white flex items-center justify-center text-xs font-black`}>
                  {card.number}
                </span>
              </div>

              <h3 className="text-xl font-extrabold mb-3 leading-snug mt-2">
                {card.title}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-white/95 font-medium">
                {card.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
