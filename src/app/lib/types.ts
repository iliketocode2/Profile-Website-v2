export interface Project {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  links?: { label: string; url: string; isGithub?: boolean }[];
  tags: {
    technologies: string[];
    categories: string[];
  };
  academicProject?: boolean;
  featured?: boolean;
  discipline?: 'Computer Science' | 'Mechanical Engineering';
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
  