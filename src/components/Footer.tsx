import { Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto px-2 sm:px-4 py-4">
        {/* Footer content */}
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Centered icons */}
          <div className="flex justify-center gap-6 mb-4 md:mb-0">
            <a
              href="https://github.com/iliketocode2"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transition-transform hover:scale-110"
            >
              <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                <Github className="h-6 w-6 text-[#333] dark:text-white" />
              </div>
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200">
                GitHub
              </span>
            </a>

            <a
              href="mailto:goldmanwilliam3@gmail.com"
              className="group flex flex-col items-center transition-transform hover:scale-110"
            >
              <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors">
                <Mail className="h-6 w-6 text-[#EA4335] dark:text-red-400" />
              </div>
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200">
                Email
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/william-goldman-79125a283/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center transition-transform hover:scale-110"
            >
              <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                <Linkedin className="h-6 w-6 text-[#0A66C2] dark:text-blue-400" />
              </div>
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200">
                LinkedIn
              </span>
            </a>
          </div>

          {/* Copyright information */}
          <div className="text-center text-xs text-gray-500 dark:text-gray-400">
            William Goldman © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
