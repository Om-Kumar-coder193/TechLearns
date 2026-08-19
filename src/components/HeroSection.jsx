import React from 'react';
import { Wrench, Zap, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroScene from './HeroScene';

export default function HeroSection({ onOpenModal }) {
  return (
    <section className="relative pt-24 sm:pt-28 pb-10 bg-white overflow-hidden text-center select-none">
      {/* 3D Background - Procedural Intelligence Core */}
      <HeroScene />
      
      {/* Top Hero Heading Container */}
      <motion.div 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        
        {/* Sub-heading in Purple */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/90 border border-purple-200/80 backdrop-blur-md text-[11px] sm:text-xs font-extrabold text-[#612D92] uppercase tracking-[0.2em] mb-4 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span>Learn. Experience. Build. Compete. Prove. Lead.</span>
        </motion.div>

        {/* Main H1 Headline with fluid responsive typography */}
        <motion.h1 
          className="text-[clamp(1.85rem,5.5vw,3.25rem)] font-black text-[#0F1D38] leading-[1.18] tracking-tight max-w-4xl mx-auto mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Learning technology isn't enough.<br className="hidden sm:inline" />
          <span className="text-gradient-purple">Experience how it's built.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-xs sm:text-base font-semibold text-slate-600 mb-7 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Designed to get you industry ready with real-world engineering sprints, AI co-pilots, and verified Skill Passports.
        </motion.p>

        {/* 3 Pill Badges Row with 3D hover physics */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          
          <div 
            onClick={() => onOpenModal('Hands-on Training')}
            className="flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 text-[#612D92] text-xs sm:text-sm font-extrabold shadow-sm hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-purple-500/10 transition-all hover:-translate-y-1 cursor-pointer group"
          >
            <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Wrench className="w-3.5 h-3.5 text-[#612D92] shrink-0" />
            </div>
            <span>Hands-on training</span>
          </div>

          <div 
            onClick={() => onOpenModal('Live Projects')}
            className="flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 text-[#612D92] text-xs sm:text-sm font-extrabold shadow-sm hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-purple-500/10 transition-all hover:-translate-y-1 cursor-pointer group"
          >
            <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-3.5 h-3.5 text-[#612D92] shrink-0" />
            </div>
            <span>Live projects</span>
          </div>

          <div 
            onClick={() => onOpenModal('Guaranteed Internship')}
            className="flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/90 text-[#612D92] text-xs sm:text-sm font-extrabold shadow-sm hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-purple-500/10 transition-all hover:-translate-y-1 cursor-pointer group"
          >
            <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award className="w-3.5 h-3.5 text-[#612D92] shrink-0" />
            </div>
            <span>Guaranteed internship</span>
          </div>

        </motion.div>

        {/* Student Hero Image positioned ON TOP (z-20) */}
        <motion.div 
          className="relative max-w-2xl mx-auto -mb-20 sm:-mb-28 z-20 pointer-events-none px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {/* Radial Violet Glow behind students */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-purple-200/70 blur-3xl -z-10 animate-pulse-glow" />
          
          <img
            src="/homepage-img.png"
            alt="Techlearns Students"
            loading="lazy"
            className="w-full h-auto object-contain mx-auto drop-shadow-2xl max-h-[380px] sm:max-h-none"
          />
        </motion.div>

      </motion.div>

      {/* Marquee Ticker Strip sitting BEHIND the student image (z-10) */}
      <div className="w-full bg-gradient-to-r from-[#5B21B6] via-[#612D92] to-[#4C1D95] text-white py-3.5 overflow-hidden select-none relative z-10 shadow-md border-y border-white/10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-8 px-4 text-xs sm:text-sm font-extrabold tracking-wide uppercase shrink-0">
              <span>Hands-on Training</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
              <span>Career-Focused Curriculum</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
              <span>Job-Ready Skills</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
              <span>Industry Mentorship</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
              <span>1:1 Guidance</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
              <span>Real-World Experience</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
              <span>Placement Support</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 fill-purple-300 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Counter Container */}
      <div className="bg-white pt-16 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl border border-[#8A80BD]/30 bg-white/90 backdrop-blur-xl p-6 sm:p-8 shadow-xl shadow-purple-500/5 -mt-[16px] hover:border-[#8A80BD]/60 transition-all">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 text-center">
            
            {/* Stat 1 */}
            <div className="md:border-r border-slate-200/80 px-2 sm:px-4 mb-4 md:mb-0 group cursor-default">
              <h2 className="text-2xl sm:text-4xl font-black text-[#612D92] group-hover:scale-105 transition-transform">
                <span>30</span>+
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#0F1D38] mt-1.5 leading-snug">
                Years of Techlearns Industry Expertise
              </p>
            </div>

            {/* Stat 2 */}
            <div className="md:border-r border-slate-200/80 px-2 sm:px-4 mb-4 md:mb-0 group cursor-default">
              <h2 className="text-2xl sm:text-4xl font-black text-[#612D92] group-hover:scale-105 transition-transform">
                <span>20K</span>+
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#0F1D38] mt-1.5 leading-snug">
                Global Students & Alumni
              </p>
            </div>

            {/* Stat 3 */}
            <div className="md:border-r border-slate-200/80 px-2 sm:px-4 group cursor-default">
              <h2 className="text-2xl sm:text-4xl font-black text-[#612D92] group-hover:scale-105 transition-transform">
                <span>60</span>+
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#0F1D38] mt-1.5 leading-snug">
                Hiring Partners and Growing
              </p>
            </div>

            {/* Stat 4 */}
            <div className="px-2 sm:px-4 group cursor-default">
              <h2 className="text-2xl sm:text-4xl font-black text-[#612D92] group-hover:scale-105 transition-transform">
                <span>100</span>%
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#0F1D38] mt-1.5 leading-snug">
                Guaranteed Skill Verification for Every Student
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
