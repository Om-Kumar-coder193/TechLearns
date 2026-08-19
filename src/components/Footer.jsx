import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import logo from '../assets/techlearns-logo.png';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand Logo & Address */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <img src={logo} alt="Techlearns Logo" className="h-8 w-auto object-contain" />

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm font-medium">
              India's Corporate Experience Learning (CEL) ecosystem. Train with live work practices, sprint ticket execution, pull request reviews, and verified Skill Passports.
            </p>

            <ul className="space-y-2.5 pt-2">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#612D92] shrink-0 mt-0.5" />
                <span>Avior Corporate Park, 425, Lal Bahadur Shastri Marg, Mulund West, Mumbai, Maharashtra 400080</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#612D92] shrink-0" />
                <a href="mailto:info@techlearns.in" className="hover:text-[#612D92] transition-colors">info@techlearns.in</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#612D92] shrink-0" />
                <a href="tel:+917620092712" className="hover:text-[#612D92] transition-colors">+91 76200 92712 / +91 75060 70698</a>
              </li>
            </ul>
          </div>

          {/* Col 2: Programs */}
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold text-[#0F1D38] uppercase tracking-wider mb-4">
              Programs
            </h4>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => onOpenModal('Generative AI & Agentic AI Engineering')} className="hover:text-[#612D92] transition-colors cursor-pointer text-left">Generative AI Engineering</button></li>
              <li><button onClick={() => onOpenModal('Full-Stack Software Engineering with AI')} className="hover:text-[#612D92] transition-colors cursor-pointer text-left">Full-Stack Software Eng</button></li>
              <li><button onClick={() => onOpenModal('Cloud, DevOps & SRE')} className="hover:text-[#612D92] transition-colors cursor-pointer text-left">Cloud & DevOps SRE</button></li>
              <li><button onClick={() => onOpenModal('Cybersecurity & Cyber Defense')} className="hover:text-[#612D92] transition-colors cursor-pointer text-left">Cybersecurity & Defense</button></li>
              <li><button onClick={() => onOpenModal('Data Engineering & Applied Analytics')} className="hover:text-[#612D92] transition-colors cursor-pointer text-left">Data Engineering</button></li>
              <li><button onClick={() => onOpenModal('AI Foundations & Productivity')} className="hover:text-[#612D92] transition-colors cursor-pointer text-left">AI Foundations</button></li>
            </ul>
          </div>

          {/* Col 3: Ecosystem */}
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold text-[#0F1D38] uppercase tracking-wider mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#cel" className="hover:text-[#612D92] transition-colors">CEL Wheel System</a></li>
              <li><a href="#pipeline" className="hover:text-[#612D92] transition-colors">5-Step Engineering Pipeline</a></li>
              <li><a href="#infrastructure" className="hover:text-[#612D92] transition-colors">Future Skills League (FSL)</a></li>
              <li><button onClick={() => onOpenModal('Skill Passport Verification')} className="hover:text-[#612D92] transition-colors cursor-pointer text-left">Skill Passport Verification</button></li>
              <li><a href="#infrastructure" className="hover:text-[#612D92] transition-colors">Institutional Tie-ups</a></li>
              <li><a href="#faqs" className="hover:text-[#612D92] transition-colors">Entrance Test (TLET)</a></li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h4 className="text-xs sm:text-sm font-extrabold text-[#0F1D38] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-3 mb-6">
              <a href="#" className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#612D92] hover:border-purple-300 transition-colors shadow-xs" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#612D92] hover:border-purple-300 transition-colors shadow-xs" aria-label="X (Twitter)">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#612D92] hover:border-purple-300 transition-colors shadow-xs" aria-label="YouTube">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
            
            <button
              onClick={() => onOpenModal()}
              className="w-full py-2.5 px-3 rounded-xl bg-[#612D92] hover:bg-[#4F1E7E] text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
            >
              Book Diagnostic Assessment
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-medium">
          <p>© 2026 Techlearns Academy. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-[#612D92] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#612D92] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#612D92] transition-colors">Security & Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
