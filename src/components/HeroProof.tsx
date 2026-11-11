'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const SPRING = { stiffness: 120, damping: 18, mass: 0.6 };

// Two live client phones that settle in on load, then lean gently toward the cursor in 3D
export default function HeroProof() {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, SPRING);
  const sy = useSpring(py, SPRING);

  // Front phone leans further than the back one, which gives the pair depth
  const frontRotY = useTransform(sx, [-1, 1], [-9, 9]);
  const frontRotX = useTransform(sy, [-1, 1], [7, -7]);
  const frontX = useTransform(sx, [-1, 1], [-10, 10]);
  const backRotY = useTransform(sx, [-1, 1], [-5, 5]);
  const backRotX = useTransform(sy, [-1, 1], [4, -4]);
  const backX = useTransform(sx, [-1, 1], [8, -8]);

  useEffect(() => {
    // Only on devices with a real pointer; touch screens keep the phones still
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const onMove = (e: PointerEvent) => {
      px.set((e.clientX / window.innerWidth) * 2 - 1);
      py.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [px, py]);

  return (
    <figure className="hero-proof" aria-label="Two live client websites">
      <motion.a
        href="https://constructionbuddy.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="phone-frame hero-phone hero-phone--back"
        aria-label="Open Construction Buddy live website in a new tab"
        initial={{ y: 48, rotate: 0 }}
        animate={{ y: 0, rotate: 4 }}
        transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.25 }}
        whileHover={{ y: -8 }}
        style={{ rotateX: backRotX, rotateY: backRotY, x: backX, transformPerspective: 900 }}
      >
        <div className="phone-frame-screen">
          <Image
            src="/clients/shots/constructionbuddy.jpg"
            alt="Construction Buddy home screen on a phone"
            fill
            sizes="220px"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>
      </motion.a>
      <motion.a
        href="https://www.jointxperts.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="phone-frame hero-phone hero-phone--front"
        aria-label="Open JointXperts live website in a new tab"
        initial={{ y: 36, rotate: 0 }}
        animate={{ y: 0, rotate: -3 }}
        transition={{ type: 'spring', stiffness: 70, damping: 15, delay: 0.1 }}
        whileHover={{ y: -8 }}
        style={{ rotateX: frontRotX, rotateY: frontRotY, x: frontX, transformPerspective: 900 }}
      >
        <div className="phone-frame-screen">
          <Image
            src="/clients/shots/jointxperts.jpg"
            alt="JointXperts orthopaedic clinic website on a phone, with Book Appointment, WhatsApp and Call buttons"
            fill
            priority
            sizes="250px"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>
      </motion.a>
      <figcaption className="hero-proof-caption">
        <a href="#work" className="text-link">
          <span>Both live today. See all five</span>
          <ArrowDown size={15} aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}
