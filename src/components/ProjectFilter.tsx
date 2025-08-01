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
  const filterProjects = () => {
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
  };

  // Apply filters whenever dependencies change
  useEffect(() => {
    filterProjects();
  }, [searchTerm, selectedTechnologies, selectedCategories, projects]);

  // Show all projects by default when no filters are applied
  useEffect(() => {
    if (!searchTerm && selectedTechnologies.length === 0 && selectedCategories.length === 0) {
      onFilteredProjects(projects);
    }
  }, [projects]);

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
    <div className="w-full max-w-4xl mx-auto mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      {/* Search Bar and Filter Button Row */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filter Toggle Button and Clear All */}
        <div className="flex gap-2 sm:flex-shrink-0">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 
                       bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 
                       transition-colors duration-200 whitespace-nowrap"
          >
            <Filter className="h-4 w-4" />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>
          
          {activeFiltersCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 
                         px-3 py-2 whitespace-nowrap"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="space-y-4 border-t border-gray-200 dark:border-gray-600 pt-4">
          {/* Technologies */}
          {allTechnologies.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-1.5">
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => toggleTechnology(tech)}
                    className={`px-2.5 py-1 text-xs rounded-full transition-colors duration-200 ${
                      selectedTechnologies.includes(tech)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
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
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Categories</h3>
            <div className="flex flex-wrap gap-1.5">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-2.5 py-1 text-xs rounded-full transition-colors duration-200 ${
                    selectedCategories.includes(category)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
          <div className="flex flex-wrap gap-1.5">
            {searchTerm && (
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-xs">
                <span>Search: "{searchTerm}"</span>
                <button onClick={() => setSearchTerm('')}>
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {selectedTechnologies.map((tech) => (
              <div key={tech} className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                <span>{tech}</span>
                <button onClick={() => toggleTechnology(tech)}>
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
            {selectedCategories.map((cat) => (
              <div key={cat} className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                <span>{cat}</span>
                <button onClick={() => toggleCategory(cat)}>
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