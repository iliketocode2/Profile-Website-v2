export default function Loading() {
  return (
    <main className="w-full max-w-full overflow-x-hidden pb-8">
      {/* Intro Skeleton */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center pt-6 pb-8 sm:pt-10 sm:pb-12 space-y-4">
        <div className="h-24 sm:h-16 lg:h-20 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="h-5 w-64 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="h-5 w-72 max-w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="h-5 w-56 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
      </div>

      {/* Featured Projects Skeleton */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="h-7 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-4 animate-pulse" />
        <div className="flex gap-4 overflow-hidden sm:gap-4 lg:grid lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-[70%] sm:w-[40%] shrink-0 lg:w-auto aspect-[16/10] bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
