export default function Loading() {
  return (
    <div className="w-full px-2 sm:px-4 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto mb-16">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center space-y-6 mb-12">
          <div className="text-center space-y-2">
            <div className="h-10 w-48 bg-gray-200 dark:bg-gray-800 rounded mx-auto animate-pulse" />
            <div className="h-6 w-80 bg-gray-200 dark:bg-gray-800 rounded mx-auto animate-pulse" />
          </div>
          
          {/* Filter Bar Skeleton */}
          <div className="w-full max-w-3xl space-y-4">
            <div className="h-12 w-full bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />
            <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Category Tabs Skeleton */}
        <div className="flex items-center gap-1 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          ))}
        </div>

        {/* Results Summary Skeleton */}
        <div className="h-5 w-48 bg-gray-200 dark:bg-gray-800 rounded mx-auto mb-8 animate-pulse" />

        {/* Project Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
              {/* Image Skeleton */}
              <div className="h-56 w-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
              {/* Content Skeleton */}
              <div className="p-6 space-y-4">
                <div className="h-7 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
                  <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                </div>
                <div className="h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

