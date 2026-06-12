'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Compétences', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="w-full bg-[#0b0f19]/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="flex items-center gap-1.5 font-bold text-lg text-white ml-0 pl-0"
        >
          <span className="text-violet-500 font-mono">&lt;/&gt;</span>
          salima<span className="text-violet-400">.dev</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-5 md:gap-6 mr-0 pr-0">
          
          {/* NAV LINKS */}
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs sm:text-sm font-medium transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-violet-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-400 rounded-full" />
                )}
              </Link>
            );
          })}

          <a
            href="/SAHI_SALIMA_FlowCV_Resume_2026-05-14 (2).pdf"
            download="cv_salima_sahi.pdf" 
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-xs px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl transition-all duration-200 shadow-md shadow-violet-600/10 flex items-center gap-1.5 ml-2 border border-violet-500/20"
          >
            <span>CV</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3.5 w-3.5 text-violet-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
          </a>

        </div>

      </div>
    </nav>
  );
}