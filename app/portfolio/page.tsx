import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#070B16] text-white pb-20 pt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
       
        <div className="mb-12 border-b border-white/5 pb-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-medium mb-4 border border-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Mon Portfolio
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Mes Réalisations</h1>
          <p className="text-sm text-gray-400 max-w-2xl">
            Une vitrine de mes projets académiques et personnels, illustrant mes compétences en intégration Frontend et architecture Full Stack MERN / PHP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#0B1224] to-[#0E172A] border border-white/5 rounded-3xl p-8 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-lg font-bold text-white mb-2">Vous avez un projet en tête ou une opportunité de stage ?</h3>
          <p className="text-xs text-gray-400 mb-6">Je suis ouverte aux propositions et prête à collaborer au sein de vos équipes.</p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20"
          >
            Discutons ensemble
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </main>
  );
}