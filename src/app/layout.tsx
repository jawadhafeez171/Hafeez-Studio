import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Hafeez Studio — AI-Driven Solutions & Intelligent Systems for Businesses',
  description:
    'Hafeez Studio builds custom AI agents, automated workflow pipelines, and high-performance Next.js web applications to eliminate manual work, scale operations, and accelerate business revenue.',
  keywords: [
    'AI solutions for business',
    'AI workflow automation',
    'custom AI agents',
    'RAG chatbot development',
    'Next.js web development',
    'AI agency Bangalore',
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
    title: 'Hafeez Studio — AI-Driven Solutions & Intelligent Systems for Businesses',
    description:
      'We design and deploy custom AI agents, automated workflow pipelines, and bespoke modern web applications.',
    siteName: 'Hafeez Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hafeez Studio — AI-Driven Solutions & Intelligent Systems',
    description:
      'We design and deploy custom AI agents, automated workflow pipelines, and bespoke modern web applications.',
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
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
