import { TimelineEntry } from '@/app/lib/impact';

const TYPE_STYLES: Record<TimelineEntry['type'], { label: string; swatch: string }> = {
  award: { label: 'Award', swatch: 'bg-kapton' },
  talk: { label: 'Talk', swatch: 'bg-cell' },
};

export default function ContributionsTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="border-t-[1.5px] border-ink">
      {entries.map((entry) => {
        const type = TYPE_STYLES[entry.type];
        return (
          <li
            key={`${entry.title}-${entry.sortDate}`}
            className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-8 gap-y-1 py-6 border-b border-rule"
          >
            <div className="flex sm:flex-col gap-3 sm:gap-1 text-sm">
              <time className="text-ink font-medium tabular-nums">{entry.date}</time>
              <span className="inline-flex items-center gap-2 text-graphite">
                <span className={`h-2 w-2 ${type.swatch}`} aria-hidden />
                {type.label}
              </span>
            </div>

            <div className="max-w-measure">
              <h3 className="text-lg font-semibold text-ink leading-snug">{entry.title}</h3>
              {entry.subtitle && <p className="text-[15px] text-graphite mt-0.5">{entry.subtitle}</p>}
              <p className="text-[15px] text-ink/85 mt-2 leading-relaxed">{entry.description}</p>
              {entry.links && entry.links.length > 0 && (
                <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3">
                  {entry.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-medium text-ink text-link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
