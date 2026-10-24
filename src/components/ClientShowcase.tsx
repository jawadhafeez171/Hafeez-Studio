'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Sparkles, CheckCircle2, ArrowUpRight, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ClientItem {
  name: string;
  url: string;
  category: string;
  tagline: string;
  logo: string;
  logoBg?: string;
  logoHeight?: number;
  highlight: string;
  metrics: string;
}

export const clientsData: ClientItem[] = [
  {
    name: 'JointXperts',
    url: 'https://www.jointxperts.in/',
    category: 'Healthcare & Orthopedics',
    tagline: 'Leading Orthopedic & Joint Replacement Surgeon Portal in Bengaluru',
    logo: '/clients/jointxperts.webp',
    logoBg: '#FFFFFF',
    logoHeight: 38,
    highlight: 'Multi-clinic appointment booking portal with sub-second mobile page loads and automated WhatsApp triage.',
    metrics: '< 0.8s Page Speed • 5 Clinics Synced',
  },
  {
    name: 'Encourage India IAS Academy',
    url: 'https://www.encourageindiaias.com/',
    category: 'EdTech & Civil Services',
    tagline: "Bengaluru's Premier UPSC & KPSC Competitive Exam Academy",
    logo: '/clients/encourageindiaias.webp',
    logoBg: '#FFFFFF',
    logoHeight: 52,
    highlight: 'Full-featured academy platform featuring dynamic course directories, syllabus modules, and admission pipelines.',
    metrics: '3x Lead Inflow • Zero Monthly Fees',
  },
  {
    name: 'Construction Buddy',
    url: 'https://constructionbuddy.in/',
    category: 'Architecture & Turnkey Building',
    tagline: 'Turnkey Luxury Home Construction & Architectural Blueprints in Bangalore',
    logo: '/clients/constructionbuddy.webp',
    logoBg: '#0F0D0C',
    logoHeight: 46,
    highlight: 'Interactive construction cost calculator, 3D architectural portfolio, and high-converting project estimation engine.',
    metrics: 'Interactive Estimator • 10-Yr Warranty',
  },
  {
    name: 'India Job Notice',
    url: 'https://www.indiajobnotice.com/',
    category: 'Govt Employment Portal',
    tagline: "Official Employment Gazettes & Exam Schedules for All 36 States & UTs",
    logo: '/clients/indiajobnotice.png',
    logoBg: '#FCFAF4',
    logoHeight: 32,
    highlight: 'High-traffic gazette notification hub with 36 State portal switchers, vacancy trackers, and instant PDF circular alerts.',
    metrics: '6,50,000+ Vacancies • Sub-Second Cache',
  },
];

interface ClientShowcaseProps {
  isWebsitePage?: boolean;
}

export default function ClientShowcase({ isWebsitePage = false }: ClientShowcaseProps) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const checkScrollBounds = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

      const cards = scrollRef.current.querySelectorAll('.client-showcase-card');
      let closestIdx = 0;
      let minDiff = Infinity;
      const containerCenter = scrollLeft + clientWidth / 2;
      cards.forEach((card, idx) => {
        const cardEl = card as HTMLElement;
        const cardCenter = cardEl.offsetLeft + cardEl.offsetWidth / 2;
        const diff = Math.abs(containerCenter - cardCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      setActiveIdx(closestIdx);
    }
  };

  const handleScroll = () => {
    checkScrollBounds();
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.client-showcase-card') as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 16 : 320;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      setTimeout(checkScrollBounds, 300);
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.client-showcase-card') as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 16 : 320;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      setTimeout(checkScrollBounds, 300);
    }
  };

  const scrollToIdx = (idx: number) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.querySelectorAll('.client-showcase-card');
      if (cards[idx]) {
        (cards[idx] as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        setActiveIdx(idx);
        setTimeout(checkScrollBounds, 350);
      }
    }
  };

  React.useEffect(() => {
    checkScrollBounds();
  }, []);

  return (
    <section
      id="clients"
      style={{
        padding: '90px 0 100px',
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span className="badge-pill">
              <Sparkles size={14} style={{ color: isWebsitePage ? '#0284C7' : 'var(--accent-orange)' }} />
              <span style={{ fontWeight: 700 }}>Proven Client Results</span>
            </span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.1rem, 4.4vw, 3.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '18px',
              color: 'var(--text-primary)',
            }}
          >
            Built for Businesses That{' '}
            <span
              className={isWebsitePage ? 'websites-title-gradient' : ''}
              style={{
                background: isWebsitePage
                  ? 'linear-gradient(135deg, #00F0FF 0%, #EC4899 50%, #8B5CF6 100%)'
                  : 'var(--gradient-orange)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Demand Real Growth
            </span>
            .
          </h2>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.08rem',
              lineHeight: 1.65,
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            From premier medical specialists and IAS academies to turnkey construction firms and pan-India portals — here are some of the bespoke platforms engineered by Hafeez Studio.
          </p>
        </div>

        {/* ── Unmistakable Horizontal Slider Control Bar ── */}
        <div
          className="client-showcase-slider-bar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            marginBottom: '18px',
          }}
        >
          {/* Active Status Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              borderRadius: '999px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              backdropFilter: 'blur(12px)',
              minWidth: 0,
              maxWidth: '65%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: isWebsitePage ? '#00F0FF' : 'var(--accent-orange)',
                boxShadow: isWebsitePage ? '0 0 10px #00F0FF' : '0 0 10px var(--accent-orange)',
                display: 'inline-block',
                flexShrink: 0,
                animation: 'pulseGlow 2s infinite',
              }}
            />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 600, flexShrink: 0 }}>
              Platform <strong style={{ color: 'var(--text-primary)' }}>{activeIdx + 1}</strong>/4:
            </span>
            <span
              style={{
                color: isWebsitePage ? 'var(--accent-blue)' : 'var(--accent-orange)',
                fontWeight: 800,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {clientsData[activeIdx].name}
            </span>
          </div>

          {/* Swipe Indicator & Navigation Arrows */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              flexShrink: 0,
            }}
          >
            {/* Desktop / tablet swipe hint text */}
            <span
              className="client-slider-swipe-hint"
              style={{
                fontSize: '0.74rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span>Swipe</span>
              <ArrowRight size={11} style={{ animation: 'bounceX 1.5s infinite' }} />
            </span>

            {/* Prev Button */}
            <button
              onClick={scrollPrev}
              type="button"
              disabled={!canScrollLeft}
              aria-label="Previous client platform"
              className="client-showcase-nav-btn"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-glass)',
                border: '1.5px solid var(--border-subtle)',
                color: canScrollLeft ? 'var(--text-primary)' : 'var(--text-muted)',
                opacity: canScrollLeft ? 1 : 0.45,
                cursor: canScrollLeft ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronLeft size={16} />
            </button>

            {/* Next Button */}
            <button
              onClick={scrollNext}
              type="button"
              disabled={!canScrollRight}
              aria-label="Next client platform"
              className="client-showcase-nav-btn"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-glass)',
                border: '1.5px solid var(--border-subtle)',
                color: canScrollRight ? 'var(--text-primary)' : 'var(--text-muted)',
                opacity: canScrollRight ? 1 : 0.45,
                cursor: canScrollRight ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* 4 Interactive Client Cards (Snap carousel on mobile with card peek) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="client-showcase-grid"
        >
          {clientsData.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card client-showcase-card"
              style={{
                padding: '28px 26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '16px',
                border: '1.5px solid var(--border-subtle)',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              <div>
                {/* Logo & Category Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      height: '62px',
                      padding: '10px 18px',
                      borderRadius: '12px',
                      background: client.logoBg,
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      width={160}
                      height={client.logoHeight || 40}
                      style={{
                        objectFit: 'contain',
                        height: `${client.logoHeight || 36}px`,
                        width: 'auto',
                        maxWidth: '150px',
                      }}
                    />
                  </div>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      background: 'rgba(255, 107, 53, 0.1)',
                      border: '1px solid rgba(255, 107, 53, 0.25)',
                      color: 'var(--accent-orange)',
                    }}
                  >
                    {client.category}
                  </span>
                </div>

                {/* Client Name & Tagline */}
                <h3
                  className="font-serif"
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                  }}
                >
                  {client.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--accent-peach)',
                    fontWeight: 600,
                    marginBottom: '14px',
                    lineHeight: 1.4,
                  }}
                >
                  {client.tagline}
                </p>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    marginBottom: '20px',
                  }}
                >
                  {client.highlight}
                </p>
              </div>

              {/* Card Footer: Metrics & Link */}
              <div
                style={{
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--accent-emerald)',
                  }}
                >
                  <CheckCircle2 size={14} />
                  <span>{client.metrics}</span>
                </div>

                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-orange)';
                    e.currentTarget.style.borderColor = 'var(--accent-orange)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                  aria-label={`Visit ${client.name} live website`}
                >
                  <span>Visit Live</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Interactive Client Pagination & Quick Selector Pills ── */}
        <div
          className="client-showcase-pagination"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '32px',
            flexWrap: 'wrap',
          }}
        >
          {clientsData.map((client, i) => {
            const isActive = activeIdx === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIdx(i)}
                aria-label={`Jump to ${client.name} card`}
                className={`client-showcase-pill-btn ${isActive ? 'active' : ''}`}
                style={{
                  padding: isActive ? '6px 14px' : '6px 10px',
                  borderRadius: '999px',
                  background: isActive
                    ? (isWebsitePage ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 107, 53, 0.15)')
                    : 'var(--bg-glass)',
                  border: isActive
                    ? `1.5px solid ${isWebsitePage ? 'var(--accent-blue)' : 'var(--accent-orange)'}`
                    : '1px solid var(--border-subtle)',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                  fontSize: '0.78rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.25s ease',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span
                  style={{
                    width: isActive ? '8px' : '6px',
                    height: isActive ? '8px' : '6px',
                    borderRadius: '50%',
                    background: isActive
                      ? (isWebsitePage ? '#00F0FF' : 'var(--accent-orange)')
                      : 'var(--text-muted)',
                    boxShadow: isActive ? `0 0 8px ${isWebsitePage ? '#00F0FF' : 'var(--accent-orange)'}` : 'none',
                    transition: 'all 0.25s ease',
                  }}
                />
                <span className="client-pill-name">{client.name.split(' ')[0]}</span>
                <span className="client-pill-num" style={{ opacity: 0.6 }}>({i + 1}/4)</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Continuous Trust Strip */}
        <div
          style={{
            padding: '20px 28px',
            borderRadius: '16px',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <span
            style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-muted)',
            }}
          >
            Live Client Deployments:
          </span>

          {clientsData.map((client, idx) => (
            <a
              key={idx}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.88rem',
                fontWeight: 600,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-orange)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <span style={{ color: 'var(--accent-orange)' }}>✦</span>
              <span>{client.name}</span>
              <ExternalLink size={12} style={{ opacity: 0.6 }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
