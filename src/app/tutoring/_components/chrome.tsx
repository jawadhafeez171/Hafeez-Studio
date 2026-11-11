import React from 'react';
import { TUTOR_PHONE_DISPLAY, TUTOR_WHATSAPP_URL } from '@/lib/tutor';
import { WhatsAppIcon } from './contact';
import FloatingButtons from './FloatingButtons';

// Shared by the main tuition page and every area page
export const included = [
  'Concepts explained clearly, so formulas make sense',
  'Practice from the textbook up to past board papers',
  'Short regular tests, with updates for parents',
  'Board-exam answer writing and time management',
];

export function TutorHeader({ links }: { links: { href: string; label: string }[] }) {
  return (
    <header className="t-header">
      <div className="t-wrap t-top">
        <a href="/" className="t-wordmark">
          Hafeez Tutor
        </a>
        <nav className="t-nav" aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={TUTOR_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="t-top-link"
          aria-label={`WhatsApp ${TUTOR_PHONE_DISPLAY} (opens in a new tab)`}
        >
          <WhatsAppIcon size={18} />
          <span className="num">{TUTOR_PHONE_DISPLAY}</span>
        </a>
      </div>
    </header>
  );
}

// The footer also carries the floating WhatsApp and back-to-top buttons; area pages pass their own WhatsApp link
export function TutorFooter({ whatsappHref }: { whatsappHref?: string }) {
  return (
    <>
      <footer className="t-wrap t-foot">
        <p>© {new Date().getFullYear()} Hafeez Tutor. Maths and Physics home tuition, Bangalore.</p>
      </footer>
      <FloatingButtons whatsappHref={whatsappHref} />
    </>
  );
}
