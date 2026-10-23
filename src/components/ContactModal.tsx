'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Sparkles, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  isTutoring?: boolean;
  isWebsite?: boolean;
  selectedPlan?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  isTutoring = false,
  isWebsite = false,
  selectedPlan = '',
}: ContactModalProps) {
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

    const submissionType = isTutoring ? 'tutor' : isWebsite ? 'website' : 'studio';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: submissionType,
          plan: selectedPlan || undefined,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({
          type: 'success',
          message: isTutoring
            ? "Wonderful! We've received your request for a free trial class and will reach out shortly."
            : isWebsite
            ? `Thank you! We've received your inquiry for the ${selectedPlan || 'Website'} package and will contact you within 24 hours.`
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
        backgroundColor: 'rgba(0, 0, 0, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflowX: 'hidden',
        overflowY: 'auto',
        boxSizing: 'border-box',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '520px',
          padding: '26px 28px',
          position: 'relative',
          background: 'var(--modal-bg)',
          border: isTutoring
            ? '1.5px solid rgba(16, 185, 129, 0.45)'
            : isWebsite
            ? '1.5px solid rgba(236, 72, 153, 0.5)'
            : '1.5px solid rgba(255, 107, 53, 0.45)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.55)',
          maxHeight: 'min(92vh, 660px)',
          overflowY: 'auto',
          overflowX: 'hidden',
          boxSizing: 'border-box',
          borderRadius: '16px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          aria-label="Close dialog"
        >
          <X size={16} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '18px', paddingRight: '32px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '6px' }}>
            <span
              className={isTutoring ? 'badge-emerald' : 'badge-pill'}
              style={{ padding: '3px 10px', fontSize: '0.74rem' }}
            >
              <Sparkles size={12} />
              <span>
                {isTutoring
                  ? 'Bangalore Home Tutoring'
                  : isWebsite
                  ? `${selectedPlan ? selectedPlan + ' Plan • ' : ''}Bespoke Web Design`
                  : 'Friendly Project Discovery'}
              </span>
            </span>
          </div>
          <h3
            className="font-serif"
            style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px', lineHeight: 1.25 }}
          >
            {isTutoring
              ? 'Book a Free Trial Session'
              : isWebsite
              ? `Let's Build Your Website`
              : "Let's Start a Conversation"}
          </h3>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
            {isTutoring
              ? 'Tell us your location in Bangalore and curriculum to schedule a friendly trial class.'
              : isWebsite
              ? `Share your vision, brand references, or timeline. We'll reply within 24 hours.`
              : "Tell us a bit about your business goals. We'll reply within 24 hours with honest suggestions."}
          </p>
        </div>

        {/* Success / Error Message Banner */}
        {status && (
          <div
            style={{
              padding: '12px 14px',
              borderRadius: '8px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: status.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
              border: status.type === 'success' ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(239, 68, 68, 0.4)',
              color: status.type === 'success' ? 'var(--accent-emerald)' : '#EF4444',
              fontSize: '0.84rem',
            }}
          >
            {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            <span>{status.message}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Your Name *
              </label>
              <input
                type="text"
                required
                className="form-input"
                style={{ padding: '10px 14px', fontSize: '0.9rem', borderRadius: '8px' }}
                placeholder={isTutoring ? "Parent / Student's Name" : 'e.g. Rajesh Kumar'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                className="form-input"
                style={{ padding: '10px 14px', fontSize: '0.9rem', borderRadius: '8px' }}
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
              Email Address (Optional)
            </label>
            <input
              type="email"
              className="form-input"
              style={{ padding: '10px 14px', fontSize: '0.9rem', borderRadius: '8px' }}
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
              {isTutoring
                ? 'Class / Board / Location in Bangalore'
                : isWebsite
                ? 'Your Website Goals or Inspiration'
                : 'Tell us about your project or bottleneck'}
            </label>
            <textarea
              className="form-input"
              rows={2}
              style={{ padding: '10px 14px', fontSize: '0.9rem', borderRadius: '8px', resize: 'none', minHeight: '64px' }}
              placeholder={
                isTutoring
                  ? 'e.g. Class 10 ICSE Math & Physics in Sadashivanagar / RT Nagar'
                  : isWebsite
                  ? 'e.g. Need a fast, clean website to showcase our services and capture inbound leads…'
                  : 'Describe your current bottlenecks, target capabilities, timeline…'
              }
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={isTutoring ? 'btn-emerald' : 'btn-primary'}
            style={{
              width: '100%',
              padding: '13px 20px',
              marginTop: '4px',
              fontSize: '0.95rem',
              fontWeight: 700,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: isWebsite ? 'linear-gradient(135deg, #00F0FF 0%, #EC4899 60%, #8B5CF6 100%)' : undefined,
              boxShadow: isWebsite ? '0 6px 20px rgba(236, 72, 153, 0.35)' : undefined,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Sending…</span>
              </>
            ) : (
              <>
                <span>
                  {isTutoring
                    ? 'Confirm Free Trial Request'
                    : isWebsite
                    ? `Get Started with ${selectedPlan || 'Web'} Package`
                    : 'Send Message'}
                </span>
                <Send size={15} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
