'use client';

import React from 'react';
import { Sparkles, ArrowRight, Bot, Cpu, Zap, CheckCircle2, Globe2, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '90px',
        overflow: 'hidden',
      }}
    >
      {/* Background Radiant Glows */}
      <div className="glow-mesh" />
      <div
        className="glow-mesh-secondary"
        style={{ top: '25%', right: '-5%' }}
      />
      <div
        className="glow-mesh-secondary"
        style={{ top: '45%', left: '-10%' }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          {/* Status Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div className="badge-pill">
              <span className="pulse-dot" />
              <span>✨ Hafeez Studio • Modern Websites &amp; Intelligent AI Automation</span>
            </div>
          </div>

          {/* Hero Headline */}
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 5.4vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.14,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              color: 'var(--text-primary)',
            }}
          >
            Websites Engineered to Convert.{' '}
            <span className="gradient-text-orange">AI Automation Built to Scale.</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.9vw, 1.25rem)',
              color: 'var(--text-secondary)',
              maxWidth: '800px',
              margin: '0 auto 38px',
              lineHeight: 1.65,
              fontWeight: 400,
            }}
          >
            We partner with ambitious founders, agencies, and clinics to build lightning-fast Next.js web applications and intelligent AI workflow pipelines that turn visitors into paying clients and eliminate repetitive manual drudgery.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '54px',
            }}
          >
            <button onClick={onOpenContact} className="btn-primary" style={{ padding: '16px 34px', fontSize: '1rem' }}>
              <span>Book Discovery Call</span>
              <ArrowRight size={18} />
            </button>
            <a href="#pricing" className="btn-secondary" style={{ padding: '16px 28px', fontSize: '1rem' }}>
              <Globe2 size={18} style={{ color: '#0D9488' }} />
              <span>Website Plans (from ₹12,999)</span>
            </a>
            <a href="#ai-solutions" className="btn-secondary" style={{ padding: '16px 28px', fontSize: '1rem' }}>
              <Cpu size={18} style={{ color: 'var(--accent-orange)' }} />
              <span>Explore AI Systems</span>
            </a>
          </div>

          {/* Key Value Metrics Bar */}
          <div
            className="glass-card"
            style={{
              padding: '26px 32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '20px',
              textAlign: 'center',
            }}
          >
            <div>
              <div
                className="font-serif gradient-text-orange"
                style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '4px' }}
              >
                &lt; 0.8s
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                Sub-Second Speed Guarantee
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-subtle)' }}>
              <div
                className="font-serif gradient-text"
                style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '4px' }}
              >
                10x – 20x
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                Bandwidth Reclaimed
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-subtle)' }}>
              <div
                className="font-serif gradient-text-emerald"
                style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '4px' }}
              >
                2 Weeks
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                Rapid Turnaround Sprint
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-subtle)' }}>
              <div
                className="font-serif gradient-text"
                style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '4px' }}
              >
                100%
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                Full IP &amp; Code Ownership
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive End-to-End Pipeline Card */}
        <div style={{ marginTop: '64px', maxWidth: '960px', margin: '64px auto 0' }}>
          <div
            className="glass-card"
            style={{
              padding: '30px 32px',
              border: '1.5px solid var(--border-subtle)',
            }}
          >
            {/* Terminal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
                <span
                  className="font-mono"
                  style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginLeft: '10px' }}
                >
                  hafeez-studio-unified-engine v3.0 • live customer flow
                </span>
              </div>
              <div className="badge-emerald" style={{ padding: '4px 12px', fontSize: '0.78rem' }}>
                <CheckCircle2 size={13} />
                Fully Integrated
              </div>
            </div>

            {/* Architecture Flow Display */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
              }}
            >
              <div
                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid rgba(13, 148, 136, 0.35)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Globe2 size={16} style={{ color: '#0D9488' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0D9488' }}>1. Lightning-Fast Web Storefront</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Sub-second Next.js pages capture visitors, display social proof, and trigger 1-click WhatsApp/form inquiries.
                </p>
              </div>

              <div
                style={{
                  background: 'var(--badge-orange-bg)',
                  border: '1px solid var(--badge-orange-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Cpu size={16} style={{ color: 'var(--accent-orange)' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-orange)' }}>2. AI Triage &amp; Knowledge</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Private AI assistant answers questions, quotes services, and qualifies customer budgets within 3 seconds.
                </p>
              </div>

              <div
                style={{
                  background: 'var(--badge-emerald-bg)',
                  border: '1px solid var(--badge-emerald-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Bot size={16} style={{ color: 'var(--accent-emerald)' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>3. Automated CRM Action</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Instant calendar appointment booked, customer notified on WhatsApp, and lead synced to your CRM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
