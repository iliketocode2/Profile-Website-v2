// Loose cluster of placeholder circles echoing the bubble layout
const PLACEHOLDERS = [
  { size: 'w-40 h-40 sm:w-60 sm:h-60', offset: 'mt-0' },
  { size: 'w-28 h-28 sm:w-44 sm:h-44', offset: 'mt-10' },
  { size: 'w-20 h-20 sm:w-32 sm:h-32', offset: 'mt-2' },
  { size: 'w-32 h-32 sm:w-48 sm:h-48', offset: 'mt-6' },
  { size: 'w-24 h-24 sm:w-36 sm:h-36', offset: 'mt-0' },
  { size: 'w-36 h-36 sm:w-52 sm:h-52', offset: 'mt-4' },
  { size: 'w-20 h-20 sm:w-28 sm:h-28', offset: 'mt-8' },
];

export default function Loading() {
  return (
    <div className="w-full pt-6 pb-8 sm:pt-10">
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="h-10 w-40 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="h-4 w-56 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="h-9 w-52 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
      </div>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 sm:gap-5">
        {PLACEHOLDERS.map((p, i) => (
          <div key={i} className={`${p.size} ${p.offset} rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse`} />
        ))}
      </div>
    </div>
  );
}
