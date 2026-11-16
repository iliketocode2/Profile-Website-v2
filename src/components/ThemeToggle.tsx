'use client'
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  // null until mounted; the inline script in layout.tsx has already applied the theme class
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
    const id = setTimeout(() => document.documentElement.classList.add('theme-transition'), 0);
    return () => clearTimeout(id);
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="ml-1 sm:ml-2 grid place-items-center h-9 w-9 rounded-full text-graphite hover:text-ink hover:bg-ink/5 transition-colors"
      aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {darkMode === null ? null : darkMode ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  );
}
