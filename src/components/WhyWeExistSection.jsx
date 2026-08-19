import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Rocket, Award, Briefcase, Sparkles } from 'lucide-react';
import logo from '../assets/techlearns-logo.png';

export default function WhyWeExistSection() {
  return (
    <section className="py-20 sm:py-24 border-t border-slate-200/80 relative overflow-hidden bg-gradient-to-b from-[#F8F6FF] via-white to-[#F8F6FF]">
      
      {/* Decorative 3D Ambient Glows */}
      <div className="glow-bg top-10 left-10 opacity-35 pointer-events-none" />
      <div className="glow-cyan bottom-10 right-10 opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-[#8B5CF6] text-xs font-extrabold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Techlearns</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0F1D38] tracking-tight leading-tight mb-3">
            Built Different for <span className="text-gradient-purple">Real Engineers</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Techlearns empowers students with real-world IT skills, corporate internships, freelancing blueprints, and startup guidance for a future-proof career.
          </p>
        </motion.div>

        {/* 3 Columns Grid with Central Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mb-8">
          
          {/* Left Column: Top-Left & Bottom-Left Blocks */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 sm:space-y-12 text-left">
            
            {/* Top-Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-5 sm:p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-purple-100/80 shadow-md shadow-purple-950/5 hover:shadow-xl hover:border-purple-300 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 text-[#8B5CF6] flex items-center justify-center shrink-0 border border-purple-200/80 group-hover:scale-110 transition-transform">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0F1D38] leading-snug group-hover:text-[#612D92] transition-colors">
                  Industry-Driven Learning
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pl-13">
                Hands-on training with live projects, real clients & tools used by top tech companies.
              </p>
            </motion.div>

            {/* Bottom-Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-5 sm:p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-indigo-100/80 shadow-md shadow-indigo-950/5 hover:shadow-xl hover:border-indigo-300 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 border border-indigo-200/80 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0F1D38] leading-snug group-hover:text-indigo-700 transition-colors">
                  Internship & Experience
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pl-13">
                Guaranteed corporate experience & internships with Techlearns ecosystem to gain real corporate exposure.
              </p>
            </motion.div>

          </div>

          {/* Center Column: Central 3D Glowing Nucleus */}
          <div className="lg:col-span-4 relative flex items-center justify-center py-4 my-2 lg:my-0">
            <div className="relative w-full max-w-sm mx-auto flex items-center justify-center">
              
              {/* SVG Curved Connecting Arrows */}
              <svg viewBox="0 0 400 300" className="w-full h-auto overflow-visible pointer-events-none hidden lg:block">
                <defs>
                  <marker
                    id="arrowhead-violet"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#8B5CF6" />
                  </marker>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Top-Left Arrow */}
                <motion.path
                  d="M 140 120 C 100 80, 50 60, 10 60"
                  stroke="url(#lineGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  fill="none"
                  markerEnd="url(#arrowhead-violet)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                {/* Top-Right Arrow */}
                <motion.path
                  d="M 260 120 C 300 80, 350 60, 390 60"
                  stroke="url(#lineGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  fill="none"
                  markerEnd="url(#arrowhead-violet)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                {/* Bottom-Left Arrow */}
                <motion.path
                  d="M 140 180 C 100 220, 50 240, 10 240"
                  stroke="url(#lineGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  fill="none"
                  markerEnd="url(#arrowhead-violet)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                {/* Bottom-Right Arrow */}
                <motion.path
                  d="M 260 180 C 300 220, 350 240, 390 240"
                  stroke="url(#lineGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="4 2"
                  fill="none"
                  markerEnd="url(#arrowhead-violet)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </svg>

              {/* Central Standalone Techlearns 3D Emblem Container */}
              <div className="lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xl border-2 border-purple-200 shadow-2xl shadow-purple-900/10 flex items-center justify-center group hover:scale-105 transition-all duration-300">
                <img
                  src={logo}
                  alt="Techlearns Logo"
                  className="w-40 sm:w-52 lg:w-56 h-auto object-contain relative z-10"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Top-Right & Bottom-Right Blocks */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 sm:space-y-12 text-left">
            
            {/* Top-Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-5 sm:p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-amber-100/80 shadow-md shadow-amber-950/5 hover:shadow-xl hover:border-amber-300 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/80 group-hover:scale-110 transition-transform">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0F1D38] leading-snug group-hover:text-amber-700 transition-colors">
                  Freelancing & Startup Path
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pl-13">
                Learn how to earn while you study or build your own startup with expert mentoring.
              </p>
            </motion.div>

            {/* Bottom-Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-5 sm:p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-emerald-100/80 shadow-md shadow-emerald-950/5 hover:shadow-xl hover:border-emerald-300 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/80 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0F1D38] leading-snug group-hover:text-emerald-700 transition-colors">
                  Career-Ready Portfolio
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pl-13">
                Graduate with a verified Skill Passport, portfolio & experience that employers instantly value.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
