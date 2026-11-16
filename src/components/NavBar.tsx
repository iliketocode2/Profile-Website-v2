'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '/projects', label: 'Projects' },
  { href: '/impact', label: 'Impact' },
  { href: '/skills', label: 'Skills' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="relative z-50 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-5 sm:py-7 border-b border-rule">
      <Link
        href="/"
        className="display text-lg font-extrabold tracking-tight text-ink"
        aria-current={pathname === '/' ? 'page' : undefined}
      >
        W. Goldman
      </Link>

      <div className="flex items-center gap-1 sm:gap-2 -mr-2">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={`px-2 py-1 text-[15px] transition-colors border-b-2 ${
                active
                  ? 'text-ink font-semibold border-kapton'
                  : 'text-graphite border-transparent hover:text-ink'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <ThemeToggle />
      </div>
    </nav>
  );
}
