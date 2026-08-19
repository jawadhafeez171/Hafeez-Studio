'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        background: 'var(--bg-glass)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-primary)',
        cursor: 'pointer',
        transition: 'var(--transition-smooth)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label={`Switch to ${theme === 'dark' ? 'warm light' : 'warm dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'Sunlit Linen' : 'Roasted Espresso'} theme`}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: theme === 'dark' ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0)',
          opacity: theme === 'dark' ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'absolute',
          color: '#FBBF24',
        }}
      >
        <Sun size={18} />
      </span>

      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: theme === 'light' ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0)',
          opacity: theme === 'light' ? 1 : 0,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'absolute',
          color: '#FF6B35',
        }}
      >
        <Moon size={18} />
      </span>
    </button>
  );
}
