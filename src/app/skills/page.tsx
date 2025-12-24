'use client'

import { stackCategories } from '@/app/lib/skills';
import { StackCategory } from '@/app/lib/types';

export default function Stack() {
  return (
    <main className="min-h-screen w-full pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skill Categories - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {stackCategories.map((category, categoryIndex) => (
            <StackCategorySection key={categoryIndex} category={category} />
          ))}
        </div>
      </div>
    </main>
  );
}

function StackCategorySection({ category }: { category: StackCategory }) {
  // Group items by subcategory if they have one
  const groupedItems = category.items.reduce((acc, item) => {
    const key = item.category || 'main';
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, typeof category.items>);

  return (
    <div className="p-4 rounded-lg">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
        {category.title}
      </h2>
      
      <div className="space-y-2">
        {Object.entries(groupedItems).map(([subcategory, items]) => (
          <div key={subcategory}>
            {subcategory !== 'main' && (
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {subcategory}
              </h3>
            )}
            
            <div className="text-sm text-gray-700 dark:text-gray-300">
              {items.map((item, itemIndex) => (
                <span key={itemIndex}>
                  <span 
                    className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    title={item.description}
                  >
                    {item.name}
                  </span>
                  {itemIndex < items.length - 1 && ', '}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}