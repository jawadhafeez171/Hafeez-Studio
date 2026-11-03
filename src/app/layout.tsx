import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import FloatingActions from '@/components/FloatingActions';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Hafeez Studio — High-Converting Websites & Intelligent AI Automation',
  description:
    'Hafeez Studio builds high-converting Next.js websites and custom AI workflow automation pipelines to eliminate manual work, capture clients, and accelerate business revenue.',
  keywords: [
    'high-converting websites',
    'Next.js web development',
    'custom web design Bangalore',
    'AI solutions for business',
    'AI workflow automation',
    'custom AI agents',
    'RAG chatbot development',
    'business process automation',
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
    title: 'Hafeez Studio — High-Converting Websites & Intelligent AI Automation',
    description:
      'We build high-converting Next.js websites and deploy custom AI agents, automated workflow pipelines, and bespoke modern web applications.',
    siteName: 'Hafeez Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hafeez Studio — High-Converting Websites & Intelligent AI Automation',
    description:
      'We build high-converting Next.js websites and deploy custom AI agents, automated workflow pipelines, and bespoke modern web applications.',
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
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <ThemeProvider>
          <CustomCursor />
          <FloatingActions />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
