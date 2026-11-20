import type { ReactNode } from 'react';

// Plain underlined text link used across the editorial pages
export default function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 dark:text-blue-400 underline decoration-1 decoration-blue-700/30 dark:decoration-blue-400/40 underline-offset-4 hover:decoration-current transition-colors"
    >
      {children}
    </a>
  );
}
