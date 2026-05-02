export default function Loading() {
  return (
    <main className="min-h-screen pb-12 animate-pulse">
      {/* Name header skeleton */}
      <div className="text-center pt-8 pb-2 space-y-4">
        <div className={[
          'h-16 sm:h-24 w-80 sm:w-[480px] rounded',
          'bg-gray-200 dark:bg-gray-800 mx-auto',
        ].join(' ')} />
        <div className={[
          'h-4 w-48 rounded',
          'bg-gray-200 dark:bg-gray-800 mx-auto',
        ].join(' ')} />
      </div>

      {/* Word cloud skeleton */}
      <div className={[
        'flex flex-wrap justify-center items-center',
        'gap-x-3 gap-y-4 max-w-4xl mx-auto py-8 px-4',
      ].join(' ')}>
        {[80, 160, 120, 60, 140, 90, 110, 70, 130, 100,
          85, 95, 115, 75, 105].map((w, i) => (
          <div
            key={i}
            className="h-6 rounded bg-gray-200 dark:bg-gray-800"
            style={{ width: `${w}px` }}
          />
        ))}
      </div>
    </main>
  );
}
