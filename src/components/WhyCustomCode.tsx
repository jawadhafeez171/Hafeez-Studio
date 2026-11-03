'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  TrendingUp, 
  Award,
  Sparkles
} from 'lucide-react';

export default function WhyCustomCode() {
  const [mousePos, setMousePos] = useState<Record<number, { x: number; y: number }>>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos((prev) => ({
      ...prev,
      [idx]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  const whyCustomWins = [
    {
      icon: Zap,
      metric: '< 0.8s vs 4–6s WP Bloat',
      title: 'Sub-Second Loading Speed',
      desc: 'Speed is your #1 conversion driver. Every 1-second delay reduces conversions by 7%. We handcraft every byte for sub-second First Contentful Paint.',
      customAdvantage: 'Bespoke compiled Next.js edge code with zero bloat & 98+ Google Lighthouse score.',
      templateFlaw: 'Heavy jQuery, 35+ plugins & database queries causing 4–6s mobile lag.',
      color: '#0D9488',
      bgGlow: 'rgba(13, 148, 136, 0.12)',
    },
    {
      icon: ShieldCheck,
      metric: '100% IP & Code Ownership',
      title: 'Zero Plugin Hacks & Full Control',
      desc: 'Never get held hostage by proprietary website builders or wake up to hacked WordPress plugins and broken themes after automated updates.',
      customAdvantage: 'Complete GitHub repository transfer, clean documentation & lifetime asset ownership.',
      templateFlaw: 'Captive vendor lock-in, recurring plugin licenses, and weekly security vulnerabilities.',
      color: '#059669',
      bgGlow: 'rgba(5, 150, 105, 0.12)',
    },
    {
      icon: Smartphone,
      metric: '75%+ Mobile Traffic Focused',
      title: 'Thumb-Engineered Mobile UX',
      desc: 'Business visitors browse predominantly on smartphones. We engineer ergonomic tap targets, smooth touch swipe, and zero layout shifts.',
      customAdvantage: 'Tailored responsive fluid typography, instant touch response & sticky action triggers.',
      templateFlaw: 'Rigid desktop-first themes clumsily shrunk down to mobile with microscopic buttons.',
      color: '#10B981',
      bgGlow: 'rgba(16, 185, 129, 0.12)',
    },
    {
      icon: TrendingUp,
      metric: 'Save ₹25,000+/year Forever',
      title: 'Zero Monthly Builder Tax',
      desc: 'Eliminate mandatory builder subscriptions. Your modern web platform runs on world-class global edge CDN infrastructure with virtually zero hosting cost.',
      customAdvantage: 'Deploy to enterprise edge networks with global CDN, free SSL, and zero monthly builder tax.',
      templateFlaw: 'Forced ₹1,500 – ₹3,500/month platform fees plus escalating storage & bandwidth penalties.',
      color: '#D97706',
      bgGlow: 'rgba(217, 119, 6, 0.12)',
    },
  ];

  return (
    <section id="why-custom" style={{ padding: '80px 0 100px', position: 'relative', zIndex: 1 }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}
        >
          <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
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
              <Award size={14} />
              <span>The Hafeez Studio Difference</span>
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
            Why Custom Handcrafted Code Beats{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #059669 0%, #10B981 50%, #D97706 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Generic Templates
            </span>
            .
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
            Your website is your 24/7 digital storefront. Here is why ambitious businesses invest in clean, tailored code rather than slow, cluttered templates.
          </p>
        </motion.div>

        <div className="websites-why-grid">
          {whyCustomWins.map((reason, idx) => {
            const Icon = reason.icon;
            const currentMouse = mousePos[idx] || { x: 0, y: 0 };
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                className="glass-card websites-why-card"
                style={{
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '18px',
                  border: `1.5px solid ${reason.color}35`,
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
                    background: `radial-gradient(350px circle at ${currentMouse.x}px ${currentMouse.y}px, ${reason.color}15, transparent 70%)`,
                    opacity: currentMouse.x > 0 ? 1 : 0,
                    transition: 'opacity 0.25s ease',
                  }}
                />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Top Row: Icon + Metric Tag */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      marginBottom: '18px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '13px',
                        background: reason.bgGlow,
                        border: `1.5px solid ${reason.color}55`,
                        color: reason.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '999px',
                        background: `${reason.color}18`,
                        border: `1px solid ${reason.color}45`,
                        color: reason.color,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {reason.metric}
                    </span>
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '18px' }}>
                    {reason.desc}
                  </p>

                  {/* Direct Comparison Breakdown */}
                  <div
                    style={{
                      borderRadius: '12px',
                      padding: '12px 14px',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    {/* Hafeez Studio Custom Pro */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem' }}>
                      <span
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: 'rgba(16, 185, 129, 0.15)',
                          color: '#10B981',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                          fontWeight: 800,
                          fontSize: '0.72rem',
                        }}
                      >
                        ✓
                      </span>
                      <div>
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Hafeez Studio: </strong>
                        <span style={{ color: 'var(--text-secondary)' }}>{reason.customAdvantage}</span>
                      </div>
                    </div>

                    {/* Generic Template Con */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem' }}>
                      <span
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: 'rgba(239, 68, 68, 0.12)',
                          color: '#EF4444',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                          fontWeight: 800,
                          fontSize: '0.72rem',
                        }}
                      >
                        ✕
                      </span>
                      <div>
                        <strong style={{ color: 'var(--text-muted)', fontWeight: 600 }}>WordPress / Wix: </strong>
                        <span style={{ color: 'var(--text-muted)' }}>{reason.templateFlaw}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
