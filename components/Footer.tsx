import { FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a1120] py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
      <div className="text-center sm:text-left space-y-1.5">
  <h3 className="text-base font-extrabold tracking-tight text-white flex items-center justify-center sm:justify-start gap-1">
    <span>salima</span>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">.dev</span>
  </h3>
  
  <p className="text-[11px] font-medium text-slate-500 tracking-wide">
    © {currentYear} — Conçu & Développé avec Salima.
  </p>
</div>

        <div className="bg-[#111a2e] border border-slate-800/50 rounded-full px-5 py-1.5 text-[11px] font-medium text-slate-400 flex items-center justify-center gap-1.5 shadow-sm">
  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
  <span>Propulsé par</span>
  <span className="text-blue-400 font-semibold">React</span>
  <span className="text-slate-600">•</span>
  <span className="text-purple-400 font-semibold">TypeScript</span>
 
</div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/shsalima/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#111a2e] border border-slate-800/50 text-slate-400 rounded-xl hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/salima-sahi-25a3803aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#111a2e] border border-slate-800/50 text-slate-400 rounded-xl hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
          <a
            href="sahisalima@gmail.com"
            className="p-2.5 bg-[#111a2e] border border-slate-800/50 text-slate-400 rounded-xl hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
          >
<FaRegEnvelope className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}