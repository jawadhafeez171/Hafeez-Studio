'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OpportunityExplorer from '@/components/OpportunityExplorer';
import WebsitePricing from '@/components/WebsitePricing';
import AiCapabilities from '@/components/AiCapabilities';
import SynergySection from '@/components/SynergySection';
import WhyCustomCode from '@/components/WhyCustomCode';
import RoiCalculator from '@/components/RoiCalculator';
import Philosophy from '@/components/Philosophy';
import CaseStudies from '@/components/CaseStudies';
import ClientShowcase from '@/components/ClientShowcase';
import ProcessTimeline from '@/components/ProcessTimeline';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { ArrowRight, Sparkles, Coffee, Globe2, Cpu } from 'lucide-react';

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsContactOpen(true);
  };

  const marqueeItems = [
    'High-Converting Next.js Websites',
    'Sub-Second Page Speeds (<0.8s)',
    'Custom AI Assistants',
    'Automated CRM & WhatsApp Pipelines',
    'Enterprise RAG Knowledge Bases',
    '2-Week Rapid MVP Sprints',
    'Zero Monthly Builder Tax',
    '100% Code & IP Ownership',
  ];

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar onOpenContact={() => { setSelectedPlan(''); setIsContactOpen(true); }} />

      {/* 1. Unified Hero Section */}
      <Hero onOpenContact={() => { setSelectedPlan(''); setIsContactOpen(true); }} />

      {/* 2. Velocity Marquee Strip */}
      <div
        style={{
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--bg-glass-subtle)',
          padding: '20px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="marquee-container">
          <div className="marquee-content">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                }}
              >
                <span>{item}</span>
                <span style={{ color: 'var(--accent-orange)' }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Interactive Solution Finder */}
      <OpportunityExplorer onOpenContact={() => { setSelectedPlan(''); setIsContactOpen(true); }} />

      {/* 4. Website Packages & Transparent Pricing */}
      <WebsitePricing onSelectPlan={handleSelectPlan} />

      {/* 5. AI Capabilities Detailed Matrix */}
      <AiCapabilities onOpenContact={() => { setSelectedPlan(''); setIsContactOpen(true); }} />

      {/* 6. Synergy Section (The Full-Stack Advantage: Websites + AI Combined) */}
      <SynergySection onOpenContact={() => { setSelectedPlan(''); setIsContactOpen(true); }} />

      {/* 7. Why Custom Handcrafted Code Beats Generic Templates */}
      <WhyCustomCode />

      {/* 8. Interactive ROI Calculator */}
      <RoiCalculator onOpenContact={() => { setSelectedPlan(''); setIsContactOpen(true); }} />

      {/* 9. Real-World Client Work */}
      <ClientShowcase />

      {/* 10. Industry Case Studies */}
      <CaseStudies onOpenContact={() => { setSelectedPlan(''); setIsContactOpen(true); }} />

      {/* 11. Human-Centered Philosophy */}
      <Philosophy />

      {/* 12. 4-Step Agile Delivery Process & Timeline */}
      <ProcessTimeline onOpenContact={() => { setSelectedPlan(''); setIsContactOpen(true); }} />

      {/* 13. Categorized Conversational FAQ */}
      <FaqSection />

      {/* 14. Final Warm Discovery CTA Section */}
      <section style={{ padding: '100px 0 120px', position: 'relative' }}>
        <div className="container-custom">
          <div
            className="glass-card"
            style={{
              padding: '64px 40px',
              textAlign: 'center',
              border: '1.5px solid rgba(255, 107, 53, 0.35)',
              background: 'radial-gradient(circle at 50% 0%, rgba(255, 107, 53, 0.18) 0%, rgba(251, 191, 36, 0.08) 35%, var(--bg-card) 75%)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <div style={{ display: 'inline-flex', marginBottom: '18px' }}>
              <span className="badge-pill">
                <Coffee size={14} />
                <span>Let&apos;s Have a Conversation</span>
              </span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
                color: 'var(--text-primary)',
              }}
            >
              Let&apos;s Build Something <span className="gradient-text-orange">Extraordinary Together</span>.
            </h2>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.12rem',
                maxWidth: '680px',
                margin: '0 auto 38px',
                lineHeight: 1.65,
              }}
            >
              Whether you need a sub-second Next.js website starting at ₹12,999, an automated WhatsApp lead pipeline, or a bespoke AI system, we&apos;re here to guide the way with honest, transparent craft.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => { setSelectedPlan(''); setIsContactOpen(true); }}
                className="btn-primary"
                style={{ padding: '16px 42px', fontSize: '1rem' }}
              >
                <span>Schedule a Discovery Call</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenContact={() => { setSelectedPlan(''); setIsContactOpen(true); }} />

      {/* Unified Lead Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => {
          setIsContactOpen(false);
          setSelectedPlan('');
        }}
        selectedPlan={selectedPlan}
        isWebsite={Boolean(selectedPlan)}
      />
    </main>
  );
}
