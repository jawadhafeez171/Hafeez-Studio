import React from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowRight, Check, MessageCircle } from 'lucide-react';
import ContactButton from './ContactButton';

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
        <figure className="hero-proof" aria-label="Two live client websites">
          <a
            href="https://constructionbuddy.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="phone-frame hero-phone hero-phone--back"
            aria-label="Open Construction Buddy live website in a new tab"
          >
            <div className="phone-frame-screen">
              <Image
                src="/clients/shots/constructionbuddy.jpg"
                alt="Construction Buddy home screen on a phone"
                fill
                sizes="240px"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </a>
          <a
            href="https://www.jointxperts.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="phone-frame hero-phone hero-phone--front"
            aria-label="Open JointXperts live website in a new tab"
          >
            <div className="phone-frame-screen">
              <Image
                src="/clients/shots/jointxperts.jpg"
                alt="JointXperts orthopaedic clinic website on a phone, with Book Appointment, WhatsApp and Call buttons"
                fill
                priority
                sizes="270px"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </a>
          <figcaption className="hero-proof-caption">
            <a href="#work" className="text-link">
              <span>Both live today. See all four</span>
              <ArrowDown size={15} aria-hidden="true" />
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
