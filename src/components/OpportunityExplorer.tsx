'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  UserCheck, 
  FileSpreadsheet, 
  Compass, 
  ArrowRight,
  Clock,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

interface OpportunityExplorerProps {
  onOpenContact: () => void;
}

export default function OpportunityExplorer({ onOpenContact }: OpportunityExplorerProps) {
  const [selectedGoal, setSelectedGoal] = useState(0);

  const challenges = [
    {
      id: 'customer-queries',
      icon: MessageSquare,
      question: 'Our team spends hours answering repetitive customer questions & WhatsApp messages',
      solutionTitle: '24/7 Warm Conversational Assistant',
      howItWorks:
        'A custom AI assistant trained on your exact products, pricing, and FAQs. It responds in seconds with warm, human-like politeness, schedules calls, and loops in a human whenever needed.',
      timeSaved: '15 – 25 hours per week',
      bestFor: 'Agencies, E-commerce, Real Estate, Clinics',
      badge: 'Immediate Relief',
    },
    {
      id: 'lead-qualification',
      icon: UserCheck,
      question: 'Inbound leads arrive at all hours and take too long for us to follow up and qualify',
      solutionTitle: 'Instant Polite Lead Qualifier & Booker',
      howItWorks:
        'Engages prospective clients the second they inquire on your website or WhatsApp. Collects project details, budget, and timeline, and directly books qualified meetings into your calendar.',
      timeSaved: 'Sub-3-second lead response time',
      bestFor: 'B2B Services, Consultancies, High-Ticket Sales',
      badge: 'Zero Lost Leads',
    },
    {
      id: 'data-entry',
      icon: FileSpreadsheet,
      question: 'We are constantly copy-pasting data between emails, PDFs, Notion, and Google Sheets',
      solutionTitle: 'Autonomous Workflow & Document Pipeline',
      howItWorks:
        'Extracts structured data from receipts, client onboarding forms, and invoices automatically. Cleans, verifies, and syncs records seamlessly without manual drudgery.',
      timeSaved: '20+ hours per team member monthly',
      bestFor: 'Operations, Finance, Logistics, Real Estate',
      badge: 'Total Accuracy',
    },
    {
      id: 'custom-tool',
      icon: Compass,
      question: 'We have a unique idea for an internal tool or client-facing AI web application',
      solutionTitle: 'Bespoke Next.js AI Web App MVP',
      howItWorks:
        'We design and build a tailored full-stack Next.js web application with native AI features, clean intuitive UI, and secure database architecture in a focused 2-week sprint.',
      timeSaved: 'Launches 3x faster than traditional dev',
      bestFor: 'Founders, Startups, Specialized Businesses',
      badge: 'Custom Architecture',
    },
  ];

  const current = challenges[selectedGoal];

  return (
    <section id="explorer" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span className="badge-pill">
              <Sparkles size={14} />
              <span>Interactive Solution Finder</span>
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
            What is Slowing Your Team Down <span className="gradient-text-orange">the Most?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
            Select your biggest operational bottleneck below to see how a simple, thoughtfully crafted AI solution can solve it.
          </p>
        </div>

        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          {/* Options Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {challenges.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedGoal === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedGoal(idx)}
                  style={{
                    padding: '20px 22px',
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? 'rgba(255, 107, 53, 0.12)' : 'var(--bg-card)',
                    border: isSelected ? '1.5px solid var(--accent-orange)' : '1px solid var(--border-subtle)',
                    color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 8px 24px -4px rgba(255, 107, 53, 0.25)' : 'var(--card-shadow)',
                  }}
                >
                  <div
                    style={{
                      padding: '10px',
                      borderRadius: '12px',
                      background: isSelected ? 'var(--accent-orange)' : 'var(--bg-glass)',
                      color: isSelected ? '#FFFFFF' : 'var(--text-muted)',
                      display: 'flex',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontSize: '0.94rem',
                        fontWeight: isSelected ? 700 : 500,
                        lineHeight: 1.5,
                        color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                      }}
                    >
                      {item.question}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Recommended Solution Card */}
          <div
            className="glass-card"
            style={{
              padding: '40px',
              border: '1.5px solid rgba(255, 107, 53, 0.35)',
              background: 'radial-gradient(circle at 50% 0%, rgba(255, 107, 53, 0.12) 0%, var(--bg-card) 70%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--accent-orange)',
                }}
              >
                Recommended Solution
              </span>
              <span className="badge-pill" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                {current.badge}
              </span>
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '16px',
                lineHeight: 1.25,
              }}
            >
              {current.solutionTitle}
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '28px' }}>
              {current.howItWorks}
            </p>

            <div
              style={{
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px 20px',
                marginBottom: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Clock size={20} style={{ color: '#34D399', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  Expected Impact
                </div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {current.timeSaved}
                </div>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="btn-primary"
              style={{ width: '100%', padding: '16px', fontSize: '0.95rem' }}
            >
              <span>Explore Implementing This Solution</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
