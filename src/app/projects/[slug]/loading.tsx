export default function Loading() {
  return (
    <div className="min-h-screen w-full py-12">
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Back Button Skeleton */}
        <div className="h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-8 animate-pulse" />

        {/* Header Skeleton */}
        <div className="mb-8 space-y-4">
          <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-5 w-48 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
            <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
            <div className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Description Skeleton */}
        <div className="mb-8 space-y-3">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        </div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-64 w-full bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}

