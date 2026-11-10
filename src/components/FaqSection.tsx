import React from 'react';
import { Plus } from 'lucide-react';

const groups = [
  {
    title: 'Websites',
    faqs: [
      {
        q: 'Why a custom website instead of WordPress or Wix?',
        a: "Template builders lean on heavy themes and plugins that slow pages down, look like everyone else's, and need constant updates. A custom site is built for your business only, loads in under a second on mobile, and has no monthly builder subscription.",
      },
      {
        q: 'Do I own the website and the code?',
        a: 'Yes. Once the site is finished, the code, design files and hosting accounts are all in your name, so you are never locked in to us.',
      },
      {
        q: 'What does hosting cost afterwards?',
        a: 'Usually nothing, or under ₹1,500 a month for busier sites, on platforms like Vercel or Cloudflare. There is no builder licence to renew.',
      },
      {
        q: 'Can you redesign or move my existing website?',
        a: 'Yes. We move sites off WordPress, Wix and Squarespace and keep your existing page addresses, so the Google traffic you already have is not lost.',
      },
      {
        q: 'What support do I get after launch?',
        a: 'Every plan includes 14 to 60 days of support after launch, depending on the plan. That covers bug fixes, domain or hosting issues, and keeping the site fast.',
      },
    ],
  },
  {
    title: 'AI & automation',
    faqs: [
      {
        q: 'Is my business too small for AI automation?',
        a: 'No. Small teams often feel the difference most, because every hour saved goes straight back to the owner. Clinics, academies, builders and local service businesses are exactly who we build for.',
      },
      {
        q: 'Will my team need to learn new software?',
        a: 'No. Everything works inside tools you already use: WhatsApp, Google Sheets and email.',
      },
      {
        q: "Is my customers' data safe?",
        a: "Your documents and customer conversations stay in accounts you control, and they are never used to train public AI models. Before anything goes live, we'll show you exactly where your data is stored.",
      },
      {
        q: 'How long from the first call to something working?',
        a: 'Websites launch in 5 days to 3 weeks, depending on the plan. Most AI projects start with a two-week pilot on one real problem.',
      },
      {
        q: 'Can the website and the AI work together?',
        a: "Yes, that's what we do best. Your website can include an assistant that answers visitor questions and sends real enquiries straight to your WhatsApp or CRM.",
      },
    ],
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="section">
      <div className="container-custom">
        <div className="section-head">
          <h2 className="section-title">
            Questions we <em>get asked a lot.</em>
          </h2>
          <p className="section-lede">About websites, AI automation, pricing and timelines.</p>
        </div>

        <div className="faq-groups">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="faq-group-title">{group.title}</h3>
              <div className="faq-list">
                {group.faqs.map((faq) => (
                  <details key={faq.q} className="faq-item">
                    <summary>
                      <span>{faq.q}</span>
                      <Plus size={20} className="faq-chevron" aria-hidden="true" />
                    </summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
