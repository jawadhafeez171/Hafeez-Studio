'use client';

import React, { useState } from 'react';
import { 
  Bot, 
  Workflow, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Database, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Cpu,
  FileCode2
} from 'lucide-react';

interface AiCapabilitiesProps {
  onOpenContact: () => void;
}

export default function AiCapabilities({ onOpenContact }: AiCapabilitiesProps) {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: 'automation',
      title: 'Workflow Automation',
      shortDesc: 'Eliminate repetitive manual tasks and connect internal tools with autonomous AI pipelines.',
      icon: Workflow,
      tag: 'Highest ROI',
      badgeColor: 'orange',
      features: [
        'Autonomous lead capture, enrichment, and CRM sync (HubSpot, Notion, Sheets)',
        'Automated document extraction (invoices, PDF parsing, contract clauses)',
        'Multi-step AI agent workflows connecting email, WhatsApp, and internal webhooks',
        'Human-in-the-loop review alerts for critical business actions',
      ],
      impact: 'Cuts 15–25 hours of repetitive manual data entry per team member every week.',
      deliverables: ['Custom AI agent scripts', 'API / Webhook integrations', 'Dashboard & alerts', 'Full documentation'],
    },
    {
      id: 'rag-agents',
      title: 'Custom RAG & Chat Assistants',
      shortDesc: 'Domain-trained conversational AI grounded directly in your private business data.',
      icon: MessageSquare,
      tag: '24/7 Availability',
      badgeColor: 'emerald',
      features: [
        'Secure Retrieval-Augmented Generation (RAG) vector embeddings on company docs',
        '24/7 intelligent sales & customer support agent with live appointment booking',
        'Internal enterprise knowledge bot for employee SOPs, policies, and onboarding',
        'Zero hallucination safeguards with source citations and confidence thresholds',
      ],
      impact: 'Reduces customer support response time from hours to under 3 seconds.',
      deliverables: ['Custom vector database setup', 'Branded web chat widget / WhatsApp bot', 'Admin analytics console'],
    },
    {
      id: 'web-apps',
      title: 'AI Web Apps & SaaS MVPs',
      shortDesc: 'Bespoke Next.js web applications embedded with cutting-edge generative AI capabilities.',
      icon: FileCode2,
      tag: 'Full-Stack',
      badgeColor: 'amber',
      features: [
        'Modern, ultra-fast Next.js (App Router) + React applications',
        'Embedded AI features (smart generators, semantic search, generative UI, recommendation engines)',
        'Secure authentication, Stripe billing, and database architecture',
        'Conversion-optimized, high-aesthetic responsive design',
      ],
      impact: 'Launches your AI-powered web product in market in weeks instead of quarters.',
      deliverables: ['Production Next.js codebase', 'Database & Auth setup', 'Vercel / Cloud deployment', 'SEO Optimization'],
    },
    {
      id: 'sprints',
      title: '2-Week AI MVP Sprints',
      shortDesc: 'Rapid strategy audit and proof-of-concept deployment for fast-moving businesses.',
      icon: Cpu,
      tag: 'Rapid Delivery',
      badgeColor: 'orange',
      features: [
        'AI Readiness Audit: analyzing business operations to identify high-ROI automation targets',
        'Architecture blueprint & prompt engineering system design',
        'Rapid working prototype delivered and tested in 14 days',
        'Comprehensive handover and team training session',
      ],
      impact: 'Test and validate AI in your business with minimum risk and fast turnaround.',
      deliverables: ['AI Architecture Audit Report', 'Working Proof of Concept', 'Integration Roadmap'],
    },
  ];

  return (
    <section id="solutions" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span className="badge-pill">
              <Sparkles size={14} />
              <span>Tailored Business Capabilities</span>
            </span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              color: 'var(--text-primary)',
            }}
          >
            Intelligent Solutions Built for <span className="gradient-text-orange">Measurable Business Impact</span>.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
            We do not just wrap LLMs — we architect secure, production-grade AI systems that integrate cleanly into your existing workflows and scale with your business.
          </p>
        </div>

        {/* Interactive Tab Selectors */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: '18px 20px',
                  background: isSelected ? 'rgba(255, 107, 53, 0.12)' : 'var(--bg-card)',
                  border: isSelected ? '1.5px solid var(--accent-orange)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 8px 24px -4px rgba(255, 107, 53, 0.25)' : 'var(--card-shadow)',
                }}
              >
                <div
                  style={{
                    padding: '10px',
                    borderRadius: '10px',
                    background: isSelected ? 'var(--accent-orange)' : 'var(--bg-glass)',
                    color: isSelected ? '#FFFFFF' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-orange)' }}>
                    {item.tag}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Details Card */}
        {(() => {
          const current = capabilities[activeTab];
          const Icon = current.icon;
          return (
            <div
              className="glass-card"
              style={{
                padding: '40px',
                border: '1.5px solid rgba(255, 107, 53, 0.35)',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '40px',
                  alignItems: 'center',
                }}
              >
                {/* Left Column: Details & Features */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div
                      style={{
                        padding: '12px',
                        borderRadius: '12px',
                        background: 'rgba(255, 107, 53, 0.15)',
                        color: 'var(--accent-orange)',
                        display: 'inline-flex',
                      }}
                    >
                      <Icon size={26} />
                    </div>
                    <div>
                      <h3
                        className="font-serif"
                        style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)' }}
                      >
                        {current.title}
                      </h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent-orange)', fontWeight: 600 }}>
                        {current.tag}
                      </span>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '24px',
                    }}
                  >
                    {current.shortDesc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {current.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={18} style={{ color: 'var(--accent-orange)', marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button onClick={onOpenContact} className="btn-primary">
                    <span>Discuss This Solution</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Right Column: ROI & Deliverables Card */}
                <div
                  style={{
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '30px',
                  }}
                >
                  <div style={{ marginBottom: '24px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.78rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--accent-emerald)',
                        fontWeight: 700,
                        marginBottom: '8px',
                      }}
                    >
                      <TrendingUp size={16} />
                      Expected ROI &amp; Outcome
                    </div>
                    <div
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        padding: '14px 18px',
                        borderRadius: 'var(--radius-sm)',
                        lineHeight: 1.5,
                      }}
                    >
                      {current.impact}
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--text-muted)',
                        fontWeight: 700,
                        marginBottom: '12px',
                      }}
                    >
                      Included Deliverables
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {current.deliverables.map((deliv, j) => (
                        <span
                          key={j}
                          style={{
                            fontSize: '0.82rem',
                            padding: '6px 14px',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '999px',
                            color: 'var(--text-secondary)',
                            fontWeight: 500,
                          }}
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: '28px',
                      paddingTop: '20px',
                      borderTop: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <ShieldCheck size={16} style={{ color: 'var(--accent-emerald)' }} />
                    <span>Enterprise-grade privacy • No public model training on your data</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
