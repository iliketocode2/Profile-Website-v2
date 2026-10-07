'use client';

import { motion } from 'framer-motion';
import HobbyCard from '@/components/HobbyCard';
import { hobbies } from '@/app/lib/hobbies';

const BIO_PARAGRAPHS = [
  `Hi, I'm Will! I'm a junior at Tufts University studying Mechanical Engineering and Computer Science.
  In addition to my studies, I work as a Process Automation Intern at Draper Labs
  and I serve as the captain of the Tufts CubeSat team, where I lead a group of students in designing and building a small satellite.
  Some of my current interests include web/interface development, managing compute, aerospace engineering, and robotics.`,

  `I learn quickly and enjoy working with others, or independently on smaller projects.
  I've worked across the full stack on web-based projects and have recently been building systems that connect software and hardware
  through UART, BLE, and serial connection.
  On the mechanical side, I've led a competition robotics team (FTC Team 5276), contributing to CAD modeling,
  machining, simulation, and systems integration in addition to my current work as the CubeSat lead.`,

  `In my free time, I enjoy watching Chelsea FC, building with LEGO, and skiing whenever I get the chance.
  Feel free to reach out if you'd like to collaborate on a project or just chat about tech, engineering, or anything else!`,
];

export default function About() {
  return (
    <main className="w-full pb-8">
      <section className="max-w-3xl mx-auto px-1 sm:px-4 pt-6 sm:pt-10 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          About
        </motion.h1>
        <div className="space-y-5">
          {BIO_PARAGRAPHS.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-200"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-200 dark:border-gray-700 pt-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">Outside the Lab</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 px-1 sm:px-4">
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.title} {...hobby} />
          ))}
        </div>
      </section>
    </main>
  );
}
