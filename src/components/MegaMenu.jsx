import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { programsData } from '../data/programs';

export default function MegaMenu({ isOpen, onOpenModal, onClose, onMouseEnter, onMouseLeave }) {
  if (!isOpen) return null;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed top-20 left-0 right-0 w-full bg-white/98 border-b border-purple-200 shadow-2xl backdrop-blur-xl py-8 px-6 sm:px-12 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        
        {/* Left Column: Featured Highlight */}
        <div className="col-span-4 bg-gradient-to-br from-purple-50 via-purple-50/70 to-indigo-50/50 p-6 rounded-2xl border border-purple-200 shadow-xs relative overflow-hidden">
          <div className="flex items-center gap-2 text-[#612D92] font-extrabold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-[#612D92]" /> Featured Flagship Track
          </div>
          <h4 className="text-xl font-extrabold text-[#0F1D38] mb-2 leading-snug">
            Full-Stack Software Engineering with AI
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed mb-6">
            Master full-stack web architectures, production microservices, CI/CD pipelines, and AI coding assistants with guaranteed PPO eligibility.
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-purple-200/60">
            <span className="text-xs font-bold text-[#612D92] bg-purple-100/90 px-3 py-1 rounded-lg border border-purple-200">
              ⏱ 6–9 Months Sprint
            </span>
            <button
              onClick={() => {
                onClose();
                if (onOpenModal) onOpenModal('Full-Stack Software Engineering with AI');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-black text-[#612D92] hover:text-[#4F1E7E] transition-colors cursor-pointer"
            >
              Enroll Track <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Course Categories & Programs Grid */}
        <div className="col-span-8 grid grid-cols-2 gap-4">
          {programsData.map((prog) => (
            <div
              key={prog.id}
              onClick={() => {
                onClose();
                if (onOpenModal) onOpenModal(prog.title);
              }}
              className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/80 hover:bg-purple-50/90 hover:border-purple-300 transition-all cursor-pointer group shadow-2xs hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h5 className="text-sm font-bold text-[#0F1D38] group-hover:text-[#612D92] transition-colors">
                  {prog.title}
                </h5>
                <span className="text-[10px] font-bold text-[#612D92] bg-purple-100 px-2 py-0.5 rounded">
                  {prog.duration}
                </span>
              </div>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {prog.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
