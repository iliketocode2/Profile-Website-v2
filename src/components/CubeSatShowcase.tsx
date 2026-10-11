'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const SITE_URL = 'https://tufts-cubesat.vercel.app/';
const GITHUB_URL = 'https://github.com/Tufts-CubeSat';

const MISSION_STATS = [
  { value: '2U', label: 'CubeSat' },
  { value: 'LEO', label: 'Orbit' },
  { value: '14 mo', label: 'Mission' },
  { value: '2029', label: 'Target launch' },
];

export default function CubeSatShowcase() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '80px' }}
      transition={{ duration: 0.4 }}
      className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">SPACE RACCOON</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Project Lead · Tufts CubeSat Team</p>
        </div>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Tufts CubeSat on GitHub"
        >
          <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </a>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        We're building a 2U CubeSat that uses onboard computer vision and machine learning to detect, classify, and
        assess the collision risk of space debris in Low Earth Orbit. Our flight software and debris
        data are all open source. Many thanks to CMU's Argus project which has served as our starting place.
      </p>

      <ul className="flex flex-wrap gap-x-6 gap-y-1.5 mb-4">
        {MISSION_STATS.map((stat) => (
          <li key={stat.label} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span>
              <span className="font-semibold">{stat.value}</span> {stat.label.toLowerCase()}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
        <a
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          Team Website
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  );
}
