// data/portfolioData.ts
import { Project, ExperienceOrEducation, Skill } from '@/types';

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
    demoUrl: '#', // fictive URL comme demandé par le brief
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

export const educationData: ExperienceOrEducation[] = [
  {
    id: 'edu-1',
    title: 'Développement Web Full Stack MERN',
    institution: 'École Numérique Ahmed AL HANSALI',
    location: 'Béni Mellal',
    period: '11/2025 - 09/2026',
    description: 'Formation intensive axée sur l’écosystème JavaScript moderne, architecture MVC et création d’APIs sécurisées.',
  },
  {
    id: 'edu-2',
    title: 'Développement Digital, Option Web Full Stack',
    institution: 'ISTA NTIC Béni Mellal',
    location: 'Béni Mellal',
    period: '2023 - 2025',
    description: 'Diplôme de Technicien Spécialisé couvrant les fondamentaux du génie logiciel, intégration responsive et bases de données.',
  }
];

export const skillsData: Skill[] = [
  // Front-End
  { name: 'JavaScript', level: 'avancé', category: 'Front-End' },
  { name: 'React.js', level: 'avancé', category: 'Front-End' },
  { name: 'Tailwind CSS', level: 'avancé', category: 'Front-End' },
  { name: 'HTML5 / CSS3', level: 'avancé', category: 'Front-End' },
  { name: 'Bootstrap', level: 'intermédiaire', category: 'Front-End' },
  { name: 'Node.js (Express.js)', level: 'intermédiaire', category: 'Back-End' },
  { name: 'PHP (Laravel)', level: 'intermédiaire', category: 'Back-End' },
  { name: 'Python', level: 'débutant', category: 'Back-End' },
  { name: 'MySQL', level: 'intermédiaire', category: 'Back-End' },
  { name: 'MongoDB', level: 'intermédiaire', category: 'Back-End' },
  { name: 'Git / GitHub', level: 'avancé', category: 'Outils & Méthodologies' },
  { name: 'Figma (UI/UX)', level: 'intermédiaire', category: 'Outils & Méthodologies' },
  { name: 'Agile / Scrum', level: 'intermédiaire', category: 'Outils & Méthodologies' },
  { name: 'Postman', level: 'avancé', category: 'Outils & Méthodologies' },
];