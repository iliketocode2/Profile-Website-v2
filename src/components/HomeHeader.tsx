'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function HomeHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center pt-8 pb-2"
    >
      <h1
        className={[
          'text-5xl sm:text-7xl font-bold font-mono',
          'uppercase leading-tight mb-4',
          'inline-block',
        ].join(' ')}
        style={{
          background: 'linear-gradient('
            + 'to right, rgb(59,130,246), rgb(34,197,94)'
            + ')',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        William Goldman
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm sm:text-base text-gray-600 dark:text-gray-400"
      >
        <a
          href="mailto:William.Goldman@tufts.edu"
          className={[
            'inline-flex items-center gap-2',
            'hover:text-blue-600 dark:hover:text-blue-400',
            'transition-colors duration-200',
          ].join(' ')}
        >
          <Mail className="w-4 h-4" />
          <span>William.Goldman@tufts.edu</span>
        </a>
      </motion.p>
    </motion.section>
  );
}
