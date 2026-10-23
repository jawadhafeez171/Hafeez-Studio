'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import OpportunityExplorer from '@/components/OpportunityExplorer';
import AiCapabilities from '@/components/AiCapabilities';
import RoiCalculator from '@/components/RoiCalculator';
import CaseStudies from '@/components/CaseStudies';
import ClientShowcase from '@/components/ClientShowcase';
import ProcessTimeline from '@/components/ProcessTimeline';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { ArrowRight, Sparkles, Coffee } from 'lucide-react';

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const marqueeItems = [
    'Custom AI Assistants',
    'Thoughtful Workflow Automation',
    'Enterprise RAG Knowledge Bases',
    'Next.js Web Applications',
    '2-Week Rapid MVP Sprints',
    'Intelligent CRM Integration',
    'Human-Centered Technology',
  ];

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenContact={() => setIsContactOpen(true)} />

      {/* Velocity Marquee Strip */}
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

      {/* Interactive Solution Finder */}
      <OpportunityExplorer onOpenContact={() => setIsContactOpen(true)} />

      {/* AI Capabilities Detailed Matrix */}
      <AiCapabilities onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive ROI Calculator */}
      <RoiCalculator onOpenContact={() => setIsContactOpen(true)} />

      {/* Human-Centered Philosophy */}
      <Philosophy />

      {/* Real-World Client Work */}
      <ClientShowcase />

      {/* Industry Case Studies */}
      <CaseStudies onOpenContact={() => setIsContactOpen(true)} />

      {/* Process & Timeline */}
      <ProcessTimeline onOpenContact={() => setIsContactOpen(true)} />

      {/* Conversational FAQ */}
      <FaqSection />

      {/* Final Warm CTA Section */}
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
              Let&apos;s Build Something <span className="gradient-text-orange">Meaningful Together</span>.
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
              Whether you have a fully formed roadmap or just want to explore where automation could save your team hours every week, we&apos;re here to help guide the way with honest, thoughtful expertise.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setIsContactOpen(true)}
                className="btn-primary"
                style={{ padding: '16px 42px', fontSize: '1rem' }}
              >
                <span>Schedule a Warm Discovery Call</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Lead Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        isTutoring={false}
      />
    </main>
  );
}
