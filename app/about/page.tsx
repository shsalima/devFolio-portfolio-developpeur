import { personalInfo, educationData, experienceData } from '@/data/projects'; 

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070B16] text-white pb-20 pt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">À propos de moi</h1>
          <p className="text-sm text-gray-400 max-w-2xl">
            Découvrez mon parcours académique, mes expériences professionnelles et la passion qui anime mon travail au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          <div className="lg:col-span-4 bg-[#0F172A] border border-white/5 rounded-3xl p-6 shadow-xl flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-purple-500/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            
            <h2 className="text-xl font-bold text-white">{personalInfo.name}</h2>
            <p className="text-xs text-blue-400 font-medium mt-1 mb-6">{personalInfo.title}</p>
            
            <div className="w-full space-y-3 text-left text-xs text-gray-400 border-t border-white/5 pt-4 mb-6">
              <div className="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{personalInfo.location}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-emerald-400 font-medium">Disponible pour un Stage</span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Fullstack (React, Node, PHP)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full mt-auto">
              <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">3</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-0.5">Projets</p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">MERN</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-0.5">Core Stack</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#0F172A] border border-white/5 rounded-3xl p-8 shadow-xl flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              <h3 className="text-lg font-bold text-white">Ma philosophie de développement</h3>
            </div>
            <div className="text-sm text-gray-300 space-y-4 leading-relaxed">
              <p>{personalInfo.bio}</p>
              <p>
                Ma double compétence sur le Frontend (<span className="text-blue-400 font-medium">React, JavaScript, Tailwind</span>) et le Backend (<span className="text-emerald-400 font-medium">Node.js, Express, Laravel, MySQL</span>) me confère une vision transverse indispensable à la conduite de projets web complexes. J'adore concevoir des interfaces utilisateur élégantes et performantes tout en assurant une architecture robuste et sécurisée côté serveur.
              </p>
              <p>
                Actuellement en fin de cycle de formation, je cherche à intégrer une équipe dynamique sous forme de <span className="text-purple-400 font-semibold">stage pratique</span> afin de mettre mes compétences au service de projets concrets et d'accélérer mon évolution professionnelle.
              </p>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-bold text-white">Expériences Professionnelles</h3>
            </div>
            <div className="space-y-4 relative border-l border-white/10 pl-4 ml-2">
              {experienceData.map((exp) => (
                <div key={exp.id} className="relative bg-[#0F172A] border border-white/5 p-5 rounded-2xl shadow-sm">
                  <span className="absolute -left-[21px] top-6 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-[#070B16]"></span>
                  
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h4 className="font-bold text-white text-sm">{exp.title}</h4>
                    <span className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">{exp.period}</span>
                  </div>
                  <p className="text-xs text-blue-400 font-medium mb-2">{exp.institution}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <svg xmlns="http://www.w3.org/2000/xl" className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
              </svg>
              <h3 className="text-lg font-bold text-white">Formations & Cursus</h3>
            </div>
            <div className="space-y-4 relative border-l border-white/10 pl-4 ml-2">
              {educationData.map((edu) => (
                <div key={edu.id} className="relative bg-[#0F172A] border border-white/5 p-5 rounded-2xl shadow-sm">
                  <span className="absolute -left-[21px] top-6 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-[#070B16]"></span>
                  
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h4 className="font-bold text-white text-sm">{edu.title}</h4>
                    <span className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">{edu.period}</span>
                  </div>
                  <p className="text-xs text-emerald-400 font-medium mb-2">{edu.institution} — <span className="text-gray-500">{edu.location}</span></p>
                  <p className="text-xs text-gray-400 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}