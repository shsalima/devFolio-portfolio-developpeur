import {  Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a1120] py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="text-center sm:text-left">
          <h3 className="text-base font-bold text-slate-200">
            salima<span className="text-indigo-400">.dev</span>
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            © {currentYear} — Tous droits réservés.
          </p>
        </div>

        <div className="bg-[#111a2e] border border-slate-800/50 rounded-full px-5 py-1.5 text-xs text-slate-400 flex items-center justify-center gap-1">
          <span>Développé avec</span>
          <span className="text-rose-500">❤️</span>
          <span>en React & TypeScript</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#111a2e] border border-slate-800/50 text-slate-400 rounded-xl hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#111a2e] border border-slate-800/50 text-slate-400 rounded-xl hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
          <a
            href="sahisalima77@example.com"
            className="p-2.5 bg-[#111a2e] border border-slate-800/50 text-slate-400 rounded-xl hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
          >
<FaRegEnvelope className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}