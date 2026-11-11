import type { Metadata, Viewport } from 'next';
import { Source_Serif_4, Hanken_Grotesk, Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import FloatingActions from '@/components/FloatingActions';
import { ThemeProvider } from '@/context/ThemeContext';
import MotionProvider from '@/components/MotionProvider';

// Studio type: a book serif with optical sizes for headlines, a quiet grotesque for text
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-source-serif',
  display: 'swap',
});
const hanken = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-hanken', display: 'swap' });

// Tutoring (separate business) keeps its own faces; not preloaded on studio pages
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap', preload: false });
const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
  preload: false,
});

// Applies a saved dark theme before first paint so returning visitors don't see a light flash
const themeScript = `try{var t=localStorage.getItem('hafeez-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Lets fixed bars use env(safe-area-inset-*) around notches and home indicators
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Hafeez Studio — Custom Websites & AI Automation',
  description:
    'Fast custom websites from ₹12,999 and practical AI automation for clinics, academies and growing businesses worldwide. Starter sites live in 48 hours, no monthly platform fees, and you own the code.',
  keywords: [
    'custom website design',
    'custom website for clinics',
    'website for coaching academy',
    'WhatsApp chatbot for business',
    'AI automation for small business',
    'lead follow-up automation',
    'Hafeez Studio',
  ],
  authors: [{ name: 'Hafeez Studio' }],
  creator: 'Hafeez Studio',
  publisher: 'Hafeez Studio',
  metadataBase: new URL('https://hafeezstudio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://hafeezstudio.com',
    title: 'Hafeez Studio — Custom Websites & AI Automation',
    description:
      'Fast custom websites and practical AI automation for clinics, academies and growing businesses worldwide. You own the code; no monthly platform fees.',
    siteName: 'Hafeez Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hafeez Studio — Custom Websites & AI Automation',
    description:
      'Fast custom websites and practical AI automation for clinics, academies and growing businesses worldwide. You own the code; no monthly platform fees.',
  },
  verification: {
    google: 'SJ9BIXHBoNu5rQA6pQyKAHZ333ZRQQhAGWjnwElAOUI',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${sourceSerif.variable} ${hanken.variable} ${jakarta.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <ThemeProvider>
          <MotionProvider>
            <FloatingActions />
            {children}
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
