export interface Project {
  title: string;
  date: string;
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
  