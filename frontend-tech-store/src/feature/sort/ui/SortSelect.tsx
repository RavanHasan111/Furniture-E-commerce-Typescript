import React from 'react';
import type { SortOption } from '../model/types';

interface SortSelectProps {
  onSortChange: (sortBy: string, order: string) => void;
  currentSort?: string;
}

const sortOptions: SortOption[] = [
  { value: 'price-asc', label: 'Price: Low to High', sortBy: 'price', order: 'asc' },
  { value: 'price-desc', label: 'Price: High to Low', sortBy: 'price', order: 'desc' },

];

export default function SortSelect({ onSortChange, currentSort }: SortSelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = sortOptions.find(option => option.value === e.target.value);
    if (selectedOption) {
      onSortChange(selectedOption.sortBy, selectedOption.order);
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor="sort-select" className="block text-sm font-medium text-gray-700 mb-2">
        Sort by:
      </label>
      <select
        id="sort-select"
        value={currentSort || ''}
        onChange={handleChange}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Default</option>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
