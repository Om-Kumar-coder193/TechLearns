import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import { programsData } from '../data/programs';

const TiltCard3D = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 18 });

  // ±5.5 degree tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5.5deg", "-5.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5.5deg", "5.5deg"]);
  
  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="min-w-[310px] sm:min-w-[340px] max-w-[350px] shrink-0 snap-start bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-lg shadow-purple-950/5 hover:shadow-2xl hover:shadow-purple-500/15 hover:border-[#8B5CF6]/60 transition-all flex flex-col justify-between relative group overflow-hidden"
    >
      {/* Dynamic Cursor Glare Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useTransform(
            () => `radial-gradient(circle 220px at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(139, 92, 246, 0.14) 0%, rgba(255, 255, 255, 0) 75%)`
          )
        }}
      />
      
      {/* Top subtle border glow line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Layered 3D inner content */}
      <div style={{ transformStyle: "preserve-3d" }} className="flex flex-col h-full justify-between relative z-20">
        {children}
      </div>
    </motion.div>
  );
};

export default function ProgramsSection({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollContainerRef = useRef(null);

  const categories = [
    'All',
    'AI & GenAI',
    'Software Eng',
    'Cloud & DevOps',
    'Cybersecurity',
    'Data & Analytics'
  ];

  const filteredPrograms = activeCategory === 'All'
    ? programsData
    : programsData.filter((p) => {
        if (activeCategory === 'AI & GenAI') return p.category.includes('AI');
        if (activeCategory === 'Software Eng') return p.category.includes('Software');
        if (activeCategory === 'Cloud & DevOps') return p.category.includes('Cloud');
        if (activeCategory === 'Cybersecurity') return p.category.includes('Security');
        if (activeCategory === 'Data & Analytics') return p.category.includes('Data');
        return true;
      });

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="py-20 bg-slate-50/60 border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Ambient 3D Depth Glows */}
      <div className="glow-bg top-1/4 -left-20 opacity-40" />
      <div className="glow-cyan bottom-10 right-0 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-left max-w-2xl">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-[#8B5CF6] text-xs font-extrabold uppercase tracking-wider mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Select Your Career Track</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0F1D38] uppercase tracking-tight leading-tight">
              WHERE TO START <span className="text-gradient-purple">YOUR TECH JOURNEY?</span>
            </h2>

            <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-2">
              Choose from our industry-aligned corporate experience tracks designed by senior architects & engineering leads.
            </p>
          </div>

          {/* Carousel Navigation Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-[#0F1D38] hover:bg-[#8B5CF6] hover:text-white hover:border-[#8B5CF6] flex items-center justify-center shadow-md shadow-purple-900/5 transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            
            <button
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 text-[#0F1D38] hover:bg-[#8B5CF6] hover:text-white hover:border-[#8B5CF6] flex items-center justify-center shadow-md shadow-purple-900/5 transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#8B5CF6] text-white shadow-md shadow-[#8B5CF6]/30 scale-[1.02]'
                  : 'bg-white border border-slate-200/90 text-slate-700 hover:border-purple-300 hover:text-[#8B5CF6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scrolling Carousel with 3D Tilt Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-6 pt-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {filteredPrograms.map((program) => {
            const tagList = program.tags || program.highlights || [];
            const roleTitle = program.certification || program.role || 'Certified Professional';

            return (
              <TiltCard3D key={program.id}>
                <div>
                  {/* Card Top Pill Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-purple-50/90 border border-purple-200/80 text-[10px] font-extrabold text-[#8B5CF6] uppercase tracking-wider shadow-xs">
                      {program.badge || program.category}
                    </span>
                    
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                      <Clock className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      {program.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-[#0F1D38] leading-snug mb-3 group-hover:text-[#612D92] transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4 line-clamp-2">
                    {program.description}
                  </p>

                  {/* Program Highlights/Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 mb-6">
                    {tagList.slice(0, 4).map((t, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-slate-100/90 text-slate-700 font-semibold border border-slate-200/70">
                        <CheckCircle2 className="w-3 h-3 text-[#8B5CF6] shrink-0" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area with subtle 3D lift */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="truncate">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                      CERTIFICATION
                    </span>
                    <span className="text-[11px] font-black text-[#0F1D38] truncate block">
                      {roleTitle}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenModal(program.title)}
                    className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-bold transition-all shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 active:translate-y-0 shrink-0 cursor-pointer"
                  >
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </TiltCard3D>
            );
          })}
        </div>

      </div>
    </section>
  );
}
