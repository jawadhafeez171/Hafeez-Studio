'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { TUTOR_WHATSAPP_URL } from '@/lib/tutor';
import { WhatsAppIcon } from './contact';

// Bottom-right corner on every tuition page: WhatsApp always in reach, and a back-to-top button
// that appears once the visitor has scrolled past the first screen.
export default function FloatingButtons({ whatsappHref = TUTOR_WHATSAPP_URL }: { whatsappHref?: string }) {
  const [showTop, setShowTop] = useState(false);
  // On phones the floating WhatsApp steps aside while a full-width booking button is on screen
  const [bookingInView, setBookingInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('.t-actions'));
    if (!targets.length) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setBookingInView(visible.size > 0);
    });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    // Keyboard users continue from the top of the page
    document.querySelector<HTMLElement>('.t-wordmark')?.focus({ preventScroll: true });
  };

  return (
    <div className="t-float">
      <button
        type="button"
        className={`t-float-top${showTop ? ' is-on' : ''}`}
        onClick={toTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        aria-hidden={!showTop}
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`t-float-wa${bookingInView ? ' is-aside' : ''}`}
        aria-label="Chat on WhatsApp to book a free trial class (opens in a new tab)"
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}
