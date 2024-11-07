export interface Post {
    title: string;
    image: string;
    date: string;
    likes: number;
    description: string;
    techStack: string[];
    githubLink: string;
  }
  
  export interface Certificate {
    title: string;
    issuer: string;
    date: string;
    image: string;
    link: string;
  }
  
  export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
    achievements: string[];
  }
  
  export interface Highlight {
    id: number;
    title: string;
    image: string;
    content: string;
  }
  
  export interface Skill {
    name: string;
    level: number;
  }