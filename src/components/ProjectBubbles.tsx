'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { layoutBubbles } from '@/app/lib/bubbleLayout';
import { Project } from '@/app/lib/types';

const RING_CLASS = {
  'Computer Science': 'ring-blue-500/70',
  'Mechanical Engineering': 'ring-green-500/70',
} as const;

export default function ProjectBubbles({
  projects,
  onSelect,
}: {
  projects: Project[];
  onSelect: (project: Project) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.round(entry.contentRect.width));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const { bubbles, height } = useMemo(() => layoutBubbles(projects, width), [projects, width]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: width ? height : '60vh' }}>
      <AnimatePresence>
        {bubbles.map(({ project, x, y, r }, index) => {
          const isLarge = project.size === 'xl' || project.size === 'lg';
          const ring = RING_CLASS[project.discipline ?? 'Computer Science'];
          return (
            <motion.button
              key={project.title}
              type="button"
              onClick={() => onSelect(project)}
              aria-label={`${project.title} — open details`}
              className={`group absolute rounded-full overflow-hidden shadow-lg ring-2 ${ring} bg-gray-200 dark:bg-gray-800 hover:z-20 focus-visible:z-20 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500`}
              initial={{ opacity: 0, scale: 0.6, left: x - r, top: y - r, width: r * 2, height: r * 2 }}
              animate={{ opacity: 1, scale: 1, left: x - r, top: y - r, width: r * 2, height: r * 2 }}
              exit={{ opacity: 0, scale: 0.6 }}
              whileHover={reduceMotion ? undefined : { scale: 1.08 }}
              whileFocus={reduceMotion ? undefined : { scale: 1.08 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      type: 'spring',
                      stiffness: 260,
                      damping: 26,
                      opacity: { duration: 0.3, delay: Math.min(index * 0.025, 0.5) },
                    }
              }
            >
              <Image
                src={project.imageUrl}
                alt=""
                fill
                sizes={`${Math.ceil(r * 2)}px`}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span
                className={`absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/75 via-black/20 to-transparent px-[12%] pb-[16%] transition-opacity duration-200 ${
                  isLarge ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
                }`}
              >
                <span className="text-center text-white font-semibold leading-tight line-clamp-2 text-[11px] sm:text-sm">
                  {project.title}
                </span>
              </span>
            </motion.button>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
