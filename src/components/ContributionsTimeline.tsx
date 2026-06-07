'use client';

import { motion } from 'framer-motion';
import { Award, Mic } from 'lucide-react';
import { TimelineEntry } from '@/app/lib/impact';

function TimelineIcon({ type }: { type: TimelineEntry['type'] }) {
  const Icon = type === 'award' ? Award : Mic;
  const colorClass =
    type === 'award'
      ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800'
      : 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800';

  return (
    <div
      className={`absolute left-0 sm:left-1/2 sm:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 ${colorClass}`}
    >
      <Icon className="h-4 w-4" />
    </div>
  );
}

export default function ContributionsTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 sm:-translate-x-px" />

      <div className="space-y-10">
        {entries.map((entry, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={`${entry.title}-${entry.sortDate}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '60px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative pl-16 sm:pl-0"
            >
              <TimelineIcon type={entry.type} />

              <div
                className={`sm:w-[calc(50%-2rem)] ${
                  isEven ? 'sm:mr-auto sm:pr-8 sm:text-right' : 'sm:ml-auto sm:pl-8'
                }`}
              >
                <span
                  className={`inline-block text-xs font-semibold uppercase tracking-wider mb-1 ${
                    entry.type === 'award'
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-purple-600 dark:text-purple-400'
                  }`}
                >
                  {entry.type === 'award' ? 'Award' : 'Talk'} · {entry.date}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{entry.title}</h3>
                {entry.subtitle && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{entry.subtitle}</p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  {entry.description}
                </p>
                {entry.links && entry.links.length > 0 && (
                  <div
                    className={`flex flex-wrap gap-3 mt-3 ${
                      isEven ? 'sm:justify-end' : 'sm:justify-start'
                    }`}
                  >
                    {entry.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
