import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { HUDNavigation } from '@/components/ui/HUDNavigation';
import { HUDFooter } from '@/components/ui/HUDFooter';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { ReticleCursor } from '@/components/ui/ReticleCursor';
import { CircuitGridBackground } from '@/components/ui/CircuitGridBackground';

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
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-[#00ffa0] selection:text-black bg-[#0b0b0d]`}>
        <CircuitGridBackground />
        <ParticleBackground />
        <ReticleCursor />
        <div className="scan-overlay" />
        <HUDNavigation />
        <main className="relative z-10 pt-20">{children}</main>
        <HUDFooter />
      </body>
    </html>
  );
}
