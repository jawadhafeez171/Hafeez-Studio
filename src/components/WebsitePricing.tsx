'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Zap,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Clock,
  ArrowUpRight
} from 'lucide-react';

interface WebsitePricingProps {
  onSelectPlan: (planName: string) => void;
}

export default function WebsitePricing({ onSelectPlan }: WebsitePricingProps) {
  const [mobilePlanFilter, setMobilePlanFilter] = useState<'Starter' | 'Growth' | 'Custom' | 'all'>('Growth');
  const [expandedDeliverables, setExpandedDeliverables] = useState<Record<string, boolean>>({});
  const [showComparison, setShowComparison] = useState(false);
  const [mousePos, setMousePos] = useState<Record<string, { x: number; y: number }>>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardName: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos((prev) => ({
      ...prev,
      [cardName]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  const plans = [
    {
      name: 'Starter',
      badge: '⚡ Fast Launch',
      price: '₹12,999',
      prefix: 'Starts from',
      billing: 'Starting price • One-time investment',
      timeframe: '5 – 7 Days Delivery',
      desc: 'Perfect for solo founders, independent consultants, and local businesses that need a clean, authoritative online presence that turns visitors into paying clients.',
      isPopular: false,
      color: '#0D9488', // Deep Teal
      gradient: 'linear-gradient(135deg, #0D9488 0%, #10B981 100%)',
      glowColor: 'rgba(13, 148, 136, 0.35)',
      liveProof: {
        name: 'Encourage India Academy',
        metric: '3x Lead Inflow • <0.8s Speed',
        url: 'https://www.encourageindiaias.com/',
      },
      features: [
        'High-converting 1–3 page custom landing experience',
        'Sub-second page speed (< 1s load time guarantee)',
        '100% mobile-first responsive craft for all screen sizes',
        'Direct 1-click WhatsApp chat & contact inquiry form',
        'Google SEO foundation (title tags, meta & social share cards)',
        'Free SSL certificate, domain linking & high-speed cloud hosting',
        '2 rounds of revisions included',
        '14 days post-launch technical support & warranty',
      ],
      ctaText: 'Get Started with Starter',
    },
    {
      name: 'Growth',
      badge: '🔥 Most Popular Choice',
      price: '₹24,999',
      prefix: 'Starts from',
      billing: 'Starting price • One-time investment',
      timeframe: '10 – 14 Days Delivery',
      desc: 'The complete digital growth package for expanding businesses, agencies, and clinics looking to dominate search rankings, capture leads, and outshine competitors.',
      isPopular: true,
      color: '#059669', // Botanical Emerald
      gradient: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #D97706 100%)',
      glowColor: 'rgba(5, 150, 105, 0.4)',
      liveProof: {
        name: 'JointXperts Orthopedic Portal',
        metric: '< 0.8s Speed • 5 Clinics Synced',
        url: 'https://www.jointxperts.in/',
      },
      features: [
        'Full multi-page business website (up to 8–10 tailored pages)',
        'Dynamic Blog & Insights system for content marketing',
        'Interactive custom widgets (calculators, quote tools, dynamic tabs)',
        'Advanced Google SEO optimization & rich snippet schema',
        'Google Analytics 4 & visitor conversion tracking setup',
        'Automated lead routing directly to your Google Sheet or CRM',
        'Tailored micro-animations & engaging smooth hover effects',
        '3 rounds of revisions included',
        '30 days priority warranty & dedicated support',
      ],
      ctaText: 'Get Started with Growth',
    },
    {
      name: 'Custom',
      badge: '💎 Bespoke & Scalable',
      price: '₹59,999',
      prefix: 'Starts from',
      priceSuffix: '+',
      billing: 'Starting price • Tailored to your scope',
      timeframe: '2 – 3 Weeks Sprint',
      desc: 'For high-ticket brands, specialized platforms, and ambitious companies requiring custom client portals, membership systems, and advanced automated workflows.',
      isPopular: false,
      color: '#D97706', // Champagne Gold
      gradient: 'linear-gradient(135deg, #B45309 0%, #D97706 50%, #F59E0B 100%)',
      glowColor: 'rgba(217, 119, 6, 0.35)',
      liveProof: {
        name: 'Construction Buddy Bangalore',
        metric: 'Interactive 3D Estimator • Luxury Craft',
        url: 'https://constructionbuddy.in/',
      },
      features: [
        'Bespoke web application with unlimited custom page architecture',
        'Secure user authentication & client dashboard portal',
        'Custom online payment gateway integration (Razorpay / Stripe)',
        'Smart automated lead qualification & custom form logic',
        'Third-party software, webhook & database integrations',
        'Full source code handover & complete intellectual property rights',
        'Unlimited revisions during active sprint development',
        '60 days priority post-launch maintenance SLA',
      ],
      ctaText: 'Discuss Custom Project',
    },
  ];

  const comparisonCategories = [
    {
      name: 'Page Scope & Structure',
      starter: '1–3 Custom Pages (Landing / Showcase)',
      growth: 'Up to 8–10 Tailored Pages',
      custom: 'Unlimited Custom Web Pages',
    },
    {
      name: 'Mobile Speed Guarantee',
      starter: 'Sub-second (< 1.0s FCP)',
      growth: 'Lightning fast (< 0.8s Lighthouse 95+)',
      custom: 'Edge-cached ultra high speed',
    },
    {
      name: 'Search Engine Optimization (SEO)',
      starter: 'Standard meta tags & social share card',
      growth: 'Advanced on-page SEO & Google rich schema',
      custom: 'Full enterprise SEO & structured markup',
    },
    {
      name: 'Lead Capture & Pipelines',
      starter: 'WhatsApp 1-click + Email form',
      growth: 'Automated CRM / Google Sheet sync',
      custom: 'Custom database storage & webhook flows',
    },
    {
      name: 'Interactive Features',
      starter: 'FAQ accordion & popup modal',
      growth: 'Custom calculators, tabs & animations',
      custom: 'Client portals, user login & payments',
    },
    {
      name: 'Content & Updates',
      starter: 'Static high-impact content',
      growth: 'Full Blog & Article publishing setup',
      custom: 'Custom dynamic content architecture',
    },
    {
      name: 'Delivery Sprint',
      starter: '5 – 7 Days',
      growth: '10 – 14 Days',
      custom: '2 – 3 Weeks Sprint',
    },
    {
      name: 'Warranty & Support',
      starter: '14 Days Warranty',
      growth: '30 Days Priority Warranty',
      custom: '60 Days Dedicated SLA',
    },
  ];

  return (
    <section id="pricing" style={{ padding: '90px 0 110px', position: 'relative', zIndex: 1 }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px' }}
        >
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span
              style={{
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(5, 150, 105, 0.1)',
                border: '1px solid rgba(5, 150, 105, 0.3)',
                color: '#059669',
                fontSize: '0.85rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Flame size={14} />
              <span>Transparent Milestone Investment in INR</span>
            </span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4.6vw, 3.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              color: 'var(--text-primary)',
            }}
          >
            High-Converting Websites.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0D9488 0%, #059669 45%, #D97706 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Zero Monthly Builder Tax
            </span>
            .
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
            No slow WordPress templates, no recurring platform fees. Handcrafted Next.js web applications engineered for sub-second speeds, top Google rankings, and 100% code ownership.
          </p>

          {/* Three-Pillar Safety Guarantee Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '28px',
            }}
          >
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-subtle)',
                padding: '6px 14px',
                borderRadius: '999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <ShieldCheck size={14} style={{ color: '#10B981' }} />
              <span>Fixed Milestone Quotes • No Scope Shock</span>
            </div>
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-subtle)',
                padding: '6px 14px',
                borderRadius: '999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Zap size={14} style={{ color: '#0D9488' }} />
              <span>Sub-Second Speed Guarantee (&lt; 0.8s)</span>
            </div>
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-subtle)',
                padding: '6px 14px',
                borderRadius: '999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Sparkles size={14} style={{ color: '#D97706' }} />
              <span>100% Full Git Repository &amp; IP Transfer</span>
            </div>
          </div>
        </motion.div>

        {/* Segmented Control on Mobile Devices */}
        <div className="websites-plan-segmented-tabs">
          <button
            type="button"
            onClick={() => setMobilePlanFilter('Starter')}
            className={`websites-plan-tab-btn ${mobilePlanFilter === 'Starter' ? 'active' : ''}`}
          >
            <span>⚡ Starter</span>
          </button>
          <button
            type="button"
            onClick={() => setMobilePlanFilter('Growth')}
            className={`websites-plan-tab-btn ${mobilePlanFilter === 'Growth' ? 'active' : ''}`}
          >
            <span>🔥 Growth</span>
          </button>
          <button
            type="button"
            onClick={() => setMobilePlanFilter('Custom')}
            className={`websites-plan-tab-btn ${mobilePlanFilter === 'Custom' ? 'active' : ''}`}
          >
            <span>💎 Custom</span>
          </button>
          <button
            type="button"
            onClick={() => setMobilePlanFilter('all')}
            className={`websites-plan-tab-btn ${mobilePlanFilter === 'all' ? 'active' : ''}`}
          >
            <span>All</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className={`websites-plans-grid tab-${mobilePlanFilter.toLowerCase()}`}>
          {plans.map((p, idx) => {
            const currentMouse = mousePos[p.name] || { x: 0, y: 0 };
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                onMouseMove={(e) => handleMouseMove(e, p.name)}
                className={`plan-${p.name.toLowerCase()} websites-plan-card-inner`}
                style={{
                  background: p.isPopular
                    ? 'radial-gradient(circle at 50% 0%, rgba(5, 150, 105, 0.14) 0%, rgba(13, 148, 136, 0.08) 45%, var(--bg-card) 75%)'
                    : 'var(--bg-card)',
                  border: p.isPopular
                    ? '2px solid rgba(5, 150, 105, 0.75)'
                    : '1.5px solid var(--border-subtle)',
                  boxShadow: p.isPopular
                    ? '0 25px 60px -15px rgba(5, 150, 105, 0.3), 0 0 35px rgba(5, 150, 105, 0.15)'
                    : 'var(--card-shadow)',
                  backdropFilter: 'blur(20px)',
                  transition: 'border 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Desktop Interactive Mouse Spotlight */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    background: `radial-gradient(400px circle at ${currentMouse.x}px ${currentMouse.y}px, ${p.color}15, transparent 70%)`,
                    opacity: currentMouse.x > 0 ? 1 : 0,
                    transition: 'opacity 0.25s ease',
                  }}
                />

                {/* Popular Glow Badge */}
                {p.isPopular && (
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      top: '-16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(90deg, #059669 0%, #10B981 50%, #D97706 100%)',
                      color: '#FFFFFF',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '6px 20px',
                      borderRadius: '999px',
                      boxShadow: '0 6px 20px rgba(5, 150, 105, 0.4)',
                      zIndex: 2,
                    }}
                  >
                    ★ Most Popular Choice
                  </motion.div>
                )}

                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Tier Title & Delivery Pill */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '14px',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    <h3
                      className="font-serif"
                      style={{
                        fontSize: '1.85rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {p.name}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        background: 'var(--bg-glass)',
                        border: `1px solid ${p.color}40`,
                        color: p.color,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Clock size={12} />
                      <span>{p.timeframe}</span>
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      marginBottom: '18px',
                      minHeight: '66px',
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Verified Live Proof Pill */}
                  <a
                    href={p.liveProof.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: p.color,
                      textDecoration: 'none',
                      background: `${p.color}14`,
                      border: `1px solid ${p.color}35`,
                      padding: '5px 12px',
                      borderRadius: '8px',
                      marginBottom: '20px',
                      transition: 'all 0.2s ease',
                      maxWidth: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${p.color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${p.color}14`;
                    }}
                  >
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.85 }}>Live Proof:</span>
                    <strong style={{ textDecoration: 'underline' }}>{p.liveProof.name}</strong>
                    <span style={{ color: 'var(--text-muted)' }}>• {p.liveProof.metric}</span>
                    <ArrowUpRight size={13} style={{ flexShrink: 0 }} />
                  </a>

                  {/* Price Box with "Starts from" */}
                  <div
                    style={{
                      padding: '20px 0',
                      borderTop: '1px solid var(--border-subtle)',
                      borderBottom: '1px solid var(--border-subtle)',
                      marginBottom: '26px',
                    }}
                  >
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: p.color, marginBottom: '4px' }}>
                      {p.prefix}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                      <span
                        className="font-serif"
                        style={{
                          fontSize: '3.1rem',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.03em',
                          lineHeight: 1,
                        }}
                      >
                        {p.price}
                      </span>
                      {p.priceSuffix && (
                        <span style={{ fontSize: '2rem', fontWeight: 700, color: p.color }}>
                          {p.priceSuffix}
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'block', marginTop: '6px' }}>
                      {p.billing}
                    </span>
                  </div>

                  {/* Features List */}
                  <div style={{ marginBottom: '32px' }}>
                    <div
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--text-muted)',
                        marginBottom: '16px',
                      }}
                    >
                      Included Deliverables:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '13px' }}>
                      {p.features.map((feat, fIdx) => {
                        const isHiddenOnMobile = fIdx >= 4 && !expandedDeliverables[p.name];
                        const isCrmFeature = feat.includes('CRM') || feat.includes('Google Sheet');
                        return (
                          <li
                            key={fIdx}
                            className={isHiddenOnMobile ? 'plan-feature-collapsible' : ''}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '11px',
                              fontSize: '0.92rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.5,
                            }}
                          >
                            <span
                              style={{
                                color: p.color,
                                marginTop: '2px',
                                flexShrink: 0,
                                display: 'inline-flex',
                              }}
                            >
                              <CheckCircle2 size={17} />
                            </span>
                            {isCrmFeature ? (
                              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                                <span>{feat}</span>
                                <span
                                  style={{
                                    fontSize: '0.68rem',
                                    fontWeight: 800,
                                    padding: '2px 7px',
                                    borderRadius: '999px',
                                    background: 'rgba(245, 158, 11, 0.18)',
                                    color: '#F59E0B',
                                    border: '1px solid rgba(245, 158, 11, 0.4)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '3px',
                                  }}
                                >
                                  <Flame size={11} /> High ROI
                                </span>
                              </span>
                            ) : (
                              <span>{feat}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>

                    {/* Mobile Deliverables Toggle Button */}
                    {p.features.length > 4 && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedDeliverables((prev) => ({
                            ...prev,
                            [p.name]: !prev[p.name],
                          }))
                        }
                        className="plan-features-toggle"
                      >
                        <span>
                          {expandedDeliverables[p.name]
                            ? '▲ Show top deliverables'
                            : `▼ View all ${p.features.length} deliverables (+${p.features.length - 4})`}
                        </span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Card CTA & WhatsApp Trigger */}
                <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectPlan(p.name)}
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: '0.98rem',
                      fontWeight: 700,
                      borderRadius: 'var(--radius-sm)',
                      background: p.isPopular
                        ? 'linear-gradient(135deg, #059669 0%, #10B981 60%, #0D9488 100%)'
                        : 'var(--bg-glass)',
                      border: p.isPopular ? 'none' : `1.5px solid ${p.color}80`,
                      color: p.isPopular ? '#FFFFFF' : 'var(--text-primary)',
                      boxShadow: p.isPopular ? `0 10px 30px rgba(5, 150, 105, 0.35)` : 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <span>{p.ctaText}</span>
                    <ArrowRight size={17} />
                  </motion.button>

                  {/* Direct 1-Click WhatsApp Instant Chat Alternative */}
                  <a
                    href={`https://wa.me/919886658462?text=${encodeURIComponent(
                      `Hi Hafeez, I'm interested in getting started with the ${p.name} (${p.price}) Website Package.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '7px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#10B981',
                      textDecoration: 'none',
                      marginTop: '10px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.22)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.16)';
                      e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.45)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.22)';
                    }}
                  >
                    <MessageCircle size={14} />
                    <span>Or chat on WhatsApp (Instant response) ↗</span>
                  </a>

                  {/* Safety Reassurance Footer */}
                  <div style={{ textAlign: 'center', marginTop: '12px' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      50% Kickoff • 50% Live Handover • 100% IP Handover
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Kickoff within 24–48 hrs • Free staging review
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Capability Comparison Toggle (Glow Button) */}
        <div style={{ marginTop: '54px', textAlign: 'center' }}>
          <button
            type="button"
            onClick={() => setShowComparison(!showComparison)}
            className="btn-secondary"
            style={{
              padding: '14px 28px',
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              margin: '0 auto',
              background: 'linear-gradient(90deg, rgba(13, 148, 136, 0.08) 0%, rgba(5, 150, 105, 0.08) 100%)',
              border: '1.5px solid rgba(5, 150, 105, 0.35)',
              boxShadow: '0 4px 20px rgba(5, 150, 105, 0.12)',
            }}
          >
            <Layers size={18} style={{ color: '#0D9488' }} />
            <span>{showComparison ? 'Hide Capability Breakdown' : 'Compare All Deliverables Side-by-Side (8 Categories)'}</span>
            {showComparison ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Side-by-Side Comparison Table */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              style={{ overflow: 'hidden', marginTop: '40px' }}
            >
              {/* Mobile Swipe Hint Badge */}
              <div className="websites-table-swipe-hint">
                <span>↔ Swipe horizontally to compare deliverables</span>
              </div>

              <div className="glass-card websites-table-wrapper">
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '660px' }}>
                  <thead>
                    <tr
                      style={{
                        borderBottom: '1px solid var(--border-subtle)',
                        background: 'rgba(255, 255, 255, 0.03)',
                      }}
                    >
                      <th
                        className="websites-table-sticky-col"
                        style={{ padding: '20px 22px', fontSize: '0.88rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}
                      >
                        Deliverable
                      </th>
                      <th style={{ padding: '20px 18px', fontSize: '0.96rem', color: '#0D9488', fontWeight: 800 }}>
                        Starter (From ₹12,999)
                      </th>
                      <th
                        style={{
                          padding: '20px 18px',
                          fontSize: '0.98rem',
                          color: '#059669',
                          fontWeight: 800,
                          background: 'rgba(5, 150, 105, 0.08)',
                        }}
                      >
                        Growth (From ₹24,999) ★
                      </th>
                      <th style={{ padding: '20px 18px', fontSize: '0.96rem', color: '#D97706', fontWeight: 800 }}>
                        Custom (From ₹59,999)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonCategories.map((item, idx) => (
                      <tr
                        key={idx}
                        style={{
                          borderBottom: '1px solid var(--border-subtle)',
                          transition: 'background 0.2s',
                        }}
                      >
                        <td
                          className="websites-table-sticky-col"
                          style={{ padding: '16px 22px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}
                        >
                          {item.name}
                        </td>
                        <td style={{ padding: '16px 18px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                          {item.starter}
                        </td>
                        <td
                          style={{
                            padding: '16px 18px',
                            fontSize: '0.88rem',
                            color: 'var(--text-primary)',
                            fontWeight: 600,
                            background: 'rgba(5, 150, 105, 0.05)',
                          }}
                        >
                          {item.growth}
                        </td>
                        <td style={{ padding: '16px 18px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                          {item.custom}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
