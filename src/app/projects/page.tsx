'use client'

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ProjectTile } from "@/components/ProjectTile";
import ProjectFilter from "@/components/ProjectFilter";
import CategorySelector from "@/components/CategorySelector";
import { projects } from '@/app/lib/projects';
import { Project } from '@/app/lib/types';

type Category = 'Computer Science' | 'Mechanical Engineering' | 'All';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [showAll, setShowAll] = useState(12);

  // Filter projects by discipline category
  const categoryFilteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter(project => 
      project.discipline === selectedCategory || 
      (!project.discipline && selectedCategory === 'Computer Science') // Default to CS if no discipline set
    );
  }, [selectedCategory]);

  // Reset filters when category changes
  useEffect(() => {
    setFilteredProjects(categoryFilteredProjects);
    setShowAll(12);
  }, [categoryFilteredProjects]);

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
  
  // Combine all displayed projects for the animated grid
  const allDisplayedProjects = [...featuredProjects, ...displayedRegularProjects];

  return (
    <div className="w-full px-4 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto mb-16">
        {/* Unified Header / Control Center */}
        <div className="flex flex-col items-center space-y-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-2"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio</h1>
            <p className="text-gray-500 dark:text-gray-400">Exploring the intersection of code and hardware.</p>
          </motion.div>
          
          {/* Unified Control Center */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full max-w-3xl space-y-4 sm:space-y-6 p-4 sm:p-6 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-xl shadow-blue-500/5"
          >
            <CategorySelector 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <ProjectFilter 
              projects={categoryFilteredProjects} 
              onFilteredProjects={handleFilteredProjects}
            />
          </motion.div>
        </div>

        {/* Results Summary */}
        {allDisplayedProjects.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-8 text-center"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {allDisplayedProjects.length} of {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {filteredProjects.length !== categoryFilteredProjects.length && ` (filtered from ${categoryFilteredProjects.length} ${selectedCategory.toLowerCase()} projects)`}
            </p>
          </motion.div>
        )}

        {/* Animated Grid */}
        {allDisplayedProjects.length > 0 ? (
          <LayoutGroup>
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {allDisplayedProjects.map((project) => (
                  <motion.div
                    key={`project-${project.title}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ 
                      layout: { type: "spring", bounce: 0.2, duration: 0.6 },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.2 }
                    }}
                  >
                    <ProjectTile {...project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-500 dark:text-gray-400">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-sm">Try adjusting your search terms or filters to find what you&apos;re looking for.</p>
            </div>
          </motion.div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(prev => prev + 12)}
              className="px-8 py-3 text-lg font-medium rounded-full bg-blue-600 dark:bg-blue-500 
                         text-white hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105 
                         transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              Load More
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
