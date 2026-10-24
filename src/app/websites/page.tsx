'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import ClientShowcase from '@/components/ClientShowcase';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Search, 
  Clock, 
  Layers, 
  HelpCircle, 
  Flame,
  Globe2,
  Star,
  Compass,
  MessageCircle,
  TrendingUp,
  Award,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';

export default function WebsitesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Growth');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobilePlanFilter, setMobilePlanFilter] = useState<'Starter' | 'Growth' | 'Custom' | 'all'>('Growth');
  const [expandedDeliverables, setExpandedDeliverables] = useState<Record<string, boolean>>({});
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsContactOpen(true);
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
      color: '#06B6D4', // Vibrant Cyan
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
      glowColor: 'rgba(6, 182, 212, 0.35)',
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
      color: '#EC4899', // Radiant Pink / Magenta
      gradient: 'linear-gradient(135deg, #F43F5E 0%, #EC4899 50%, #8B5CF6 100%)',
      glowColor: 'rgba(236, 72, 153, 0.45)',
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
      color: '#8B5CF6', // Electric Purple
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #06B6D4 100%)',
      glowColor: 'rgba(139, 92, 246, 0.35)',
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

  const whyCustomWins = [
    {
      icon: Zap,
      metric: '< 0.8s vs 4–6s WP Bloat',
      title: 'Sub-Second Loading Speed',
      desc: 'Speed is your #1 conversion driver. Every 1-second delay reduces conversions by 7%. We handcraft every byte for sub-second First Contentful Paint.',
      customAdvantage: 'Bespoke compiled Next.js edge code with zero bloat & 98+ Google Lighthouse score.',
      templateFlaw: 'Heavy jQuery, 35+ plugins & database queries causing 4–6s mobile lag.',
      color: '#06B6D4',
      bgGlow: 'rgba(6, 182, 212, 0.12)',
    },
    {
      icon: ShieldCheck,
      metric: '100% IP & Code Ownership',
      title: 'Zero Plugin Hacks & Full Control',
      desc: 'Never get held hostage by proprietary website builders or wake up to hacked WordPress plugins and broken themes after automated updates.',
      customAdvantage: 'Complete GitHub repository transfer, clean documentation & lifetime asset ownership.',
      templateFlaw: 'Captive vendor lock-in, recurring plugin licenses, and weekly security vulnerabilities.',
      color: '#EC4899',
      bgGlow: 'rgba(236, 72, 153, 0.12)',
    },
    {
      icon: Smartphone,
      metric: '75%+ Mobile Traffic Focused',
      title: 'Thumb-Engineered Mobile UX',
      desc: 'Indian business visitors browse predominantly on smartphones. We engineer ergonomic tap targets, smooth touch swipe, and zero layout shifts.',
      customAdvantage: 'Tailored responsive fluid typography, instant touch response & sticky action triggers.',
      templateFlaw: 'Rigid desktop-first themes clumsily shrunk down to mobile with microscopic buttons.',
      color: '#8B5CF6',
      bgGlow: 'rgba(139, 92, 246, 0.12)',
    },
    {
      icon: TrendingUp,
      metric: 'Save ₹25,000+/year Forever',
      title: 'Zero Monthly Builder Tax',
      desc: 'Eliminate mandatory builder subscriptions. Your modern web platform runs on world-class global edge CDN infrastructure with virtually zero hosting cost.',
      customAdvantage: 'Deploy to enterprise edge networks with global CDN, free SSL, and zero monthly builder tax.',
      templateFlaw: 'Forced ₹1,500 – ₹3,500/month platform fees plus escalating storage & bandwidth penalties.',
      color: '#10B981',
      bgGlow: 'rgba(16, 185, 129, 0.12)',
    },
  ];

  const processSteps = [
    {
      num: '01',
      phase: 'Sprint Phase 01',
      days: 'Days 1 – 2',
      title: 'Strategy & Wireframe Blueprint',
      desc: 'We map your customer journey, positioning, and sales copy architecture to craft a conversion-focused blueprint before writing any code.',
      color: '#06B6D4',
      deliverables: [
        'Figma UI/UX Layout Blueprint',
        'High-Converting Sales Copy Matrix',
        'Competitor Benchmarking Audit',
      ],
    },
    {
      num: '02',
      phase: 'Sprint Phase 02',
      days: 'Days 3 – 7',
      title: 'Handcrafted Visual Development',
      desc: 'We engineer your site with semantic HTML5, custom CSS styling, crisp modern typography, fluid responsive layouts, and buttery smooth micro-animations.',
      color: '#EC4899',
      deliverables: [
        'Next.js 16 Production Codebase',
        'Mobile-First Responsive Tuning',
        'Subtle Framer Micro-Interactions',
      ],
    },
    {
      num: '03',
      phase: 'Sprint Phase 03',
      days: 'Days 8 – 10',
      title: 'SEO, Forms & Analytics Hookup',
      desc: 'We integrate your lead generation channels, configure WhatsApp direct routing, connect Google Analytics 4, and optimize on-page schema.',
      color: '#8B5CF6',
      deliverables: [
        '1-Click WhatsApp Lead Routing',
        'Google Analytics 4 & Search Console',
        '95+ Lighthouse Speed Optimization',
      ],
    },
    {
      num: '04',
      phase: 'Sprint Phase 04',
      days: 'Days 11 – 14',
      title: 'Live Launch & Complete Handover',
      desc: 'We launch on global edge cloud infrastructure, attach your custom domain with free SSL, and hand over 100% of the repository and assets.',
      color: '#10B981',
      deliverables: [
        'Production Domain & Free SSL Setup',
        '100% Git Repository & IP Handover',
        '30-Day Post-Launch Warranty Support',
      ],
    },
  ];

  const faqs = [
    {
      q: 'Why choose a handcrafted custom website over WordPress or Wix?',
      a: 'WordPress and template builders rely on bloated themes and dozens of plugins that slow down page loading, look generic, and frequently break or get hacked. Our handcrafted code delivers sub-second load times, superior Google SEO rankings, and complete design freedom without expensive monthly builder fees.',
    },
    {
      q: 'Do I own the website and source code?',
      a: 'Yes, 100%. Once completed, the entire repository, code assets, design files, and hosting accounts belong entirely to you with zero vendor lock-in.',
    },
    {
      q: 'What about ongoing hosting costs?',
      a: 'Because our websites are engineered with optimized modern code, hosting on global cloud platforms like Vercel or Cloudflare is either free or under ₹1,500/month, saving you huge recurring costs compared to slow WordPress servers.',
    },
    {
      q: 'Can you redesign or migrate my existing website?',
      a: 'Absolutely. We regularly migrate businesses from slow WordPress, Wix, or Squarespace websites to modern high-speed code, preserving your existing URLs and SEO authority while multiplying your speed and conversion rate.',
    },
    {
      q: 'How do we get started?',
      a: 'Choose a plan above or schedule a quick discovery call. We will review your goals, confirm your delivery timeline, and kick off your sprint within 24 to 48 hours.',
    },
  ];

  return (
    <main style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* ── Bright Electric Background Glow Orbs (Micro-animated) ── */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* Neon Cyan Orb */}
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 25, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="websites-ambient-orb"
          style={{
            position: 'absolute',
            top: '-5%',
            left: '15%',
            width: '550px',
            height: '550px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.22) 0%, rgba(6, 182, 212, 0) 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Radiant Magenta Orb */}
        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 40, -25, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="websites-ambient-orb"
          style={{
            position: 'absolute',
            top: '20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.22) 0%, rgba(236, 72, 153, 0) 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Electric Violet Orb */}
        <motion.div
          animate={{
            x: [0, 35, -45, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="websites-ambient-orb"
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '650px',
            height: '650px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0) 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* ── Hero Section ── */}
      <section className="websites-hero-section">
        <div className="container-custom">
          <div style={{ maxWidth: '940px', margin: '0 auto', textAlign: 'center' }}>
            {/* Animated Bright Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}
            >
              <div className="websites-hero-badge">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ color: '#00F0FF', display: 'inline-block' }}
                >
                  ✨
                </motion.span>
                <span
                  className="websites-badge-gradient"
                  style={{
                    background: 'linear-gradient(90deg, #00F0FF 0%, #EC4899 50%, #A855F7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 800,
                  }}
                >
                  High-Converting Business Websites
                </span>
                <span>• Designed for Growth</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif websites-hero-title"
            >
              Websites That Don&apos;t Just Look Stunning —{' '}
              <span
                className="websites-title-gradient"
                style={{
                  background: 'linear-gradient(135deg, #00F0FF 0%, #EC4899 50%, #F59E0B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                They Win Customers
              </span>
              .
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="websites-hero-subtitle"
            >
              We craft bespoke, lightning-fast business websites for ambitious brands that refuse to settle for slow, generic templates. Engineered for maximum conversions, sub-second load times, and top Google search rank.
            </motion.p>

            {/* Bright Metric Badges (Micro-animations, 2x2 grid on mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="websites-metrics-grid"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="websites-metric-item"
                style={{
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  color: '#06B6D4',
                }}
              >
                <Zap size={16} />
                <span><strong>&lt; 0.8s</strong> Page Speed</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="websites-metric-item"
                style={{
                  background: 'rgba(236, 72, 153, 0.08)',
                  border: '1px solid rgba(236, 72, 153, 0.3)',
                  color: '#EC4899',
                }}
              >
                <Search size={16} />
                <span><strong>100%</strong> Google SEO Ready</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="websites-metric-item"
                style={{
                  background: 'rgba(139, 92, 246, 0.08)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  color: '#A855F7',
                }}
              >
                <ShieldCheck size={16} />
                <span><strong>0%</strong> Plugin Bloat</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="websites-metric-item"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#10B981',
                }}
              >
                <Clock size={16} />
                <span><strong>5–14 Days</strong> Fast Sprint</span>
              </motion.div>
            </motion.div>

            {/* Hero Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="websites-hero-ctas"
            >
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#plans"
                style={{
                  textDecoration: 'none',
                  padding: '16px 36px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, #00F0FF 0%, #EC4899 60%, #8B5CF6 100%)',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 30px rgba(236, 72, 153, 0.4)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>View Plans (Starts ₹12,999)</span>
                <ArrowRight size={18} />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setSelectedPlan('Growth');
                  setIsContactOpen(true);
                }}
                className="btn-secondary"
                style={{
                  padding: '16px 32px',
                  fontSize: '1rem',
                }}
              >
                <span>Schedule a Discovery Call</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3 Pricing Plans Section (All Starting From Prices) ── */}
      <section id="plans" style={{ padding: '80px 0 110px', position: 'relative', zIndex: 1 }}>
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }}
          >
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <span
                style={{
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: 'rgba(236, 72, 153, 0.12)',
                  border: '1px solid rgba(236, 72, 153, 0.35)',
                  color: '#EC4899',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Flame size={14} />
                <span>Transparent Investment in INR • All Starting-From Prices</span>
              </span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.2rem, 4.6vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '16px',
                color: 'var(--text-primary)',
              }}
            >
              Choose the Package That Matches{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00F0FF 0%, #EC4899 50%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Your Ambition
              </span>
              .
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
              No hidden fees, no ongoing template builder subscriptions. Pure bespoke craft delivered with milestone transparency and full code ownership.
            </p>
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
            {plans.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className={`plan-${p.name.toLowerCase()} websites-plan-card-inner`}
                style={{
                  background: p.isPopular
                    ? 'radial-gradient(circle at 50% 0%, rgba(236, 72, 153, 0.18) 0%, rgba(139, 92, 246, 0.12) 40%, var(--bg-card) 75%)'
                    : 'var(--bg-card)',
                  border: p.isPopular
                    ? '2px solid rgba(236, 72, 153, 0.8)'
                    : '1.5px solid var(--border-subtle)',
                  boxShadow: p.isPopular
                    ? '0 25px 60px -15px rgba(236, 72, 153, 0.35), 0 0 35px rgba(236, 72, 153, 0.2)'
                    : 'var(--card-shadow)',
                  backdropFilter: 'blur(20px)',
                  transition: 'border 0.3s ease, box-shadow 0.3s ease',
                }}
              >
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
                      background: 'linear-gradient(90deg, #F43F5E 0%, #EC4899 50%, #8B5CF6 100%)',
                      color: '#FFFFFF',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '6px 20px',
                      borderRadius: '999px',
                      boxShadow: '0 6px 20px rgba(236, 72, 153, 0.5)',
                      zIndex: 2,
                    }}
                  >
                    ★ Most Popular Choice
                  </motion.div>
                )}

                <div>
                  {/* Tier Title & Delivery Pill */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
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
                      }}
                    >
                      {p.timeframe}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      marginBottom: '26px',
                      minHeight: '68px',
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Price Box with "Starts from" */}
                  <div
                    style={{
                      padding: '22px 0',
                      borderTop: '1px solid var(--border-subtle)',
                      borderBottom: '1px solid var(--border-subtle)',
                      marginBottom: '28px',
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
                  <div style={{ marginBottom: '34px' }}>
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
                            <span>{feat}</span>
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

                {/* Card CTA Button (Micro-animated) */}
                <div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectPlan(p.name)}
                    style={{
                      width: '100%',
                      padding: '17px',
                      fontSize: '1rem',
                      fontWeight: 700,
                      borderRadius: 'var(--radius-sm)',
                      background: p.isPopular
                        ? 'linear-gradient(135deg, #F43F5E 0%, #EC4899 50%, #8B5CF6 100%)'
                        : 'var(--bg-glass)',
                      border: p.isPopular ? 'none' : `1.5px solid ${p.color}80`,
                      color: p.isPopular ? '#FFFFFF' : 'var(--text-primary)',
                      boxShadow: p.isPopular ? `0 10px 30px ${p.glowColor}` : 'none',
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
                  <p
                    style={{
                      textAlign: 'center',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      marginTop: '12px',
                    }}
                  >
                    Milestone-based billing • Kickoff within 24–48 hrs
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Live Showcase ── */}
      <ClientShowcase isWebsitePage={true} />

      {/* ── Feature Comparison Table ── */}
      <section style={{ padding: '60px 0 100px', position: 'relative', zIndex: 1 }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}
          >
            <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
              <span
                style={{
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: 'rgba(6, 182, 212, 0.12)',
                  border: '1px solid rgba(6, 182, 212, 0.35)',
                  color: '#06B6D4',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Layers size={14} />
                <span>Side-by-Side Comparison</span>
              </span>
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '14px',
                color: 'var(--text-primary)',
              }}
            >
              Detailed Capability{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00F0FF 0%, #EC4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Breakdown
              </span>
              .
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Compare deliverables across each package to select the ideal technical foundation for your business.
            </p>
          </motion.div>

          {/* Mobile Swipe Hint Badge */}
          <div className="websites-table-swipe-hint">
            <span>↔ Swipe horizontally to compare deliverables</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card websites-table-wrapper"
          >
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
                  <th style={{ padding: '20px 18px', fontSize: '0.96rem', color: '#06B6D4', fontWeight: 800 }}>
                    Starter (From ₹12,999)
                  </th>
                  <th
                    style={{
                      padding: '20px 18px',
                      fontSize: '0.98rem',
                      color: '#EC4899',
                      fontWeight: 800,
                      background: 'rgba(236, 72, 153, 0.08)',
                    }}
                  >
                    Growth (From ₹24,999) ★
                  </th>
                  <th style={{ padding: '20px 18px', fontSize: '0.96rem', color: '#8B5CF6', fontWeight: 800 }}>
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
                        background: 'rgba(236, 72, 153, 0.05)',
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
          </motion.div>
        </div>
      </section>

      {/* ── Why Custom Handcrafted Code Wins ── */}
      <section style={{ padding: '60px 0 100px', position: 'relative', zIndex: 1 }}>
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
                  background: 'rgba(139, 92, 246, 0.12)',
                  border: '1px solid rgba(139, 92, 246, 0.35)',
                  color: '#A855F7',
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
                  background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
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
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
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
                  <div>
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
                        background: 'rgba(0, 0, 0, 0.14)',
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

      {/* ── 4-Step Agile Sprint Timeline ── */}
      <section style={{ padding: '60px 0 100px', position: 'relative', zIndex: 1 }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}
          >
            <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
              <span
                style={{
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  color: '#10B981',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                }}
              >
                Predictable 4-Step Agile Delivery
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
              From Vision to Launch in{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Days, Not Months
              </span>
              .
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
              A focused, stress-free sprint process designed to respect your valuable time and deliver measurable ROI fast.
            </p>
          </motion.div>

          <div className="websites-process-grid">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="glass-card websites-process-card"
                style={{
                  padding: '28px 24px',
                  border: `1.5px solid ${step.color}35`,
                  borderRadius: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <div>
                  {/* Phase & Timeline Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      marginBottom: '14px',
                    }}
                  >
                    <div
                      className="websites-process-num-badge font-serif"
                      style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: step.color,
                        lineHeight: 1,
                      }}
                    >
                      {step.num}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 800,
                          padding: '4px 10px',
                          borderRadius: '999px',
                          background: `${step.color}15`,
                          border: `1px solid ${step.color}40`,
                          color: step.color,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                        }}
                      >
                        <Clock size={12} />
                        <span>{step.days}</span>
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: step.color,
                      marginBottom: '6px',
                    }}
                  >
                    {step.phase}
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                      lineHeight: 1.35,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '18px' }}>
                    {step.desc}
                  </p>

                  {/* Concrete Deliverable Milestone Chips */}
                  <div
                    style={{
                      paddingTop: '14px',
                      borderTop: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '7px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'var(--text-muted)',
                        marginBottom: '2px',
                      }}
                    >
                      Key Deliverables:
                    </span>
                    {step.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.78rem',
                          color: 'var(--text-primary)',
                          fontWeight: 600,
                        }}
                      >
                        <Check size={13} style={{ color: step.color, flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guaranteed On-Time Sprint Commitment Banner */}
          <div
            style={{
              marginTop: '36px',
              padding: '16px 24px',
              borderRadius: '16px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              textAlign: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#10B981', fontWeight: 800, fontSize: '0.86rem' }}>
              <Sparkles size={16} />
              <span>100% On-Time Sprint Commitment:</span>
            </div>
            <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              Strict milestones, daily WhatsApp sprint reports, and zero unexpected delays — launched on time, every time.
            </span>
          </div>
        </div>
      </section>

      {/* ── Website FAQs (Animated with AnimatePresence) ── */}
      <section style={{ padding: '60px 0 100px', position: 'relative', zIndex: 1 }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}
          >
            <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
              <span
                style={{
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: 'rgba(236, 72, 153, 0.12)',
                  border: '1px solid rgba(236, 72, 153, 0.35)',
                  color: '#EC4899',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <HelpCircle size={14} />
                <span>Frequently Asked Questions</span>
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
              Clear Answers on{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #EC4899 0%, #00F0FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Website Projects
              </span>
              .
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
              Everything you need to know about starting prices, revisions, source code ownership, and launch.
            </p>
          </motion.div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    border: isOpen
                      ? '1.5px solid #EC4899'
                      : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'border 0.3s ease',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: 'clamp(18px, 3.5vw, 24px) clamp(18px, 3.5vw, 28px)',
                      background: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '14px',
                      color: 'var(--text-primary)',
                    }}
                    aria-expanded={isOpen}
                  >
                    <span style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', fontWeight: 700, lineHeight: 1.4 }}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        color: isOpen ? '#EC4899' : 'var(--text-muted)',
                        flexShrink: 0,
                      }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          style={{
                            padding: '0 clamp(18px, 3.5vw, 28px) clamp(18px, 3.5vw, 24px)',
                            color: 'var(--text-secondary)',
                            fontSize: '0.94rem',
                            lineHeight: 1.65,
                          }}
                        >
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final Warm CTA ── */}
      <section style={{ padding: '60px 0 120px', position: 'relative', zIndex: 1 }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card websites-final-cta-card"
            style={{
              padding: 'clamp(36px, 6vw, 68px) clamp(20px, 4vw, 40px)',
              textAlign: 'center',
              border: '2px solid rgba(236, 72, 153, 0.4)',
              background: 'radial-gradient(circle at 50% 0%, rgba(236, 72, 153, 0.22) 0%, rgba(139, 92, 246, 0.14) 40%, var(--bg-card) 80%)',
              boxShadow: '0 25px 70px -15px rgba(236, 72, 153, 0.3)',
            }}
          >
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <span
                style={{
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: 'rgba(236, 72, 153, 0.15)',
                  border: '1px solid rgba(236, 72, 153, 0.4)',
                  color: '#EC4899',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Star size={14} style={{ color: '#F59E0B' }} />
                <span>Ready to Elevate Your Brand Online?</span>
              </span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.1rem, 4.6vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                marginBottom: '18px',
                color: 'var(--text-primary)',
              }}
            >
              Let&apos;s Build a Website You&apos;re{' '}
              <span
                className="websites-title-gradient"
                style={{
                  background: 'linear-gradient(135deg, #00F0FF 0%, #EC4899 50%, #F59E0B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Proud to Share
              </span>
              .
            </h2>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'clamp(1rem, 1.8vw, 1.14rem)',
                maxWidth: '680px',
                margin: '0 auto 34px',
                lineHeight: 1.65,
              }}
            >
              Whether you need the rapid <strong>Starter (starts ₹12,999)</strong>, the comprehensive <strong>Growth (starts ₹24,999)</strong>, or a bespoke custom solution, we are ready to sprint.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setSelectedPlan('Growth');
                  setIsContactOpen(true);
                }}
                style={{
                  padding: '16px clamp(24px, 4vw, 46px)',
                  fontSize: '1rem',
                  fontWeight: 800,
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, #00F0FF 0%, #EC4899 60%, #8B5CF6 100%)',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 30px rgba(236, 72, 153, 0.45)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span>Get Started with Growth Plan (From ₹24,999)</span>
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mobile Sticky Bottom Action Bar ── */}
      {showStickyBar && !isContactOpen && (
        <div className="websites-sticky-bottom-bar">
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '0.7rem', color: '#EC4899', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Handcrafted Web Sprint
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Starts ₹12,999 <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 500 }}>• 5-Day Launch</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            <a
              href="#plans"
              style={{
                padding: '8px 12px',
                fontSize: '0.8rem',
                fontWeight: 700,
                borderRadius: '999px',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              Plans
            </a>
            <button
              onClick={() => {
                setSelectedPlan('Growth');
                setIsContactOpen(true);
              }}
              style={{
                padding: '8px 16px',
                fontSize: '0.82rem',
                fontWeight: 800,
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #00F0FF 0%, #EC4899 100%)',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(236, 72, 153, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <span>Get Started</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Contact & Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        isTutoring={false}
        isWebsite={true}
        selectedPlan={selectedPlan}
      />
    </main>
  );
}
