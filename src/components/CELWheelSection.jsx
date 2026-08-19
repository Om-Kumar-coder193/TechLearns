import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { celStagesData } from '../data/celStages';
import { CheckCircle, Layers } from 'lucide-react';

export default function CELWheelSection() {
  const [activeStageId, setActiveStageId] = useState('01');

  const activeStage = celStagesData.find((s) => s.id === activeStageId) || celStagesData[0];

  return (
    <section id="cel" className="py-20 bg-gradient-to-b from-white via-purple-50/25 to-white border-t border-slate-200/80 relative overflow-hidden">
      
      {/* 3D Depth Ambience */}
      <div className="glow-bg top-1/3 right-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-[#612D92] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>WHY TECHLEARNS CEL SYSTEM?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0F1D38] leading-tight mb-3">
            Built by Industry Leaders to <span className="text-gradient-purple">Shape Future Engineers</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
            An operating system for your capability — select any of the 8 segments to reveal how we bridge academic theory and corporate practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive 8 Stages Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
              {celStagesData.map((stage) => {
                const isActive = stage.id === activeStageId;
                return (
                  <motion.button
                    key={stage.id}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`p-4 rounded-2xl text-left border transition-all flex items-center gap-3 cursor-pointer relative overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-[#612D92] to-[#7C3AED] border-[#612D92] text-white shadow-xl shadow-purple-950/20 scale-[1.02]'
                        : 'bg-white/90 backdrop-blur-md border-slate-200/90 text-slate-700 hover:border-purple-300 hover:text-[#612D92] hover:shadow-md'
                    }`}
                  >
                    <span className="text-2xl shrink-0">{stage.icon}</span>
                    <div className="overflow-hidden">
                      <span className={`text-[10px] font-mono font-bold uppercase block tracking-wider ${isActive ? 'text-purple-200' : 'text-[#612D92]'}`}>
                        Stage {stage.id}
                      </span>
                      <h4 className="text-xs font-bold leading-snug truncate">
                        {stage.title}
                      </h4>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Stage Detail Card + Generated Tech Image */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStageId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 sm:p-8 border-l-4 border-l-[#612D92] relative overflow-hidden shadow-2xl bg-white/95"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold text-[#612D92] uppercase tracking-widest bg-purple-100/90 px-3.5 py-1 rounded-full border border-purple-200 shadow-xs">
                    STAGE {activeStage.id} / 08
                  </span>
                  <span className="text-3xl">{activeStage.icon}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#0F1D38] mb-3 leading-snug">
                  {activeStage.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-5">
                  {activeStage.description}
                </p>

                {/* Generated Image Showcase embedded inside CEL detail */}
                <div className="my-4 rounded-2xl overflow-hidden border border-purple-100 shadow-md max-h-52 relative group">
                  <img
                    src="/corporate_sprint.png"
                    alt="Corporate Sprint Work Rituals"
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg">
                    ⚡ Live Corporate Sprint & Standup Rituals
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#612D92]">
                    <CheckCircle className="w-4 h-4 text-[#612D92]" />
                    <span>Status: {activeStage.status}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Verified Protocol
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
