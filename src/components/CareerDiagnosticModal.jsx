import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CareerDiagnosticModal({ isOpen, onClose, defaultCourse = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: defaultCourse || 'Full-Stack Software Engineering with AI',
    experience: 'Fresh Graduate / Student'
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultCourse) {
      setFormData((prev) => ({ ...prev, course: defaultCourse }));
    }
  }, [defaultCourse]);

  // Lock body scroll when modal is open
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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog with Max-Height Scrolling for Mobile */}
      <div className="relative w-full max-w-lg bg-white border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-[#0F1D38]">
              Booking Confirmed!
            </h3>
            <p className="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
              Thank you <strong className="text-[#0F1D38]">{formData.name}</strong>. Your Free Career Diagnostic booking for <strong className="text-[#612D92]">{formData.course}</strong> has been registered.
            </p>
            <p className="text-xs text-emerald-700 bg-emerald-50 py-2.5 px-3 rounded-xl border border-emerald-200">
              Our Senior Career Advisor will connect with you via WhatsApp/Call on <span className="font-bold text-[#0F1D38]">{formData.phone}</span> within 2 hours.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 py-2.5 px-6 rounded-xl bg-[#612D92] hover:bg-[#4F1E7E] text-white font-bold text-xs shadow-md cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[#612D92] font-extrabold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-[#612D92]" /> Free Diagnostic Assessment
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#0F1D38] leading-tight mb-2">
              Book Your Career Diagnostic
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
              Evaluate your technical readiness, receive a role-fit diagnostic report, and map out your sprint schedule.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#612D92] focus:ring-2 focus:ring-purple-100 text-xs font-medium outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#612D92] focus:ring-2 focus:ring-purple-100 text-xs font-medium outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#612D92] focus:ring-2 focus:ring-purple-100 text-xs font-medium outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Target Program Track
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#612D92] focus:ring-2 focus:ring-purple-100 text-xs font-medium outline-hidden bg-white"
                >
                  <option value="Generative AI & Agentic AI Engineering">Generative AI & Agentic AI Engineering</option>
                  <option value="Full-Stack Software Engineering with AI">Full-Stack Software Engineering with AI</option>
                  <option value="Cloud, DevOps & SRE">Cloud, DevOps & SRE</option>
                  <option value="Cybersecurity & Cyber Defense">Cybersecurity & Cyber Defense</option>
                  <option value="Data Engineering & Applied Analytics">Data Engineering & Applied Analytics</option>
                  <option value="AI Foundations & Productivity">AI Foundations & Productivity</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Current Status
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#612D92] focus:ring-2 focus:ring-purple-100 text-xs font-medium outline-hidden bg-white"
                >
                  <option value="Fresh Graduate / Student">Fresh Graduate / Engineering Student</option>
                  <option value="Working Professional (0-2 Yrs)">Working Professional (0-2 Yrs Exp)</option>
                  <option value="Career Switcher">Career Switcher into Tech</option>
                  <option value="Final Year Project Developer">Final Year Project Developer</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#612D92] hover:bg-[#4F1E7E] text-white font-extrabold text-xs tracking-wide shadow-lg shadow-[#612D92]/25 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <Sparkles className="w-4 h-4 text-white" /> Confirm Free Booking
                </button>
              </div>

              <p className="text-[10px] text-slate-400 text-center font-medium">
                🔒 100% confidential. No spam policy. Instant diagnostic score breakdown.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
