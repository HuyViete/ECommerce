import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://apexacoustics.com'),
  title: {
    template: '%s | ApexAcoustics',
    default: 'ApexAcoustics | High-Fidelity Audio & Generative Engine Benchmark',
  },
  description:
    'ApexAcoustics engineers high-resolution reference wireless headphones with certified lab metrics, verified active noise attenuation curves, and zero keyword stuffing.',
  keywords: [
    'Acoustic Reference Headphones',
    'Active Noise Attenuation',
    'Beryllium Dynamic Drivers',
    'LDAC High-Resolution Audio',
    'Verified Audio Lab Benchmarks',
  ],
  authors: [{ name: 'ApexAcoustics Engineering Group' }],
  creator: 'ApexAcoustics',
  publisher: 'ApexAcoustics Labs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://apexacoustics.com',
    siteName: 'ApexAcoustics',
    title: 'ApexAcoustics | Precision Electro-Acoustic Engineering',
    description:
      'Explore certified laboratory acoustic benchmarks, active noise reduction curves, and verified harmonic distortion specifications.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=85',
        width: 1200,
        height: 630,
        alt: 'ApexAcoustics Precision Transducer Testing Bench',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApexAcoustics | Precision Transducer Engineering',
    description:
      'Laboratory-grade active noise attenuation curves and verified harmonic distortion specifications.',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=85'],
  },
  alternates: {
    canonical: 'https://apexacoustics.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Context Standard" />
      </head>
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 antialiased">
        <Navbar />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
