import { projects } from '@/app/lib/projects';
import HomeClient from '@/components/HomeClient';

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured);

  return <HomeClient featuredProjects={featuredProjects} />;
}
