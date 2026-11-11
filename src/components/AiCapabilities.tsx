import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import ContactButton from './ContactButton';
import EnquiryTimeline from './EnquiryTimeline';

// How a lead moves through one Hafeez Studio build: the website and the automation, designed together
const flow = [
  {
    title: 'A fast website',
    body: 'Visitors land on a quick, mobile-first site and reach you in one tap via WhatsApp or a short form.',
  },
  {
    title: 'An assistant that answers',
    body: 'A private AI assistant trained on your services answers common questions and collects what you need to quote.',
  },
  {
    title: 'Follow-up on autopilot',
    body: 'The lead lands in your sheet or CRM, a meeting gets booked, and the customer is confirmed on WhatsApp.',
  },
];

// An illustration of how the pieces fit together, not a client case study
const example = [
  { time: '10:02 pm', text: 'A patient messages your clinic on WhatsApp asking about knee consultation fees.' },
  { time: '10:02 pm', text: 'The assistant answers from your own price list and timings, then asks which day suits them.' },
  { time: '10:04 pm', text: 'It books the 11:30 am slot in your calendar and sends the patient a confirmation.' },
  { time: '8:30 am', text: 'Your front desk opens the Google Sheet and sees the booking, with the conversation attached.' },
];

const offers = [
  {
    title: 'WhatsApp & website assistant',
    body: 'Answers common questions from your own price lists and FAQs, collects details, and books appointments. Hands over to a person when it is unsure.',
  },
  {
    title: 'Lead follow-up',
    body: 'Every enquiry lands in your Google Sheet or CRM, gets an instant reply, and reminders go out automatically so nobody slips through.',
  },
  {
    title: 'Paperwork & data entry',
    body: 'Pulls details out of invoices, forms and PDFs into your sheets, so your team stops retyping the same information.',
  },
  {
    title: 'Your own AI tool or web app',
    body: 'When you need a product of your own: logins, payments and AI features built into one app.',
  },
];

const ordinal = ['First', 'Then', 'Finally'];

export default function AiCapabilities() {
  return (
    <section id="ai-solutions" className="section section--tint">
      <div className="container-custom">
        <div className="section-head">
          <h2 className="section-title">
            AI that takes repetitive work <em>off your team&apos;s plate.</em>
          </h2>
          <p className="section-lede">
            Practical assistants and automations, connected to the tools you already use: WhatsApp, Google Sheets, your CRM.
            We build them together with your website, so every enquiry is caught, answered and followed up.
          </p>
        </div>

        <ol className="flow" aria-label="How a new enquiry flows through your business">
          {flow.map((step, i) => (
            <li key={step.title}>
              <span className="flow-step">{ordinal[i]}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="ai-grid">
          <figure className="example">
            <figcaption className="example-title">A clinic enquiry at 10pm, handled before morning</figcaption>
            <EnquiryTimeline steps={example} />
            <p className="example-note">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>Patient and customer details stay in your accounts and are never used to train public AI models.</span>
            </p>
          </figure>

          <div>
            <h3 className="offers-title">What we can set up for you</h3>
            <ul className="offers">
              {offers.map((offer) => (
                <li key={offer.title}>
                  <h4>{offer.title}</h4>
                  <p>{offer.body}</p>
                </li>
              ))}
            </ul>
            <p className="ai-close">
              Most projects start with a two-week pilot on one real problem. AI work is quoted after a short call, once we
              understand how your business runs today.
            </p>
            <ContactButton>
              <span>Book a discovery call</span>
              <ArrowRight size={17} aria-hidden="true" />
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}
