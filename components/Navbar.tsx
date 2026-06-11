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

        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mr-0 pr-0">
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
        </div>

      </div>
    </nav>
  );
}