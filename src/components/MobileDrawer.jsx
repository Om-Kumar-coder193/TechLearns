import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Sparkles, BookOpen, Layers, Award, HelpCircle, Phone, Mail } from 'lucide-react';
import { programsData } from '../data/programs';
import logo from '../assets/techlearns-logo.png';

export default function MobileDrawer({ isOpen, onClose, onOpenModal }) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Programs Catalog', href: '#programs', icon: <BookOpen className="w-4 h-4 text-[#612D92]" /> },
    { name: 'About Techlearns CEL', href: '#cel', icon: <Layers className="w-4 h-4 text-[#612D92]" /> },
    { name: 'Engineering Pipeline', href: '#pipeline', icon: <Award className="w-4 h-4 text-[#612D92]" /> },
    { name: 'Infrastructure & Stats', href: '#infrastructure', icon: <Sparkles className="w-4 h-4 text-[#612D92]" /> },
    { name: 'Frequently Asked Questions', href: '#faqs', icon: <HelpCircle className="w-4 h-4 text-[#612D92]" /> },
  ];

  const drawerContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden overflow-hidden">
          {/* Dark Glassmorphism Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Off-canvas Slidebar Navigation Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white border-l border-slate-200 p-6 overflow-y-auto shadow-2xl flex flex-col justify-between z-10"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="Techlearns Logo" className="h-7 w-auto object-contain" />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-500 hover:text-slate-900 rounded-xl bg-slate-100/90 hover:bg-slate-200 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with Icons */}
              <div className="mb-6">
                <span className="text-[10px] font-extrabold text-[#612D92] uppercase tracking-widest block mb-3">
                  NAVIGATION MENU
                </span>
                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-2.5 rounded-xl text-xs font-bold text-[#0F1D38] hover:text-[#612D92] hover:bg-purple-50/80 transition-all border border-transparent hover:border-purple-200/60"
                    >
                      <div className="flex items-center gap-3">
                        {link.icon}
                        <span>{link.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Featured Flagship Tracks */}
              <div className="pt-4 border-t border-slate-200">
                <span className="text-[10px] font-extrabold text-[#612D92] uppercase tracking-widest block mb-3">
                  POPULAR TRACKS
                </span>
                <div className="flex flex-col gap-2">
                  {programsData.slice(0, 4).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        onClose();
                        onOpenModal(p.title);
                      }}
                      className="text-left text-xs font-semibold text-slate-700 hover:text-[#612D92] p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-purple-300 hover:bg-purple-50/60 flex items-center justify-between transition-all cursor-pointer group"
                    >
                      <span className="truncate pr-2 group-hover:text-[#612D92]">{p.title}</span>
                      <span className="text-[10px] font-bold text-[#612D92] bg-purple-100 px-2 py-0.5 rounded-md shrink-0">{p.duration}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions & Support */}
            <div className="pt-6 border-t border-slate-200 mt-6 space-y-4">
              <button
                onClick={() => {
                  onClose();
                  onOpenModal();
                }}
                className="w-full py-3.5 px-4 rounded-full bg-[#612D92] hover:bg-[#4F1E7E] text-white font-bold text-xs tracking-wide shadow-md shadow-[#612D92]/25 flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.01]"
              >
                <Sparkles className="w-4 h-4 text-white" /> Book a Free Consultation
              </button>

              <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-slate-500 font-medium">
                <a href="tel:+917620092712" className="flex items-center gap-1 hover:text-[#612D92] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#612D92]" /> Call Advisor
                </a>
                <span>·</span>
                <a href="mailto:info@techlearns.in" className="flex items-center gap-1 hover:text-[#612D92] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#612D92]" /> Email Us
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  // Portal to document.body so the drawer renders over everything
  return typeof document !== 'undefined'
    ? ReactDOM.createPortal(drawerContent, document.body)
    : null;
}
