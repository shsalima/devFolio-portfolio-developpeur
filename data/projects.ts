export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string;
  isFeatured: boolean;
}

export interface ExperienceOrEducation {
  id: string;
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: 'Front-End' | 'Back-End' | 'Outils & Méthodologies';
}

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
    title: 'CrowdFund Manager',
    description: 'Application SPA de financement participatif collaborative permettant aux porteurs de projets de créer et suivre leurs campagnes, avec une gestion fine d’état global via Redux Toolkit (Slices, Async Thunks) et sécurisation JWT.',
    stack: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'React Router', 'Axios', 'REST API'],
    githubUrl: 'https://github.com/shsalima/crowdFund-manager-',
    demoUrl: '#', 
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Digital Wallet API',
    description: 'Refactoring complet d’une API de portefeuille numérique natif vers Express.js. Architecture modulaire stricte (Routes, Contrôleurs, Middlewares métier) avec gestion de CRUD utilisateurs/wallets et opérations financières sécurisées.',
    stack: ['Node.js', 'Express.js', 'Express Router', 'JavaScript (ES6)', 'JSON DB'],
    githubUrl: 'https://github.com/shsalima/Mini_Digital_Wallet_Express',
    demoUrl: '#',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Smart Invoice',
    description: 'Application de gestion des factures avec authentification JWT, gestion globale des données, routing protégé et consommation d’API REST, incluant fournisseurs, factures, paiements et dashboard analytique.',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Context API', 'React Router', 'JWT'],
    githubUrl: 'https://github.com/shsalima/smart-invoice-payment-tracking',
    demoUrl: '#', 
    isFeatured: true,
  },
  {
    id: '4',
    title: 'GameExplorer',
    description: 'Application SPA de découverte de jeux vidéo avec consommation d’API externe (RAWG), routing dynamique, recherche, filtres, pagination et gestion des états asynchrones.',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'React Router', 'API RAWG'],
    githubUrl: 'https://github.com/shsalima/game-explorer',
    demoUrl: '#',
    isFeatured: false,
  },
  {
    id: '5',
    title: 'FilmVault',
    description: 'Application Web de Gestion de Films avec fonctionnalités CRUD, système de notation, filtres dynamiques et sauvegarde des données via localStorage dans une interface moderne.',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'LocalStorage'],
    githubUrl: 'https://github.com/shsalima/FILM-VAULT',
    demoUrl: '#',
    isFeatured: false,
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

export const experienceData: ExperienceOrEducation[] = [
  {
    id: 'exp-1',
    title: 'CrowdFund Manager - Front-End Developer',
    institution: 'Projet Collaboratif (Binôme)',
    location: 'Béni Mellal',
    period: '05/2026',
    description: 'Conception et développement de l’état global de l’application avec Redux. Intégration du routage dynamique et gestion asynchrone des requêtes API (authentification JWT et cycle de vie des campagnes).',
  },
  {
    id: 'exp-2',
    title: 'Digital Wallet - Backend Developer',
    institution: 'Projet Autonome (Individuel)',
    location: 'Béni Mellal',
    period: '02/2026',
    description: 'Création d’une API REST complète avec Express.js. Implémentation de middlewares personnalisés pour la validation de données et la gestion des règles métier strictes liées aux transactions financières.',
  },
  {
    id: 'exp-3',
    title: 'Smart Invoice - Frontend Developer',
    institution: 'Projet Académique Principal',
    location: 'Béni Mellal',
    period: '2026',
    description: 'Développement d’une application SPA de gestion des factures avec authentification JWT, gestion globale des données, routing protégé et consommation d’API REST.',
  }
];

export const skillsData: Skill[] = [
  { name: 'JavaScript', level: 'avancé', category: 'Front-End' },
  { name: 'React.js', level: 'avancé', category: 'Front-End' },
  { name: 'Redux Toolkit', level: 'avancé', category: 'Front-End' }, 
  { name: 'Tailwind CSS', level: 'avancé', category: 'Front-End' },
  { name: 'HTML5 / CSS3', level: 'avancé', category: 'Front-End' },
  { name: 'Bootstrap', level: 'intermédiaire', category: 'Front-End' },
  // Back-End
  { name: 'Node.js (Express.js)', level: 'avancé', category: 'Back-End' }, 
  { name: 'PHP (Laravel)', level: 'intermédiaire', category: 'Back-End' },
  { name: 'Python', level: 'débutant', category: 'Back-End' },
  { name: 'MySQL', level: 'intermédiaire', category: 'Back-End' },
  { name: 'MongoDB', level: 'intermédiaire', category: 'Back-End' },
  { name: 'Git / GitHub', level: 'avancé', category: 'Outils & Méthodologies' },
  { name: 'Figma (UI/UX)', level: 'intermédiaire', category: 'Outils & Méthodologies' },
  { name: 'Agile / Scrum', level: 'intermédiaire', category: 'Outils & Méthodologies' },
  { name: 'Postman', level: 'avancé', category: 'Outils & Méthodologies' },
];