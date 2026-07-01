import type { Metadata } from 'next';
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Meng Dou — Senior Data Scientist & AI Product Owner',
  description:
    'Portfolio of Meng Dou, Senior Data Scientist and AI Product Owner at ASML. 13+ years building and shipping predictive ML models and AI products across semiconductors, health tech, and cloud infrastructure.',
  metadataBase: new URL('https://mengdou-portfolio.example.com'),
  openGraph: {
    title: 'Meng Dou — Senior Data Scientist & AI Product Owner',
    description:
      'Predictive ML models and AI products, shipped: 13+ years across semiconductors, health tech, and cloud infrastructure.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
