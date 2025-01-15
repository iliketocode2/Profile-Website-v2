// export interface Project {
//     title: string;
//     date: string;
//     description: string;
//     imageUrl: string;
//     link?: string;
//   }

export interface Project {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  links?: { label: string; url: string; isGithub?: boolean }[];
}
  
export interface Hobby {
  title: string;
  image: string;
  description: string;
}
  