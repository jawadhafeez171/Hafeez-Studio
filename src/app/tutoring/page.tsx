'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { 
  GraduationCap, 
  MapPin, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Heart,
  TrendingUp,
  Award
} from 'lucide-react';

export default function TutoringPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const bangaloreLocations = [
    'Sanjay Nagar',
    'Sahakar Nagar',
    'Sadashivanagar',
    'Cunningham Road',
    'Richmond Town',
    'RT Nagar',
    'Vasant Nagar',
    'Benson Town',
    'MG Road / Central',
    'Frazer Town',
    'Malleshwaram',
    'Hebbal',
    'RMV Extension (Stage 1 & 2)',
    'HBR Layout',
    'Cooke Town',
    'Lavelle Road',
  ];

  const methodologySteps = [
    {
      num: '01',
      title: 'First-Principles Concept Clarity',
      desc: 'Breaking down complex Math and Physics theories into intuitive, visual, and real-world analogies so students truly enjoy the "why" behind every formula.',
    },
    {
      num: '02',
      title: 'Supportive 1-on-1 Practice',
      desc: 'Graded question sets ranging from foundational textbook problems to advanced exemplar, past 10-year board questions, and analytical problem-solving.',
    },
    {
      num: '03',
      title: 'Gentle Diagnostic Feedback',
      desc: 'Regular, stress-free mini assessments that pinpoint exact areas for growth, building genuine confidence with transparent parent progress updates.',
    },
    {
      num: '04',
      title: 'Tailored Board Exam Strategy',
      desc: 'Proven answer presentation techniques, step-marking optimization, and calm time-management drills for CBSE, ICSE, and IGCSE examinations.',
    },
  ];

  const boards = [
    { name: 'CBSE', subtitle: 'Classes 8, 9 & 10', focus: 'NCERT deep-dives, Exemplar mastery, and stress-free board blueprint prep.' },
    { name: 'ICSE', subtitle: 'Classes 8, 9 & 10', focus: 'Thorough conceptual clarity, Selina/Concise mastery, and step-by-step numerical drills.' },
    { name: 'IGCSE / Cambridge', subtitle: 'Extended Math & Physics', focus: 'Past paper mastery, command-word understanding, and critical analytical physics.' },
  ];

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Local Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Hafeez Home Tutor',
            image: 'https://hafeezstudio.com/tutoring_hero.jpg',
            url: 'https://hafeezstudio.com/tutoring',
            telephone: '+919902800693',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Bangalore',
              addressRegion: 'Karnataka',
              addressCountry: 'IN',
            },
            areaServed: bangaloreLocations.map((loc) => ({
              '@type': 'AdministrativeArea',
              name: loc,
            })),
          }),
        }}
      />

      <Navbar onOpenContact={() => setIsContactOpen(true)} isTutoringPage={true} />

      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          paddingTop: '160px',
          paddingBottom: '90px',
          overflow: 'hidden',
        }}
      >
        <div className="glow-mesh-tutoring" />

        <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto 50px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
              <span className="badge-emerald">
                <GraduationCap size={15} />
                <span>Personalized 1-on-1 Home Tuition • Bangalore North &amp; Central</span>
              </span>
            </div>

            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.3rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
                color: 'var(--text-primary)',
              }}
            >
              Hafeez Home Tutor
            </h1>

            <div
              className="font-serif gradient-text-emerald"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 700,
                marginBottom: '20px',
              }}
            >
              Empowering Students in Math &amp; Physics for Classes 8 to 10
            </div>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                maxWidth: '720px',
                margin: '0 auto 36px',
                lineHeight: 1.65,
              }}
            >
              Dedicated, patient, and encouraging home tutoring tailored for CBSE, ICSE, and IGCSE students in Bangalore. We replace subject anxiety with genuine curiosity, self-belief, and top academic scores.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <button
                onClick={() => setIsContactOpen(true)}
                className="btn-emerald"
                style={{ padding: '16px 36px', fontSize: '1rem' }}
              >
                <span>Book a Welcoming Trial Session</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="https://wa.me/919902800693?text=Hi%2C%20I%20am%20interested%20in%20Math%20%26%20Physics%20home%20tutoring"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '16px 28px', fontSize: '1rem', color: 'var(--accent-emerald)', borderColor: 'rgba(16, 185, 129, 0.3)' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp: +91 99028 00693</span>
              </a>
            </div>
          </div>

          {/* Hero Visual Image Banner */}
          <div style={{ maxWidth: '1060px', margin: '0 auto 60px' }}>
            <div
              className="glass-card"
              style={{
                padding: '14px',
                border: '1.5px solid var(--border-subtle)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '420px',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/tutoring_hero.jpg"
                  alt="Hafeez Home Tutor providing 1-on-1 Math and Physics mentorship in Bangalore"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                {/* Floating Reassurance Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    background: 'var(--nav-bg)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid var(--border-subtle)',
                    padding: '12px 20px',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: 'var(--card-shadow)',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'var(--badge-emerald-bg)',
                      border: '1px solid var(--badge-emerald-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-emerald)',
                    }}
                  >
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      In-Person Home Mentorship
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      Bangalore North &amp; Central Neighborhoods
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Highlights */}
          <div
            className="glass-card"
            style={{
              maxWidth: '1060px',
              margin: '0 auto',
              padding: '28px 36px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '20px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div>
              <div className="font-serif gradient-text-emerald" style={{ fontSize: '1.9rem', fontWeight: 800 }}>
                1-on-1
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Dedicated Personal Attention</div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-subtle)' }}>
              <div className="font-serif gradient-text" style={{ fontSize: '1.9rem', fontWeight: 800 }}>
                8, 9 &amp; 10
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Foundations &amp; Board Excellence</div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-subtle)' }}>
              <div className="font-serif gradient-text-emerald" style={{ fontSize: '1.9rem', fontWeight: 800 }}>
                CBSE / ICSE / IGCSE
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Complete Syllabus Mastery</div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border-subtle)' }}>
              <div className="font-serif gradient-text" style={{ fontSize: '1.9rem', fontWeight: 800 }}>
                Bangalore
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>North &amp; Central Localities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Boards */}
      <section id="curriculum" style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <h2 className="font-serif" style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '14px', color: 'var(--text-primary)' }}>
              Tailored Guidance for <span className="gradient-text-emerald">Every Major Board</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Every curriculum has unique examination nuances. We meet students where they are, adapting to their individual learning pace and curriculum requirements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {boards.map((b, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '34px',
                  border: '1.5px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: 'var(--accent-emerald)',
                    marginBottom: '6px',
                  }}
                >
                  {b.name}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-orange)', fontWeight: 600, marginBottom: '16px' }}>
                  {b.subtitle}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {b.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology with Concept Image */}
      <section id="methodology" style={{ padding: '90px 0', background: 'var(--bg-glass-subtle)' }}>
        <div className="container-custom">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
              marginBottom: '60px',
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
                <span className="badge-emerald">
                  <Sparkles size={14} />
                  <span>First-Principles Approach</span>
                </span>
              </div>
              <h2 className="font-serif" style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '18px', color: 'var(--text-primary)' }}>
                Our 4-Pillar <span className="gradient-text-emerald">Teaching Philosophy</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '24px' }}>
                Designed to build genuine intuition, banish exam anxiety, and foster a lifelong love for problem solving.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {methodologySteps.slice(0, 2).map((m, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '14px' }}>
                    <div
                      className="font-serif"
                      style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-emerald)', width: '32px' }}
                    >
                      {m.num}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        {m.title}
                      </h3>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Concept Image Card */}
            <div
              className="glass-card"
              style={{
                padding: '12px',
                border: '1.5px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '340px',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/tutoring_concept.jpg"
                  alt="Indian high school student focused on Math and Physics problem solving"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Pillars 3 and 4 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {methodologySteps.slice(2).map((m, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '32px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  className="font-serif"
                  style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent-emerald)', marginBottom: '14px' }}
                >
                  {m.num}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidence & Success Section with Student Photo */}
      <section style={{ padding: '90px 0', position: 'relative' }}>
        <div className="container-custom">
          <div
            className="glass-card"
            style={{
              padding: '40px',
              border: '1.5px solid var(--border-subtle)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '40px',
                alignItems: 'center',
              }}
            >
              {/* Photo */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '360px',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/tutoring_confidence.jpg"
                  alt="Indian high school student celebrating Math and Physics exam confidence"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Text */}
              <div>
                <div style={{ display: 'inline-flex', marginBottom: '12px' }}>
                  <span className="badge-emerald">
                    <Award size={14} />
                    <span>Real Academic Transformation</span>
                  </span>
                </div>
                <h2 className="font-serif" style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '16px', color: 'var(--text-primary)' }}>
                  From Anxiety to <span className="gradient-text-emerald">Confident Problem Solvers</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  Our personalized approach helps students overcome stumbling blocks in calculus, mechanics, optics, and algebra. We work closely with parents to provide transparent, encouraging progress after every module.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} />
                    <span>Weekly timed diagnostic practice papers</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} />
                    <span>10-year past board paper answer writing drills</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)' }} />
                    <span>Patience, encouragement, and zero intimidation</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsContactOpen(true)}
                  className="btn-emerald"
                  style={{ padding: '14px 32px' }}
                >
                  <span>Book a Free Trial Session</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', marginBottom: '14px' }}>
              <span className="badge-emerald">
                <MapPin size={14} />
                <span>Bangalore North &amp; Central Presence</span>
              </span>
            </div>
            <h2 className="font-serif" style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '14px', color: 'var(--text-primary)' }}>
              Welcoming Students in <span className="gradient-text-emerald">Bangalore Neighborhoods</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              In-person home tutoring conducted in the comfort of your home across:
            </p>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '36px',
              border: '1.5px solid var(--border-subtle)',
              maxWidth: '960px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '14px',
              }}
            >
              {bangaloreLocations.map((loc, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 14px',
                    background: 'var(--bg-glass)',
                    borderRadius: '10px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <MapPin size={15} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>{loc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Callout */}
      <section style={{ padding: '80px 0 120px' }}>
        <div className="container-custom">
          <div
            className="glass-card"
            style={{
              padding: '64px 40px',
              textAlign: 'center',
              border: '1.5px solid rgba(16, 185, 129, 0.35)',
              background: 'radial-gradient(circle at 50% 0%, var(--badge-emerald-bg) 0%, var(--bg-card) 75%)',
            }}
          >
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px', color: 'var(--text-primary)' }}>
              Give Your Child the Gift of <span className="gradient-text-emerald">Confidence &amp; Mastery</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', maxWidth: '640px', margin: '0 auto 34px', lineHeight: 1.65 }}>
              Schedule a friendly in-person diagnostic trial class at your home. No pressure, just honest feedback and a personalized learning plan.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setIsContactOpen(true)}
                className="btn-emerald"
                style={{ padding: '16px 38px', fontSize: '1rem' }}
              >
                <span>Book Free Diagnostic Session</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenContact={() => setIsContactOpen(true)} isTutoring={true} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        isTutoring={true}
      />
    </main>
  );
}
