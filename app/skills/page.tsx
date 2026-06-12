import { skillsData } from '@/data/projects';

export default function SkillsPage() {
  const frontendSkills = skillsData.filter(skill => skill.category === 'Front-End');
  const backendSkills = skillsData.filter(skill => skill.category === 'Back-End');
  const toolsSkills = skillsData.filter(skill => skill.category === 'Outils & Méthodologies');

  const getLevelStyle = (level: string) => {
    switch (level) {
      case 'avancé':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'intermédiaire':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'débutant':
      default:
        return 'bg-gray-500/10 text-gray-400 border-white/5';
    }
  };

  return (
    <main className="min-h-screen bg-[#070B16] text-white pb-20 pt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Compétences Techniques</h1>
          <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
            Mon savoir-faire s'articule autour de l'écosystème JavaScript moderne. Voici un inventaire détaillé de mes compétences classées par expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          <div className="bg-[#0F172A]/40 border border-white/5 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Frontend</h3>
                <p className="text-[11px] text-gray-500">Composants réutilisables & designs réactifs</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between bg-[#0F172A] border border-white/5 p-3.5 rounded-2xl">
                  <span className="text-xs font-semibold text-gray-200">{skill.name}</span>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-medium ${getLevelStyle(skill.level)}`}>
                    ● {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0F172A]/40 border border-white/5 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v4a2 2 0 00-2-2m-7-4h.01M11 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Backend & APIs</h3>
                <p className="text-[11px] text-gray-500">Architectures de serveurs & bases de données</p>
              </div>
            </div>

            <div className="space-y-3">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between bg-[#0F172A] border border-white/5 p-3.5 rounded-2xl">
                  <span className="text-xs font-semibold text-gray-200">{skill.name}</span>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-medium ${getLevelStyle(skill.level)}`}>
                    ● {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0F172A]/40 border border-white/5 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-purple-500/10 text-purple-400 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Outils & DevOps</h3>
                <p className="text-[11px] text-gray-500">Contrôle de version & outillage de build</p>
              </div>
            </div>

            <div className="space-y-3">
              {toolsSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between bg-[#0F172A] border border-white/5 p-3.5 rounded-2xl">
                  <span className="text-xs font-semibold text-gray-200">{skill.name}</span>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-medium ${getLevelStyle(skill.level)}`}>
                    ● {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="bg-[#0B1224] border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-2xl text-center sm:text-left">
            <h4 className="text-base font-bold text-white mb-2">Veille Technologique & Évolution constante</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Le monde tech évolue de jour en jour. En parallèle de cette sélection de compétences, je m'exerce sans cesse sur de nouveaux frameworks et concepts de programmation logicielle afin de me tenir d'attaque face aux problématiques d'aujourd'hui.
            </p>
          </div>
          <div className="bg-[#121B33] border border-white/5 rounded-2xl p-4 text-center min-w-[120px] shadow-inner flex flex-col justify-center items-center">
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">100%</span>
            <span className="text-[9px] uppercase tracking-wider text-gray-500 font-bold mt-1 block">PASSION & FOCUS</span>
          </div>
        </div>

      </div>
    </main>
  );
}