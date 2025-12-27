export default function Loading() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden pb-12">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Title Skeleton */}
          <div className="w-full max-w-4xl mx-auto text-center py-8 space-y-4">
            <div className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            
            {/* Description Paragraphs */}
            <div className="space-y-4 w-full max-w-6xl mx-auto">
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              </div>
            </div>

            {/* Featured Projects Skeleton */}
            <div className="w-full max-w-6xl mx-auto mt-12">
              <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded mx-auto mb-6 animate-pulse" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

