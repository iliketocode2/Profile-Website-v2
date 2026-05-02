export default function AboutLoading() {
  return (
    <div className="max-w-3xl mx-auto px-2 sm:px-6 py-8 animate-pulse">
      <div className={[
        'h-10 w-32 rounded mb-2',
        'bg-gray-200 dark:bg-gray-700',
      ].join(' ')} />
      <div className={[
        'h-4 w-48 rounded mb-8',
        'bg-gray-200 dark:bg-gray-700',
      ].join(' ')} />
      <div className={[
        'space-y-6 rounded-xl p-6',
        'bg-white/60 dark:bg-gray-900/60',
      ].join(' ')}>
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className={[
              'h-4 rounded w-full',
              'bg-gray-200 dark:bg-gray-700',
            ].join(' ')} />
            <div className={[
              'h-4 rounded w-11/12',
              'bg-gray-200 dark:bg-gray-700',
            ].join(' ')} />
            <div className={[
              'h-4 rounded w-4/5',
              'bg-gray-200 dark:bg-gray-700',
            ].join(' ')} />
          </div>
        ))}
      </div>
    </div>
  );
}
