import React from 'react';
import { useGetBrandsQuery } from '../api/filterApi';

interface BrandFilterProps {
  selectedBrand?: string;
  onBrandChange: (brand: string | undefined) => void;
}

export default function BrandFilter({ selectedBrand, onBrandChange }: BrandFilterProps) {
  const { data: brands, isLoading, isError } = useGetBrandsQuery();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onBrandChange(value === '' ? undefined : value);
  };

  if (isLoading) return <div className="text-sm text-gray-500">Loading brands...</div>;
  if (isError) return <div className="text-sm text-red-500">Error loading brands</div>;

  return (
    <div className="mb-4">
      <label htmlFor="brand-filter" className="block text-sm font-medium text-gray-700 mb-2">
        Brand:
      </label>
      <select
        id="brand-filter"
        value={selectedBrand || ''}
        onChange={handleChange}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
      >
        <option value="">All Brands</option>
        {brands?.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}
