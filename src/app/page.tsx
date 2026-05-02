/**
 * app/page.tsx  (Home page)
 *
 * Server Component. Contains no dynamic imports directly
 * because Next.js 16 App Router disallows { ssr: false }
 * in next/dynamic when called from a Server Component.
 * The dynamic imports live in HomeContent ('use client').
 */

import HomeContent from '@/components/HomeContent';

export default function Home() {
  return (
    <main className="min-h-screen pb-12">
      <HomeContent />
    </main>
  );
}