'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowUpRight, 
  GraduationCap,
  Globe2,
  Cpu,
  Calculator,
  Compass,
  Layers,
  ChevronRight,
  BookOpen,
  MapPin,
  Flame
} from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const studioNavItems = [
    { href: '/#pricing', label: 'Web Packages', icon: Globe2 },
    { href: '/#ai-solutions', label: 'AI Solutions', icon: Cpu },
    { href: '/#why-custom', label: 'Why Custom', icon: Layers },
    { href: '/#roi-calculator', label: 'ROI Estimator', icon: Calculator },
    { href: '/#work', label: 'Client Work', icon: Sparkles },
    { href: '/#faq', label: 'FAQ', icon: Compass },
  ];

  const tutoringNavItems = [
    { href: '#methodology', label: 'Teaching Philosophy', icon: Sparkles },
    { href: '#curriculum', label: 'Curriculum & Boards', icon: BookOpen },
    { href: '#locations', label: 'Bangalore Areas', icon: MapPin },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.35s ease',
        padding: isScrolled ? '12px 0' : '20px 0',
        backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled 
          ? '1px solid var(--border-subtle)' 
          : '1px solid transparent',
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link
          href={isTutoringPage ? '/tutoring' : '/'}
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
            {isTutoringPage ? (
              <>
                Hafeez<span style={{ color: 'var(--accent-emerald)', fontStyle: 'italic', fontWeight: 500 }}> Tutor</span>
              </>
            ) : (
              <>
                Hafeez<span style={{ color: 'var(--accent-emerald)', fontStyle: 'italic', fontWeight: 500 }}>Studio</span>
              </>
            )}
          </span>
          <span
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              background: 'rgba(5, 150, 105, 0.09)',
              color: 'var(--accent-emerald)',
              border: '1px solid rgba(5, 150, 105, 0.28)',
              padding: '2px 8px',
              borderRadius: '999px',
              fontWeight: 700,
            }}
          >
            {isTutoringPage ? 'Bangalore' : 'Web & AI'}
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '22px',
          }}
          className="desktop-nav"
        >
          {!isTutoringPage ? (
            <>
              {/* Highlighted Web Packages Link */}
              <Link
                href="/#pricing"
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  background: 'rgba(5, 150, 105, 0.08)',
                  border: '1px solid rgba(5, 150, 105, 0.25)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>Web Packages</span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    background: 'rgba(5, 150, 105, 0.15)',
                    color: '#059669',
                    border: '1px solid rgba(5, 150, 105, 0.3)',
                    padding: '1px 6px',
                    borderRadius: '999px',
                  }}
                >
                  ₹12,999+
                </span>
              </Link>

              <Link
                href="/#ai-solutions"
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
              </Link>
              <Link
                href="/#why-custom"
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
                Why Custom
              </Link>
              <Link
                href="/#roi-calculator"
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
              </Link>
              <Link
                href="/#work"
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
                Client Work
              </Link>
              <Link
                href="/#faq"
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
                FAQ
              </Link>
              <Link
                href="/tutoring"
                style={{
                  color: 'var(--accent-emerald)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'rgba(5, 150, 105, 0.08)',
                  border: '1px solid rgba(5, 150, 105, 0.22)',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(5, 150, 105, 0.16)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(5, 150, 105, 0.08)')}
              >
                <GraduationCap size={13} />
                <span>Home Tutor</span>
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
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                Teaching Philosophy
              </a>
              <a
                href="#curriculum"
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
                Curriculum
              </a>
              <a
                href="#locations"
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
                Bangalore Areas
              </a>
            </>
          )}
        </nav>

        {/* Right Controls: Theme Toggle + Themed CTA + Hamburger Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ThemeToggle />

          <button
            onClick={onOpenContact}
            className="btn-primary nav-header-cta"
            style={{
              padding: '9px 18px',
              fontSize: '0.86rem',
            }}
          >
            <span>{isTutoringPage ? 'Book Free Trial' : "Let's Talk"}</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Crisp, Rounded Glass Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: mobileMenuOpen 
                ? 'rgba(5, 150, 105, 0.16)' 
                : 'var(--bg-glass)',
              border: mobileMenuOpen
                ? '1px solid rgba(5, 150, 105, 0.45)' 
                : '1px solid var(--border-subtle)',
              color: mobileMenuOpen
                ? 'var(--accent-emerald)' 
                : 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: mobileMenuOpen 
                ? '0 0 15px rgba(5, 150, 105, 0.2)' 
                : 'none',
              padding: 0,
            }}
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={2.4} /> : <Menu size={20} strokeWidth={2.2} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Dropdown (Floating Glass Card) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dim backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(6, 42, 30, 0.35)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                zIndex: 98,
              }}
            />

            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="nav-mobile-menu-card"
              style={{
                position: 'fixed',
                top: isScrolled ? '62px' : '72px',
                left: '12px',
                right: '12px',
                maxWidth: '420px',
                margin: '0 auto',
                background: 'var(--bg-card)',
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
                border: '1.5px solid var(--border-subtle)',
                borderRadius: '18px',
                boxShadow: '0 20px 45px -10px rgba(6, 42, 30, 0.15)',
                padding: '12px',
                zIndex: 99,
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                maxHeight: 'calc(100vh - 80px)',
                overflowY: 'auto',
              }}
            >
              {!isTutoringPage ? (
                <>
                  {/* Featured: Web Packages Card */}
                  <Link
                    href="/#pricing"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 12px',
                      borderRadius: '12px',
                      background: 'rgba(5, 150, 105, 0.08)',
                      border: '1px solid rgba(5, 150, 105, 0.25)',
                      marginBottom: '4px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(5, 150, 105, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#059669',
                        }}
                      >
                        <Globe2 size={16} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                          Web Packages
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        color: '#059669',
                        background: 'rgba(5, 150, 105, 0.15)',
                        border: '1px solid rgba(5, 150, 105, 0.3)',
                        padding: '3px 8px',
                        borderRadius: '999px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      From ₹12,999
                    </span>
                  </Link>

                  {/* Standard Menu Items */}
                  {studioNavItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '9px 12px',
                          borderRadius: '10px',
                          color: 'var(--text-secondary)',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          transition: 'background 0.15s, color 0.15s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--bg-surface)';
                          e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = 'var(--text-secondary)';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <Icon size={16} style={{ color: 'var(--text-muted)' }} />
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight size={14} style={{ opacity: 0.35 }} />
                      </Link>
                    );
                  })}

                  <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '4px 0' }} />

                  {/* Cross-Link: Hafeez Home Tutor */}
                  <Link
                    href="/tutoring"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '9px 12px',
                      borderRadius: '10px',
                      background: 'rgba(5, 150, 105, 0.06)',
                      border: '1px solid rgba(5, 150, 105, 0.2)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                      <GraduationCap size={16} style={{ color: 'var(--accent-emerald)' }} />
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                        Hafeez Home Tutor
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: 'var(--accent-emerald)',
                        background: 'rgba(5, 150, 105, 0.12)',
                        padding: '2px 8px',
                        borderRadius: '999px',
                      }}
                    >
                      Bangalore K-12
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  {tutoringNavItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '9px 12px',
                          borderRadius: '10px',
                          color: 'var(--text-secondary)',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          transition: 'background 0.15s, color 0.15s',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <Icon size={16} style={{ color: 'var(--accent-emerald)' }} />
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight size={14} style={{ opacity: 0.35 }} />
                      </a>
                    );
                  })}

                  <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '4px 0' }} />

                  {/* Cross-Link: Hafeez Studio */}
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '9px 12px',
                      borderRadius: '10px',
                      background: 'rgba(5, 150, 105, 0.08)',
                      border: '1px solid rgba(5, 150, 105, 0.22)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                      <Sparkles size={16} style={{ color: 'var(--accent-emerald)' }} />
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                        Hafeez Studio (Web &amp; AI)
                      </span>
                    </div>
                    <ChevronRight size={14} style={{ opacity: 0.5, color: 'var(--accent-emerald)' }} />
                  </Link>
                </>
              )}

              {/* Bottom Action Button inside Menu */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact?.();
                }}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '11px 16px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  borderRadius: '12px',
                  marginTop: '6px',
                }}
              >
                <span>{isTutoringPage ? 'Book Free Trial Class' : "Schedule Discovery Call"}</span>
                <ArrowUpRight size={15} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .nav-header-cta {
          display: inline-flex;
        }
        @media (max-width: 620px) {
          .nav-header-cta {
            display: none !important;
          }
        }
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
