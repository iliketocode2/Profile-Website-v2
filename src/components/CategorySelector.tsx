'use client'

import { motion } from 'framer-motion';
import { Monitor, Settings, LayoutGrid } from 'lucide-react'; // Example icons

const icons = {
  'All': <LayoutGrid size={16} />,
  'Computer Science': <Monitor size={16} />,
  'Mechanical Engineering': <Settings size={16} />
};

type Category = 'Computer Science' | 'Mechanical Engineering' | 'All';

interface CategorySelectorProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function CategorySelector({ selectedCategory, onCategoryChange }: CategorySelectorProps) {
  const categories: Category[] = ['All', 'Computer Science', 'Mechanical Engineering'];

  return (
    <div className="flex p-1 bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-md rounded-xl w-fit mx-auto border border-gray-200 dark:border-gray-800">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`relative px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
            selectedCategory === category 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          {/* The Sliding Highlight */}
          {selectedCategory === category && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200/50 dark:border-gray-700/50"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          
          <span className="relative z-10 flex items-center gap-2">
            {icons[category]}
            {category}
          </span>
        </button>
      ))}
    </div>
  );
}