'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';
import ContactModal from '@/components/ContactModal';

interface ContactContextValue {
  openContact: (planName?: string) => void;
}

const ContactContext = createContext<ContactContextValue | null>(null);

// Owns the lead modal so server-rendered sections can open it without prop drilling
export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const openContact = useCallback((planName = '') => {
    setSelectedPlan(planName);
    setIsOpen(true);
  }, []);

  return (
    <ContactContext.Provider value={{ openContact }}>
      {children}
      <ContactModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setSelectedPlan('');
        }}
        selectedPlan={selectedPlan}
        isWebsite={Boolean(selectedPlan)}
      />
    </ContactContext.Provider>
  );
}

// Returns a no-op outside a provider so shared components (Navbar, Footer) also work on pages that wire their own modal
export function useContact(): ContactContextValue {
  return useContext(ContactContext) ?? { openContact: () => {} };
}
