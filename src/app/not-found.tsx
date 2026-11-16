import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-20 pb-12">
      <h1 className="display text-5xl sm:text-6xl font-black text-ink">Page not found</h1>
      <p className="mt-4 text-[15px] text-graphite max-w-measure">
        There&apos;s nothing at this address. It may have moved when the site was reorganized.
      </p>
      <Link href="/" className="inline-block mt-6 text-[15px] font-medium text-ink text-link">
        Go to the home page
      </Link>
    </div>
  );
}
