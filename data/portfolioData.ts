// data/portfolioData.ts
import { Project } from '@/types';

export const personalInfo = {
  name: 'Salima Sahi',
  title: 'Développeuse Web Full Stack',
  bio: "Développeuse Web Full Stack diplômée en développement digital, je crée des applications web modernes et performantes. Je maîtrise les technologies front-end et back-end telles que React.js, Laravel, Node.js, et les bases de données SQL/NoSQL.",
  email: 'sahisalima77@gmail.com',
  phone: '+212 779457043',
  github: 'https://github.com/shsalima',
  linkedin: 'https://linkedin.com/in/salima-sahi',
  location: 'Béni Mellal, Maroc',
};

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Smart Invoice',
    description: 'Application de gestion des factures avec authentification JWT, gestion globale des données, routing protégé et consommation d’API REST, incluant fournisseurs, factures, paiements et dashboard analytique.',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Context API', 'React Router', 'JWT'],
    githubUrl: 'https://github.com/shsalima/smart-invoice-payment-tracking',
    demoUrl: '#',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'GameExplorer',
    description: 'Application SPA de découverte de jeux vidéo avec consommation d’API externe (RAWG), routing dynamique, recherche, filtres, pagination et gestion des états asynchrones.',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'React Router', 'API RAWG'],
    githubUrl: 'https://github.com/shsalima/game-explorer',
    demoUrl: '#',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'FilmVault',
    description: 'Application Web de Gestion de Films avec fonctionnalités CRUD, système de notation, filtres dynamiques et sauvegarde des données via localStorage dans une interface moderne.',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'LocalStorage'],
    githubUrl: 'https://github.com/shsalima/FILM-VAULT',
    demoUrl: '#',
    isFeatured: true,
  }
];