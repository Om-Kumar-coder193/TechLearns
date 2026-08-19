import React, { useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { pathwayStepsData } from '../data/stats';
import { ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

function PipelineStepCard({ s, idx, onOpenModal }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 280,
    damping: 20,
  });

  const mouseYSpring = useSpring(y, {
    stiffness: 280,
    damping: 20,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ['5deg', '-5deg']
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ['-5deg', '5deg']
  );

  const glareX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(
        circle 180px at ${gx} ${gy},
        rgba(139, 92, 246, 0.15) 0%,
        transparent 70%
      )`
  );

  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const rect = e.currentTarget.getBoundingClientRect();

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
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
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: idx * 0.1,
      }}
      whileHover={{ y: -6 }}
      className="glass-card p-5 border border-slate-200/90 hover:border-purple-300/80 flex flex-col justify-between relative bg-white/95 shadow-md shadow-purple-950/5 hover:shadow-xl transition-all group overflow-hidden rounded-2xl"
    >
      {/* Card-specific glare */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: glareBackground,
        }}
      />

      <div
        style={{ transform: 'translateZ(20px)' }}
        className="relative z-20"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#612D92] to-[#8B5CF6] text-white font-black text-xs flex items-center justify-center shadow-sm">
            {s.step}
          </span>

          <span className="text-2xl group-hover:scale-110 transition-transform">
            {s.icon}
          </span>
        </div>

        <span className="text-[10px] font-extrabold text-[#612D92] uppercase tracking-wider block mb-1">
          {s.tagline}
        </span>

        <h3 className="text-sm font-black text-[#0F1D38] mb-2 leading-snug group-hover:text-[#612D92] transition-colors">
          {s.title}
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed font-medium">
          {s.description}
        </p>
      </div>

      <div
        style={{ transform: 'translateZ(25px)' }}
        className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between relative z-20"
      >
        <button
          type="button"
          onClick={() =>
            onOpenModal?.(`TLET Step ${s.step}: ${s.title}`)
          }
          className="text-[11px] font-extrabold text-[#612D92] hover:text-[#4F1E7E] flex items-center gap-1 transition-colors cursor-pointer group-hover:translate-x-0.5"
        >
          Details
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

export default function EngineeringPipeline({ onOpenModal }) {
  const [cardMouse, setCardMouse] = useState({
    x: 50,
    y: 50,
  });

  const handleCardAreaMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setCardMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="pipeline"
      className="py-20 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-[#612D92] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>YOUR ENGINEERING PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0F1D38] leading-tight mb-3">
            Pathway to{' '}
            <span className="text-gradient-purple">
              Your Success
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
            Five structural milestones that take you from logical
            orientation to an active corporate software engineering launch.
          </p>
        </motion.div>

        {/* ============================= */}
        {/* CARD SECTION ONLY */}
        {/* ============================= */}

        <div
          onMouseMove={handleCardAreaMouseMove}
          className="relative mb-12"
        >
          {/* Cursor-following glow ONLY inside card area */}
          <div
            className="absolute pointer-events-none rounded-full blur-[100px] transition-all duration-150 ease-out z-0"
            style={{
              width: '800px',
              height: '800px',
              left: `${cardMouse.x}%`,
              top: `${cardMouse.y}%`,
              transform: 'translate(-50%, -50%)',

              background: `
                radial-gradient(
                  circle,
                  rgba(216, 180, 254, 0.32) 0%,
                  rgba(168, 85, 247, 0.20) 22%,
                  rgba(139, 92, 246, 0.12) 42%,
                  rgba(124, 58, 237, 0.05) 60%,
                  transparent 75%
                )
              `,

              opacity: 0.9,
            }}
          />

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {pathwayStepsData.map((s, idx) => (
              <PipelineStepCard
                key={s.step}
                s={s}
                idx={idx}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        </div>

        {/* Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#612D92] via-[#51237A] to-[#0F1D38] text-white p-6 sm:p-10 shadow-2xl shadow-purple-950/20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-white/15 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="md:col-span-7 space-y-4 text-left relative z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/15 backdrop-blur-md text-purple-200 px-3.5 py-1.5 rounded-full border border-purple-300/30 inline-flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              PRACTICAL WORKFLOW EXPERIENCE
            </span>

            <h3 className="text-2xl sm:text-3xl font-black leading-snug">
              Work directly on dual-monitor development environments with AI
              Copilots
            </h3>

            <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed font-medium">
              Train with real-world CI/CD pipelines, automated testing
              suites, and AI coding assistants under direct supervision of
              senior engineering leads.
            </p>

            <button
              type="button"
              onClick={() => onOpenModal?.()}
              className="mt-2 py-3 px-6 rounded-2xl bg-white hover:bg-slate-100 text-[#612D92] font-black text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Start Your Pipeline Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-2xl border border-purple-400/30 relative group z-10">
            <img
              src="/ai_developer.png"
              alt="AI Engineer on Dual Monitors"
              loading="lazy"
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}