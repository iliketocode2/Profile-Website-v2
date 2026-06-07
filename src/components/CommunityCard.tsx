'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { CommunityContribution } from '@/app/lib/impact';

export default function CommunityCard({
  name,
  description,
  highlights,
  repoUrl,
  links,
}: CommunityContribution) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '80px' }}
      transition={{ duration: 0.4 }}
      className="flex flex-col h-full p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label={`${name} on GitHub`}
        >
          <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </a>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">{description}</p>

      <ul className="space-y-1.5 mb-4">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
          >
            <span className="text-blue-500 mt-1">•</span>
            {highlight}
          </li>
        ))}
      </ul>

      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}
