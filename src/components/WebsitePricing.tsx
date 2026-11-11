'use client';

import React, { useId, useState } from 'react';
import { Check, ArrowRight, ChevronDown, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useContact } from '@/context/ContactContext';

interface WebsitePricingProps {
  onSelectPlan?: (planName: string) => void;
}

// Features shown before "Show all" on phones; wider screens always show the full list
const MOBILE_FEATURE_COUNT = 5;

const plans = [
  {
    name: 'Starter',
    price: '₹12,999',
    timeframe: '48 hours*',
    desc: 'For consultants and local businesses that need a clean, credible site that turns visitors into enquiries.',
    isPopular: false,
    example: { name: 'Encourage India IAS Academy', url: 'https://www.encourageindiaias.com/' },
    features: [
      'A custom 1–3 page site for your business',
      'Built to load in under a second on mobile',
      'Designed for phones first, works on every screen',
      'One-tap WhatsApp button and enquiry form',
      'Set up for Google search and link previews',
      'Domain, SSL and hosting set up for you',
      '2 rounds of changes',
      '14 days of support after launch',
    ],
  },
  {
    name: 'Growth',
    price: '₹24,999',
    timeframe: '10–14 days',
    desc: 'For clinics, academies and growing businesses that want to be found on Google and capture more enquiries.',
    isPopular: true,
    example: { name: 'JointXperts', url: 'https://www.jointxperts.in/' },
    features: [
      'Up to 8–10 pages, written around your services',
      'A blog you can update yourself',
      'Custom tools like price calculators or quote forms',
      'Fuller Google setup, including rich search results',
      'Google Analytics to see where enquiries come from',
      'New enquiries sent straight to your Google Sheet or CRM',
      '3 rounds of changes',
      '30 days of priority support',
    ],
  },
  {
    name: 'Custom',
    price: '₹59,999',
    priceSuffix: '+',
    timeframe: '2–3 weeks',
    desc: 'For businesses that need more than a website: client portals, memberships, payments or automated workflows.',
    isPopular: false,
    example: { name: 'Construction Buddy', url: 'https://constructionbuddy.in/' },
    features: [
      'A web app with as many pages as you need',
      'Customer logins and a personal dashboard',
      'Online payments with Razorpay or Stripe',
      'Forms that sort and qualify enquiries automatically',
      'Connections to the other software you use',
      'Full source code and ownership handed over',
      'Unlimited changes while we build',
      '60 days of priority support',
    ],
  },
];

const comparison = [
  { name: 'Pages', starter: '1–3', growth: 'Up to 8–10', custom: 'As many as you need' },
  { name: 'Page speed on mobile', starter: 'Under 1 second', growth: 'Under 1 second', custom: 'Under 1 second' },
  { name: 'Google setup', starter: 'Titles and link previews', growth: 'Full page setup + rich results', custom: 'Full setup, tailored to your site' },
  { name: 'Where enquiries go', starter: 'WhatsApp + email form', growth: 'Also your Google Sheet or CRM', custom: 'Your own database + automations' },
  { name: 'Interactive features', starter: 'FAQ and enquiry form', growth: 'Calculators, quote forms, tabs', custom: 'Logins, portals and payments' },
  { name: 'Updating content', starter: 'We update it for you', growth: 'Blog you can edit yourself', custom: 'Content system built for you' },
  { name: 'Launch time', starter: '48 hours*', growth: '10–14 days', custom: '2–3 weeks' },
  { name: 'Support after launch', starter: '14 days', growth: '30 days, priority', custom: '60 days, priority' },
];

export default function WebsitePricing({ onSelectPlan: onSelectPlanProp }: WebsitePricingProps) {
  const { openContact } = useContact();
  const onSelectPlan = onSelectPlanProp ?? openContact;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [showComparison, setShowComparison] = useState(false);
  const tableId = useId();

  return (
    <section id="pricing" className="section">
      <div className="container-custom">
        <div className="section-head">
          <h2 className="section-title">
            Websites from ₹12,999. <em>No monthly fees.</em>
          </h2>
          <p className="section-lede">
            One-time prices, fixed before we start. Every site is built to load in under a second on mobile, and the code is
            yours to keep.
          </p>
        </div>

        <div className="plans">
          {plans.map((p) => {
            const isExpanded = Boolean(expanded[p.name]);
            const listId = `${tableId}-${p.name}-features`;
            return (
              <article key={p.name} className={`plan${p.isPopular ? ' plan--pop' : ''}`} aria-label={`${p.name} plan`}>
                <div className="plan-body">
                  <div className="plan-top">
                    <h3 className="plan-name">
                      {p.name}
                      {p.isPopular && <span className="plan-flag">Most chosen</span>}
                    </h3>
                    <span className="label num">{p.timeframe}</span>
                  </div>

                  <p className="plan-price">
                    {p.price}
                    {p.priceSuffix}
                  </p>
                  <p className="plan-terms">Starting price, paid once · half to start, half at launch</p>

                  <p className="plan-desc">{p.desc}</p>

                  <ul id={listId} className="plan-features">
                    {p.features.map((feat, fIdx) => (
                      <li key={feat} className={fIdx >= MOBILE_FEATURE_COUNT && !isExpanded ? 'plan-extra' : undefined}>
                        <Check size={16} aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="plan-more-toggle"
                    aria-expanded={isExpanded}
                    aria-controls={listId}
                    onClick={() => setExpanded((prev) => ({ ...prev, [p.name]: !prev[p.name] }))}
                  >
                    {isExpanded ? 'Show less' : `Show all ${p.features.length} included`}
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
                    />
                  </button>

                  <a href={p.example.url} target="_blank" rel="noopener noreferrer" className="text-link plan-example">
                    <span>Live example: {p.example.name}</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>

                <div className="plan-actions">
                  <button type="button" onClick={() => onSelectPlan(p.name)} className={p.isPopular ? 'btn-primary' : 'btn-secondary'}>
                    <span>Book a call about {p.name}</span>
                    <ArrowRight size={17} aria-hidden="true" />
                  </button>
                  <a
                    href={`https://wa.me/919886658462?text=${encodeURIComponent(
                      `Hi Hafeez Studio, I'm interested in the ${p.name} website plan (${p.price}${p.priceSuffix ?? ''}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="plan-whatsapp"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    <span>Or ask on WhatsApp</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="footnote">*Starter sites go live within 48 hours of receiving your content.</p>

        <div className="compare">
          <button
            type="button"
            onClick={() => setShowComparison(!showComparison)}
            className="compare-toggle"
            aria-expanded={showComparison}
            aria-controls={tableId}
          >
            <span>{showComparison ? 'Hide the comparison' : 'Compare the three plans side by side'}</span>
            <ChevronDown
              size={16}
              aria-hidden="true"
              style={{ transform: showComparison ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
            />
          </button>

          <div id={tableId} hidden={!showComparison}>
            <p className="label compare-swipe-hint">Swipe sideways to see all three plans</p>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <caption className="sr-only">What each website plan includes</caption>
                <thead>
                  <tr>
                    <th scope="col" className="label">
                      What you get
                    </th>
                    <th scope="col">Starter <span className="num">₹12,999</span></th>
                    <th scope="col">Growth <span className="num">₹24,999</span></th>
                    <th scope="col">Custom <span className="num">₹59,999+</span></th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.name}>
                      <th scope="row">{row.name}</th>
                      <td>{row.starter}</td>
                      <td className="is-pop">{row.growth}</td>
                      <td>{row.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
