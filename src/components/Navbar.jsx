import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, ArrowRight } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';
import logo from '../assets/techlearns-logo.png';

export default function Navbar({ onOpenModal }) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 250);
  };

  const handleProgramsClick = (e) => {
    e.preventDefault();
    setIsMegaMenuOpen(!isMegaMenuOpen);
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-2xl border-b border-slate-200/70 shadow-md shadow-purple-950/5 py-0' 
          : 'bg-transparent border-b border-transparent py-1.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        
        {/* Official Techlearns Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Techlearns Logo"
            className="h-7 sm:h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          
          {/* Programs Dropdown & Scroll Link */}
          <div
            className="py-6 relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#programs"
              onClick={handleProgramsClick}
              className="flex items-center gap-1.5 text-sm font-bold text-[#0F1D38] hover:text-[#612D92] transition-colors py-1 cursor-pointer group"
            >
              <span>Programs</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180 text-[#612D92]' : 'text-slate-400 group-hover:text-[#612D92]'}`} />
            </a>
          </div>

          <a href="#cel" className="text-sm font-bold text-[#0F1D38] hover:text-[#612D92] transition-colors py-1">
            About Us
          </a>

          <a href="#pipeline" className="text-sm font-bold text-[#0F1D38] hover:text-[#612D92] transition-colors py-1">
            Student Life
          </a>

          <a href="#infrastructure" className="text-sm font-bold text-[#0F1D38] hover:text-[#612D92] transition-colors py-1">
            Admissions
          </a>

          <a href="#faqs" className="text-sm font-bold text-[#0F1D38] hover:text-[#612D92] transition-colors py-1">
            Contact Us
          </a>

          <a href="#faqs" className="text-sm font-bold text-[#0F1D38] hover:text-[#612D92] transition-colors py-1">
            Blogs
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenModal()}
            className="hidden sm:inline-flex items-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#612D92] to-[#7C3AED] hover:from-[#51237A] hover:to-[#6D28D9] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-purple-900/25 hover:shadow-purple-900/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer relative overflow-hidden group border border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:animate-sweep" />
            <span>Book a free consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            className="lg:hidden p-2.5 rounded-2xl text-gray-700 hover:text-[#612D92] hover:bg-purple-50 transition-colors border border-slate-200/80"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mega Menu Overlay */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setIsMegaMenuOpen(false);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onOpenModal={onOpenModal}
        />
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        onOpenModal={onOpenModal}
      />
    </header>
  );
}
