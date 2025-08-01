import { Github } from "lucide-react";
import { Project } from "../app/lib/types";
import Image from "next/image";

export function ProjectCard({ title, date, description, imageUrl, links, tags }: Project) {
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

        {/* Links */}
        {links && links.length > 0 && (
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
        )}
      </div>
    </div>
  );
}