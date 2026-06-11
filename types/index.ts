

export interface Project{
    id:string;
    title: string;
    description:string;
    stack:string [];
    githubUrl:string;
    demoUrl:string;
    isFeatured?:boolean;
}

export interface ExperienceOrEducation {
  id: string;
  title: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: 'Front-End' | 'Back-End' | 'Outils & Méthodologies';
}