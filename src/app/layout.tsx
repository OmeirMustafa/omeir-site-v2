import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { HUDNavigation } from '@/components/ui/HUDNavigation';
import { HUDFooter } from '@/components/ui/HUDFooter';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { ReticleCursor } from '@/components/ui/ReticleCursor';
import { CircuitGridBackground } from '@/components/ui/CircuitGridBackground';
import { CustomCursor } from '@/components/ui/CustomCursor'; // Added CustomCursor import

import { ScrollManager } from '@/components/ui/ScrollManager';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Omeir Mustafa | Digital Product & Web Architect',
  description: 'Designing premium brand systems and intelligent websites for modern businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#0F172A] text-slate-50 antialiased`}>
        <CustomCursor /> {/* Added CustomCursor component */}
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
