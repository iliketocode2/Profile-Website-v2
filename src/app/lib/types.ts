export interface SubProject {
  title: string;
  date: string;
  description: string;
}

export type BubbleSize = 'xl' | 'lg' | 'md' | 'sm';

export interface Project {
  title: string;
  date: string;
  sortDate: string; // "YYYY-MM", used to order the projects page newest first
  size?: BubbleSize; // Bubble size on the projects page (default 'md')
  description: string;
  imageUrl: string;
  images?: string[]; // Optional array of additional images for gallery/carousel
  links?: { label: string; url: string; isGithub?: boolean }[];
  tags: {
    technologies: string[];
    categories: string[];
  };
  academicProject?: boolean;
  featured?: boolean;
  discipline?: 'Computer Science' | 'Mechanical Engineering';
  pdfUrl?: string; // Optional PDF report URL for detailed project pages
  slug?: string; // Optional slug for routing to detail page
  subProjects?: SubProject[]; // Optional array of sub-projects for grouped academic projects
}
  
export interface Hobby {
  title: string;
  image: string;
  description: string;
}

export interface StackItem {
  name: string;
  category?: string;
  description?: string;
}

export interface StackCategory {
  title: string;
  items: StackItem[];
}
  