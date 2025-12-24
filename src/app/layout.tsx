import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Omeir Mustafa — Digital & Product Architect',
  description: 'I help founders and scaling teams rebuild fragile web presences into high-trust, conversion-first systems that increase qualified inquiries and predictable revenue.',
  openGraph: {
    title: 'Omeir Mustafa — Digital & Product Architect',
    description: 'I help founders and scaling teams rebuild fragile web presences into high-trust, conversion-first systems that increase qualified inquiries and predictable revenue.',
    url: 'https://omeir-mustafa.vercel.app/',
    siteName: 'Omeir Mustafa',
    images: [
      {
        url: 'https://omeir-mustafa.vercel.app/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'Omeir Mustafa — Digital & Product Architect',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omeir Mustafa — Digital & Product Architect',
    description: 'High-trust website rebuilds for founders and scaling teams.',
    images: ['https://omeir-mustafa.vercel.app/social-preview.png'],
  },
  metadataBase: new URL('https://omeir-mustafa.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#F1F5F9] text-slate-800 antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-6 focus:py-3 focus:bg-white focus:text-[#0A58FF] focus:rounded-xl focus:shadow-xl focus:ring-2 focus:ring-[#0A58FF] focus:font-bold transition-all"
        >
          Skip to main content
        </a>
        <ScrollToTop />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
