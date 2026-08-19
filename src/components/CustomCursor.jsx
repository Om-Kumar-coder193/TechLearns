import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // High fidelity smooth trailing spring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Strictly disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const moveCursor = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const isInteractive = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('canvas') !== null ||
        target.classList.contains('cursor-pointer');

      setIsPointer(isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Soft Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isPointer ? 44 : 26,
          height: isPointer ? 44 : 26,
          border: isPointer ? '1.5px solid rgba(139, 92, 246, 0.65)' : '1.5px solid rgba(97, 45, 146, 0.4)',
          backgroundColor: isPointer ? 'rgba(139, 92, 246, 0.08)' : 'transparent',
          backdropFilter: isPointer ? 'blur(1px)' : 'none',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      />

      {/* Inner Crisp Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#612D92] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
          backgroundColor: isPointer ? '#8B5CF6' : '#612D92',
          scale: isPointer ? 1.5 : 1,
        }}
      />
    </>
  );
}
