'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop devices with fine pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[data-cursor-hover]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        pointerEvents: 'none',
        zIndex: 99999,
        transition: 'transform 0.08s ease-out',
      }}
    >
      <div
        style={{
          width: isHovered ? '46px' : '16px',
          height: isHovered ? '46px' : '16px',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          border: '1.5px solid var(--accent-orange)',
          backgroundColor: isHovered ? 'rgba(255, 107, 53, 0.18)' : 'transparent',
          boxShadow: isHovered ? '0 0 16px rgba(255, 107, 53, 0.35)' : 'none',
          backdropFilter: isHovered ? 'blur(2px)' : 'none',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
}
