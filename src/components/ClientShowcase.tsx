import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export interface ClientItem {
  name: string;
  url: string;
  domain: string;
  category: string;
  summary: string;
  shot: string;
  shotAlt: string;
  // Real client words, added only with the client's permission (see PRODUCT.md, Evidence on Hand)
  quote?: { text: string; author: string };
}

// Summaries describe only what is visible on the live sites; no outcome numbers until clients verify them
export const clientsData: ClientItem[] = [
  {
    name: 'JointXperts',
    url: 'https://www.jointxperts.in/',
    domain: 'jointxperts.in',
    category: 'Orthopaedic clinic · Bengaluru',
    summary:
      'A patient-friendly site for an orthopaedic surgeon, with appointment booking, WhatsApp and call buttons always one tap away.',
    shot: '/clients/shots/jointxperts.jpg',
    shotAlt: 'JointXperts home screen on a phone',
  },
  {
    name: 'Encourage India IAS Academy',
    url: 'https://www.encourageindiaias.com/',
    domain: 'encourageindiaias.com',
    category: 'UPSC & KPSC coaching · Bengaluru',
    summary:
      'A course site covering every exam the academy teaches, in English and Kannada, with enrolment and call-back built in.',
    shot: '/clients/shots/encourageindiaias.jpg',
    shotAlt: 'Encourage India IAS Academy home screen on a phone',
  },
  {
    name: 'Construction Buddy',
    url: 'https://constructionbuddy.in/',
    domain: 'constructionbuddy.in',
    category: 'Home construction · Bengaluru',
    summary:
      "A turnkey builder's site that walks families through packages and build stages, with WhatsApp and call always in reach.",
    shot: '/clients/shots/constructionbuddy.jpg',
    shotAlt: 'Construction Buddy home screen on a phone',
  },
  {
    name: 'India Job Notice',
    url: 'https://www.indiajobnotice.com/',
    domain: 'indiajobnotice.com',
    category: 'Government jobs portal · All India',
    summary:
      'A government-jobs portal where every listing is read from the official notice, searchable by state and by age.',
    shot: '/clients/shots/indiajobnotice.jpg',
    shotAlt: 'India Job Notice home screen on a phone',
  },
];

export default function ClientShowcase() {
  return (
    <section id="work" className="section">
      <div className="container-custom">
        <div className="section-head">
          <h2 className="section-title">
            Sites we&apos;ve built, <em>live right now.</em>
          </h2>
          <p className="section-lede">
            An orthopaedic practice, an IAS academy, a construction firm, and a national job portal. Every one is live, so
            open them on your phone and judge the work for yourself.
          </p>
        </div>

        <ul className="work-row">
          {clientsData.map((client, i) => (
            <li key={client.name} className="work-item">
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="phone-frame work-shot"
                aria-label={`Open ${client.name} live website in a new tab`}
              >
                <div className="phone-frame-screen">
                  <Image
                    src={client.shot}
                    alt={client.shotAlt}
                    fill
                    priority={i < 2}
                    loading="eager"
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 72vw"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
              </a>
              <h3>
                <a href={client.url} target="_blank" rel="noopener noreferrer">
                  {client.name}
                </a>
              </h3>
              <p className="label">{client.category}</p>
              <p className="work-summary">{client.summary}</p>
              {client.quote && (
                <blockquote style={{ margin: '12px 0', color: 'var(--text-primary)' }}>
                  “{client.quote.text}”
                  <footer className="label" style={{ marginTop: '6px' }}>
                    {client.quote.author}
                  </footer>
                </blockquote>
              )}
              <a href={client.url} target="_blank" rel="noopener noreferrer" className="text-link">
                <span>{client.domain}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="label work-swipe-hint">Swipe to see all four sites</p>
      </div>
    </section>
  );
}
