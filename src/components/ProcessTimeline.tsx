import React from 'react';
import { ArrowRight } from 'lucide-react';
import ContactButton from './ContactButton';

const steps = [
  {
    title: 'Discovery',
    timeframe: 'Days 1–3',
    description: 'We walk through your current site, tools, and day-to-day bottlenecks, then agree on exactly what gets built first and why.',
  },
  {
    title: 'Design & prototype',
    timeframe: 'Days 4–8',
    description: 'You get a clickable design or working prototype to react to early, not a slide deck, so your feedback shapes the build.',
  },
  {
    title: 'Build & connect',
    timeframe: 'Days 9–13',
    description: 'We build the real thing and connect it to the tools you already use: WhatsApp, Google Sheets, your CRM, or payments.',
  },
  {
    title: 'Launch & support',
    timeframe: 'Day 14 onwards',
    description: 'We launch, hand over the code and logins, walk your team through it, and stay on for fixes and improvements.',
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="section">
      <div className="container-custom">
        <div className="section-head">
          <h2 className="section-title">
            From first call to launch, <em>step by step.</em>
          </h2>
          <p className="section-lede">
            Four clear stages and something real to look at early. Starter sites go live within 48 hours of receiving your
            content; the days below are for a typical Growth site, and custom builds take two to three weeks.
          </p>
        </div>

        <ol className="process">
          {steps.map((step) => (
            <li key={step.title}>
              <span className="process-days">{step.timeframe}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="section-cta">
          <ContactButton>
            <span>Book a discovery call</span>
            <ArrowRight size={17} aria-hidden="true" />
          </ContactButton>
        </div>
      </div>
    </section>
  );
}
