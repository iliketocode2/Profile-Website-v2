'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, Briefcase, Hammer, Layers } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/resume', label: 'Resume', icon: FileText },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/stack', label: 'My Stack', icon: Layers },
  { href: '/hobbies', label: 'Hobbies', icon: Hammer },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center space-x-8 text-2xl font-light">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                transition-colors duration-300
                ${pathname === item.href 
                  ? 'font-normal text-gray-900 dark:text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden">
          <div className="flex justify-around items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center text-xs"
              >
                <item.icon
                  className={`
                    h-6 w-6 transition-colors duration-300
                    ${pathname === item.href 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-500 dark:text-gray-400'}
                  `}
                />
                <span
                  className={`
                    mt-1 transition-colors duration-300
                    ${pathname === item.href 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-500 dark:text-gray-400'}
                  `}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}