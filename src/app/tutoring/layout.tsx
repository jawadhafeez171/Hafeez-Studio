import type { Metadata, Viewport } from 'next';
import { Atkinson_Hyperlegible_Next } from 'next/font/google';
import { TUITION_ORIGIN } from '@/lib/sites';
import './tutor.css';

// Designed for legibility (Braille Institute): clear figures and unambiguous l/I/1, which matters in worked maths
const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  variable: '--font-atkinson',
  display: 'swap',
});

const title = 'Hafeez Tutor — Maths & Physics Home Tuition in Bangalore';
const description =
  'One-to-one Maths and Physics home tuition for Classes 8, 9 and 10 (CBSE, ICSE, IGCSE) at your home in central Bangalore and nearby areas. ₹600 an hour; the first trial class is free.';

// The browser bar matches the pale yellow top band
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FDF9EC',
};

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
  // Keeps the tutoring business's own mark, separate from the studio's
  icons: {
    icon: [{ url: '/tutoring-favicon.svg', type: 'image/svg+xml' }],
    apple: '/tutoring-apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: TUITION_ORIGIN,
    siteName: 'Hafeez Tutor',
    title,
    description,
  },
  twitter: { card: 'summary_large_image', title, description },
};

export default function TutoringLayout({ children }: { children: React.ReactNode }) {
  return <div className={`tutor ${atkinson.variable}`}>{children}</div>;
}
