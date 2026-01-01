import React from 'react';
import { useGetCategoriesQuery } from '../api/filterApi';
import type { FilterOption } from '../model/types';

interface CategoryFilterProps {
  selectedCategory?: string;
  onCategoryChange: (category: string | undefined) => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onCategoryChange(value === '' ? undefined : value);
  };

  if (isLoading) return <div className="text-sm text-gray-500">Loading categories...</div>;
  if (isError) return <div className="text-sm text-red-500">Error loading categories</div>;

  return (
    <div className="mb-4">
      <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">
        Category:
      </label>
      <select
        id="category-filter"
        value={selectedCategory || ''}
        onChange={handleChange}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
      >
        <option value="">All Categories</option>
        {categories?.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
