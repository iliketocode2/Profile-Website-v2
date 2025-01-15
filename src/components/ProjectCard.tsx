import { Github } from "lucide-react"; // Import GitHub icon
import { Project } from "../app/lib/types";

export function ProjectCard({ title, date, description, imageUrl, links }: Project) {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto mb-8 pb-8 border-b border-gray-300 dark:border-gray-700">
      <div className="flex-shrink-0 w-full md:w-72 h-44 mb-4 md:mb-0 md:mr-5">
        <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-semibold mb-2">
          {links?.length === 1 ? (
            <a
              href={links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-white hover:underline"
            >
              {title}
            </a>
          ) : (
            <span className="text-gray-900 dark:text-white">{title}</span>
          )}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{date}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        {links && (
          <div className="flex flex-wrap gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:bg-blue-100 dark:hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-600"
              >
                {link.isGithub ? (
                  <div className="p-1">
                    <Github className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                  </div>
                ) : null}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
