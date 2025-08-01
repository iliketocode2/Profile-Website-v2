'use client'

import { useState, useEffect, useCallback } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import { projects } from '@/app/lib/projects';
import { Project } from '@/app/lib/types';

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [showAll, setShowAll] = useState(4);

  // Reset showAll when filters change
  useEffect(() => {
    setShowAll(4);
  }, [filteredProjects]);

  const displayedProjects = filteredProjects.slice(0, showAll);

  const handleFilteredProjects = useCallback((filtered: Project[]) => {
    setFilteredProjects(filtered);
  }, []);

  return (
    <div className="w-full px-4 py-8">
      {/* Filter Component */}
      <ProjectFilter 
        projects={projects} 
        onFilteredProjects={handleFilteredProjects}
      />

      {/* Results Summary */}
      <div className="max-w-4xl mx-auto mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {Math.min(showAll, filteredProjects.length)} of {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          {filteredProjects.length !== projects.length && ` (filtered from ${projects.length} total)`}
        </p>
      </div>

      {/* Projects Display */}
      {displayedProjects.length > 0 ? (
        <>
          {displayedProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} />
          ))}
          
          {/* Load More Button */}
          {showAll < filteredProjects.length && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowAll(prev => prev + 4)}
                className="px-6 py-3 text-xl font-normal rounded-full bg-blue-100 dark:bg-blue-800 
                           text-gray-900 dark:text-white hover:scale-105 transition-transform duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 max-w-4xl mx-auto">
          <div className="text-gray-500 dark:text-gray-400">
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-sm">Try adjusting your search terms or filters to find what you&apos;re looking for.</p>
          </div>
        </div>
      )}
    </div>
  );
}