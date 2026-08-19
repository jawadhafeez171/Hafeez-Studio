'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Sparkles, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  isTutoring?: boolean;
}

export default function ContactModal({ isOpen, onClose, isTutoring = false }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: isTutoring ? 'tutor' : 'studio',
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({
          type: 'success',
          message: isTutoring
            ? "Wonderful! We've received your request for a free trial class and will reach out shortly."
            : "Thank you! We've received your project details and will get back to you within 24 hours.",
        });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Network error. Please try again or reach out on WhatsApp.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '560px',
          padding: '40px',
          position: 'relative',
          background: 'var(--modal-bg)',
          border: isTutoring ? '1.5px solid rgba(16, 185, 129, 0.4)' : '1.5px solid rgba(255, 107, 53, 0.4)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.45)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '10px' }}>
            <span className={isTutoring ? 'badge-emerald' : 'badge-pill'}>
              <Sparkles size={13} />
              <span>{isTutoring ? 'Bangalore Home Tutoring' : 'Friendly Project Discovery'}</span>
            </span>
          </div>
          <h3
            className="font-serif"
            style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}
          >
            {isTutoring ? 'Book a Free Trial Session' : "Let's Start a Conversation"}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {isTutoring
              ? 'Tell us your location in Bangalore and curriculum to schedule a friendly trial class.'
              : "Tell us a bit about your business goals. We'll reply within 24 hours with honest, thoughtful suggestions."}
          </p>
        </div>

        {/* Success / Error Message Banner */}
        {status && (
          <div
            style={{
              padding: '16px',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: status.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
              border: status.type === 'success' ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(239, 68, 68, 0.4)',
              color: status.type === 'success' ? 'var(--accent-emerald)' : '#EF4444',
              fontSize: '0.88rem',
            }}
          >
            {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
            <span>{status.message}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Your Name *
            </label>
            <input
              type="text"
              required
              className="form-input"
              placeholder={isTutoring ? "Parent / Student's Name" : 'e.g. Rajesh Kumar'}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              className="form-input"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
              Email Address (Optional)
            </label>
            <input
              type="email"
              className="form-input"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
              {isTutoring ? 'Class / Board / Location in Bangalore' : 'Tell us about your project or bottleneck'}
            </label>
            <textarea
              className="form-input"
              rows={3}
              placeholder={
                isTutoring
                  ? 'e.g. Class 10 ICSE Math & Physics in Sadashivanagar / RT Nagar'
                  : 'Describe your current bottlenecks, target AI capabilities, timeline…'
              }
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={isTutoring ? 'btn-emerald' : 'btn-primary'}
            style={{ width: '100%', padding: '16px', marginTop: '10px' }}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Sending…</span>
              </>
            ) : (
              <>
                <span>{isTutoring ? 'Confirm Free Trial Request' : 'Send Message'}</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
