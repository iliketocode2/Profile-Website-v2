'use client'
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to prevent hydration mismatch
    setMounted(true);
    
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemPreference = mediaQuery.matches ? 'dark' : 'light';
    
    // Load theme from localStorage or use system preference
    const savedTheme = localStorage.getItem('theme') || systemPreference;
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }

    // Add transition class after initial load
    setTimeout(() => {
      document.documentElement.classList.add('theme-transition');
    }, 0);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-toggley left-togglex z-50">
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg
          dark:bg-gray-800 dark:hover:bg-gray-700 
          bg-white hover:bg-gray-100"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="h-5 w-5 text-yellow-400 transition-colors duration-300" />
        ) : (
          <Moon className="h-5 w-5 text-gray-800 transition-colors duration-300" />
        )}
      </button>
    </div>
  );
}