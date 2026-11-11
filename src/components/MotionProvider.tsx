'use client';

import React from 'react';
import { MotionConfig } from 'motion/react';

// Honour the visitor's reduced-motion setting everywhere: movement is dropped, fades and state changes stay
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ type: 'spring', stiffness: 380, damping: 34 }}>
      {children}
    </MotionConfig>
  );
}
