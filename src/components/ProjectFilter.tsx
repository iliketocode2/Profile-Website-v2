'use client'

import { useState, useEffect } from 'react';
import { Search, X, Filter } from 'lucide-react';
import { Project } from '@/app/lib/types';

interface ProjectFilterProps {
  projects: Project[];
  onFilteredProjects: (projects: Project[]) => void;
}

export default function ProjectFilter({ projects, onFilteredProjects }: ProjectFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique values for filter options (only non-empty technologies)
  const allTechnologies = Array.from(new Set(projects.flatMap(p => 
    p.tags.technologies.map(tech => {
      // Normalize CSS and Tailwind CSS to just "CSS"
      if (tech === "Tailwind CSS") return "CSS";
      return tech;
    })
  )))
    .filter(tech => tech.length > 0)
    .sort();
  const allCategories = Array.from(new Set(projects.flatMap(p => p.tags.categories))).sort();

  // Filter projects based on current filters
  useEffect(() => {
    let filtered = projects;

    // Text search
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.tags.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Technology filters (inclusive - OR logic)
    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter(project =>
        selectedTechnologies.some(selectedTech => 
          project.tags.technologies.some(projectTech => {
            // Handle CSS normalization
            const normalizedProjectTech = projectTech === "Tailwind CSS" ? "CSS" : projectTech;
            return normalizedProjectTech === selectedTech;
          })
        )
      );
    }

    // Category filters (inclusive - OR logic)
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(project =>
        selectedCategories.some(cat => project.tags.categories.includes(cat))
      );
    }

    onFilteredProjects(filtered);
  }, [searchTerm, selectedTechnologies, selectedCategories, projects, onFilteredProjects]);

  // Show all projects by default when no filters are applied
  useEffect(() => {
    if (!searchTerm && selectedTechnologies.length === 0 && selectedCategories.length === 0) {
      onFilteredProjects(projects);
    }
  }, [projects, searchTerm, selectedTechnologies.length, selectedCategories.length, onFilteredProjects]);

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedTechnologies([]);
    setSelectedCategories([]);
  };

  const activeFiltersCount = selectedTechnologies.length + selectedCategories.length + (searchTerm ? 1 : 0);

  return (
    <div className="w-full">
      {/* Search Bar and Filter Button Row */}
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm 
                         border border-gray-200/50 dark:border-gray-700/50 rounded-xl
                         text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 
                         focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200"
            />
          </div>

          {/* Filter Toggle Button and Clear All */}
          <div className="flex gap-2 sm:flex-shrink-0 items-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl 
                         transition-all duration-200 whitespace-nowrap ${
                showFilters
                  ? 'bg-white/80 dark:bg-gray-800/80 text-blue-600 dark:text-blue-400 border border-gray-200/50 dark:border-gray-700/50 shadow-sm'
                  : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80'
              }`}
            >
              <Filter className="h-4 w-4" />
              Filters {activeFiltersCount > 0 && <span className="ml-1 text-blue-600 dark:text-blue-400">({activeFiltersCount})</span>}
            </button>
            
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="px-4 py-2.5 text-sm font-medium text-gray-500 dark:text-gray-400 
                           hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 whitespace-nowrap"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="space-y-4">
            {/* Technologies */}
            {allTechnologies.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {allTechnologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => toggleTechnology(tech)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 ${
                        selectedTechnologies.includes(tech)
                          ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-sm'
                          : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Categories */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 ${
                      selectedCategories.includes(category)
                        ? 'bg-green-600 dark:bg-green-500 text-white shadow-sm'
                        : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm 
                            border border-gray-200/50 dark:border-gray-700/50 rounded-xl text-xs text-gray-700 dark:text-gray-300">
                <span>Search: &quot;{searchTerm}&quot;</span>
                <button onClick={() => setSearchTerm('')} className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {selectedTechnologies.map((tech) => (
              <div key={tech} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-100/80 dark:bg-blue-900/50 
                                       backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 
                                       text-blue-800 dark:text-blue-200 rounded-xl text-xs">
                <span>{tech}</span>
                <button onClick={() => toggleTechnology(tech)} className="hover:text-blue-900 dark:hover:text-blue-100 transition-colors">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
            {selectedCategories.map((cat) => (
              <div key={cat} className="flex items-center gap-1.5 px-3 py-1.5 bg-green-100/80 dark:bg-green-900/50 
                                      backdrop-blur-sm border border-green-200/50 dark:border-green-700/50 
                                      text-green-800 dark:text-green-200 rounded-xl text-xs">
                <span>{cat}</span>
                <button onClick={() => toggleCategory(cat)} className="hover:text-green-900 dark:hover:text-green-100 transition-colors">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}