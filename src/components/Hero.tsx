'use client';

import React from 'react';
import { Sparkles, ArrowRight, Bot, Cpu, Zap, CheckCircle2, HeartHandshake, Smile } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '100px',
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
        style={{ top: '45%', left: '-10%', background: 'radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%)' }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '940px', margin: '0 auto', textAlign: 'center' }}>
          {/* Status Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div className="badge-pill">
              <span className="pulse-dot" />
              <span>✨ Welcome to Hafeez Studio • Human-Centered AI &amp; Intelligent Web Craft</span>
            </div>
          </div>

          {/* Hero Headline */}
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.6rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: '26px',
            }}
          >
            Empowering Your Business with <span className="gradient-text-orange">Intelligent AI Solutions</span> &amp; Human-First Craft.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              maxWidth: '760px',
              margin: '0 auto 40px',
              lineHeight: 1.65,
              fontWeight: 400,
            }}
          >
            We partner with forward-thinking teams to build bespoke AI agents, effortless workflow automations, and high-converting Next.js web applications that eliminate drudgery and multiply what you can achieve.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '60px',
            }}
          >
            <button onClick={onOpenContact} className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
              <span>Let&apos;s Talk About Your Project</span>
              <ArrowRight size={18} />
            </button>
            <a href="#roi-calculator" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1rem' }}>
              <Zap size={18} style={{ color: 'var(--accent-amber)' }} />
              <span>Explore ROI Estimator</span>
            </a>
          </div>

          {/* Key Value Metrics Bar */}
          <div
            className="glass-card"
            style={{
              padding: '28px 36px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            <div>
              <div
                className="font-serif gradient-text-orange"
                style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '4px' }}
              >
                10x - 20x
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Bandwidth Reclaimed
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-subtle)' }}>
              <div
                className="font-serif gradient-text"
                style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '4px' }}
              >
                2 Weeks
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                From Idea to Working MVP
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-subtle)' }}>
              <div
                className="font-serif gradient-text-emerald"
                style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '4px' }}
              >
                24 / 7
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Always-On Intelligent Support
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-subtle)' }}>
              <div
                className="font-serif gradient-text"
                style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '4px' }}
              >
                100%
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Human-Aligned &amp; Private
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive AI Pipeline Preview Card */}
        <div style={{ marginTop: '70px', maxWidth: '960px', margin: '70px auto 0' }}>
          <div
            className="glass-card"
            style={{
              padding: '32px',
              border: '1px solid rgba(255, 107, 53, 0.3)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.55)',
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
                  style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '10px' }}
                >
                  hafeez-studio-pipeline v2.4 • ready to assist
                </span>
              </div>
              <div className="badge-emerald" style={{ padding: '4px 12px', fontSize: '0.78rem' }}>
                <CheckCircle2 size={13} />
                Live &amp; Ready
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
                  background: 'rgba(255, 240, 225, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Zap size={16} style={{ color: 'var(--accent-orange)' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>1. Client Trigger</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Inbound customer message, lead form submission, email, or webhook event.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 107, 53, 0.07)',
                  border: '1px solid rgba(255, 107, 53, 0.32)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Cpu size={16} style={{ color: 'var(--accent-orange)' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFB38A' }}>2. AI Understanding</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Grounded in your company guidelines, knowledge base, and precise business rules.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.07)',
                  border: '1px solid rgba(16, 185, 129, 0.32)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Bot size={16} style={{ color: '#34D399' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#6EE7B7' }}>3. Helpful Action</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Instant polite response, calendar appointment scheduled, and CRM seamlessly updated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
