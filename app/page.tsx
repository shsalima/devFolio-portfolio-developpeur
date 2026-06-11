import ProjectCard from '@/components/ProjectCard';
import { personalInfo, projectsData } from '@/data/projects';
import Link from 'next/link';

export default function HomePage() {
  const featuredProjects = projectsData.filter(p => p.isFeatured);

  return (
    <main className="min-h-screen bg-[#070B16] text-white pb-20">
      
      <div className="max-w-6xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0B1224] via-[#0E172A] to-[#152244] rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-white shadow-2xl border border-white/5">
          
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium text-blue-400 mb-6 border border-white/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Disponible pour un stage ou opportunités
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
            Bonjour, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-300 font-semibold mb-6">
            {personalInfo.title}
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-3xl font-light leading-relaxed mb-8">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/portfolio" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20">
              Voir mes projets
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center bg-white/5 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 border border-white/10">
              Me contacter
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="bg-[#0F172A] p-5 rounded-2xl border border-white/5 shadow-xl flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl font-bold text-lg">&lt;/&gt;</div>
            <div>
              <h4 className="font-bold text-white text-sm">Code de qualité</h4>
              <p className="text-xs text-gray-400 mt-1">Conçu proprement en TypeScript/JavaScript, typé et bien structuré.</p>
            </div>
          </div>

          <div className="bg-[#0F172A] p-5 rounded-2xl border border-white/5 shadow-xl flex items-start gap-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl font-bold text-lg">&gt;_</div>
            <div>
              <h4 className="font-bold text-white text-sm">Stack Moderne MERN / PHP</h4>
              <p className="text-xs text-gray-400 mt-1">Maîtrise de React.js, Node.js, Express, Laravel et bases de données SQL/NoSQL.</p>
            </div>
          </div>

          <div className="bg-[#0F172A] p-5 rounded-2xl border border-white/5 shadow-xl flex items-start gap-4">
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl font-bold text-lg">📊</div>
            <div>
              <h4 className="font-bold text-white text-sm">Gestion de Projet Agile</h4>
              <p className="text-xs text-gray-400 mt-1">Expérience pratique avec Trello, Git, et méthodologies Scrum (Rôle Scrum Master).</p>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Projets mis en avant</h2>
            <p className="text-sm text-gray-400 mt-1">Découvrez un aperçu rapide de mes meilleures réalisations.</p>
          </div>
          <Link href="/portfolio" className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
            Tous les projets 
            <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

    </main>
  );
}