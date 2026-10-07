export default function ContributionsLoading() {
  return (
    <main className="min-h-screen w-full pb-12 animate-pulse">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg max-w-md mx-auto" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded max-w-xl mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-56 bg-gray-200 dark:bg-gray-700 rounded-xl" />
          ))}
        </div>
        <div className="max-w-3xl mx-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-[8.5rem_1fr] gap-x-6 gap-y-2 py-6 border-b border-gray-200 dark:border-gray-800">
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="space-y-2">
                <div className="h-5 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
