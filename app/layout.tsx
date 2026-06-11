import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar'; 
import './globals.css'; 
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'salima.dev | Portfolio',
  description: 'Portfolio professionnel de Salima, Développeuse Fullstack',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} bg-[#0b0f19] text-slate-100 antialiased min-h-screen flex flex-col justify-between`}>
        
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}