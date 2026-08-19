'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is my business too small or traditional for AI automation?',
      a: 'Not at all. In fact, small and mid-sized businesses often feel the greatest relief because every hour saved directly frees up core team members. Whether you run an agency, real estate consultancy, clinic, or local service, simple automations make a profound difference.',
    },
    {
      q: 'Will this be complicated for my team to learn and manage?',
      a: 'We design our systems to fit into the tools your team already uses every day — such as WhatsApp, Google Sheets, Slack, or Email. There is zero complicated software to learn or install.',
    },
    {
      q: 'How secure is our company and customer data?',
      a: 'We take privacy extremely seriously. We use enterprise-grade private API pipelines where your documents, client details, and business conversations are never used to train public AI models.',
    },
    {
      q: 'How long does it take from our first chat to a working system?',
      a: 'Most custom workflow automations and initial AI assistants are fully built, tested, and handed over within 10 to 14 days during our focused 2-Week Sprint.',
    },
    {
      q: 'What happens if we need adjustments or ongoing support?',
      a: 'We provide thorough documentation, a hands-on walkthrough with your team, and dedicated support periods to ensure everything runs smoothly and reliably as your business grows.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span className="badge-pill">
              <HelpCircle size={14} />
              <span>Clear &amp; Honest Answers</span>
            </span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Frequently Asked <span className="gradient-text-orange">Questions</span>.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
            Everything you need to know about working with us, keeping your data secure, and getting started.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  border: isOpen ? '1.5px solid var(--accent-orange)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    color: 'var(--text-primary)',
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? 'var(--accent-orange)' : 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 28px 26px 28px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '18px',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
