import CommunityCard from '@/components/CommunityCard';
import CubeSatShowcase from '@/components/CubeSatShowcase';
import ContributionsTimeline from '@/components/ContributionsTimeline';
import { communityContributions, timelineEntries } from '@/app/lib/impact';

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8">
      <h2 className="display text-3xl sm:text-4xl font-extrabold text-ink">{title}</h2>
      <p className="mt-3 text-[15px] text-graphite max-w-measure">{description}</p>
    </div>
  );
}

export default function Impact() {
  return (
    <div className="w-full pt-12 sm:pt-16 pb-12">
      <h1 className="display text-5xl sm:text-6xl font-black text-ink mb-14 sm:mb-20">Impact</h1>

      <section className="mb-20">
        <SectionHeading
          title="Open source communities"
          description="Projects and coding communities where I've contributed code, tooling, and documentation."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {communityContributions.map((community) => (
            <CommunityCard key={community.name} {...community} />
          ))}
        </div>
      </section>

      <section className="mb-20">
        <SectionHeading
          title="Awards and talks"
          description="Hackathon wins, competitions, and conference presentations, newest first."
        />
        <ContributionsTimeline entries={timelineEntries} />
      </section>

      <section>
        <SectionHeading
          title="Tufts CubeSat"
          description="I lead the student team building Tufts's first satellite."
        />
        <CubeSatShowcase />
      </section>
    </div>
  );
}
