'use client';

/**
 * HomeContent.tsx
 *
 * Changes from previous version:
 *
 * - Lamp column width is increased to give the lamp more
 *   visual presence. The word cloud flex-1 column shrinks
 *   to accommodate; they can visually overlap slightly
 *   because the lamp SVG has overflow:visible and no
 *   background.
 *
 * - negative right margin on the lamp column pulls it
 *   leftward so the word cloud center aligns closer to
 *   the page center rather than the left two-thirds.
 *
 * - Dark-mode lamp warmth is applied inside WordCloud (SVG
 *   gradient layer), not a separate blend-mode div, so no hard
 *   vertical edge at the column boundary.
 */

import dynamic from 'next/dynamic';

const WordCloud = dynamic(
  () => import('@/components/WordCloud'),
  {
    ssr: false,
    loading: () => (
      <div
        className={[
          'w-full h-[420px]',
          'flex items-center justify-center',
        ].join(' ')}
      >
        <span
          className={[
            'text-gray-400 dark:text-gray-500',
            'text-sm animate-pulse',
          ].join(' ')}
        >
          Loading...
        </span>
      </div>
    ),
  }
);

const DeskLamp = dynamic(
  () => import('@/components/DeskLamp'),
  { ssr: false }
);

export default function HomeContent() {
  return (
    <div
      className={[
        'flex flex-row items-end justify-center',
        'gap-0',
        'max-w-5xl mx-auto',
        'px-2 pt-4',
      ].join(' ')}
    >
      {/* Word cloud column. */}
      <div
        className="relative flex-1 min-w-0"
        style={{ overflow: 'visible' }}
      >
        <WordCloud />
      </div>

      {/*
       * Lamp column: hidden on mobile.
       * -mr-12 pulls the lamp left so it overlaps the cloud
       * slightly, keeping the cloud visually centered.
       * Width is increased from the previous 260–360px range.
       */}
      <div
        className={[
          'hidden md:block',
          'flex-shrink-0 self-end pb-2',
          '-mr-12',
        ].join(' ')}
      >
        <DeskLamp />
      </div>
    </div>
  );
}