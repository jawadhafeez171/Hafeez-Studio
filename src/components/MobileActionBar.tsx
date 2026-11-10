'use client';

import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useContact } from '@/context/ContactContext';

const WHATSAPP_URL =
  'https://wa.me/919886658462?text=' + encodeURIComponent("Hi Hafeez Studio, I'd like to discuss a project");

// Phones only (hidden from 768px up): keeps both ways to reach us in thumb reach once the hero CTAs scroll away
export default function MobileActionBar() {
  const { openContact } = useContact();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`mobile-action-bar${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
        tabIndex={visible ? 0 : -1}
        style={{ gap: '8px' }}
      >
        <MessageCircle size={18} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <button type="button" className="btn-primary" onClick={() => openContact()} tabIndex={visible ? 0 : -1}>
        Book a call
      </button>
    </div>
  );
}
