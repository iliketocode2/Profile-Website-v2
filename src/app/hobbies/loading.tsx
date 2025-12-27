export default function Loading() {
  return (
    <div className="columns-1 md:columns-3 lg:columns-4 gap-3 p-2 sm:p-6">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <div key={i} className="break-inside-avoid mb-3">
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden animate-pulse">
            {/* Image Skeleton */}
            <div className="w-full h-48 bg-gray-300 dark:bg-gray-700" />
            {/* Content Skeleton */}
            <div className="p-4 space-y-3">
              <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

