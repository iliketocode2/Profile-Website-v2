'use client';

import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Github, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/app/lib/types';
import { createProjectSlug } from '@/app/lib/utils';

function useIsPhone() {
  const [isPhone, setIsPhone] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(max-width: 639px)');
    const update = () => setIsPhone(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return isPhone;
}

function Gallery({ project }: { project: Project }) {
  const allImages = [project.imageUrl, ...(project.images ?? [])];
  const [index, setIndex] = useState(0);
  const step = (delta: number) => setIndex((i) => (i + delta + allImages.length) % allImages.length);

  return (
    <div className="relative h-44 sm:h-56 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
      {allImages.map((img, i) => (
        <Image
          key={img}
          src={img}
          alt={`${project.title} - Image ${i + 1}`}
          fill
          sizes="(max-width: 640px) 90vw, 624px"
          className={`object-cover transition-opacity duration-200 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          priority={i === 0}
        />
      ))}
      {allImages.length > 1 && (
        <>
          <button
            onClick={() => step(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 p-2 text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => step(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 p-2 text-white"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {allImages.map((img, i) => (
              <button
                key={img}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function DetailBody({ project }: { project: Project }) {
  const [datePart] = project.date.split(' | ');
  const hasDetailPage = Boolean(project.pdfUrl || project.subProjects);

  return (
    <div className="p-5 sm:p-6">
      {/* Header: meta, title and links */}
      <div className="flex flex-wrap items-center gap-2 mb-1.5 text-xs text-gray-500 dark:text-gray-400">
        {project.discipline && (
          <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 font-semibold uppercase tracking-wider text-[10px] text-gray-700 dark:text-gray-300">
            {project.discipline === 'Computer Science' ? 'CS' : 'MechE'}
          </span>
        )}
        <span>{datePart}</span>
      </div>
      <Dialog.Title className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white pr-10">
        {project.title}
      </Dialog.Title>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
        {hasDetailPage && (
          <Link
            href={`/projects/${project.slug || createProjectSlug(project.title)}`}
            className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <FileText className="h-4 w-4" />
            {project.pdfUrl ? 'View Report' : 'View Details'}
          </Link>
        )}
        {project.links?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {link.isGithub ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
            {link.label}
          </a>
        ))}
        {project.academicProject && !hasDetailPage && (
          <span className="text-gray-500 dark:text-gray-400">Academic project · contact me for details</span>
        )}
      </div>

      <div className="mt-4">
        <Gallery project={project} />
      </div>

      <Dialog.Description className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
        {project.description}
      </Dialog.Description>

      {project.tags.technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetail({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const isPhone = useIsPhone();

  // Phones get a bottom sheet; larger screens get a centered panel
  const panelMotion = isPhone
    ? { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } }
    : { initial: { opacity: 0, scale: 0.96, y: 12 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.96, y: 12 } };

  return (
    <Dialog.Root open={project !== null} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {project && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <div className="fixed inset-0 z-[61] flex items-end sm:items-center justify-center sm:p-6 pointer-events-none">
              <Dialog.Content asChild forceMount>
                <motion.div
                  {...panelMotion}
                  transition={{ type: 'spring', damping: 30, stiffness: 320 }}
                  className="pointer-events-auto relative w-full sm:max-w-2xl max-h-[88vh] overflow-y-auto overscroll-contain rounded-t-2xl sm:rounded-2xl bg-white dark:bg-gray-900 shadow-2xl focus:outline-none pb-[env(safe-area-inset-bottom)]"
                >
                  {/* Grab handle hints the sheet can be dismissed on phones */}
                  <div className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 h-1 w-10 rounded-full bg-gray-300 dark:bg-gray-700 z-10" />
                  <Dialog.Close
                    className="absolute top-4 right-4 z-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 p-2 text-gray-600 dark:text-gray-300"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </Dialog.Close>
                  <DetailBody project={project} />
                </motion.div>
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
