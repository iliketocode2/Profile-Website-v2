'use client'

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectBubbles from "@/components/ProjectBubbles";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from '@/app/lib/projects';
import { Project } from '@/app/lib/types';

type Filter = 'All' | 'Computer Science' | 'Mechanical Engineering';

const FILTERS: { value: Filter; label: string; dot?: string }[] = [
  { value: 'All', label: 'All' },
  { value: 'Computer Science', label: 'CS', dot: 'bg-blue-500' },
  { value: 'Mechanical Engineering', label: 'MechE', dot: 'bg-green-500' },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const visibleProjects = useMemo(() => {
    if (filter === 'All') return projects;
    // Projects without a discipline are software/research work, so they count as CS
    return projects.filter((p) => (p.discipline ?? 'Computer Science') === filter);
  }, [filter]);

  return (
    <div className="w-full pt-6 pb-8 sm:pt-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center gap-4 mb-6 sm:mb-8"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Projects</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Newest at the top. Click a bubble to learn more.</p>
          </div>

          <div role="radiogroup" aria-label="Filter projects by discipline" className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
            {FILTERS.map(({ value, label, dot }) => {
              const active = filter === value;
              return (
                <button
                  key={value}
                  role="radio"
                  aria-checked={active}
                  onClick={() => setFilter(value)}
                  className={`relative inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    active ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 rounded-full bg-white dark:bg-gray-700 shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  {dot && <span className={`relative h-2 w-2 rounded-full ${dot}`} />}
                  <span className="relative">{label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <ProjectBubbles projects={visibleProjects} onSelect={setSelected} />
      </div>

      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
