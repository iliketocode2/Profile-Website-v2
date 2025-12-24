'use client'

import { useState, useEffect, useCallback } from "react";
import { ProjectTile } from "@/components/ProjectTile";
import ProjectFilter from "@/components/ProjectFilter";
import { projects } from '@/app/lib/projects';
import { Project } from '@/app/lib/types';

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [showAll, setShowAll] = useState(12);

  // Reset showAll when filters change
  useEffect(() => {
    setShowAll(12);
  }, [filteredProjects]);

  const handleFilteredProjects = useCallback((filtered: Project[]) => {
    setFilteredProjects(filtered);
  }, []);

  // Separate featured and regular projects
  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);
  const displayedRegularProjects = regularProjects.slice(0, showAll - featuredProjects.length);
  const hasMore = regularProjects.length > displayedRegularProjects.length;

  return (
    <div className="w-full px-4 py-8">
      {/* Integrated Filter Component */}
      <div className="max-w-7xl mx-auto mb-8">
        <ProjectFilter 
          projects={projects} 
          onFilteredProjects={handleFilteredProjects}
        />
      </div>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectTile key={`featured-${project.title}-${index}`} {...project} />
            ))}
          </div>
        </div>
      )}

      {/* All Projects Section */}
      {(featuredProjects.length > 0 || regularProjects.length > 0) && (
        <div className="max-w-7xl mx-auto">
          {featuredProjects.length > 0 && (
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              All Projects
            </h2>
          )}
          
          {/* Results Summary */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {featuredProjects.length + displayedRegularProjects.length} of {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {filteredProjects.length !== projects.length && ` (filtered from ${projects.length} total)`}
            </p>
          </div>

          {/* Projects Grid */}
          {displayedRegularProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {displayedRegularProjects.map((project, index) => (
                  <ProjectTile key={`regular-${project.title}-${index}`} {...project} />
                ))}
              </div>
              
              {/* Load More Button */}
              {hasMore && (
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowAll(prev => prev + 12)}
                    className="px-6 py-3 text-lg font-normal rounded-full bg-blue-100 dark:bg-blue-800 
                               text-gray-900 dark:text-white hover:scale-105 transition-transform duration-300"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          ) : featuredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 dark:text-gray-400">
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className="text-sm">Try adjusting your search terms or filters to find what you&apos;re looking for.</p>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
