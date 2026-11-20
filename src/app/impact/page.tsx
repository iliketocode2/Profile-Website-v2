import type { ReactNode } from 'react';
import CommunityCard from '@/components/CommunityCard';
import CubeSatShowcase from '@/components/CubeSatShowcase';
import ContributionsTimeline from '@/components/ContributionsTimeline';
import { communityContributions, timelineEntries } from '@/app/lib/impact';

// A section is a ledger: a short label in the left rail, the content in the reading column
function Section({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[11rem_1fr] gap-x-10 border-t border-gray-900 dark:border-gray-200 pt-4 mt-10 sm:mt-14">
      <h2 className="mb-6 md:mb-0 text-sm uppercase tracking-[0.14em] text-gray-900 dark:text-white">
        <span className="tabular-nums text-gray-500 dark:text-gray-400 mr-2">{number}</span>
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function Impact() {
  return (
    <div className="w-full pb-12">
      <div className="max-w-5xl mx-auto px-1 sm:px-6 mt-6 sm:mt-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Impact</h1>

        <Section number="01" title="Tufts CubeSat">
          <CubeSatShowcase />
        </Section>

        <Section number="02" title="Open source">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7">
            {communityContributions.map((community) => (
              <CommunityCard key={community.name} {...community} />
            ))}
          </div>
        </Section>

        <Section number="03" title="Awards and talks">
          <ContributionsTimeline entries={timelineEntries} />
        </Section>
      </div>
    </div>
  );
}
