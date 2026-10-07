export default function Loading() {
  return (
    <div className="w-full pb-8">
      {/* Bio Skeleton */}
      <div className="max-w-3xl mx-auto px-1 sm:px-4 pt-6 sm:pt-10 pb-12 space-y-5">
        <div className="h-10 w-40 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          </div>
        ))}
      </div>

      {/* Hobbies Skeleton */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 px-1 sm:px-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="break-inside-avoid mb-3">
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden animate-pulse">
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-700" />
              <div className="p-4 space-y-3">
                <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
