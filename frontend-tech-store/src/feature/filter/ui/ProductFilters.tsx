import React from 'react';
import CategoryFilter from './CategoryFilter';
import BrandFilter from './BrandFilter';
import RatingFilter from './RatingFilter';
import type { FilterState } from '../model/types';

interface ProductFiltersProps {
  filterState: FilterState;
  onFilterChange: (newFilterState: FilterState) => void;
}

export default function ProductFilters({ filterState, onFilterChange }: ProductFiltersProps) {
  const handleCategoryChange = (category: string | undefined) => {
    onFilterChange({
      ...filterState,
      selectedCategory: category
    });
  };

  const handleBrandChange = (brand: string | undefined) => {
    onFilterChange({
      ...filterState,
      selectedBrand: brand
    });
  };

  const handleRatingChange = (ratingRange: { min: number; max: number } | undefined) => {
    onFilterChange({
      ...filterState,
      ratingRange: ratingRange
    });
  };

  const clearAllFilters = () => {
    onFilterChange({
      selectedCategory: undefined,
      selectedBrand: undefined,
      ratingRange: undefined
    });
  };

  const hasActiveFilters = filterState.selectedCategory || filterState.selectedBrand || 
    (filterState.ratingRange?.min || filterState.ratingRange?.max);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear All
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        <CategoryFilter
          selectedCategory={filterState.selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        
        <BrandFilter
          selectedBrand={filterState.selectedBrand}
          onBrandChange={handleBrandChange}
        />
        
        <RatingFilter
          ratingRange={filterState.ratingRange}
          onRatingChange={handleRatingChange}
        />
      </div>
    </div>
  );
}
