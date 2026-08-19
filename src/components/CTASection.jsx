import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection({ onOpenModal }) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white"
    >
      {/* Cursor-following light */}
      <div
        className="absolute pointer-events-none w-[500px] h-[500px] rounded-full blur-3xl opacity-40 transition-all duration-150 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(168,85,247,0.35) 0%, rgba(124,58,237,0.15) 35%, transparent 70%)',
        }}
      />

      {/* Background Glow Orb */}
      <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-35" />

      {/* Main Banner Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto rounded-3xl p-8 sm:p-14 lg:p-18 bg-gradient-to-r from-[#4C1D95] via-[#612D92] to-[#0F1D38] border border-white/20 shadow-2xl shadow-purple-950/25 backdrop-blur-2xl text-center relative z-10 overflow-hidden"
      >
       {/* HUGE Cursor-Following Glow */}
        <div
          className="absolute pointer-events-none rounded-full blur-[100px] opacity-60 transition-all duration-200 ease-out"
          style={{
            width: '700px',
            height: '700px',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            background: `
              radial-gradient(
                circle,
                rgba(255, 255, 255, 0.45) 0%,
                rgba(255, 255, 255, 0.3) 30%,
                rgba(255, 255, 255, 0.18) 60%,
                rgba(255, 255, 255, 0.08) 90%,
                transparent 100%
              )
            `,
          }}
        />

        {/* Existing ambient glows */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-400/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        {/* Content */}
        <div className="relative z-10">

          <div className="inline-flex items-center justify-center gap-3 py-2 px-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-xs sm:text-sm font-extrabold text-purple-100 uppercase tracking-widest mb-6">
            <span className="w-6 h-[1px] bg-purple-300/50 hidden sm:inline-block" />
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span>YOUR FUTURE, YOUR CHOICE</span>
            <span className="w-6 h-[1px] bg-purple-300/50 hidden sm:inline-block" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-6">
            Ready to experience how <br />
            technology is{' '}
            <span className="text-purple-200">
              actually built?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-purple-100 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Book your free career diagnostic assessment. Get a personalized
            role-fit roadmap and baseline report in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20">
            <button
              onClick={() => onOpenModal()}
              className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-white hover:bg-slate-50 text-[#612D92] font-black text-sm tracking-wide shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer relative overflow-hidden group border border-white"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/30 to-transparent translate-x-[-100%] group-hover:animate-sweep" />

              <Sparkles className="w-4 h-4 text-[#612D92]" />

              <span>Book Free Career Diagnostic</span>
            </button>

            <a
              href="#programs"
              className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-purple-950/70 hover:bg-purple-950/90 border border-purple-300/40 text-white font-extrabold text-sm transition-all flex items-center justify-center gap-2 hover:border-purple-300 hover:scale-105 active:scale-95 shadow-lg"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 text-purple-200" />
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-xs text-purple-200/90 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>
              No commitment required · Confidential evaluation · Instant feedback
            </span>
          </div>

        </div>
      </motion.div>
    </section>
  );
}