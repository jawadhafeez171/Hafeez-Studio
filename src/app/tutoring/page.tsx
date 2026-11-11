import React from 'react';
import { TUITION_ORIGIN } from '@/lib/sites';
import WorkedBoard from './_components/WorkedBoard';
import StickyBook from './_components/StickyBook';
import { BookButton, LeaveNumber, WhatsAppIcon } from './_components/contact';
import { TUTOR_PHONE_DISPLAY, TUTOR_WHATSAPP_URL } from '@/lib/tutor';

const areas = [
  'Sanjay Nagar',
  'Sahakar Nagar',
  'Sadashivanagar',
  'Cunningham Road',
  'Richmond Town',
  'RT Nagar',
  'Vasant Nagar',
  'Benson Town',
  'MG Road',
  'Frazer Town',
  'Malleshwaram',
  'Hebbal',
  'RMV Extension',
  'HBR Layout',
  'Cooke Town',
  'Lavelle Road',
];

const outcomes = [
  {
    title: 'Why each formula works',
    text: 'Ideas are explained from first principles, with everyday examples, before any drilling.',
  },
  {
    title: 'Practice that climbs',
    text: 'Graded questions, from textbook and exemplar problems up to ten years of past board papers.',
  },
  {
    title: 'Calm, regular check-ins',
    text: 'Short, low-pressure tests show what to work on next, and parents get honest updates.',
  },
  {
    title: 'Board-exam answer writing',
    text: 'Setting out steps, units and working so every mark is earned, and managing time in the hall.',
  },
];

const startSteps = [
  "Send a WhatsApp message with your child's class, board and area.",
  'We fix a free trial class at your home.',
  'If it suits you, regular one-to-one sessions follow at ₹600 an hour.',
];

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

      <header className="t-top">
        <div className="t-wrap t-top-inner">
          <a href="/" className="t-wordmark">
            Hafeez <span>Tutor</span>
          </a>
          <a href={TUTOR_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="t-top-link">
            <WhatsAppIcon size={18} />
            <span className="num">{TUTOR_PHONE_DISPLAY}</span>
            <span className="t-sr"> on WhatsApp (opens in a new tab)</span>
          </a>
        </div>
      </header>

      <main>
        <div className="t-hero t-wrap">
          <section className="t-hero-copy" aria-labelledby="t-title">
            <h1 id="t-title" className="t-title">
              Maths and Physics, worked out step by step.
            </h1>
            <p className="t-lede">
              One-to-one home tuition for Classes 8, 9 and 10. CBSE, ICSE and IGCSE, across Bangalore North and Central.
            </p>
            <p className="t-price">
              <span className="num">₹600</span> an hour, at your home. The first class is a free trial.
            </p>
            <div className="t-actions" id="t-hero-actions">
              <BookButton />
              <LeaveNumber />
            </div>
          </section>

          {/* The board sits in the first view: beside the copy on wide screens, right under it on phones */}
          <section className="t-lesson" aria-labelledby="t-board-title">
            <h2 id="t-board-title" className="t-lesson-title">
              A lesson, one line at a time.
            </h2>
            <WorkedBoard />
          </section>
        </div>

        <section className="t-phase t-wrap" aria-labelledby="given">
          <h2 id="given" className="t-h2">
            <span className="t-phase-word">Given:</span> what is taught, and where
          </h2>
          <dl className="t-facts">
            <div>
              <dt>Subjects</dt>
              <dd>Maths and Physics</dd>
            </div>
            <div>
              <dt>Classes</dt>
              <dd>8, 9 and 10</dd>
            </div>
            <div>
              <dt>Boards</dt>
              <dd>CBSE, ICSE and IGCSE (Cambridge)</dd>
            </div>
            <div>
              <dt>Fee</dt>
              <dd>
                <span className="num">₹600</span> an hour. The trial class is free.
              </dd>
            </div>
            <div>
              <dt>Where</dt>
              <dd>
                At your home, one to one.
                <span className="t-areas">{areas.join(', ')}.</span>
              </dd>
            </div>
          </dl>
        </section>

        <section className="t-phase t-wrap" aria-labelledby="to-find">
          <h2 id="to-find" className="t-h2">
            <span className="t-phase-word">To find:</span> what changes for your child
          </h2>
          <ul className="t-outcomes">
            {outcomes.map((o) => (
              <li key={o.title}>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="t-phase t-wrap" aria-labelledby="solution">
          <h2 id="solution" className="t-h2">
            <span className="t-phase-word">Solution:</span> how it starts
          </h2>
          <ol className="t-start">
            {startSteps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </section>

        <section className="t-phase t-answer t-wrap" id="answer" aria-labelledby="answer-title">
          <h2 id="answer-title" className="t-answer-title">
            <span className="t-phase-word">Answer:</span> book a free trial class.
          </h2>
          <div className="t-actions">
            <BookButton />
            <LeaveNumber />
          </div>
          <p className="t-small">
            Or message <span className="num">{TUTOR_PHONE_DISPLAY}</span> on WhatsApp.
          </p>
        </section>
      </main>

      <footer className="t-foot t-wrap">
        <p>© {new Date().getFullYear()} Hafeez Tutor. Maths and Physics home tuition, Bangalore.</p>
      </footer>

      <StickyBook />
    </>
  );
}
