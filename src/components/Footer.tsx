'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { useContact } from '@/context/ContactContext';

interface FooterProps {
  onOpenContact?: () => void;
  isTutoring?: boolean;
}

const studioLinks = [
  { href: '/#work', label: 'Client work' },
  { href: '/#pricing', label: 'Website prices' },
  { href: '/#ai-solutions', label: 'AI & automation' },
  { href: '/#process', label: 'How we work' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Footer({ onOpenContact: onOpenContactProp, isTutoring = false }: FooterProps) {
  const { openContact } = useContact();
  const onOpenContact = onOpenContactProp ?? (() => openContact());

  // Studio and tutoring are separate businesses with separate WhatsApp numbers
  const whatsapp = isTutoring
    ? { display: '+91 99028 00693', href: 'https://wa.me/919902800693' }
    : { display: '+91 98866 58462', href: 'https://wa.me/919886658462' };

  return (
    <footer className={`site-footer${isTutoring ? '' : ' site-footer--studio'}`}>
      <div className="container-custom">
        <div className="footer-grid">
          <div>
            <Link href={isTutoring ? '/tutoring' : '/'} className="wordmark">
              <span className="wordmark-name">
                Hafeez <em>{isTutoring ? 'Tutor' : 'Studio'}</em>
              </span>
            </Link>
            <p className="footer-about">
              {isTutoring
                ? 'Patient, one-on-one Math & Physics home tutoring across Bangalore.'
                : 'Fast custom websites and practical AI automation for clinics, academies and growing businesses worldwide.'}
            </p>
          </div>

          {!isTutoring ? (
            <nav aria-label="Footer">
              <h2 className="footer-heading">Explore</h2>
              <ul className="footer-links">
                {studioLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            <div />
          )}

          <div>
            <h2 className="footer-heading">Talk to us</h2>
            <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className="footer-link">
              <MessageCircle size={18} style={{ color: 'var(--whatsapp, #1f8f4e)' }} aria-hidden="true" />
              <span className="num">WhatsApp {whatsapp.display}</span>
            </a>
            <p className="footer-note">
              {isTutoring ? 'Message us to arrange a free trial class.' : 'We reply within 24 hours.'}
            </p>
            <button type="button" onClick={onOpenContact} className={isTutoring ? 'btn-emerald' : 'btn-secondary'}>
              {isTutoring ? 'Book Free Trial Class' : 'Book a discovery call'}
            </button>
          </div>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} Hafeez {isTutoring ? 'Tutor' : 'Studio'}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
