export default function Loading() {
  return (
    <main className="min-h-screen w-full pb-12">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Skill Categories Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              {/* Category Title */}
              <div className="h-8 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              
              {/* Skill Items */}
              <div className="space-y-3">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="h-12 w-full bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

