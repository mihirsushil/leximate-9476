import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LexiMate — Read contracts in minutes, not weeks',
  description: 'LexiMate uses AI to instantly scan housing and academic contracts, turning dense legalese into clear, actionable insights. Students get plain‑English summaries, risk highlights, and real‑time collaboration tools—all in under ten minutes of setup. As teams grow, the platform scales from a free tier to enterprise‑grade features without switching providers.',
  openGraph: {
    title: 'LexiMate',
    description: 'Read contracts in minutes, not weeks',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
