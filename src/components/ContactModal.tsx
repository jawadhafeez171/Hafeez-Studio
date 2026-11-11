'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2, MessageCircle } from 'lucide-react';
import { TUTOR_WHATSAPP_TEXT } from '@/lib/tutor';
import { AnimatePresence, motion } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  isTutoring?: boolean;
  isWebsite?: boolean;
  selectedPlan?: string;
}

const STUDIO_WHATSAPP = '919886658462';
const TUTOR_WHATSAPP = '919902800693';

// Mirrors the server check in /api/contact: 10–13 digits once spaces, dashes and "+" are removed
const isValidPhone = (value: string) => /^\d{10,13}$/.test(value.replace(/[\s\-()+]/g, ''));

type Status = { type: 'success' } | { type: 'error'; message: string } | null;

export default function ContactModal({
  isOpen,
  onClose,
  isTutoring = false,
  isWebsite = false,
  selectedPlan = '',
}: ContactModalProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  // Callers pass inline onClose handlers; a ref keeps the focus effect from re-running on every render
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const ids = useId();
  const fieldId = (name: string) => `${ids}-${name}`;

  const whatsappNumber = isTutoring ? TUTOR_WHATSAPP : STUDIO_WHATSAPP;
  const whatsappText = isTutoring
    ? TUTOR_WHATSAPP_TEXT
    : selectedPlan
    ? `Hi Hafeez Studio, I'm interested in the ${selectedPlan} website plan`
    : "Hi Hafeez Studio, I'd like to discuss a project";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  // Focus management: move focus in on open, trap Tab inside, close on Escape, restore focus on close
  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstFieldRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCloseRef.current();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [isOpen]);

  // A fresh open always starts from an empty form, not a previous success screen
  useEffect(() => {
    if (isOpen) {
      setStatus(null);
      setNameError('');
      setPhoneError('');
    }
  }, [isOpen]);

  // Once the success screen replaces the form, move focus onto it so it is announced
  useEffect(() => {
    if (status?.type === 'success') dialogRef.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus();
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const missingName = !formData.name.trim();
    const badPhone = !isValidPhone(formData.phone);
    setNameError(missingName ? 'Please add your name so we know who to ask for.' : '');
    setPhoneError(badPhone ? 'Enter a 10-digit mobile number, e.g. 98765 43210.' : '');
    if (missingName || badPhone) {
      (missingName ? firstFieldRef.current : dialogRef.current?.querySelector<HTMLInputElement>('input[type=tel]'))?.focus();
      return;
    }
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: isTutoring ? 'tutor' : isWebsite ? 'website' : 'studio',
          plan: selectedPlan || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus({ type: 'success' });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || "We couldn't send your details just now." });
      }
    } catch {
      setStatus({ type: 'error', message: "We couldn't reach our server. Check your connection and try again." });
    } finally {
      setLoading(false);
    }
  };

  const titleId = fieldId('title');
  const descId = fieldId('desc');

  const title = isTutoring
    ? 'Book a free trial class'
    : selectedPlan
    ? `Book a call about the ${selectedPlan} plan`
    : 'Book a Discovery Call';
  const intro = isTutoring
    ? "Leave your number with your child's class, board and area. We'll call or WhatsApp to fix a time."
    : "Leave your number and a line about your business. The founder who leads your project will get back to you within 24 hours.";

  const label = (htmlFor: string, text: string) => (
    <label htmlFor={htmlFor} className="contact-label">
      {text}
    </label>
  );

  return (
    <AnimatePresence>
      {isOpen && (
    <motion.div
      key="contact-backdrop"
      className="contact-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.18, delay: 0.05 } }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="contact-dialog"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98, transition: { duration: 0.18 } }}
        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
      >
        <button type="button" onClick={onClose} className="contact-close" aria-label="Close">
          <X size={18} />
        </button>

        {status?.type === 'success' ? (
          <div className="contact-success" role="status">
            <CheckCircle2 size={32} style={{ color: 'var(--accent)' }} aria-hidden="true" />
            <h2 id={titleId} className="contact-title" tabIndex={-1} data-autofocus>
              Got it — thank you.
            </h2>
            <p id={descId} className="contact-intro">
              {isTutoring
                ? "We've got your request and will call or WhatsApp you to fix a time for the trial class."
                : `We'll call or WhatsApp you within 24 hours${selectedPlan ? ` about the ${selectedPlan} plan` : ''}. No preparation needed — we'll ask the questions.`}
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary contact-wide-btn">
              <MessageCircle size={18} aria-hidden="true" />
              <span>Prefer to chat now? Message on WhatsApp</span>
            </a>
            <button type="button" onClick={onClose} className="btn-primary contact-wide-btn">
              Done
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '18px', paddingRight: '40px' }}>
              <h2 id={titleId} className="contact-title">
                {title}
              </h2>
              <p id={descId} className="contact-intro">
                {intro}
              </p>
            </div>

            {status?.type === 'error' && (
              <div className="contact-error" role="alert">
                <AlertCircle size={18} aria-hidden="true" style={{ flexShrink: 0, marginTop: '1px' }} />
                <span>
                  {status.message} Your details are still here — try again, or{' '}
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    message us on WhatsApp
                  </a>
                  .
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="contact-row">
                <div>
                  {label(fieldId('name'), 'Your name')}
                  <input
                    ref={firstFieldRef}
                    id={fieldId('name')}
                    type="text"
                    required
                    autoComplete="name"
                    aria-invalid={Boolean(nameError)}
                    aria-describedby={nameError ? fieldId('name-error') : undefined}
                    className="form-input contact-input"
                    placeholder={isTutoring ? 'Parent or student name' : 'e.g. Rajesh Kumar'}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (nameError) setNameError('');
                    }}
                  />
                  {nameError && (
                    <p id={fieldId('name-error')} className="contact-field-error">
                      {nameError}
                    </p>
                  )}
                </div>

                <div>
                  {label(fieldId('phone'), 'Phone / WhatsApp')}
                  <input
                    id={fieldId('phone')}
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    aria-invalid={Boolean(phoneError)}
                    aria-describedby={phoneError ? fieldId('phone-error') : undefined}
                    className="form-input contact-input"
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (phoneError) setPhoneError('');
                    }}
                    onBlur={() => {
                      if (formData.phone && !isValidPhone(formData.phone)) {
                        setPhoneError('Enter a 10-digit mobile number, e.g. 98765 43210.');
                      }
                    }}
                  />
                  {phoneError && (
                    <p id={fieldId('phone-error')} className="contact-field-error">
                      {phoneError}
                    </p>
                  )}
                </div>
              </div>

              <div>
                {label(fieldId('email'), 'Email (optional)')}
                <input
                  id={fieldId('email')}
                  type="email"
                  autoComplete="email"
                  className="form-input contact-input"
                  placeholder={isTutoring ? 'you@example.com' : 'you@business.com'}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                {label(
                  fieldId('message'),
                  isTutoring ? 'Class, board and area' : 'What does your business do? (optional)'
                )}
                <textarea
                  id={fieldId('message')}
                  className="form-input contact-input"
                  rows={3}
                  style={{ resize: 'vertical', minHeight: '80px' }}
                  placeholder={
                    isTutoring
                      ? 'e.g. Class 10, ICSE, Maths and Physics, RT Nagar'
                      : 'e.g. Dental clinic, want online appointment bookings'
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary contact-wide-btn"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="spin" aria-hidden="true" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <span>{isTutoring ? 'Request a free trial class' : 'Request My Call'}</span>
                    <Send size={16} aria-hidden="true" />
                  </>
                )}
              </button>

              <p className="contact-alt">
                Rather chat?{' '}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Message us on WhatsApp
                </a>
              </p>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
      )}
    </AnimatePresence>
  );
}
