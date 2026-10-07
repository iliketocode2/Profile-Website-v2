'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { TimelineEntry } from '@/app/lib/impact';

const TYPE_STYLES: Record<TimelineEntry['type'], { label: string; dot: string; text: string }> = {
  award: { label: 'Award', dot: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400' },
  talk: { label: 'Talk', dot: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400' },
};

function TypeLabel({ type }: { type: TimelineEntry['type'] }) {
  const style = TYPE_STYLES[type];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${style.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {style.label}
    </span>
  );
}

export default function ContributionsTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="max-w-3xl mx-auto border-t border-gray-200 dark:border-gray-800">
      {entries.map((entry, index) => (
        <motion.li
          key={`${entry.title}-${entry.sortDate}`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '40px' }}
          transition={{ duration: 0.35, delay: index * 0.04 }}
          className="grid grid-cols-1 sm:grid-cols-[8.5rem_1fr] gap-x-6 gap-y-1 py-5 sm:py-6 border-b border-gray-200 dark:border-gray-800"
        >
          {/* Date gutter; on phones it sits on one line above the title */}
          <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1.5 sm:pt-1">
            <time className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {entry.date}
            </time>
            <TypeLabel type={entry.type} />
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{entry.title}</h3>
            {entry.subtitle && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{entry.subtitle}</p>
            )}
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">{entry.description}</p>
            {entry.links && entry.links.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-3">
                {entry.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
