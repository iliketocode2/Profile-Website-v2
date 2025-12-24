'use client'

import { motion } from 'framer-motion';

type Category = 'Computer Science' | 'Mechanical Engineering' | 'All';

interface CategoryTabsProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function CategoryTabs({ selectedCategory, onCategoryChange }: CategoryTabsProps) {
  const categories: Category[] = ['All', 'Computer Science', 'Mechanical Engineering'];

  return (
    <div className="flex items-center gap-1 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`relative px-3 py-1 text-xs font-medium transition-colors duration-200 ${
            selectedCategory === category 
              ? 'text-gray-900 dark:text-white' 
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          {selectedCategory === category && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 border-b-2 border-gray-900 dark:border-white"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
}

