import React from 'react';
import { TUITION_ORIGIN } from '@/lib/sites';
import { TUTOR_PHONE_DISPLAY } from '@/lib/tutor';
import { BookButton } from './_components/contact';
import { TutorFooter, TutorHeader, included } from './_components/chrome';
import { slugByAreaName } from './areas';

// Header links to the page's sections
const navLinks = [
  { href: '#included', label: "What's included" },
  { href: '#how', label: 'How it starts' },
  { href: '#areas', label: 'Areas' },
  { href: '#faq', label: 'FAQ' },
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
      'Vyalikaval',
      'Jayamahal',
      'Malleshwaram',
      'Kumara Park',
      'Seshadripuram',
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
      'HAL 2nd Stage',
      'Defence Colony',
      'Domlur',
      'Benson Town',
      'Frazer Town',
      'Cox Town',
      'Cooke Town',
    ],
  },
  {
    name: 'North',
    areas: [
      'Dollars Colony',
      'RMV Extension',
      'Sanjay Nagar',
      'Sahakar Nagar',
      'RT Nagar',
      'Hebbal',
      'HBR Layout',
      'HRBR Layout',
      'Kalyan Nagar',
      'Jakkur',
      'Thanisandra',
    ],
  },
  {
    name: 'South',
    areas: ['Koramangala', 'Jayanagar', 'Basavanagudi'],
  },
  {
    name: 'West',
    areas: ['Rajajinagar'],
  },
];
const areas = areaGroups.flatMap((g) => g.areas);

// Questions parents ask. Answers use only confirmed facts; the same list feeds the FAQ structured data.
const faqs = [
  {
    q: 'How much are the fees?',
    a: '₹600 an hour. The first class is a free trial, so you can decide before paying anything.',
  },
  {
    q: 'Which classes and boards do you teach?',
    a: 'Maths and Physics for Classes 8, 9 and 10, on the CBSE, ICSE and IGCSE (Cambridge) syllabuses.',
  },
  {
    q: 'Where are the classes held?',
    a: 'At your home, one to one, in central Bangalore and nearby areas such as Indiranagar, Sadashivanagar, Malleshwaram, Koramangala and Jayanagar. If your area is not listed, ask on WhatsApp.',
  },
  {
    q: 'How does the free trial class work?',
    a: "Send a WhatsApp message with your child's class, board and area. We fix a time for a trial class at your home, and regular classes continue only if it suits you.",
  },
  {
    q: 'Do you help with board exam preparation?',
    a: 'Yes. Practice goes from the textbook up to past board papers, along with board-exam answer writing and time management.',
  },
  {
    q: 'How will I know how my child is doing?',
    a: 'Short regular tests show what to work on next, and parents get updates on progress.',
  },
];

const business = {
  '@type': 'LocalBusiness',
  '@id': `${TUITION_ORIGIN}/#business`,
  name: 'Hafeez Tutor',
  description: 'One-to-one Maths and Physics home tuition for Classes 8 to 10 (CBSE, ICSE, IGCSE) in Bangalore.',
  url: `${TUITION_ORIGIN}/`,
  telephone: '+919902800693',
  priceRange: '₹600 per hour',
  address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' },
  areaServed: areas.map((name) => ({ '@type': 'Place', name: `${name}, Bangalore` })),
  knowsAbout: ['Mathematics', 'Physics', 'CBSE', 'ICSE', 'IGCSE', 'Board exam preparation'],
  makesOffer: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'Maths and Physics home tuition, Classes 8 to 10',
      serviceType: 'Home tuition',
      audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
    },
    priceSpecification: { '@type': 'UnitPriceSpecification', price: 600, priceCurrency: 'INR', unitText: 'hour' },
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    business,
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function TutoringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <TutorHeader links={navLinks} />

      <main>
        <section className="t-band t-hero-band" aria-labelledby="t-title">
          <div className="t-wrap t-hero">
            <h1 id="t-title" className="t-title">
              Maths and Physics home tuition in Bangalore for Classes 8 to 10.
            </h1>
            <p className="t-lede">
              One-to-one lessons at your home in central Bangalore and nearby areas, for CBSE, ICSE and IGCSE students.
            </p>
            <p className="t-price">
              <span className="t-pill">
                <strong className="num">₹600</strong> an hour · First class free
              </span>
            </p>
            <div className="t-actions">
              <BookButton />
            </div>
          </div>
        </section>

        <div className="t-wrap">
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
              Areas covered in Bangalore
            </h2>
            <dl className="t-areas">
              {areaGroups.map((g) => (
                <div key={g.name}>
                  <dt>{g.name}</dt>
                  <dd>
                    {g.areas.map((name, i) => {
                      const slug = slugByAreaName.get(name);
                      return (
                        <React.Fragment key={name}>
                          {slug ? <a href={`/${slug}`}>{name}</a> : name}
                          {i < g.areas.length - 1 ? ', ' : '.'}
                        </React.Fragment>
                      );
                    })}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="t-areas-note">Nearby but not listed? Ask on WhatsApp.</p>
          </section>

          <section className="t-section" aria-labelledby="faq">
            <h2 id="faq" className="t-h2">
              Questions parents ask
            </h2>
            <div className="t-faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="t-section t-close" aria-labelledby="book">
            <h2 id="book" className="t-h2">
              Book a free trial class
            </h2>
            <p className="t-close-text">
              Message or call <span className="num">{TUTOR_PHONE_DISPLAY}</span> on WhatsApp or by phone.
            </p>
            <div className="t-actions">
              <BookButton />
            </div>
          </section>
        </div>
      </main>

      <TutorFooter />
    </>
  );
}
