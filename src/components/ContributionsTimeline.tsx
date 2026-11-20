import { TimelineEntry } from '@/app/lib/impact';
import TextLink from '@/components/TextLink';

const TYPE_LABEL: Record<TimelineEntry['type'], string> = {
  award: 'Award',
  talk: 'Talk',
};

// Awards and talks as a compact dated list
export default function ContributionsTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="divide-y divide-gray-200 dark:divide-gray-800">
      {entries.map((entry) => (
        <li
          key={`${entry.title}-${entry.sortDate}`}
          className="grid grid-cols-1 sm:grid-cols-[8.5rem_1fr] gap-x-6 gap-y-0.5 py-4 first:pt-0"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 tabular-nums">
            <time dateTime={entry.sortDate}>{entry.date}</time>
            <span className="ml-2 sm:ml-0 sm:block text-xs uppercase tracking-[0.12em]">{TYPE_LABEL[entry.type]}</span>
          </p>

          <div>
            <h3 className="text-base sm:text-lg font-bold leading-snug text-gray-900 dark:text-white">
              {entry.title}
              {entry.subtitle && (
                <span className="font-normal italic text-[15px] text-gray-500 dark:text-gray-400">
                  {' '}
                  &middot; {entry.subtitle.replace(' · ', ', ')}
                </span>
              )}
            </h3>
            <p className="mt-0.5 text-[15px] text-gray-700 dark:text-gray-300">
              {entry.description}
              {entry.links?.map((link) => (
                <span key={link.url} className="ml-3 text-sm">
                  <TextLink href={link.url}>{link.label}</TextLink>
                </span>
              ))}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
