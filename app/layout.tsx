import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar'; 
import './globals.css'; 

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

        <footer className="w-full bg-[#070a12] border-t border-slate-900 py-6 text-center text-xs text-slate-500">
          <p>© 2026 salima.dev — Tous droits réservés.</p>
        </footer>

      </body>
    </html>
  );
}