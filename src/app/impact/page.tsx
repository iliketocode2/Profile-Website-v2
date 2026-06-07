'use client';

import { motion } from 'framer-motion';
import CommunityCard from '@/components/CommunityCard';
import ContributionsTimeline from '@/components/ContributionsTimeline';
import { communityContributions, timelineEntries } from '@/app/lib/impact';

export default function Impact() {
  return (
    <main className="min-h-screen w-full pb-12">
      <div className="max-w-6xl mx-auto px-2 mt-4 sm:px-6 lg:px-8">

        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center"
          >
            Open Source Communities
          </motion.h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">
            Projects and coding communities where I&apos;ve contributed code, tooling, and documentation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityContributions.map((community) => (
              <CommunityCard key={community.name} {...community} />
            ))}
          </div>
        </section>

        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center"
          >
            Awards & Talks
          </motion.h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-10">
            A timeline of hackathon wins, competitions, and conference presentations.
          </p>
          <ContributionsTimeline entries={timelineEntries} />
        </section>
      </div>
    </main>
  );
}
