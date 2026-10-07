import { Project } from './types';

// Where a project should take the visitor: its detail page if it has a report
// or sub-projects, otherwise its first external link.
export function getProjectHref(project: Project): { href: string; external: boolean } {
  if (project.pdfUrl || project.subProjects) {
    return { href: `/projects/${project.slug || createProjectSlug(project.title)}`, external: false };
  }
  const firstLink = project.links?.[0];
  if (firstLink) {
    return { href: firstLink.url, external: true };
  }
  return { href: '/projects', external: false };
}

// Helper function to create slug from project title
export function createProjectSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

