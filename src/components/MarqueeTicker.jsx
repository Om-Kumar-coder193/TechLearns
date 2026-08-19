import React from 'react';
import { Zap } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    '⚡ A NEXT-GENERATION CORPORATE EXPERIENCE LEARNING ECOSYSTEM',
    '🎯 DIAGNOSTIC SKILL BASELINE & ROLE FIT',
    '🏢 CORPORATE WORK RITUALS & DAILY SPRINTS',
    '🏆 FUTURE SKILLS LEAGUE COMPETITIONS',
    '💳 VERIFIED TAMPER-PROOF SKILL PASSPORT',
    '📜 PRE-PLACEMENT OFFER (PPO) OPPORTUNITIES',
    '👨‍💻 MENTORSHIP BY GLOBAL BRAND ARCHITECTS',
    '🚀 LEARN. EXPERIENCE. BUILD. COMPETE. PROVE. LEAD.'
  ];

  return (
    <div className="w-full bg-[#612D92] text-white py-3.5 overflow-hidden select-none shadow-sm">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-3 px-6 text-xs font-bold tracking-wider uppercase">
            <span>{text}</span>
            <Zap className="w-3 h-3 text-purple-200 fill-purple-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
