'use client';

import { motion } from 'framer-motion';
import { Award, Mic } from 'lucide-react';
import { TimelineEntry } from '@/app/lib/impact';

const connectorClass = 'w-0.5 bg-gray-300 dark:bg-gray-700 shrink-0';

function TimelineIcon({ type }: { type: TimelineEntry['type'] }) {
  const Icon = type === 'award' ? Award : Mic;
  const colorClass =
    type === 'award'
      ? 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800'
      : 'bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800';

  return (
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 shrink-0 ${colorClass}`}
    >
      <Icon className="h-4 w-4" />
    </div>
  );
}

function EntryContent({
  entry,
  align = 'left',
}: {
  entry: TimelineEntry;
  align?: 'left' | 'right';
}) {
  const alignClass = align === 'right' ? 'sm:text-right' : '';

  return (
    <div className={alignClass}>
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
            align === 'right' ? 'sm:justify-end' : 'sm:justify-start'
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
  );
}

function TimelineSpine({
  type,
  showTopConnector,
  showBottomConnector,
}: {
  type: TimelineEntry['type'];
  showTopConnector: boolean;
  showBottomConnector: boolean;
}) {
  return (
    <div className="flex flex-col items-center self-stretch">
      {showTopConnector && <div className={`${connectorClass} h-10`} />}
      <TimelineIcon type={type} />
      {showBottomConnector && <div className={`${connectorClass} flex-1 min-h-6`} />}
    </div>
  );
}

export default function ContributionsTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      {entries.map((entry, index) => {
        const isEven = index % 2 === 0;
        const isFirst = index === 0;
        const isLast = index === entries.length - 1;

        return (
          <motion.div
            key={`${entry.title}-${entry.sortDate}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px' }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {/* Mobile */}
            <div className="flex gap-4 sm:hidden">
              <TimelineSpine
                type={entry.type}
                showTopConnector={!isFirst}
                showBottomConnector={!isLast}
              />
              <div className="flex-1 pb-2">
                <EntryContent entry={entry} />
              </div>
            </div>

            {/* Desktop — alternating columns with centered spine */}
            <div className="hidden sm:grid sm:grid-cols-[1fr_2.5rem_1fr] sm:gap-x-8 sm:items-stretch">
              <div className="pr-4">{isEven ? <EntryContent entry={entry} align="right" /> : null}</div>
              <TimelineSpine
                type={entry.type}
                showTopConnector={!isFirst}
                showBottomConnector={!isLast}
              />
              <div className="pl-4">{!isEven ? <EntryContent entry={entry} /> : null}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
