import React from 'react';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import ContactButton from './ContactButton';
import HeroProof from './HeroProof';

const WHATSAPP_URL =
  'https://wa.me/919886658462?text=' + encodeURIComponent("Hi Hafeez Studio, I'd like to discuss a project");

const facts = ['Websites from ₹12,999', 'Live in about two weeks', 'No monthly platform fees', 'You own the code'];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container-custom hero-grid">
        <div className="hero-copy">
          <h1 className="display hero-title">
            <span className="line">Websites that bring in customers.</span>{' '}
            <em className="line">Automation that handles the follow-up.</em>
          </h1>

          <p className="hero-lede">
            We build fast, custom websites for clinics, academies, and growing businesses in Bengaluru, and the AI tools that
            answer enquiries and book appointments while you work.
          </p>

          <div className="hero-actions">
            <ContactButton>
              <span>Book a discovery call</span>
              <ArrowRight size={18} aria-hidden="true" />
            </ContactButton>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
              <MessageCircle size={18} aria-hidden="true" />
              <span>Or message us on WhatsApp</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <ul className="hero-facts">
            {facts.map((fact) => (
              <li key={fact}>
                <Check size={16} aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        {/* Proof in the first screen on wide displays: two live client sites */}
        <HeroProof />
      </div>
    </section>
  );
}
