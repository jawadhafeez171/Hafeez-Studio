'use client';

import React from 'react';
import { Building2, ShoppingBag, Stethoscope, Briefcase } from 'lucide-react';

interface CaseStudiesProps {
  onOpenContact: () => void;
}

export default function CaseStudies({ onOpenContact }: CaseStudiesProps) {
  const industries = [
    {
      name: 'Real Estate & Property',
      icon: Building2,
      problem: 'High lead drop-off due to slow response times on property portals and manual booking of site visits.',
      solution: '24/7 WhatsApp & Web AI Assistant trained on floor plans, pricing sheets, and location brochures with instant calendar booking.',
      result: '4.2x increase in scheduled site visits and sub-3-second lead qualification.',
    },
    {
      name: 'E-Commerce & D2C Brands',
      icon: ShoppingBag,
      problem: 'Customer support teams overwhelmed with order tracking, return queries, and repetitive product fit questions.',
      solution: 'Custom conversational agent connected directly to Shopify/WooCommerce and shipping APIs with automatic return routing.',
      result: '68% reduction in support ticket volume and 14% increase in cart recovery.',
    },
    {
      name: 'Healthcare & Specialized Clinics',
      icon: Stethoscope,
      problem: 'Staff bogged down with phone calls for appointment scheduling, doctor availability, and pre-consultation intake.',
      solution: 'Intelligent triage agent that captures patient intake info, checks doctor calendars, and sends SMS reminders.',
      result: 'Eliminated 80% of routine front-desk phone calls and dropped no-show rates by 35%.',
    },
    {
      name: 'Agencies & Professional Services',
      icon: Briefcase,
      problem: 'Hours lost drafting proposals, summarizing client intake meetings, and updating CRM records manually.',
      solution: 'End-to-end meeting transcription → action item extraction → proposal draft generation pipeline.',
      result: 'Reclaimed 12 hours/week per account manager with instant proposal turnarounds.',
    },
  ];

  return (
    <section style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span className="badge-pill">
              <span>Industry-Specific Deployments</span>
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
            Built for Real-World <span className="gradient-text-orange">Industry Workflows</span>.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
            Every business is unique. We tailor our AI architecture to your exact operational requirements and tech ecosystem.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '34px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      padding: '12px',
                      borderRadius: '12px',
                      background: 'rgba(255, 107, 53, 0.1)',
                      color: 'var(--accent-orange)',
                      marginBottom: '20px',
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <h3
                    className="font-serif"
                    style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}
                  >
                    {ind.name}
                  </h3>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#EF4444', fontWeight: 700, marginBottom: '4px' }}>
                      Challenge
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {ind.problem}
                    </p>
                  </div>

                  <div style={{ marginBottom: '22px' }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-orange)', fontWeight: 700, marginBottom: '4px' }}>
                      Hafeez Studio AI Solution
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {ind.solution}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                  }}
                >
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-emerald)', fontWeight: 700, marginBottom: '2px' }}>
                    Key Outcome
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {ind.result}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
