import { CommunityContribution } from '@/app/lib/impact';

export default function CommunityCard({
  name,
  description,
  highlights,
  repoUrl,
  links,
}: CommunityContribution) {
  const allLinks = [{ label: 'GitHub', url: repoUrl }, ...(links ?? [])];

  return (
    <article className="flex flex-col h-full border-t-[1.5px] border-ink pt-5">
      <h3 className="text-xl font-semibold text-ink">{name}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-graphite">{description}</p>

      <ul className="mt-4 space-y-2 flex-grow">
        {highlights.map((highlight) => (
          <li key={highlight} className="text-[15px] leading-snug text-ink flex gap-3">
            <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-kapton" aria-hidden />
            {highlight}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-medium">
        {allLinks.map((link) => (
          <li key={link.url}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-ink text-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
