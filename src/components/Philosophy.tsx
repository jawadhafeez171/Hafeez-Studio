'use client';

import React from 'react';
import { HeartHandshake, ShieldCheck, Sparkles, Coffee, Compass, Smile } from 'lucide-react';

export default function Philosophy() {
  const values = [
    {
      icon: HeartHandshake,
      title: 'Humans in the Lead',
      description:
        'We believe AI should elevate human creativity and handle busywork — not replace the genuine relationships and intuition that make your business special.',
    },
    {
      icon: Compass,
      title: 'Simplicity Over Hype',
      description:
        'We never sell complicated tech for the sake of it. If a simple, straightforward automation solves your problem, that is what we build.',
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromised Data Privacy',
      description:
        'Your business intelligence and customer interactions belong to you. We architect private, isolated pipelines with strict zero-training guarantees.',
    },
    {
      icon: Coffee,
      title: 'Warm & Honest Partnership',
      description:
        'No confusing corporate jargon or surprise invoices. We communicate clearly, listen deeply, and treat your business goals as our own.',
    },
  ];

  return (
    <section id="philosophy" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span className="badge-pill">
              <Smile size={14} />
              <span>How We Think &amp; Work</span>
            </span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '18px',
            }}
          >
            Technology Crafted with <span className="gradient-text-orange">Empathy &amp; Care</span>.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
            At Hafeez Studio, our mission is simple: return valuable hours back to business owners and teams so they can do their best work with peace of mind.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(255, 107, 53, 0.1)',
                      border: '1px solid rgba(255, 107, 53, 0.25)',
                      color: 'var(--accent-orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                    }}
                  >
                    {val.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
