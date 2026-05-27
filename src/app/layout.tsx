import type { Metadata } from 'next';
import { manrope, dmMono } from '@/lib/fonts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/layout/CookieBanner';
import { LenisProvider } from '@/components/layout/LenisProvider';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ER1 - R1 racun u sekundi',
    template: '%s | ER1',
  },
  description:
    'ER1 pojednostavljuje izdavanje R1 racuna. Skenirajte QR kod ili barkod na blagajni i dobijte R1 racun u sekundi. Dostupno za iOS i Android.',
  keywords: [
    'R1 racun',
    'R1',
    'fiskalizacija',
    'barkod',
    'QR kod',
    'racun',
    'Hrvatska',
    'aplikacija',
    'iOS',
    'Android',
  ],
  authors: [{ name: 'ER1 Brza Aplikacija d.o.o.' }],
  creator: 'ER1 Brza Aplikacija d.o.o.',
  publisher: 'ER1 Brza Aplikacija d.o.o.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'hr_HR',
    url: 'https://er1.hr',
    siteName: 'ER1',
    title: 'ER1 - R1 racun u sekundi',
    description:
      'ER1 pojednostavljuje izdavanje R1 racuna. Skenirajte QR kod ili barkod na blagajni i dobijte R1 racun u sekundi.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ER1 - R1 racun u sekundi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ER1 - R1 racun u sekundi',
    description:
      'ER1 pojednostavljuje izdavanje R1 racuna. Skenirajte QR kod ili barkod na blagajni i dobijte R1 racun u sekundi.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${manrope.variable} ${dmMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-brand-ice text-brand-navy">
        <LenisProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </LenisProvider>
      </body>
    </html>
  );
}
