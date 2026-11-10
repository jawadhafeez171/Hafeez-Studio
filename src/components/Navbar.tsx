'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useContact } from '@/context/ContactContext';

interface NavbarProps {
  onOpenContact?: () => void;
  isTutoringPage?: boolean;
}

const studioNavItems = [
  { href: '/#work', label: 'Work' },
  { href: '/#pricing', label: 'Prices' },
  { href: '/#ai-solutions', label: 'AI & automation' },
  { href: '/#process', label: 'Process' },
  { href: '/#faq', label: 'FAQ' },
];

const tutoringNavItems = [
  { href: '#methodology', label: 'Teaching Philosophy' },
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#locations', label: 'Bangalore Areas' },
];

export default function Navbar({ onOpenContact: onOpenContactProp, isTutoringPage = false }: NavbarProps) {
  const { openContact } = useContact();
  const onOpenContact = onOpenContactProp ?? (() => openContact());
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const items = isTutoringPage ? tutoringNavItems : studioNavItems;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link for the section currently in view
  const [activeHref, setActiveHref] = useState('');
  useEffect(() => {
    const sections = items
      .map((item) => ({ href: item.href, el: document.getElementById(item.href.split('#')[1]) }))
      .filter((s): s is { href: string; el: HTMLElement } => Boolean(s.el));
    if (!sections.length) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      // The active section is the last one whose top has passed 40% of the screen and whose bottom hasn't
      const line = window.innerHeight * 0.4;
      const current = sections.filter((s) => s.el.getBoundingClientRect().top <= line).pop();
      const stillIn = current && current.el.getBoundingClientRect().bottom > line;
      setActiveHref(stillIn ? current.href : '');
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  // Lock page scroll and listen for Escape while the phone menu is open
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <header className={`site-nav${isScrolled || menuOpen ? ' is-scrolled' : ''}`}>
      <div className="container-custom site-nav-inner">
        <Link href={isTutoringPage ? '/tutoring' : '/'} className="wordmark" onClick={() => setMenuOpen(false)}>
          <span className="wordmark-name">
            Hafeez <em>{isTutoringPage ? 'Tutor' : 'Studio'}</em>
          </span>
          <span className="wordmark-tag">{isTutoringPage ? 'Bangalore' : 'Web & AI'}</span>
        </Link>

        <nav aria-label="Main">
          <ul className="nav-links">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link"
                  aria-current={activeHref === item.href ? 'location' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-controls">
          <ThemeToggle />
          <button
            type="button"
            onClick={onOpenContact}
            className={`btn-primary nav-cta${isTutoringPage ? '' : ' nav-cta--studio'}`}
          >
            {isTutoringPage ? 'Book Free Trial' : 'Book a call'}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="icon-btn nav-menu-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div className="nav-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
          <div id="site-menu" className="nav-sheet">
            <ul>
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    <span>{item.label}</span>
                    <ArrowRight size={18} aria-hidden="true" style={{ color: 'var(--text-muted)' }} />
                  </Link>
                </li>
              ))}
              {isTutoringPage && (
                <li>
                  <Link href="/" onClick={() => setMenuOpen(false)}>
                    <span>Hafeez Studio (Web &amp; AI)</span>
                    <ArrowRight size={18} aria-hidden="true" style={{ color: 'var(--text-muted)' }} />
                  </Link>
                </li>
              )}
            </ul>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setMenuOpen(false);
                onOpenContact();
              }}
            >
              {isTutoringPage ? 'Book Free Trial Class' : 'Book a discovery call'}
            </button>
          </div>
        </>
      )}
    </header>
  );
}
