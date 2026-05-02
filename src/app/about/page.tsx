'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const BIO_PARAGRAPHS = [
  `Hi, I'm Will! I'm a sophomore at Tufts University studying Mechanical \
Engineering and Computer Science. In addition to my studies, I work as a \
research technology intern at Tufts Technology Services (TTS) and I serve \
as the captain of the Tufts CubeSat team, where I lead a group of students \
in designing and building a small satellite. Some of my current interests \
include web development, cybersecurity, aerospace engineering, and robotics.`,

  `I learn quickly and enjoy working with others, or independently on smaller \
projects. I've worked across the full stack on web-based projects and have \
recently been building systems that connect software and hardware through \
UART, BLE, and serial connection. On the mechanical side, I've led a \
competition robotics team (FTC Team 5276), contributing to CAD modeling, \
machining, simulation, and systems integration in addition to my current \
work as the CubeSat lead.`,

  `In my free time, I enjoy watching Chelsea FC, building with LEGO, and \
skiing whenever I get the chance. Feel free to reach out if you'd like to \
collaborate on a project or just chat about tech, engineering, or anything \
else!`,
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-2 sm:px-6 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={[
          'text-3xl sm:text-4xl font-bold mb-2',
          'text-gray-900 dark:text-white',
        ].join(' ')}
      >
        About
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-8"
      >
        <a
          href="mailto:William.Goldman@tufts.edu"
          className={[
            'inline-flex items-center gap-2 text-sm',
            'text-gray-600 dark:text-gray-400',
            'hover:text-blue-600 dark:hover:text-blue-400',
            'transition-colors duration-200',
          ].join(' ')}
        >
          <Mail className="w-4 h-4" />
          <span>William.Goldman@tufts.edu</span>
        </a>
      </motion.div>

      <div
        className={[
          'space-y-6 bg-white/60 dark:bg-gray-900/60',
          'backdrop-blur-sm rounded-xl p-6',
        ].join(' ')}
      >
        {BIO_PARAGRAPHS.map((text, i) => (
          <motion.p
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className={[
              'text-lg leading-relaxed',
              'text-gray-800 dark:text-gray-200',
            ].join(' ')}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
