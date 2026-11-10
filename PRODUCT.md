# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owner-led local businesses in India, mostly Bengaluru: clinics and medical specialists, coaching academies, builders and construction firms, and other service businesses. The person evaluating is usually the owner or a senior decision-maker, often non-technical and budget-conscious, who wants more enquiries and less manual follow-up. They arrive comparing a custom build against cheaper template/builder options or doing nothing, and they decide by talking to a person (WhatsApp or a call), not by self-serve checkout.

## Product Purpose

Hafeez Studio is a small web and AI studio. It builds fast, custom-coded websites and practical AI automation (chat assistants, lead capture and follow-up, CRM/WhatsApp/Google Sheets workflows) for those businesses. The marketing site exists to turn a visiting owner into a discovery call or a WhatsApp conversation. Success is a qualified lead that understands the price range and what they will get.

## Positioning

Websites and AI automation are equal-weight core offers, sold by the same people, so the website and the automation behind it are designed together (the site captures the enquiry, the assistant answers it, the follow-up happens automatically). Clients get hand-written code they fully own, with no monthly builder or platform fees, transparent INR pricing, and a short fixed timeline, delivered by a founder-led team rather than an agency account layer.

## Operating Context

- Leads arrive via the contact modal (POST `/api/contact`, forwarded to a Google Apps Script / Sheet) or a WhatsApp deep link; follow-up is personal, promised within 24 hours.
- Selling happens in conversation: discovery call, scoped quote, fixed milestones.
- Clients' own tools are the integration targets: WhatsApp, Google Sheets, CRMs (HubSpot, Notion), Razorpay/Stripe, calendars.
- Delivery is a roughly two-week sprint for standard work (2 to 3 weeks for custom builds): discovery, prototype, build and integrate, launch and support.

## Capabilities and Constraints

- Team: a founder who leads and delivers, bringing in trusted freelancers per project. "We" is accurate; do not imply a large agency.
- Website packages (current published pricing, one-time, starting prices): Starter ₹12,999 (5 to 7 days), Growth ₹24,999 (10 to 14 days), Custom ₹59,999+ (2 to 3 weeks). Each includes revisions and a post-launch support window.
- AI offers: workflow automation, custom chat assistants trained on the client's own documents, AI web apps / MVPs, and short AI pilot sprints. AI work is quoted after a call, not priced publicly.
- Clients receive full source code and IP; hosting typically costs little or nothing on Vercel/Cloudflare.
- Stack of this site: Next.js (App Router) on Vercel. Contact leads go through `src/app/api/contact/route.ts`.
- Open: one consistent page-speed promise. The site currently says both "< 0.8s guarantee" and "< 1s"; pick one before repeating it.
- `/tutoring` (Math & Physics home tutoring, Bangalore) is a **separate side business** sharing the domain, with its own WhatsApp number and lead type. It is not part of the studio's offer or positioning; keep studio work from leaking into it and vice versa.

## Brand Commitments

- Name: Hafeez Studio. Wordmark "Hafeez*Studio*" with a "Web & AI" tag (see `src/components/Navbar.tsx`); favicon at `public/favicon.svg`, logo at `public/logo.webp`.
- Voice: plain, honest, no jargon for owners (avoid "RAG", "vector database", "enterprise"); concrete about price, timeline, and ownership.
- Pricing is shown in INR.

## Evidence on Hand

- Live client sites, linkable, with logos in `public/clients/`: JointXperts (orthopaedic practice, Bengaluru), Encourage India IAS Academy (UPSC/KPSC coaching), Construction Buddy (turnkey home construction, Bangalore), India Job Notice (national government job portal).
- Client testimonials: available with permission (not yet collected on the site).
- Real AI/automation project examples: available to show or describe (not yet on the site).
- **Not available, do not fabricate:** verified client performance metrics. Figures currently on the site ("3x lead inflow", "5 clinics synced", "< 0.8s" per client) are unverified and should not be extended or repeated as proof. No founder photo or bio is to be published. No invented case studies, industry statistics, or benchmark claims.

## Product Principles

1. Proof over promises: lead with real, clickable client work and real client words; never invent numbers.
2. Speak to the owner, not the engineer: outcomes, price, timeline, and ownership in plain language.
3. One studio, two crafts: present websites and AI automation as equal, connected offers, not a site with an AI upsell.
4. Honest scope: transparent starting prices, fixed timelines, and clear "quoted after a call" where pricing isn't fixed.
5. Every path ends in a conversation: a discovery call or WhatsApp is always one tap away.

## Accessibility & Inclusion

Target WCAG 2.1 AA: text and button contrast at least 4.5:1, visible keyboard focus, and respect for `prefers-reduced-motion`. Many visitors are on mid-range Android phones and mobile data, so mobile performance is an inclusion requirement, not a nice-to-have.
