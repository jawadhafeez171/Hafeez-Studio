'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  onOpenContact?: () => void;
  isTutoringPage?: boolean;
}

export default function Navbar({ onOpenContact, isTutoringPage = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.35s ease',
        padding: isScrolled ? '14px 0' : '22px 0',
        backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            className="font-serif"
            style={{
              fontSize: '1.45rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            Hafeez<span style={{ color: 'var(--accent-orange)', fontStyle: 'italic', fontWeight: 400 }}>Studio</span>
          </span>
          {!isTutoringPage && (
            <span
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                background: 'rgba(255, 107, 53, 0.12)',
                color: 'var(--accent-orange)',
                border: '1px solid rgba(255, 107, 53, 0.28)',
                padding: '2px 8px',
                borderRadius: '999px',
                fontWeight: 700,
              }}
            >
              AI
            </span>
          )}
        </Link>

        {/* Desktop Nav Items */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          {!isTutoringPage ? (
            <>
              <a
                href="#solutions"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                AI Solutions
              </a>
              <a
                href="#explorer"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                Find Solution
              </a>
              <a
                href="#roi-calculator"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                ROI Estimator
              </a>
              <a
                href="#philosophy"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                Philosophy
              </a>
              <Link
                href="/tutoring"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--accent-emerald)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  padding: '5px 14px',
                  borderRadius: '999px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.28)',
                  transition: 'all 0.2s',
                }}
              >
                <GraduationCap size={15} />
                Home Tutor
              </Link>
            </>
          ) : (
            <>
              <a
                href="#methodology"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}
              >
                Philosophy
              </a>
              <a
                href="#curriculum"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}
              >
                Curriculum
              </a>
              <a
                href="#locations"
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}
              >
                Bangalore Areas
              </a>
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--accent-orange)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  padding: '5px 14px',
                  borderRadius: '999px',
                  background: 'rgba(255, 107, 53, 0.1)',
                  border: '1px solid rgba(255, 107, 53, 0.28)',
                }}
              >
                <Sparkles size={14} />
                AI Studio
              </Link>
            </>
          )}
        </nav>

        {/* Right CTAs + Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <ThemeToggle />

          <button
            onClick={onOpenContact}
            className={isTutoringPage ? 'btn-emerald' : 'btn-primary'}
            style={{
              padding: '10px 22px',
              fontSize: '0.86rem',
            }}
          >
            <span>{isTutoringPage ? 'Book Free Trial' : "Let's Talk"}</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--nav-bg)',
            backdropFilter: 'blur(25px)',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            zIndex: 100,
          }}
        >
          {!isTutoringPage ? (
            <>
              <a
                href="#solutions"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--text-primary)', fontSize: '1.2rem', textDecoration: 'none', fontWeight: 600 }}
              >
                AI Solutions
              </a>
              <a
                href="#explorer"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--text-primary)', fontSize: '1.2rem', textDecoration: 'none', fontWeight: 600 }}
              >
                Find Your Solution
              </a>
              <a
                href="#roi-calculator"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--text-primary)', fontSize: '1.2rem', textDecoration: 'none', fontWeight: 600 }}
              >
                ROI Estimator
              </a>
              <a
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--text-primary)', fontSize: '1.2rem', textDecoration: 'none', fontWeight: 600 }}
              >
                Our Philosophy
              </a>
              <Link
                href="/tutoring"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--accent-emerald)', fontSize: '1.2rem', textDecoration: 'none', fontWeight: 600 }}
              >
                🎓 Hafeez Home Tutor (Bangalore)
              </Link>
            </>
          ) : (
            <>
              <a
                href="#methodology"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--text-primary)', fontSize: '1.2rem', textDecoration: 'none', fontWeight: 600 }}
              >
                Philosophy
              </a>
              <a
                href="#curriculum"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--text-primary)', fontSize: '1.2rem', textDecoration: 'none', fontWeight: 600 }}
              >
                Curriculum
              </a>
              <a
                href="#locations"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--text-primary)', fontSize: '1.2rem', textDecoration: 'none', fontWeight: 600 }}
              >
                Bangalore Areas
              </a>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: 'var(--accent-orange)', fontSize: '1.2rem', textDecoration: 'none', fontWeight: 600 }}
              >
                ✨ Hafeez Studio — AI Solutions
              </Link>
            </>
          )}

          <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact?.();
              }}
              className={isTutoringPage ? 'btn-emerald' : 'btn-primary'}
              style={{ width: '100%' }}
            >
              <span>{isTutoringPage ? 'Book Free Trial Class' : "Let's Talk"}</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
