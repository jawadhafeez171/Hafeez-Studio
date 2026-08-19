'use client';

import React from 'react';
import { Search, Code2, Rocket, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenContact: () => void;
}

export default function ProcessTimeline({ onOpenContact }: ProcessTimelineProps) {
  const steps = [
    {
      num: '01',
      title: 'AI Discovery & Workflow Audit',
      icon: Search,
      timeframe: 'Days 1 – 3',
      description: 'We deep dive into your existing business operations, team bottlenecks, and tech stack to pinpoint the highest-ROI automation and AI agent opportunities.',
    },
    {
      num: '02',
      title: 'Architecture & Rapid Prototype',
      icon: Code2,
      timeframe: 'Days 4 – 8',
      description: 'We design custom system prompts, vector database schemas, and integration pipelines, delivering a live interactive proof of concept for your feedback.',
    },
    {
      num: '03',
      title: 'Full-Scale Integration & Testing',
      icon: Rocket,
      timeframe: 'Days 9 – 13',
      description: 'We connect your CRM, databases, internal communication tools (Slack/WhatsApp), and deploy production-grade safeguards with zero downtime.',
    },
    {
      num: '04',
      title: 'Launch, Training & Continuous Evolution',
      icon: RefreshCw,
      timeframe: 'Day 14+',
      description: 'We train your team, monitor accuracy metrics, and provide ongoing optimization to ensure your AI systems evolve seamlessly as your business grows.',
    },
  ];

  return (
    <section id="process" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span className="badge-pill">
              <span>Agile 4-Step Delivery</span>
            </span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              color: 'var(--text-primary)',
            }}
          >
            From Concept to <span className="gradient-text-orange">Production AI in 2 Weeks</span>.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
            No endless multi-month consulting cycles. We move fast, build robust architectures, and deliver tangible results you can measure immediately.
          </p>
        </div>

        {/* Timeline Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            position: 'relative',
          }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}
                  >
                    <div
                      className="font-serif"
                      style={{
                        fontSize: '2.2rem',
                        fontWeight: 900,
                        color: 'rgba(255, 107, 53, 0.45)',
                      }}
                    >
                      {step.num}
                    </div>
                    <div
                      style={{
                        padding: '4px 12px',
                        background: 'var(--bg-glass)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '999px',
                        fontSize: '0.75rem',
                        color: 'var(--accent-orange)',
                        fontWeight: 600,
                      }}
                    >
                      {step.timeframe}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <div
                      style={{
                        padding: '8px',
                        borderRadius: '8px',
                        background: 'rgba(255, 107, 53, 0.12)',
                        color: 'var(--accent-orange)',
                        display: 'flex',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>{step.title}</h3>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '24px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)' }} />
                  <span>Guaranteed Deliverables</span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button onClick={onOpenContact} className="btn-primary" style={{ padding: '16px 36px' }}>
            <span>Kickstart Your 2-Week Sprint</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
