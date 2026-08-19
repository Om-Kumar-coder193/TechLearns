import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useReducedMotion,
  animate as animateValue,
} from 'framer-motion';
import { ShieldCheck, Users, Cpu, Bot, ChevronRight, Briefcase, Star, Rocket, Target } from 'lucide-react';
import logo from '../assets/techlearns-logo.png';

export default function InfrastructureStats() {
  const [activeSlice, setActiveSlice] = useState(0);
  const [isWheelHovered, setIsWheelHovered] = useState(false);
  const [focusedSlice, setFocusedSlice] = useState(null);

  const prefersReducedMotion = useReducedMotion();

  const wheelSlices = [
    {
      id: 0,
      title: 'Best in Class',
      line1: 'Best in',
      line2: 'Class',
      subtitle: 'Industry Instructors & Architects',
      color: '#F97316', // Orange
      activeBg: 'bg-orange-50/80 border-orange-300 text-orange-950 font-bold',
      icon: <Users className="w-5 h-5 text-white" />,
      svgIconPath: (
        <g transform="scale(0.65) translate(-12, -12)">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="9" cy="7" r="4" fill="none" stroke="white" strokeWidth="2" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" fill="none" stroke="white" strokeWidth="2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="white" strokeWidth="2" />
        </g>
      ),
      desc: 'Mentorship and code reviews directly by principal engineers and software architects from leading global tech firms.'
    },
    {
      id: 1,
      title: 'Corporate-backed',
      line1: 'Corporate-',
      line2: 'backed',
      subtitle: 'Enterprise Work Rituals',
      color: '#EA580C', // Coral Orange
      activeBg: 'bg-orange-50/80 border-orange-300 text-orange-950 font-bold',
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      svgIconPath: (
        <g transform="scale(0.65) translate(-12, -12)">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="white" strokeWidth="2" />
          <path d="m9 12 2 2 4-4" fill="none" stroke="white" strokeWidth="2" />
        </g>
      ),
      desc: 'Simulated corporate engineering operating environment with Jira boards, sprint ticket pipelines, and PR approvals.'
    },
    {
      id: 2,
      title: 'Industry-aligned',
      line1: 'Industry-',
      line2: 'aligned',
      subtitle: 'Curriculum & Delivery Pedagogy',
      color: '#C2410C', // Dark Red-Orange
      activeBg: 'bg-red-50/80 border-red-300 text-red-950 font-bold',
      icon: <Target className="w-5 h-5 text-white" />,
      svgIconPath: (
        <g transform="scale(0.65) translate(-12, -12)">
          <circle cx="12" cy="12" r="9" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" fill="white" />
        </g>
      ),
      desc: 'Continuously updated curriculum tailored around modern microservices, AI coding assistants, and cloud architectures.'
    },
    {
      id: 3,
      title: 'AI-Enabled',
      line1: 'AI-Enabled',
      line2: '',
      subtitle: 'Adaptive AI Learning Coach',
      color: '#DC2626', // Bright Red
      activeBg: 'bg-red-50/80 border-red-300 text-red-950 font-bold',
      icon: <Bot className="w-5 h-5 text-white" />,
      svgIconPath: (
        <g transform="scale(0.65) translate(-12, -12)">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" fill="none" stroke="white" strokeWidth="2" />
          <path d="M12 6v4M6 12h4M14 12h4M12 14v4" stroke="white" strokeWidth="2" />
        </g>
      ),
      desc: '24/7 AI learning coach providing instant automated feedback, code debugging suggestions, and diagnostic mapping.'
    },
    {
      id: 4,
      title: 'Early Exposure',
      line1: 'Early',
      line2: 'Exposure',
      subtitle: 'To Corporate Culture & Work Rituals',
      color: '#2563EB', // Royal Blue
      activeBg: 'bg-blue-50/80 border-blue-300 text-blue-950 font-bold',
      icon: <Rocket className="w-5 h-5 text-white" />,
      svgIconPath: (
        <g transform="scale(0.65) translate(-12, -12)">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="none" stroke="white" strokeWidth="2" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-2.05 9A22 22 0 0 1 16 13l-4 2z" fill="none" stroke="white" strokeWidth="2" />
        </g>
      ),
      desc: 'Immediate immersion into professional communication, stand-ups, code reviews, and tech presentation skills.'
    },
    {
      id: 5,
      title: 'Hyper-personalised',
      line1: 'Hyper-',
      line2: 'personalised',
      subtitle: 'Custom Skill Diagnostic Pathway',
      color: '#3B82F6', // Light Blue
      activeBg: 'bg-sky-50/80 border-sky-300 text-sky-950 font-bold',
      icon: <Cpu className="w-5 h-5 text-white" />,
      svgIconPath: (
        <g transform="scale(0.65) translate(-12, -12)">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="12" cy="7" r="4" fill="none" stroke="white" strokeWidth="2" />
        </g>
      ),
      desc: 'Personalised learning pace based on initial TLET diagnostic scores to bridge specific skill gaps rapidly.'
    },
    {
      id: 6,
      title: 'Niche & Specialized',
      line1: 'Niche &',
      line2: 'Specialized',
      subtitle: 'Domain & Stack Mastery',
      color: '#7C3AED', // Purple
      activeBg: 'bg-purple-50/80 border-purple-300 text-purple-950 font-bold',
      icon: <Star className="w-5 h-5 text-white" />,
      svgIconPath: (
        <g transform="scale(0.65) translate(-12, -12)">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="none" stroke="white" strokeWidth="2" />
        </g>
      ),
      desc: 'Deep specialization across GenAI, Full-stack Web, DevOps SRE, Cybersecurity, and Data Engineering tracks.'
    },
    {
      id: 7,
      title: 'Hiring Commitment',
      line1: 'Hiring',
      line2: 'Commitment',
      subtitle: 'PPO Eligibility before admission',
      color: '#5B21B6', // Deep Purple
      activeBg: 'bg-purple-50/80 border-purple-[#8B5CF6] text-purple-950 font-bold',
      icon: <Briefcase className="w-5 h-5 text-white" />,
      svgIconPath: (
        <g transform="scale(0.65) translate(-12, -12)">
          <rect width="20" height="14" x="2" y="7" rx="2" fill="none" stroke="white" strokeWidth="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" fill="none" stroke="white" strokeWidth="2" />
        </g>
      ),
      desc: 'Structural hiring commitment pathways through 60+ active employer partners with pre-placement offer intent.'
    }
  ];

  // 4x3 Grid of 12 Big Solid Metric Cards matching img1
  const gridStats = [
    { value: '30+', label: 'Years of Legacy', sublabel: 'Academic Pedigree', bg: 'bg-[#1E293B]' },
    { value: '20K+', label: 'Global Students', sublabel: 'Across All Tracks', bg: 'bg-[#3B0764]' },
    { value: '120+', label: 'Countries Presence', sublabel: 'Global Network', bg: 'bg-[#581C87]' },
    { value: '40+', label: 'Franchisees & Centers', sublabel: 'PAN India', bg: 'bg-[#831843]' },

    { value: 'No.1', label: 'AI-Powered', sublabel: 'Digital Learning Platform', bg: 'bg-[#1E293B]' },
    { value: '11+', label: 'Copyrighted Books', sublabel: 'Professional Workbooks', bg: 'bg-[#3B0764]' },
    { value: '1200+', label: 'Exam Prep Materials', sublabel: 'CPA · ACCA · CMA · IFRS', bg: 'bg-[#581C87]' },
    { value: '280+', label: 'Empanelled Instructors', sublabel: 'Senior Tech Leads', bg: 'bg-[#831843]' },

    { value: '250+', label: 'Team Size', sublabel: 'Dedicated Mentors', bg: 'bg-[#1E293B]' },
    { value: '40+', label: 'Industry Mentors', sublabel: 'Fortune 500 Leads', bg: 'bg-[#3B0764]' },
    { value: '60+', label: 'Placement Partners', sublabel: 'Active Employers', bg: 'bg-[#581C87]' },
    { value: '50+', label: 'Institutional Tie-ups', sublabel: 'Top Engineering Colleges', bg: 'bg-[#831843]' }
  ];

  const current = wheelSlices[activeSlice];

  // ---- Wheel rotation "kick" animation -------------------------------
  // Instead of physically re-orienting the wheel (which would desync the
  // colored wedges from their labels), the wheel gets a short, springy
  // rotational "kick" in the direction of the newly selected slice and
  // eases back to rest. This reads as a natural spin without ever
  // breaking the alignment between a slice's color and its label.
  const wheelRotation = useMotionValue(0);
  const prevSliceRef = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      wheelRotation.set(0);
      prevSliceRef.current = activeSlice;
      return;
    }

    const prev = prevSliceRef.current;
    let diff = activeSlice - prev;
    // shortest angular direction around the 8-slice wheel
    if (diff > 4) diff -= 8;
    if (diff < -4) diff -= -8;
    const direction = diff === 0 ? 1 : Math.sign(diff);

    wheelRotation.set(direction * 9);
    const controls = animateValue(wheelRotation, 0, {
      type: 'spring',
      stiffness: 170,
      damping: 15,
      mass: 0.9
    });

    prevSliceRef.current = activeSlice;
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlice]);

  const handleSelect = (id) => setActiveSlice(id);

  const handleSliceKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSelect(id);
    }
  };

  return (
    <section id="infrastructure" className="pt-12 pb-16 bg-white border-t border-slate-200 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Top Header matching exact screenshot typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0F1D38] uppercase tracking-tight leading-tight">
            BUILT BY INDUSTRY LEADERS TO SHAPE <br />
            <span className="text-[#8B5CF6]">FUTURE ENGINEERS</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-3">
            Explore the <strong className="text-[#8B5CF6] font-bold">8 pillars</strong> powering the Techlearns Corporate Experience Engine below:
          </p>
        </motion.div>

        {/* Interactive Circular Wheel Diagram + Dotted Connector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mb-16 relative">

          {/* Left / Main SVG Wheel (LG 6 Cols) */}
          <div
            className="lg:col-span-6 relative flex items-center justify-center py-4 overflow-hidden sm:overflow-visible"
            onMouseEnter={() => setIsWheelHovered(true)}
            onMouseLeave={() => setIsWheelHovered(false)}
          >

            {/* Ambient glow behind the wheel */}
            <div
              className="hidden sm:block absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full pointer-events-none transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle, ${current.color}22 0%, transparent 70%)`,
                opacity: isWheelHovered ? 1 : 0.6
              }}
            />

            {/* Outer Animated Dotted Orbit Ring (Desktop & Tablet) — slow ambient spin */}
            <motion.div
              className="hidden sm:block absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full border-2 border-dashed border-purple-300/70 pointer-events-none"
              animate={prefersReducedMotion ? {} : { rotate: 360 }}
              transition={prefersReducedMotion ? {} : { repeat: Infinity, duration: 90, ease: 'linear' }}
            />

            {/* Orbit Node Dots around outer ring matching screenshot */}
            <div className="hidden sm:block">
              {[...Array(8)].map((_, idx) => {
                const angleDeg = idx * 45;
                const angleRad = ((angleDeg - 90) * Math.PI) / 180;
                const radius = 215;
                const isSelected = idx === activeSlice;
                const slice = wheelSlices[idx];

                return (
                  <motion.div
                    key={idx}
                    animate={{ scale: isSelected ? 1.35 : 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className={`absolute rounded-full border-2 border-white z-20 pointer-events-none ${
                      isSelected ? 'w-3.5 h-3.5' : 'w-2.5 h-2.5 bg-[#8B5CF6] shadow-md'
                    }`}
                    style={{
                      left: `calc(50% + ${radius * Math.cos(angleRad)}px - ${isSelected ? 7 : 5}px)`,
                      top: `calc(50% + ${radius * Math.sin(angleRad)}px - ${isSelected ? 7 : 5}px)`,
                      backgroundColor: isSelected ? slice.color : undefined,
                      boxShadow: isSelected ? `0 0 12px 3px ${slice.color}99` : undefined
                    }}
                  />
                );
              })}
            </div>

            {/* SVG Interactive Wheel with Responsive Sizing */}
            <div className="relative w-full max-w-[300px] sm:max-w-[420px] aspect-square mx-auto z-10">
              <motion.svg
                viewBox="0 0 400 400"
                className="w-full h-full transform -rotate-22.5"
                // style={{ rotate: wheelRotation }}
              >
                <defs>
                  {wheelSlices.map((slice) => (
                    <filter key={slice.id} id={`glow-${slice.id}`} x="-60%" y="-60%" width="220%" height="220%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  ))}
                </defs>

                {wheelSlices.map((slice, i) => {
                  const angle = 45;
                  const startAngle = i * angle;
                  const endAngle = (i + 1) * angle;

                  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
                    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
                    return {
                      x: centerX + radius * Math.cos(angleInRadians),
                      y: centerY + radius * Math.sin(angleInRadians)
                    };
                  };

                  const describeArc = (x, y, innerRadius, outerRadius, startA, endA) => {
                    const startOuter = polarToCartesian(x, y, outerRadius, endA);
                    const endOuter = polarToCartesian(x, y, outerRadius, startA);
                    const startInner = polarToCartesian(x, y, innerRadius, endA);
                    const endInner = polarToCartesian(x, y, innerRadius, startA);

                    const largeArcFlag = endA - startA <= 180 ? '0' : '1';

                    return [
                      'M', startOuter.x, startOuter.y,
                      'A', outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
                      'L', endInner.x, endInner.y,
                      'A', innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
                      'Z'
                    ].join(' ');
                  };

                  const isSelected = activeSlice === slice.id;
                  const isFocused = focusedSlice === slice.id;
                  const isHighlighted = isSelected || isFocused;
                  const path = describeArc(200, 200, 95, 185, startAngle + 1, endAngle - 1);
                  const midAngle = startAngle + angle / 2;

                  // Center position of icon + text group within segment arc
                  const labelPos = polarToCartesian(200, 200, 140, midAngle);

                  return (
                    <g
                      key={slice.id}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isSelected}
                      aria-label={`View ${slice.title} pillar details`}
                      className="cursor-pointer focus:outline-none"
                      onFocus={() => setFocusedSlice(slice.id)}
                      onBlur={() => setFocusedSlice(null)}
                      onKeyDown={(e) => handleSliceKeyDown(e, slice.id)}
                      onMouseEnter={() => {
                        setActiveSlice(slice.id);
                        setIsWheelHovered(true);
                      }}
                      onMouseLeave={() => setIsWheelHovered(false)}
                      onClick={() => handleSelect(slice.id)}
                    >
                      <motion.path
                        d={path}
                        fill={slice.color}
                        stroke="white"
                        strokeWidth={isHighlighted ? 3 : 2}
                        className="transition-[filter] duration-300 ease-out"
                        animate={{
                          scale: isSelected ? 1.06 : 1,
                          opacity: isSelected ? 1 : 0.86
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        style={{
                          transformOrigin: '200px 200px',
                          filter: isHighlighted
                            ? `drop-shadow(0px 8px 14px ${slice.color}80) drop-shadow(0px 0px 10px ${slice.color}66)`
                            : 'drop-shadow(0px 2px 4px rgba(15,29,56,0.12))'
                        }}
                      />

                      {/* Icon (Top) + 2-Line Readable Label (Bottom) grouped together matching reference image */}
                      <g transform={`rotate(22.5, ${labelPos.x}, ${labelPos.y})`} className="pointer-events-none text-center">
                        {/* Icon centered above text */}
                        <motion.g
                          transform={`translate(${labelPos.x}, ${labelPos.y - 18})`}
                          animate={{ scale: isSelected ? 1.15 : 1 }}
                          transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                          style={{ transformOrigin: `${labelPos.x}px ${labelPos.y - 18}px` }}
                        >
                          {slice.svgIconPath}
                        </motion.g>

                        {/* Line 1 centered below icon */}
                        <text
                          x={labelPos.x}
                          y={slice.line2 ? labelPos.y + 4 : labelPos.y + 10}
                          fill="#FFFFFF"
                          fontSize={isSelected ? '9.5' : '8.5'}
                          fontWeight="800"
                          textAnchor="middle"
                          dominantBaseline="central"
                          className="uppercase tracking-tight transition-[font-size] duration-300"
                        >
                          {slice.line1}
                        </text>

                        {/* Line 2 centered below line 1 */}
                        {slice.line2 && (
                          <text
                            x={labelPos.x}
                            y={labelPos.y + 16}
                            fill="#FFFFFF"
                            fontSize={isSelected ? '9.5' : '8.5'}
                            fontWeight="800"
                            textAnchor="middle"
                            dominantBaseline="central"
                            className="uppercase tracking-tight transition-[font-size] duration-300"
                          >
                            {slice.line2}
                          </text>
                        )}
                      </g>
                    </g>
                  );
                })}
              </motion.svg>

              {/* Center Hole Text Box */}
              <motion.div
                animate={{
                  boxShadow: `0 0 0 4px ${current.color}22, 0 12px 30px -8px ${current.color}55`
                }}
                transition={{ duration: 0.4 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-white border-4 border-purple-100 flex flex-col items-center justify-center p-3 sm:p-4 text-center z-20"
              >
                <motion.div
                  animate={{ backgroundColor: current.color }}
                  transition={{ duration: 0.4 }}
                  className="w-6 h-0.5 mb-1"
                />
                <span className="text-[9px] sm:text-[10px] font-extrabold text-[#8B5CF6] uppercase tracking-wider block">
                  WHY
                </span>
                <h3 className="text-sm sm:text-lg font-black text-[#0F1D38] leading-tight">
                  Techlearns
                </h3>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#8B5CF6]">
                  CEL Engine?
                </span>
                <p className="text-[8px] sm:text-[9px] text-slate-500 font-semibold mt-1">
                  For Future Engineers
                </p>
              </motion.div>
            </div>

          </div>

          {/* Black Dotted Curved Arrow */}
          <AnimatePresence>
            {isWheelHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute left-[calc(47%-45px)] top-[23%] z-30 pointer-events-none"
              >
                <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                  <defs>
                    <marker
                      id="arrow-black"
                      viewBox="0 0 10 10"
                      refX="6"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#000000" />
                    </marker>
                  </defs>

                  <motion.path
                    d="M 5 60 C 48 60, 72 20, 112 20"
                    stroke="#000000"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    markerEnd="url(#arrow-black)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{ pathLength: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right Detail Card + 2-Column Button Navigator (LG 6 Cols) */}
          <div className="lg:col-span-6 text-left space-y-4">

            {/* Top Detail Card matching screenshot */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlice}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -15 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-3xl p-5 sm:p-7 border-2 shadow-xl relative overflow-hidden"
                style={{
                  borderColor: `${current.color}55`,
                  boxShadow: `0 20px 40px -20px ${current.color}55, 0 4px 12px rgba(15,29,56,0.08)`
                }}
              >
                {/* subtle gradient wash in the corner for visual hierarchy */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none opacity-30"
                  style={{ background: `radial-gradient(circle, ${current.color} 0%, transparent 70%)` }}
                />

                <div className="flex items-center gap-4 mb-4 relative">
                  <motion.div
                    layout
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0"
                    animate={{ backgroundColor: current.color }}
                    transition={{ duration: 0.35 }}
                  >
                    {current.icon}
                  </motion.div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest block mb-0.5" style={{ color: current.color }}>
                      PILLAR {current.id + 1} OF 8
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black text-[#0F1D38] leading-tight">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-slate-800 mb-2 relative">
                  {current.subtitle}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-6 relative">
                  {current.desc}
                </p>

                {/* Footer Dots matching screenshot */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs relative">
                  <span className="text-slate-500 font-medium text-[10px] sm:text-[11px]">
                    Hover slices on wheel to inspect
                  </span>
                  <div className="flex items-center gap-1.5">
                    {wheelSlices.map((s) => (
                      <motion.span
                        key={s.id}
                        animate={{
                          scale: s.id === activeSlice ? 1.3 : 1,
                          opacity: s.id === activeSlice ? 1 : 0.4
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: s.color }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 2-Column Navigator Buttons matching screenshot exactly */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {wheelSlices.map((slice) => {
                const isSelected = slice.id === activeSlice;
                return (
                  <motion.button
                    key={slice.id}
                    type="button"
                    aria-current={isSelected}
                    aria-label={`Show ${slice.title} pillar`}
                    onClick={() => handleSelect(slice.id)}
                    onMouseEnter={() => {
                      setActiveSlice(slice.id);
                      setIsWheelHovered(true);
                    }}
                    onMouseLeave={() => setIsWheelHovered(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-left border text-xs font-bold cursor-pointer flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-400 transition-colors duration-200 ${
                      isSelected
                        ? `${slice.activeBg} shadow-sm border-2`
                        : 'bg-slate-50/80 border-slate-200 text-[#0F1D38] hover:bg-purple-50/80 hover:border-purple-300'
                    }`}
                  >
                    <span className="truncate">{slice.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isSelected ? 'text-[#0F1D38] translate-x-0.5' : 'text-slate-400'}`} />
                  </motion.button>
                );
              })}
            </div>

          </div>

        </div>

        {/* THE POWERHOUSE BEHIND TECHLEARNS Section matching img1 */}
        <div className="pt-10 border-t border-slate-200">

          {/* Logo & Headline */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <img src={logo} alt="Techlearns Logo" className="h-8 w-auto object-contain" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#0F1D38] tracking-tight uppercase">
              THE POWERHOUSE BEHIND <span className="text-[#8B5CF6]">TECHLEARNS</span>
            </h2>
          </div>

          {/* 4x3 Grid of 12 Big Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-6xl mx-auto">
            {gridStats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.2 }}
                className={`${stat.bg} text-white p-5 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl flex flex-col items-center justify-center text-center transition-shadow duration-300 cursor-default min-h-[130px] sm:min-h-[160px]`}
              >
                <h3 className="text-2xl sm:text-4xl font-black tracking-tight mb-1 sm:mb-2">
                  {stat.value}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-white/95 leading-snug">
                  {stat.label}
                </p>
                <span className="text-[9px] sm:text-[10px] text-[#8B5CF6] font-semibold mt-1">
                  {stat.sublabel}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
