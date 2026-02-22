'use client'

import { stackCategories } from '@/app/lib/skills';
import { StackCategory } from '@/app/lib/types';
import { motion } from 'framer-motion';

export default function Stack() {
  return (
    <main id="main-content" className="min-h-screen w-full pb-12">
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
        
        <h2>Technical Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {stackCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.3, delay: categoryIndex * 0.05 }}
            >
              <StackCategorySection category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

function StackCategorySection({ category }: { category: StackCategory }) {
  const groupedItems = category.items.reduce((acc, item) => {
    const key = item.category || 'main';
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, typeof category.items>);

  return (
    <motion.div 
      className="p-4 rounded-lg"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-900 mb-3">
        {category.title}
      </h3>
      
      <div className="space-y-2">
        {Object.entries(groupedItems).map(([subcategory, items]) => (
          <div key={subcategory}>
            {subcategory !== 'main' && (
              <h4 className="text-sm font-semibold mb-1">
                {subcategory}
              </h4>
            )}
            
            <div className="text-sm">
              {items.map((item, itemIndex) => (
                <span key={itemIndex}>
                  <button 
                    className="cursor-pointer text-gray-400"
                    onClick={() => console.log(item.name)}
                    aria-label={item.name}
                    role="button"
                  >
                    {item.name}
                  </button>
                  {itemIndex < items.length - 1 && ', '}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}