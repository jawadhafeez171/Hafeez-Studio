import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientShowcase from '@/components/ClientShowcase';
import WebsitePricing from '@/components/WebsitePricing';
import AiCapabilities from '@/components/AiCapabilities';
import ProcessTimeline from '@/components/ProcessTimeline';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import ContactButton from '@/components/ContactButton';
import MobileActionBar from '@/components/MobileActionBar';
import FloatingActions from '@/components/FloatingActions';
import { ContactProvider } from '@/context/ContactContext';
import { ArrowRight, MessageCircle } from 'lucide-react';
import type { Viewport } from 'next';

// Browser bar matches the page ground in both themes
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F8F6' },
    { media: '(prefers-color-scheme: dark)', color: '#111113' },
  ],
};

const WHATSAPP_URL =
  'https://wa.me/919886658462?text=' + encodeURIComponent("Hi Hafeez Studio, I'd like to discuss a project");

export default function HomePage() {
  return (
    <ContactProvider>
      <FloatingActions />
      <Navbar />
      <main>
        <Hero />
        <ClientShowcase />
        <WebsitePricing />
        <AiCapabilities />
        <ProcessTimeline />
        <FaqSection />

        <section className="closing" aria-labelledby="closing-title">
          <div className="container-custom">
            <h2 id="closing-title" className="display closing-title">
              Tell us what&apos;s slowing you down. <em>We&apos;ll tell you honestly what&apos;s worth building.</em>
            </h2>
            <p className="section-lede">
              You&apos;ll talk directly to the founder who leads your project, not a sales team. Websites start at ₹12,999; AI
              and automation projects are quoted after a short call.
            </p>
            <div className="closing-actions">
              <ContactButton>
                <span>Book a discovery call</span>
                <ArrowRight size={18} aria-hidden="true" />
              </ContactButton>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                <MessageCircle size={18} aria-hidden="true" />
                <span className="num">WhatsApp +91 98866 58462</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar />
    </ContactProvider>
  );
}
