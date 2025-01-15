'use client'

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from '@/app/lib/projects';

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projects : projects.slice(0, 4);
  
    return (
      <div className="w-full px-4 py-8">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
        {!showAll && projects.length > 4 && (
          <button
            onClick={() => setShowAll(true)}
            className="mx-auto mt-8 px-6 py-3 text-xl font-normal rounded-full bg-blue-100 dark:bg-blue-800 text-gray-900 dark:text-white hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          >
            Load More
          </button>
        )}
      </div>
    );
  }