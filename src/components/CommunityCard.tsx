import Image from 'next/image';
import { CommunityContribution } from '@/app/lib/impact';
import TextLink from '@/components/TextLink';

// Compact open source entry: logo tile, name, one-line summary, what I worked on
export default function CommunityCard({
  name,
  logo,
  description,
  highlights,
  repoUrl,
  links,
}: CommunityContribution) {
  return (
    <article className="flex gap-4">
      {/* Logos stay on white so dark-text marks remain readable in dark mode */}
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} on GitHub`}
        className="relative shrink-0 h-20 w-28 sm:w-32 rounded-md bg-white ring-1 ring-gray-200 dark:ring-gray-700 overflow-hidden"
      >
        <Image src={logo} alt="" fill unoptimized className="object-contain p-1" />
      </a>

      <div className="min-w-0">
        <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white">{name}</h3>
        <p className="mt-1 text-[15px] leading-snug text-gray-700 dark:text-gray-300">{description}</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{highlights.join(' · ')}</p>
        <p className="mt-1.5 flex flex-wrap gap-x-5 text-sm">
          <TextLink href={repoUrl}>GitHub</TextLink>
          {links?.map((link) => (
            <TextLink key={link.url} href={link.url}>
              {link.label}
            </TextLink>
          ))}
        </p>
      </div>
    </article>
  );
}
