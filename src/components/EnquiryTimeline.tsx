'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface Step {
  time: string;
  text: string;
}

const TYPING_MS = 520;
const GAP_MS = 380;

const shown = { opacity: 1, y: 0, filter: 'blur(0px)' };
const hidden = { opacity: 0, y: 10, filter: 'blur(4px)' };

// The 10pm clinic enquiry plays out like a conversation: a typing indicator, then each step arrives in turn.
// Every step is visible in the server HTML; the sequence only arms itself when the card starts below the fold.
export default function EnquiryTimeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [revealed, setRevealed] = useState(steps.length);
  const [typingAt, setTypingAt] = useState<number | null>(null);
  const armed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    if (el.getBoundingClientRect().top > window.innerHeight * 0.85) {
      armed.current = true;
      setRevealed(0);
    }
  }, [reduce]);

  useEffect(() => {
    if (!inView || !armed.current) return;
    armed.current = false;
    const timers: number[] = [];
    let t = 250;
    steps.forEach((_, i) => {
      timers.push(window.setTimeout(() => setTypingAt(i), t));
      t += TYPING_MS;
      timers.push(
        window.setTimeout(() => {
          setTypingAt(null);
          setRevealed(i + 1);
        }, t)
      );
      t += GAP_MS;
    });
    return () => timers.forEach(clearTimeout);
  }, [inView, steps]);

  const progress = steps.length ? revealed / steps.length : 1;

  return (
    <div className="ai-timeline-wrap">
    <motion.span
      className="ai-timeline-rail"
      aria-hidden="true"
      initial={false}
      animate={{ scaleY: progress }}
      transition={{ type: 'spring', stiffness: 90, damping: 20 }}
    />
    <ol ref={ref} className="ai-timeline">
      {steps.map((step, i) => {
        const isShown = i < revealed;
        return (
          <li key={i}>
            <motion.span
              className="ai-time"
              initial={false}
              animate={isShown ? shown : hidden}
              transition={{ duration: isShown ? 0.45 : 0, ease: [0.16, 1, 0.3, 1] }}
            >
              {step.time}
            </motion.span>
            <motion.p
              initial={false}
              animate={isShown ? shown : hidden}
              transition={{ duration: isShown ? 0.55 : 0, delay: isShown ? 0.06 : 0, ease: [0.16, 1, 0.3, 1] }}
            >
              {step.text}
            </motion.p>
            {typingAt === i && (
              <motion.span
                className="typing-dots"
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.18 }}
              >
                <span />
                <span />
                <span />
              </motion.span>
            )}
          </li>
        );
      })}
    </ol>
    </div>
  );
}
