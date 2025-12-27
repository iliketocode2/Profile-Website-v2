export default function Loading() {
  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-6">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-8 gap-4 px-2">
        <div className="text-center sm:text-left space-y-2">
          <div className="h-10 w-48 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-5 w-40 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        </div>
        <div className="h-10 w-36 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
      </div>

      {/* Resume Iframe Skeleton */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden animate-pulse" style={{ height: '800px' }} />
    </div>
  );
}

