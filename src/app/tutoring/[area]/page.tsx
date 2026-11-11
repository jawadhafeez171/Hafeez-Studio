import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TUITION_ORIGIN } from '@/lib/sites';
import { TUTOR_PHONE_DISPLAY, tutorWhatsAppUrlFor } from '@/lib/tutor';
import { BookButton, LeaveNumber } from '../_components/contact';
import { TutorFooter, TutorHeader, included } from '../_components/chrome';
import { areaBySlug, areaPages } from '../areas';

type Props = { params: Promise<{ area: string }> };

// "A, B and C"
const listOf = (items: string[]) =>
  items.length > 1 ? `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}` : items[0];

// Only the written area pages exist; any other path 404s
export const dynamicParams = false;
export function generateStaticParams() {
  return areaPages.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = areaBySlug.get((await params).area);
  if (!area) return {};
  const title = `Maths & Physics Home Tutor in ${area.name} | Classes 8–10`;
  const description = `One-to-one Maths and Physics home tuition in ${area.name} for Classes 8–10 (CBSE, ICSE, IGCSE). Also covers ${area.coversShort}. ₹600/hr, first class free.`;
  return {
    title,
    description,
    alternates: { canonical: `/${area.slug}` },
    openGraph: { type: 'website', url: `${TUITION_ORIGIN}/${area.slug}`, siteName: 'Hafeez Tutor', title, description },
    twitter: { card: 'summary_large_image', title, description },
  };
}

const navLinks = [
  { href: '#localities', label: 'Localities' },
  { href: '#included', label: "What's included" },
  { href: '#faq', label: 'FAQ' },
];

export default async function AreaPage({ params }: Props) {
  const area = areaBySlug.get((await params).area);
  if (!area) notFound();

  const whatsapp = tutorWhatsAppUrlFor(area.name);
  const nearby = area.nearby.map((s) => areaBySlug.get(s)!).filter(Boolean);
  const pageUrl = `${TUITION_ORIGIN}/${area.slug}`;

  // The shared fee and trial questions close every page; the area's own questions lead
  const faqs = [
    ...area.faqs,
    {
      q: `Where do the classes happen in ${area.name}?`,
      a: `At your home, one to one, anywhere in ${listOf(area.covers)}. Nearby but not listed? Ask on WhatsApp.`,
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: `Maths and Physics home tuition in ${area.name}`,
        serviceType: 'Home tuition',
        url: pageUrl,
        provider: {
          '@id': `${TUITION_ORIGIN}/#business`,
          '@type': 'LocalBusiness',
          name: 'Hafeez Tutor',
          telephone: '+919902800693',
        },
        areaServed: area.covers.map((name) => ({ '@type': 'Place', name: `${name}, Bangalore` })),
        offers: {
          '@type': 'Offer',
          priceSpecification: { '@type': 'UnitPriceSpecification', price: 600, priceCurrency: 'INR', unitText: 'hour' },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home tuition in Bangalore', item: `${TUITION_ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: area.name, item: pageUrl },
        ],
      },
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <TutorHeader links={navLinks} />

      <main>
        <section className="t-band t-hero-band" aria-labelledby="t-title">
          <div className="t-wrap t-hero">
            <nav className="t-crumbs" aria-label="Breadcrumb">
              <a href="/">Home tuition in Bangalore</a>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{area.name}</span>
            </nav>
            <h1 id="t-title" className="t-title">
              Maths and Physics home tutor in {area.name}.
            </h1>
            <p className="t-lede">{area.intro}</p>
            <p className="t-price">
              <span className="t-pill">
                <strong className="num">₹600</strong> an hour · First class free
              </span>
            </p>
            <div className="t-actions">
              <BookButton href={whatsapp} />
              <LeaveNumber />
            </div>
          </div>
        </section>

        <div className="t-wrap">
          <section className="t-section" aria-labelledby="localities">
            <h2 id="localities" className="t-h2">
              Home tuition across {area.name}
            </h2>
            <p className="t-body">{area.localNote}</p>
            {area.covers.length > 1 && (
              <ul className="t-list t-list--inline">
                {area.covers.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
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

          <section className="t-section" aria-labelledby="faq">
            <h2 id="faq" className="t-h2">
              Questions from {area.name} parents
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

          <section className="t-section" aria-labelledby="nearby">
            <h2 id="nearby" className="t-h2">
              Nearby areas
            </h2>
            <p className="t-body">
              {nearby.map((n, i) => (
                <React.Fragment key={n.slug}>
                  <a href={`/${n.slug}`}>Home tutor in {n.name}</a>
                  {i < nearby.length - 1 ? ' · ' : ''}
                </React.Fragment>
              ))}
            </p>
            <p className="t-body">
              <a href="/#areas">See every area covered in Bangalore</a>
            </p>
          </section>

          <section className="t-section t-close" aria-labelledby="book">
            <h2 id="book" className="t-h2">
              Book a free trial class in {area.name}
            </h2>
            <p className="t-close-text">
              Message <span className="num">{TUTOR_PHONE_DISPLAY}</span> on WhatsApp, or leave your number and
              we&apos;ll call you.
            </p>
            <div className="t-actions">
              <BookButton href={whatsapp} />
              <LeaveNumber />
            </div>
          </section>
        </div>
      </main>

      <TutorFooter />
    </>
  );
}
