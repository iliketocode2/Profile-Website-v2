export default function Loading() {
  return (
    <div className="min-h-screen w-full pb-12">
      <div className="max-w-4xl ">
        {/* Skill Categories Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              {/* Category Title */}
              <div className="h-8 w-32 bg-rule/60 rounded animate-pulse" />
              
              {/* Skill Items */}
              <div className="space-y-3">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="h-12 w-full bg-rule/60 rounded-[3px] animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

