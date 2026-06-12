import { personalInfo } from '@/data/projects';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#070B16] text-white pb-20 pt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-12 text-center sm:text-left border-b border-white/5 pb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Contactez-moi</h1>
          <p className="text-sm text-gray-400 max-w-2xl">
            Un projet en tête, une opportunité de stage ou une question ? N'hésitez pas à me laisser un message ou à me contacter directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            
            {/* CARTE EMAIL */}
            <div className="bg-[#0F172A]/60 border border-white/5 rounded-3xl p-5 flex items-center gap-4 shadow-xl">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="overflow-hidden">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold">Email</h4>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium text-gray-200 hover:text-blue-400 transition-colors block truncate mt-0.5">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="bg-[#0F172A]/60 border border-white/5 rounded-3xl p-5 flex items-center gap-4 shadow-xl">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold">Téléphone</h4>
                <a href={`tel:${personalInfo.phone}`} className="text-sm font-medium text-gray-200 hover:text-emerald-400 transition-colors block mt-0.5">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="bg-[#0F172A]/60 border border-white/5 rounded-3xl p-5 flex items-center gap-4 shadow-xl">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-2xl shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold">Localisation</h4>
                <p className="text-sm font-medium text-gray-200 mt-0.5">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0B1224] to-[#0E172A] border border-white/5 rounded-3xl p-6 shadow-xl text-center">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mx-auto mb-2"></div>
              <p className="text-xs font-semibold text-emerald-400">Actuellement disponible pour un stage</p>
              <p className="text-[11px] text-gray-500 mt-1">Écoutons vos propositions d'intégration.</p>
            </div>

          </div>

          <div className="lg:col-span-7 bg-[#0F172A]/40 border border-white/5 rounded-3xl p-6 sm:p-8 shadow-xl">
            <form className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">Nom Complet</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#070B16] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">Adresse Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[#070B16] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">Sujet</label>
                <input 
                  type="text" 
                  placeholder="Proposition de stage / Projet..."
                  className="w-full bg-[#070B16] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Bonjour Salima, je souhaite vous proposer..."
                  className="w-full bg-[#070B16] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-6 py-3 rounded-xl transition-colors shadow-lg shadow-blue-600/10 flex items-center justify-center gap-2"
              >
                Envoyer le message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9-2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>

            </form>
          </div>

        </div>

      </div>
    </main>
  );
}