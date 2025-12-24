'use client'

import { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Project } from "../app/lib/types";
import Image from "next/image";

export function ProjectTile(project: Project) {
  const { title, date, description, imageUrl, links, tags } = project;
  const [datePart] = date.split(' | ');
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Check if description is longer than ~150 characters (approximate 3 lines)
  const shouldTruncate = description.length > 150;
  const getTruncatedDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
  };
  const displayDescription = isExpanded ? description : (shouldTruncate ? getTruncatedDescription(description, 150) : description);
  
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
      {/* Image */}
      <div className="relative w-full h-48 bg-gray-900 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {title}
        </h3>
        
        <div className="text-xs mb-2 text-gray-600 dark:text-gray-400">
          {datePart}
        </div>
        
        {/* Categories as tags */}
        {tags.categories.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.categories.slice(0, 2).map((category, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-xs rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
              >
                {category}
              </span>
            ))}
            {tags.categories.length > 2 && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                +{tags.categories.length - 2}
              </span>
            )}
          </div>
        )}
        
        <div className="flex-grow mb-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {displayDescription}
          </p>
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 
                         font-medium flex items-center gap-1 transition-colors duration-200"
            >
              {isExpanded ? (
                <>
                  Show less
                  <ChevronUp className="h-3 w-3" />
                </>
              ) : (
                <>
                  Read more
                  <ChevronDown className="h-3 w-3" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Links or Academic Notice */}
        <div className="mt-auto">
          {project.academicProject ? (
            <div className="flex items-start gap-2 p-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded text-xs">
              <svg className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-amber-800 dark:text-amber-200">
                Academic Project
              </span>
            </div>
          ) : (
            links && links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {links.slice(0, 2).map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 
                               hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 
                               group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  >
                    {link.isGithub ? (
                      <Github className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                    ) : (
                      <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                    )}
                    <span className="border-b border-transparent group-hover:border-current transition-colors duration-200">
                      {link.label || (link.isGithub ? 'GitHub' : 'View')}
                    </span>
                  </a>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

