import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { CustomCursor } from '@/components/ui/CustomCursor';

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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#F1F5F9] text-slate-800 antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
