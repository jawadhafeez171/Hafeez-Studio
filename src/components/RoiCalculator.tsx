'use client';

import React, { useState } from 'react';
import { Calculator, Zap, TrendingUp, Clock, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: () => void;
}

export default function RoiCalculator({ onOpenContact }: RoiCalculatorProps) {
  const [teamSize, setTeamSize] = useState<number>(5);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(40);
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  // Multiplier for currency
  const currencySymbol = currency === 'USD' ? '$' : '₹';
  const effectiveRate = hourlyRate * (currency === 'USD' ? 1 : 25);
  const weeklyHoursWasted = teamSize * hoursPerWeek;
  const monthlyHoursReclaimed = Math.round(weeklyHoursWasted * 4.2 * 0.75); // 75% automation recovery
  const annualHoursReclaimed = monthlyHoursReclaimed * 12;
  const annualSavings = Math.round(annualHoursReclaimed * effectiveRate);

  return (
    <section id="roi-calculator" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <span className="badge-pill">
              <Calculator size={14} />
              <span>Interactive ROI Estimator</span>
            </span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              color: 'var(--text-primary)',
            }}
          >
            How Much Time &amp; Capital Can <span className="gradient-text-orange">AI Automation Save You?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.65 }}>
            Adjust the sliders below to estimate your company&apos;s annual savings and reclaimed bandwidth through Hafeez Studio&apos;s custom AI agent systems.
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            padding: '40px',
            border: '1.5px solid rgba(255, 107, 53, 0.3)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Input Sliders */}
            <div>
              {/* Currency Toggle */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Select Currency
                </span>
                <div style={{ display: 'flex', gap: '6px', background: 'var(--bg-glass)', padding: '4px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => setCurrency('USD')}
                    style={{
                      padding: '5px 14px',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      background: currency === 'USD' ? 'var(--accent-orange)' : 'transparent',
                      color: currency === 'USD' ? '#FFFFFF' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    USD ($)
                  </button>
                  <button
                    onClick={() => setCurrency('INR')}
                    style={{
                      padding: '5px 14px',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      background: currency === 'INR' ? 'var(--accent-orange)' : 'transparent',
                      color: currency === 'INR' ? '#FFFFFF' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    INR (₹)
                  </button>
                </div>
              </div>

              {/* Slider 1: Team Size */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Team Members in Operations / Sales
                  </label>
                  <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent-orange)' }}>
                    {teamSize} people
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: 'var(--accent-orange)',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  <span>1 person</span>
                  <span>25 people</span>
                  <span>50 people</span>
                </div>
              </div>

              {/* Slider 2: Manual Hours */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Manual/Repetitive Hours / Person / Week
                  </label>
                  <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent-orange)' }}>
                    {hoursPerWeek} hrs/wk
                  </span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={25}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: 'var(--accent-orange)',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  <span>2 hrs (Low)</span>
                  <span>12 hrs (Medium)</span>
                  <span>25 hrs (Heavy)</span>
                </div>
              </div>

              {/* Slider 3: Hourly Value */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Estimated Team Hourly Value / Cost
                  </label>
                  <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent-orange)' }}>
                    {currencySymbol}{currency === 'USD' ? hourlyRate : hourlyRate * 25}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={150}
                  step={5}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: 'var(--accent-orange)',
                    cursor: 'pointer',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  <span>{currencySymbol}{currency === 'USD' ? 15 : 15 * 25}</span>
                  <span>{currencySymbol}{currency === 'USD' ? 80 : 80 * 25}</span>
                  <span>{currencySymbol}{currency === 'USD' ? 150 : 150 * 25}+</span>
                </div>
              </div>
            </div>

            {/* Results Display Card */}
            <div
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(255, 107, 53, 0.16) 0%, var(--bg-surface) 90%)',
                border: '1.5px solid rgba(255, 107, 53, 0.38)',
                borderRadius: 'var(--radius-lg)',
                padding: '36px',
                textAlign: 'center',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent-orange)', fontWeight: 700, marginBottom: '8px' }}>
                Estimated Annual Value Unlocked
              </div>
              <div
                className="font-serif gradient-text-orange"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  marginBottom: '16px',
                }}
              >
                {currencySymbol}{annualSavings.toLocaleString()}
                <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400, marginLeft: '6px' }}>/ year</span>
              </div>

              {/* Secondary Stats */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  margin: '24px 0',
                  padding: '20px 0',
                  borderTop: '1px solid var(--border-subtle)',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: 'var(--accent-emerald)', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                    <Clock size={14} />
                    Monthly Bandwidth Saved
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    ~{monthlyHoursReclaimed} hrs
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: 'var(--accent-amber)', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                    <Zap size={14} />
                    Lead Response Time
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    &lt; 5 seconds
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.5 }}>
                Based on an average 75% automation recovery rate across sales qualification, CRM processing, and customer ticket deflection.
              </p>

              <button
                onClick={onOpenContact}
                className="btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '0.95rem' }}
              >
                <span>Claim These Savings with Hafeez Studio</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
