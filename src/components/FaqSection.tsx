'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle, Globe2, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'website' | 'ai'>('all');

  const faqs = [
    // Website FAQs
    {
      category: 'website',
      q: 'Why choose a handcrafted custom website over WordPress or Wix?',
      a: 'WordPress and template builders rely on bloated themes and dozens of plugins that slow down page loading, look generic, and frequently break or get hacked. Our handcrafted code delivers sub-second load times (<0.8s), superior Google SEO rankings, and complete design freedom without expensive monthly builder fees.',
    },
    {
      category: 'website',
      q: 'Do I own the website and source code?',
      a: 'Yes, 100%. Once completed, the entire repository, code assets, design files, and hosting accounts belong entirely to you with zero vendor lock-in.',
    },
    {
      category: 'website',
      q: 'What about ongoing hosting costs?',
      a: 'Because our websites are engineered with optimized modern Next.js code, hosting on global cloud platforms like Vercel or Cloudflare is either free or under ₹1,500/month, saving you ₹25,000+ per year compared to slow WordPress servers and builder licenses.',
    },
    {
      category: 'website',
      q: 'Can you redesign or migrate my existing website?',
      a: 'Absolutely. We regularly migrate businesses from slow WordPress, Wix, or Squarespace websites to modern high-speed code, preserving your existing URLs and SEO authority while multiplying your speed and conversion rate.',
    },
    {
      category: 'website',
      q: 'What is included in the post-launch support and warranty?',
      a: 'Every package includes 14 to 60 days of complimentary technical warranty (depending on your plan), covering bug fixes, domain maintenance, and performance monitoring.',
    },

    // AI & Automation FAQs
    {
      category: 'ai',
      q: 'Is my business too small or traditional for AI automation?',
      a: 'Not at all. In fact, small and mid-sized businesses often feel the greatest relief because every hour saved directly frees up core team members. Whether you run an agency, real estate consultancy, clinic, or local service, simple automations make a profound difference.',
    },
    {
      category: 'ai',
      q: 'Will this be complicated for my team to learn and manage?',
      a: 'We design our systems to fit into the tools your team already uses every day — such as WhatsApp, Google Sheets, Slack, or Email. There is zero complicated software to learn or install.',
    },
    {
      category: 'ai',
      q: 'How secure is our company and customer data?',
      a: 'We take privacy extremely seriously. We use enterprise-grade private API pipelines where your documents, client details, and business conversations are never used to train public AI models.',
    },
    {
      category: 'ai',
      q: 'How long does it take from our first chat to a working system?',
      a: 'Most custom websites and AI workflow automations are fully built, tested, and handed over within 10 to 14 days during our focused 2-Week Sprint.',
    },
    {
      category: 'ai',
      q: 'Can a website and AI system be integrated together?',
      a: 'Yes! That is our signature strength. We can equip your Next.js website with a 24/7 AI sales assistant that answers visitor questions, quotes pricing, and automatically routes qualified leads into your WhatsApp or CRM.',
    },
  ];

  const filteredFaqs = categoryFilter === 'all' 
    ? faqs 
    : faqs.filter(item => item.category === categoryFilter);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
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
            Everything you need to know about our websites, AI automations, pricing, and launch timelines.
          </p>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'inline-flex',
              padding: '6px',
              borderRadius: '999px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              marginTop: '32px',
              gap: '6px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <button
              type="button"
              onClick={() => { setCategoryFilter('all'); setOpenIndex(0); }}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: 'none',
                background: categoryFilter === 'all' ? 'var(--accent-emerald)' : 'transparent',
                color: categoryFilter === 'all' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              All Questions
            </button>
            <button
              type="button"
              onClick={() => { setCategoryFilter('website'); setOpenIndex(0); }}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: 'none',
                background: categoryFilter === 'website' ? '#0D9488' : 'transparent',
                color: categoryFilter === 'website' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
              }}
            >
              <Globe2 size={14} />
              <span>Websites &amp; Pricing</span>
            </button>
            <button
              type="button"
              onClick={() => { setCategoryFilter('ai'); setOpenIndex(0); }}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: 'none',
                background: categoryFilter === 'ai' ? '#059669' : 'transparent',
                color: categoryFilter === 'ai' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
              }}
            >
              <Cpu size={14} />
              <span>AI &amp; Automation</span>
            </button>
          </div>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  borderRadius: 'var(--radius-md)',
                  border: isOpen ? '1px solid var(--accent-orange)' : '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                  transition: 'border 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: isOpen ? '0 10px 25px -5px rgba(234, 88, 12, 0.15)' : 'none',
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '22px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    gap: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)',
                      lineHeight: 1.45,
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--badge-orange-bg)' : 'var(--bg-glass)',
                      color: isOpen ? 'var(--accent-orange)' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'transform 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div
                        style={{
                          padding: '0 28px 24px',
                          color: 'var(--text-secondary)',
                          fontSize: '0.96rem',
                          lineHeight: 1.7,
                          borderTop: '1px solid var(--border-subtle)',
                          paddingTop: '18px',
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
  );
}
