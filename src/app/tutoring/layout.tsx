import type { Metadata } from 'next';
import { TUITION_ORIGIN } from '@/lib/sites';

const title = 'Hafeez Tutor — Math & Physics Home Tuition in Bangalore';
const description =
  'Patient, one-on-one Math and Physics home tuition for CBSE, ICSE and IGCSE students across Bangalore North and Central. Book a free trial class.';

// The tutoring business has its own identity and lives at tuition.hafeezstudio.com
export const metadata: Metadata = {
  metadataBase: new URL(TUITION_ORIGIN),
  title,
  description,
  keywords: [
    'home tuition Bangalore',
    'maths home tutor Bangalore',
    'physics home tutor Bangalore',
    'CBSE maths tuition',
    'ICSE physics tuition',
    'IGCSE maths tutor',
    'Hafeez Tutor',
  ],
  authors: [{ name: 'Hafeez Tutor' }],
  creator: 'Hafeez Tutor',
  publisher: 'Hafeez Tutor',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: TUITION_ORIGIN,
    siteName: 'Hafeez Tutor',
    title,
    description,
    images: ['/tutoring_hero.jpg'],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/tutoring_hero.jpg'] },
};

export default function TutoringLayout({ children }: { children: React.ReactNode }) {
  return children;
}
