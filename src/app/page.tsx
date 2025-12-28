import { projects } from '@/app/lib/projects';
import HomeClient from '@/components/HomeClient';

export default function Home() {
  const featuredProjectTitles = [
    "Technologies and Designs for Remote Robotics Competition",
    "MealPlanGuru"
  ];
  
  const featuredProjects = projects.filter(project => 
    featuredProjectTitles.includes(project.title)
  );

  return <HomeClient featuredProjects={featuredProjects} />;
}