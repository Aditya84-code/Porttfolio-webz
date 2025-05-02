import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseDown = () => setCursorVariant('click');
    const mouseUp = () => setCursorVariant('default');
    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('clickable')) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    document.addEventListener('mouseover', mouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      document.removeEventListener('mouseover', mouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: '#C9B6E4',
      mixBlendMode: 'normal' as const,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: '#E7D5F7',
      mixBlendMode: 'normal' as const,
      scale: 1.5,
    },
    click: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: '#B3C8E3',
      scale: 0.8,
      mixBlendMode: 'normal' as const,
    },
  };

  const outlineVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: 'transparent',
      border: '2px solid #C9B6E4',
      opacity: 0.6,
      scale: 1,
      transition: { type: 'spring', stiffness: 500, damping: 25 },
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: 'rgba(231, 213, 247, 0.1)',
      scale: 2,
      transition: { type: 'spring', stiffness: 500, damping: 25 },
    },
    click: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.2,
      transition: { type: 'spring', stiffness: 500, damping: 25 },
    },
  };

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 1000, damping: 35 }}
        style={{
          height: '16px',
          width: '16px',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 999,
          mixBlendMode: 'normal',
        }}
      />
      <motion.div
        className="cursor-dot-outline"
        variants={outlineVariants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        style={{
          height: '40px',
          width: '40px',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9,
        }}
      />
    </>
  );
};

export default CustomCursor;