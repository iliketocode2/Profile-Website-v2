import { Github } from "lucide-react";
import { Project } from "../app/lib/types";
import Image from "next/image";

export function ProjectCard(project: Project) {
  const { title, date, description, imageUrl, links, tags } = project;
  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto mb-8 pb-8 border-b border-gray-300 dark:border-gray-700">
      <div className="flex-shrink-0 w-full md:w-72 h-44 mb-4 md:mb-0 md:mr-5">
        <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <div className="text-sm mb-3 text-gray-600 dark:text-gray-400">
          {(() => {
            const [datePart, techPart] = date.split(' | ');
            const categoryText = tags.categories.join(', ');
            
            if (techPart) {
              return `${datePart} | ${categoryText} | ${techPart}`;
            } else {
              return `${datePart} | ${categoryText}`;
            }
          })()}
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

        {/* Links or Academic Notice */}
        {project.academicProject ? (
          <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
            <div className="flex-shrink-0 mt-0.5">
              <svg className="h-5 w-5 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Academic Project:</strong> To comply with academic integrity policy, code is not made public. Please contact me directly to view and discuss this program.
            </div>
          </div>
        ) : (
          links && links.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg 
                             shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                    link.isGithub 
                      ? 'text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
                      : 'text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50'
                  }`}
                >
                  {link.isGithub ? (
                    <Github className="h-4 w-4" />
                  ) : null}
                  {link.label || (link.isGithub ? 'GitHub' : 'View Project')}
                </a>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}