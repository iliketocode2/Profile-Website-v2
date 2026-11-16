import { stackCategories } from '@/app/lib/skills';
import { StackCategory } from '@/app/lib/types';

export default function Stack() {
  return (
    <div className="w-full pt-12 sm:pt-16 pb-12">
      <h1 className="display text-5xl sm:text-6xl font-black text-ink mb-10 sm:mb-14">Skills</h1>
      <div className="border-t-[1.5px] border-ink">
        {stackCategories.map((category) => (
          <StackCategoryRow key={category.title} category={category} />
        ))}
      </div>
    </div>
  );
}

function StackCategoryRow({ category }: { category: StackCategory }) {
  // Group items by subcategory if they have one
  const groupedItems = category.items.reduce((acc, item) => {
    const key = item.category || 'main';
    (acc[key] ??= []).push(item);
    return acc;
  }, {} as Record<string, typeof category.items>);

  return (
    <section className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-x-10 gap-y-2 py-5 border-b border-rule">
      <h2 className="text-base font-semibold text-ink">{category.title}</h2>

      <div className="space-y-3">
        {Object.entries(groupedItems).map(([subcategory, items]) => (
          <div key={subcategory} className="max-w-measure">
            {subcategory !== 'main' && <h3 className="text-sm text-graphite mb-0.5">{subcategory}</h3>}
            <p className="text-[15px] leading-relaxed text-ink">
              {items.map((item, itemIndex) => (
                <span key={item.name}>
                  <span title={item.description}>{item.name}</span>
                  {itemIndex < items.length - 1 && ', '}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
