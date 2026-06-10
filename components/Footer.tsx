export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#070a12] border-t border-slate-950 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div>
          <span className="font-semibold text-slate-400">salima.dev</span>
          <p>© {currentYear} — Tous droits réservés.</p>
        </div>
        <p className="text-xs">
          Développé avec ❤️ en <span className="text-violet-400">React & TypeScript</span>
        </p>
      </div>
    </footer>
  );
}