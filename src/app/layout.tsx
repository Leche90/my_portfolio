import type { Metadata } from 'next';
import {
  Bricolage_Grotesque,
  Newsreader,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
} from 'next/font/google';
import './globals.css';

// Fonts
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600'],
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Lanzema Leche · The Index',
  description:
    'Web developer based in Winnipeg. I build websites that load fast, look beautiful, and tell your story — for businesses, churches, and creators.',
  keywords: [
    'web developer',
    'freelance',
    'Winnipeg',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Lanzema Leche' }],
  openGraph: {
    title: 'Lanzema Leche · The Index',
    description:
      'Web developer based in Winnipeg. Selected works, services, and notes.',
    type: 'website',
    locale: 'en_CA',
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
      className={`${bricolage.variable} ${newsreader.variable} ${plexMono.variable} ${plexSans.variable}`}
    >
      <body className="font-sans bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
