'use client'

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectBubbles from "@/components/ProjectBubbles";
import ProjectDetail from "@/components/ProjectDetail";
import { DISCIPLINES } from "@/components/DisciplineMark";
import { projects } from '@/app/lib/projects';
import { Project } from '@/app/lib/types';

type Filter = 'All' | 'Computer Science' | 'Mechanical Engineering';

const FILTERS: { value: Filter; label: string; swatch?: string }[] = [
  { value: 'All', label: 'All' },
  { value: 'Computer Science', label: 'CS', swatch: DISCIPLINES['Computer Science'].swatch },
  { value: 'Mechanical Engineering', label: 'MechE', swatch: DISCIPLINES['Mechanical Engineering'].swatch },
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
    <div className="w-full pt-12 sm:pt-16 pb-8">
      <div>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-10">
          <div>
            <h1 className="display text-5xl sm:text-6xl font-black text-ink">Projects</h1>
            <p className="mt-3 text-[15px] text-graphite">Newest at the top. Select a project to see details.</p>
          </div>

          <div role="radiogroup" aria-label="Filter projects by discipline" className="inline-flex self-start sm:self-auto border-[1.5px] border-ink rounded-[3px] p-0.5">
            {FILTERS.map(({ value, label, swatch }) => {
              const active = filter === value;
              return (
                <button
                  key={value}
                  role="radio"
                  aria-checked={active}
                  onClick={() => setFilter(value)}
                  className={`relative inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-[2px] transition-colors ${
                    active ? 'text-frame' : 'text-graphite hover:text-ink'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 rounded-[2px] bg-ink"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  {swatch && <span className={`relative h-2 w-2 ${swatch}`} aria-hidden />}
                  <span className="relative">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <ProjectBubbles projects={visibleProjects} onSelect={setSelected} />
      </div>

      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
