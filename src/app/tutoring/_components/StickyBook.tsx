'use client';

import React, { useEffect, useState } from 'react';
import { BookButton } from './contact';

// On phones, keeps the booking one tap away once the hero's button has scrolled off,
// and steps aside while the closing section's own button is on screen
export default function StickyBook() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('t-hero-actions');
    const answer = document.getElementById('answer');
    if (!hero || !answer) return;
    const seen = new Map<Element, boolean>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => seen.set(e.target, e.isIntersecting));
      const heroBelow = hero.getBoundingClientRect().bottom < 0;
      setShow(heroBelow && !seen.get(hero) && !seen.get(answer));
    });
    io.observe(hero);
    io.observe(answer);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`t-sticky${show ? ' is-on' : ''}`} aria-hidden={!show} inert={!show}>
      <span className="t-sticky-price">
        <span className="num">₹600</span> an hour
      </span>
      <BookButton className="t-book--small" />
    </div>
  );
}
