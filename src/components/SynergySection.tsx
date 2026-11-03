'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Globe2, 
  Bot, 
  Workflow, 
  ArrowRight, 
  Zap, 
  CheckCircle2,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface SynergySectionProps {
  onOpenContact: () => void;
}

export default function SynergySection({ onOpenContact }: SynergySectionProps) {
  const steps = [
    {
      num: '01',
      title: 'High-Speed Next.js Storefront',
      badge: 'Capture & Trust',
      badgeColor: '#0D9488',
      icon: Globe2,
      desc: 'Sub-second load times (<0.8s) and thumb-engineered mobile UX capture organic search visitors before they bounce to competitors.',
      details: [
        '98+ Google Lighthouse Performance Score',
        'Built-in structured SEO schema & meta tags',
        'Edge cloud CDN hosting with zero builder tax',
      ],
    },
    {
      num: '02',
      title: '24/7 AI Sales Concierge',
      badge: 'Qualify & Triage',
      badgeColor: '#059669',
      icon: Bot,
      desc: 'Domain-trained AI answers customer questions, checks service availability, and calculates instant project quotes with warm human politeness.',
      details: [
        'Grounded strictly in your business rules & pricing',
        'Sub-3-second conversational responses on web & WhatsApp',
        'Zero hallucinations with verifiable confidence thresholds',
      ],
    },
    {
      num: '03',
      title: 'Automated CRM & WhatsApp Sync',
      badge: 'Close & Deliver',
      badgeColor: '#D97706',
      icon: Workflow,
      desc: 'Qualified leads are instantly pushed into your Google Sheets, Notion, or CRM, and calendar meetings are automatically booked without back-and-forth emails.',
      details: [
        'Instant WhatsApp notifications to your phone',
        'Automated calendar booking & reminder notifications',
        'Saves 15–20 hours of manual follow-ups weekly',
      ],
    },
  ];

  return (
    <section style={{ padding: '80px 0 100px', position: 'relative', zIndex: 1 }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}
        >
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span
              style={{
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'linear-gradient(90deg, rgba(13, 148, 136, 0.12) 0%, rgba(5, 150, 105, 0.12) 100%)',
                border: '1px solid rgba(5, 150, 105, 0.35)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Sparkles size={14} style={{ color: '#0D9488' }} />
              <span>The Full-Stack Advantage</span>
              <span style={{ color: '#059669' }}>•</span>
              <span style={{ color: '#059669' }}>Websites + AI Combined</span>
            </span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.1rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              color: 'var(--text-primary)',
            }}
          >
            Why Choose Between a Website and AI?{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0D9488 0%, #059669 50%, #D97706 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get Both Working as One
            </span>
            .
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
            Traditional web designers don&apos;t know AI, and AI prompt-engineers can&apos;t build production web applications. We bridge the gap: building high-converting websites that have intelligent automation baked directly into their DNA.
          </p>
        </motion.div>

        {/* 3 Step Connected Synergy Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '24px',
            marginBottom: '50px',
          }}
        >
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="glass-card"
                style={{
                  padding: '32px 28px',
                  borderRadius: '20px',
                  border: `1.5px solid ${s.badgeColor}35`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        background: `${s.badgeColor}18`,
                        border: `1px solid ${s.badgeColor}45`,
                        color: s.badgeColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        background: `${s.badgeColor}15`,
                        color: s.badgeColor,
                        border: `1px solid ${s.badgeColor}35`,
                      }}
                    >
                      {s.badge}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '4px' }}>
                    STEP {s.num}
                  </div>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '22px' }}>
                    {s.desc}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {s.details.map((d, dIdx) => (
                      <li
                        key={dIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '0.85rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <CheckCircle2 size={15} style={{ color: s.badgeColor, flexShrink: 0 }} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Banner Card */}
        <div
          className="glass-card"
          style={{
            padding: '36px 40px',
            borderRadius: '20px',
            background: 'radial-gradient(circle at 50% 0%, rgba(5, 150, 105, 0.12) 0%, rgba(13, 148, 136, 0.08) 50%, var(--bg-card) 85%)',
            border: '1.5px solid rgba(5, 150, 105, 0.35)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <h4
              className="font-serif"
              style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '8px',
              }}
            >
              Have an Existing Website or Workflow?
            </h4>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              We seamlessly integrate AI pipelines into your existing WordPress, Shopify, or custom site — or migrate you to a lightning-fast Next.js platform in under 2 weeks.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="btn-primary"
            style={{
              padding: '14px 28px',
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>Discuss Your Setup</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

