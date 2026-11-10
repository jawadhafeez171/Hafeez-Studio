'use client';

import React from 'react';
import { useContact } from '@/context/ContactContext';

interface ContactButtonProps {
  className?: string;
  style?: React.CSSProperties;
  planName?: string;
  children: React.ReactNode;
}

// Small client island that lets server components open the lead modal
export default function ContactButton({ className = 'btn-primary', style, planName, children }: ContactButtonProps) {
  const { openContact } = useContact();

  return (
    <button type="button" onClick={() => openContact(planName)} className={className} style={style}>
      {children}
    </button>
  );
}
