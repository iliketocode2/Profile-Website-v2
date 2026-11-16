const RESUME_URL =
  'https://docs.google.com/document/d/1lSkKShNRphKa4fnbEpuaeE1REsETmUX14UV60kVxU4A/preview';

const LINKS = [
  { label: 'Email', href: 'mailto:goldmanwilliam3@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/iliketocode2' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/william-goldman-79125a283/' },
  { label: 'Resume', href: RESUME_URL },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-rule">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-graphite">William Goldman, {new Date().getFullYear()}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
          {LINKS.map((link) => {
            const external = link.href.startsWith('http');
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-ink text-link"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
