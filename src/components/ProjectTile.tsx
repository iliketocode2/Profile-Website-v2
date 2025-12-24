'use client'

import { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { Project } from "../app/lib/types";
import Image from "next/image";
import Link from "next/link";
import { createProjectSlug } from "../app/lib/utils";

export function ProjectTile(project: Project) {
  const { title, date, description, imageUrl, images, links, tags } = project;
  const [datePart] = date.split(' | ');
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Combine imageUrl with images array if provided
  const allImages = images && images.length > 0 ? [imageUrl, ...images] : [imageUrl];
  const hasMultipleImages = allImages.length > 1;
  
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
    <div className="group relative flex flex-col h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 border border-gray-100 dark:border-gray-800">
      {/* Image Gallery with sophisticated overlay */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={allImages[currentImageIndex]}
          alt={`${title} - Image ${currentImageIndex + 1}`}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60" />
        
        {/* Image Navigation Arrows */}
        {hasMultipleImages && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            
            {/* Image Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    index === currentImageIndex 
                      ? 'w-6 bg-white' 
                      : 'w-1.5 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
        
        {/* Discipline Badge */}
        {project.discipline && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md text-gray-900 dark:text-white shadow-lg">
              {project.discipline === 'Computer Science' ? 'CS' : 'MechE'}
            </span>
          </div>
        )}
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full bg-blue-500/90 backdrop-blur-md text-white shadow-lg">
              Featured
            </span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="text-xs mb-3 text-gray-500 dark:text-gray-400">
          {datePart}
        </div>
        
        {/* Categories as tags */}
        {tags.categories.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.categories.slice(0, 2).map((category, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300"
              >
                {category}
              </span>
            ))}
            {tags.categories.length > 2 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300">
                +{tags.categories.length - 2}
              </span>
            )}
          </div>
        )}
        
        <div className="flex-grow mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {displayDescription}
          </p>
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 
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
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-wrap gap-4 items-center">
            {/* View Report link if PDF exists */}
            {project.pdfUrl && (
              <Link
                href={`/projects/${project.slug || createProjectSlug(project.title)}`}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 
                           group"
              >
                <FileText className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span className="border-b border-transparent group-hover:border-current transition-colors duration-200">
                  View Report
                </span>
              </Link>
            )}
            
            {/* Academic Project Notice */}
            {project.academicProject && (
              <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">
                <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>Academic Project</span>
              </div>
            )}
            
            {/* External Links */}
            {links && links.length > 0 && (
              <>
                {links.slice(0, project.pdfUrl ? 1 : 2).map((link, index) => (
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

