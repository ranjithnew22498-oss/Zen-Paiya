import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { ScrollReveal } from '@/components/site/scroll-reveal';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://zenpiya.com'),
  title: {
    default: 'ZenPiya | Semiconductor & AI Talent Solutions',
    template: '%s | ZenPiya',
  },
  description:
    'ZenPiya connects innovative organizations with exceptional Semiconductor, AI, Embedded Systems, and Deep Technology professionals.',
  keywords: [
    'semiconductor recruitment',
    'AI talent solutions',
    'deep technology hiring',
    'engineering recruitment',
    'embedded systems talent',
  ],
  openGraph: {
    title: 'ZenPiya | Semiconductor & AI Talent Solutions',
    description:
      'ZenPiya connects innovative organizations with exceptional Semiconductor, AI, Embedded Systems, and Deep Technology professionals.',
    type: 'website',
    siteName: 'ZenPiya',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZenPiya | Semiconductor & AI Talent Solutions',
    description:
      'ZenPiya connects innovative organizations with exceptional Semiconductor, AI, Embedded Systems, and Deep Technology professionals.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        <ScrollReveal />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
