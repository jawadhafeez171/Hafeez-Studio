'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface WorkShotProps {
  href: string;
  name: string;
  src: string;
  alt: string;
  index: number;
}

// A client phone that springs up and leans slightly on hover, alternating direction along the row
export default function WorkShot({ href, name, src, alt, index }: WorkShotProps) {
  const lean = index % 2 === 0 ? -1.5 : 1.5;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="phone-frame work-shot"
      aria-label={`Open ${name} live website in a new tab`}
      whileHover={{ y: -10, rotate: lean }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="phone-frame-screen">
        <Image
          src={src}
          alt={alt}
          fill
          priority={index < 2}
          loading="eager"
          sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 72vw"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>
    </motion.a>
  );
}
