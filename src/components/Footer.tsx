'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenContact?: () => void;
  isTutoring?: boolean;
}

export default function Footer({ onOpenContact, isTutoring = false }: FooterProps) {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--footer-bg)',
        padding: '80px 0 40px',
        position: 'relative',
        transition: 'background 0.4s ease',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '60px',
          }}
        >
          {/* Column 1: Brand */}
          <div>
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '16px',
              }}
            >
              <span
                className="font-serif"
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                }}
              >
                Hafeez<span style={{ color: 'var(--accent-orange)', fontStyle: 'italic', fontWeight: 400 }}>Studio</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '320px' }}>
              Architecting bespoke AI agents, intelligent automated pipelines, and modern digital applications with care.
            </p>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              AI Solutions
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="#solutions" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="#solutions" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Custom RAG Knowledge Bases
                </a>
              </li>
              <li>
                <a href="#solutions" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Next.js Web Applications
                </a>
              </li>
              <li>
                <a href="#roi-calculator" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Interactive ROI Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Divisions */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              Divisions
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link
                  href="/tutoring"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--accent-emerald)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}
                >
                  <GraduationCap size={15} />
                  Hafeez Home Tutor (Bangalore)
                </Link>
              </li>
              <li>
                <a
                  href="https://hafeezstudio.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}
                >
                  HafeezStudio Cloud
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & CTA */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              Get in Touch
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.55 }}>
              Ready to automate manual workflows or build a custom AI solution?
            </p>
            <button
              onClick={onOpenContact}
              className={isTutoring ? 'btn-emerald' : 'btn-primary'}
              style={{ padding: '12px 24px', fontSize: '0.85rem' }}
            >
              <span>{isTutoring ? 'Book Free Trial Class' : 'Start a Conversation'}</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        {/* Bottom copyright & Socials */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Hafeez Studio. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)', display: 'inline-flex' }}
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)', display: 'inline-flex' }}
              aria-label="Twitter / X"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)', display: 'inline-flex' }}
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
