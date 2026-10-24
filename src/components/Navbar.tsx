'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  MapPin
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  onOpenContact?: () => void;
  isTutoringPage?: boolean;
}

export default function Navbar({ onOpenContact, isTutoringPage = false }: NavbarProps) {
  const pathname = usePathname();
  const isWebsitePage = pathname === '/websites';
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
    { href: '/#solutions', label: 'AI Solutions', icon: Cpu },
    { href: '/#explorer', label: 'Find Solution', icon: Compass },
    { href: '/#roi-calculator', label: 'ROI Estimator', icon: Calculator },
    { href: '/#philosophy', label: 'Philosophy & Process', icon: Layers },
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
          ? (isWebsitePage ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid var(--border-subtle)') 
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
                Hafeez<span style={{ color: 'var(--accent-emerald)', fontStyle: 'italic', fontWeight: 400 }}> Tutor</span>
              </>
            ) : isWebsitePage ? (
              <>
                Hafeez<span style={{ 
                  background: 'linear-gradient(135deg, #00F0FF 0%, #EC4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontStyle: 'italic', 
                  fontWeight: 600 
                }}>Studio</span>
              </>
            ) : (
              <>
                Hafeez<span style={{ color: 'var(--accent-orange)', fontStyle: 'italic', fontWeight: 400 }}>Studio</span>
              </>
            )}
          </span>
          <span
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              background: isTutoringPage 
                ? 'rgba(16, 185, 129, 0.12)' 
                : isWebsitePage 
                  ? 'rgba(6, 182, 212, 0.15)' 
                  : 'rgba(255, 107, 53, 0.12)',
              color: isTutoringPage 
                ? 'var(--accent-emerald)' 
                : isWebsitePage 
                  ? '#06B6D4' 
                  : 'var(--accent-orange)',
              border: isTutoringPage 
                ? '1px solid rgba(16, 185, 129, 0.28)' 
                : isWebsitePage 
                  ? '1px solid rgba(6, 182, 212, 0.35)' 
                  : '1px solid rgba(255, 107, 53, 0.28)',
              padding: '2px 8px',
              borderRadius: '999px',
              fontWeight: 700,
            }}
          >
            {isTutoringPage ? 'Bangalore' : isWebsitePage ? 'Websites' : 'AI'}
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px',
          }}
          className="desktop-nav"
        >
          {!isTutoringPage ? (
            <>
              {/* Highlighted Active Websites Link */}
              <Link
                href="/websites"
                style={{
                  color: isWebsitePage ? 'var(--text-primary)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isWebsitePage ? 700 : 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: isWebsitePage ? '5px 12px' : '0',
                  borderRadius: '999px',
                  background: isWebsitePage ? 'linear-gradient(90deg, rgba(6, 182, 212, 0.14) 0%, rgba(236, 72, 153, 0.14) 100%)' : 'transparent',
                  border: isWebsitePage ? '1px solid rgba(236, 72, 153, 0.35)' : '1px solid transparent',
                  boxShadow: isWebsitePage ? '0 0 16px rgba(236, 72, 153, 0.15)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>Websites</span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    background: isWebsitePage ? 'rgba(236, 72, 153, 0.2)' : 'rgba(255, 107, 53, 0.15)',
                    color: isWebsitePage ? '#EC4899' : 'var(--accent-orange)',
                    border: isWebsitePage ? '1px solid rgba(236, 72, 153, 0.35)' : '1px solid rgba(255, 107, 53, 0.3)',
                    padding: '1px 6px',
                    borderRadius: '999px',
                  }}
                >
                  3 Plans
                </span>
              </Link>

              <Link
                href="/#solutions"
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
                href="/#explorer"
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
                href="/#philosophy"
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
              </Link>
              <Link
                href="/#process"
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
                Process
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
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.22)',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(16, 185, 129, 0.16)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(16, 185, 129, 0.08)')}
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

        {/* Right Controls: Theme Toggle + Themed CTA + Crisp Hamburger Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ThemeToggle />

          <button
            onClick={onOpenContact}
            className={`${isTutoringPage ? 'btn-emerald' : 'btn-primary'} nav-header-cta`}
            style={{
              padding: '9px 18px',
              fontSize: '0.86rem',
              background: isWebsitePage 
                ? 'linear-gradient(135deg, #00F0FF 0%, #EC4899 60%, #8B5CF6 100%)'
                : undefined,
              boxShadow: isWebsitePage 
                ? '0 6px 20px rgba(236, 72, 153, 0.4)' 
                : undefined,
            }}
          >
            <span>{isTutoringPage ? 'Book Free Trial' : isWebsitePage ? 'Choose Plan' : "Let's Talk"}</span>
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
                ? (isTutoringPage 
                    ? 'rgba(16, 185, 129, 0.16)' 
                    : isWebsitePage 
                      ? 'rgba(236, 72, 153, 0.16)' 
                      : 'rgba(255, 107, 53, 0.16)')
                : 'var(--bg-glass)',
              border: mobileMenuOpen
                ? (isTutoringPage 
                    ? '1px solid rgba(16, 185, 129, 0.45)' 
                    : isWebsitePage 
                      ? '1px solid rgba(236, 72, 153, 0.45)' 
                      : '1px solid rgba(255, 107, 53, 0.45)')
                : '1px solid var(--border-subtle)',
              color: mobileMenuOpen
                ? (isTutoringPage 
                    ? 'var(--accent-emerald)' 
                    : isWebsitePage 
                      ? '#EC4899' 
                      : 'var(--accent-orange)')
                : 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: mobileMenuOpen 
                ? (isWebsitePage 
                    ? '0 0 15px rgba(236, 72, 153, 0.25)' 
                    : '0 0 15px rgba(255, 107, 53, 0.2)') 
                : 'none',
              padding: 0,
            }}
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={2.4} /> : <Menu size={20} strokeWidth={2.2} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Dropdown (Tight, Crisp Floating Glass Card) ── */}
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
                background: 'rgba(0, 0, 0, 0.55)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                zIndex: 98,
              }}
            />

            {/* Tight & Crisp Floating Menu Card */}
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
                border: '1px solid var(--border-subtle)',
                borderRadius: '18px',
                boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(236, 72, 153, 0.12)',
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
                  {/* Featured: Websites & Pricing Card */}
                  <Link
                    href="/websites"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 12px',
                      borderRadius: '12px',
                      background: 'linear-gradient(90deg, rgba(6, 182, 212, 0.12) 0%, rgba(236, 72, 153, 0.12) 100%)',
                      border: '1px solid rgba(236, 72, 153, 0.35)',
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
                          background: 'rgba(236, 72, 153, 0.18)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#EC4899',
                        }}
                      >
                        <Globe2 size={16} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                          Websites &amp; Pricing
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        color: '#EC4899',
                        background: 'rgba(236, 72, 153, 0.15)',
                        border: '1px solid rgba(236, 72, 153, 0.3)',
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
                          e.currentTarget.style.background = 'var(--bg-glass)';
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
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.22)',
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
                        background: 'rgba(16, 185, 129, 0.15)',
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
                      background: 'rgba(255, 107, 53, 0.08)',
                      border: '1px solid rgba(255, 107, 53, 0.22)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                      <Sparkles size={16} style={{ color: 'var(--accent-orange)' }} />
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-orange)' }}>
                        Hafeez Studio (AI Solutions)
                      </span>
                    </div>
                    <ChevronRight size={14} style={{ opacity: 0.5, color: 'var(--accent-orange)' }} />
                  </Link>
                </>
              )}

              {/* Bottom Action Button inside Menu */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact?.();
                }}
                className={isTutoringPage ? 'btn-emerald' : 'btn-primary'}
                style={{
                  width: '100%',
                  padding: '11px 16px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  borderRadius: '12px',
                  marginTop: '6px',
                  background: isWebsitePage
                    ? 'linear-gradient(135deg, #00F0FF 0%, #EC4899 60%, #8B5CF6 100%)'
                    : undefined,
                  boxShadow: isTutoringPage
                    ? '0 6px 20px rgba(16, 185, 129, 0.35)'
                    : isWebsitePage 
                      ? '0 6px 20px rgba(236, 72, 153, 0.4)' 
                      : '0 6px 20px rgba(255, 107, 53, 0.35)',
                }}
              >
                <span>{isTutoringPage ? 'Book Free Trial Class' : isWebsitePage ? "Get Started — Choose Plan" : "Schedule a Discovery Call"}</span>
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
