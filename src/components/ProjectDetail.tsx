'use client';

import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Github, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/app/lib/types';
import { createProjectSlug } from '@/app/lib/utils';
import DisciplineMark from './DisciplineMark';

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
    <div className="relative h-44 sm:h-56 w-full overflow-hidden rounded-[3px] bg-rule">
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
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[rgb(14_19_48/0.6)] hover:bg-[rgb(14_19_48/0.85)] p-2 text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => step(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[rgb(14_19_48/0.6)] hover:bg-[rgb(14_19_48/0.85)] p-2 text-white"
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
      <div className="flex flex-wrap items-center gap-3 mb-2 text-sm text-graphite">
        <DisciplineMark discipline={project.discipline} />
        <span>{datePart}</span>
      </div>
      <Dialog.Title className="display text-2xl sm:text-3xl font-extrabold text-ink pr-10 leading-tight">
        {project.title}
      </Dialog.Title>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-medium">
        {hasDetailPage && (
          <Link
            href={`/projects/${project.slug || createProjectSlug(project.title)}`}
            className="inline-flex items-center gap-1.5 text-ink text-link"
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
            className="inline-flex items-center gap-1.5 text-ink text-link"
          >
            {link.isGithub ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
            {link.label}
          </a>
        ))}
        {project.academicProject && !hasDetailPage && (
          <span className="text-graphite font-normal">Academic project. Email me for details.</span>
        )}
      </div>

      <div className="mt-4">
        <Gallery project={project} />
      </div>

      <Dialog.Description className="mt-5 text-base leading-relaxed text-ink max-w-measure">
        {project.description}
      </Dialog.Description>

      {project.tags.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-graphite">
          {project.tags.technologies.map((tech) => (
            <span key={tech}>
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
                className="fixed inset-0 z-[60] bg-[rgb(14_19_48/0.55)]"
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
                  className="pointer-events-auto relative w-full sm:max-w-2xl max-h-[88vh] overflow-y-auto overscroll-contain rounded-t-lg sm:rounded-[4px] bg-panel border border-rule focus:outline-none pb-[env(safe-area-inset-bottom)]"
                >
                  {/* Grab handle hints the sheet can be dismissed on phones */}
                  <div className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 h-1 w-10 rounded-full bg-rule z-10" />
                  <Dialog.Close
                    className="absolute top-4 right-4 z-10 rounded-full hover:bg-ink/5 p-2 text-graphite hover:text-ink"
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
