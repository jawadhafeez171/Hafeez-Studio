'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

interface Step {
  line: React.ReactNode;
  note: string;
}

interface Problem {
  id: string;
  tab: string;
  question: React.ReactNode;
  steps: Step[];
}

const V = ({ children }: { children: React.ReactNode }) => <var>{children}</var>;
// Keeps one term of an equation together
const N = ({ children }: { children: React.ReactNode }) => <span className="t-nb">{children}</span>;

const problems: Problem[] = [
  {
    id: 'physics',
    tab: 'Physics, Class 9',
    question: 'A car starts from rest and speeds up at 2 m/s² for 5 seconds. How far does it travel?',
    steps: [
      {
        line: (
          <>
            Given:{' '}
            <N>
              <V>u</V> = 0,
            </N>{' '}
            <N>
              <V>a</V> = 2 m/s²,
            </N>{' '}
            <N>
              <V>t</V> = 5 s
            </N>
          </>
        ),
        note: '“Starts from rest” tells us the starting speed u is 0.',
      },
      {
        line: (
          <>
            To find: <V>s</V>, the distance
          </>
        ),
        note: 'Write down what the question asks for before choosing a formula.',
      },
      {
        line: (
          <>
            <V>s</V> = <V>ut</V> + ½<V>at</V>²
          </>
        ),
        note: 'This equation links distance, time and acceleration, exactly the values we have.',
      },
      {
        line: (
          <>
            <V>s</V> = 0 × 5 + ½ × 2 × 5²
          </>
        ),
        note: 'Substitute each value. Because u is 0, the first term disappears.',
      },
      {
        line: (
          <>
            <V>s</V> = 25 m
          </>
        ),
        note: 'Give the answer with its unit. Examiners award marks for each step, not just this line.',
      },
    ],
  },
  {
    id: 'maths',
    tab: 'Maths, Class 10',
    question: (
      <>
        Solve <V>x</V>² − 5<V>x</V> + 6 = 0.
      </>
    ),
    steps: [
      {
        line: (
          <>
            <V>x</V>² − 5<V>x</V> + 6 = 0
          </>
        ),
        note: 'We need two numbers that multiply to 6 and add up to −5.',
      },
      {
        line: (
          <>
            <N>(−2)(−3) = 6</N> <N>and −2 − 3 = −5</N>
          </>
        ),
        note: '−2 and −3 fit both conditions.',
      },
      {
        line: (
          <>
            (<V>x</V> − 2)(<V>x</V> − 3) = 0
          </>
        ),
        note: 'So the expression splits into two factors.',
      },
      {
        line: (
          <>
            <V>x</V> − 2 = 0 or <V>x</V> − 3 = 0
          </>
        ),
        note: 'If a product is zero, one of its factors must be zero.',
      },
      {
        line: (
          <>
            <V>x</V> = 2 or <V>x</V> = 3
          </>
        ),
        note: 'Check: 2² − 5 × 2 + 6 = 0, and the same works for 3.',
      },
    ],
  },
];

const STEP_MS = 1900;

// The page's one authored moment: a problem written onto the board a line at a time.
// Server HTML shows every line, so nothing depends on JavaScript to be read.
export default function WorkedBoard() {
  const [active, setActive] = useState(0);
  const problem = problems[active];
  const total = problem.steps.length;
  const [shown, setShown] = useState(total);
  const [playing, setPlaying] = useState(false);
  const [live, setLive] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  // Screen readers hear a note only after the visitor acts, never during autoplay
  const [announce, setAnnounce] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const play = useCallback(() => {
    if (reduced()) {
      setShown(total);
      return;
    }
    setLive(true);
    setShown(1);
    setPlaying(true);
  }, [total]);

  // Start writing the first time the board scrolls into view
  useEffect(() => {
    const el = boardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          play();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [play]);

  useEffect(() => {
    if (!playing) return;
    if (shown >= total) {
      setPlaying(false);
      return;
    }
    const id = window.setTimeout(() => setShown((n) => n + 1), STEP_MS);
    return () => window.clearTimeout(id);
  }, [playing, shown, total]);

  const choose = (i: number) => {
    if (i === active) return;
    setAnnounce(true);
    setActive(i);
    started.current = true;
    if (reduced()) {
      setShown(problems[i].steps.length);
      return;
    }
    setLive(true);
    setShown(1);
    setPlaying(true);
  };

  const next = () => {
    setAnnounce(true);
    setPlaying(false);
    setShown((n) => Math.min(n + 1, total));
  };

  // Tablist keyboard pattern: arrows move between subjects, Home/End jump to the ends
  const onTabKey = (e: React.KeyboardEvent, i: number) => {
    const last = problems.length - 1;
    const to =
      e.key === 'ArrowRight'
        ? i === last
          ? 0
          : i + 1
        : e.key === 'ArrowLeft'
          ? i === 0
            ? last
            : i - 1
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? last
              : -1;
    if (to < 0) return;
    e.preventDefault();
    choose(to);
    tabRefs.current[to]?.focus();
  };

  const replay = () => {
    setAnnounce(true);
    play();
  };

  const current = Math.max(shown - 1, 0);
  const done = shown >= total;

  return (
    <div className="t-board" ref={boardRef}>
      <div className="t-tabs" role="tablist" aria-label="Example problem">
        {problems.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            id={`tab-${p.id}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            onKeyDown={(e) => onTabKey(e, i)}
            aria-controls="t-working"
            className="t-tab"
            onClick={() => choose(i)}
          >
            {p.tab}
          </button>
        ))}
      </div>

      <div id="t-working" role="tabpanel" aria-labelledby={`tab-${problem.id}`}>
        <p className="t-question">{problem.question}</p>

        <ol className={`t-lines${live ? ' is-live' : ''}`} key={problem.id}>
          {problem.steps.map((s, i) => (
            <li
              key={i}
              className={`t-line${i === current ? ' is-current' : ''}${i < shown ? ' is-shown' : ''}${done && i === total - 1 ? ' is-final' : ''}`}
              aria-hidden={i >= shown ? true : undefined}
            >
              {s.line}
            </li>
          ))}
        </ol>

        <p className="t-explain" aria-live={announce ? 'polite' : 'off'}>
          {problem.steps[current].note}
        </p>

        <div className="t-board-controls">
          {done ? (
            <button type="button" className="t-chalk-btn" onClick={replay}>
              Write it out again
            </button>
          ) : (
            <button type="button" className="t-chalk-btn" onClick={next}>
              Next step
            </button>
          )}
          <span className="t-count num" aria-hidden="true">
            {shown} / {total}
          </span>
        </div>
      </div>
    </div>
  );
}
