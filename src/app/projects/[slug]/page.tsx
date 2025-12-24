'use client'

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { projects } from '@/app/lib/projects';
import { Project } from '@/app/lib/types';
import { createProjectSlug } from '@/app/lib/utils';
import Image from 'next/image';

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
  const [project, setProject] = useState<Project | undefined>(undefined);

  useEffect(() => {
    const slug = params?.slug as string;
    if (slug) {
      const foundProject = findProjectBySlug(slug);
      setProject(foundProject);
    }
  }, [params]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h1>
          <button
            onClick={() => router.push('/projects')}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Return to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </button>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h1>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {project.date}
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.categories.map((category, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {category}
              </span>
            ))}
            {project.tags.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </div>

        {/* PDF Embed */}
        {project.pdfUrl && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project Report</h2>
              <a
                href={project.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="ml-auto flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
              <iframe
                src={`${project.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                className="w-full h-[800px]"
                title={`${project.title} Report`}
              />
            </div>
          </div>
        )}

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Links</h3>
            <div className="flex flex-wrap gap-4">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {link.label || (link.isGithub ? 'GitHub' : 'View Project')}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

