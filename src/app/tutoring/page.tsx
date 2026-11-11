import React from 'react';
import { TUITION_ORIGIN } from '@/lib/sites';
import { TUTOR_PHONE_DISPLAY, TUTOR_WHATSAPP_URL } from '@/lib/tutor';
import { BookButton, LeaveNumber, WhatsAppIcon } from './_components/contact';

const included = [
  'Concepts explained clearly, so formulas make sense',
  'Practice from the textbook up to past board papers',
  'Short regular tests, with updates for parents',
  'Board-exam answer writing and time management',
];

const steps = [
  "Message on WhatsApp with your child's class, board and area.",
  'We fix a free trial class at your home.',
  'If it suits you, regular classes continue at ₹600 an hour.',
];

// Grouped so a parent can find their own neighbourhood at a glance
const areaGroups = [
  {
    name: 'Central',
    areas: [
      'Sadashivanagar',
      'Palace Orchards',
      'Jayamahal',
      'Malleshwaram',
      'Kumara Park',
      'High Grounds',
      'Vasant Nagar',
      'Cunningham Road',
      'MG Road',
      'Lavelle Road',
      'Richmond Town',
      'Langford Town',
      'Shanti Nagar',
      'Ashok Nagar',
      'Ulsoor',
      'Indiranagar',
      'Domlur',
      'Benson Town',
      'Frazer Town',
      'Cox Town',
      'Cooke Town',
    ],
  },
  {
    name: 'North',
    areas: ['Dollars Colony', 'RMV Extension', 'Sanjay Nagar', 'Sahakar Nagar', 'RT Nagar', 'Hebbal', 'HBR Layout'],
  },
];
const areas = areaGroups.flatMap((g) => g.areas);

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Hafeez Tutor',
  description: 'One-to-one Maths and Physics home tuition for Classes 8 to 10 (CBSE, ICSE, IGCSE).',
  url: `${TUITION_ORIGIN}/`,
  telephone: '+919902800693',
  priceRange: '₹600 per hour',
  address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' },
  areaServed: areas.map((name) => ({ '@type': 'AdministrativeArea', name })),
};

export default function TutoringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className="t-wrap t-top">
        <a href="/" className="t-wordmark">
          Hafeez Tutor
        </a>
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
      </header>

      <main className="t-wrap">
        <section className="t-hero" aria-labelledby="t-title">
          <h1 id="t-title" className="t-title">
            Maths and Physics home tuition for Classes 8 to 10.
          </h1>
          <p className="t-lede">
            One-to-one lessons at your home in Bangalore North and Central, for CBSE, ICSE and IGCSE students.
          </p>
          <p className="t-price">
            <strong className="num">₹600</strong> an hour. The first class is a free trial.
          </p>
          <div className="t-actions">
            <BookButton />
            <LeaveNumber />
          </div>
        </section>

        <section className="t-section" aria-labelledby="included">
          <h2 id="included" className="t-h2">
            What&apos;s included
          </h2>
          <ul className="t-list">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="t-section" aria-labelledby="how">
          <h2 id="how" className="t-h2">
            How it starts
          </h2>
          <ol className="t-list t-steps">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="t-section" aria-labelledby="areas">
          <h2 id="areas" className="t-h2">
            Areas covered
          </h2>
          <dl className="t-areas">
            {areaGroups.map((g) => (
              <div key={g.name}>
                <dt>{g.name}</dt>
                <dd>{g.areas.join(', ')}.</dd>
              </div>
            ))}
          </dl>
          <p className="t-areas-note">Nearby but not listed? Ask on WhatsApp.</p>
        </section>

        <section className="t-section t-close" aria-labelledby="book">
          <h2 id="book" className="t-h2">
            Book a free trial class
          </h2>
          <p className="t-close-text">
            Message <span className="num">{TUTOR_PHONE_DISPLAY}</span> on WhatsApp, or leave your number and we&apos;ll
            call you.
          </p>
          <div className="t-actions">
            <BookButton />
            <LeaveNumber />
          </div>
        </section>
      </main>

      <footer className="t-wrap t-foot">
        <p>© {new Date().getFullYear()} Hafeez Tutor. Maths and Physics home tuition, Bangalore.</p>
      </footer>
    </>
  );
}
