export default function ContributionsLoading() {
  return (
    <div className="min-h-screen w-full pb-12 animate-pulse">
      <div className="max-w-6xl ">
        <div className="mb-14 space-y-3">
          <div className="h-10 bg-rule/60 rounded-[3px] max-w-md" />
          <div className="h-4 bg-rule/60 rounded max-w-xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-56 bg-rule/60 rounded-[3px]" />
          ))}
        </div>
        <div className="max-w-3xl">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-[8.5rem_1fr] gap-x-6 gap-y-2 py-6 border-b border-rule">
              <div className="h-4 w-24 bg-rule/60 rounded" />
              <div className="space-y-2">
                <div className="h-5 w-2/3 bg-rule/60 rounded" />
                <div className="h-4 w-full bg-rule/60 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
