'use client'

import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Download } from 'lucide-react';
import { projects } from '@/app/lib/projects';
import { Project } from '@/app/lib/types';
import { createProjectSlug } from '@/app/lib/utils';
import { useMemo } from 'react';

// Helper to find project by slug
function findProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => {
    const projectSlug = project.slug || createProjectSlug(project.title);
    return projectSlug === slug;
  });
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  // Use useMemo to compute project immediately on render
  const project = useMemo(() => {
    const slug = params?.slug as string;
    if (slug) {
      return findProjectBySlug(slug);
    }
    return undefined;
  }, [params?.slug]);

  if (!project) {
    return (
      <div className="pt-20 pb-12">
        <h1 className="display text-4xl font-black text-ink">Project not found</h1>
        <p className="mt-3 text-[15px] text-graphite">The link may be out of date.</p>
        <button onClick={() => router.push('/projects')} className="mt-6 text-[15px] font-medium text-ink text-link">
          Go to all projects
        </button>
      </div>
    );
  }

  return (
    <div className="w-full pt-8 sm:pt-12 pb-12">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-[15px] text-graphite hover:text-ink mb-10 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </button>

      <header className="mb-10">
        <p className="text-[15px] text-graphite mb-3">{project.date.split(' | ')[0]}</p>
        <h1 className="display text-4xl sm:text-5xl lg:text-6xl font-black text-ink max-w-4xl">{project.title}</h1>
        <dl className="mt-8 grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-8 gap-y-2 border-t-[1.5px] border-ink pt-4 text-[15px] max-w-4xl">
          {project.tags.categories.length > 0 && (
            <>
              <dt className="text-graphite">Area</dt>
              <dd className="text-ink">{project.tags.categories.join(', ')}</dd>
            </>
          )}
          {project.tags.technologies.length > 0 && (
            <>
              <dt className="text-graphite">Tools</dt>
              <dd className="text-ink">{project.tags.technologies.join(', ')}</dd>
            </>
          )}
        </dl>
      </header>

      <p className="text-lg leading-relaxed text-ink max-w-measure whitespace-pre-line mb-12">{project.description}</p>

      {/* Sub-projects (for grouped academic projects) */}
      {project.subProjects && project.subProjects.length > 0 && (
        <section className="mb-14">
          <h2 className="display text-3xl font-extrabold text-ink mb-3">Projects</h2>
          {project.academicProject && (
            <p className="text-[15px] text-graphite mb-6">
              Source code is available on request from{' '}
              <a href="mailto:William.Goldman@tufts.edu" className="text-ink text-link">
                William.Goldman@tufts.edu
              </a>
              .
            </p>
          )}
          <div className="border-t-[1.5px] border-ink">
            {project.subProjects.map((subProject) => (
              <article
                key={subProject.title}
                className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-8 gap-y-1 py-6 border-b border-rule"
              >
                <p className="text-sm text-ink font-medium tabular-nums">{subProject.date}</p>
                <div className="max-w-measure">
                  <h3 className="text-lg font-semibold text-ink">{subProject.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{subProject.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* PDF embed */}
      {project.pdfUrl && (
        <section className="mb-14">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-5">
            <h2 className="display text-3xl font-extrabold text-ink">Project report</h2>
            <a
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 text-[15px] font-medium text-ink text-link"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
          <div className="rounded-[3px] overflow-hidden border-[1.5px] border-ink bg-panel">
            <iframe
              src={`${project.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-[800px]"
              title={`${project.title} Report`}
            />
          </div>
        </section>
      )}

      {project.links && project.links.length > 0 && (
        <section className="border-t border-rule pt-8">
          <h2 className="text-lg font-semibold text-ink mb-3">Links</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-ink text-link"
              >
                {link.label || (link.isGithub ? 'GitHub' : 'View project')}
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
