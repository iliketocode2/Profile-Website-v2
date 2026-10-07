'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/app/lib/types';
import { getProjectHref } from '@/app/lib/utils';

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const { href, external } = getProjectHref(project);
  const [datePart] = project.date.split(' | ');

  const card = (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <Image
        src={project.imageUrl}
        alt=""
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 400px"
        priority={index === 0}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      {project.discipline && (
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-gray-900 dark:text-white">
          {project.discipline === 'Computer Science' ? 'CS' : 'MechE'}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-white text-lg sm:text-xl font-semibold leading-snug">{project.title}</h3>
          <p className="text-white/75 text-xs mt-1">{datePart}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-white/80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </div>
  );

  const className =
    'group block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
      className="w-[80%] sm:w-[45%] shrink-0 snap-start lg:w-auto"
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {card}
        </a>
      ) : (
        <Link href={href} className={className}>
          {card}
        </Link>
      )}
    </motion.div>
  );
}

export default function HomeClient({ featuredProjects }: { featuredProjects: Project[] }) {
  return (
    <main className="w-full max-w-full overflow-x-hidden pb-8">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-4xl mx-auto text-center pt-8 pb-10 sm:pt-12 sm:pb-14"
      >
        <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-3">
          Builder
        </p>
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-mono uppercase leading-tight mb-6"
          style={{
            background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(34, 197, 94))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
          }}
        >
          William <br className="sm:hidden" />
          Goldman
        </h1>

        <div className="space-y-1 text-base sm:text-lg text-gray-800 dark:text-gray-200">
          <p>Process Automation Intern @ Draper</p>
          <p className="text-gray-600 dark:text-gray-400">
            Computer Science &amp; Mechanical Engineering · Tufts &apos;28
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base">
          <a
            href="mailto:William.Goldman@tufts.edu"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            <span>William.Goldman@tufts.edu</span>
          </a>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            More about me
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.section>

      <section className="w-full max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-4 px-1">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">Featured Projects</h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            All projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        {/* Swipeable row on phones and tablets, grid from lg up */}
        <div className="no-scrollbar -mx-3 px-3 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-3 pb-2 sm:gap-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {featuredProjects.map((project, index) => (
            <FeaturedCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
